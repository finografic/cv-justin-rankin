import { ItemList } from 'components/items-list/ItemList';
import { PrintColumnBreak } from 'components/print-column-break/PrintColumnBreak';
import { CVEntry } from 'layout/web/CVEntry';
import { Fragment } from 'react';
import type { ReactNode } from 'react';
import type { WorkEntry } from 'types';

import type { CvView } from 'types/cv-view.types';

interface WorkExperienceEntryProps {
  view?: CvView;
  entry: WorkEntry;
}

export function WorkExperienceEntry({ view = 'full', entry }: WorkExperienceEntryProps): ReactNode {
  const { technologies, tech } = entry;
  const technologiesVariant = technologies?.variant ?? 'list';
  const isCondensed = view === 'condensed';

  return (
    <Fragment>
      <CVEntry
        view={view}
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
          <p className={isCondensed ? 'cv-entry__tech' : undefined}>{tech}</p>
        ) : null}
      </CVEntry>
      {entry.printBreakAfter ? <PrintColumnBreak when="after" /> : null}
    </Fragment>
  );
}
