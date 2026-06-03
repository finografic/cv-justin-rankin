import { Fragment } from 'react';
import type { CvEdition } from 'layout/web/CVEntry';
import type { ReactNode } from 'react';
import type { TechnologyGroup } from 'types';

import { ItemList } from '../items-list/ItemList';
import { PrintColumnBreak } from '../print-column-break/PrintColumnBreak';
import { styles } from './TechnologyGrid.styles';

interface TechnologyGridProps {
  edition?: CvEdition;
  groups: TechnologyGroup[];
}

export function TechnologyGrid({ edition = 'screen', groups }: TechnologyGridProps): ReactNode {
  if (edition === 'print') {
    return (
      <div className="pe-tech-list">
        {groups.map((group) => (
          <div className="pe-tech-group" key={group.category}>
            <span className="pe-tech-category">{group.category}</span>
            <div className="pe-tech-items-list pill">
              {group.items.map((item) => (
                <span className="pe-tech-item" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

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
