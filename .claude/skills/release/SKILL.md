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
3. **Release** — runs on every push to `main`, independent of Version and of pending
   changesets: on `main` the `version` in `package.json` only changes through a merged
   Version PR. `.github/scripts/release-version-check.sh` first decides whether npm lacks
   that version; if npm has it, the job stops there (no install, no build). Otherwise it
   refuses the version unless (a) it has no prerelease suffix, (b) the commit that last
   changed `version` is `chore: version packages` by `github-actions[bot]`, and (c)
   `CHANGELOG.md` has its `## x.y.z` heading. Then `changesets/action/publish` runs
   `pnpm changeset:publish` (build + `changeset publish`), pushes the `vX.Y.Z` tag and
   creates the GitHub Release from the changelog section.

- npm auth is OIDC trusted publishing, bound to the file name `publish.yaml`. **Never rename
  it.** No `NPM_TOKEN` exists or is needed. Provenance comes from `NPM_CONFIG_PROVENANCE: true`.
- The Version PR is opened with `GITHUB_TOKEN`, so no `pull_request` workflow runs on it.
  That is expected: Verify runs on the push to `main` before Release.
- To re-run a release after a failed npm publish, use **Run workflow** on `publish.yaml`
  (`workflow_dispatch`) on `main`. If npm already has the version but the tag or the GitHub
  Release is missing, a re-run does nothing — see "Recovering a release" below.
- Concurrency is per job (`changesets-version`, `changesets-release`, `preview-<PR>`).
  GitHub keeps one pending job per group, so a newer pending job replaces an older one:
  harmless for Version (the newest run computes from the newest `main`); for Release the
  newest run publishes the newest version, and a middle version is skipped only if two
  Version PRs merge while a release runs. Other labels never cancel a preview (skipped
  jobs do not join a group).

## Versions change only in the Version PR

- `tests.yaml` has a `version-guard` job (`.github/scripts/version-guard.sh`): a PR that
  changes `version` in `package.json` fails unless it is the Version PR
  (`changeset-release/main` from this repository).
- `main` has no required status checks, so a red `version-guard` does not block a merge.
  The Release job's version check is the backstop (see step 3 above). The real fix is
  branch rules that require `check` and `version-guard`.
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
- The PR must **add** a changeset of its own. Changesets that are already on `main` (merged
  but not versioned) do not count; without one the job only warns and publishes nothing.
- Re-adding the label on the same commit publishes nothing (that preview version is already
  on npm). Push a new commit for a new preview.

## The published manifest

`changeset publish` calls `pnpm publish`, which runs the `prepublishOnly` hook
(`node scripts/prepublishOnly.js`). The hook rewrites `package.json` in place to the minimal
published manifest (no `type`, `scripts`, `devDependencies`, …) and leaves a
`package.json.tmp` backup. That is fine in CI's throwaway checkout — never run it locally
without restoring the file. The hook also refuses to publish when the build output
(entry points and the `_cjs`/`_esm` module-type files) is missing.

The SDK needs `pnpm --config.verify-deps-before-run=false` because it rewrites manifests
before `changeset publish`. This repo does not: the rewrite happens inside `pnpm publish`,
and pnpm 12 does not verify dependencies for it.

## Changesets v3 / changesets/action v2 pitfalls

- `format: false` in `.changeset/config.json` is deliberate: Changesets must not reformat
  `CHANGELOG.md` (it keeps the old standard-version history). oxfmt ignores `CHANGELOG.md`
  and `.changeset/*.md` too, so changesets written by `changeset-bot` or the web editor pass
  `format:check`.
- `changeset version` exits 1 when there are no changesets. Guard any unconditional call
  (see the preview action).
- Only **empty** changesets pending → no Version PR opens until a real changeset lands
  (Release is not affected: it does not wait for pending changesets).
- Action v2 inputs/outputs are kebab-case (`version-script`, `publish-script`, `pr-title`,
  `commit-message`, `create-github-releases`, `has-changesets`). v1 input names make the
  action fail; v1 output names (`hasChangesets`, `publishedPackages`) are silently empty.
  The Release job uses the `changesets/action/publish` sub-action (input `script`), which
  publishes without the Version logic.
- Do not set `env: GITHUB_TOKEN` on the action step — v2 throws on a mismatch and injects its
  own token (changelog-github reads it).
- `changeset publish` reports published packages to the action through the file named in
  the `CHANGESETS_OUTPUT` env var. Keep it flowing through `pnpm changeset:publish`, or tags
  and GitHub Releases are silently skipped.
- This is a single-package repo, so tags are `vX.Y.Z` (the same format as the old
  standard-version tags). `pnpm changeset publish-plan` prints
  `No projects to publish or tag.` when the current version is already on npm.

## Recovering a release

If the npm publish succeeded but the tag or the GitHub Release is missing (for example an
API error after the upload), a re-run cannot fix it: `changeset publish` skips versions
npm already has. Create both by hand from the Version PR's merge commit:

```bash
V=18.13.0                              # the published version
SHA=<merge commit of the Version PR>   # gh pr view <n> --json mergeCommit --jq .mergeCommit.oid
git tag "v$V" "$SHA" && git push origin "v$V"   # push at once: fetch.pruneTags deletes unpushed tags
awk -v h="## $V" '$0 == h {f=1; next} /^## / {f=0} f' CHANGELOG.md > "$TMPDIR/notes.md"
gh release create "v$V" --verify-tag --title "v$V" --notes-file "$TMPDIR/notes.md"
```

## Dist-tags

`latest` (stable) and `preview` (PR builds) are the only live dist-tags. Nothing removes old
tags automatically; remove stale ones with `npm dist-tag rm <package> <tag>` (needs an npm
login with 2FA).
