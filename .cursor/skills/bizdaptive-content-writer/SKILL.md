---
name: bizdaptive-content-writer
description: >-
  Write or rewrite Bizdaptive marketing blogs and use cases per POC content
  guidelines. Use when creating blog posts, use case stories, guides, or any
  customer-facing copy for bizapt-website that must be governance-native,
  decision-first, and POC-honest.
---

# Bizdaptive content writer

Before writing blog or use-case copy, read `docs/MASTER_CONTENT_GUIDELINES_POC.md`.

## Non-negotiables

- Lead with **Monday morning** business pain — not features
- **POC-honest**: live vs on-arc vs later; never imply production deploy or truth oracle
- **Decision-first**: who decided, why, what-for, evidence
- Vocabulary: Company Graph, Structure, Dynamics, receipt, Stated/Inferred/Unknown, belief + evidence
- Soft CTA only — no “Buy now”, urgency, or buzzwords

## Blog output shape

Match `BlogPost` in `src/content/types.ts`:

1. Problem-led title + subtitle
2. Executive summary (3–5 sentences)
3. Hook (time-stamped scenario)
4. Sections: business problem → root cause → impact → better approach → Bizdaptive perspective
5. Actionable takeaways (bullets)
6. Soft CTA

Target 1,500–2,500 words. Simple business English. Max ~4 lines per paragraph.

## Use case output shape

Match `UseCase` in `src/content/types.ts`. Store the full archive in content files; **marketing pages** (`UseCaseStory`) only render a short path:

1. Hero + question + answer  
2. Current situation  
3. Challenges (≤4)  
4. Solutions (≤3, prefer live over on-arc)  
5. Workflow  
6. KPIs (≤3) + outcomes (≤3 groups, 2 bullets each)  
7. One-line POC honesty note  

Do not put existing process, future state, surfaces, industries, or full roadmap on the public detail page unless asked for a deep dive / PDF.

## Quality check before finishing

Run the checklist in `docs/MASTER_CONTENT_GUIDELINES_POC.md` § Content quality checklist.

## Content files

- Types: `src/content/types.ts`
- Use cases: `src/content/useCases.ts`
- Blogs: `src/content/blogPosts.ts`
- Icons/re-exports: `src/content/stories.ts`
