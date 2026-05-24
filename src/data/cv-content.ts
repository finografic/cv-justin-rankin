import type {
  CVContent,
  EducationEntry,
  LanguageEntry,
  PhilosophyItem,
  ProjectCategory,
  TechnologyGroup,
  WorkEntry,
} from './types';

const technologies: TechnologyGroup[] = [
  {
    category: 'Core',
    variant: 'bullets',
    items: ['TypeScript', 'JavaScript', 'React', 'Node.js'],
  },
  {
    category: 'Architecture & Patterns',
    items: [
      'Micro-frontends',
      'pnpm workspaces',
      'Turborepo',
      'Shared component systems',
      'Design systems',
      'ESM-first modules',
      'RESTful APIs',
      '@tanstack/query',
    ],
  },
  {
    category: 'Front-end & UI',
    items: [
      'Accessibility (WCAG, ARIA)',
      'Ark UI',
      'Radix UI',
      'PandaCSS',
      'Emotion',
      'SASS / CSS',
      'Responsive design',
      'Mobile-first development',
      'i18n / localization',
    ],
  },
  {
    category: 'Tooling & DX',
    items: [
      'OXC',
      'ESLint',
      'Vite',
      'Vitest',
      '@testing-library',
      'CI/CD pipelines',
      'Git workflows',
      'Docker',
      'GitHub Packages',
      'pnpm',
    ],
  },
  {
    category: 'CLI & Developer Tools',
    items: [
      'Commander',
      '@clack/prompts',
      'TUI rendering',
      'Code generation',
      'Codemods',
      'Dependency governance automation',
    ],
  },
  {
    category: 'AI & Agentic Development',
    items: [
      'AI-assisted engineering workflows',
      'Claude Code',
      'Cursor',
      'Copilot',
      'Anthropic',
      'Ollama',
      'MCP server development',
      'Structured knowledge pipelines',
      'Prompt engineering',
      'System instruction design',
    ],
  },
  {
    category: 'Testing',
    items: ['Vitest', '@testing-library/react', 'Jest', 'Playwright'],
    note: 'Playwright is present as an emerging part of the current stack.',
  },
  {
    category: 'Databases',
    items: ['SQLite', 'Drizzle ORM', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Platforms & Infrastructure',
    items: ['Linux', 'macOS', 'AWS', 'GitHub Actions', 'TeamCity'],
  },
];

const workExperience: WorkEntry[] = [
  {
    company: 'Sage',
    title: 'Software Engineer',
    period: '2021 - 2026',
    location: 'Barcelona, Spain',
    url: 'https://www.sage.com',
    description: [
      'Front-end and full-stack development for enterprise SaaS products within Sage Small Business Segment, focused on accounting, finance, invoicing, administrative platforms, dashboards, and shared front-end infrastructure.',
      'Worked inside a large-scale micro-frontend ecosystem across squads in Europe, South Africa, Canada, and the United States, collaborating with front-end, back-end, architecture, UX, product, and platform teams.',
      'Contributed reusable UI systems, scalable component patterns, modernization work, Node.js upgrades, security patching, accessibility improvements, and reduction of legacy technical debt with strict testing and code coverage standards.',
      'Pushed for engineering consistency, explicit architecture, developer experience, and maintainable patterns across large enterprise codebases, including PR review culture, refactoring initiatives, and selective AI-assisted engineering workflows.',
    ],
    technologies: {
      variant: 'pills',
      items: [
        'TypeScript',
        'React',
        'Node.js',
        'Micro-frontends',
        'Design systems',
        'RESTful APIs',
        'CI/CD',
        'Accessibility',
      ],
    },
  },
  {
    company: 'eDreams ODIGEO / edreams.com',
    title: 'Front-end Developer',
    period: '2019 - 2020',
    location: 'Barcelona, Spain',
    url: 'https://www.edreams.com',
    description: [
      'Built hotel and flight booking flows across desktop and mobile experiences for one of Europe’s largest online travel platforms.',
      'Worked in agile product pods on feature delivery, integrations, testing workflows, refactoring, release processes, and continuous integration across a shared front-end environment.',
    ],
    technologies: {
      variant: 'list',
      items: ['JavaScript', 'Node.js', 'RESTful APIs', 'Docker', 'CI/CD', 'SASS / CSS'],
    },
  },
  {
    company: 'Pangealand S.L. / exoticca.com',
    title: 'Senior Software Engineer',
    period: '2018 - 2019',
    location: 'Barcelona, Spain',
    url: 'https://www.exoticca.com',
    description: [
      'Led development and architectural refactor of a B2B front-end platform and supporting APIs to prepare client and server systems for global expansion and multi-locale support.',
      'Maintained an internal operational dashboard used across multiple departments, with emphasis on workflow optimization, platform usability, and scalable front-end and back-end architecture.',
    ],
    technologies: {
      variant: 'pills',
      items: ['JavaScript', 'Angular', 'Node.js', 'MongoDB', 'MySQL', 'RESTful APIs', 'PHP', 'AWS'],
    },
  },
  {
    company: 'Econocom Spain / Digital Dimension',
    title: 'Full-stack Developer',
    period: '2016 - 2017',
    location: 'Barcelona, Spain',
    url: 'https://www.econocom.com/en',
    description: [
      'Delivered front-end and back-end work for a SaaS platform serving France and Spain, integrating multiple external APIs and transforming structured data into operational dashboard workflows.',
      'Built early large-scale React and Redux experience inside an agile Scrum environment, contributing to responsive interfaces, UX improvements, and modernization work.',
    ],
    technologies: {
      variant: 'list',
      items: ['React', 'Redux', 'Node.js', 'JavaScript', 'Docker', 'RESTful APIs', 'SASS / CSS'],
    },
  },
  {
    company: '70 Main Street Studios',
    title: 'Front-end Developer / UX Designer',
    period: '2015 - 2016',
    location: 'Toronto, Canada',
    url: 'http://www.70mainstreet.com',
    description: [
      'Developed responsive interfaces and reusable front-end components for clients including Scotiabank, TD Bank, Rogers, and Nickelodeon.',
      'Worked inside a multidisciplinary agency environment spanning design, development, UX, marketing platforms, and project delivery.',
    ],
    technologies: {
      variant: 'list',
      items: ['JavaScript', 'Angular', 'Ruby', 'MySQL', 'SASS / CSS', 'Jenkins CI'],
    },
  },
  {
    company: 'Apple UK & Spain',
    title: 'Software Developer / Technical Support',
    period: '2010 - 2012',
    location: 'Barcelona, Spain',
    url: 'https://www.apple.com/uk',
    description: [
      'Promoted internally from technical support and sales into an IT-focused role after independently building an internal call-tracking and reporting application.',
      'The platform improved workflow efficiency, operational visibility, and reporting, and was later adopted by 300+ employees for high-volume Black Friday operations.',
    ],
    technologies: {
      variant: 'list',
      items: ['JavaScript', 'PHP', 'MySQL', 'CSS'],
    },
  },
  {
    company: 'Metropolis Media Group S.L.',
    title: 'Full-stack Developer, Designer, Product Manager',
    period: '2003 - 2014',
    location: 'Barcelona, Spain',
    url: 'http://metropolismedia.us',
    description: [
      'Long-term contracting across front-end and back-end development, UX design, digital consulting, product management, and print and media design for multiple industries.',
      'Built websites, custom CMS platforms, operational business tools, publishing systems, and online business platforms alongside branding and layout design work.',
    ],
    technologies: {
      variant: 'list',
      items: ['JavaScript', 'PHP', 'WordPress', 'MySQL', 'SASS / CSS', 'Linux administration'],
    },
  },
];

const philosophy: PhilosophyItem[] = [
  {
    title: 'Explicit architecture',
    description:
      'Clear naming, visible structure, readable intent, and self-documenting code over hidden conventions.',
  },
  {
    title: 'Strong typing',
    description: 'TypeScript used as safety, documentation, and developer experience in a single layer.',
  },
  {
    title: 'Maintainability',
    description:
      'Reusable code with limited, purposeful abstraction that stays easy to read and change next year.',
  },
  {
    title: 'Developer experience',
    description:
      'Tooling, linting, CI, and onboarding friction directly affect engineering quality and delivery speed.',
  },
  {
    title: 'Modern defaults',
    description: 'ESM-first modules and monorepo-native workflows as sensible long-term foundations.',
  },
];

const technicalProjects: ProjectCategory[] = [
  {
    name: '@finografic — TypeScript Tooling & DX Ecosystem',
    projects: [
      {
        name: '@finografic/genx',
        version: 'v5.24',
        visibility: 'public',
        status: 'active',
        description:
          'Project generator and codemod toolkit that scaffolds packages, migrates conventions, audits repos for drift, and keeps the broader ecosystem structurally consistent.',
      },
      {
        name: '@finografic/oxc-config',
        version: 'v2.5',
        visibility: 'public',
        status: 'active',
        description:
          'Shared Rust-powered OXC formatting and linting presets for TypeScript, React, CSS, JSON, markdown, and role-specific package profiles.',
      },
      {
        name: '@finografic/deps-policy',
        version: 'v0.20',
        visibility: 'public',
        status: 'active',
        description:
          'Central dependency governance package and CLI used to audit, update, and snapshot version policy across the ecosystem.',
      },
      {
        name: '@finografic/gli',
        version: 'v1.23',
        visibility: 'public',
        status: 'active',
        description:
          'Git CLI with a live-updating terminal pull-request dashboard, multi-repo config, interactive helpers, and GitHub CLI integration.',
      },
      {
        name: '@finografic/design-system',
        visibility: 'public',
        status: 'active',
        description:
          'Token-driven React design system built with PandaCSS and Ark UI, covering 20+ components, semantic tokens, responsive viewport rules, and icon tooling.',
      },
      {
        name: '@finografic/zustand-context-creator',
        version: 'v1.2',
        visibility: 'public',
        status: 'active',
        description:
          'Utility for creating type-safe Zustand stores with React Context integration, generated setters, persistence, and DevTools support.',
      },
    ],
  },
  {
    name: 'AI & experimentation',
    projects: [
      {
        name: 'LLAAB',
        visibility: 'private',
        status: 'active development',
        description:
          'Local-first monorepo exploring structured knowledge extraction, LLM routing, agent orchestration, transcript ingestion, typed markdown nodes, and MCP server workflows.',
      },
      {
        name: '@finografic/harness',
        version: 'v0.0',
        visibility: 'public',
        status: 'early stage',
        description:
          'Composable preprocessing pipeline designed to extract, reduce, and structure inputs before LLM usage to improve signal density per token.',
      },
    ],
  },
  {
    name: 'Production full-stack platform',
    projects: [
      {
        name: 'touch-monorepo',
        visibility: 'private',
        status: 'active',
        description:
          'Full-stack TypeScript monorepo for an IoT-connected product management and operational control system using React, React Router, PandaCSS, Hono, Drizzle ORM, SQLite, USB HID integration, i18n, auth, and Raspberry Pi deployment tooling.',
      },
    ],
  },
];

const education: EducationEntry[] = [
  {
    institution: 'Ontario College of Art and Design University (OCAD U)',
    degree: 'Design, Advertising Art Direction',
    location: 'Toronto, Canada',
    description:
      'Multidisciplinary program spanning graphic design, multimedia, communication, conceptual development, and collaborative design thinking.',
  },
];

const languages: LanguageEntry[] = [
  { language: 'English', level: 'Native' },
  { language: 'Spanish', level: 'Fluent, spoken and written' },
  { language: 'Catalan', level: 'Conversational' },
];

export const cvContent: CVContent = {
  positioning: 'Software Engineer · TypeScript · React · Node.js',
  profileSummary: {
    short: [
      'Software engineer focused on front-end architecture, TypeScript-first systems, and developer experience. Over fifteen years building for the web across freelance, agency, startup, enterprise, and product environments in Canada, Spain, and Australia.',
      'The last five years were spent at Sage, contributing to enterprise SaaS products inside a large-scale micro-frontend architecture, shared UI systems, reusable component libraries, platform improvements, and front-end modernization.',
      'Outside of work, Justin builds and maintains a personal TypeScript tooling ecosystem spanning shared linting and formatting configs, CLI tooling, project generation, codemods, dependency governance, and a design system built on PandaCSS and Ark UI.',
      'Preference for explicit architecture over implicit convention, strong typing, self-documenting code, and systems that stay readable and scalable by default.',
    ],
    extended: [],
  },
  contact: {
    location: 'Brisbane, Australia',
    email: 'justin.blair.rankin@gmail.com',
    linkedin: 'linkedin.com/in/rankinjustin',
    github: 'github.com/finografic',
    website: 'finografic.github.io/cv-justin-rankin',
    phone: '+61 483 757 098',
    workRightsNote:
      'NZ citizen with full Australian work rights (Subclass 444). VEVO verification available on request.',
  },
  technologies,
  workExperience,
  philosophy,
  technicalProjects,
  education,
  languages,
};
