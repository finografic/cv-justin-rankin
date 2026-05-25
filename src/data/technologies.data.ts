import type { TechnologyGroup } from 'types';

export const technologies: TechnologyGroup[] = [
  {
    category: 'Core',
    items: ['TypeScript', 'JavaScript', 'React', 'Node.js'],
  },
  {
    category: 'Architecture & Patterns',
    items: [
      'Micro-frontends',
      'Monorepo (pnpm, Turborepo)',
      'Shared component systems',
      'Design systems',
      'ESM-first modules',
      '@tanstack/query',
    ],
    printBreakAfter: true,
  },
  {
    category: 'Front-end & UI',
    items: [
      'Accessibility (WCAG, ARIA)',
      'Headless UI (Ark UI, Radix UI)',
      'React Hook Form',
      'Schema validation (Zod)',
      'CSS-in-JS (PandaCSS, Emotion)',
      'SASS/CSS',
      'Responsive & mobile-first',
      'i18n / Localization',
    ],
  },
  {
    category: 'Tooling & DX',
    items: [
      'OXC (oxlint, oxfmt)',
      'ESLint',
      'Vite',
      'tsdown',
      'Vitest',
      '@testing-library',
      'CI/CD (TeamCity, GitHub Actions)',
      'Git workflows',
      'Docker',
      'GitHub Packages',
      'pnpm',
    ],
    note: 'OXC, tsdown, and Vite/Rolldown are part of the emerging Rust-native JavaScript toolchain.',
  },
  {
    category: 'CLI & Developer Tools',
    items: [
      'Custom CLI (Commander, @clack/prompts)',
      'TUI rendering',
      'Codemod tooling',
      'Dependency governance',
    ],
  },
  {
    category: 'AI & Agentic Development',
    items: [
      'AI-assisted engineering workflows',
      'Agentic coding (Claude Code, Cursor, Copilot)',
      'LLM integration (Anthropic, Ollama)',
      'MCP server development',
      'Structured knowledge pipelines',
      'Prompt & system instruction design',
    ],
  },
  {
    category: 'Testing',
    items: ['Vitest', '@testing-library/react', 'Jest', 'Playwright'],
  },
  {
    category: 'Server & APIs',
    items: ['Hono', 'RESTful APIs', 'Drizzle ORM', 'SQLite', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Platforms & Infrastructure',
    items: ['Linux', 'macOS', 'AWS', 'GitHub Actions', 'TeamCity CI/CD'],
    wrap: false,
  },
];
