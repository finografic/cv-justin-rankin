import { oxlintClientConfig, configOverrides } from '@finografic/oxc-config/oxlint';
import { defineConfig } from 'oxlint';
import type { OxlintConfig } from 'oxlint';

export default defineConfig({
  ...oxlintClientConfig,
  overrides: [configOverrides],
} satisfies OxlintConfig);
