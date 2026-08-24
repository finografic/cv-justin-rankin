# GitHub Packages setup (template)

Use this as a **checklist pointer** when publishing to **GitHub Packages** (`npm.pkg.github.com`). Your org may keep a **single canonical guide** (e.g. in an internal generator or docs repo) — follow that source of truth when it exists.

## Typical requirements

| Item                     | Notes                                                                            |
| ------------------------ | -------------------------------------------------------------------------------- |
| **Authentication**       | PAT or `GITHUB_TOKEN` with `read:packages` / `write:packages` as needed          |
| **Repo secret**          | Often `NPM_TOKEN` for workflows that publish                                     |
| **`.npmrc`**             | Scope → registry mapping, e.g. `@your-scope:registry=https://npm.pkg.github.com` |
| **Workflow permissions** | `packages: write`, `contents: write` (exact needs depend on workflow)            |

## Do not commit secrets

Use GitHub Actions secrets and `NODE_AUTH_TOKEN` (or documented env vars) in CI — never commit tokens.

## Org-specific docs

If your team maintains a full walkthrough (machine setup, PAT scopes, first publish), link it here in your fork:

- _`<link to canonical doc>`_

## Related documentation

- [Developer Workflow](./DEVELOPER_WORKFLOW.md)
- [Release Process](./RELEASE_PROCESS.md)
