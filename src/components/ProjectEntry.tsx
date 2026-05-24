import type { ReactNode } from 'react';
import type { Project } from 'types';

import { CVSectionEntry } from './CVSectionEntry';

const buildProjectMeta = (project: Project): string | undefined => {
  const parts = [project.version, project.visibility, project.status].filter(Boolean);
  return parts.length ? parts.join(' · ') : undefined;
};

interface ProjectEntryProps {
  project: Project;
}

export function ProjectEntry({ project }: ProjectEntryProps): ReactNode {
  return (
    <CVSectionEntry heading={project.name} meta={buildProjectMeta(project)}>
      <p>{project.description}</p>
    </CVSectionEntry>
  );
}
