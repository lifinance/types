# Changeset file format

A changeset is a markdown file in `.changeset/` with a YAML frontmatter block that maps the
package name to a bump type, followed by a summary that becomes the changelog entry.

## Shape

```markdown
---
"@lifi/types": minor
---

A human-readable summary of the change. This text is copied verbatim into CHANGELOG.md and
the GitHub Release, so write it for someone reading release notes — what changed and why it
matters, not "fix bug". Keep it to 1–2 lines max.
```

- **Bump values:** `major`, `minor` or `patch`.
- **Filename:** any unique name ending in `.md`. `pnpm changeset` generates a random one
  (e.g. `fenced-stories-add.md`); a descriptive kebab-case name like
  `add-refund-address.md` is also fine.
- **Summary:** the first paragraph is the changelog line. **Keep it to 1–2 lines max —
  short but descriptive.** Markdown is allowed; the changelog generator adds the PR link,
  the commit link and "Thanks @author!" automatically, so do not add them by hand.
- Single or double quotes around the package name both work.

## Worked examples

**A new optional field:**
```markdown
---
"@lifi/types": minor
---

Add optional `refundAddress` to `QuoteRequest` and `Action`.
```

**A type fix that does not break consumers:**
```markdown
---
"@lifi/types": patch
---

Allow `null` for `Token.priceUSD` to match what the API returns for unpriced tokens.
```

**A breaking change:**
```markdown
---
"@lifi/types": major
---

Remove the deprecated `StatusResponse.substatusMessage`.
Migration: read `StatusResponse.substatusDetails` instead.
```

## Lifecycle (why `.changeset/` looks empty on main)

`changeset version` (run by the bot's **chore: version packages** PR) **consumes and
deletes** every `*.md` changeset, rolling them into the version bump and `CHANGELOG.md`. So
between releases `.changeset/` holds only `config.json` and `README.md`. An empty
`.changeset/` is the normal resting state, not a sign that something was lost.
