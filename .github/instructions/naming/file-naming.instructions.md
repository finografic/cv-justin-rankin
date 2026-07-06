# File Naming & Organization Rules

## Naming

- Kebab-case for files: `item-summary.ts`.
- PascalCase for exported types/interfaces when appropriate.

## Index Files

- Do not put implementation code in `index.ts` files.
- Use `index.ts` only as a barrel/index file that re-exports nearby modules.
- If a file contains executable logic, helpers, constants, types, command handlers, services, or feature implementation, give it a descriptive filename.
- For folder-level utility implementation, prefer `{folder-name}.utils.ts` and avoid creating a folder solely to hold `index.ts`.
- Acceptable `index.ts` content is normally limited to named exports such as `export { foo } from './foo.utils';` and `export type { Foo } from './foo.types';`.
- Rare exception: small folder/domain constants may live in `index.ts` when they clearly belong to the folder's public surface and do not introduce implementation logic.

## Extensions

- `.ts` for utilities and types.
- `.types.ts` for type-only files.
- `.constants.ts` for constants.
- `.utils.ts` for helpers.
- `.generated.ts` for generated files.

## Structure

```sh
src/
  utils/
    core.utils.ts
    extensions.utils.ts
  examples/
    complete-store-example/
      TodoContext.ts
      TodoProvider.tsx
      TodoTypes.ts
```

## Imports/Exports

- Prefer named exports; use `index.ts` barrels only to simplify imports, not to hide implementation code.

## Generated Files

- Add `🤖 AUTO-GENERATED`, timestamp, and “DO NOT EDIT MANUALLY”.

## Config Files

- Keep configs in project root (e.g., `tsdown.config.ts`, `oxlint.config.ts`, `oxfmt.config.ts`).
