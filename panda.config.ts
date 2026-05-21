import { createColorTokens } from '@finografic/design-system/palette';
import { designSystemPreset } from '@finografic/design-system/panda.preset';
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  /**
   * Disable Panda's built-in preflight — design-system/styles/reset.css is
   * imported manually in main.tsx.
   */
  preflight: false,

  presets: ['@pandacss/dev/presets', designSystemPreset],

  include: ['./src/**/*.{ts,tsx}', './node_modules/@finografic/design-system/src/**/*.{ts,tsx}'],
  exclude: [],

  theme: {
    ...designSystemPreset.theme,
    extend: {
      tokens: {
        ...designSystemPreset.theme?.tokens,
        // #a8886a (v1 gold) ≈ oklch(62% 0.069 56) — shifted ~10% darker + richer
        colors: createColorTokens({
          primary: 'oklch(53% 0.085 53)',
          secondary: 'oklch(49.6% 0.265 301.924)',
          success: 'oklch(60.4% 0.194 149.214)',
          warning: 'oklch(71% 0.188 70.08)',
          danger: 'oklch(55.7% 0.245 27.325)',
          info: 'oklch(58.8% 0.158 241.966)',
          default: 'oklch(65.3% 0.013 58.071)',
          grey: 'oklch(55.2% 0.016 285.938)',
          text: 'oklch(17% 0.005 264)',
        }),
      },
    },
  },

  syntax: 'object-literal',
});
