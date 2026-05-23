import { mergeConfig } from 'vite';
import { defineConfig } from 'vitest/config';

import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'node',
      include: ['**/*.test.ts', '**/*.spec.ts', '**/*.test.tsx', '**/*.spec.tsx'],
      exclude: ['node_modules', 'dist'],
      passWithNoTests: true,
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html'],
      },
    },
  }),
);
