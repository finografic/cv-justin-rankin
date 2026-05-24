import { Global } from '@emotion/react';
import type { ReactNode } from 'react';

import { styles } from './App.styles';
import { ContactInfo } from './components/ContactInfo';
import { CVHeader } from './components/CVHeader';
import { CVLayout } from './components/CVLayout';
import { CVSection } from './components/CVSection';
import { EducationEntry } from './components/EducationEntry';
import { PhilosophyList } from './components/PhilosophyList';
import { ProjectEntry } from './components/ProjectEntry';
import { TechnologyGrid } from './components/TechnologyGrid';
import { WorkExperienceEntry } from './components/WorkExperienceEntry';
import { CONTENT } from './data';
import { DsSmokePanel } from './dev/DsSmokePanel';

import { stylesGlobal } from './styles/global.styles';
import { stylesPrint } from './styles/print.styles';

const globalStyles = [stylesGlobal, stylesPrint];

const showDsSmokePanel =
  import.meta.env.DEV && new URLSearchParams(globalThis.location.search).has('ds-smoke');

export default function App(): ReactNode {
  const sidebar = (
    <>
      {/* <PrintButton /> */}
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
        {showDsSmokePanel ? <DsSmokePanel /> : null}
        <header className="cv-page-header" css={styles.pageHeader}>
          <CVHeader
            name={CONTENT.headerContent.name}
            positioning={CONTENT.headerContent.positioning}
            strapline={CONTENT.headerContent.strapline}
          />
        </header>
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
