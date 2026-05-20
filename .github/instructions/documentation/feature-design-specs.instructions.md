# Design Specs

Rules for creating and maintaining design specification documents.

## Directory structure

| Directory      | Purpose                                     | Git tracked |
| -------------- | ------------------------------------------- | ----------- |
| `docs/specs/`  | Lasting design documents and architecture   | Yes         |
| `docs/drafts/` | Ephemeral planning artifacts and checklists | No          |

## When to write a spec

Write a spec when a change involves:

- A new architectural pattern or abstraction
- A non-obvious design decision with meaningful trade-offs
- A system that spans multiple features or modules
- A migration strategy that will be executed incrementally

Do NOT write a spec for bug fixes, routine changes, single-feature additions that follow an established pattern, or dependency updates.

## File conventions

- Location: `docs/specs/`
- Naming: `YYYY-MM-DD-<slug>.md` (e.g. `2026-04-07-diff-as-detection-design.md`)
- Date reflects when the spec was authored, not when implementation began

## Structure

Every spec should include these sections (adapt as needed):

```md
# <Title>

**Date:** YYYY-MM-DD
**Status:** Draft | Approved | Implemented | Superseded by <path>

## Goal

## Non-Goals

## Decision Summary

## Architecture

## Migration Strategy

## Risks

## Open Decisions
```

- **Goal** — what the change achieves in one paragraph
- **Non-Goals** — what is explicitly excluded from scope
- **Decision Summary** — the chosen approach and the rejected alternative(s), with brief rationale
- **Architecture** — types, module layout, data flow, key invariants
- **Migration Strategy** — how to get from current state to target state incrementally
- **Risks** — what could go wrong and how to mitigate
- **Open Decisions** — unresolved questions to be answered during implementation

## Lifecycle

- Specs are append-only for decisions — do not delete or rewrite history
- When a spec is fully implemented, update **Status** to `Implemented`
- When a spec is replaced by a newer design, update **Status** to `Superseded by <path>`
- Do not delete old specs — they document the reasoning trail

## Ephemeral planning artifacts

Task breakdowns, checklists, draft notes, manual test steps, and other throwaway planning docs belong in `docs/drafts/` (gitignored). They do NOT belong in `docs/specs/`.

## Triaging agent output

Agents may create planning artifacts in ad-hoc locations (`docs/superpowers/`, `.cursor/plans/`, `.claude/drafts/`, etc.). Use `pnpm triage:docs` to scan these locations and interactively move files to the correct destination. See `.github/skills/triage-docs/SKILL.md` for the full procedure.

## Cross-project applicability

These conventions apply to all `@finografic` repos. When `genx` scaffolds a new package, it can include `docs/specs/` and `docs/drafts/` in the template structure. The `docs/drafts/` gitignore entry should be part of the standard `.gitignore` template.
