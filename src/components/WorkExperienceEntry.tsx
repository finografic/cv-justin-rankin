import { ItemList } from 'components/items-list/ItemList';
import { PrintColumnBreak } from 'components/print-column-break/PrintColumnBreak';
import { CVEntry } from 'layout/web/CVEntry';
import { Fragment } from 'react';
import type { CvEdition } from 'layout/web/CVEntry';
import type { ReactNode } from 'react';
import type { WorkEntry } from 'types';

interface WorkExperienceEntryProps {
  edition?: CvEdition;
  entry: WorkEntry;
}

export function WorkExperienceEntry({ edition = 'screen', entry }: WorkExperienceEntryProps): ReactNode {
  const { technologies, tech } = entry;
  const technologiesVariant = technologies?.variant ?? 'list';
  const isPrint = edition === 'print';

  return (
    <Fragment>
      <CVEntry
        edition={edition}
        meta={`${entry.period} · ${entry.location}`}
        subtitle={entry.title}
        title={entry.company}
        titleHref={entry.url}
      >
        {entry.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        {technologies ? (
          <ItemList
            className="work-entry-technologies"
            items={technologies.items}
            label={technologiesVariant === 'list' ? 'Technologies' : undefined}
            variant={technologiesVariant}
          />
        ) : tech ? (
          <p className={isPrint ? 'cv-entry__tech' : undefined}>{tech}</p>
        ) : null}
      </CVEntry>
      {entry.printBreakAfter ? <PrintColumnBreak when="after" /> : null}
    </Fragment>
  );
}
