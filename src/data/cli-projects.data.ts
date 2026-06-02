import type { Project } from 'types';

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

// Parked for potential future reshuffles.
export const archivedCliProjects: Project[] = [
  {
    name: '@finografic/macos-layouts',
    version: 'v0.19.3',
    commits: 124,
    visibility: 'public',
    status: 'active',
    description:
      'macOS window layout manager. Save, list, and apply window arrangements via Hammerspoon IPC. TypeScript CLI generating Lua for window positioning, with display-aware resolution matching.',
  },
];
