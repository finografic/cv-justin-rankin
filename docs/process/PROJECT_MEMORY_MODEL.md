# Project Memory Model

> Reference and setup guide for the file-role system used in this repo.
> This document is intentionally portable: it can be dropped into another repo and used by an
> agent to install or repair the same structure there.

---

## Exact AGENTS.md Blocks

Paste these blocks into `AGENTS.md` as prominent top-level sections:

```md
## Project Memory Model

- `docs/todo/ROADMAP.md` = milestone plan, near-term tasks, and completed history.
- `.agents/handoff.md` = stable current project state.
- `.agents/memory.md` = chronological session log.

Promote durable findings from memory → handoff, priorities and follow-ups → roadmap.

Reference: [`docs/process/PROJECT_MEMORY_MODEL.md`](./docs/process/PROJECT_MEMORY_MODEL.md)

## Roadmap and Planning Docs

- Check `ROADMAP.md` before proposing new initiatives.
- Use `ROADMAP.md#next` for small follow-ups and manual validation.
- Keep detailed plans in `docs/todo/TODO_*.md`; graduate completed plans to `DONE_*.md`.
- Follow `.github/instructions/documentation/todo-done-docs.instructions.md`.
```

---

## Roles of the Files

For TODO/DONE naming, lifecycle, and formatting rules, use:

- `.github/instructions/documentation/todo-done-docs.instructions.md`

### `docs/todo/ROADMAP.md`

Use for:

- `## Next` near-term implementation tasks, manual checks, and small follow-ups
- priority tiers such as `P0`, `P1`, `P2`, `P3`
- feature and architecture initiatives
- completed milestone-scale work in the Done table

Do not use for:

- session notes
- half-finished investigation details
- long chronological narratives

### `.agents/handoff.md`

Use for:

- what exists right now
- architecture, package roles, boundaries, and conventions
- current roadmap state in one short section
- open questions that matter to the next agent

Rules:

- write in present tense
- describe current truth, not historical play-by-play
- keep it concise and durable

### `.agents/memory.md`

Use for:

- current session checklist
- recent discoveries
- temporary context needed to resume work
- short chronological session summaries

Rules:

- this is working memory, not a second roadmap
- keep only the recent tail unless there is a strong reason to preserve more
- if something becomes stable project truth, move it to `handoff.md`
- if something becomes a priority, follow-up, or milestone completion, record it in `ROADMAP.md`

---

## Promotion Rules

When information changes category, move it upward:

1. Session note or partial finding starts in `.agents/memory.md`.
2. If it becomes stable current truth, summarize it in `.agents/handoff.md`.
3. If it changes project priority, creates concrete next actions, or completes a milestone, reflect it in
   `ROADMAP.md`.

This prevents the same content from being copied everywhere.

---

## Setup in a New Repo

If another repo does not yet use this system, install it like this:

1. Ensure `AGENTS.md` exists at repo root and add the exact block above.
2. Create `docs/todo/ROADMAP.md` if missing, including a `## Next` section.
3. Create `.agents/handoff.md` for the current-state snapshot.
4. Create `.agents/memory.md` for session logging.
5. If the repo already has `.claude/memory.md`, move the real content into `.agents/memory.md`, then
   delete `.claude/memory.md`.
6. If the repo already has `docs/todo/NEXT_STEPS.md`, move useful content into `ROADMAP.md#next`, then
   delete `NEXT_STEPS.md`.
7. Ensure ignore rules allow `.agents/handoff.md` to be tracked while keeping `.agents/memory.md`
   gitignored unless the repo intentionally wants it tracked.
8. If the repo already has TODO/DONE docs, keep using the existing TODO/DONE instruction file for
   naming and lifecycle rules rather than redefining those rules here.

Suggested ignore pattern:

```gitignore
.agents/*
!.agents/
!.agents/handoff.md
```

---

## Repair in an Older Repo

If the repo already has some version of these files but they are stale or mixed together:

1. Read the existing roadmap, handoff, memory, and legacy next-steps documents.
2. Move milestone completions into the `ROADMAP.md` Done table.
3. Move current architecture truth into `.agents/handoff.md`.
4. Move session-like notes and partial context into `.agents/memory.md`.
5. Move useful `NEXT_STEPS.md` content into `ROADMAP.md#next`, then delete `NEXT_STEPS.md`.
6. Remove duplicated text that appears in multiple files.
7. Add the exact block to `AGENTS.md`.
8. Leave TODO/DONE structure rules in the existing project instruction file instead of copying them
   into this document.

Heuristic:

- if the note answers “what happened recently?”, it belongs in memory
- if it answers “what is true now?”, it belongs in handoff
- if it answers “what matters next?” or “what got completed at milestone scale?”, it belongs in roadmap

---

## Recommended Maintenance Cadence

- update `.agents/memory.md` during or at the end of a session
- update `.agents/handoff.md` after changes that affect architecture, conventions, priorities, or open questions
- update `ROADMAP.md#next` when near-term tasks change
- update the `ROADMAP.md` Done table only when milestone-scale work is actually complete

---

## Anti-Patterns

Avoid these:

- using `.agents/memory.md` as a second Done table
- writing long session history into `handoff.md`
- filling `ROADMAP.md` with tiny fixes outside the `## Next` section
- duplicating the same paragraph in all files
- leaving roadmap items marked active after the work has already moved into Done
