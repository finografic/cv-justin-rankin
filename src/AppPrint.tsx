import { Global } from '@emotion/react';
import { ContactInfo } from 'components/contact-info/ContactInfo';
import { EducationEntry } from 'components/EducationEntry';
import { LanguageList } from 'components/language-list/LanguageList';
import { PhilosophyList } from 'components/philosophy-list/PhilosophyList';
import { PrintSection } from 'components/print-section/PrintSection';
import { ProfileParagraphs } from 'components/profile-paragraphs/ProfileParagraphs';
import { ProjectEntry } from 'components/ProjectEntry';
import { TechnologyGrid } from 'components/technology-grid/TechnologyGrid';
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
                <ProfileParagraphs edition="print" paragraphs={PRINT_CONTENT.profile} />
              </PrintSection>

              <PrintSection sectionKey="technologies" title="Technologies">
                <TechnologyGrid edition="print" groups={PRINT_CONTENT.technologies} />
              </PrintSection>

              <PrintSection sectionKey="philosophy" title="Engineering Philosophy">
                <PhilosophyList edition="print" items={PRINT_CONTENT.philosophy} />
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
                <EducationEntry edition="print" entry={PRINT_CONTENT.education} />
              </PrintSection>

              <PrintSection sectionKey="languages" title="Languages">
                <LanguageList edition="print" items={PRINT_CONTENT.languages} />
              </PrintSection>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
