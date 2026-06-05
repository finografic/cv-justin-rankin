import { css } from '@emotion/react';

import { VIEW_NAV_OPACITY_TRANSITION } from './view-nav.constants';

export const styles = {
  bar: css`
    position: fixed;
    top: 0.5rem;
    right: 0.66rem;
    z-index: 100;
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    background: color-mix(in srgb, #fff 92%, var(--colors-primary));
    border: 2px solid #e8e8e8;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08);
    font-family: var(--cv-font-body);
    font-size: 0.82rem;
    opacity: 1;
    transition: opacity ${VIEW_NAV_OPACITY_TRANSITION} ease;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;

    span[data-scope='switch'][data-part='label'] {
      opacity: 0.5;
      font-weight: 600;
    }

    /* Unchecked track — DS default is bg.subtle (grey). background-color: none is invalid CSS. */
    [data-scope='switch'][data-part='control'][data-state='unchecked'],
    [data-scope='switch'][data-part='control']:not([data-state='checked']) {
      background-color: color-mix(in srgb, var(--colors-primary) 14%, #fff) !important;
      border: 2px solid color-mix(in srgb, var(--colors-primary) 30%, transparent);

      [data-scope='switch'][data-part='thumb'] {
        transform: translateX(-1px);
        border: 1px solid #fff !important;
      }
    }

    [data-scope='switch'][data-part='control'][data-state='checked'] {
      [data-scope='switch'][data-part='thumb'] {
        border: 1px solid color-mix(in srgb, var(--colors-primary), #fff) !important;
      }

      & + div > span[data-scope='switch'][data-part='label'] {
        opacity: 1;
        color: var(--colors-primary);
        font-weight: 600;
      }
    }

    @media print {
      display: none !important;
    }
  `,

  barHidden: css`
    opacity: 0;
    pointer-events: none;
  `,

  pdfButton: css`
    padding: 0.35rem 0.75rem;
    border-radius: 4px;
    font-family: inherit;
    font-size: inherit;
    font-weight: 600;
    cursor: pointer;
    color: #fff;
    background: var(--colors-primary);
    border: 1px solid var(--colors-primary);

    &:hover {
      background: color-mix(in srgb, var(--colors-primary) 85%, #000);
    }
  `,
};
