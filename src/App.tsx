import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import type { ReactNode } from 'react';

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

import { globalStyles } from './styles/global';
import { printStyles } from './styles/print';
import { theme } from './styles/theme';

const Stack = styled.div({
  display: 'grid',
  gap: '1rem',
});

const ParagraphList = styled.div({
  display: 'grid',
  gap: '0.9rem',
});

const Paragraph = styled.p({
  margin: 0,
  fontSize: '1.02rem',
});

const TwoColList = styled.ul({
  columns: 2,
  columnGap: '1.5rem',
  margin: 0,
  paddingLeft: '1rem',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    columns: 1,
  },
});

const EducationCard = styled.article({
  display: 'grid',
  gap: '0.35rem',
});

const Institution = styled.h3({
  margin: 0,
  fontFamily: theme.fonts.heading,
  fontSize: '1rem',
});

const Degree = styled.p({
  margin: 0,
  color: theme.colors.accent,
  fontFamily: theme.fonts.heading,
  fontWeight: 700,
});

const Meta = styled.p({
  margin: 0,
  color: theme.colors.muted,
  fontStyle: 'italic',
});

const Copy = styled.p({
  margin: 0,
});

const LanguageList = styled.ul({
  display: 'grid',
  gap: '0.5rem',
  margin: 0,
  paddingLeft: '1rem',
});

const Category = styled.div({
  display: 'grid',
  gap: '1rem',
});

const CategoryHeading = styled.h3({
  margin: 0,
  fontFamily: theme.fonts.heading,
  color: theme.colors.accent,
  fontSize: '1rem',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
});

const PageHeader = styled.header({
  marginBottom: '2.25rem',
});

const ContentGrid = styled.div({
  display: 'grid',
  gap: '2.25rem',
  gridTemplateColumns: 'minmax(18rem, 23rem) minmax(0, 1fr)',
  alignItems: 'start',
  [`@media (max-width: ${theme.breakpoints.mobile})`]: {
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
  },
});

const Column = styled.div({
  display: 'grid',
  gap: '1.5rem',
});

const appGlobalStyles = [globalStyles, printStyles];

export default function App(): ReactNode {
  const sidebar = (
    <>
      <PrintButton />
      <CVSection title="Profile">
        <ParagraphList>
          {cvContent.profileSummary.short.map((paragraph) => (
            <Paragraph key={paragraph}>{paragraph}</Paragraph>
          ))}
        </ParagraphList>
      </CVSection>
      <CVSection title="Technologies" variant="grid">
        <TechnologyGrid groups={cvContent.technologies} />
      </CVSection>
      <CVSection className="print-break-before" title="Engineering Philosophy">
        <PhilosophyList items={cvContent.philosophy} />
      </CVSection>
      <CVSection title="Education" variant="compact">
        <Stack>
          {cvContent.education.map((entry) => (
            <EducationCard className="print-avoid-break" key={entry.institution}>
              <Institution>{entry.institution}</Institution>
              <Degree>{entry.degree}</Degree>
              <Meta>{entry.location}</Meta>
              <Copy>{entry.description}</Copy>
            </EducationCard>
          ))}
        </Stack>
      </CVSection>
      <CVSection title="Languages" variant="compact">
        <LanguageList>
          {cvContent.languages.map((entry) => (
            <li key={entry.language}>
              <strong>{entry.language}</strong> — {entry.level}
            </li>
          ))}
        </LanguageList>
      </CVSection>
      <CVSection title="Contact" variant="compact">
        <ContactInfo contact={cvContent.contact} />
      </CVSection>
    </>
  );

  const main = (
    <>
      <CVSection title="Work Experience">
        <Stack>
          {cvContent.workExperience.map((entry) => (
            <WorkExperienceEntry entry={entry} key={`${entry.company}-${entry.period}`} />
          ))}
        </Stack>
      </CVSection>
      <CVSection className="print-break-before" title="Technical Projects">
        <Stack>
          {cvContent.technicalProjects.map((category) => (
            <Category key={category.name}>
              <CategoryHeading>{category.name}</CategoryHeading>
              <Stack>
                {category.projects.map((project) => (
                  <ProjectEntry key={project.name} project={project} />
                ))}
              </Stack>
            </Category>
          ))}
        </Stack>
      </CVSection>
      <CVSection title="Profile Expansion" variant="compact">
        <TwoColList>
          {cvContent.profileSummary.extended.map((paragraph) => (
            <li key={paragraph}>{paragraph}</li>
          ))}
        </TwoColList>
      </CVSection>
    </>
  );

  return (
    <>
      <Global styles={appGlobalStyles} />
      <CVLayout>
        <PageHeader className="cv-page-header">
          <CVHeader
            name="Justin Rankin"
            positioning={cvContent.positioning}
            strapline="Front-end architecture, TypeScript systems, and tooling-led engineering for products that need to scale cleanly."
          />
        </PageHeader>
        <ContentGrid className="cv-content-grid print-tight">
          <Column as="aside" className="cv-column cv-column--sidebar">
            {sidebar}
          </Column>
          <Column as="main" className="cv-column cv-column--main">
            {main}
          </Column>
        </ContentGrid>
      </CVLayout>
    </>
  );
}
