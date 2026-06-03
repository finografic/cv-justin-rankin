import { Fragment } from 'react';
import type { ReactNode } from 'react';
import type { TechnologyGroup } from 'types';

import type { CvView } from 'types/cv-view.types';

import { ItemList } from '../items-list/ItemList';
import { PrintColumnBreak } from '../print-column-break/PrintColumnBreak';
import { styles } from './TechnologyGrid.styles';

interface TechnologyGridProps {
  view?: CvView;
  groups: TechnologyGroup[];
}

export function TechnologyGrid({ view = 'full', groups }: TechnologyGridProps): ReactNode {
  if (view === 'condensed') {
    return (
      <div className="cv-condensed-tech-list">
        {groups.map((group) => (
          <div className="cv-condensed-tech-group" key={group.category}>
            <span className="cv-condensed-tech-category">{group.category}</span>
            <div className="cv-condensed-tech-items-list pill">
              {group.items.map((item) => (
                <span className="cv-condensed-tech-item" key={item}>
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
