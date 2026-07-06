import type { Project } from 'types';

export const projects: Project[] = [
  {
    name: 'LLAAB',
    commits: 388,
    status: 'active',
    titleHref: 'https://github.com/finografic/llaab',
    description:
      'Local-first AI agent architecture base. Structured knowledge vault with typed markdown nodes, LLM router (Anthropic + Ollama), agent orchestration, and MCP server. Built to formalise AI-assisted workflows in TypeScript engineering.',
  },
  {
    name: '@finografic/design-system',
    version: 'v1.19.2',
    commits: 432,
    status: 'active',
    description:
      'Token-driven React design system on PandaCSS and Ark UI. 20+ components, OKLCH colour palette, semantic tokens, responsive viewport system, and icon management tooling.',
  },
  {
    name: '@finografic/genx',
    version: 'v5.36.4',
    commits: 718,
    status: 'active',
    description:
      'Project generator and codemod toolkit. Scaffolds packages, migrates conventions (OXC, AI configs, Vitest), audits repos for drift. The central tool tying the ecosystem together.',
  },
  {
    name: 'touch-monorepo',
    commits: 2932,
    status: 'production',
    titleHref: 'https://github.com/finografic/touch-monorepo',
    description:
      'Full-stack IoT product management system. React + Hono + Drizzle ORM + SQLite, hardware relay via USB HID, role-based auth, real-time session management, multi-locale (EN/ES/CA). Raspberry Pi deployment.',
  },
  {
    name: 'monorepo-demo',
    commits: 101,
    status: 'active',
    description:
      'Live full-stack demo built from monorepo-starter. React + Hono + Auth.js + Drizzle + i18n + design-system components. Includes AI-generated Markdown, Queensland TMR data visualisation, and supply-chain security scanner demos.',
  },
];
