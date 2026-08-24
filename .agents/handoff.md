# @finografic/cv-justin-rankin — Handoff

> **How to maintain this file**
> Current-state snapshot, read at the start of a session. Update after sessions that change architecture, add or remove features, resolve open questions, or shift priorities — not every session.
> — **Do not duplicate content held elsewhere.** Specs, plans, TODO/DONE docs, commits and diffs are referenced by path, never summarised here.
> — **Do not record derivable facts.** No version numbers, no dates, no counts — they go stale silently and nothing forces them current. Derive them when needed.
> — Write in present tense. Describe what exists, not how it works. No code snippets.
> — Budgets: Architecture ≤ 60 lines, Key Decisions ≤ 15 items, every other section ≤ 20 lines. **When a section is over budget, cut detail before you cut items** — losing an entry is worse than losing its explanation. An Architecture entry needing more than ~5 lines has outgrown this file: write a spec and leave a pointer.
> — Retire Key Decisions once they are no longer questioned, or are already stated in `AGENTS.md`.
> — Tag every Open Work item with exactly one of `[in flight <branch>]`, `[verified, uncommitted]`, `[open PR #N]`, `[planned, not started]`, `[blocked: <what>]`. An untagged item is not done — so tag it.
> — Redact secrets, tokens, and personal data. This file is tracked in git.
> — `.agents/memory.md` = chronological working memory / session log. `.agents/handoff.md` = current project state snapshot. See `docs/process/PROJECT_MEMORY_MODEL.md`.

## Project

`@finografic/cv-justin-rankin` — personal CV site for Justin Rankin.
Phase: content, styling, print layout, and mobile responsive layout complete. Ready for production deploy.

## Architecture

Single-page React + Vite app with static typed content.

### CSS pipeline (import order in `src/main.tsx`)

1. `src/styles/theme.css` — PostCSS entry (`@pandacss/dev/postcss`): layer order, DS reset import, Panda token/recipe injection at build time.
2. Emotion `<Global>` in `App.tsx` — unlayered: `@font-face`, `--cv-*` vars, base typography, print rules.

`styled-system/` is generated output from `pnpm panda:codegen`; do not import `styled-system/styles.css` directly in app source.

### Layout

Desktop: asymmetric two-column grid (`minmax(18rem, 27rem)` sidebar / `1fr` main) in `App.styles.ts`.
Print: 50/50 grid at 75% font scale in `src/styles/print.styles.ts`. Work experience and project entries use `break-inside: auto` with `display: block` flow to avoid CSS grid Y-position miscalculation at page breaks.
Mobile (`max-width: 768px`): `display: contents` on column wrappers with CSS `order` reorders sections — Work Experience moves to position 3 (from 7) so recruiters hit employment history early. Duplicate Technical Projects heading hidden.

### Content data

CV copy is split across `src/data/*.data.ts` and aggregated as `CONTENT` in `src/data/index.ts`. Project data lives in four files: `projects.data.ts` (Architecture & Configuration, Front-end & Design System), `ai-projects.data.ts`, `cli-projects.data.ts`, `fullstack-projects.data.ts`.

Languages section is rendered twice: `print-only-section` in sidebar (left column for print), `screen-only-section` in main (right column for screen).

### Version sync

`scripts/sync-versions.ts` fetches latest GitHub release tags for all `@finografic/*` packages and updates `version` fields in the data files. Run with `pnpm sync-versions`. Blocklists `touch-monorepo` and `LLAAB` (private repos). Uses plain `fetch` against the public GitHub API (no auth needed).

### Design system consumption

- Dependencies: `@finografic/design-system` and `@finografic/icons` at **^1.18.2** (GitHub Packages).
- `panda.config.ts` uses `designSystemPreset` and **must** include `./node_modules/@finografic/design-system/dist/**/*.recipe.js`.
- `jsxFramework: 'react'` required so `styled-system/jsx` exists for DS components.

### Key source files

- `src/data/*.data.ts` — CV copy and structured entries, aggregated in `src/data/index.ts`
- `src/types/content.types.ts` — TypeScript types for CV data shapes
- `src/App.tsx` — page composition with sidebar/main layout and mobile reorder
- `src/App.styles.ts` — grid layout, mobile `display: contents` + `order` reordering
- `src/components/*.tsx` + `*.styles.ts` — plain HTML + Emotion `css` prop (no `styled.*`)
- `src/styles/global.styles.ts` — Roboto + Geist `@font-face`, `:root` `--cv-*` vars
- `src/styles/print.styles.ts` — A4 print: 50/50 grid, compact header, block flow for work entries
- `scripts/sync-versions.ts` — fetch GitHub release versions into data files

## Stack

- TypeScript (strict, ESM), React 19, Vite 7
- Emotion template-literal `css` prop on plain HTML
- `@finografic/design-system` v1.18.2 + Panda CSS (`@pandacss/dev`)
- Raleway Variable (Google Fonts, headings); Roboto + Geist (body, local)
- pnpm, oxlint/oxfmt, vitest, tsx, GitHub Pages

## Component styling pattern

Every component: `ComponentName.tsx` imports `styles` from `ComponentName.styles.ts`; elements use `css={styles.*}`.
CSS vars: `var(--colors-primary*)` from Panda; `var(--cv-*)` from `global.styles.ts`; literal `768px` in `@media` (vars invalid there).

## Deploy and URLs

- Production: `https://finografic.github.io/cv-justin-rankin/`
- Vite `base`: `/cv-justin-rankin/`
- `release.yml` is for npm/GitHub Releases only — **not** the live CV site.

## Decisions

1. Static React + Vite CV with typed data files. (2026-05-20)
2. Emotion `css` prop on plain HTML, no `styled.*`. (2026-05-22)
3. GitHub Pages deploy on push to `master`; Vite base path matches repo name. (2026-05-20)
4. Print: two-column 50/50 grid, preserve accent colour in PDF. (2026-05-21)
5. Body stack Roboto (self-hosted) with Geist fallback; headings Raleway. (2026-05-21)
6. Panda accent via `panda.config.ts` + PostCSS on `theme.css`. (2026-05-22)
7. DS registry integration: scan `dist/**/*.recipe.js` in Panda `include`. (2026-05-21)
8. Mobile: `display: contents` + CSS `order` for single-column section reordering. (2026-05-25)
9. Version sync script: plain `fetch` against public GitHub API, no auth. (2026-05-25)
10. Print work entries use `display: block` (not grid) to avoid Y-position bugs at page breaks. (2026-05-25)

## Open Questions

1. Replace `src/assets/justin.png` with a newer headshot.
2. Generate `favicon.svg` (JR monogram) if desired beyond current favicon set.

## Status

As of 2026-05-25.

- Mobile responsive layout complete with section reordering
- Print layout stable at 4 pages with correct flow across page breaks
- Version sync script created and verified (`pnpm sync-versions`)
- All project versions updated to full semver from GitHub releases
- Build, lint, typecheck pass locally
- Branch is ahead of `origin/master` — push to deploy
