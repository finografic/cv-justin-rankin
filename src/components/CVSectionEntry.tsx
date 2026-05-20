import styled from '@emotion/styled';
import type { ReactNode } from 'react';

import { theme } from '../styles/theme';

const Wrap = styled.article({
  display: 'grid',
  gap: '0.55rem',
});

const Heading = styled.h3({
  margin: 0,
  fontFamily: theme.fonts.heading,
  fontSize: '1.05rem',
  lineHeight: 1.15,
});

const Subheading = styled.p({
  'margin': 0,
  'color': theme.colors.accent,
  'fontFamily': theme.fonts.heading,
  'fontWeight': 700,
  'fontSize': '0.92rem',
  'textTransform': 'uppercase',
  'letterSpacing': '0.04em',
  '@media print': {
    color: '#000000',
  },
});

const Meta = styled.p({
  margin: 0,
  color: theme.colors.muted,
  fontStyle: 'italic',
  fontSize: '0.98rem',
});

const TechList = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.45rem',
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

const TechItem = styled.li({
  'padding': '0.2rem 0.5rem',
  'border': `1px solid ${theme.colors.border}`,
  'borderRadius': '999px',
  'backgroundColor': theme.colors.tagBackground,
  'color': theme.colors.muted,
  'fontFamily': theme.fonts.heading,
  'fontSize': '0.78rem',
  'fontWeight': 600,
  '@media print': {
    backgroundColor: 'transparent',
    color: '#000000',
    borderColor: '#c6c6c6',
  },
});

interface CVSectionEntryProps {
  heading: string;
  subheading?: string;
  meta?: string;
  children: ReactNode;
  technologies?: string[];
}

export function CVSectionEntry({
  heading,
  subheading,
  meta,
  children,
  technologies,
}: CVSectionEntryProps): ReactNode {
  return (
    <Wrap className="print-avoid-break">
      {subheading ? <Subheading>{subheading}</Subheading> : null}
      <Heading>{heading}</Heading>
      {meta ? <Meta>{meta}</Meta> : null}
      <div>{children}</div>
      {technologies?.length ? (
        <TechList>
          {technologies.map((technology) => (
            <TechItem key={technology}>{technology}</TechItem>
          ))}
        </TechList>
      ) : null}
    </Wrap>
  );
}
