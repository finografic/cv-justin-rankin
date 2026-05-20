# General Development Rules

These rules guide code suggestions and refactors. Apply them consistently across the project.

## Code Quality

- Use TypeScript with `strict` mode.
- Prefer type-safe code; avoid `any`.
- Use camelCase for variables; PascalCase for types/components.
- Add JSDoc for complex functions and public APIs.
- Prefer explicit return types.

## Control Flow

- Prefer guard clauses over nested `if/else`.
- Use single-level ternaries only; avoid nested ternaries.

## Error Handling

- Handle errors explicitly; avoid swallowing.
- Use clear, typed error shapes where feasible.

## Performance & Security

- Minimize dependencies; enable tree-shaking.
- Avoid leaking sensitive data; validate public API inputs.

## Markdown Conventions

- Use plain headings (`##`, `###`) without extra bold.
- Add blank lines around code blocks.
- Wrap filenames/paths/methods/variables in backticks for inline code.
