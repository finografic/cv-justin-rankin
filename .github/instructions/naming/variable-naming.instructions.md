# Variable Naming Conventions

## General Rule

**All variables must use at least one full word.** Avoid abbreviations and short-form names unless they are common, well-understood conventions.

## ❌ Avoid Short-Form Variables

### Examples of What NOT to Use:

```typescript
// ❌ BAD: Abbreviated names
const pkg: PackageJson = ...;
const finKw = ...;
const r1 = ensureKeyword(...);
const r2 = ensureKeyword(...);
const idx = 0; // Use 'index' instead
const pkgRoot = findPackageRoot(...);
```

### ✅ Use Full Words Instead:

```typescript
// ✅ GOOD: Full, descriptive names
const packageJson: PackageJson = ...;
const includeFinograficKeyword = ...;
const finograficKeywordResult = ensureKeyword(...);
const packageNameKeywordResult = ensureKeyword(...);
const index = 0;
const packageRoot = findPackageRoot(...);
```

## ✅ Acceptable Short Names

### Iterator Variables

Short single-letter variables are acceptable **only** in iterator callbacks where the context is clear:

```typescript
// ✅ GOOD: Clear in iterator context
const keywords = keywordRaw.filter((k) => typeof k === 'string');
const items = array.map((item) => item.value);
```

### Common Conventions

These are well-understood and acceptable:

```typescript
// ✅ GOOD: Common conventions
const vars: TemplateVars = ...;
const params: CreateParams = ...;
const args: string[] = ...;
const cwd: string = ...;
const props: ComponentProps = ...;
```

### Path Variables (When Clear)

Function parameters for source/destination paths are acceptable when the context is unambiguous:

```typescript
// ✅ GOOD: Clear function parameters
export async function copyTemplate(
  src: string,
  dest: string,
  vars: TemplateVars,
): Promise<void> { ... }
```

However, **avoid** `src`/`dest` in regular code where they might be confused with folder names:

```typescript
// ❌ BAD: Could be confused with src/ or dist/ folders
const src = resolve(templateDir, item.templatePath);
const dest = resolve(targetDir, item.targetPath);

// ✅ GOOD: Clear they are paths, not folders
const sourcePath = resolve(templateDir, item.templatePath);
const destinationPath = resolve(targetDir, item.targetPath);
```

## Reserved Words

**Never use reserved JavaScript/TypeScript words as variable names:**

```typescript
// ❌ BAD: 'package' is a reserved word
const package: PackageJson = ...;

// ✅ GOOD: Use alternative
const packageJson: PackageJson = ...;
```

## Result Variables

When storing results from function calls, use descriptive names:

```typescript
// ❌ BAD: Unclear what r1/r2 represent
const r1 = ensureKeyword(keywords, finograficKw);
const r2 = ensureKeyword(updated, packageName);

// ✅ GOOD: Descriptive names
const finograficKeywordResult = ensureKeyword(keywords, includeFinograficKeyword);
const packageNameKeywordResult = ensureKeyword(updated, packageNameWithoutScope);
```

## Import Aliases

**Always use `clack` for `@clack/prompts` imports:**

```typescript
// ✅ GOOD: Consistent naming
import * as clack from '@clack/prompts';

// ❌ BAD: Inconsistent aliases
import * as p from '@clack/prompts';
import * as prompts from '@clack/prompts';
```

## Summary

- ✅ Use full words: `packageJson`, `packageRoot`, `sourcePath`, `destinationPath`
- ✅ Accept iterator vars: `k`, `item`, `entry` in callbacks
- ✅ Accept common conventions: `vars`, `params`, `args`, `cwd`, `props`
- ❌ Avoid abbreviations: `pkg`, `finKw`, `r1`, `r2`, `idx`
- ❌ Avoid `src`/`dest` in regular code (use `sourcePath`/`destinationPath`)
- ❌ Never use reserved words: `package`, `class`, `function`, etc.
- ✅ Always use `clack` for `@clack/prompts` imports
