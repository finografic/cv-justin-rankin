import type { PrintCVContent } from 'types/print-content.types';

import { contact, education, headerContent, languages, philosophy } from './content.data';
import { employment } from './employment.data';
import { profile } from './profile.data';
import { projects } from './projects.data';
import { technologies } from './technologies.data';

export const PRINT_CONTENT: PrintCVContent = {
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
