import type { PhilosophyItem } from '../data/types';
import type { ReactNode } from 'react';

import { styles } from './PhilosophyList.styles';

interface PhilosophyListProps {
  items: PhilosophyItem[];
}

export function PhilosophyList({ items }: PhilosophyListProps): ReactNode {
  return (
    <ul css={styles.list}>
      {items.map((item) => (
        <li css={styles.item} key={item.title}>
          <strong>{item.title}</strong> {item.description}
        </li>
      ))}
    </ul>
  );
}
