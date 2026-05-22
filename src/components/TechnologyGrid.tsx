import type { TechnologyGroup } from '../data/types';
import type { ReactNode } from 'react';

import { styles } from './TechnologyGrid.styles';

interface TechnologyGridProps {
  groups: TechnologyGroup[];
}

export function TechnologyGrid({ groups }: TechnologyGridProps): ReactNode {
  return (
    <div css={styles.groupList}>
      {groups.map((group) => (
        <article css={styles.group} key={group.category}>
          <h3 css={styles.groupHeading}>{group.category}</h3>
          <ul css={styles.chips}>
            {group.items.map((item) => (
              <li css={styles.chip} key={item}>
                {item}
              </li>
            ))}
          </ul>
          {group.note ? <p css={styles.note}>{group.note}</p> : null}
        </article>
      ))}
    </div>
  );
}
