import type { CVContent } from 'types';

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
  education,
  languages,
};
