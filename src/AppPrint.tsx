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

import { condensedViewStyles } from './styles/condensed.styles';
import { stylesGlobal } from 'styles/global.styles';

const condensedGlobalStyles = [stylesGlobal, condensedViewStyles];

export default function AppPrint(): ReactNode {
  useEffect(() => {
    document.documentElement.dataset.cvView = 'condensed';
    return () => {
      delete document.documentElement.dataset.cvView;
    };
  }, []);

  return (
    <>
      <Global styles={condensedGlobalStyles} />

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
                <ContactInfo contact={PRINT_CONTENT.contact} view="condensed" />
              </PrintSection>

              <PrintSection sectionKey="profile" title="Profile">
                <ProfileParagraphs paragraphs={PRINT_CONTENT.profile} view="condensed" />
              </PrintSection>

              <PrintSection sectionKey="technologies" title="Technologies">
                <TechnologyGrid groups={PRINT_CONTENT.technologies} view="condensed" />
              </PrintSection>

              <PrintSection sectionKey="philosophy" title="Engineering Philosophy">
                <PhilosophyList items={PRINT_CONTENT.philosophy} view="condensed" />
              </PrintSection>

              <PrintSection sectionKey="projects" title="Technical Projects">
                <div className="pe-project-list">
                  {PRINT_CONTENT.projects.map((project) => (
                    <ProjectEntry key={project.name} project={project} view="condensed" />
                  ))}
                </div>
              </PrintSection>
            </div>

            <div className="pe-col pe-col--right">
              <PrintSection sectionKey="work" title="Work Experience">
                <div className="pe-work-list">
                  {PRINT_CONTENT.employment.map((job) => (
                    <WorkExperienceEntry entry={job} key={job.company} view="condensed" />
                  ))}
                </div>
              </PrintSection>

              <PrintSection sectionKey="education" title="Education">
                <EducationEntry entry={PRINT_CONTENT.education} view="condensed" />
              </PrintSection>

              <PrintSection sectionKey="languages" title="Languages">
                <LanguageList items={PRINT_CONTENT.languages} view="condensed" />
              </PrintSection>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
