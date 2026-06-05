import { configOverrides, oxlintClientConfig } from '@finografic/oxc-config/oxlint';
import { defineConfig } from 'oxlint';
import type { OxlintConfig } from 'oxlint';

export default defineConfig({
  ...oxlintClientConfig,
  rules: {
    ...oxlintClientConfig.rules,
    // React 17+ automatic JSX runtime (tsconfig jsx: react-jsx) — no default React import
    'react/react-in-jsx-scope': 'off',
    // Side-effect CSS imports (Astro layouts, global styles) are intentional.
    'import/no-unassigned-import': ['warn', { allow: ['**/*.css'] }],
  },
  overrides: [configOverrides],
} satisfies OxlintConfig);
