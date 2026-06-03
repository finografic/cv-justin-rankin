import type { CvEdition } from 'layout/web/CVEntry';
import type { ReactNode } from 'react';
import type { LanguageEntry } from 'types';

import { ColonList } from '../colon-list/ColonList';
import { styles as colonStyles } from '../colon-list/ColonList.styles';

interface LanguageListProps {
  edition?: CvEdition;
  items: LanguageEntry[];
}

export function LanguageList({ edition = 'screen', items }: LanguageListProps): ReactNode {
  const colonItems = items.map((entry) => ({
    label: entry.language,
    value: entry.level,
  }));

  if (edition === 'print') {
    return <ColonList items={colonItems} listClassName="cv-colon-list pe-lang-list" />;
  }

  return <ColonList items={colonItems} listClassName="cv-colon-list" listCss={colonStyles.languageList} />;
}
