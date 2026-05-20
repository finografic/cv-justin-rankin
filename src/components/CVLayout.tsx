import styled from '@emotion/styled';
import type { PropsWithChildren, ReactNode } from 'react';

import { theme } from '../styles/theme';

const PageShell = styled.div({
  minHeight: '100vh',
  padding: '3rem 1.5rem 4rem',
  backgroundColor: theme.colors.background,
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    padding: '1.25rem 0.875rem 2rem',
  },
});

const Paper = styled.div({
  'maxWidth': '1180px',
  'margin': '0 auto',
  'padding': '2.5rem',
  'backgroundColor': theme.colors.surface,
  'boxShadow': theme.shadow,
  'borderRadius': theme.radius.lg,
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    padding: '1.25rem',
    borderRadius: theme.radius.md,
  },
  '@media print': {
    boxShadow: 'none',
    borderRadius: 0,
    maxWidth: 'none',
    padding: 0,
  },
});

export function CVLayout({ children }: PropsWithChildren): ReactNode {
  return (
    <PageShell>
      <Paper className="print-stack">{children}</Paper>
    </PageShell>
  );
}
