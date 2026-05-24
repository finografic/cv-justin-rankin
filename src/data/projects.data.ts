import type { ProjectCategory } from 'types';

export const projects: ProjectCategory[] = [
  {
    name: '@finografic — Architecture & Configuration',
    projects: [
      {
        name: '@finografic/genx',
        version: 'v5.24',
        visibility: 'public',
        status: 'active',
        description:
          'Project generator and codemod toolkit. Scaffolds new packages, migrates conventions (OXC, AI agent configs, git hooks, vitest), audits existing repos for drift, and keeps structure consistent across the ecosystem. The central tool that ties everything together.',
      },
      {
        name: '@finografic/oxc-config',
        version: 'v2.5',
        visibility: 'public',
        status: 'active',
        description:
          'Shared oxfmt and oxlint configuration for the Rust-powered OXC toolchain. Composable presets for formatting (TypeScript, React, CSS, JSON, markdown) and linting (with role-specific presets for client, server, CLI, and library packages).',
      },
      {
        name: '@finografic/deps-policy',
        version: 'v0.20',
        visibility: 'public',
        status: 'active',
        description:
          'Central dependency version policy consumed by genx and other tooling. Includes its own CLI for auditing, updating, and snapshotting dependency state across the ecosystem.',
      },
      {
        name: '@finografic/core',
        version: 'v0.15',
        visibility: 'public',
        status: 'active',
        description:
          'Shared TypeScript utilities, type-level primitives (casing transforms, object key utilities, enum helpers), type guards, and time/string formatting functions.',
      },
      {
        name: '@finografic/md-lint',
        version: 'v0.9',
        visibility: 'public',
        status: 'active',
        description:
          'Structural markdown linter with two scoped rule sets: strict rules for human-facing docs, relaxed rules for AI agent instruction files (CLAUDE.md, AGENTS.md). Auto-classifies files by path.',
      },
      {
        name: '@finografic/project-scripts',
        version: 'v1.3',
        visibility: 'public',
        status: 'active',
        description:
          'Monorepo utility scripts: build artifact cleanup, SQLite database setup and migration, cross-platform deployment packaging, and GitHub release automation.',
      },
    ],
  },
  {
    name: '@finografic — CLI & Developer Tools',
    projects: [
      {
        name: '@finografic/gli',
        version: 'v1.23',
        visibility: 'public',
        status: 'active',
        description:
          'Git CLI with live-updating terminal PR dashboard (like htop for pull requests). Interactive rebase, branch selection, multi-repo config, clickable PR links. Built on the GitHub CLI.',
      },
      {
        name: '@finografic/cli-kit',
        version: 'v1.4',
        visibility: 'public',
        status: 'active',
        description:
          'Composable CLI primitives shared across all @finografic CLI tools. Flag parsing, interactive prompts, TUI table rendering, file diff display, XDG config paths. The single hard dependency for every CLI in the ecosystem.',
      },
      {
        name: '@finografic/macos-layouts',
        version: 'v0.17',
        visibility: 'public',
        status: 'active',
        description:
          'macOS window layout manager. Save, list, and apply window arrangements via Hammerspoon IPC. TypeScript CLI generating Lua for window positioning, with display-aware resolution matching.',
      },
    ],
  },
  {
    name: '@finografic — Front-end & Design System',
    projects: [
      {
        name: '@finografic/design-system',
        visibility: 'public',
        status: 'active',
        description:
          'Token-driven React design system built on PandaCSS and Ark UI headless primitives. 20+ components (accordion, dialog, data-table, toast, tabs, forms), OKLCH color palette, semantic tokens, responsive viewport system, and a companion icon management tool.',
      },
      {
        name: '@finografic/lucide-manager',
        version: 'v0.7',
        visibility: 'public',
        status: 'active',
        description:
          'Dev tool for managing a Lucide icon registry. Browser-based picker UI for selecting from 1500+ icons, generating strongly-typed TypeScript registry files for the design system package.',
      },
      {
        name: '@finografic/zustand-context-creator',
        version: 'v1.2',
        visibility: 'public',
        status: 'active',
        description:
          'Lightweight utility for creating type-safe Zustand stores with React Context integration. Auto-generated setters, persistence, DevTools support. Inspired by patterns from Matt Pocock’s TypeScript work.',
      },
    ],
  },
  {
    name: '@finografic — Full-stack Application',
    projects: [
      {
        name: 'touch-monorepo',
        visibility: 'private',
        status: 'active',
        description:
          'Full-stack TypeScript monorepo for an IoT-connected product management and operational control system. React + React Router client with PandaCSS, Hono API server with Drizzle ORM + SQLite, hardware relay integration via USB HID, i18n with dynamic language support (EN/ES/CA), role-based auth, real-time timer and session management, and deployment tooling for Raspberry Pi. Uses pnpm workspaces, Turborepo, and consumes multiple @finografic packages in production.',
      },
    ],
  },
];
