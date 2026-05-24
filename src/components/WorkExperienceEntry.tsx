import { ItemList } from 'components/items-list/ItemList';
import { CVEntry } from 'layout/CVEntry';
import type { ReactNode } from 'react';
import type { WorkEntry } from 'types';

interface WorkExperienceEntryProps {
  entry: WorkEntry;
}

export function WorkExperienceEntry({ entry }: WorkExperienceEntryProps): ReactNode {
  const technologiesVariant = entry.technologies.variant ?? 'list';

  return (
    <CVEntry
      meta={`${entry.period} · ${entry.location}`}
      subtitle={entry.title}
      title={entry.company}
      titleHref={entry.url}
    >
      {entry.description.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <ItemList
        className="work-entry-technologies"
        items={entry.technologies.items}
        label={technologiesVariant === 'list' ? 'Technologies' : undefined}
        variant={technologiesVariant}
      />
    </CVEntry>
  );
}
