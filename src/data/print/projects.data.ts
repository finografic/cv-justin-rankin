import type { Project } from 'types';

export const projects: Project[] = [
  {
    name: 'LLAAB',
    commits: 508,
    status: 'active',
    titleHref: 'https://github.com/finografic/llaab',
    description:
      'Local-first AI agent architecture base. Structured knowledge vault with typed markdown nodes, LLM router (Anthropic + Ollama), agent orchestration, MCP server, and Hono RPC for type-safe client/server contracts. Built to formalise AI-assisted workflows in TypeScript engineering.',
  },
  {
    name: '@finografic/design-system',
    version: 'v1.19.2',
    commits: 434,
    status: 'active',
    description:
      'Token-driven React design system on PandaCSS and Ark UI. 20+ components, OKLCH colour palette, semantic tokens, responsive viewport system, and icon management tooling.',
  },
  {
    name: '@finografic/genx',
    version: 'v5.40.3',
    commits: 745,
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
      'Full-stack IoT product management system. React + Hono + Drizzle ORM + SQLite, hardware relay via USB HID, role-based auth, real-time sessions, multi-locale support, and Raspberry Pi deployment.',
  },
  {
    name: 'monorepo-demo',
    commits: 101,
    status: 'active',
    description:
      'Live full-stack monorepo demo at https://d2h3ihm2ddi3lx.cloudfront.net, React/Vite + Hono/Auth.js API with typed RPC (Tanstack Query), deployed on Terraform-managed AWS (CloudFront, S3, EC2, RDS). Portfolio of 3 interactive demos: AI-generated Markdown pipeline, Queensland TMR data visualisation, and supply-chain security scanner demo.',
  },
];
