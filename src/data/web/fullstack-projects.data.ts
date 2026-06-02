import type { Project } from 'types';

export const fullstackProjects: Project[] = [
  {
    name: 'touch-monorepo',
    commits: 2931,
    titleHref: 'https://github.com/finografic/touch-monorepo',
    description:
      'Full-stack TypeScript monorepo for an IoT-connected product management and operational control system. React + React Router client with PandaCSS, Hono API server with Drizzle ORM + SQLite, hardware relay integration via USB HID, i18n with dynamic language support (EN/ES/CA), role-based auth, real-time timer and session management, and deployment tooling for Raspberry Pi. Uses pnpm workspaces, Turborepo, and consumes multiple @finografic packages in production.',
  },
  {
    name: 'monorepo-starter',
    commits: 14,
    titleHref: 'https://github.com/finografic/monorepo-starter',
    description:
      'Full-stack pnpm monorepo starter with auth, routing, i18n, database, design tokens, OpenAPI docs, and structured logging pre-wired. Vite 7 + React 19 client, Hono API server, Drizzle ORM + SQLite, Auth.js, Panda CSS, and @finografic/design-system. Built as a reference implementation and portfolio demo.',
  },
];
