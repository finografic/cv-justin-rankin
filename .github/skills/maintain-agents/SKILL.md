---
name: maintain-agents
description: Review and prune the ## Learned User Preferences and ## Learned Workspace Facts sections in AGENTS.md. AI IDEs (Cursor, Copilot) append entries to these sections automatically — they accumulate stale, basic, or redundant items over time and need periodic de-slopping.
trigger: User asks to clean up, review, prune, de-slop, or maintain AGENTS.md, or mentions the Learned sections are getting bloated
tools: [file-read, file-edit]
---

# Maintain AGENTS.md — Prune Learned Sections

AI IDEs (especially Cursor) append bullet points to `## Learned User Preferences` and
`## Learned Workspace Facts` after each session. Over time these sections bloat with
entries that are basic, redundant, outdated, or already covered by instruction files.
This skill describes the review-and-prune procedure.

## When to run

- User asks to "clean up", "review", "de-slop", or "prune" AGENTS.md
- Either Learned section exceeds ~8 entries
- After a long project phase — stale facts accumulate

## Step 1 — Read the current AGENTS.md

Read the full file. Identify every bullet in:

- `## Learned User Preferences`
- `## Learned Workspace Facts`

Note: these sections may be absent (nothing to do), or there may be only one of them.

## Step 2 — Evaluate each entry

Apply these criteria to every bullet. Be decisive — when in doubt, remove.

### Remove if the entry…

- States something **any competent TypeScript / Node developer would know** without being
  told (e.g. "prefer `const` over `let`", "use async/await", "always handle errors")
- **Duplicates** content already covered by a linked instruction file in `## Rules — Global`
  (read the instruction file briefly if unsure)
- References a **file, function, flag, or feature that no longer exists** in the repo
- Describes a **one-off workaround** for a bug that has since been fixed
- Is a **generic best practice** that applies to every JS/TS project equally
- Restates something **already explicit elsewhere in AGENTS.md** (e.g. in Rules sections)
- Is a **formatting micro-rule** already covered by the linter / oxfmt config

### Keep if the entry…

- Documents a **non-obvious project-specific pattern** that would trip up an AI without knowing it
- Records a **user preference that contradicts a common default** (e.g. unusual naming convention)
- Describes a **tooling quirk specific to this workspace** not derivable from the code
- Notes a **subtle distinction** — e.g. two similar utilities that are easy to confuse
- Has an implied history: it was written because an AI got it wrong, and it would get it wrong again

## Step 3 — Identify consolidation opportunities

Look for entries that overlap or repeat the same idea in slightly different words.
Merge them into a single, more precise bullet. Fewer, sharper entries beat many vague ones.

## Step 4 — Present the proposed changes

Before editing, list:

1. **Remove** — each entry to delete, with a one-phrase reason
2. **Merge** — any consolidations, showing before → after
3. **Keep** — count of entries that survive unchanged

Ask the user to confirm or adjust before writing anything.

## Step 5 — Apply the changes

After confirmation, edit AGENTS.md in place:

- Delete removed bullets
- Replace merged bullets with the consolidated version
- Preserve all other content exactly (headings, order, other sections)

Do **not** reorder the surviving entries unless the user asks.

## Step 6 — Commit

```
git add AGENTS.md
git commit -m "chore: prune Learned sections in AGENTS.md"
```

Keep the message factual. No bullet lists in the commit body — it is a housekeeping commit.
