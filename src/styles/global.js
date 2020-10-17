/** @jsx jsx */
import 'sanitize.css/sanitize.css';
import 'sanitize.css/typography.css';
import 'sanitize.css/forms.css';
import 'sanitize.css/assets.css';
import 'sanitize.css/reduce-motion.css';
// import { Global } from '@emotion/core';
import { css } from '@emotion/core';
import { colors } from './colors';
import { layout, cssLayout } from './layout';
import { cssCustom } from './custom';

export const cssGlobal = css`
  ${cssLayout} /* layout imported in */

  h1 {
    color: ${colors.a};
  }
  h2 {
    color: ${colors.b};
    font-weight: 700;
  }
  h3 {
    color: ${colors.light.a};
  }
  h4 {
    color: ${colors.dark.b};
    margin: 1.33em 0 0.33em;
  }
  a {
    color: ${colors.dark.b};
    text-decoration: none;
  }
  pre {
    font-size: 0.6em;
    line-height: 1.5;
    color: ${colors.textLight};
  }
  hr {
    border: none;
    border-bottom: 1px dotted ${colors.greyMed};
  }
  button {
    display: flex !important;
    align-items: center;
    justify-content: flex-end;
    background: ${colors.c};
    margin: 0 0.4rem !important;
  }
  fieldset {
    border: 0;
  }

  ${cssCustom} /* custom styles and overrides imported in */

  /* NEW !! pointer-events */
  /* NO SAFARI SUPPORT ??? */
  pointer-events: auto;
  pointer-events: none; /* ALSO MAKE divs etc CLICK-THROUGH !!! */
  pointer-events: visibleFill; /* SVG only  */
  pointer-events: visible; /* SVG only */
  pointer-events: fill; /* SVG only */

  /* Global values */
  pointer-events: inherit;
  pointer-events: initial;
  pointer-events: unset;
`;
