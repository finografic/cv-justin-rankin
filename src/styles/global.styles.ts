import { css } from '@emotion/react';

const base = import.meta.env.BASE_URL;

export const stylesGlobal = css`
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
    /* CV-specific values not covered by Panda tokens */
    --cv-bg: oklch(99.4% 0.007 75);
    --cv-surface: oklch(100% 0 0);
    --cv-text: oklch(17% 0.005 264);
    --cv-muted: oklch(45% 0.008 55);
    --cv-font-heading: 'Raleway', sans-serif;
    --cv-font-body: 'Roboto', 'Geist', sans-serif;
    --cv-shadow: oklch(10% 0.006 50 / 0.08) 0 24px 64px;
    --cv-radius-sm: 0.35rem;
    --cv-radius-md: 0.75rem;
    --cv-radius-lg: 1.25rem;

    color: var(--cv-text);
    background-color: var(--cv-bg);
    font-family: var(--cv-font-body);
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
    background-color: var(--cv-bg);
  }

  body {
    margin: 0;
    min-height: 100vh;
    background-color: var(--cv-bg);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header h1 + p {
    letter-spacing: 0.05em !important;
    user-select: none;
  }

  a {
    color: var(--colors-primary);
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
    background-color: var(--colors-primary-xxxlight);
  }
`;
