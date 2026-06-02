export interface PrintHeaderContent {
  name: string;
  positioning: string;
  strapline: string;
  qrCode: {
    label: string;
    url: string;
  };
}

export interface PrintContactDetails {
  location: string;
  phone: string;
  phoneHref: string;
  email: string;
  emailHref: string;
  linkedin: string;
  linkedinHref: string;
  github: string;
  githubHref: string;
  website: string;
  websiteHref: string;
  workRights: string;
}

export interface PrintTechnologyGroup {
  category: string;
  items: string[];
}

export interface PrintPhilosophyItem {
  title: string;
  desc: string;
}

export interface PrintEmploymentEntry {
  company: string;
  url: string;
  title: string;
  period: string;
  location: string;
  description: string[];
  tech: string;
}

import type { LanguageEntry, Project } from './content.types';

import type { CVHeaderProps } from 'types/header.types';

export interface PrintEducationEntry {
  institution: string;
  detail: string;
}

export interface PrintCVContent {
  headerContent: CVHeaderProps;
  profile: string[];
  contact: PrintContactDetails;
  technologies: PrintTechnologyGroup[];
  philosophy: PrintPhilosophyItem[];
  employment: PrintEmploymentEntry[];
  projects: Project[];
  education: PrintEducationEntry;
  languages: LanguageEntry[];
}
