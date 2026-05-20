# Git Policy

## Commits

Use this format for all commits unless the user explicitly says otherwise.

- Subject: conventional commit style — `type(scope): short action`. Allowed **types** are enforced by `commitlint.config.mjs` (see `docs/process/DEVELOPER_WORKFLOW.md`). Use **scopes** such as `agents`, `skills`, or a package name.
- Body: terse bullet points; prioritize brevity over grammar.
- Preserve real newlines in commit bodies; never use escaped `\\n` literals.
- Prefer `git commit -F <message-file>` for multiline messages — it avoids shell quoting issues.
- A "Verification:" section is allowed; keep each line short, e.g. `- workspace typecheck OK`.
- NEVER include `Co-Authored-By` lines. Not ever, for any reason.

## Releases

- Published to GitHub Packages (`https://npm.pkg.github.com`).

Releases are a **human-only operation**.
Do not initiate, trigger, or assist with a release unless the user gives an explicit instruction in the current message.

- Do not bump versions (`pnpm version`, `npm version`, direct edits to `package.json` version field).
- Do not push tags or `--follow-tags`.
- Do not run `pnpm publish`, `pnpm release.*`, or any equivalent.
- Do not create or edit GitHub Releases or draft releases.
- Do not generate or modify changelogs unless asked for the content only (not to commit or push it).

If asked something ambiguous that could imply a release (e.g. "ship it", "make it live"), clarify before touching anything release-related.
