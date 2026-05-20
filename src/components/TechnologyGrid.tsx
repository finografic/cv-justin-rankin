import styled from '@emotion/styled';
import type { TechnologyGroup } from '../data/types';
import type { ReactNode } from 'react';

import { theme } from '../styles/theme';

const GroupList = styled.div({
  display: 'grid',
  gap: '1rem',
});

const Group = styled.article({
  display: 'grid',
  gap: '0.5rem',
});

const GroupHeading = styled.h3({
  margin: 0,
  fontFamily: theme.fonts.heading,
  fontSize: '0.9rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.06em',
});

const Chips = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.45rem',
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

const Chip = styled.li({
  'padding': '0.28rem 0.55rem',
  'border': `1px solid ${theme.colors.border}`,
  'borderRadius': theme.radius.sm,
  'backgroundColor': theme.colors.tagBackground,
  'fontFamily': theme.fonts.heading,
  'fontSize': '0.8rem',
  'fontWeight': 600,
  '@media print': {
    backgroundColor: 'transparent',
    borderColor: '#c6c6c6',
  },
});

const Note = styled.p({
  margin: 0,
  color: theme.colors.muted,
  fontSize: '0.9rem',
});

interface TechnologyGridProps {
  groups: TechnologyGroup[];
}

export function TechnologyGrid({ groups }: TechnologyGridProps): ReactNode {
  return (
    <GroupList>
      {groups.map((group) => (
        <Group key={group.category}>
          <GroupHeading>{group.category}</GroupHeading>
          <Chips>
            {group.items.map((item) => (
              <Chip key={item}>{item}</Chip>
            ))}
          </Chips>
          {group.note ? <Note>{group.note}</Note> : null}
        </Group>
      ))}
    </GroupList>
  );
}
