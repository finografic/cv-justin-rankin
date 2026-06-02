import { oxlintClientConfig, testOverrides, configOverrides } from '@finografic/oxc-config/oxlint';
import { defineConfig } from 'oxlint';
import type { OxlintConfig } from 'oxlint';

export default defineConfig({
  ...oxlintClientConfig,
  overrides: [testOverrides, configOverrides],
} satisfies OxlintConfig);
