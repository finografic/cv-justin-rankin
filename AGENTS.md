# AGENTS.md — AI Assistant Guide

## Project Memory Model

- `docs/todo/ROADMAP.md` = milestone plan and completed history.
- `docs/todo/NEXT_STEPS.md` = near-term tasks and manual checks.
- `.agents/handoff.md` = stable current project state.
- `.agents/memory.md` = chronological session log.

Promote durable findings from memory → handoff, priorities → roadmap, and concrete follow-ups → next steps.

Reference: [`docs/process/PROJECT_MEMORY_MODEL.md`](./docs/process/PROJECT_MEMORY_MODEL.md)

---

## Roadmap and Planning Docs

- Check `ROADMAP.md` before proposing new initiatives.
- Use `NEXT_STEPS.md` for small follow-ups and manual validation.
- Keep detailed plans in `docs/todo/TODO_*.md`; graduate completed plans to `DONE_*.md`.
- Follow `.github/instructions/documentation/todo-done-docs.instructions.md`.

---

## Rules — Project-Specific

- Project-specific rules live in `.github/instructions/project/**/*.instructions.md`.
- Do not reference `@workspace/*` — all imports and deps must use published package names.

## Rules — Global

Rules are canonical in `.github/instructions/` — see `README.md` there for folder structure.
Shared across Claude Code, Cursor, and GitHub Copilot.

**General**

- General baseline: `.github/instructions/general.instructions.md`

**Code**

- TypeScript patterns: `.github/instructions/code/typescript-patterns.instructions.md`
- Modern TS patterns: `.github/instructions/code/modern-typescript-patterns.instructions.md`
- Oxlint & style: `.github/instructions/code/linting-code-style.instructions.md`
- Provider/context patterns: `.github/instructions/code/provider-context-patterns.instructions.md`
- Picocolors CLI styling: `.github/instructions/code/picocolors-cli-styling.instructions.md`

**Naming**

- File naming: `.github/instructions/naming/file-naming.instructions.md`
- Variable naming: `.github/instructions/naming/variable-naming.instructions.md`

**Documentation**

- Documentation: `.github/instructions/documentation/documentation.instructions.md`
- README standards: `.github/instructions/documentation/readme-standards.instructions.md`
- Agent-facing markdown: `.github/instructions/documentation/agent-facing-markdown.instructions.md`
- Feature design specs: `.github/instructions/documentation/feature-design-specs.instructions.md`
- TODO/DONE docs: `.github/instructions/documentation/todo-done-docs.instructions.md`

**Git**

- Git policy: `.github/instructions/git/git-policy.instructions.md`

---

## Rules — Markdown Tables

- Padded pipes: one space on each side of every `|`, including the separator row.
- **Do NOT manually align column widths or pad cells to equal width.** `oxfmt` (run automatically
  by lint-staged on commit and by `pnpm format:fix`) fixes table alignment automatically. Spending
  tokens counting characters and iterating on spacing is wasted effort — write the content, let the
  formatter handle alignment.

---

## Git Policy

- Do not include `Co-Authored-By` lines in commit messages.
- `.github/instructions/git/git-policy.instructions.md` (see Commits and Releases sections)

---

## Cursor

- Always-on rules: `.cursor/rules/` (`alwaysApply` — entry point is `AGENTS.md`, same as `CLAUDE.md`)

---

## Learned User Preferences

- Work stays local — no pushes, PRs, or merges unless explicitly asked; user squashes/reorders history locally.
- Set commit author to `Justin Rankin <justin.blair.rankin@gmail.com>`; user handles GPG signing.
- Do not create commits unless the user explicitly asks.
- Follow repo `git-policy.instructions.md` over generic Cursor user-rule commit templates.
- When changing typography, prepend new body fonts to the stack and keep existing fallbacks unless asked to remove a family.
- Prefer print-only typography/layout tweaks in `print.styles.ts` and `condensed.styles.ts` over changing screen component styles.
- Keep `source.organizeImports` off; use `source.addMissingImports: explicit` for imports.

---

## Learned Workspace Facts

- Personal CV site: React 19, TypeScript, Vite, Emotion, `@finografic/design-system`.
- Web CV data: `src/data/web/` → `CONTENT`; condensed/print: `src/data/print/` → `PRINT_CONTENT`; condensed URL: `?view=condensed`.
- GitHub Pages deploys on push to `master` via `.github/workflows/deploy.yml`; `actions/deploy-pages` can fail transiently (rerun failed job).
- Production URL: `https://finografic.github.io/cv-justin-rankin/` with Vite `base` `/cv-justin-rankin/` (trailing slash required).
- Body fonts: self-hosted Roboto + Geist; headings use Raleway (Google Fonts).
- Panda CSS entry: `src/styles/theme.css` via PostCSS; `styled-system/styles.css` is generated, not imported by the app.
- `jsxFramework: 'react'` required in `panda.config.ts`; Vite aliases must mirror `tsconfig` paths (`assets`, `styles`, `@styled-system/*`, etc.).
- `DescriptionText` parses HTML links (web) and Markdown links (print) for inline project description links.
- Print layout in `src/styles/print.styles.ts`; condensed styling in `src/styles/condensed.styles.ts`.
- `pnpm sync-git-metadata` updates GitHub commit counts in web/print project data files.
- Cursor always-on agent rules live in `.cursor/rules/` (tracked via `!.cursor/rules/**` in `.gitignore`).
- `CLAUDE.md` points at `@AGENTS.md`; `.cursor/rules/` provides alwaysApply pointers to the same index.

---
