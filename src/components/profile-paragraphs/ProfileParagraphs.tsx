import { css } from '@emotion/react';
import type { ReactNode } from 'react';

import type { CvView } from 'types/cv-view.types';

const screenStyles = {
  list: css`
    display: grid;
    gap: 0.9rem;
  `,
};

interface ProfileParagraphsProps {
  view?: CvView;
  paragraphs: string[];
}

export function ProfileParagraphs({ view = 'full', paragraphs }: ProfileParagraphsProps): ReactNode {
  if (view === 'condensed') {
    return (
      <div className="cv-entry__body cv-condensed-work-desc-multi">
        {paragraphs.map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>
    );
  }

  return (
    <div css={screenStyles.list}>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </div>
  );
}
