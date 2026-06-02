import { AvatarDS } from '@finografic/design-system';
import { GlobeIcon, HomeIcon, MailIcon } from '@finografic/icons';
import { Global } from '@emotion/react';
import { GithubIcon } from 'assets/icons/GithubIcon';
import { LinkedInIcon } from 'assets/icons/LinkedInIcon';
import { MobileIcon } from 'assets/icons/MobileIcon';
import photo from 'assets/justin-original.png';
import { QRCodeSVG } from 'qrcode.react';
import { useEffect } from 'react';
import type { ComponentType, ReactNode } from 'react';

import { printEditionStyles } from './printEdition.styles';

import { stylesGlobal } from 'styles/global.styles';

const QR_URL = 'https://finografic.github.io/cv-justin-rankin';

interface ContactRowProps {
  Icon: ComponentType<any>;
  text: string;
  href?: string;
}

function ContactRow({ Icon, text, href }: ContactRowProps): ReactNode {
  const content = href ? (
    <a href={href} rel="noopener noreferrer" target="_blank">
      {text}
    </a>
  ) : (
    text
  );
  return (
    <li className="pe-contact-row">
      <Icon className="pe-contact-icon" />
      {content}
    </li>
  );
}

const PROFILE = [
  'Software engineer focused on front-end architecture, TypeScript-first systems, and developer experience. Over fifteen years building for the web, from freelance and agency work through startup and enterprise environments across Canada, Spain, and Australia.',
  'Spent the last five years at Sage delivering enterprise SaaS within a large-scale micro-frontend architecture across international squads. Increasing focus on maintainability, DX tooling, and AI-assisted development workflows.',
  'Actively building a personal open-source TypeScript tooling ecosystem: linting and formatting configs, CLI tools, a project generator and codemod toolkit, dependency governance, and a design system. Published via GitHub Packages.',
];

const TECHNOLOGIES = [
  { category: 'Core', items: ['TypeScript', 'JavaScript', 'React', 'Node.js'] },
  {
    category: 'Architecture',
    items: [
      'Micro-frontends',
      'Monorepo (pnpm, Turborepo)',
      'Shared component systems',
      'Design systems',
      'ESM-first',
      '@tanstack/query',
    ],
  },
  {
    category: 'Front-end',
    items: [
      'Accessibility (WCAG/ARIA)',
      'Ark UI',
      'Radix UI',
      'React Hook Form',
      'Zod',
      'PandaCSS',
      'Emotion',
      'SASS/CSS',
      'i18n',
    ],
  },
  {
    category: 'Tooling',
    items: [
      'OXC (oxlint/oxfmt)',
      'ESLint',
      'Vite',
      'tsdown',
      'Vitest',
      '@testing-library',
      'CI/CD (TeamCity, GitHub Actions)',
      'Docker',
      'pnpm',
    ],
  },
  {
    category: 'CLI',
    items: ['Commander', '@clack/prompts', 'TUI rendering', 'code generation', 'dependency governance'],
  },
  {
    category: 'AI & Agentic',
    items: [
      'Claude Code',
      'Cursor',
      'Copilot',
      'LLM integration (Anthropic, Ollama)',
      'MCP server development',
      'prompt engineering',
    ],
  },
  { category: 'Server', items: ['Hono', 'RESTful APIs', 'Drizzle ORM', 'SQLite', 'MySQL'] },
];

const PHILOSOPHY = [
  {
    title: 'Explicit architecture, self-documenting code',
    desc: ' - clear naming, visible structure, readable intent',
  },
  { title: 'Strong typing', desc: ' - TypeScript for safety, documentation, and DX in one' },
  {
    title: 'Maintainability',
    desc: ' - limited, purposeful abstraction. Easy to read, navigate, and change next year',
  },
  {
    title: 'Developer experience',
    desc: ' - tooling, linting, CI, and onboarding friction directly affect what ships',
  },
  {
    title: 'ESM-first, monorepo-native',
    desc: ' - modern module resolution and workspace architecture as defaults',
  },
];

const EMPLOYMENT = [
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
      'Explored and integrated AI-assisted and agentic development workflows into engineering processes.',
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
      'Full-stack SaaS serving France and Spain. API integrations, structured data dashboards, and front-end architecture. Early large-scale React and Redux experience within an agile engineering team.',
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
      'Front-end development and UX for international clients including Scotiabank, TD Bank, Rogers, and Nickelodeon. Responsive web experiences within a multidisciplinary agency environment.',
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
      'Promoted from technical support after independently building an internal call-tracking application. Adopted by management for 300+ employees during Black Friday operations.',
    ],
    tech: 'JavaScript, PHP, MySQL, CSS',
  },
];

const PROJECTS = [
  {
    name: 'LLAAB',
    href: 'https://github.com/finografic/llaab',
    meta: 'active',
    description:
      'Local-first AI agent architecture base. Structured knowledge vault with typed markdown nodes, LLM router (Anthropic + Ollama), agent orchestration, and MCP server. Built to formalise AI-assisted workflows in TypeScript engineering.',
  },
  {
    name: '@finografic/design-system',
    href: 'https://github.com/finografic/design-system',
    meta: 'v1.18',
    description:
      'Token-driven React design system on PandaCSS and Ark UI. 20+ components, OKLCH colour palette, semantic tokens, responsive viewport system, and icon management tooling.',
  },
  {
    name: '@finografic/genx',
    href: 'https://github.com/finografic/genx',
    meta: 'v5.33',
    description:
      'Project generator and codemod toolkit. Scaffolds packages, migrates conventions (OXC, AI configs, Vitest), audits repos for drift. The central tool tying the ecosystem together.',
  },
  {
    name: 'touch-monorepo',
    href: 'https://github.com/finografic/touch-monorepo',
    meta: 'production',
    description:
      'Full-stack IoT product management system. React + Hono + Drizzle ORM + SQLite, hardware relay via USB HID, role-based auth, real-time session management, multi-locale (EN/ES/CA). Raspberry Pi deployment.',
  },
  {
    name: '@finografic/gli',
    href: 'https://github.com/finografic/gli',
    meta: 'v1.25',
    description:
      'Git CLI with live-updating terminal PR dashboard. Interactive rebase, branch selection, multi-repo config, clickable PR links.',
  },
];

const EDUCATION = {
  institution: 'Ontario College of Art and Design University (OCAD U)',
  detail: 'Design, Advertising Art Direction · Toronto, Canada',
};

const LANGUAGES = [
  { language: 'English', level: 'Native' },
  { language: 'Spanish', level: 'Fluent (spoken + written)' },
  { language: 'Catalan', level: 'Conversational' },
];

export default function PrintEditionFullApp(): ReactNode {
  useEffect(() => {
    document.documentElement.classList.add('pe-edition', 'pe-full');
    return () => {
      document.documentElement.classList.remove('pe-edition', 'pe-full');
    };
  }, []);

  return (
    <>
      <Global styles={[stylesGlobal, printEditionStyles]} />

      <div className="pe-shell">
        <div className="pe-paper">
          {/* ── Header ── */}
          <header className="pe-header">
            <div className="pe-header-content">
              <AvatarDS alt="Justin Rankin" shape="circle" size="2xl" src={photo} variant="elevated" />
              <div className="pe-header-text">
                <h1 className="pe-name">Justin Rankin</h1>
                <p className="pe-positioning">Software Engineer · TypeScript · React · Node.js</p>
                <p className="pe-strapline">
                  Front-end architecture, TypeScript-first systems, and developer experience for
                  enterprise-scale products.
                </p>
              </div>
            </div>
            <div className="pe-header-qr">
              <QRCodeSVG level="M" size={68} value={QR_URL} />
              <p className="pe-qr-label">Full CV & portfolio</p>
            </div>
          </header>

          {/* ── Two-column content ── */}
          <div className="pe-content-grid">
            {/* ──── Left column ──── */}
            <div className="pe-col pe-col--left">
              {/* Contact */}
              <section className="pe-section pe-section-contact">
                <h2 className="pe-section-heading">Contact</h2>
                <ul className="pe-contact-list">
                  <ContactRow Icon={HomeIcon} text="Brisbane, Australia" />
                  <ContactRow Icon={MobileIcon} href="tel:+61483757098" text="+61 483 757 098" />
                  <ContactRow
                    Icon={MailIcon}
                    href="mailto:justin.blair.rankin@gmail.com"
                    text="justin.blair.rankin@gmail.com"
                  />
                  <ContactRow
                    Icon={LinkedInIcon}
                    href="https://linkedin.com/in/rankinjustin"
                    text="linkedin.com/in/rankinjustin"
                  />
                  <ContactRow
                    Icon={GithubIcon}
                    href="https://github.com/finografic"
                    text="github.com/finografic"
                  />
                  <ContactRow
                    Icon={GlobeIcon}
                    href="https://finografic.github.io/cv-justin-rankin"
                    text="finografic.github.io/cv-justin-rankin"
                  />
                </ul>
                <p className="pe-work-rights">NZ citizen · Full Australian work rights (Subclass 444)</p>
              </section>

              {/* Profile */}
              <section className="pe-section pe-section-profile">
                <h2 className="pe-section-heading">Profile</h2>
                <div className="pe-work-desc-multi">
                  {PROFILE.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </section>

              {/* Technologies */}
              <section className="pe-section pe-section-technologies">
                <h2 className="pe-section-heading">Technologies</h2>
                <div className="pe-tech-list">
                  {TECHNOLOGIES.map((group) => (
                    <div className="pe-tech-group" key={group.category}>
                      <span className="pe-tech-category">{group.category}</span>
                      <div className="pe-tech-items-list pill">
                        {group.items.map((item) => (
                          <span className="pe-tech-item" key={item}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Engineering Philosophy */}
              <section className="pe-section pe-section-philosophy">
                <h2 className="pe-section-heading">Engineering Philosophy</h2>
                <ul className="pe-philosophy-list">
                  {PHILOSOPHY.map((item) => (
                    <li key={item.title}>
                      <span className="pe-philosophy-title">{item.title}</span>
                      <span className="pe-philosophy-desc"> {item.desc}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Technical Projects */}
              <section className="pe-section pe-section-projects">
                <h2 className="pe-section-heading">Technical Projects</h2>
                <div className="pe-project-list">
                  {PROJECTS.map((proj) => (
                    <div className="pe-project" key={proj.name}>
                      <p className="pe-project-title">
                        <a href={proj.href} rel="noopener noreferrer" target="_blank">
                          {proj.name}
                        </a>
                        <span className="pe-project-meta">{proj.meta}</span>
                      </p>
                      <p className="pe-project-desc">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* ──── Right column ──── */}
            <div className="pe-col pe-col--right">
              {/* Work Experience */}
              <section className="pe-section pe-section-work">
                <h2 className="pe-section-heading">Work Experience</h2>
                <div className="pe-work-list">
                  {EMPLOYMENT.map((job) => (
                    <div className="pe-work-entry" key={job.company}>
                      <h3 className="pe-work-company">
                        <a href={job.url} rel="noopener noreferrer" target="_blank">
                          {job.company}
                        </a>
                      </h3>
                      <p className="pe-work-role">{job.title}</p>
                      <p className="pe-work-meta">
                        {job.period} · {job.location}
                      </p>
                      <div className="pe-work-desc-multi">
                        {job.description.map((para) => (
                          <p key={para}>{para}</p>
                        ))}
                      </div>
                      <p className="pe-work-tech">{job.tech}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="pe-section pe-section-education">
                <h2 className="pe-section-heading">Education</h2>
                <p className="pe-edu-institution">{EDUCATION.institution}</p>
                <p className="pe-edu-degree">{EDUCATION.detail}</p>
              </section>

              {/* Languages */}
              <section className="pe-section pe-section-languages">
                <h2 className="pe-section-heading">Languages</h2>
                <ul className="pe-lang-list">
                  {LANGUAGES.map((lang) => (
                    <li key={lang.language}>
                      <strong>{lang.language}</strong>
                      <span className="pe-lang-colon">:</span>
                      <span className="pe-lang-level">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
