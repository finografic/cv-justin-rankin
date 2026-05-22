# @finografic/cv-justin-rankin — Handoff

## Project

`@finografic/cv-justin-rankin` — personal CV site for Justin Rankin.
Phase: styling + component architecture complete, deployed to GitHub Pages.

## Architecture

Single-page React + Vite app with static typed content.

### CSS layer order (import sequence in `src/main.tsx`)

```
styles/styles.css         → @layer order declaration + DS reset (@layer reset)
@styled-system/styles.css → Panda CSS: base + tokens + utilities (pre-generated)
Emotion <Global>          → unlayered (highest priority): fonts, :root vars, app base styles
```

### Key source files

- `src/data/cv-content.ts` — all CV copy and structured entries
- `src/data/types.ts` — TypeScript types for all CV data shapes
- `src/App.tsx` — page composition; uses `css` prop from `src/App.styles.ts`
- `src/App.styles.ts` — layout and composition styles for App
- `src/components/*.tsx` — plain HTML elements with `css` prop
- `src/components/*.styles.ts` — colocated Emotion template-literal styles
- `src/styles/theme.ts` — accent-dependent colours reference `var(--colors-primary*)`;
  fixed values (background, muted, fonts) as OKLCH/string literals
- `src/styles/global.styles.ts` — Emotion `<Global>`: `@font-face`, `--cv-*` vars,
  `:root` base, `a`, `::selection`
- `src/styles/print.styles.ts` — Emotion `<Global>`: print-specific layout rules
- `src/styles/styles.css` — `@layer` order + `@import DS reset`
- `panda.config.ts` — Panda preset + `createColorTokens({ primary: '...' })`;
  single source of truth for the accent colour scale
- `public/fonts/geist/` — Geist-Variable.woff2, Geist-Italic.woff2
- `public/favicon/` — favicon.ico, favicon.svg, apple-touch-icon.png
- `vite.config.ts` — base `/cv-justin-rankin/`, `jsxImportSource` for Emotion css prop
- `tsconfig.json` — `jsxImportSource: @emotion/react` (required for `css` prop on HTML elements)
- `.github/workflows/deploy.yml` — GitHub Pages deploy on push to `master`
- `.github/workflows/ci.yml` — lint, typecheck, format check

## Stack

- TypeScript (strict, ESM)
- React 19 + Vite
- Emotion (template-literal `css` prop on plain HTML — no `styled.*`)
- `@finografic/design-system` + Panda CSS (token layer + CSS reset)
- Raleway Variable (Google Fonts, headings)
- Geist Variable (local woff2, body)
- pnpm, oxlint/oxfmt, GitHub Pages

## Component styling pattern

Every component follows the same pattern — no `styled.*` anywhere:

```tsx
// ComponentName.tsx
import { styles } from './ComponentName.styles';
<h2 css={styles.heading}>{title}</h2>
```

```ts
// ComponentName.styles.ts
import { css } from '@emotion/react';
export const styles = {
  heading: css`
    color: var(--colors-primary);
    font-family: var(--cv-font-heading);
  `,
};
```

CSS vars used in styles:

- `var(--colors-primary*)` — Panda-generated accent scale
- `var(--cv-*)` — static CV values declared in `global.styles.ts` `:root`
- Literal `768px` for media query breakpoints (CSS vars don't work in `@media`)

## Accent colour — single source of truth

Change `primary` in `panda.config.ts` → regenerate with `pnpm panda:codegen` → all
components update automatically via CSS vars. No changes needed in `theme.ts`.

```ts
// panda.config.ts
colors: createColorTokens({
  primary: 'oklch(62% 0.078 54)', // gold/copper
  secondary: 'oklch(38% 0 0)',    // v1 grey (rgb 68 68 68)
  ...
}),
```

## CSS import architecture

`src/styles/styles.css` mirrors `theme.css` from the touch-monorepo:

```css
@layer reset, base, tokens, recipes, utilities;
@import '@finografic/design-system/styles/reset.css';
```

PostCSS is NOT used — tokens come from the pre-generated `styled-system/` folder.
Run `pnpm panda:codegen` after changing `panda.config.ts`.

## Decisions

1. Build the CV as a static React + Vite site. (2026-05-20)
2. Keep CV content compiled into typed TypeScript data. (2026-05-20)
3. Emotion with template-literal `css` prop on plain HTML (no `styled.*`). (2026-05-22)
4. Deploy via GitHub Pages, Vite `base: /cv-justin-rankin/`. (2026-05-20)
5. Print styling close to screen: two-column, coloured, A4-targeted. (2026-05-21)
6. `@finografic/design-system` + Panda CSS for token layer and CSS reset. (2026-05-22)
7. `panda.config.ts` is the single source of truth for the accent colour scale. (2026-05-22)
8. Removed PostCSS config — was double-generating Panda CSS (53 KB → 21 KB CSS). (2026-05-22)
9. `jsxImportSource: @emotion/react` in both `vite.config.ts` and `tsconfig.json`. (2026-05-22)

## Open Questions

1. Replace `justin.png` headshot with a newer photo.
2. Generate `favicon.svg` (JR monogram or simple mark; add `<link rel="icon">` tag).

## Status

Architecture and styling complete.

- All components use plain HTML + Emotion `css` prop from `*.styles.ts` files
- CSS vars are the single interface between Panda tokens and Emotion styles
- CSS bundle: 21 KB (was 53 KB before PostCSS double-processing was fixed)
- Build, lint, and typecheck all passing
- Site live at [finografic.github.io/cv-justin-rankin](https://finografic.github.io/cv-justin-rankin)

## Next Likely Step

Push to `master` to deploy. Then replace `src/assets/justin.png` with a newer photo
and update `CVHeader.tsx` `alt` text if needed.
