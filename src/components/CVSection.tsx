import styled from '@emotion/styled';
import type { ReactNode } from 'react';

import { theme } from '../styles/theme';

const sectionVariantStyles = {
  compact: {
    gap: '0.9rem',
  },
  default: {
    gap: '1rem',
  },
  grid: {
    gap: '1rem',
  },
} as const;

const Section = styled.section<{
  variant: keyof typeof sectionVariantStyles;
}>(({ variant }) => ({
  display: 'grid',
  gap: sectionVariantStyles[variant].gap,
}));

const Heading = styled.h2({
  'margin': 0,
  'paddingBottom': '0.75rem',
  'borderBottom': `1px dotted ${theme.colors.accentSoft}`,
  'color': theme.colors.accent,
  'fontFamily': theme.fonts.heading,
  'fontSize': '1.15rem',
  'fontWeight': 700,
  'letterSpacing': '0.08em',
  'textTransform': 'uppercase',
  '@media print': {
    color: '#000000',
    borderBottomColor: '#999999',
  },
});

interface CVSectionProps {
  title: string;
  variant?: 'default' | 'compact' | 'grid';
  children: ReactNode;
  className?: string;
  id?: string;
}

export function CVSection({
  title,
  variant = 'default',
  children,
  className,
  id,
}: CVSectionProps): ReactNode {
  const combinedClassName = className ? `cv-section ${className}` : 'cv-section';

  return (
    <Section className={combinedClassName} id={id} variant={variant}>
      <Heading>{title}</Heading>
      {children}
    </Section>
  );
}
