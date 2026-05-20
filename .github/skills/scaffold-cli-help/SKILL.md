---
name: scaffold-cli-help
description: Define or update root CLI help for @finografic CLI projects using HelpConfig in src/cli.help.ts and renderHelp from core/render-help. Use when adding commands, changing help layout, or aligning help with the normalized pattern.
trigger: User asks to add or change CLI help, root help, cli.help.ts, HelpConfig, or renderHelp for a finografic CLI
tools: [file-read, file-edit, terminal]
---

# Scaffold / maintain CLI help (`cli.help.ts`)

This skill applies the **typed root help** pattern used across `@finografic` CLI tools (`genx`, `gli`, and scaffolds from genx).

## Read first (repo — canonical for this repository)

- `.github/instructions/project/cli-help-patterns.instructions.md` — rules, file locations, `HelpConfig` shape, examples/footer conventions.

## Deeper spec (canonical — in this repo)

- **`docs/spec/CLI_CORE.md`** — full **`core/render-help`** API (`HelpConfig`, `renderHelp`, section shapes), export table, and examples.

**Optional context:** A temporary bulk-task folder in a monorepo (e.g. `___REFACTORING___`) may hold `REPORT_CLI_NORMALIZATION.md` with migration history. That path is **not** canonical; use it when you have it for background, not as the spec.

Keep this skill **procedural**; link to `docs/spec/CLI_CORE.md` for authoritative types and tables.

## Prerequisites

- `src/core/render-help/` exists (shared module; do not rewrite the renderer unless intentionally changing `core/` across all CLI repos).
- `tsconfig.json` includes `"core/*": ["./src/core/*"]` (or equivalent).
- You know the CLI **binary name** (e.g. `genx`) and the **commands** to list.

## Procedure

1. **Open or create** `src/cli.help.ts` at the **repository root of `src/`** (never nested under `commands/` for root help).

2. **Import types** from the barrel only:

   ```ts
   import type { HelpConfig } from 'core/render-help';
   ```

   Do not import help types from `src/types/` or `utils/`.

3. **Export a single named config** `cliHelp` (not default export):

   ```ts
   export const cliHelp: HelpConfig = {
     main: { bin: '…', args: '<command> [options]' },
     // commands, examples, footer — see instruction file
   };
   ```

4. **Follow section conventions** (details in the instruction file):
   - **examples:** `label` = human description, `description` = exact command line.
   - **footer:** `label` may use `<placeholder>` tokens; `description` optional dim line.

5. **Wire `src/cli.ts`:** import `renderHelp` from `core/render-help` and `cliHelp` from `./cli.help.js` (use `.js` extension if the project uses `verbatimModuleSyntax`). Call `renderHelp(cliHelp)` only from the CLI entry / help branch — **not** inside `cli.help.ts`.

6. **Optional shared defaults:** genx uses `defaultHelpOptions` from `config/help.config` for `minWidth` / alignment — follow existing project pattern if present.

7. **Verify:** `pnpm typecheck` and run the binary with `--help` or no args to confirm layout.

## When adding a new command

- Add a row to `commands.list` (keep descriptions one line).
- Add **Examples** entries where users will copy-paste real invocations.
- Update any command-specific help files (`src/help/*.help.ts`) if this repo splits per-command help — root skill covers **root** `HelpConfig` only.

## Design constraints

- Root help stays **declarative data** (`HelpConfig`); rendering is centralized in `core/render-help`.
- Do not duplicate `renderHelp` logic in application code.
