import type { ContactDetails, EducationEntry, LanguageEntry, PhilosophyItem } from 'types';

import type { CVHeaderProps } from 'types/header.types';

export const headerContent: CVHeaderProps = {
  name: 'Justin Rankin',
  positioning: 'Software Engineer · TypeScript · React · Node.js',
  strapline:
    'Front-end architecture, TypeScript-first systems, and developer experience for enterprise-scale products.',
  qrCode: {
    url: 'https://finografic.github.io/cv-justin-rankin',
    label: 'Full CV & portfolio',
  },
};

export const contact: ContactDetails = {
  location: 'Brisbane, Australia',
  phone: '+61 483 757 098',
  phoneHref: 'tel:+61483757098',
  email: 'justin.blair.rankin@gmail.com',
  emailHref: 'mailto:justin.blair.rankin@gmail.com',
  linkedin: 'linkedin.com/in/rankinjustin',
  linkedinHref: 'https://linkedin.com/in/rankinjustin',
  github: 'github.com/finografic',
  githubHref: 'https://github.com/finografic',
  website: 'finografic.github.io/cv-justin-rankin',
  websiteHref: 'https://finografic.github.io/cv-justin-rankin',
  workRights: 'NZ citizen · Full Australian work rights (Subclass 444)',
};

export const philosophy: PhilosophyItem[] = [
  {
    title: 'Explicit architecture, self-documenting code',
    description: 'clear naming, visible structure, readable intent.',
  },
  { title: 'Strong typing', description: 'TypeScript for safety, documentation, and DX.' },
  {
    title: 'Maintainability',
    description: 'limited, purposeful abstraction. Easy to read, navigate, and change next year.',
  },
  {
    title: 'Developer experience',
    description: 'tooling, linting, CI, and onboarding friction directly affect what ships.',
  },
  {
    title: 'ESM-first, monorepos',
    description: 'modern module resolution and workspace architecture by default.',
  },
];

export const education: EducationEntry = {
  institution: 'Ontario College of Art and Design University (OCAD U)',
  detail: 'Design, Advertising Art Direction · Toronto, Canada',
};

export const languages: LanguageEntry[] = [
  { language: 'English', level: 'Native' },
  { language: 'Spanish', level: 'Fluent (spoken + written)' },
  { language: 'Catalan', level: 'Conversational' },
];
