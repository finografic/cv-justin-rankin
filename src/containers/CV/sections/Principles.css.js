import { css } from '@emotion/core';
import { colors } from 'styles/colors';

export const styles = css`
  ul {
    list-style-position: outside;
    margin-left: -0.2em;
    li {
      text-indent: 0;
      &:before {
        content: none !important;
      }
      label {
        font-weight: 700;
        color: ${colors.b};
        margin-right: 0.33em;
        margin-bottom: 0; /* TEMP FIX/OVERRIDE */
      }
    }
  }
`;
