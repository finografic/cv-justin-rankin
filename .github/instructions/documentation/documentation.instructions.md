# Documentation Rules

## Date Tags

- Add a date tag on line 3: `📅 Dec 15, 2025`.
- Keep a blank line after the tag.
- Update for significant changes; skip minor edits.

## When to Document

- Large refactors, complex systems, major features, explicit user requests, architectural decisions.

## Structure

1. H1 title
2. Date tag on line 3
3. Blank line
4. Organized sections (H2/H3)
5. Clear, concise content with examples when helpful

## Markdown Links

- Use markdown link syntax when referencing another document — not bare paths or backtick references.
- Use absolute paths from the repo root: examples:
  - `[AGENTS.md](/AGENTS.md)`
  - `[00-general.instructions.md](/.github/instructions/00-general.instructions.md)`.
- Exception: prose references to `memory.md` and `handoff.md` in session-context blocks do not require links.
- Prefer em-dash `—` over hyphen-minus `-` as a heading separator — it produces a cleaner `--` slug.

### Anchor slugification

When linking to a specific section, append `#<slug>` to the path:

- Use a single `#` regardless of the target heading level (H1–H6).
- Slugify: lowercase, strip characters that are not alphanumeric, spaces, or hyphens; convert spaces to hyphens.
- **Em-dash `—`** is stripped; surrounding spaces become hyphens → `--`
  - `## Skills — Check Before Implementing` → `#skills--check-before-implementing`
- **Hyphen-minus `-`** is kept; surrounding spaces also become hyphens → `---`
  - `## Rules — Global` → `#rules--general`

### Confirm before writing

Before writing any link:

1. Verify the target file exists.
2. For anchor links: read the file, find the exact heading text, derive the slug — do not guess.

## Comments vs Docs

- Use JSDoc for inline code.
- Use markdown for architecture/refactors/system docs.
