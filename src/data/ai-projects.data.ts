import type { Project } from 'types';

export const aiProjects: Project[] = [
  {
    name: 'LLAAB',
    visibility: 'public',
    status: 'active development',
    titleHref: 'https://github.com/finografic/llaab',
    description:
      'Learning Loop & Agent Architecture Base. A local-first system for turning unstructured content into structured, executable knowledge. Monorepo with Astro client, Hono server, structured vault (typed markdown nodes with frontmatter schemas), YouTube transcript ingestion pipeline, LLM router (Anthropic + Ollama), agent orchestration layer, and MCP server. Built to explore and formalize how AI-assisted workflows integrate into a TypeScript engineering practice.',
  },
  {
    name: '@finografic/ai-harness',
    version: 'v0.0.1',
    visibility: 'public',
    status: 'early stage',
    description:
      'Deterministic, composable pipeline for preprocessing inputs before LLM usage. Extract, reduce, structure, then optionally pass to an LLM. Designed to maximize the value of each token by doing as much work as possible before the model sees the input.',
  },
];
