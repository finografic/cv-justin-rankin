import type { TechnologyGroup } from 'types';

export const technologies: TechnologyGroup[] = [
  {
    category: 'Core',
    variant: 'bullets',
    items: ['TypeScript', 'JavaScript', 'React', 'Node.js'],
  },
  {
    category: 'Architecture & Patterns',
    items: [
      'Micro-frontends',
      'Monorepo (pnpm workspaces, Turborepo)',
      'Shared component systems',
      'Design systems',
      'ESM-first modules',
      '@tanstack/query',
    ],
  },
  {
    category: 'Front-end & UI',
    items: [
      'Accessibility (WCAG, ARIA)',
      'Headless UI primitives (Ark UI, Radix UI)',
      'React Hook Form',
      'Schema validation (Zod, StandardSchema)',
      'CSS-in-JS (PandaCSS, Emotion)',
      'SASS/CSS',
      'Responsive design',
      'Mobile-first development',
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
      'CI/CD pipelines (TeamCity, GitHub Actions)',
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
      'Custom CLI development (Commander, @clack/prompts)',
      'TUI rendering',
      'Code generation and codemod tooling',
      'Dependency governance automation',
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
      'Prompt engineering and system instruction design',
    ],
  },
  {
    category: 'Testing',
    items: ['Vitest', '@testing-library/react', 'Jest', 'Playwright (emerging)'],
  },
  {
    category: 'Server & APIs',
    items: ['Hono', 'RESTful APIs', 'Drizzle ORM', 'SQLite', 'MySQL', 'MongoDB'],
  },
  {
    category: 'Platforms & Infrastructure',
    items: ['Linux', 'macOS', 'AWS', 'GitHub Actions', 'TeamCity CI/CD'],
  },
];
