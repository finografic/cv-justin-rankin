import styled from '@emotion/styled';
import type { ReactNode } from 'react';

import { theme } from '../styles/theme';

const Wrap = styled.div({
  display: 'grid',
  gap: '1.5rem',
  gridTemplateColumns: '5.5rem minmax(0, 1fr)',
  alignItems: 'center',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gridTemplateColumns: '1fr',
    gap: '1rem',
  },
});

const Avatar = styled.div({
  width: '5.5rem',
  height: '5.5rem',
  borderRadius: '999px',
  border: `1px solid ${theme.colors.border}`,
  backgroundColor: theme.colors.tagBackground,
  color: theme.colors.accent,
  fontFamily: theme.fonts.heading,
  fontSize: '1.5rem',
  fontWeight: 800,
  display: 'grid',
  placeItems: 'center',
  letterSpacing: '0.08em',
});

const Name = styled.h1({
  margin: 0,
  fontFamily: theme.fonts.heading,
  fontSize: 'clamp(2rem, 3vw, 3.3rem)',
  lineHeight: 0.95,
  letterSpacing: '-0.05em',
});

const Positioning = styled.p({
  margin: '0.45rem 0 0',
  color: theme.colors.accent,
  fontFamily: theme.fonts.heading,
  fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
  fontWeight: 600,
  letterSpacing: '0.06em',
  textTransform: 'uppercase',
});

const Strap = styled.p({
  margin: '0.7rem 0 0',
  maxWidth: '52rem',
  color: theme.colors.muted,
  fontSize: '1rem',
});

interface CVHeaderProps {
  name: string;
  positioning: string;
  strapline: string;
}

export function CVHeader({ name, positioning, strapline }: CVHeaderProps): ReactNode {
  return (
    <Wrap>
      <Avatar aria-hidden="true">JR</Avatar>
      <div>
        <Name>{name}</Name>
        <Positioning className="cv-accent">{positioning}</Positioning>
        <Strap>{strapline}</Strap>
      </div>
    </Wrap>
  );
}
