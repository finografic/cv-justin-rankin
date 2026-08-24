import type { ReactNode } from 'react';
import type { LanguageEntry } from 'types';

import type { CvView } from 'types/cv-view.types';

import { ColonList } from '../colon-list/ColonList';
import { styles as colonStyles } from '../colon-list/ColonList.styles';

interface LanguageListProps {
  view?: CvView;
  items: LanguageEntry[];
}

export function LanguageList({ view = 'full', items }: LanguageListProps): ReactNode {
  if (view === 'condensed') {
    return (
      <ColonList
        items={items}
        labelKey="language"
        valueKey="level"
        listClassName="cv-colon-list cv-condensed-lang-list"
      />
    );
  }

  return (
    <ColonList
      items={items}
      labelKey="language"
      valueKey="level"
      listClassName="cv-colon-list"
      listCss={colonStyles.languageList}
    />
  );
}
