# Developer Workflow

Template: day-to-day development for a **pnpm** monorepo or multi-package repo. Adjust script names to match your root `package.json`.

---

## Daily development

### Code quality

Typical scripts (yours may differ):

```bash
pnpm lint          # ESLint / project lint
pnpm lint:fix      # Lint with fixes, if defined
pnpm format:fix    # Formatter (e.g. oxfmt)
pnpm format:check  # Check formatting without writing
pnpm typecheck     # TypeScript across packages
pnpm test          # Tests
```

### Formatter config

If you use **oxfmt** (or another formatter), keep its config in repo root and run the same commands in CI as locally.

---

## Git workflow

### Commit messages

Use **Conventional Commits** so history and tooling stay consistent.
**Commitlint** (see `commitlint.config.mjs` in the repo root) validates the
**subject line** on `git commit` when a `commit-msg` hook is installed.

**Subject line:**

```bash
git commit -m "<type>(<scope>): <short summary>"
```

`scope` is **optional** but useful: package name, layer, or concern. Examples:

```bash
docs(agents): refresh skill authoring guide
feat(skills): add runner timeout
chore(web): bump Astro dependency
```

**Examples:**

```bash
git commit -m "feat(api): add users endpoint"
git commit -m "fix(core): handle empty input"
git commit -m "docs(readme): fix install steps"
git commit -m "test(schemas): cover edge cases"
git commit -m "deps: bump zod to latest patch"
```

**Allowed types** (enforced when using this repo’s `commitlint.config.mjs`):

| Type       | Use for                                                                                 |
| ---------- | --------------------------------------------------------------------------------------- |
| `feat`     | New capability                                                                          |
| `fix`      | Bug fix                                                                                 |
| `test`     | Adding or changing tests only                                                           |
| `refactor` | Internal change, same outward behavior                                                  |
| `docs`     | Documentation only                                                                      |
| `chore`    | Maintenance, tooling, scaffolding (use `deps` when the commit is only dependency bumps) |
| `deps`     | Dependency changes only (lockfile, version bumps)                                       |
| `build`    | Build system, bundler, or compile pipeline (e.g. Vite, tsup, `turbo` build config)      |
| `ci`       | CI workflows, Actions, automation config                                                |
| `style`    | Formatting-only or style rules (no logic change)                                        |
| `revert`   | Reverts a previous commit                                                               |

**Scopes:** Prefer a **scope** for the area of the repo: package name
(`core`, `web`), topic (`agents`, `skills`, `ci`), or path theme. There is no
separate `agents:` / `ai:` **type** in this preset — use `docs(agents):`,
`feat(skills):`, etc.

**Multiline messages:** use a second `-m`, or `git commit -F message.txt` for
bodies. Keep project-specific policies (e.g. no `Co-Authored-By`, body format)
in your **AGENTS.md** or team docs.

**What Commitlint does not check:** body must be bullets, no prose,
“Verification:” sections — those need **human review** or **AI “commit
instructions”** in your editor (e.g. Codex). **Commitizen** (`git cz`) is an
optional interactive helper; it does not replace Commitlint.

### Pre-commit hook

A typical **pre-commit** hook runs some combination of:

1. **lint-staged** on staged files
2. **ESLint** (or similar) on JS/TS
3. **Formatter** (e.g. oxfmt) on staged paths
4. **typecheck** (often whole workspace for safety)

**To bypass** (not recommended):

```bash
git commit --no-verify -m "message"
```

### Commit-msg hook

A **commit-msg** hook runs **Commitlint** on the message file so invalid types or malformed headers are rejected.

In this template, the canonical setup is **Husky**:

```bash
.husky/pre-commit  -> pnpm exec lint-staged --allow-empty
.husky/commit-msg  -> pnpm exec commitlint --edit "$1"
```

---

## Release workflow

See [Release Process](./RELEASE_PROCESS.md) if this template includes release automation.

**Example** (adjust script names to your repo):

```bash
pnpm release:github:patch   # or changeset publish, etc., depending on your repo
```

---

## Related documentation

| Doc                                                 | Purpose                              |
| --------------------------------------------------- | ------------------------------------ |
| [Release Process](./RELEASE_PROCESS.md)             | Versioning and publishing (template) |
| [GitHub Packages Setup](./GITHUB_PACKAGES_SETUP.md) | Registry and token setup (template)  |
