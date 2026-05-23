# @finografic/cv-justin-rankin

> Personal CV for Justin Rankin — responsive web + print-optimised PDF.

- React 19 + TypeScript + Vite
- Emotion CSS-in-JS with `@finografic/design-system` + Panda CSS token layer
- OKLCH colour tokens, Raleway (headings), Roboto (body, local) with Geist fallback
- Auto-deployed to GitHub Pages on push to `master`

**Live:** [finografic.github.io/cv-justin-rankin](https://finografic.github.io/cv-justin-rankin)

---

## 🚀 Setup

```bash
pnpm install
pnpm dev
```

### Design system (`@finografic/design-system`)

Panda must scan **compiled DS recipes** in `node_modules` (see `panda.config.ts`). The published
package ships `dist/components/*.recipe.js`, not `src/components/`.

```bash
pnpm install
pnpm panda:codegen   # after DS or token changes
pnpm dev
```

**Registry vs link:** `dist/**/*.recipe.js` in `include` is required for GitHub Packages installs.
The `src/**` line is optional and helps when you `pnpm link` the monorepo checkout.

**Automated:** `pnpm test:ds` — package resolves and DS components render.

**Visual:** `http://localhost:5173/cv-justin-rankin/?ds-smoke=1` — Button, Badge, Callout, Card
(recipes). Hidden from print.

**Vite:** `vite.config.ts` aliases `@styled-system/css` and `@styled-system/jsx` so imports inside
DS `dist/` resolve to this app’s generated `styled-system/` (required for production build).

---

## ✏️ Updating content

All CV data lives in one file:

```
src/data/cv-content.ts
```

Edit the exported `cvContent` object — work experience, projects, technologies, profile text, contact
details. TypeScript types are in `src/data/types.ts`.

---

## 🎨 Design tokens

Colours and typography are defined in two places that work together.

### Emotion theme (`src/styles/theme.ts`)

Used directly by Emotion styled components. All colours are OKLCH:

```ts
colors: {
  accent: 'oklch(53% 0.085 53)',   // gold/copper — v1 palette
  background: 'oklch(99.4% 0.007 75)',
  // ...
},
fonts: {
  heading: '"Raleway", sans-serif',
  body:    '"Roboto", "Geist", sans-serif',
},
```

Body fonts are self-hosted under `public/fonts/`: Roboto Regular/Bold/Italic (standard width, not Condensed), with Geist as fallback.

### Panda CSS token layer (`panda.config.ts`)

Generates CSS custom properties (`--colors-primary-*` etc.) from the same gold/copper anchor via `createColorTokens`:

```ts
colors: createColorTokens({
  primary: 'oklch(53% 0.085 53)',
  // ...
}),
```

To change the accent colour, update the `oklch(...)` value in **both** files. Run `pnpm build` to regenerate the token CSS.

---

## 🌐 GitHub Pages deployment

Deployed automatically by [`.github/workflows/deploy.yml`](./.github/workflows/deploy.yml) on every push to `master`.

### Base path

The site is served from a subdirectory. The base path `/cv-justin-rankin` must be consistent across three files:

**`vite.config.ts`**

```ts
export default defineConfig({
  base: '/cv-justin-rankin/',
  // ...
});
```

**`package.json`**

```json
"homepage": "https://github.com/finografic/cv-justin-rankin"
```

**`index.html`** — asset paths use `%BASE_URL%` so Vite substitutes the base at build time:

```html
<link href="%BASE_URL%favicon/favicon.ico" rel="icon" />
```

If you fork this for your own CV, replace every occurrence of `cv-justin-rankin` with your own repo name.

---

## ✅ Validate

```bash
pnpm build       # production build
pnpm typecheck   # TypeScript
pnpm lint        # oxlint
pnpm format:check
```
