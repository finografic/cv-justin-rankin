---
applyTo: '**/*.md'
description: Which agent-facing file owns which content — AGENTS.md, CLAUDE.md, CONTEXT.md, DESIGN.md, skills, handoff, memory, ADRs. Read before adding a paragraph to any agent-facing document.
---

# Agent Context Files

Every agent-facing file has one job and one owner. This file decides where a given piece of content
belongs, so the same rule is never written twice and no rule ends up in a file nothing reads.

## File map

| File                              | Job                                                   | Loading                      |
| --------------------------------- | ----------------------------------------------------- | ---------------------------- |
| `AGENTS.md`                       | Cross-tool entry point: always-on rules plus pointers | Always                       |
| `CLAUDE.md`                       | Claude Code adapter — `@AGENTS.md` plus Claude-only   | Always                       |
| `.cursor/rules/*.mdc`             | Cursor adapter, `alwaysApply: true`                   | Always                       |
| `.github/copilot-instructions.md` | Copilot adapter — pointer to `AGENTS.md`              | Always                       |
| `.agents/instructions/**`         | Detailed reusable rules by topic                      | On demand, via pointer       |
| `.claude/rules/*.md`              | Claude-only path-scoped rules (`paths:` frontmatter)  | On demand, on matching read  |
| `.agents/skills/**`               | Repeatable procedures                                 | On invocation                |
| `CONTEXT.md`                      | Domain language only — terms and relationships        | On demand                    |
| `CONTEXT-MAP.md`                  | Routes a multi-domain repo to local glossaries        | On demand                    |
| `DESIGN.md`                       | Design tokens and rationale                           | On demand, design tasks only |
| `.agents/handoff.md`              | What is true now                                      | On orientation               |
| `.agents/memory.md`               | What happened recently                                | Selectively                  |
| `docs/adr/**`                     | Durable decisions and their reasoning                 | On demand                    |
| `docs/**`                         | Reference, specs, process                             | On demand                    |

## Placement test

Ask in order. The first match wins.

1. **Would omitting it cause a rule violation on nearly every task?** → `AGENTS.md`.
2. **Does it apply only to one subtree or file class?** → a path-scoped rule (`.claude/rules/` with
   `paths:`, or an instruction file with a narrow `applyTo:`).
3. **Is it a reusable rule about how to write code or docs?** → `.agents/instructions/**`.
4. **Is it vocabulary or a domain relationship?** → `CONTEXT.md` or the project's existing glossary.
5. **Is it a visual token or design rule?** → `DESIGN.md`.
6. **Is it a repeatable procedure with steps?** → a skill.
7. **Is it a hard-to-reverse decision and its reasoning?** → an ADR, with a pointer from wherever
   the decision applies.
8. **Is it detailed reference, history, or a spec?** → `docs/`, retrieved just in time.
9. **Is it current work state?** → `handoff.md` (what is true) or `memory.md` (what happened) —
   never an instruction file.

## Worked examples

| Content                                                      | Destination                       | Why                                       |
| ------------------------------------------------------------ | --------------------------------- | ----------------------------------------- |
| "Never include `Co-Authored-By` in commits"                  | `AGENTS.md` + git instruction     | Applies to every task; must not be missed |
| "Use named parameters for functions with 2+ args"            | `.agents/instructions/code/**`    | Reusable code rule, read when coding      |
| "API routes live in `src/api/handlers/`"                     | `AGENTS.md` or nested `AGENTS.md` | Repo fact, not a reusable convention      |
| "A _Run_ is one execution of an agent against one task"      | `CONTEXT.md` or existing glossary | Domain vocabulary                         |
| "Primary is `#1A1C1E`, used for CTAs only"                   | `DESIGN.md`                       | Design token plus usage rule              |
| "To cut a release: bump, tag, publish, verify"               | A skill                           | Repeatable procedure with steps           |
| "We chose PandaCSS over Tailwind because…"                   | `docs/adr/`                       | Durable decision plus reasoning           |
| "Auth refactor is half-done; the token refresh path is next" | `.agents/handoff.md`              | Current state, not a rule                 |
| "Tried the regex approach, it broke on nested braces"        | `.agents/memory.md`               | Session finding                           |
| "Full MCP tool schema reference"                             | `docs/`                           | Detailed reference, retrieved on demand   |

## `AGENTS.md`

- Short repo-wide rules that must always apply, plus explicit pointers to everything else.
- Keep it under 200 lines. When it grows, move detail into an instruction file behind a pointer.
- Do not copy architecture history, changelogs, or narrative into it.
- Nested `AGENTS.md` only for genuinely local constraints. The closest file wins, so a nested file
  must never silently contradict root — if it overrides a root rule, say so in the nested file.
- Every pointer states **when** and **why** to read the target.

## `CLAUDE.md`

- Default content is exactly `@AGENTS.md`, plus Claude-only additions below it.
- Never duplicate rule text that already lives in `AGENTS.md`.
- `@` imports load at launch, so they organise content but do **not** reduce context cost. Splitting
  a large file into imports saves nothing — moving content behind a non-imported pointer does.
- Use `.claude/rules/` for Claude-only path-scoped rules; files without `paths:` load every session.

## `CONTEXT.md`

Glossary only: canonical terms, short definitions, important relationships, and flagged ambiguity
that still needs resolution.

It must not contain coding rules, implementation plans, architecture prose, session notes, or
duplicated ADRs.

**A project that already has a canonical glossary keeps it.** Do not introduce `CONTEXT.md` beside
an existing glossary under a different filename. Choose one, explicitly:

1. keep the existing file and route agents to it from `AGENTS.md` (default);
2. add a thin `CONTEXT.md` that points at it and defines nothing itself;
3. deliberately migrate, updating every reference in the same change.

A second independent glossary is never acceptable. When a repository genuinely holds two separate
domain languages, add `CONTEXT-MAP.md` routing to per-domain glossaries — but only after both
domains are identified, never pre-emptively.

## `DESIGN.md`

Follows the Google/Stitch DESIGN.md spec: YAML token frontmatter plus canonical markdown sections.

**Token canonicality is a per-project choice, declared in the file's `## Source of Truth` section:**

- the project has a design system → that system stays canonical and `DESIGN.md` mirrors it;
- the project has no design system → `DESIGN.md` frontmatter is canonical.

`DESIGN.md` is **not** canonical for tokens or components unless the project explicitly chooses
option two. Either way it is a mirror or the source — never a second independent definition.

Generate and enforce with the `generate-design-md` and `apply-design-md` skills; validate and sync
with `genx design`.

## Routers

A router is a role, not a filename. Route from the standard entry points — root `AGENTS.md` for
repo-wide routing, nested `AGENTS.md` for real subtree rules, a thin `CLAUDE.md` adapter,
path-scoped rules for tool-specific loading.

Do not introduce `ROUTER.md` or an equivalent until a real consumer proves the standard files
cannot express the routing.

## Anti-patterns

- The same rule written in `AGENTS.md` and an instruction file.
- A must-follow rule placed in an instruction file, which nothing loads automatically.
- A pointer with no reason attached, so the agent cannot tell whether the target matters.
- `handoff.md` used as a session log, or `memory.md` used as a second roadmap.
- A `CONTEXT.md` created next to an existing glossary.
- `DESIGN.md` listing tokens that contradict the project's design system.
