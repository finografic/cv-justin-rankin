import { css } from '@emotion/core';

export const styles = css`
  ul {
    list-style-position: outside;
    margin-left: -0.2em;
    li {
      text-indent: 0;
      &:before {
      content: none !important;
    }
  }
`;
