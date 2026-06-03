import { Global } from '@emotion/react';
import { ContactInfo } from 'components/contact-info/ContactInfo';
import { PrintSection } from 'components/print-section/PrintSection';
import { ProjectEntry } from 'components/ProjectEntry';
import { WorkExperienceEntry } from 'components/WorkExperienceEntry';
import { CVPrintHeader } from 'layout/print/CVPrintHeader';
import { useEffect } from 'react';
import type { ReactNode } from 'react';

import { PRINT_CONTENT } from './data/print';

import { printEditionStyles } from './styles/print.styles';
import { stylesGlobal } from 'styles/global.styles';

const printEditionGlobalStyles = [stylesGlobal, printEditionStyles];

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

          <div className="pe-content-grid">
            <div className="pe-col pe-col--left">
              <PrintSection sectionKey="contact" title="Contact">
                <ContactInfo contact={PRINT_CONTENT.contact} edition="print" />
              </PrintSection>

              <PrintSection sectionKey="profile" title="Profile">
                <div className="cv-entry__body pe-work-desc-multi">
                  {PRINT_CONTENT.profile.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
              </PrintSection>

              <PrintSection sectionKey="technologies" title="Technologies">
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
              </PrintSection>

              <PrintSection sectionKey="philosophy" title="Engineering Philosophy">
                <ul className="pe-philosophy-list">
                  {PRINT_CONTENT.philosophy.map((item) => (
                    <li key={item.title}>
                      <span className="pe-philosophy-title">{item.title}</span>
                      <span className="pe-philosophy-colon">:</span>
                      <span className="pe-philosophy-desc">{item.description}</span>
                    </li>
                  ))}
                </ul>
              </PrintSection>

              <PrintSection sectionKey="projects" title="Technical Projects">
                <div className="pe-project-list">
                  {PRINT_CONTENT.projects.map((project) => (
                    <ProjectEntry edition="print" key={project.name} project={project} />
                  ))}
                </div>
              </PrintSection>
            </div>

            <div className="pe-col pe-col--right">
              <PrintSection sectionKey="work" title="Work Experience">
                <div className="pe-work-list">
                  {PRINT_CONTENT.employment.map((job) => (
                    <WorkExperienceEntry edition="print" entry={job} key={job.company} />
                  ))}
                </div>
              </PrintSection>

              <PrintSection sectionKey="education" title="Education">
                <p className="pe-edu-institution">{PRINT_CONTENT.education.institution}</p>
                <p className="pe-edu-degree">{PRINT_CONTENT.education.detail}</p>
              </PrintSection>

              <PrintSection sectionKey="languages" title="Languages">
                <ul className="pe-lang-list">
                  {PRINT_CONTENT.languages.map((lang) => (
                    <li key={lang.language}>
                      <strong>{lang.language}</strong>
                      <span className="pe-lang-colon">:</span>
                      <span className="pe-lang-level">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </PrintSection>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
