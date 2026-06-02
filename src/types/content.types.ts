import type { CVHeaderProps } from 'types/header.types';
import type { ItemListConfig } from 'types/items.types';
import type { PrintBreakAfter } from 'types/print.types';

export interface CVContent {
  headerContent: CVHeaderProps;
  profile: string[];
  contact: ContactDetails;
  technologies: TechnologyGroup[];
  employment: WorkEntry[];
  philosophy: PhilosophyItem[];
  projects: ProjectCategory[];
  aiProjects: Project[];
  cliProjects: Project[];
  fullstackProjects: Project[];
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

export interface WorkEntry extends PrintBreakAfter {
  company: string;
  title: string;
  period: string;
  location: string;
  url?: string;
  description: string[];
  technologies: WorkTechnologies;
}

export interface ProjectCategory extends PrintBreakAfter {
  name: string;
  projects: Project[];
}

export interface Project extends PrintBreakAfter {
  name: string;
  version?: string;
  /** Total commits on the default branch — synced from GitHub via `pnpm sync-git-metadata`. */
  commits?: number;
  visibility?: 'public' | 'private';
  status?: string;
  description: string;
  /** Override GitHub or external link on the title; @finografic/* names auto-link when omitted. */
  titleHref?: string;
}

export interface TechnologyGroup extends ItemListConfig, PrintBreakAfter {
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
