# Modern TypeScript Patterns

## Purpose

Encourage Copilot to propose modern TS patterns when they add clear value.

## Prefer

- Branded types for distinct primitives.
- Result types for explicit error handling.
- Discriminated unions for state machines.
- Runtime validation (Zod) for external data.
- Type utilities (type-fest) for complex transformations.

## Avoid

- Over-engineering; advanced FP libraries unless requested.

## Examples

```typescript
type Result<T, E = Error> = { ok: true; value: T } | { ok: false; error: E };

type State =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: string }
  | { status: 'error'; error: Error };
```

## Guidance

- Explain briefly when introducing a pattern and why it helps.
