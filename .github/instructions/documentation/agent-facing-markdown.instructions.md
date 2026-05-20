# Agent-facing Markdown

Rules for how agent-consumed files (AGENTS.md, instructions, skills, specs) reference other files. These rules do NOT apply to user-facing documentation (README, CHANGELOG, docs/).

---

## 1. Use repo-root relative paths

All file references use paths relative to the project root — no leading slash, no traversal.

```md
✅ `.github/instructions/05-documentation.instructions.md`
✅ `AGENTS.md`
✅ `.github/skills/scaffold-feature/SKILL.md`

❌ `/AGENTS.md`
❌ `./helper.ts`
❌ `../AGENTS.md`
```

## 2. Wrap paths in backticks

Every file path is a code identifier — wrap it in backticks to prevent token splitting, accidental natural-language interpretation, and formatter line-wrapping.

```md
✅ `.github/instructions/05-documentation.instructions.md`

❌ .github/instructions/05-documentation.instructions.md
❌ split
across lines
```

## 3. Reference by path, not by description

Do not alias or paraphrase file locations. The path is the identifier.

```md
✅ `.github/instructions/05-documentation.instructions.md`

❌ "the documentation file"
❌ "see the instructions doc"
```

## 4. Prefer backtick paths over Markdown links

Default to backtick paths. A Markdown link signals "read this now" — use links only when the agent MUST read the target before proceeding (e.g. a skill referencing its paired instruction file).

```md
# Default — reference only (agent reads if relevant)

`.github/instructions/05-documentation.instructions.md`

# Exception — read-before-acting (use sparingly)

[scaffold-feature](/.github/skills/scaffold-feature/SKILL.md)
```

When a Markdown link is used, it MUST still use a repo-root relative path.

## 5. Group related references

When listing multiple files, group them by purpose.

```md
Skills:

- `.github/skills/scaffold-feature/SKILL.md`
- `.github/skills/scaffold-cli-help/SKILL.md`

Instructions:

- `.github/instructions/project/feature-patterns.instructions.md`
- `.github/instructions/project/cli-help-patterns.instructions.md`
```
