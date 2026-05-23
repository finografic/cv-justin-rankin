import { createColorTokens } from '@finografic/design-system/palette';
import { designSystemPreset } from '@finografic/design-system/panda.preset';
import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: false,
  presets: ['@pandacss/dev/presets', designSystemPreset],

  /**
   * Panda scans these globs to decide which recipe CSS to emit into styled-system/.
   *
   * - App source: ./src
   * - DS (registry): dist `**` `*.recipe.js` — published package ships compiled recipes in dist/components/,
   *   not src/components/
   * - DS (pnpm link): optional src tree when the monorepo checkout is linked
   *
   * See finografic.pandaConsumerInclude in @finografic/design-system/package.json
   */
  include: [
    './src/**/*.{ts,tsx}',
    './node_modules/@finografic/design-system/dist/**/*.recipe.js',
    './node_modules/@finografic/design-system/src/**/*.{ts,tsx}',
  ],
  exclude: [],

  /**
   * Generate React JSX components from Panda patterns.
   * Gives us <Box mx="4" py="2"> etc. with full token + responsive support.
   * Use Box for spacing/layout wrappers. Use Row/Col for flex grid layout.
   */
  jsxFramework: 'react',
  outdir: './styled-system',

  theme: {
    ...designSystemPreset.theme,
    extend: {
      tokens: {
        ...designSystemPreset.theme?.tokens,
        colors: createColorTokens({
          primary: 'oklch(65.16% 0.0625 55.37)',
          secondary: 'oklch(33.68% 0 58)',
          default: 'oklch(65.3% 0.013 58.071)',
          grey: 'oklch(55.2% 0.016 285.938)',
          text: 'oklch(17% 0.005 264)',
        }),
      },
    },
  },

  syntax: 'object-literal',
});
