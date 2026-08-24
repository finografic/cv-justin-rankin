---
name: apply-design-md
description: Enforce a project's DESIGN.md across its UI codebase. Crawls the route tree, audits pages/components against the DESIGN.md tokens and rules, fixes ONLY misaligned code, and writes a final alignment report to .agents/. Success = uniform, consistent shared design language across all pages.
trigger: User asks to apply, enforce, or align the codebase/UI with DESIGN.md, or to make pages consistent with the design system
tools: [file-read, file-edit, shell]
---

# Apply DESIGN.md — Align the Codebase to the Design System

`DESIGN.md` states the rules; this skill makes the code obey them. It audits every route,
touches **only what is misaligned**, and leaves a full audit trail in `.agents/`.

**Prime directives:**

- **Minimal diff.** A page already aligned is not edited, not reformatted, not "improved".
- **Respect the source of truth.** Read the `## Source of Truth` section of DESIGN.md. If a
  design system (PandaCSS, Tailwind theme, `@finografic/design-system`) is canonical, fix code
  by pointing it at existing DS tokens/recipes — never by hardcoding literal values. Only when
  DESIGN.md itself is canonical may literals be normalized directly to its token values.
- **Don't redesign.** Alignment means conforming to DESIGN.md, not personal taste. A rule not
  present in DESIGN.md is not enforceable.

## Step 1 — Load and validate DESIGN.md

Read `DESIGN.md` (root, or `.stitch/DESIGN.md`). Resolve every token reference. Validate first:

```
pnpm dlx @finografic/genx design lint
```

(wraps the official `@google/design.md` linter). If lint reports **errors**, stop and surface
them — never enforce a broken spec. When a design system is canonical, also run
`pnpm dlx @finografic/genx design check`: if the mirror has drifted, refresh with
`genx design sync --pull` before enforcing stale tokens on the codebase. Also load
`.agents/design/DESIGN_DEVIATIONS.md` if present (produced by `generate-design-md`): it is a
pre-computed work-list of known misalignments.

Build the rule set to enforce:

- **Tokens** (frontmatter): exact colors, typography objects, spacing scale, radii, component
  property values.
- **Prose rules** (body): usage constraints ("primary only for the most important action"),
  Do's and Don'ts, layout/elevation/shape principles.

## Step 2 — Crawl the route tree

Framework-aware route discovery:

| Framework               | Routes                                      |
| ----------------------- | ------------------------------------------- |
| Next.js (app router)    | `app/**/page.{tsx,jsx,mdx}` + `layout.*`    |
| Next.js (pages)         | `pages/**/*.{tsx,jsx}`                      |
| React Router / TanStack | route config or `routes/**` file convention |
| Astro                   | `src/pages/**`                              |
| SvelteKit               | `src/routes/**/+page.svelte`                |
| Vue/Nuxt                | `pages/**`                                  |
| **No router**           | **the entry component — see below**         |

**Router-less apps are normal, not an edge case.** A Vite/CRA SPA, a dashboard, or a desktop-style
tool often has one entry component and no routes at all. Finding no routes is not a reason to
stop: fall back to the **view tree** from the entry point (`src/main.*` → `App.*`), and treat each
top-level pane, panel, or view component as a "route" for the rest of this skill. Panes rendered
side by side are exactly where drift shows up, for the same reason separate pages are.

Also distinguish **app-authored** components from **vendored** ones (`src/components/ui/**` from
shadcn, or anything a generator owns and will overwrite). Both get audited, but only app-authored
files are safe to fix without asking — see Step 4.

For each route, build its **implementation closure**: the page file, its layout(s), and the
local components it imports (follow imports one or two levels — shared UI primitives matter
most; skip `node_modules` except to note which DS components are used). Emit a route → files map.

## Step 3 — Audit each route (classify, don't fix yet)

Compare the closure of each route against the rule set. Record findings as:

```
route | file:line | category | severity | found | expected (token) | rule source
```

Categories: `color` · `typography` · `spacing` · `radius` · `elevation` · `component` ·
`layout` · `dos-donts` · `a11y`.

What counts as misaligned:

- Literal values that differ from the corresponding token (a raw `#1B1D20` where
  `colors.primary` = `#1A1C1E`; a `border-radius: 6px` where the scale has 4/8).
- Values off the spacing scale (17px padding in an 8-based system).
- Wrong token for the semantic role (secondary color used on a primary CTA).
- Component implementations contradicting `components` tokens (button padding, radius,
  bg/text colors) or the prose component conventions.
- Violations of explicit Do's and Don'ts (mixed corner language in one view, >2 font weights
  on a screen, contrast below the stated floor).
- **Equivalence, not textual identity:** `rgb(26,28,30)` ≡ `#1A1C1E`; a Tailwind class or
  Panda token that resolves to the expected value is ALIGNED — leave it alone.

Skip routes with zero findings — list them as `aligned` and never touch them.

## Step 4 — Fix misaligned routes only

Order fixes by blast radius: shared components first (fixing one button component may clear
findings on many routes), then per-route files.

Per finding, choose the smallest conforming change, in this preference order:

1. **Use the design system.** Swap the literal/ad-hoc style for the existing DS token, utility
   class, or recipe (`text-primary`, `token(colors.primary)`, DS `<Button variant="primary">`).
2. **Normalize the literal** to the DESIGN.md token value — only when no DS is canonical.
3. **Structural conformance** (component markup/variant changes) — only when required by an
   explicit component rule, and keep behavior identical.

Never: change copy/content, alter layout structure beyond the cited rule, rename things,
reformat untouched lines, or "fix" a page that had no findings.

**Vendored components are not yours to fix.** Files a generator owns — `src/components/ui/**`
from shadcn/ui, anything re-emitted by a CLI — are overwritten on the next `add`/upgrade, so an
edit there is silently lost and creates a permanent diff against upstream. Audit them, report
their findings, and route them to **Not auto-fixed** with that reason. The exception is an
explicit instruction from the user that the project has adopted those files as its own. Where a
vendored primitive is genuinely off-scale, the durable fix is usually a token in the design
system, not an edit to the vendored file.

## Step 5 — Verify

- Re-scan the changed files: previous findings must now resolve to `aligned`.
- Run the project's own checks (typecheck / lint / build; visual tests if present).
- If the project runs locally, spot-check 2–3 changed routes in the browser for regressions.

## Step 6 — Final report (required)

Write `.agents/reports/DESIGN_ALIGNMENT_<YYYY-MM-DD>.md`:

```md
# Design Alignment Report — <date>

**DESIGN.md**: <path> (lint: 0 errors / N warnings)
**Routes audited**: N · **aligned untouched**: N · **fixed**: N

## Changes by route

### /settings
| File | Category | Rule | Before | After |
| ---- | -------- | ---- | ------ | ----- |
| src/routes/settings/page.tsx:88 | color | colors.primary | #1B1D20 | token(colors.primary) |

## Already aligned (untouched)
/, /about, ...

## Not auto-fixed (needs human decision)
| Route | Finding | Why deferred |

## Verification
typecheck ✓ · build ✓ · visual spot-check: /settings, /billing ✓
```

Findings that are ambiguous, content-coupled, or risky (e.g. a rule conflict inside DESIGN.md
itself) go to **Not auto-fixed** with a reason — deferring is better than guessing. Finish by
summarizing the report path and headline numbers to the user.
