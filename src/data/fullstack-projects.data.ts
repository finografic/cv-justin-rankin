import type { Project } from 'types';

export const fullstackProjects: Project[] = [
  {
    name: 'touch-monorepo',
    visibility: 'private',
    status: 'active',
    description:
      'Full-stack TypeScript monorepo for an IoT-connected product management and operational control system. React + React Router client with PandaCSS, Hono API server with Drizzle ORM + SQLite, hardware relay integration via USB HID, i18n with dynamic language support (EN/ES/CA), role-based auth, real-time timer and session management, and deployment tooling for Raspberry Pi. Uses pnpm workspaces, Turborepo, and consumes multiple @finografic packages in production.',
  },
];
