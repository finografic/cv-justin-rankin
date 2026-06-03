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
  /** Web screen edition — one or more lines under contact links. */
  workRightsNotes?: string[];
  /** Print handout — single condensed work-rights line. */
  workRights?: string;
  /** Optional precomputed hrefs (print data); web edition builds these in `ContactInfo`. */
  phoneHref?: string;
  emailHref?: string;
  linkedinHref?: string;
  githubHref?: string;
  websiteHref?: string;
}

export type WorkTechnologies = ItemListConfig;

export interface WorkEntry extends PrintBreakAfter {
  company: string;
  title: string;
  period: string;
  location: string;
  url?: string;
  description: string[];
  /** Web screen edition — pill or list of technologies. */
  technologies?: WorkTechnologies;
  /** Print handout — comma-separated technology line. */
  tech?: string;
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
  degree?: string;
  location?: string;
  description?: string;
  /** Print handout — combined degree · location when fields are folded into one line. */
  detail?: string;
}

export interface LanguageEntry {
  language: string;
  level: string;
}

/** Condensed print handout (`?edition=print` / `PRINT_CONTENT`). */
export interface PrintCVContent {
  headerContent: CVHeaderProps;
  profile: string[];
  contact: ContactDetails;
  technologies: TechnologyGroup[];
  philosophy: PhilosophyItem[];
  employment: WorkEntry[];
  projects: Project[];
  education: EducationEntry;
  languages: LanguageEntry[];
}
