import styled from '@emotion/styled';
import type { Project } from '../data/types';
import type { ReactNode } from 'react';

import { CVSectionEntry } from './CVSectionEntry';

const Description = styled.p({
  margin: 0,
});

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
      <Description>{project.description}</Description>
    </CVSectionEntry>
  );
}
