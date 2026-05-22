# @finografic/cv-justin-rankin — Handoff

## Project

`@finografic/cv-justin-rankin` — personal CV site for Justin Rankin.
Phase: styling overhaul complete, deployed to GitHub Pages.

## Architecture

Single-page React + Vite app with static typed content.

- `src/data/cv-content.ts`
  Source of truth for CV copy and structured entries.
- `src/data/types.ts`
  Type definitions for contact info, technologies, work history, projects, education, and languages.
- `src/App.tsx`
  Page composition and section ordering.
- `src/components/*`
  Presentational CV components styled with Emotion.
- `src/styles/theme.ts`
  Colour and typography tokens (OKLCH colours, Raleway + Geist font stacks).
- `src/styles/global.ts`
  Global Emotion styles — Geist `@font-face` declarations, font-rendering props.
- `src/styles/panda.css`
  CSS layer order declaration (`@layer reset, base, tokens, recipes, utilities`), processed by the Panda PostCSS plugin.
- `src/styles/print.ts`
  Print-specific layout and pagination tuning.
- `panda.config.ts`
  Panda CSS config wired to `@finografic/design-system` preset. Defines CV gold/copper primary colour in OKLCH via `createColorTokens`.
- `postcss.config.cjs`
  PostCSS config — loads `@pandacss/dev/postcss`.
- `public/favicon/`
  Favicon set (ico, png 16/32, apple-touch-icon, SVG) — sourced from v1.
- `public/fonts/geist/`
  Geist variable font woff2 files (normal + italic) served as static assets.
- `vite.config.ts`
  GitHub Pages base path: `/cv-justin-rankin`.
- `.github/workflows/deploy.yml`
  GitHub Pages build/deploy workflow — triggers on push to `master`.
- `.github/workflows/ci.yml`
  CI — lint, typecheck, format check on every push/PR.

## Stack

- TypeScript (strict, ESM)
- React 19
- Vite
- Emotion (CSS-in-JS for components)
- `@finografic/design-system` + Panda CSS (token layer, CSS reset)
- Raleway Variable (Google Fonts, headings)
- Geist Variable (local woff2 from `geist` npm package, body)
- pnpm
- oxlint / oxfmt
- GitHub Pages

## Schema / Types

| Type              | Purpose                                       |
| ----------------- | --------------------------------------------- |
| `CVContent`       | Top-level typed content model for the full CV |
| `ContactInfo`     | Contact + work rights metadata                |
| `TechnologyGroup` | Grouped skills/technology chips               |
| `WorkEntry`       | Individual work experience entries            |
| `PhilosophyItem`  | Engineering philosophy bullets                |
| `ProjectCategory` | Grouped project sections                      |
| `Project`         | Individual technical project summary          |
| `EducationEntry`  | Education card content                        |
| `LanguageEntry`   | Language + proficiency                        |

## CLI Commands

| Command          | Purpose                       | Status |
| ---------------- | ----------------------------- | ------ |
| `pnpm dev`       | Run Vite dev server           | Ready  |
| `pnpm build`     | Type-check + production build | Ready  |
| `pnpm lint`      | Run oxlint                    | Ready  |
| `pnpm typecheck` | Run TypeScript without emit   | Ready  |
| `pnpm lint:md`   | Validate markdown docs        | Ready  |

## Design token setup

The accent colour (`oklch(53% 0.085 53)` — gold/copper from v1) must be updated in **two places**:

1. `src/styles/theme.ts` — `colors.accent` (and related shades: `accentSoft`, `border`, `tagBackground`)
2. `panda.config.ts` — `createColorTokens({ primary: '...' })`

The DS CSS reset is imported in `src/main.tsx` before all other styles.
Geist font paths use `import.meta.env.BASE_URL` so they resolve correctly under the `/cv-justin-rankin/` base in both dev and production.

## Decisions

1. Build the CV as a static React + Vite site rather than a package/library scaffold. (2026-05-20)
2. Keep CV content compiled into typed TypeScript data rather than markdown/runtime loading. (2026-05-20)
3. Use Emotion for styling and keep the page editorial rather than template-like. (2026-05-20)
4. Deploy via GitHub Pages with Vite `base` set to `/cv-justin-rankin`. (2026-05-20)
5. Keep print styling close to the live site: two-column, colored, A4-targeted. (2026-05-21)
6. Add `@finografic/design-system` + Panda CSS for the token layer and CSS reset; keep Emotion for all component styling — no migration needed. (2026-05-22)
7. Removed `release.yml` and `docs/process/` — this is a static site, not a published package. (2026-05-22)

## Open Questions

1. Does Justin want a real headshot asset restored instead of the current `JR` monogram header mark?
2. Are there further print-layout issues to resolve (blank pages, pagination)?

## Status

Styling overhaul complete and deployed.

- Design system integration, OKLCH tokens, Raleway + Geist fonts, and favicon all landed in `8c47a0d`.
- README rewritten and release workflow removed in `486360b`.
- `docs/process/` deleted in `8d222db`.
- Build, lint, and typecheck all passing.
- Site live at [finografic.github.io/cv-justin-rankin](https://finografic.github.io/cv-justin-rankin).

## Next Likely Step

Push to `master` to trigger the GitHub Pages deploy and verify the new fonts, gold colour, and favicon appear correctly on the live site.
