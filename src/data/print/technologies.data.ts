import type { PrintTechnologyGroup } from 'types/print-content.types';

export const technologies: PrintTechnologyGroup[] = [
  { category: 'Core', items: ['TypeScript', 'JavaScript', 'React', 'Node.js'] },
  {
    category: 'Architecture',
    items: [
      'Micro-frontends',
      'Monorepo (pnpm, Turborepo)',
      'Shared component systems',
      'Design systems',
      'ESM-first',
      '@tanstack/query',
    ],
  },
  {
    category: 'Front-end',
    items: [
      'Accessibility (WCAG/ARIA)',
      'Ark UI',
      'Radix UI',
      'React Hook Form',
      'Zod',
      'PandaCSS',
      'Emotion',
      'SASS/CSS',
      'i18n',
    ],
  },
  {
    category: 'Tooling',
    items: [
      'OXC (oxlint/oxfmt)',
      'ESLint',
      'Vite',
      'tsdown',
      'Vitest',
      '@testing-library',
      'CI/CD (TeamCity, GitHub Actions)',
      'Docker',
      'pnpm',
    ],
  },
  {
    category: 'CLI',
    items: ['Commander', '@clack/prompts', 'TUI rendering', 'code generation', 'dependency governance'],
  },
  {
    category: 'AI & Agentic',
    items: [
      'Claude Code',
      'Cursor',
      'Copilot',
      'LLM integration (Anthropic, Ollama)',
      'MCP server development',
      'prompt engineering',
    ],
  },
  { category: 'Server', items: ['Hono', 'RESTful APIs', 'Drizzle ORM', 'SQLite', 'MySQL'] },
];
