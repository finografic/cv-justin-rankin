import { GlobeIcon, HomeIcon, MailIcon } from '@finografic/icons';
import { Global } from '@emotion/react';
import { GithubIcon } from 'assets/icons/GithubIcon';
import { LinkedInIcon } from 'assets/icons/LinkedInIcon';
import { MobileIcon } from 'assets/icons/MobileIcon';
import { CVPrintHeader } from 'layout/print/CVPrintHeader';
import { useEffect } from 'react';
import type { ComponentType, ReactNode } from 'react';
import type { Project } from 'types';

import { PRINT_CONTENT } from './data/print';

import { printEditionStyles } from './styles/print.styles';
import { stylesGlobal } from 'styles/global.styles';

const printEditionGlobalStyles = [stylesGlobal, printEditionStyles];

const FINOGRAFIC_PACKAGE = /^@finografic\/(.+)$/;

function formatCommitCount(commits: number): string {
  return `${commits.toLocaleString('en-US')} commits`;
}

function formatPrintProjectMeta(project: Project): string {
  const parts = [
    project.version,
    project.commits != null ? formatCommitCount(project.commits) : undefined,
  ].filter(Boolean);
  if (parts.length) return parts.join(' · ');
  if (project.status) return project.status;
  return '';
}

function resolveProjectHref(project: Project): string | undefined {
  if (project.titleHref) return project.titleHref;
  const match = FINOGRAFIC_PACKAGE.exec(project.name);
  if (match) return `https://github.com/finografic/${match[1]}`;
  return undefined;
}

interface ContactRowProps {
  Icon: ComponentType<any>;
  iconClassName?: string;
  text: string;
  href?: string;
}

function ContactRow({ Icon, iconClassName, text, href }: ContactRowProps): ReactNode {
  const content = href ? (
    <a href={href} rel="noopener noreferrer" target="_blank">
      {text}
    </a>
  ) : (
    text
  );
  return (
    <li className="pe-contact-row">
      <Icon className={['pe-contact-icon', iconClassName].filter(Boolean).join(' ')} />
      {content}
    </li>
  );
}

export default function AppPrint(): ReactNode {
  useEffect(() => {
    document.documentElement.classList.add('pe-edition', 'pe-full');
    return () => {
      document.documentElement.classList.remove('pe-edition', 'pe-full');
    };
  }, []);

  return (
    <>
      <Global styles={printEditionGlobalStyles} />

      <div className="pe-shell">
        <div className="pe-paper">
          <CVPrintHeader
            name={PRINT_CONTENT.headerContent.name}
            positioning={PRINT_CONTENT.headerContent.positioning}
            strapline={PRINT_CONTENT.headerContent.strapline}
            qrCode={
              PRINT_CONTENT.headerContent.qrCode
                ? {
                    label: PRINT_CONTENT.headerContent.qrCode.label,
                    url: PRINT_CONTENT.headerContent.qrCode.url,
                  }
                : undefined
            }
          />

          {/* ── Two-column content ── */}
          <div className="pe-content-grid">
            {/* ──── Left column ──── */}
            <div className="pe-col pe-col--left">
              {/* Contact */}
              <section className="pe-section pe-section-contact">
                <h2 className="pe-section-heading">Contact</h2>
                <ul className="pe-contact-list">
                  <ContactRow Icon={HomeIcon} text={PRINT_CONTENT.contact.location} />
                  <ContactRow
                    Icon={MobileIcon}
                    href={PRINT_CONTENT.contact.phoneHref}
                    iconClassName="pe-contact-icon--mobile"
                    text={PRINT_CONTENT.contact.phone}
                  />
                  <ContactRow
                    Icon={MailIcon}
                    href={PRINT_CONTENT.contact.emailHref}
                    text={PRINT_CONTENT.contact.email}
                  />
                  <ContactRow
                    Icon={LinkedInIcon}
                    href={PRINT_CONTENT.contact.linkedinHref}
                    text={PRINT_CONTENT.contact.linkedin}
                  />
                  <ContactRow
                    Icon={GithubIcon}
                    href={PRINT_CONTENT.contact.githubHref}
                    text={PRINT_CONTENT.contact.github}
                  />
                  <ContactRow
                    Icon={GlobeIcon}
                    href={PRINT_CONTENT.contact.websiteHref}
                    text={PRINT_CONTENT.contact.website}
                  />
                </ul>
                <p className="pe-work-rights">{PRINT_CONTENT.contact.workRights}</p>
              </section>

              {/* Profile */}
              <section className="pe-section pe-section-profile">
                <h2 className="pe-section-heading">Profile</h2>
                <div className="pe-work-desc-multi">
                  {PRINT_CONTENT.profile.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </section>

              {/* Technologies */}
              <section className="pe-section pe-section-technologies">
                <h2 className="pe-section-heading">Technologies</h2>
                <div className="pe-tech-list">
                  {PRINT_CONTENT.technologies.map((group) => (
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
                  {PRINT_CONTENT.philosophy.map((item) => (
                    <li key={item.title}>
                      <span className="pe-philosophy-title">{item.title}</span>
                      <span className="pe-philosophy-colon">:</span>
                      <span className="pe-philosophy-desc">{item.description}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Technical Projects */}
              <section className="pe-section pe-section-projects">
                <h2 className="pe-section-heading">Technical Projects</h2>
                <div className="pe-project-list">
                  {PRINT_CONTENT.projects.map((proj) => {
                    const href = resolveProjectHref(proj);
                    const meta = formatPrintProjectMeta(proj);
                    return (
                      <div className="pe-project" key={proj.name}>
                        <p className="pe-project-title">
                          {href ? (
                            <a href={href} rel="noopener noreferrer" target="_blank">
                              {proj.name}
                            </a>
                          ) : (
                            proj.name
                          )}
                          {meta ? <span className="pe-project-meta">{meta}</span> : null}
                        </p>
                        <p className="pe-project-desc">{proj.description}</p>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>

            {/* ──── Right column ──── */}
            <div className="pe-col pe-col--right">
              {/* Work Experience */}
              <section className="pe-section pe-section-work">
                <h2 className="pe-section-heading">Work Experience</h2>
                <div className="pe-work-list">
                  {PRINT_CONTENT.employment.map((job) => (
                    <article className="pe-work-entry" key={job.company}>
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
                    </article>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="pe-section pe-section-education">
                <h2 className="pe-section-heading">Education</h2>
                <p className="pe-edu-institution">{PRINT_CONTENT.education.institution}</p>
                <p className="pe-edu-degree">{PRINT_CONTENT.education.detail}</p>
              </section>

              {/* Languages */}
              <section className="pe-section pe-section-languages">
                <h2 className="pe-section-heading">Languages</h2>
                <ul className="pe-lang-list">
                  {PRINT_CONTENT.languages.map((lang) => (
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
