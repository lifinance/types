---
name: release
description: >-
  How this package is versioned and published: the Changesets Version PR, the
  `publish.yaml` pipeline with npm trusted publishing, the `release-preview`
  label that publishes a throwaway `0.0.0-preview-<sha>` build, the
  `prepublishOnly` manifest rewrite, and the Changesets v3 / changesets/action v2
  pitfalls. Use this whenever the user asks about releasing, publishing, npm
  dist-tags (`latest`, `preview`), sharing an unmerged build, or is debugging
  `.github/workflows/publish.yaml`. NOT for writing a changeset or choosing a
  bump — that's the `changeset` skill.
---

# Releasing

Releases use **Changesets**; `standard-version` is gone. The pipeline lives in
`.github/workflows/publish.yaml` and runs on every push to `main`. Read it for the current
job graph rather than trusting a copy here.

For *authoring* a changeset and choosing the bump, use the **`changeset` skill** — this
skill starts where that one ends.

## The pipeline (push to `main`)

1. **Verify** — reuses `.github/workflows/tests.yaml` (lint, format check, typecheck, build,
   and unit tests where the repo has them).
2. **Version** — `changesets/action` runs `pnpm changeset version` on branch
   `changeset-release/main` and opens or updates the **chore: version packages** PR. That PR
   deletes the consumed `.changeset/*.md` files, bumps `version` in `package.json` and adds a
   section to `CHANGELOG.md`.
3. **Release** — runs only when no changesets are pending (normally the push that merges
   the Version PR). `pnpm changeset:publish` builds and runs `changeset publish`, which
   publishes only versions npm does not have yet, pushes the `vX.Y.Z` tag and creates the
   GitHub Release from the changelog section. On any other push it is a no-op.

- npm auth is OIDC trusted publishing, bound to the file name `publish.yaml`. **Never rename
  it.** No `NPM_TOKEN` exists or is needed. Provenance comes from `NPM_CONFIG_PROVENANCE: true`.
- The Version PR is opened with `GITHUB_TOKEN`, so no `pull_request` workflow runs on it.
  That is expected: Verify runs on the push to `main` before Release.
- To re-run a release after a failed publish, use **Run workflow** on `publish.yaml`
  (`workflow_dispatch`) on `main`.

## Versions change only in the Version PR

- `tests.yaml` has a `version-guard` job (`.github/scripts/version-guard.sh`): a PR that
  changes `version` in `package.json` fails unless its branch is `changeset-release/*`.
- There is no pre mode and no `alpha`/`beta` channel. Do not run `changeset pre enter`: pre
  mode leaks prerelease versions into `main` through squash merges.

## Preview releases (per PR, opt-in)

Add the **`release-preview`** label to a PR that has a changeset. The `preview` job in
`publish.yaml` (composite action `.github/actions/preview-publish`) publishes
`0.0.0-preview-<short-sha>` to the **`preview`** dist-tag, comments the exact `npm i` command
on the PR, and removes the label (re-add it for another preview).

- Install the exact version from the comment; `@preview` moves with the newest preview
  across PRs. `0.0.0-…` can never become `latest`.
- Same-repo branches only; applying a label needs Triage+. Never change the trigger to
  `pull_request_target`.
- No changeset in the PR → the job only warns and publishes nothing.

## The published manifest

`changeset publish` calls `pnpm publish`, which runs the `prepublishOnly` hook
(`node scripts/prepublishOnly.js`). The hook rewrites `package.json` in place to the minimal
published manifest (no `type`, `scripts`, `devDependencies`, …) and leaves a
`package.json.tmp` backup. That is fine in CI's throwaway checkout — never run it locally
without restoring the file. The hook also refuses to publish when the build output
(entry points and the `_cjs`/`_esm` module-type files) is missing.

`changeset publish` runs as `pnpm --config.verify-deps-before-run=false changeset publish`.
The flag is a harmless safeguard copied from the SDK, which rewrites its manifests before
`changeset publish`; pnpm 12 already turns the check off for children of `pnpm run`/`exec`.

## Changesets v3 / changesets/action v2 pitfalls

- `format: false` in `.changeset/config.json` is deliberate: Changesets must not reformat
  `CHANGELOG.md` (it keeps the old standard-version history). oxfmt ignores `CHANGELOG.md`
  and `.changeset/*.md` too, so changesets written by `changeset-bot` or the web editor pass
  `format:check`.
- `changeset version` exits 1 when there are no changesets. Guard any unconditional call
  (see the preview action).
- Only **empty** changesets pending → no Version PR opens and `has-changesets` stays true,
  so Release stays blocked until a real changeset lands.
- Action v2 inputs/outputs are kebab-case (`version-script`, `publish-script`, `pr-title`,
  `commit-message`, `create-github-releases`, `has-changesets`). v1 input names make the
  action fail; v1 output names (`hasChangesets`, `publishedPackages`) are silently empty, so
  the pipeline stays green and Release never runs.
- Do not set `env: GITHUB_TOKEN` on the action step — v2 throws on a mismatch and injects its
  own token (changelog-github reads it).
- `changeset publish` reports published packages to the action through the file named in
  the `CHANGESETS_OUTPUT` env var. Keep it flowing through `pnpm changeset:publish`, or tags
  and GitHub Releases are silently skipped.
- This is a single-package repo, so tags are `vX.Y.Z` (the same format as the old
  standard-version tags). `pnpm changeset publish-plan` prints
  `No projects to publish or tag.` when the current version is already on npm.

## Dist-tags

`latest` (stable) and `preview` (PR builds) are the only live dist-tags. Nothing removes old
tags automatically; remove stale ones with `npm dist-tag rm <package> <tag>` (needs an npm
login with 2FA).
