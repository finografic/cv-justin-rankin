# @finografic/cv-justin-rankin — Handoff

> **How to maintain this file**
> Update after sessions that change architecture, add/remove features, resolve open questions, or shift priorities — not every session.
> — Update only the sections that changed. Keep the total under 150 lines.
> — Write in present tense. No code snippets — describe what exists, not how it works.
> — `.claude/memory.md` = session work log. `.agents/handoff.md` = project state snapshot. Never duplicate between the two.

## Project

`@finografic/cv-justin-rankin` — personal CV site for Justin Rankin.
Phase: content + styling complete; `@finografic/design-system` v1.17.0 integrated; ready for user testing and Pages deploy.

## Architecture

Single-page React + Vite app with static typed content.

### CSS pipeline (import order in `src/main.tsx`)

1. `src/styles/theme.css` — PostCSS entry (`@pandacss/dev/postcss`): layer order, DS reset import, Panda token/recipe injection at build time.
2. Emotion `<Global>` in `App.tsx` — unlayered: `@font-face`, `--cv-*` vars, base typography, print rules.

`styled-system/` is generated output from `pnpm panda:codegen`; do not import `styled-system/styles.css` directly in app source.

### Design system consumption

- Dependencies: `@finografic/design-system` and `@finografic/icons` at **^1.17.0** (GitHub Packages).
- `panda.config.ts` uses `designSystemPreset` and **must** include `./node_modules/@finografic/design-system/dist/**/*.recipe.js` (published tarball has compiled recipes in `dist/components/`, not `src/components/`). Optional `src/**` line supports `pnpm link` to the DS monorepo.
- `jsxFramework: 'react'` required so `styled-system/jsx` exists for DS components.
- `vite.config.ts` aliases `assets`, `styles`, `@styled-system/css`, `@styled-system/jsx`, and `@styled-system/styles.css` to this repo’s paths — TypeScript paths alone are insufficient for Vite.
- `postcss.config.mjs` runs Panda PostCSS on `theme.css`.

### Key source files

- `src/data/cv-content.ts` — all CV copy and structured entries
- `src/data/types.ts` — TypeScript types for CV data shapes
- `src/App.tsx` — page composition; optional `DsSmokePanel` when `?ds-smoke=1` in dev
- `src/components/*.tsx` + `*.styles.ts` — plain HTML + Emotion `css` prop (no `styled.*`)
- `src/styles/theme.ts` — accent-dependent colours via `var(--colors-primary*)`; body/heading font stacks
- `src/styles/global.styles.ts` — Roboto + Geist `@font-face`, `:root` `--cv-*` vars
- `src/styles/print.styles.ts` — A4 print: 50/50 `.cv-content-grid`, `.cv-accent` uses accent token with `print-color-adjust: exact`
- `src/dev/DsSmokePanel.tsx` — DS Button, Badge, Callout, Card smoke UI (dev only)
- `src/dev/design-system.smoke.test.tsx` — `pnpm test:ds` checks dist entry + avatar recipe on disk
- `panda.config.ts` — accent `createColorTokens({ primary: ... })`; DS include globs
- `public/fonts/roboto/` — Roboto Regular, Bold, Italic (self-hosted body)
- `public/fonts/geist/` — Geist variable woff2 (fallback body)
- `.github/workflows/deploy.yml` — GitHub Pages on push to `master`
- `.github/workflows/ci.yml` — lint, typecheck, format check

## Stack

- TypeScript (strict, ESM), React 19, Vite 7
- Emotion template-literal `css` prop on plain HTML
- `@finografic/design-system` v1.17.0 + Panda CSS (`@pandacss/dev`)
- Raleway Variable (Google Fonts, headings); Roboto + Geist (body, local)
- pnpm, oxlint/oxfmt, vitest (`test:ds`), GitHub Pages

## Component styling pattern

Every component: `ComponentName.tsx` imports `styles` from `ComponentName.styles.ts`; elements use `css={styles.*}`.
CSS vars: `var(--colors-primary*)` from Panda; `var(--cv-*)` from `global.styles.ts`; literal `768px` in `@media` (vars invalid there).
Accent changes: edit `primary` in `panda.config.ts` → `pnpm panda:codegen` → components pick up via CSS vars.

## Deploy and URLs

- Production: `https://finografic.github.io/cv-justin-rankin/`
- Vite `base`: `/cv-justin-rankin/`
- `release.yml` is for npm/GitHub Releases only — **not** the live CV site.

## Decisions

1. Static React + Vite CV with typed `cv-content.ts`. (2026-05-20)
2. Emotion `css` prop on plain HTML, no `styled.*`. (2026-05-22)
3. GitHub Pages deploy on push to `master`; Vite base path matches repo name. (2026-05-20)
4. Print: two-column 50/50 grid, preserve accent colour in PDF. (2026-05-21)
5. Body stack Roboto (self-hosted) with Geist fallback; headings Raleway. (2026-05-21)
6. Panda accent via `panda.config.ts` + PostCSS on `theme.css` (not a static-only `styled-system` import). (2026-05-22)
7. DS registry integration: scan `dist/**/*.recipe.js` in Panda `include`; Vite `@styled-system/*` aliases. (2026-05-21)
8. DS smoke panel and `test:ds` for install/recipe verification without rendering DS in jsdom. (2026-05-21)

## Open Questions

1. Replace `src/assets/justin.png` with a newer headshot.
2. Generate `favicon.svg` (JR monogram) if desired beyond current favicon set.

## Status

As of 2026-05-21.

- DS v1.17.0 + icons v1.17.0 installed from registry; `pnpm test:ds`, `pnpm build`, lint/typecheck pass locally
- Commit `8e396a1`: DS integration, smoke panel, docs (README, AGENTS.md)
- Branch may be ahead of `origin/master` — push to `master` deploys Pages
- User planned full manual test after handoff updates

## Next Likely Step

User tests: `pnpm dev`, CV at base URL, DS smoke at `?ds-smoke=1`, print preview/PDF. Then push `master` to deploy. Optional: newer headshot and favicon work.
