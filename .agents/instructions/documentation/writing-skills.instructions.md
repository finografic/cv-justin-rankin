---
applyTo: '**/SKILL.md'
description: How to write a skill — frontmatter, invocation choice, structure, completion criteria, and wording. Read before creating or editing any SKILL.md.
---

# Writing Skills

A skill is a repeatable procedure an agent follows. It succeeds when the agent takes the same
**process** every run — not when it produces identical output.

Placement first: if the content is a rule rather than a procedure, it belongs in an instruction
file. See `.agents/instructions/documentation/agent-context-files.instructions.md`.

## Frontmatter

```yaml
---
name: skill-name
description: What it does, and the conditions that should trigger it.
disable-model-invocation: true # only for user-invoked skills
---
```

- `name` must match the containing directory exactly. This is enforced by the package's asset
  checks.
- `description` is the skill's context pointer — see Invocation below for how to write it.

## Invocation — the first decision

Two options, trading two different budgets:

| Kind              | Frontmatter                      | Who can fire it                   | Cost                                                      |
| ----------------- | -------------------------------- | --------------------------------- | --------------------------------------------------------- |
| **Model-invoked** | omit `disable-model-invocation`  | the agent, other skills, the user | permanent context load — the description is always loaded |
| **User-invoked**  | `disable-model-invocation: true` | only a human typing its name      | zero context load — but a human must remember it exists   |

Choose model-invoked **only** when the agent must reach the skill on its own, or another skill must
invoke it. If it only ever fires by hand, make it user-invoked and pay nothing.

- Model-invoked descriptions are written for the agent: front-load the triggering word and list the
  distinct cases that should fire it. Synonyms for one case are one case written twice.
- User-invoked descriptions are written for a human: one plain line, no trigger lists.
- Two user-invoked skills cannot share reference through a third skill — neither can fire it. Put
  shared reference in a plain file and point both at it.

## Structure

Order content by how immediately the agent needs it:

1. **Steps** — the ordered actions, in the main file.
2. **In-file reference** — rules and definitions consulted while working. A flat list of peer rules
   is fine, not a smell.
3. **Disclosed reference** — a sibling file reached by a pointer, loaded only when that pointer
   fires.

Inline what every path through the skill needs; push behind a pointer what only some paths reach.
Keep a concept's definition, rules, and caveats together under one heading rather than scattered.

The failure mode is a skill that is simply too long even when every line is live: attention thins
across the excess. Split by sequence when later steps tempt the agent to rush the current one.

## Completion criteria

Every step ends on a condition that tells the agent it is done. Make it **checkable** ("the command
runs and its output is shown") rather than vague ("understanding reached"), and make it **demanding**
where thoroughness matters — "every changed route accounted for" forces more work than "list the
changes". A vague bound invites the agent to stop early.

## Wording

- **Prompt the positive.** State the behaviour you want. A prohibition drags the forbidden
  behaviour into context and makes it more available, not less. Use a ban only as a hard guardrail
  you cannot phrase positively, and pair it with the positive target.
- **Reuse a strong word rather than restating a concept.** A compact term the model already knows
  (`tight` loop, `red` test) anchors behaviour in one token; a phrase repeated three different ways
  does not. Invented vocabulary must be defined and earns its keep only if genuinely reused.
- **Cut instructions the agent already follows by default.** They cost tokens and change nothing.
  Settle disagreements about what is default by running the skill, not by debate.
- **Do not restate the environment.** `package.json` scripts, config files, and `--help` output are
  their own source of truth and go stale when copied. Capture what the agent cannot look up: the
  unwritten convention, the reason behind a choice, the gotcha.
- **One meaning, one place.** The same rule in two files is a maintenance cost and inflates its
  apparent importance.

## Pointers

Every reference to another file states when and why to read it — see
`.agents/instructions/documentation/agent-facing-markdown.instructions.md`. A must-read target
behind a vague pointer is a reliability bug: sharpen the wording before moving the content.

## Before shipping

- The skill has a clear trigger, an owner, and at least one real task it has been run against.
- It does not duplicate an existing skill, a genx feature, or an instruction file.
- It carries no assumptions about issue trackers, directory layouts, or setup flows that this
  ecosystem does not have.
- Adapted material credits its source (see Attribution).

## Attribution

When a skill adapts external material, credit it in the skill body. Concepts in this file —
context pointers, the two loads, the information hierarchy, invocation trade-offs, completion
criteria, leading words, and the negation and no-op failure modes — are adapted from
[Matt Pocock's skills](https://github.com/mattpocock/skills) (`writing-for-agents`), MIT licensed,
Copyright (c) 2026 Matt Pocock.
