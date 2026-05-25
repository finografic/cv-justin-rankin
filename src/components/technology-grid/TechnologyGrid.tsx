import { Fragment } from 'react';
import type { ReactNode } from 'react';
import type { TechnologyGroup } from 'types';

import { ItemList } from '../items-list/ItemList';
import { PrintColumnBreak } from '../print-column-break/PrintColumnBreak';
import { styles } from './TechnologyGrid.styles';

interface TechnologyGridProps {
  groups: TechnologyGroup[];
}

export function TechnologyGrid({ groups }: TechnologyGridProps): ReactNode {
  return (
    <div css={styles.groupList}>
      {groups.map((group) => (
        <Fragment key={group.category}>
          <article css={styles.group}>
            <ItemList
              items={group.items}
              label={group.category}
              labelStyle="category"
              variant={group.variant ?? 'pills'}
              wrap={group.wrap}
            />
            {group.note ? <p css={styles.note}>{group.note}</p> : null}
          </article>
          {group.printBreakAfter ? <PrintColumnBreak when="after" /> : null}
        </Fragment>
      ))}
    </div>
  );
}
