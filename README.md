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

**Condensed handout (local):** `http://localhost:5173/cv-justin-rankin/?view=condensed`

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

TypeScript types are in `src/types/content.types.ts`.

### Views

| View               | URL                          | What you see                                                                                                                                                                                    |
| ------------------ | ---------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Full** (default) | `/` or `?view=full`          | Two-column web CV. Screen layout in `App.tsx`; print/PDF via `@media print` in `src/styles/print.styles.ts`.                                                                                    |
| **Condensed**      | `?view=condensed`            | Print-oriented handout (`AppPrint.tsx`, `PRINT_CONTENT`, `src/styles/condensed.styles.ts`). Screen paper is **320mm** wide so layout matches Save as PDF; actual print uses A4 `@page` margins. |
| **PDF**            | Top-right control (any view) | `window.print()` for the active view — not a separate generated file.                                                                                                                           |

**Chrome:** Fixed top-right bar — **Condensed** / **Full Version** switch (`SwitchDS` from `@finografic/design-system/forms`) and **PDF**.

**Public condensed:** The switch is wired today; you can hide or gate `ViewNav` in `src/main.tsx` later while keeping `?view=condensed` bookmarkable for handouts.

### Syncing project versions from GitHub

```bash
pnpm sync-git-metadata
```

Fetches the latest release tag and total commit count for every GitHub-hosted project from the public GitHub API, then updates `version` and `commits` in `src/data/web/projects.data.ts` and `src/data/print/projects.data.ts`. The script commits only those two files with a fixed message (`chore: update git metadata`). Web metadata renders as `vX.X.X · N commits`; print shows `version` or `status` only. Repos without releases (`touch-monorepo`, `LLAAB`, `monorepo-demo`) skip version sync but still get commit counts.

---

## 🎨 Design tokens

Colours and typography are defined in two places that work together.

### Emotion theme (`src/styles/theme.ts`)

Used directly by Emotion styled components. Accent colours resolve from Panda CSS variables; fixed neutrals stay in OKLCH:

```ts
colors: {
  accent: 'var(--colors-primary)',
  accentSoft: 'var(--colors-primary-lighter)',
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

Generates CSS custom properties (`--colors-primary-*` etc.) via `createColorTokens`:

```ts
colors: createColorTokens({
  primary: 'oklch(65.16% 0.0625 55.37)',
  secondary: 'oklch(33.68% 0 58)',
  // ...
}),
```

To change the accent colour, update `primary` (and related tokens) in `panda.config.ts`. Run `pnpm build` to regenerate the token CSS.

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

After `pnpm build`, `pnpm preview` and open full or condensed URLs to check layout before pushing to `master` (GitHub Pages deploy).
