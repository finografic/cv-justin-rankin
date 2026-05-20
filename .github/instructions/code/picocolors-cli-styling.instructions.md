# Picocolors — CLI terminal styling

## Purpose

Use **[picocolors](https://github.com/alexeyraspopov/picocolors)** for ANSI colors in CLI output. It is tiny, dependency-free, and avoids pulling in heavier styling libraries.

## Import (required pattern)

Always import the shared alias **`pc`** from the project helper (so call sites stay consistent and easy to grep):

```typescript
import { pc } from 'utils/picocolors';
```

Do **not** import `picocolors` directly in feature modules unless you are editing `src/utils/picocolors.ts`.

## Basic usage

- Call **`pc.<style>(string)`** inside template literals or `console.log` / `console.error`.
- **Nesting:** wrap the inner styled segment, e.g. `pc.bold(pc.red('text'))`.
- **Single argument:** each formatter accepts one string (or number). To combine multiple values, use a template literal: ``pc.gray(`Label: ${value}`)`` — not multiple arguments like chalk allowed.

### Common styles

| Style        | Example                                |
| ------------ | -------------------------------------- |
| Muted        | `pc.gray('…')`                         |
| Primary line | `pc.cyan('…')`, `pc.blue('…')`         |
| Success      | `pc.green('…')`, `pc.greenBright('…')` |
| Warning      | `pc.yellow('…')`                       |
| Error        | `pc.red('…')`                          |
| Emphasis     | `pc.bold('…')`                         |

### Conditional styling

Avoid dynamic property access (e.g. `pc[name]`) where TypeScript cannot narrow types. Prefer a ternary of formatters:

```typescript
const paint = dryRun ? pc.gray : pc.magenta;
console.log(paint(`Progress: ${n}/${total}`));
```

Or inline:

```typescript
console.log((dryRun ? pc.gray : pc.magenta)(`Final pattern: ${finalPattern}`));
```

## Tests

When tests mock terminal styling, mock the module **`utils/picocolors`** and return a **`pc`** object whose methods pass through the string (identity), matching the colors used in the code under test.

## References

- Implementation: `src/utils/picocolors.ts`
- Dependency: `picocolors` in `package.json`
