/** @jsx jsx */
import { css } from '@emotion/core';

export const cssCustom = css`
  main {
    p,
    p span,
    li,
    li span,
    .pill {
      font-size: 14px;
    }
  }
  /*
   ul.no-bullets {
    list-style-position: outside;
    margin-left: -0.2em;
    li {
      text-indent: 0;
      &:before {
      content: none !important;
    }
  }
  */
`;
