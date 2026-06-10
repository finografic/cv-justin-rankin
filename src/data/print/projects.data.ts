import type { Project } from 'types';

export const projects: Project[] = [
  {
    name: 'LLAAB',
    commits: 243,
    status: 'active',
    titleHref: 'https://github.com/finografic/llaab',
    description:
      'Local-first AI agent architecture base. Structured knowledge vault with typed markdown nodes, LLM router (Anthropic + Ollama), agent orchestration, and MCP server. Built to formalise AI-assisted workflows in TypeScript engineering.',
  },
  {
    name: '@finografic/design-system',
    version: 'v1.19.1',
    commits: 430,
    status: 'active',
    description:
      'Token-driven React design system on PandaCSS and Ark UI. 20+ components, OKLCH colour palette, semantic tokens, responsive viewport system, and icon management tooling.',
  },
  {
    name: '@finografic/genx',
    version: 'v5.36.1',
    commits: 710,
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
    name: '@finografic/gli',
    version: 'v1.25.4',
    commits: 212,
    status: 'active',
    description:
      'Git CLI with live-updating terminal PR dashboard. Interactive rebase, branch selection, multi-repo config, clickable PR links.',
  },
];
