import { css } from '@emotion/react';

import { theme } from './theme';

const base = import.meta.env.BASE_URL;

export const globalStyles = css`
  @font-face {
    font-family: 'Roboto';
    src: url(${base}fonts/roboto/Roboto-Regular.ttf) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${base}fonts/roboto/Roboto-Bold.ttf) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${base}fonts/roboto/Roboto-Italic.ttf) format('truetype');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Geist';
    src: url(${base}fonts/geist/Geist-Variable.woff2) format('woff2');
    font-weight: 100 900;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Geist';
    src: url(${base}fonts/geist/Geist-Italic.woff2) format('woff2');
    font-weight: 100 900;
    font-style: italic;
    font-display: swap;
  }

  :root {
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
    font-family: ${theme.fonts.body};
    line-height: 1.5;
    font-weight: 400;
    font-optical-sizing: auto;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-synthesis: none;
  }

  * {
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background-color: ${theme.colors.background};
  }

  body {
    margin: 0;
    min-height: 100vh;
    background-color: ${theme.colors.background};
  }

  a {
    color: ${theme.colors.accent};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
    text-underline-offset: 0.2em;
  }

  button {
    font: inherit;
  }

  img,
  picture {
    display: block;
    max-width: 100%;
  }

  #root {
    min-height: 100vh;
  }

  ::selection {
    background-color: ${theme.colors.tagBackground};
  }
`;
