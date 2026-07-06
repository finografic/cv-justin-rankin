import type { Project, ProjectCategory } from 'types';

export const projects: ProjectCategory[] = [
  {
    name: 'Architecture & Configuration',
    projects: [
      {
        name: '@finografic/genx',
        version: 'v5.36.4',
        commits: 718,
        visibility: 'public',
        status: 'active',
        description:
          'Project generator and codemod toolkit. Scaffolds new packages, migrates conventions (OXC, AI agent configs, git hooks, vitest), audits existing repos for drift, and keeps structure consistent across the ecosystem. The central tool that ties everything together.',
      },
      {
        name: '@finografic/oxc-config',
        version: 'v2.8.2',
        commits: 188,
        visibility: 'public',
        status: 'active',
        description:
          'Shared oxfmt and oxlint configuration for the Rust-powered OXC toolchain. Composable presets for formatting (TypeScript, React, CSS, JSON, markdown) and linting (with role-specific presets for client, server, CLI, and library packages).',
      },
      {
        name: '@finografic/deps-policy',
        version: 'v0.26.9',
        commits: 167,
        visibility: 'public',
        status: 'active',
        description:
          'Central dependency version policy consumed by genx and other tooling. Includes its own CLI for auditing, updating, and snapshotting dependency state across the ecosystem.',
        // printBreakAfter: true,
      },
      {
        name: '@finografic/core',
        version: 'v0.15.0',
        commits: 145,
        visibility: 'public',
        status: 'active',
        description:
          'Shared TypeScript utilities, type-level primitives (casing transforms, object key utilities, enum helpers), type guards, and time/string formatting functions.',
      },
      {
        name: '@finografic/md-lint',
        version: 'v0.16.6',
        commits: 94,
        visibility: 'public',
        status: 'active',
        description:
          'Structural markdown linter with two scoped rule sets: strict rules for human-facing docs, relaxed rules for AI agent instruction files (CLAUDE.md, AGENTS.md). Auto-classifies files by path.',
        printBreakAfter: true,
      },
      {
        name: '@finografic/project-scripts',
        version: 'v1.5.4',
        commits: 68,
        visibility: 'public',
        status: 'active',
        description:
          'Monorepo utility scripts: build artifact cleanup, SQLite database setup and migration, cross-platform deployment packaging, and GitHub release automation.',
      },
    ],
  },
  {
    name: 'Front-end & Design System',
    projects: [
      {
        name: '@finografic/design-system',
        version: 'v1.19.2',
        commits: 432,
        visibility: 'public',
        status: 'active',
        description:
          'Token-driven React design system built on PandaCSS and Ark UI headless primitives. 20+ components (accordion, dialog, data-table, toast, tabs, forms), OKLCH color palette, semantic tokens, responsive viewport system, and a companion icon management tool.',
      },
      {
        name: '@finografic/lucide-manager',
        version: 'v0.12.11',
        commits: 93,
        visibility: 'public',
        status: 'active',
        description:
          'Dev tool for managing a Lucide icon registry. Browser-based picker UI for selecting from 1500+ icons, generating strongly-typed TypeScript registry files for the design system package.',
      },
      {
        name: '@finografic/zustand-context-creator',
        version: 'v1.2.0',
        commits: 45,
        visibility: 'public',
        status: 'active',
        description:
          'Lightweight utility for creating type-safe Zustand stores with React Context integration. Auto-generated setters, persistence, DevTools support. Inspired by patterns from Matt Pocock’s TypeScript work.',
      },
    ],
  },
];

export const cliProjects: Project[] = [
  {
    name: '@finografic/gli',
    version: 'v1.25.4',
    commits: 212,
    visibility: 'public',
    status: 'active',
    description:
      'Git CLI with live-updating terminal PR dashboard (like htop for pull requests). Interactive rebase, branch selection, multi-repo config, clickable PR links. Built on the GitHub CLI.',
  },
  {
    name: '@finografic/cli-kit',
    version: 'v1.4.0',
    commits: 48,
    visibility: 'public',
    status: 'active',
    description:
      'Composable CLI primitives shared across all @finografic CLI tools. Flag parsing, interactive prompts, TUI table rendering, file diff display, XDG config paths. The single hard dependency for every CLI in the ecosystem.',
  },
];

export const aiProjects: Project[] = [
  {
    name: 'LLAAB',
    commits: 388,
    visibility: 'public',
    status: 'active development',
    titleHref: 'https://github.com/finografic/llaab',
    description:
      'Learning Loop & Agent Architecture Base. A local-first system for turning unstructured content into structured, executable knowledge. Monorepo with Astro client, Hono server, structured vault (typed markdown nodes with frontmatter schemas), YouTube transcript ingestion pipeline, LLM router (Anthropic + Ollama), agent orchestration layer, and MCP server. Built to explore and formalize how AI-assisted workflows integrate into a TypeScript engineering practice.',
  },
  {
    name: '@finografic/ai-harness',
    version: 'v0.1.0',
    commits: 13,
    visibility: 'public',
    status: 'early stage',
    description:
      'Deterministic, composable pipeline for preprocessing inputs before LLM usage. Extract, reduce, structure, then optionally pass to an LLM. Designed to maximize the value of each token by doing as much work as possible before the model sees the input.',
  },
];

export const fullstackProjects: Project[] = [
  {
    name: 'touch-monorepo',
    commits: 2932,
    titleHref: 'https://github.com/finografic/touch-monorepo',
    description:
      'Full-stack TypeScript monorepo for an IoT-connected product management and operational control system. React + React Router client with PandaCSS, Hono API server with Drizzle ORM + SQLite, hardware relay integration via USB HID, i18n with dynamic language support (EN/ES/CA), role-based auth, real-time timer and session management, and deployment tooling for Raspberry Pi. Uses pnpm workspaces, Turborepo, and consumes multiple @finografic packages in production.',
  },
  {
    name: 'monorepo-demo',
    commits: 101,
    titleHref: 'https://github.com/finografic/monorepo-demo',
    description:
      'Live full-stack demo at <a href="https://finografic.github.io/monorepo-demo/">https://finografic.github.io/monorepo-demo</a>, built from repo <a href="https://github.com/finografic/monorepo-starter">@fingorafic/monorepo-starter</a>, showcasing a reusable TypeScript monorepo architecture with React, Hono, Auth.js, Drizzle ORM, i18n, design-system components, and API/RPC patterns. Includes 3 interactive demos: AI-generated Markdown pipeline, Queensland TMR data visualisation, and supply-chain security scanner demo.',
  },
];

export const archivedCliProjects: Project[] = [
  {
    name: '@finografic/macos-layouts',
    version: 'v0.20.0',
    commits: 130,
    visibility: 'public',
    status: 'active',
    description:
      'macOS window layout manager. Save, list, and apply window arrangements via Hammerspoon IPC. TypeScript CLI generating Lua for window positioning, with display-aware resolution matching.',
  },
];
