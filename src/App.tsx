import { Global } from '@emotion/react';
import type { ReactNode } from 'react';

import { styles } from './App.styles';
import { ContactInfo } from './components/ContactInfo';
import { CVHeader } from './components/CVHeader';
import { CVLayout } from './components/CVLayout';
import { CVSection } from './components/CVSection';
import { PhilosophyList } from './components/PhilosophyList';
import { PrintButton } from './components/PrintButton';
import { ProjectEntry } from './components/ProjectEntry';
import { TechnologyGrid } from './components/TechnologyGrid';
import { WorkExperienceEntry } from './components/WorkExperienceEntry';
import { cvContent } from './data/cv-content';
import { DsSmokePanel } from './dev/DsSmokePanel';

import { stylesGlobal } from './styles/global.styles';
import { stylesPrint } from './styles/print.styles';

const globalStyles = [stylesGlobal, stylesPrint];

const showDsSmokePanel =
  import.meta.env.DEV && new URLSearchParams(globalThis.location.search).has('ds-smoke');

export default function App(): ReactNode {
  const sidebar = (
    <>
      <PrintButton />
      <CVSection title="Contact" variant="compact">
        <ContactInfo contact={cvContent.contact} />
      </CVSection>
      <CVSection title="Profile">
        <div css={styles.paragraphList}>
          {cvContent.profileSummary.short.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </CVSection>
      <CVSection title="Technologies" variant="grid">
        <TechnologyGrid groups={cvContent.technologies} />
      </CVSection>
      <CVSection className="print-break-before" title="Engineering Philosophy">
        <PhilosophyList items={cvContent.philosophy} />
      </CVSection>
      <CVSection title="Education" variant="compact">
        <div css={styles.stack}>
          {cvContent.education.map((entry) => (
            <article className="print-avoid-break" css={styles.educationCard} key={entry.institution}>
              <h3 css={styles.institution}>{entry.institution}</h3>
              <p className="cv-accent" css={styles.degree}>
                {entry.degree}
              </p>
              <p css={styles.meta}>{entry.location}</p>
              <p>{entry.description}</p>
            </article>
          ))}
        </div>
      </CVSection>
      <CVSection title="Languages" variant="compact">
        <ul css={styles.languageList}>
          {cvContent.languages.map((entry) => (
            <li key={entry.language}>
              <strong>{entry.language}</strong> — {entry.level}
            </li>
          ))}
        </ul>
      </CVSection>
    </>
  );

  const main = (
    <>
      <CVSection title="Work Experience">
        <div css={styles.stack}>
          {cvContent.workExperience.map((entry) => (
            <WorkExperienceEntry entry={entry} key={`${entry.company}-${entry.period}`} />
          ))}
        </div>
      </CVSection>
      <CVSection className="print-break-before" title="Technical Projects">
        <div css={styles.stack}>
          {cvContent.technicalProjects.map((category) => (
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
            name="JUSTIN RANKIN"
            positioning={cvContent.positioning}
            strapline="Front-end architecture, TypeScript systems, and tooling-led engineering for products that need to scale cleanly."
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
