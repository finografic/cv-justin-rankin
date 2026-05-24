import type { ContactInfo, EducationEntry, LanguageEntry, PhilosophyItem } from 'types';

import type { CVHeaderProps } from 'types/header.types';

export const headerContent: CVHeaderProps = {
  name: 'Justin Rankin',
  positioning: 'Software Engineer · TypeScript · React · Node.js',
  strapline:
    'Front-end architecture, TypeScript systems, and tooling-led engineering for products that need to scale cleanly.',
};

export const contact: ContactInfo = {
  location: 'Brisbane, Australia',
  email: 'justin.blair.rankin@gmail.com',
  linkedin: 'linkedin.com/in/rankinjustin',
  github: 'github.com/finografic',
  website: 'finografic.github.io/cv-justin-rankin',
  phone: '+61 483 757 098',
  workRightsNote:
    'NZ citizen with full Australian work rights (Subclass 444). VEVO verification available on request.',
};

export const philosophy: PhilosophyItem[] = [
  {
    title: 'Explicit architecture, self-documenting code',
    description:
      'Clear naming, semantic conventions, visible structure, readable intent. JSDoc for complex logic and AST usage.',
  },
  {
    title: 'Strong typing',
    description: 'TypeScript for safety, documentation, and developer experience in one.',
  },
  {
    title: 'Maintainability',
    description:
      'Reusable code with limited, purposeful abstraction. Easy to read, easy to navigate, easy to change next year.',
  },
  {
    title: 'Developer experience',
    description: 'Tooling, linting, CI, and onboarding friction directly affect what ships.',
  },
  {
    title: 'ESM-first, monorepo-native',
    description: 'Modern module resolution and workspace architecture as defaults.',
  },
];

export const education: EducationEntry[] = [
  {
    institution: 'Ontario College of Art and Design University (OCAD U)',
    degree: 'Design, Advertising Art Direction',
    location: 'Toronto, Canada',
    description:
      'Multidisciplinary program covering core design principles, graphic design, multimedia, and communication in advertising. Emphasis on critical thinking, conceptual development, and collaboration.',
  },
];

export const languages: LanguageEntry[] = [
  { language: 'English', level: 'Native' },
  { language: 'Spanish', level: 'Fluent (spoken + written)' },
  { language: 'Catalan', level: 'Conversational' },
];
