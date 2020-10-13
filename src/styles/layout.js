/** @jsx jsx */
// import { Global } from '@emotion/core';
import { css, jsx } from '@emotion/core';
import { colors } from './colors';

// LAYOUT VARIABLES
export const layout = {
  padding: '15px', // ${layout.padding}: 15px;
  borderRadius: '5px', // ${layout.padding}: 15px;
  sidebar: {
    width: '180px',
  },
  header: {
    height: '120px',
  },
};

// LAYOUT STYLES
export const cssLayout = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    overflow-x: hidden;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
    color: ${colors.textLight};
  }

  #app {
    display: flex;
    min-height: 100%;
    background: ${colors.greyXXLight};
    /* background: ${colors.light.b};*/
  }

  main {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    min-height: 100%;
    header + section {
      flex-grow: 1;
      padding-top: ${layout.header.height};
    }
  }

  aside {
    padding: ${layout.padding};
    background: white;
    z-index: 0;
  }

  section {
    padding: ${layout.padding} calc(${layout.padding} * 1.5);
  }

  article {
    padding: ${layout.padding};
  }

  header,
  footer {
    padding: ${layout.padding} calc(${layout.padding} * 1.5);
    z-index: 0;
    div > div > div {
      display: flex;
      align-items: center;
    }
  }

  .sidebar,
  .header,
  .footer {
    background: white;
    border-color: ${colors.greyMed};
    border-style: solid;
    border-width: 0px;
  }

  .sidebar {
    border-right-width: 1px;
    z-index: 20;
  }

  .header {
    position: fixed;
    width: 100%;
    z-index: 20;
    border-bottom-width: 1px;
    -webkit-backdrop-filter: saturate(180%) blur(20px);
    backdrop-filter: saturate(180%) blur(20px);
    background-color: rgba(255, 255, 255, 0.85);
    -webkit-transition: background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
    transition: background-color 0.5s cubic-bezier(0.28, 0.11, 0.32, 1);
    -webkit-transition-property: background-color, -webkit-backdrop-filter;
    transition-property: background-color, -webkit-backdrop-filter;
    transition-property: background-color, backdrop-filter;
    transition-property: background-color, backdrop-filter, -webkit-backdrop-filter;
  }

  .footer {
    border-top-width: 1px;
  }
`;
