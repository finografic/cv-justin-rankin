import type { ReactNode } from 'react';

import { parseHtmlDescription, parseMarkdownDescription } from 'utils/description-text.utils';

import type { CvView } from 'types/cv-view.types';

interface DescriptionTextProps {
  text: string;
  view?: CvView;
}

export function DescriptionText({ text, view = 'full' }: DescriptionTextProps): ReactNode {
  return view === 'condensed' ? parseMarkdownDescription(text) : parseHtmlDescription(text);
}
