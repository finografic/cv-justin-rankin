# 🦋 @finografic/cv-justin-rankin

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

CV data is split across typed data files under `src/data/web/` and aggregated as `CONTENT` in `src/data/web/index.ts`:

| File                   | Content                                                                                     |
| ---------------------- | ------------------------------------------------------------------------------------------- |
| `projects.data.ts`     | Main column categories, sidebar AI / full-stack / CLI lists, and archived CLI (if retained) |
| `technologies.data.ts` | Technology groups and pills                                                                 |
| `employment.data.ts`   | Work experience entries                                                                     |
| `content.data.ts`      | Header, contact, philosophy, education, languages                                           |
| `profile.data.ts`      | Profile paragraphs                                                                          |

Condensed handout copy lives under `src/data/print/` (`PRINT_CONTENT` in `src/data/print/index.ts`) with the same file names as web (`content`, `profile`, `employment`, `technologies`, `projects`).

**Views:** `?view=full` (default) or `?view=condensed` — top nav also offers **PDF** (prints the current view). Legacy `?edition=print` redirects to condensed.

TypeScript types are in `src/types/content.types.ts`.

### Syncing project versions from GitHub

```bash
pnpm sync-git-metadata
```

Fetches the latest release tag and total commit count for every GitHub-hosted project from the public GitHub API, then updates `version` and `commits` in `src/data/web/projects.data.ts` and `src/data/print/projects.data.ts`. Web metadata renders as `vX.X.X · N commits`; print shows `version` or `status` only. Repos without releases (`touch-monorepo`, `LLAAB`, `monorepo-starter`) skip version sync but still get commit counts.

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

**Trailing slash:** Vite `base` must end with `/`. GitHub Pages redirects
`…/cv-justin-rankin` → `…/cv-justin-rankin/` (301). Local dev and `pnpm preview` use the
same redirect via `vite.config.ts`.

---

## ✅ Validate

```bash
pnpm build       # production build
pnpm typecheck   # TypeScript
pnpm lint        # oxlint
pnpm format:check
```
