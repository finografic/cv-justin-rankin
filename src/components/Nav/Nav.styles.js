import { css } from '@emotion/core';
import { layout, colors } from 'styles';

export const styles = css`
  padding-top: ${layout.padding};
  li {
    &::before {
      content: unset;
    }
    font-size: 1em;
    /*padding: 0em 0 !important;*/
    a {
      display: block;
      padding: 0.3em;
      color: ${colors.a};

      font-weight: 500;
      svg {
        margin-right: 0.33em;
        transform: translateY(-5%);
      }
    }
    a.selected {
      color: ${colors.dark.b};
    }
  }
`;
