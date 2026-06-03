import { css } from '@emotion/react';
import type { CvEdition } from 'layout/web/CVEntry';
import type { ReactNode } from 'react';

const screenStyles = {
  list: css`
    display: grid;
    gap: 0.9rem;
  `,
};

interface ProfileParagraphsProps {
  edition?: CvEdition;
  paragraphs: string[];
}

export function ProfileParagraphs({ edition = 'screen', paragraphs }: ProfileParagraphsProps): ReactNode {
  if (edition === 'print') {
    return (
      <div className="cv-entry__body pe-work-desc-multi">
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
