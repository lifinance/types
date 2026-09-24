---
description: Add a Changesets changeset for the changes on the current branch
---

Add a [Changesets](https://github.com/changesets/changesets) changeset describing the
changes on the current branch, so this work ships with the right version bump and a
changelog entry.

Use the **`changeset` skill** to do this. In short:

1. `git fetch origin main` then `git diff --name-only origin/main...HEAD` to see what
   changed.
2. Decide whether the change needs a release at all — see the skill's
   `references/bump-rules.md` (tests, CI, docs and tooling need none).
3. Choose the bump (`major` / `minor` / `patch`) from `references/bump-rules.md` and
   write `.changeset/<short-name>.md` in the format from `references/format.md`. Keep the
   summary to **1–2 lines** — short but descriptive.
4. Commit the changeset and push it so it lands on the open PR:
   `git add .changeset/*.md && git commit -m "chore: add changeset" && git push`.

$ARGUMENTS
