import type { CVContent } from 'types';

import { aiProjects } from './ai-projects.data';
import { contact, education, headerContent, languages, philosophy } from './content.data';
import { employment } from './employment.data';
import { profile } from './profile.data';
import { projects } from './projects.data';
import { technologies } from './technologies.data';

export const CONTENT: CVContent = {
  headerContent,
  profile,
  contact,
  philosophy,
  technologies,
  employment,
  projects,
  aiProjects,
  education,
  languages,
};
