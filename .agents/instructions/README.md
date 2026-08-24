# .agents/instructions — AI Instruction Files

Reusable rules and conventions, read **on demand** via pointers from `AGENTS.md`. Files use the
`.instructions.md` suffix. `README.md` (this file) is not a rule file — it exists for navigation
and to define how this folder is maintained.

> **These files are not loaded automatically.** No supported tool auto-loads this tree: Claude Code
> follows backticked pointers only when it judges them relevant, and Copilot applies a file only
> when its `applyTo` glob matches. A rule that must never be missed belongs in `AGENTS.md` itself.
> See `docs/reference/AGENT_FILE_LOADING.md` and `docs/adr/0001-agent-instruction-file-architecture.md`.

---

## Folder Structure

| Folder           | Contents                                                                   |
| ---------------- | -------------------------------------------------------------------------- |
| (root)           | `general.instructions.md` — baseline rules that apply everywhere           |
| `code/`          | TypeScript patterns, oxlint style, code conventions, CLI styling           |
| `naming/`        | File naming, variable naming, identifier conventions                       |
| `documentation/` | Documentation standards, README rules, agent-facing markdown, design specs |
| `git/`           | Commit conventions, branch policy, release process                         |
| `project/`       | Project-specific constraints — not part of the shared convention set       |

---

## How to Add a New Instruction File

1. Pick the folder using the table above.
2. Name it descriptively — no numeric prefix: `my-topic.instructions.md`.
3. Add the required frontmatter (see below).
4. If the rule applies only to this repository (not a general convention), put it in `project/`.
5. Add a pointer in the relevant section of `AGENTS.md` that says **when and why** to read it.

## Required Frontmatter

Every `.instructions.md` file starts with:

```yaml
---
applyTo: '**'
description: One line — what it covers and when to read it.
---
```

- `applyTo` is a glob and is **required**: GitHub Copilot ignores path-scoped instruction files
  without it. Use `'**'` for genuinely universal rules, or narrow it
  (`'**/*.{ts,tsx}'`, `'**/*.md'`) so the file only loads where it applies.
- `description` is what an agent reads when deciding whether the file is relevant. Write it as a
  trigger, not a title.

---

## Rules for This Directory

- **No numeric prefixes.** Names must be descriptive, not ordered. Order implies priority; these files have none.
- **One concern per file.** If a file spans two unrelated topics, split it.
- **General rules** that don't belong in any subfolder go in `general.instructions.md` at the root.
- **`project/`** is strictly for repository-specific constraints. Everything else is reusable convention.
- **Don't add an index here.** `/AGENTS.md` is the cross-agent entry point; this README explains structure.
