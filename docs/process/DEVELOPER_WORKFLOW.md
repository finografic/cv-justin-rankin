# Developer Workflow

Very small workflow for the CV site.

## Local

```bash
pnpm install
pnpm dev
```

Vite serves:

- `http://127.0.0.1:4173/cv-justin-rankin/`

## Content

Edit:

- `src/data/cv-content.ts`

## Validate

```bash
pnpm build
pnpm lint
pnpm typecheck
```

## Deploy

- Base path is `/cv-justin-rankin` in `vite.config.ts`
- GitHub Pages workflow is `.github/workflows/deploy.yml`
- Push to `main`
