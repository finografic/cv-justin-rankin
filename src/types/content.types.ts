import type { CVHeaderProps } from 'types/header.types';
import type { ItemListConfig } from 'types/items.types';

export interface CVContent {
  headerContent: CVHeaderProps;
  profile: string[];
  contact: ContactDetails;
  technologies: TechnologyGroup[];
  employment: WorkEntry[];
  philosophy: PhilosophyItem[];
  projects: ProjectCategory[];
  education: EducationEntry[];
  languages: LanguageEntry[];
}

export interface ContactDetails {
  location: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
  phone: string;
  workRightsNotes: string[];
}

export type WorkTechnologies = ItemListConfig;

export interface WorkEntry {
  company: string;
  title: string;
  period: string;
  location: string;
  url?: string;
  description: string[];
  technologies: WorkTechnologies;
}

export interface ProjectCategory {
  name: string;
  projects: Project[];
}

export interface Project {
  name: string;
  version?: string;
  visibility?: 'public' | 'private';
  status?: string;
  description: string;
  /** Override GitHub or external link on the title; public @finografic/* names auto-link when omitted. */
  titleHref?: string;
}

export interface TechnologyGroup extends ItemListConfig {
  category: string;
  note?: string;
}

export interface PhilosophyItem {
  title: string;
  description: string;
}

export interface EducationEntry {
  institution: string;
  degree: string;
  location: string;
  description: string;
}

export interface LanguageEntry {
  language: string;
  level: string;
}
