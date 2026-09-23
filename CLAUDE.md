# @lifi/types

Shared TypeScript types for the LI.FI stack (SDK, widget, API clients). Most of `src/`
compiles to declarations, plus a few runtime constants. Icons in `src/assets/` are not
published to npm; GitHub Pages serves them from `main`.

## Commands

- `pnpm lint` / `pnpm lint:fix` — oxlint (`.oxlintrc.json`), warnings fail
- `pnpm format` / `pnpm format:check` — oxfmt (`.oxfmtrc.json`)
- `pnpm typecheck` — TypeScript 7 `tsc --noEmit` for `src/` and the type contract tests in `tests/`
- `pnpm build` — CJS, ESM and declarations into `src/_cjs`, `src/_esm`, `src/_types`

## Releases (Changesets)

- Every PR that changes the published package needs a changeset: `pnpm changeset` or
  `/changeset`. The `changeset` skill (`.claude/skills/changeset/`) picks the bump.
- No changeset for icon-only (`src/assets/**`), test, CI, docs or tooling changes.
- Never edit `version` in `package.json` or `CHANGELOG.md` by hand — the Version PR does it,
  and CI's `version-guard` fails other PRs that change `version`.
- Publishing, preview builds (`release-preview` label) and pitfalls: the `release` skill
  (`.claude/skills/release/SKILL.md`). Never rename `.github/workflows/publish.yaml`.

## Tooling notes

- pnpm 12: settings live in `pnpm-workspace.yaml`; `.npmrc` is only for auth. pnpm skips
  versions younger than 24 hours except `@lifi/*` (`minimumReleaseAgeExclude`).
- TypeScript 7 does not ship `tsserver`, so VS Code's built-in TypeScript support uses its
  bundled version. Install the "TypeScript 7" extension (`TypeScriptTeam.native-preview`) so
  the editor matches `pnpm typecheck`.
