# TODO, DONE, and Roadmap Documentation Conventions

Rules for planning docs, working docs, and completion records.

## Locations

- `docs/todo/` holds task-level planning docs and completion records
- `docs/ROADMAP.md` holds the repo or package roadmap
- `docs/todo/NEXT_STEPS.md` is optional for medium to large, actively evolving projects
- `docs/investigation/` is optional for deeper debugging, audits, and research
- `docs/taxonomy/` is optional for larger systems that need structure, domain models, or content maps

## File Naming

| State                   | Prefix  | Example                  |
| ----------------------- | ------- | ------------------------ |
| Active — work remaining | `TODO_` | `TODO_TERMINAL_PANEL.md` |
| Fully complete          | `DONE_` | `DONE_TERMINAL_PANEL.md` |

- Use underscore separators, not dots: `TODO_FEATURE_NAME.md`
- Keep `TODO_` while any tracked work remains
- Rename `TODO_` to `DONE_` only when the work is fully complete
- Do not delete completed docs; keep `DONE_` files in `docs/todo/`

## TODO and DONE Doc Format

- Title must match file state: `# TODO — Feature Name` or `# DONE — Feature Name`
- Add a status line immediately under the title
- Use absolute ISO dates: `YYYY-MM-DD`
- Use checklists for phased or multi-step work

Examples:

```markdown
# TODO — Terminal Panel
> **Status:** Phase 1 complete (2026-04-17). Phase 2 not started.
```

```markdown
# DONE — Terminal Panel
> **Completed:** 2026-04-16 — terminal panel shipped.
```

## Maintaining TODO Docs

- Update the doc as work progresses; do not leave it stale
- Keep implementation notes concise and action-oriented
- Use `- [ ]` and `- [x]` to show remaining vs completed work
- For larger docs, include a `## Done` section near the end for completed items or phases

## Graduation Checklist

When work is complete:

1. Rename `TODO_FEATURE_NAME.md` to `DONE_FEATURE_NAME.md`
2. Update the title from `# TODO` to `# DONE`
3. Replace the status line with a completion line
4. Update any links pointing to the old filename
5. If the work appears in `docs/ROADMAP.md` or `docs/todo/NEXT_STEPS.md`, update those references too

## ROADMAP.md

- Use `docs/ROADMAP.md`, not `docs/todo/ROADMAP.md`
- ROADMAP is for larger initiatives, themes, and sequencing
- Keep it concise and structured
- Include a `## Done` section at the end for completed roadmap items
- Link to supporting `TODO_` or `DONE_` docs when detail exists
- Do not use ROADMAP for session notes, small fixes, or manual testing checklists

## NEXT_STEPS.md

- `docs/todo/NEXT_STEPS.md` is optional
- Use it for medium to large projects that are active and growing
- Keep it near-term and action-oriented
- It can reference roadmap items, but should not replace `docs/ROADMAP.md`
- Good uses: follow-ups, manual testing, cleanup, short-horizon implementation tasks
