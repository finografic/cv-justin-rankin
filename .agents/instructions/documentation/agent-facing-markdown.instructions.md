---
applyTo: '**/*.md'
description: How agent-consumed files reference other files. Read before adding a pointer to any agent-facing doc.
---

# Agent-facing Markdown

Rules for how agent-consumed files (AGENTS.md, instructions, skills, specs) reference other files. These rules do NOT apply to user-facing documentation (README, CHANGELOG, docs/).

---

## 1. Use repo-root relative paths

All file references use paths relative to the project root — no leading slash, no traversal.

```md
✅ `.agents/instructions/documentation/documentation.instructions.md`
✅ `AGENTS.md`
✅ `.agents/skills/maintain-agents/SKILL.md`

❌ `/AGENTS.md`
❌ `./helper.ts`
❌ `../AGENTS.md`
```

## 2. Wrap paths in backticks

Every file path is a code identifier — wrap it in backticks to prevent token splitting, accidental natural-language interpretation, and formatter line-wrapping.

```md
✅ `.agents/instructions/documentation/documentation.instructions.md`

❌ .agents/instructions/documentation/documentation.instructions.md
❌ split
across lines
```

## 3. Reference by path, not by description

Do not alias or paraphrase file locations. The path is the identifier.

```md
✅ `.agents/instructions/documentation/documentation.instructions.md`

❌ "the documentation file"
❌ "see the instructions doc"
```

## 4. Prefer backtick paths over Markdown links

Default to backtick paths. A Markdown link signals "read this now" — use links only when the agent MUST read the target before proceeding (e.g. a skill referencing its paired instruction file).

```md
# Default — reference only (agent reads if relevant)

`.agents/instructions/documentation/documentation.instructions.md`

# Exception — read-before-acting (use sparingly)

[maintain-agents](.agents/skills/maintain-agents/SKILL.md)
```

When a Markdown link is used, it MUST still use a repo-root relative path — no leading slash.

## 5. State when and why to read the target

A bare path tells the agent a file exists, not whether it matters right now. Because instruction
files are loaded on demand rather than automatically, a pointer without a reason is routinely
skipped.

Every pointer names the trigger condition, the target, and what the target decides.

```md
✅ Before any commit, push, or tag: `.agents/instructions/git/git-policy.instructions.md`
✅ When adding a provider: `.agents/instructions/code/provider-context-patterns.instructions.md`
   — defines the required 3-file structure.

❌ See `.agents/instructions/git/git-policy.instructions.md`
❌ Relevant: `.agents/instructions/code/provider-context-patterns.instructions.md`
```

## 6. Group related references

When listing multiple files, group them by purpose.

```md
Skills:

- `.agents/skills/maintain-agents/SKILL.md`
- `.agents/skills/scaffold-cli-help/SKILL.md`

Instructions:

- `.agents/instructions/project/feature-patterns.instructions.md`
- `.agents/instructions/project/cli-help-patterns.instructions.md`
```
