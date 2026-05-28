# Linting & Code Style Rules

## Import Sorting

- Prefer auto-fix via oxfmt; avoid manual reordering.

## JSX Formatting

- Let the formatter (oxc / oxfmt) control parentheses and multiline layout; avoid manual tweaks that fight the toolchain.

## Fixing

```bash
pnpm lint -- path/to/file.tsx
pnpm lint:fix -- path/to/file.tsx
pnpm lint:fix -- "src/**/*.tsx"
```

## oxfmt (lint & format)

**Check vs write:**

| Script / command | Effect                                                                              |
| ---------------- | ----------------------------------------------------------------------------------- |
| `pnpm lint`      | `oxlint -c oxlint.config.ts` — verify only, fails if anything needs linting         |
| `pnpm lint:fix`  | `oxlint -c oxlint.config.ts --fix` — writes linted output in place                  |
| `pnpm lint:ci`   | `oxlint -c oxlint.config.ts --quiet` — verify only, fails if anything needs linting |

| Script / command    | Effect                                                            |
| ------------------- | ----------------------------------------------------------------- |
| `pnpm format:check` | `oxfmt --check` — verify only, fails if anything needs formatting |
| `pnpm format:fix`   | `oxfmt` — writes formatted output in place                        |

- Use **`lint:ci`** in CI and when you only want verification.
- Use **`format:check`** in CI and when you only want verification.
- Use **`format:fix`** when you intend to modify files.

- Staged workflows use `oxfmt --no-error-on-unmatched-pattern` where appropriate so empty globs do not fail.
