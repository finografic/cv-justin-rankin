# Provider & Context Patterns

## Structure (3 files)

```
providers/ProviderName/
  ProviderNameContext.ts          # Main logic & implementation
  ProviderNameContext.types.ts    # Types (lib-like)
  ProviderNameProvider.tsx        # Provider component
```

## 4th File (when needed)

- Add `provider-name-utils.types.ts` for complex/shared parameter types.

## Context.ts

- Co-locate enums and defaults.
- Implement store and actions; generate typed setters.

## Context.types.ts

- Keep interfaces clean; avoid implementation details.

## Naming & Hooks

- Files as above; hook: `useProviderName()`.

### Utils Types (When Needed)

- **Co-locate with usage** - Types near methods that use them
- **Use descriptive names** - `MethodNameParams` pattern
- **Document complex types** - JSDoc for parameter objects
- **Export only what's needed** - Minimal public interface

## Migration Pattern

### From Noisy to Clean

1. **Identify complex signatures** - Methods with 3+ parameters
2. **Create parameter interfaces** - Extract to utils types file
3. **Update method signatures** - Use single parameter object
4. **Update implementations** - Use inline destructuring
5. **Clean up imports** - Remove unused type imports

### Example Migration

```typescript
// Before: Noisy types file
import type { FilterKey } from 'types/orders.types';
import type { DataEntry } from 'types/data.types';
import type { RegionLocale } from '@workspace/i18n';
import type { OrderModel } from 'types/models/order.model';
import type { OrderReadableModel } from 'types/models/order-readable.model';

handleRouteChange: (
  filterKey: FilterKey | undefined,
  loaderData: DataEntry[],
  padsConfig: PadConfig,
  dataPool: DataEntry[] | OrderModel[] | OrderReadableModel[],
  serverFieldMap: Record<string, string>,
  currentLanguage?: RegionLocale,
) => void;

// After: Clean types file
import type { HandleRouteChangeParams } from './layout-ui-utils.types';

handleRouteChange: (params: HandleRouteChangeParams) => void;
```

## Tool Integration

This pattern is designed to work with custom Zustand context utilities that provide:

- **Auto-generated setters** - Type-safe setter creation
- **Context integration** - Seamless React Context setup
- **Type inference** - Full TypeScript support
- **Minimal boilerplate** - Quick setup and maintenance

The eventual CLI generator will create this structure automatically, ensuring consistency across all providers.
