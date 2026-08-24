# Release process

Template for **automated or scripted releases** (e.g. GitHub Actions + GitHub Packages). Replace placeholders with your org, repo, and script names.

## Prerequisites

Before releasing:

- Changes are committed and pushed
- Default branch is ready (often `main` or `master`)
- Tests pass: `pnpm test` (or your project’s test script)
- Lint passes: `pnpm lint`
- Typecheck passes: `pnpm typecheck`

## Release commands

Define scripts in root `package.json`, for example:

| Goal  | Example script (name varies by repo)                |
| ----- | --------------------------------------------------- |
| Patch | `pnpm release:patch` or `pnpm release:github:patch` |
| Minor | `pnpm release:minor` or `pnpm release:github:minor` |
| Major | `pnpm release:major` or `pnpm release:github:major` |

Use whatever your scaffold or generator created.

## What often happens automatically

1. **Local checks** — lint, typecheck, tests (as defined in your release script).
2. **Version bump** — `package.json` / changelog tooling / workspace versions.
3. **Git commit and tag** — e.g. `v1.2.3`.
4. **Push** — branch and tags to GitHub.
5. **CI** — workflow builds and publishes packages (npm, GitHub Packages, etc.).
6. **GitHub Release** — optional release notes from tags or changelog.

## Verification after release

1. **Releases** — `https://github.com/<ORG>/<REPO>/releases`
2. **Packages** — registry URL for your scope (npm, GitHub Packages, etc.)
3. **Actions** — `https://github.com/<ORG>/<REPO>/actions`

## Manual recovery

If your repo exposes a **manual publish** script, use it only when automation failed — and ensure you do not publish the same version twice.

## Troubleshooting

### Version already published

Bump the version with your normal release script, then publish again. Do not republish the same version to the same registry.

### Tag already exists

```bash
git tag -d vX.Y.Z
git push origin :refs/tags/vX.Y.Z
```

Then run your release flow again after fixing the underlying issue.

### Release checks fail

Run the same commands locally as in the release script, for example:

```bash
pnpm lint
pnpm typecheck
pnpm test
```

## Related documentation

- [Developer Workflow](./DEVELOPER_WORKFLOW.md)
- [GitHub Packages Setup](./GITHUB_PACKAGES_SETUP.md)
