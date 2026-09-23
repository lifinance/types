# Bump rules — @lifi/types

Package name for the changeset frontmatter: `"@lifi/types"`.

## Needs a changeset

| Change | Bump |
|---|---|
| New optional field, new type, new enum value or union member | minor |
| New runtime constant exported from `src/` (for example an `as const` list) | minor |
| Doc-comment fix, or a type fix that cannot break consumers (for example widening a field that consumers only pass in, such as a request field) | patch |
| Removed or renamed export, optional field made required, narrowed type, removed union member or constant value, a field that consumers read made nullable or wider (for example adding `null`) | major |

When unsure, ask: can existing consumer code stop compiling? If yes, the bump is `major`.

## No changeset

- Only icons in `src/assets/**`. They are not in the npm package; GitHub Pages and
  raw.githubusercontent.com serve them from `main`, so merging the PR is the release.
- Only `tests/`, CI, docs, tooling or config files.

## Notes

- The PR title prefix is only a hint: `feat:` usually means minor and `fix:` usually means
  patch, but the changeset decides. A breaking change is major even if the title says `feat:`.
- Consumers (`@lifi/sdk`, `@lifi/data-types`, backend clients) pin exact versions and pick up
  a release only when they bump the pin.
