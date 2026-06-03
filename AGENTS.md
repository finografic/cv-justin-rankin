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
- ESLint & style: `.github/instructions/code/linting-code-style.instructions.md`
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
- Unless the user specifies the full view, treat requests as referring to the condensed view (`?view=condensed` / `AppPrint`). Legacy `?edition=print` still resolves to condensed.
- When changing typography, prepend new body fonts to the stack and keep existing fallbacks unless the user asks to remove a family entirely.
- For `@finografic/design-system`, ship prebuilt `dist/` from CI in the npm tarball; do not commit `dist/` or use postinstall build scripts.
- In this workspace, do not remove unused imports on save (`source.organizeImports: never`); sort only via `source.sortImports: explicit`. Keep `source.fixAll.oxc: explicit` for oxlint fixes without organize-imports cleanup.
- Prefer adding missing imports on save (`source.addMissingImports: explicit`) and TypeScript auto-import suggestions while typing.
- Prefer condensed-view typography and layout tweaks in `src/styles/condensed.styles.ts` rather than changing full-view screen component styles.
- In `AppPrint.tsx`, use `PRINT_CONTENT.*` property access directly; do not destructure `PRINT_CONTENT` at component scope.
- When updating condensed-view copy, apply text exactly from the user's print markdown handout; do not rewrite prose or make editorial or aesthetic choices unless asked.
- Prefer shared CV components with a `view` prop (`full` | `condensed`); use `?view=condensed` for the handout, not `edition`.
- With oxlint React preset and Vite `jsx: react-jsx`, keep `react/react-in-jsx-scope` off in `oxlint.config.ts`.

## Learned Workspace Facts

- GitHub Pages deploys on push to `master` via `.github/workflows/deploy.yml`; `release.yml` (version tags) is for npm/GitHub Releases only, not the live CV site. Production URL: `https://finografic.github.io/cv-justin-rankin/` — Vite `base` is `/cv-justin-rankin/` (trailing slash required for assets); dev/preview `vite.config.ts` middleware 301-redirects `/cv-justin-rankin` to the slash URL (GitHub Pages does the same in production).
- Body font stack: `"Roboto", "Geist", sans-serif` with Roboto self-hosted under `public/fonts/roboto/`; headings use Raleway from Google Fonts.
- Panda CSS entry is `src/styles/theme.css` (PostCSS via `@pandacss/dev/postcss`); Vite runs PostCSS on imported CSS — token edits in `panda.config.ts` apply at build/dev time, not by importing `styled-system/styles.css` in app source (that file is Panda codegen output).
- `panda.config.ts` must set `jsxFramework: 'react'` and include `./node_modules/@finografic/design-system/dist/**/*.recipe.js` for registry installs (published package has `dist/components/*.recipe.js`, not `src/components/`); when `pnpm link` points at the DS monorepo, also include `./node_modules/@finografic/design-system/src/**/*.{ts,tsx}`.
- Vite aliases for `assets`, `styles`, `components`, `layout`, `data`, `types`, `@styled-system/css`, and `@styled-system/jsx` must mirror `tsconfig` paths — TypeScript paths alone do not resolve in Vite; CV data types live under `src/types/` (`types` path alias).
- Screen `.cv-content-grid` in `App.styles.ts` is asymmetric (`minmax(18rem, 27rem)` sidebar / `1fr` main). Default `?view=full` uses `App` + `CONTENT`; `?view=condensed` uses `AppPrint` + `PRINT_CONTENT`. `ViewNav` offers Full | Condensed | PDF (`window.print()` on current view). Full-view PDF uses `src/styles/print.styles.ts` (`stylesPrint`, `@media print` on `.cv-*`). Condensed layout uses `src/styles/condensed.styles.ts` (`condensedViewStyles`): same rules on screen and paper (centred A4 sheet); `html[data-cv-view='condensed']` scales type in `@media print` only. Keep gold/Raleway via `.cv-accent` / `var(--colors-primary)` with `print-color-adjust: exact`, not forced black.
- `CVPrintHeader` (`layout/print/`) mirrors `CVHeader` markup and composes web header styles; QR is the third grid column. Mask print avatar grey edge with white `outline` + zero-blur `box-shadow` on `[data-scope='avatar']`. `CVSection` requires `sectionKey`; section headings share `src/styles/section-heading.styles.ts` (web) and `.pe-section-heading` (print). Print project titles use `var(--colors-primary)`; meta shows `vX.X.X · N commits` like web `ProjectEntry`.
- `PrintColumnBreak` and optional `printBreakAfter` on employment, project, and technology data; `ItemList` supports `wrap: false` on pill rows when full labels must stay on one line (`ItemListConfig` / `technologies.data.ts`).
- Sidebar `Technical Projects` (`sectionKey` `sidebar-projects`) groups three subcategories under grey `categoryHeading` h3s: "AI & Experimentation" (`CONTENT.aiProjects`), "Full-stack Application" (`CONTENT.fullstackProjects`), "CLI & Developer Tools" (`CONTENT.cliProjects`); main column has its own `Technical Projects` (`sectionKey` `technical-projects`) with `CONTENT.projects` category array. `CVHeader` renders `<header className="cv-header cv-page-header">`. Languages appears twice: `print-only-section` in sidebar and `screen-only-section` in main (print places it on the left for column balance).
- CV data uses parallel trees `src/data/web/` and `src/data/print/` with matching `*.data.ts` filenames (`content`, `profile`, `employment`, `technologies`, `projects`); web aggregates `CONTENT` in `src/data/web/index.ts`, print `PRINT_CONTENT` in `src/data/print/index.ts`. Web sidebar project groups and main `projects` categories live in `projects.data.ts`; print folds education, languages, philosophy, and contact into `content.data.ts`. Screen prose: sync from `CV_2026_CONTENT_FINAL_V2.md` in sibling `__CV_2026__` content repo before editing.
- `pnpm sync-git-metadata` (`scripts/sync-git-metadata.ts`, renamed from `sync-versions`) fetches latest release tags and total commit counts from the GitHub API for `@finografic/*` packages and GitHub repos `LLAAB`, `touch-monorepo`, and `monorepo-starter`, writing `version` and `commits` into `src/data/web/projects.data.ts` and `src/data/print/projects.data.ts`; version sync is skipped for those three repos without releases but commit counts still update; `ProjectEntry` displays metadata as `vX.X.X · N commits`.

---
