# ESLint & Code Style Rules

## Import Sorting

- Prefer auto-fix via ESLint; avoid manual reordering.

## JSX Formatting

- Let the formatter (oxc / oxfmt) and ESLint control parentheses and multiline layout; avoid manual tweaks that fight the toolchain.

## Fixing

```bash
npm run lint:fix -- path/to/file.tsx
npm run lint:fix -- "src/**/*.tsx"
npm run lint -- path/to/file.tsx
```

## oxfmt (lint & format)

**Check vs write:**

| Script / command    | Effect                                                            |
| ------------------- | ----------------------------------------------------------------- |
| `pnpm format:check` | `oxfmt --check` — verify only, fails if anything needs formatting |
| `pnpm format:fix`   | `oxfmt` — writes formatted output in place                        |

- Use **`format:check`** in CI and when you only want verification.
- Use **`format:fix`** when you intend to modify files.
- Staged workflows use `oxfmt --no-error-on-unmatched-pattern` where appropriate so empty globs do not fail.

## Known Warnings (ignore)

- `[@stylistic/eslint-plugin]: You are using deprecated options("overrides.arrow") in "type-annotation-spacing"` — WIP migration, ignore this warning.

## Disabled Rules (intentional)

- `style/jsx-wrap-multilines`, `react/jsx-wrap-multilines` when the formatter governs layout
- `ts/no-unused-vars` in favor of import cleanup
