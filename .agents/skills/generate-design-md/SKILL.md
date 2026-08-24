---
name: generate-design-md
description: Scan an app/website codebase (or a live site) and generate a spec-compliant DESIGN.md — consolidating scattered, inconsistent design values into ONE single source of truth. Follows the Google/Stitch DESIGN.md format (YAML token frontmatter + canonical markdown sections) and validates with @google/design.md lint.
trigger: User asks to generate, extract, create, or bootstrap a DESIGN.md for a project, or to "capture the design system" of an app or website
tools: [file-read, file-write, shell, browser]
---

# Generate DESIGN.md — Extract and Consolidate a Single Source of Truth

Real codebases drift: three near-identical grays, two "primary" blues, spacing values off the
scale by 2px. This skill scans the project, treats every found value as **evidence**, and
consolidates the evidence into one coherent design system. The output is a `DESIGN.md` that both
humans and agents can read, edit, and enforce — plus a deviations log that feeds the companion
`apply-design-md` skill.

**Prime directive:** produce ONE single source of truth. Never emit two tokens that mean the same
thing. Where the codebase disagrees with itself, reason about which value is _intended_ and
document the losers as deviations — do not average, and do not include both.

## Output format (Google/Stitch spec)

`DESIGN.md` = YAML frontmatter (machine-readable tokens) + markdown body (rationale).
Canonical section order — omit irrelevant ones, never reorder:

`Overview` → `Colors` → `Typography` → `Layout` → `Elevation & Depth` → `Shapes` →
`Components` → `Do's and Don'ts`

Note **Elevation & Depth comes before Shapes**. The linter reports `section-order` otherwise.

Frontmatter schema (token types: Color `"#RRGGBB"`, Dimension `Npx|em|rem`,
Typography object, Token Reference `"{path.to.token}"`):

```yaml
---
version: alpha
name: <Design system name>
colors:
  primary: "#1A1C1E"        # at minimum define `primary` (lint warns otherwise)
typography:
  body-md: { fontFamily: Inter, fontSize: 16px, fontWeight: 400, lineHeight: 1.6 }
rounded:
  md: 8px
spacing:
  md: 16px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
---
```

Recommended token names — colors: `primary, secondary, tertiary, neutral, surface, on-surface,
error`; typography: `headline-lg/md, body-lg/md/sm, label-lg/md/sm`; rounded: `none, sm, md, lg,
xl, full`. Component properties limited to: `backgroundColor, textColor, typography, rounded,
padding, size, height, width` (anything else triggers `broken-ref`).

## Step 0 — Detect stack and design system

Check `package.json` + config files to classify the project:

| Signal                                   | Stack               | Where tokens live                                      |
| ---------------------------------------- | ------------------- | ------------------------------------------------------ |
| `tailwindcss` v4 + `@theme` block in CSS | Tailwind v4         | `@theme` custom properties in the entry CSS            |
| `tailwind.config.{js,ts}`                | Tailwind v3         | `theme.extend` in config                               |
| `components.json` + `cn()` util          | shadcn/ui           | CSS variables in `globals.css` (`:root` / `.dark`)     |
| `@pandacss/dev`, `panda.config.ts`       | PandaCSS            | `theme.tokens` / `semanticTokens` in `panda.config.ts` |
| `@radix-ui/*`, `@ark-ui/*`               | Unstyled primitives | Styling lives in project CSS — scan harder             |
| `@finografic/design-system`              | Finografic DS       | PandaCSS tokens + ArkUI recipes inside the DS package  |

## Step 1 — Decide the source of truth (hybrid rule)

- **Project HAS a design system / token file** → that system stays canonical. Extract tokens
  FROM it into DESIGN.md, which becomes a faithful, agent-readable mirror. Record this.
- **No design system** (ad-hoc CSS, inline styles) → the generated `DESIGN.md` frontmatter
  BECOMES the canonical token source going forward.

Declare the decision in a custom section (the spec preserves unknown sections):

```md
## Source of Truth

Tokens are canonical in `panda.config.ts` (PandaCSS). This file mirrors them for agent
consumption — when they disagree, the config wins; re-run `generate-design-md` to refresh.
```

(or: "This DESIGN.md is the canonical token source; stylesheets must conform to it.")

**Fast path:** when a design system exists, `pnpm dlx @finografic/genx design sync --pull`
mechanically bootstraps the token frontmatter from it (PandaCSS, Tailwind v4). Run it first,
then spend the judgement budget on what the machine cannot do: Steps 2–3 (cross-page
evidence and consolidation), component tokens, and all prose sections.

## Step 2 — Harvest evidence

Gather every design value with its location and frequency. Prefer breadth over depth first.

- **Token/theme files** (highest authority): panda/tailwind config, `@theme`, CSS custom
  properties, DS package exports.
- **Stylesheets & CSS-in-JS**: grep for hex/`rgb(`/`oklch(` colors, `font-family`, `font-size`,
  `border-radius`, `box-shadow`, spacing values (`padding|margin|gap`).
- **Components**: button/input/card/nav implementations — variant patterns, states.
- **Pages/routes**: sample several distinct routes (home, list, detail, form/settings) so
  per-page drift becomes visible. Record which route each value came from.
- **Content identity**: product name and voice from README/config — feeds the Overview section.
- **Live-site mode** (no code access): open the site in the browser, sample the same page types,
  read computed styles via JS (`getComputedStyle`) for the elements above. Note that computed
  values are resolved (no var names) — cluster harder in Step 3.

Build an evidence table: `value | kind | count | defined-in-token-file? | routes seen`.

## Step 3 — Consolidate with design taste (the critical step)

Pages will disagree. Resolve every conflict to a single winner:

1. **Cluster near-duplicates.** Colors within a small perceptual distance (e.g. `#1A1C1E` vs
   `#1B1D20`), radii 6px vs 8px, font stacks differing only in fallbacks — one cluster, one token.
2. **Pick the winner by authority, then frequency:** value defined in a token/theme file >
   value used on the most routes > value on the primary/landing route. Never invent a compromise
   value; never average.
3. **Snap outliers to the inferred scale.** If spacing evidence is 4/8/16/24/32 plus a lone 18px,
   the scale is 8-based and 18px is a deviation, not a token.
4. **Fill gaps minimally and in-character.** Missing error color, hover variant, or focus style:
   derive a SMALL addition consistent with the established palette/geometry (same hue family,
   same radius language). Mark additions `(proposed)` in prose so humans can veto them.

   **Only in groups you own.** When a design system is canonical (Step 1), the groups it
   produces — usually `colors` and `rounded` — are a mirror, and any token you add to them is
   **drift by definition**: `genx design check` reports it as "in DESIGN.md, gone from design
   system", and the next `sync --pull` deletes it. A proposed token for a mirrored group belongs
   in prose and in the deviations log, with the change to make in the design system itself
   ("add `--radius-full` to `@theme`, then pull"). Groups the extractor does not produce —
   typically `typography`, `spacing`, `components` when the project uses framework defaults —
   are yours to author and survive every pull.

5. **Log every losing value** — this is the alignment work-list:

```md
<!-- .agents/design/DESIGN_DEVIATIONS.md -->
| Value found | Winning token | Kind | Locations |
| ----------- | ------------- | ---- | --------- |
| #1B1D20     | colors.primary (#1A1C1E) | color | src/routes/settings/page.tsx:88 |
```

## Step 4 — Write DESIGN.md

Write to the project root (or `.stitch/DESIGN.md` if the project already uses that convention).

- Frontmatter: consolidated tokens only. Components reference tokens (`"{colors.primary}"`),
  never repeat literals. Variants as sibling entries (`button-primary-hover`).
- **Omit a component property whose real value is an alpha tint or blend** (`bg-destructive/10`,
  `color-mix(...)`). The spec has no opacity concept, so recording the base token claims a solid
  fill the product does not have — and pairing it with its own foreground produces a phantom
  1:1 `contrast-ratio` failure. Describe the tint in prose instead; it is a property of the
  implementation, not a token.
- Body: each canonical section in order. Prose explains _intent and usage_, not just values —
  "Primary (#1A1C1E): headlines and the single most important action per screen".
- `## Do's and Don'ts`: encode the deviations just fixed as guardrails ("Don't introduce
  one-off grays; use `colors.neutral`"), plus accessibility floors (WCAG AA 4.5:1).
- `## Source of Truth` custom section from Step 1.

## Step 5 — Validate

```
pnpm dlx @finografic/genx design lint
```

(equivalently `npx @google/design.md lint DESIGN.md` — genx wraps the same official linter;
if a design system is canonical, also run `pnpm dlx @finografic/genx design check` to prove
the mirror is drift-free)

Fix all **errors** (`broken-ref`: unresolvable `{refs}`, unknown component properties;
duplicate section headings). Address **warnings** deliberately: `contrast-ratio` below 4.5:1
(adjust the token, this is a real defect), `missing-primary`, `missing-typography`,
`section-order`. Re-run until errors are zero; explain any warning left.

**`orphaned-tokens` is expected when mirroring a design system** and is not a defect to fix. A
semantic palette (shadcn's ~30 role tokens, a Panda ramp) defines far more colours than the
handful of components you model; one warning per unreferenced token is the normal result. Never
invent component entries to silence it — that manufactures a design system that does not exist.
Say so in the report and move on.

## Step 6 — Report

Summarize for the user: token counts per section, number of conflicts consolidated (with the
3 most interesting calls made and why), gaps filled `(proposed)`, lint result, and the path to
`.agents/design/DESIGN_DEVIATIONS.md`. Suggest running `apply-design-md` to bring misaligned
routes in line.
