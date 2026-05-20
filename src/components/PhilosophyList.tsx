import styled from '@emotion/styled';
import type { PhilosophyItem } from '../data/types';
import type { ReactNode } from 'react';

const List = styled.ul({
  display: 'grid',
  gap: '0.85rem',
  margin: 0,
  paddingLeft: '1rem',
});

const Item = styled.li({
  paddingLeft: '0.2rem',
});

const Strong = styled.strong({
  display: 'inline-block',
  marginRight: '0.3rem',
});

interface PhilosophyListProps {
  items: PhilosophyItem[];
}

export function PhilosophyList({ items }: PhilosophyListProps): ReactNode {
  return (
    <List>
      {items.map((item) => (
        <Item key={item.title}>
          <Strong>{item.title}</Strong>
          {item.description}
        </Item>
      ))}
    </List>
  );
}
