import { readFileSync, realpathSync } from 'node:fs';
import { access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

// @vitest-environment node
describe('@finografic/design-system integration', () => {
  const packageRoot = realpathSync(resolve('node_modules/@finografic/design-system'));

  it('installs a complete published package (dist entry + avatar recipe)', async () => {
    expect(packageRoot).toMatch(/@finografic-design-system|design-system/);
    await access(resolve(packageRoot, 'dist/index.js'));
    await access(resolve(packageRoot, 'dist/components/avatar/avatar.recipe.js'));
  });

  it('ships avatar recipe CSS Panda can extract (borderRadius full)', () => {
    const recipe = readFileSync(resolve(packageRoot, 'dist/components/avatar/avatar.recipe.js'), 'utf8');
    expect(recipe).toContain('borderRadius');
    expect(recipe).toContain('full');
  });
});
