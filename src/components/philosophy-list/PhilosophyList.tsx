import { ColonList } from 'components/colon-list/ColonList';
import { styles as colonStyles } from 'components/colon-list/ColonList.styles';
import type { CvEdition } from 'layout/web/CVEntry';
import type { ReactNode } from 'react';
import type { PhilosophyItem } from 'types';

interface PhilosophyListProps {
  edition?: CvEdition;
  items: PhilosophyItem[];
}

export function PhilosophyList({ edition = 'screen', items }: PhilosophyListProps): ReactNode {
  const colonItems = items.map((item) => ({
    label: item.title,
    value: item.description,
  }));

  if (edition === 'print') {
    return (
      <ColonList
        items={colonItems}
        listClassName="cv-colon-list pe-philosophy-list"
        valueCss={colonStyles.philosophyValue}
      />
    );
  }

  return (
    <ColonList
      items={colonItems}
      listClassName="cv-colon-list"
      listCss={colonStyles.philosophyList}
      valueCss={colonStyles.philosophyValue}
    />
  );
}
