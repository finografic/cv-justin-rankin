import { AvatarDS } from '@finografic/design-system';
import { Global } from '@emotion/react';
import photo from 'assets/justin.png';
import { QRCodeSVG } from 'qrcode.react';
import { useEffect } from 'react';
import type { ReactNode } from 'react';

import { printEditionStyles } from './printEdition.styles';

import { stylesGlobal } from 'styles/global.styles';

const QR_URL = 'https://finografic.github.io/cv-justin-rankin';

const CONTACT = {
  location: 'Brisbane, Australia',
  phone: '+61 483 757 098',
  email: 'justin.blair.rankin@gmail.com',
  linkedin: 'linkedin.com/in/rankinjustin',
  github: 'github.com/finografic',
};

const PROFILE =
  'Front-end architect and TypeScript engineer with 15+ years building for the web — from agency and startup through to enterprise SaaS. Last five years at Sage delivering micro-frontend platforms and shared front-end infrastructure across international squads. Preference for explicit architecture, strong typing, and systems that stay readable as they scale.';

const TECHNOLOGIES = [
  { category: 'Core', items: 'TypeScript, JavaScript, React, Node.js' },
  { category: 'Architecture', items: 'Micro-frontends, Monorepo (pnpm/Turborepo), Design systems, ESM' },
  {
    category: 'Front-end',
    items: 'PandaCSS, Emotion, Ark UI, React Hook Form, Zod, WCAG/ARIA, i18n, SASS',
  },
  {
    category: 'Tooling',
    items: 'Vite, Vitest, OXC (oxlint/oxfmt), CI/CD (GitHub Actions, TeamCity), Docker',
  },
  {
    category: 'AI & Agentic',
    items: 'Claude Code, LLM integration (Anthropic, Ollama), MCP server development',
  },
  { category: 'Server', items: 'Hono, REST APIs, Drizzle ORM, SQLite, MySQL' },
];

const EMPLOYMENT = [
  {
    company: 'Sage',
    url: 'https://www.sage.com',
    title: 'Software Engineer',
    period: '2021 – 2026',
    location: 'Barcelona, Spain',
    description:
      'Full-stack development for enterprise SaaS (accounting, finance, invoicing) within a large-scale micro-frontend ecosystem across international squads. Shared component systems, front-end infrastructure modernisation, accessibility standards, comprehensive testing, and integration of AI-assisted engineering workflows.',
    tech: 'TypeScript, React, Node.js, Micro-frontends, Design systems, RESTful APIs, CI/CD, GitHub Actions',
  },
  {
    company: 'eDreams ODIGEO',
    url: 'https://www.edreams.com',
    title: 'Front-end Developer',
    period: '2019 – 2020',
    location: 'Barcelona, Spain',
    description:
      "Front-end development on hotel and flight booking flows for one of Europe's largest online travel platforms. Agile product pods, continuous integration, release pipelines, and front-end architecture across an international engineering organisation.",
    tech: 'JavaScript, Node.js, SASS/CSS, Docker, CI/CD',
  },
  {
    company: 'Pangealand / exoticca.com',
    url: 'https://www.exoticca.com',
    title: 'Senior Software Engineer',
    period: '2018 – 2019',
    location: 'Barcelona, Spain',
    description:
      'B2B front-end platform refactor and internal operational dashboard. Prepared client and server systems for global expansion with multi-locale support and scalable full-stack architecture.',
    tech: 'JavaScript, Angular, Node.js, MongoDB, MySQL, PHP, AWS',
  },
  {
    company: 'Econocom / Digital Dimension',
    url: 'https://www.econocom.com/en',
    title: 'Full-stack Developer',
    period: '2016 – 2017',
    location: 'Barcelona, Spain',
    description:
      'Full-stack SaaS serving France and Spain — API integrations, structured data dashboards, and front-end architecture. Early large-scale React and Redux experience within an agile engineering team.',
    tech: 'React, Redux, Node.js, JavaScript, Docker, SASS/CSS',
  },
];

const PROJECTS = [
  {
    name: 'LLAAB',
    href: 'https://github.com/finografic/llaab',
    meta: '138 commits · active',
    description:
      'Local-first AI agent architecture base. Structured knowledge vault with typed markdown nodes, LLM router (Anthropic + Ollama), agent orchestration layer, and MCP server — built to formalise how AI-assisted workflows integrate into a TypeScript engineering practice.',
  },
  {
    name: '@finografic/design-system',
    href: 'https://github.com/finografic/design-system',
    meta: 'v1.18.2 · 421 commits',
    description:
      'Token-driven React design system built on PandaCSS and Ark UI. 20+ components (dialog, data-table, toast, forms), OKLCH colour palette, semantic tokens, responsive viewport system, and companion icon tooling.',
  },
  {
    name: '@finografic/genx',
    href: 'https://github.com/finografic/genx',
    meta: 'v5.33.0 · 675 commits',
    description:
      'Ecosystem-wide project generator and codemod toolkit. Scaffolds packages, migrates conventions (OXC, AI configs, git hooks, Vitest), audits repos for structural drift. The central tool that ties the ecosystem together.',
  },
  {
    name: 'touch-monorepo',
    href: 'https://github.com/finografic/touch-monorepo',
    meta: '2,931 commits · production',
    description:
      'Full-stack IoT product management system. React + Hono + Drizzle ORM + SQLite, hardware relay via USB HID, role-based auth, real-time session management, and multi-locale support (EN/ES/CA). Uses pnpm workspaces and Turborepo.',
  },
  {
    name: '@finografic/gli',
    href: 'https://github.com/finografic/gli',
    meta: 'v1.25.4 · 212 commits',
    description:
      'Git CLI with live-updating terminal PR dashboard (like htop for pull requests). Interactive rebase, branch selection, multi-repo config, and clickable PR links. Built on the GitHub CLI.',
  },
];

const EDUCATION = {
  institution: 'Ontario College of Art and Design University (OCAD U)',
  degree: 'Design, Advertising Art Direction',
  location: 'Toronto, Canada',
};

const LANGUAGES = [
  { language: 'English', level: 'Native' },
  { language: 'Spanish', level: 'Fluent (spoken + written)' },
  { language: 'Catalan', level: 'Conversational' },
];

export default function PrintEditionApp(): ReactNode {
  useEffect(() => {
    document.documentElement.classList.add('pe-edition');
    return () => {
      document.documentElement.classList.remove('pe-edition');
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
                  Front-end architecture, TypeScript systems, and tooling-led engineering for products that
                  need to scale cleanly.
                </p>
              </div>
            </div>
            <div className="pe-header-qr">
              <QRCodeSVG level="M" size={72} value={QR_URL} />
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
                  <li>{CONTACT.location}</li>
                  <li>
                    <a href={`tel:${CONTACT.phone}`}>{CONTACT.phone}</a>
                  </li>
                  <li>
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </li>
                  <li>
                    <a href={`https://${CONTACT.linkedin}`}>{CONTACT.linkedin}</a>
                  </li>
                  <li>
                    <a href={`https://${CONTACT.github}`}>{CONTACT.github}</a>
                  </li>
                </ul>
                <p className="pe-work-rights">NZ citizen · Full Australian work rights (Subclass 444)</p>
              </section>

              {/* Profile */}
              <section className="pe-section pe-section-profile">
                <h2 className="pe-section-heading">Profile</h2>
                <p>{PROFILE}</p>
              </section>

              {/* Technologies */}
              <section className="pe-section pe-section-technologies">
                <h2 className="pe-section-heading">Technologies</h2>
                <div className="pe-tech-list">
                  {TECHNOLOGIES.map((group) => (
                    <div className="pe-tech-group" key={group.category}>
                      <span className="pe-tech-category">{group.category}</span>
                      <span className="pe-tech-items">{group.items}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Page break — left column continues on page 2 */}
              <div className="pe-page-break" />

              {/* Education */}
              <section className="pe-section pe-section-education">
                <h2 className="pe-section-heading">Education</h2>
                <p className="pe-edu-institution">{EDUCATION.institution}</p>
                <p className="pe-edu-degree">{EDUCATION.degree}</p>
                <p className="pe-edu-location">{EDUCATION.location}</p>
              </section>

              {/* Languages */}
              <section className="pe-section pe-section-languages">
                <h2 className="pe-section-heading">Languages</h2>
                <ul className="pe-lang-list">
                  {LANGUAGES.map((lang) => (
                    <li key={lang.language}>
                      <strong>{lang.language}</strong>: {lang.level}
                    </li>
                  ))}
                </ul>
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
                      <p className="pe-work-desc">{job.description}</p>
                      <p className="pe-work-tech">{job.tech}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Page break — right column continues on page 2 */}
              <div className="pe-page-break" />

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
                      </p>
                      <p className="pe-project-meta">{proj.meta}</p>
                      <p className="pe-project-desc">{proj.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* ── Screen-only footer preview ── */}
          <div className="pe-footer-preview">
            <span>Justin Rankin · Software Engineer · Brisbane, Australia</span>
            <span>1 / 2</span>
          </div>
        </div>
      </div>
    </>
  );
}
