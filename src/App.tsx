import { Global } from '@emotion/react';
import { PrintButton } from 'components/print-button/PrintButton';
import { PrintColumnBreak } from 'components/print-column-break/PrintColumnBreak';
import type { ReactNode } from 'react';

import { styles } from './App.styles';
import { ContactInfo } from './components/contact-info/ContactInfo';
import { EducationEntry } from './components/EducationEntry';
import { PhilosophyList } from './components/philosophy-list/PhilosophyList';
import { ProjectEntry } from './components/ProjectEntry';
import { TechnologyGrid } from './components/technology-grid/TechnologyGrid';
import { WorkExperienceEntry } from './components/WorkExperienceEntry';
import { CONTENT } from './data';
import { CVHeader } from './layout/CVHeader';
import { CVLayout } from './layout/CVLayout';
import { CVSection } from './layout/CVSection';

import { stylesGlobal } from './styles/global.styles';
import { stylesPrint } from './styles/print.styles';

const globalStyles = [stylesGlobal, stylesPrint];

export default function App(): ReactNode {
  const sidebar = (
    <>
      <PrintButton />
      <CVSection sectionKey="contact" title="Contact" variant="compact">
        <ContactInfo contact={CONTENT.contact} />
      </CVSection>
      <CVSection sectionKey="profile" title="Profile">
        <div css={styles.paragraphList}>
          {CONTENT.profile.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CVSection>
      <PrintColumnBreak />
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
      <CVSection sectionKey="ai-experimentation" title="AI & Experimentation">
        <div css={styles.stack}>
          {CONTENT.aiProjects.map((project) => (
            <ProjectEntry key={project.name} project={project} />
          ))}
        </div>
      </CVSection>
      <CVSection sectionKey="education" title="Education" variant="compact">
        <div css={styles.stack}>
          {CONTENT.education.map((entry) => (
            <EducationEntry entry={entry} key={entry.institution} />
          ))}
        </div>
      </CVSection>
      <CVSection sectionKey="languages" title="Languages" variant="compact">
        <ul css={styles.languageList}>
          {CONTENT.languages.map((entry) => (
            <li key={entry.language}>
              <strong>{entry.language}</strong>
              <span className="colon">:</span>
              <span className="level">{entry.level}</span>
            </li>
          ))}
        </ul>
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
            <div css={styles.category} key={category.name}>
              <h3 className="cv-accent" css={styles.categoryHeading}>
                {category.name}
              </h3>
              <div css={styles.stack}>
                {category.projects.map((project) => (
                  <ProjectEntry key={project.name} project={project} />
                ))}
              </div>
            </div>
          ))}
        </div>
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
