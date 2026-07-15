import { Global } from '@emotion/react';
import type { ReactNode } from 'react';

import { ContactInfo } from './components/contact-info/ContactInfo';
import { EducationEntry } from './components/EducationEntry';
import { LanguageList } from './components/language-list/LanguageList';
import { PhilosophyList } from './components/philosophy-list/PhilosophyList';
import { ProfileParagraphs } from './components/profile-paragraphs/ProfileParagraphs';
import { ProjectEntry } from './components/ProjectEntry';
import { TechnologyGrid } from './components/technology-grid/TechnologyGrid';
import { WorkExperienceEntry } from './components/WorkExperienceEntry';
import { CONTENT } from './data/web';
import { CVHeader } from './layout/web/CVHeader';
import { CVLayout } from './layout/web/CVLayout';
import { CVSection } from './layout/web/CVSection';

import { styles } from './styles/app.styles';
import { stylesGlobal } from './styles/global.styles';
import { stylesPrint } from './styles/print.styles';

const globalStyles = [stylesGlobal, stylesPrint];

export default function App(): ReactNode {
  const sidebar = (
    <>
      <CVSection sectionKey="contact" title="Contact" variant="compact">
        <ContactInfo contact={CONTENT.contact} />
      </CVSection>
      <CVSection sectionKey="profile" title="Profile">
        <ProfileParagraphs paragraphs={CONTENT.profile} />
      </CVSection>
      {/* <PrintColumnBreak /> */}
      <CVSection sectionKey="technologies" title="Technologies" variant="grid">
        <TechnologyGrid groups={CONTENT.technologies} />
      </CVSection>
      <CVSection
        className="print-break-before"
        sectionKey="engineering-philosophy"
        title="Engineering Philosophy"
      >
        <PhilosophyList items={CONTENT.philosophy} />
      </CVSection>
      <CVSection sectionKey="sidebar-projects" title="Technical Projects">
        <div css={styles.stack}>
          <div>
            <h3 css={styles.categoryHeading}>AI & Experimentation</h3>
            <div css={styles.stack}>
              {CONTENT.aiProjects.map((project) => (
                <ProjectEntry key={project.name} project={project} />
              ))}
            </div>
          </div>
          <div>
            <h3 css={styles.categoryHeading}>Full-stack Application</h3>
            <div css={styles.stack}>
              {CONTENT.fullstackProjects.map((project) => (
                <ProjectEntry key={project.name} project={project} />
              ))}
            </div>
          </div>
          <div>
            <h3 css={styles.categoryHeading}>CLI & Developer Tools</h3>
            <div css={styles.stack}>
              {CONTENT.cliProjects.map((project) => (
                <ProjectEntry key={project.name} project={project} />
              ))}
            </div>
          </div>
        </div>
      </CVSection>
      {/* <PrintColumnBreak /> */}
      <CVSection sectionKey="education" title="Education" variant="compact">
        <div css={styles.stack}>
          {CONTENT.education.map((entry) => (
            <EducationEntry entry={entry} key={entry.institution} />
          ))}
        </div>
      </CVSection>
      <CVSection className="print-only-section" sectionKey="languages" title="Languages" variant="compact">
        <LanguageList items={CONTENT.languages} />
      </CVSection>
    </>
  );

  const main = (
    <>
      <CVSection sectionKey="work-experience" title="Work Experience">
        <div css={styles.stack}>
          {CONTENT.employment.map((entry) => (
            <WorkExperienceEntry entry={entry} key={`${entry.company}-${entry.period}`} />
          ))}
        </div>
      </CVSection>
      <CVSection className="print-break-before" sectionKey="technical-projects" title="Technical Projects">
        <div css={styles.stack}>
          {CONTENT.projects.map((category) => (
            <>
              <h3 className="heading-category" css={styles.categoryHeading}>
                {category.name}
              </h3>
              <div css={styles.category} key={category.name}>
                <div css={styles.stack}>
                  {category.projects.map((project) => (
                    <ProjectEntry key={project.name} project={project} />
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      </CVSection>
      <CVSection className="screen-only-section" sectionKey="languages" title="Languages" variant="compact">
        <LanguageList items={CONTENT.languages} />
      </CVSection>
    </>
  );

  return (
    <>
      <Global styles={globalStyles} />
      <CVLayout>
        <CVHeader
          name={CONTENT.headerContent.name}
          positioning={CONTENT.headerContent.positioning}
          strapline={CONTENT.headerContent.strapline}
        />
        <div className="cv-content-grid print-tight" css={styles.contentGrid}>
          <aside className="cv-column cv-column--sidebar" css={styles.column}>
            {sidebar}
          </aside>
          <main className="cv-column cv-column--main" css={styles.column}>
            {main}
          </main>
        </div>
      </CVLayout>
    </>
  );
}
