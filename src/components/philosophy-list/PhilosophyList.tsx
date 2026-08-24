import { ColonList } from 'components/colon-list/ColonList';
import { styles as colonStyles } from 'components/colon-list/ColonList.styles';
import type { ReactNode } from 'react';
import type { PhilosophyItem } from 'types';

import type { CvView } from 'types/cv-view.types';

interface PhilosophyListProps {
  view?: CvView;
  items: PhilosophyItem[];
}

export function PhilosophyList({ view = 'full', items }: PhilosophyListProps): ReactNode {
  if (view === 'condensed') {
    return (
      <ColonList
        items={items}
        labelKey="title"
        valueKey="description"
        listClassName="cv-colon-list cv-condensed-philosophy-list"
        valueCss={colonStyles.philosophyValue}
      />
    );
  }

  return (
    <ColonList
      items={items}
      labelKey="title"
      valueKey="description"
      listClassName="cv-colon-list"
      listCss={colonStyles.philosophyList}
      valueCss={colonStyles.philosophyValue}
    />
  );
}
