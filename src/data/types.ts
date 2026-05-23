export interface CVContent {
  positioning: string;
  profileSummary: {
    short: string[];
    extended: string[];
  };
  contact: ContactInfo;
  technologies: TechnologyGroup[];
  workExperience: WorkEntry[];
  philosophy: PhilosophyItem[];
  technicalProjects: ProjectCategory[];
  education: EducationEntry[];
  languages: LanguageEntry[];
}

export interface ContactInfo {
  location: string;
  email: string;
  linkedin: string;
  github: string;
  website: string;
  phone: string;
  workRightsNote: string;
}

export interface TechnologyGroup {
  category: string;
  items: string[];
  note?: string;
}

export interface WorkEntry {
  company: string;
  title: string;
  period: string;
  location: string;
  description: string[];
  technologies: string[];
}

export interface PhilosophyItem {
  title: string;
  description: string;
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
