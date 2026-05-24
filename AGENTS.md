# AGENTS.md — AI Assistant Guide

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
- ESLint & style: `.github/instructions/code/eslint-code-style.instructions.md`
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
- Align column widths so all cells in the same column are equal width.

---

## Git Policy

- IMPORTANT: NEVER include `Co-Authored-By` lines in commit messages. Non-negotiable.
- `.github/instructions/git/git-policy.instructions.md` (see Commits and Releases sections)

---

## Claude Code — Session Memory and Handoff

> This section applies to Claude Code only. Other agents can ignore it.

- **Session log:** `.claude/memory.md` (gitignored) — maintenance rules are in that file.
- **Project state snapshot:** `.agents/handoff.md` (git-tracked) — maintenance rules are in that file.

---

## Learned User Preferences

- Do not create git commits unless the user explicitly asks.
- When changing typography, prepend new body fonts to the stack and keep existing fallbacks unless the user asks to remove a family entirely.
- For `@finografic/design-system`, ship prebuilt `dist/` from CI in the npm tarball; do not commit `dist/` or use postinstall build scripts.
- In this workspace, do not remove unused imports on save (`source.organizeImports: never`); sort only via `source.sortImports: explicit`. Keep `source.fixAll.oxc: explicit` for oxlint fixes without organize-imports cleanup.
- Prefer adding missing imports on save (`source.addMissingImports: explicit`) and TypeScript auto-import suggestions while typing.

## Learned Workspace Facts

- GitHub Pages deploys on push to `master` via `.github/workflows/deploy.yml`; `release.yml` (version tags) is for npm/GitHub Releases only, not the live CV site.
- Production URL: `https://finografic.github.io/cv-justin-rankin/` — Vite `base` is `/cv-justin-rankin/` (trailing slash required for assets); dev/preview `vite.config.ts` middleware 301-redirects `/cv-justin-rankin` to the slash URL (GitHub Pages does the same in production).
- Body font stack: `"Roboto", "Geist", sans-serif` with Roboto self-hosted under `public/fonts/roboto/`; headings use Raleway from Google Fonts.
- Panda CSS entry is `src/styles/theme.css` (PostCSS via `@pandacss/dev/postcss`); Vite runs PostCSS on imported CSS — token edits in `panda.config.ts` apply at build/dev time, not by importing `styled-system/styles.css` in app source (that file is Panda codegen output).
- `panda.config.ts` must include `./node_modules/@finografic/design-system/dist/**/*.recipe.js` for registry installs (published package has `dist/components/*.recipe.js`, not `src/components/`); when `pnpm link` points at the DS monorepo, also include `./node_modules/@finografic/design-system/src/**/*.{ts,tsx}`.
- `panda.config.ts` must set `jsxFramework: 'react'` so `styled-system/jsx` exists for `@finografic/design-system`.
- Vite aliases for `assets`, `styles`, `types`, `@styled-system/css`, and `@styled-system/jsx` must mirror `tsconfig` paths — TypeScript paths alone do not resolve in Vite; CV data types live under `src/types/` (`types` path alias).
- In dev, open `?ds-smoke=1` to show `DsSmokePanel` for `@finografic/design-system` component and recipe checks (dev-only, hidden from print); run `pnpm test:ds` for linked-package and render smoke checks in Node.
- Print layout in `src/styles/print.ts` uses a 50/50 `.cv-content-grid`; keep gold/Raleway accents via `theme.colors.accent` and `.cv-accent` — avoid print CSS that forces accent text to black.
- Site copy lives in `src/data/cv-content.ts`; when updating prose, sync from canonical markdown `CV_2026_CONTENT_FINAL_V2.md` in the sibling `__CV_2026__` content repo and diff before editing.

---
