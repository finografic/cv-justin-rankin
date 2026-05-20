# @finografic/cv-justin-rankin

Personal CV for Justin Rankin, built as a responsive React + Vite site with print-optimized PDF output.

## Setup

```bash
pnpm install
pnpm dev
```

GitHub Pages base path:

- `/cv-justin-rankin`
- [https://finografic.github.io/cv-justin-rankin](https://finografic.github.io/cv-justin-rankin)

## Content

Edit:

- [src/data/cv-content.ts](./src/data/cv-content.ts)

## Deploy

Push to `master`.
Pages builds from:

- [.github/workflows/deploy.yml](./.github/workflows/deploy.yml)

## Validate

```bash
pnpm build
pnpm lint
pnpm typecheck
```
