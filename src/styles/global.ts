import { css } from '@emotion/react';

import { theme } from './theme';

export const globalStyles = css({
  '@import':
    'url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Manrope:wght@400;500;700;800&family=Outfit:wght@400;500;700&family=Source+Serif+4:opsz,wght@8..60,300;8..60,400;8..60,600&display=swap")',
  ':root': {
    color: theme.colors.text,
    backgroundColor: theme.colors.background,
    fontFamily: theme.fonts.body,
    lineHeight: 1.5,
    fontWeight: 400,
    textRendering: 'optimizeLegibility',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
  },
  '*': {
    boxSizing: 'border-box',
  },
  'html': {
    minHeight: '100%',
    backgroundColor: theme.colors.background,
  },
  'body': {
    margin: 0,
    minHeight: '100vh',
    backgroundColor: theme.colors.background,
  },
  'a': {
    color: theme.colors.accent,
    textDecoration: 'none',
  },
  'a:hover': {
    textDecoration: 'underline',
    textUnderlineOffset: '0.2em',
  },
  'button': {
    font: 'inherit',
  },
  'img, picture': {
    display: 'block',
    maxWidth: '100%',
  },
  '#root': {
    minHeight: '100vh',
  },
  '::selection': {
    backgroundColor: '#eadbce',
  },
});
