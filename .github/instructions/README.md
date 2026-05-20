# .github/instructions — AI Instruction Files

Rules and conventions loaded automatically by Claude Code, Cursor, GitHub Copilot, and other
AI coding tools. Files use the `.instructions.md` suffix. `README.md` (this file) is not loaded
as a rule file — it exists purely for navigation and to define how this folder is maintained.

---

## Folder Structure

| Folder           | Contents                                                                   |
| ---------------- | -------------------------------------------------------------------------- |
| (root)           | `general.instructions.md` — baseline rules that apply everywhere           |
| `code/`          | TypeScript patterns, ESLint/oxlint style, code conventions, CLI styling    |
| `naming/`        | File naming, variable naming, identifier conventions                       |
| `documentation/` | Documentation standards, README rules, agent-facing markdown, design specs |
| `git/`           | Commit conventions, branch policy, release process                         |
| `project/`       | Project-specific constraints — not part of the shared convention set       |

---

## How to Add a New Instruction File

1. Pick the folder using the table above.
2. Name it descriptively — no numeric prefix: `my-topic.instructions.md`.
3. If the rule applies only to this repository (not a general convention), put it in `project/`.
4. Add an entry to the relevant section in `/AGENTS.md` so agents know it exists.

---

## Rules for This Directory

- **No numeric prefixes.** Names must be descriptive, not ordered. Order implies priority; these files have none.
- **One concern per file.** If a file spans two unrelated topics, split it.
- **General rules** that don't belong in any subfolder go in `general.instructions.md` at the root.
- **`project/`** is strictly for repository-specific constraints. Everything else is reusable convention.
- **Don't add an index here.** `/AGENTS.md` is the cross-agent entry point; this README explains structure.
