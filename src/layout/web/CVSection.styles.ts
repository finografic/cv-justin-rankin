import { css } from '@emotion/react';

import { webSectionHeading } from 'styles/section-heading.styles';

export const styles = {
  section: css`
    display: grid;
    gap: 1rem;
    font-size: 0.9rem;
    line-height: 1.66;

    &.compact {
      gap: 0.9rem;
    }

    ul {
      padding-left: 0;
    }
  `,

  heading: webSectionHeading,
};
