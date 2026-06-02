import type { ProjectCategory } from 'types';

export const projects: ProjectCategory[] = [
  {
    name: 'Architecture & Configuration',
    projects: [
      {
        name: '@finografic/genx',
        version: 'v5.33.0',
        commits: 675,
        visibility: 'public',
        status: 'active',
        description:
          'Project generator and codemod toolkit. Scaffolds new packages, migrates conventions (OXC, AI agent configs, git hooks, vitest), audits existing repos for drift, and keeps structure consistent across the ecosystem. The central tool that ties everything together.',
      },
      {
        name: '@finografic/oxc-config',
        version: 'v2.6.6',
        commits: 177,
        visibility: 'public',
        status: 'active',
        description:
          'Shared oxfmt and oxlint configuration for the Rust-powered OXC toolchain. Composable presets for formatting (TypeScript, React, CSS, JSON, markdown) and linting (with role-specific presets for client, server, CLI, and library packages).',
      },
      {
        name: '@finografic/deps-policy',
        version: 'v0.26.7',
        commits: 163,
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
        version: 'v0.16.1',
        commits: 84,
        visibility: 'public',
        status: 'active',
        description:
          'Structural markdown linter with two scoped rule sets: strict rules for human-facing docs, relaxed rules for AI agent instruction files (CLAUDE.md, AGENTS.md). Auto-classifies files by path.',
        printBreakAfter: true,
      },
      {
        name: '@finografic/project-scripts',
        version: 'v1.3.3',
        commits: 54,
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
        version: 'v1.18.2',
        commits: 421,
        visibility: 'public',
        status: 'active',
        description:
          'Token-driven React design system built on PandaCSS and Ark UI headless primitives. 20+ components (accordion, dialog, data-table, toast, tabs, forms), OKLCH color palette, semantic tokens, responsive viewport system, and a companion icon management tool.',
      },
      {
        name: '@finografic/lucide-manager',
        version: 'v0.7.0',
        commits: 44,
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
