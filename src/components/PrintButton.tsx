import styled from '@emotion/styled';
import type { ReactNode } from 'react';

import { theme } from '../styles/theme';

const Button = styled.button({
  'justifySelf': 'start',
  'padding': '0.75rem 1rem',
  'border': `1px solid ${theme.colors.accent}`,
  'borderRadius': '999px',
  'backgroundColor': theme.colors.surface,
  'color': theme.colors.accent,
  'cursor': 'pointer',
  'fontFamily': theme.fonts.heading,
  'fontSize': '0.82rem',
  'fontWeight': 700,
  'letterSpacing': '0.08em',
  'textTransform': 'uppercase',
  'transition': 'background-color 180ms ease, color 180ms ease, transform 180ms ease',
  ':hover': {
    backgroundColor: theme.colors.accent,
    color: theme.colors.surface,
    transform: 'translateY(-1px)',
  },
});

function handlePrint(): void {
  globalThis.print();
}

export function PrintButton(): ReactNode {
  return (
    <Button className="screen-only" onClick={handlePrint} type="button">
      Print / Save PDF
    </Button>
  );
}
