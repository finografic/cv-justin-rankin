# TypeScript Patterns & Best Practices

## Parameters

- Use named parameters with inline destructuring and type annotation.
- Prefer named parameters for functions with 2+ args; consider for complex single args.
- Create interfaces for parameter objects.

```typescript
interface CreateUserParams {
  name: string;
  email: string;
  role: 'admin' | 'user';
  isActive?: boolean;
}
const createUser = ({ name, email, role, isActive = true }: CreateUserParams) => {};
```

## Benefits

- Better type safety and readability.
- Order-independent calls; easier refactors.

## Considerations

- Use `interface` for extensibility.
- Provide defaults in destructuring.
- Use unions for constrained values; generics for reuse.
