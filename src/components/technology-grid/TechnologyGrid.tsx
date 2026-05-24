import type { ReactNode } from 'react';
import type { TechnologyGroup } from 'types';

import { ItemList } from '../items-list/ItemList';
import { styles } from './TechnologyGrid.styles';

interface TechnologyGridProps {
  groups: TechnologyGroup[];
}

export function TechnologyGrid({ groups }: TechnologyGridProps): ReactNode {
  return (
    <div css={styles.groupList}>
      {groups.map((group) => (
        <article css={styles.group} key={group.category}>
          <ItemList
            items={group.items}
            label={group.category}
            labelStyle="category"
            variant={group.variant ?? 'pills'}
          />
          {group.note ? <p css={styles.note}>{group.note}</p> : null}
        </article>
      ))}
    </div>
  );
}
