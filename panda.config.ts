import { createColorTokens } from '@finografic/design-system/palette';
import { designSystemPreset } from '@finografic/design-system/panda.preset';
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: false,

  presets: ['@pandacss/dev/presets', designSystemPreset],

  include: ['./src/**/*.{ts,tsx}', './node_modules/@finografic/design-system/src/**/*.{ts,tsx}'],
  exclude: [],

  theme: {
    ...designSystemPreset.theme,
    extend: {
      tokens: {
        ...designSystemPreset.theme?.tokens,
        colors: createColorTokens({
          // primary: 'oklch(47.2% 0.1975 338.89)',
          primary: 'oklch(62% 0.078 54)',
          secondary: 'oklch(38% 0 0)', // rgb(68, 68, 68) — v1 grey
          default: 'oklch(65.3% 0.013 58.071)',
          grey: 'oklch(55.2% 0.016 285.938)',
          text: 'oklch(17% 0.005 264)',
        }),
      },
    },
  },

  syntax: 'object-literal',
});
