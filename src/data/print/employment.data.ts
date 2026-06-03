import type { PrintEmploymentEntry } from 'types/print-content.types';

export const employment: PrintEmploymentEntry[] = [
  {
    company: 'Sage',
    url: 'https://www.sage.com',
    title: 'Software Engineer',
    period: '2021 – 2026',
    location: 'Barcelona, Spain',
    description: [
      "Full-stack development for enterprise SaaS products within Sage's Small Business Segment (SBS), focused on accounting, finance, invoicing, and administrative platforms across a large-scale micro-frontend ecosystem.",
      'Collaborated across international squads (Europe, South Africa, Canada, US) spanning front-end, back-end, architecture, UX, product, and shared platform teams. Built reusable front-end systems, shared UI functionality, and scalable component patterns using Sage Design System tooling and the Carbon component ecosystem.',
      'Contributed to modernization initiatives including dependency migration, front-end form architecture, security patching, and accessibility improvements. Unit, e2e, and integration testing with strict code coverage requirements. Daily pull-request reviews, refactoring initiatives, and front-end standards discussions across squads.',
      'Explored and integrated AI-assisted and agentic development workflows into engineering processes. Independent research into modern AI tooling applied selectively within professional engineering context.',
    ],
    tech: 'TypeScript, React, Node.js, Micro-frontends, Design systems, RESTful APIs, CI/CD, GitHub workflows, Accessibility',
  },
  {
    company: 'eDreams ODIGEO',
    url: 'https://www.edreams.com',
    title: 'Front-end Developer',
    period: '2019 – 2020',
    location: 'Barcelona, Spain',
    description: [
      "Front-end development for one of Europe's largest online travel platforms, working on hotel and flight booking flows across desktop and mobile. Agile product pods, continuous integration, cross-team code reviews, QA processes, and release pipelines across an international product organisation.",
    ],
    tech: 'JavaScript, Node.js, Docker, CI/CD, SASS/CSS',
  },
  {
    company: 'Pangealand S.L. / exoticca.com',
    url: 'https://www.exoticca.com',
    title: 'Senior Software Engineer',
    period: '2018 – 2019',
    location: 'Barcelona, Spain',
    description: [
      'B2B front-end platform refactor and internal operational dashboard serving multiple departments. Prepared client and server systems for global expansion with multi-locale support and scalable full-stack architecture.',
    ],
    tech: 'JavaScript, Angular, Node.js, MongoDB, MySQL, PHP, AWS',
  },
  {
    company: 'Econocom / Digital Dimension',
    url: 'https://www.econocom.com/en',
    title: 'Full-stack Developer',
    period: '2016 – 2017',
    location: 'Barcelona, Spain',
    description: [
      'Full-stack SaaS serving France and Spain. Integration of multiple external APIs and transformation of structured data for dashboard presentation and operational workflows. Early large-scale React and Redux experience within an agile engineering team.',
    ],
    tech: 'React, Redux, Node.js, JavaScript, Docker, SASS/CSS',
  },
  {
    company: '70 Main Street Studios',
    url: 'http://www.70mainstreet.com',
    title: 'Front-end Developer / UX Designer',
    period: '2015 – 2016',
    location: 'Toronto, Canada',
    description: [
      'Front-end development and UX for international clients including Scotiabank, TD Bank, Rogers, and Nickelodeon. Reusable front-end components, marketing platforms, and responsive web experiences within a multidisciplinary agency environment.',
    ],
    tech: 'JavaScript, Angular, Ruby, MySQL, SASS/CSS',
  },
  {
    company: 'Apple UK & Spain',
    url: 'https://www.apple.com/uk',
    title: 'Software Developer / Technical Support',
    period: '2010 – 2012',
    location: 'Barcelona, Spain',
    description: [
      'Promoted from technical support after independently building an internal call-tracking and operational reporting application. The platform improved workflow efficiency, operational visibility, and reporting for management and support teams. Adopted by management for 300+ employees during Black Friday operations.',
    ],
    tech: 'JavaScript, PHP, MySQL, CSS',
  },
];
