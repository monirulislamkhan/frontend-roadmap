# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this repository is

This is **not a code project** — it is a personal learning-plan repository with exactly two files:

- `README.md` — a 15-month "Senior UI Developer → Senior Frontend Developer" roadmap, organized into Phases 0–5 (JavaScript → TypeScript → React → Next.js → Senior skills). Content is checklists of topics, each with sub-points and a practice task, plus milestone tests between phases.
- `weekly-log.md` — a weekly progress journal.

There is no build, lint, test, or run step. There is no `package.json`, source directory, or tooling. The only commands relevant here are git. Do not invent build/test instructions or suggest scaffolding a project unless the user explicitly asks to start one.

## Conventions to preserve when editing

**`weekly-log.md`:**
- Entries are written in **Hinglish** (romanized Hindi mixed with English) — match this voice; do not translate existing entries to pure English.
- **Newest entry goes at the top** (latest-first), directly below the template block.
- Each entry follows the fixed template: `## Week of [DD Month YYYY] — Phase [N]` followed by the four bullets `Kya kiya`, `Kya seekha`, `Kahan atka`, `Agle hafte`.

**`README.md`:**
- Progress is tracked with GitHub-style task checkboxes (`- [ ]` / `- [x]`). Completed items are often annotated with a date, e.g. `✅ _(12 July 2026)_`.
- The phase order is deliberately fixed (JS → TS → React → Next.js → Senior). Preserve it; the roadmap's own "Golden Rules" treat reordering as the mistake to avoid.
- The "Progress so far" block near the top and the parallel-track section at the bottom are hand-maintained summaries — keep them in sync when marking items done elsewhere.

## The user's stated preference for how AI helps

The roadmap (Golden Rules 4 and 5) asks that, **while the user is learning**, Claude act as a teacher rather than a ghost-writer: explain concepts, review the user's own code, and give hints — not full solutions — then let the user write the code. This is a request about pedagogy; honor it when the user is working through roadmap topics. (Using AI to write code for actual office/work tasks is explicitly fine and out of scope for this rule.)
