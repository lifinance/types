---
name: changeset
description: >-
  Author a Changesets changeset (a `.changeset/*.md` file) for the current
  changes. Use this whenever a change affects what this repository publishes to
  npm and is about to be committed or opened as a PR, or whenever the user
  mentions a changeset, a version bump, release notes, or asks "what bump
  should this be". This repo releases with Changesets (not standard-version or
  commit-message bumps): a PR is released only if it carries a changeset, so
  adding one is part of finishing a change, even if the user didn't say
  "changeset" explicitly.
---

# Authoring a changeset

This repository publishes one npm package (its `name` is in `package.json`) and releases it
with **Changesets**. A PR that changes the published package carries a small
`.changeset/*.md` file that declares the bump. `changeset version` later consumes these
files into the version bump and `CHANGELOG.md`, in the bot's **chore: version packages** PR.

No changeset → no release for that change. The PR title prefix (`feat:`, `fix:`, `chore:`)
does **not** decide the release any more; it is only a hint for the bump. `changeset-bot`
comments a reminder on PRs without a changeset, but nothing blocks the merge — so adding
one is your job.

## Steps

1. **See what changed.** Fetch and diff against the base branch:
   ```bash
   git fetch origin main
   git diff --name-only origin/main...HEAD
   ```
   (Use the working tree too if changes aren't committed yet: `git status`.)

2. **Decide whether the change needs a release.** `references/bump-rules.md` lists what
   needs a changeset and what does not (for example tests, CI, docs and tooling need none).

3. **Pick the bump** (`major`, `minor` or `patch`) from `references/bump-rules.md`.

4. **Write the file.** Create `.changeset/<short-kebab-name>.md` in the exact format from
   `references/format.md`, or let the CLI write it:
   ```bash
   pnpm changeset add --minor <package-name> -m "<summary>"   # or --patch / --major
   ```
   `<package-name>` is the `name` in `package.json` (also listed in `bump-rules.md`). The
   summary becomes the changelog line, so write it for a reader of the release notes, not a
   commit log — **1–2 lines max, short but descriptive**.

5. **Confirm.** Run `pnpm changeset status --verbose` and check that the package bumps as
   intended.

6. **Commit and push it.** A changeset only counts once it's on the PR:
   ```bash
   git add .changeset/*.md
   git commit -m "chore: add changeset"
   git push   # no upstream yet? git push -u origin HEAD
   ```

## Key rules

- One package, so each changeset has exactly one line in its frontmatter.
- Skip changes that need no release (see `references/bump-rules.md`). Do not add an empty
  changeset (`pnpm changeset --empty`) as a placeholder: if only empty changesets are
  pending, no Version PR opens and releases stay blocked until a real changeset lands.
- Several changesets in one PR are fine when distinct changes deserve distinct changelog
  lines.
- Never edit `version` in `package.json` or `CHANGELOG.md` by hand. The Version PR does it.
