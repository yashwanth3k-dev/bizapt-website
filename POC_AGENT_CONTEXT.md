# AGENT CONTEXT PACK — Bizdaptive POC (full)

**Purpose:** Give another agent complete product + POC context without needing this chat.  
**As of:** ~2026-07 (STATUS + POC docs; Sudarshan pushed through ~2026-07-05 on main).  
**Repos:** `bizdaptive-mvp-v2` (canonical product). Related: `bizdaptive-individual` (Yashwanth individual/demo FE), `bizapt-website` (marketing PoC site).  
**Deploy:** Production HELD (D612 — external security audit before real customer data). Localhost → live DB B.  
**Brain:** Google Gemini (`gemini-2.5-pro` / flash tiers) via multi-provider resilience; override often `BRAIN_PROVIDER_OVERRIDE=google`.

---

## 1. What Bizdaptive is (one paragraph)

Bizdaptive is a governance-native operating system for business operations. It replaces scattered tools (spreadsheets, Slack decisions, Jira, docs) with one shared, auditable picture of the organization — people, teams, products, channels, metrics, goals, processes — where every meaningful change can carry who said it, evidence, confidence, freshness, and time (was / is / will-be). It is not a system of record for raw emails/PDFs; it compiles understanding into a belief-graph and discards/ephemeralizes raw content (D775/D598). The moat is persistent multi-user governed state, not a single chat UI.

**Core spiral (engines):** OBSERVE → INTERPRET → RESOLVE → COMMIT → PLAN → ALIGN → EXECUTE → RECONCILE → LEARN  
(Multiple spirals run concurrently; not a single sequential pipeline.)

**Adaptive Rings (LAG):**

- **L** = people / authority / operations  
- **A** = assets / products / channels / metrics  
- **G** = governance / processes / rules  

Entities can sit on a ring SET (multi-ring), with internal vs external locus.

---

## 2. POC vs MVP vs later (don’t confuse)

| Milestone | Meaning |
| --- | --- |
| **POC (current drive)** | Working substrate proof for customers + investors. Real engines, no mock screens. Hard deadline historically 2026-07-20 (D724). Dogfood as org #1. No paying customers. Deploy held. |
| **MVP** | Productization after POC: robust capture/ingestion, robust MCP, digest, dogfood/showcase layer. |
| **V1** | Paying design partners; three capture doors; connectors; MCP/CLI/web; audit gate; raise. |
| **V1.5** | Continuous/alive advice; simulate; multi-provider product independence; full connector library + incremental compile. |
| **V2** | Autonomy within governance; engines-as-NPM; cross-org intelligence; embeddings at scale. |

**Intelligence ladder:** capture → connect → explain → advise → simulate.

---

## 3. The one POC promise

> Bizdaptive holds one honest, living, shared, evidence-backed picture of your organization — and it gets truer the more you use it.

**Critical reframes:**

- **Belief graph, not truth oracle (D769).** Never asserts “true.” Always: belief + confidence + evidence + lineage.
- **One canonical graph, two views (D774):** Structure (what exists) + Dynamics (what’s moving). Intelligence/belief layer is badges + trails, not a third graph.
- **Organizational compiler (D777):** messy talk/docs → compiled derived knowledge. P1 assimilation engine = first compiler.
- **Not SoR (D775):** persist derived knowledge + provenance; don’t hoard raw ops content.

---

## 4. End-to-end use case (canonical story)

### Persona

Maya Chen, founder of a mid-size logistics / CPG-style org (demo often “Northwind” / coffee / India CPG in tests). Joined by ops lead Priya, dispatcher Sam, etc.

### Act I — Learn the org (P1 — substrate / compiler)

**What Maya does**

- Signs up → WHO-first (role + authority) — founder interview ≠ IC interview.
- Conversational interview: company, people, products, channels, metrics, goals, meetings.
- (Target) drops a deck / notes / chat paste → same engine.
- Later: add-context anytime — “churn is 4% now”, “Priya joined as Head of Ops.”

**What the system does**

- Interview brain extracts signals (not free hallucination).
- At commit: 6 specialist layers in order:  
  `people_dept → assets → channels → metrics → goals → processes`
- Each layer: chunk → analyze → LAG-place → locate/merge via reconcile → earn edges → time-tag → evidence stamp.
- Reconcile verdicts: SAME · REFINES · TEMPORAL_SUPERSEDE · RETROACTIVE_BACKFILL · CONTESTED · TARGET · RETRACT · NEW.
- Mints first-decision receipt (who / why / what-for).
- Lands in Company Graph (Structure / Dynamics, epistemic badges Stated/Inferred/Unknown).

**End of Act I:** One correct-enough, connected, time-tagged belief-mirror of the org.

### Act II — Interrogate (P2 — designed / partial spine exists)

Ask: “Why is on-time slipping?” “Why did we cap driver hours?” “Who owns fleet utilization?”  
System walks graph + evidence trails (Trail A why-it’s-here / Trail B why-it’s-like-this). Answers as belief + sources + confidence, never “true.”

### Act III — Work from the graph (P3)

Graph becomes the OS surface: click person → assign/invite; fix wrong edge; flip Structure ↔ Dynamics. Actions = real governed writes.

### Act IV — Team shared truth (P4 → P4.5)

Invite Priya → short role interview → ghost reconcile to existing “Priya” node (no duplicate). Her changes = proposals → Maya approves → live for all + receipt.  
P4.5: two people corroborate → confidence rises; conflict → contested, both shown, human resolves. Calibration seed per person.

### Act V — Persist + altitude/time (P5–P6)

Nothing lost across devices; cross-org leak test must pass. Ask at any altitude (north-star → KPI → task) and any time (“last quarter”).

### Act VI — Dogfood + demo (P7 = POC READY)

Bizdaptive runs Bizdaptive as org #1; multi-persona honesty; demoable for investors/customers.

---

## 5. What POC has TODAY (honest split)

### LIVE / proven (can demo for real)

- WHO-first onboarding → Gemini interview → loader → receipt → Company Graph
- P1 assimilation spine with specialist layers (people/dept, assets, channels, metrics, goals, processes) behind `P1_TRUTH_CORE`
- Add-context wired through same engine: locate + correct + α2 supersede (version history, not overwrite)
- Waves A–C closed on substrate path (STATUS): locate/correct; all-kinds supersede; temporal (backfill, targets ≠ actuals, rough dates, belief stamps D769)
- First-decision receipt minting (brain failover Bug #309 fixed)
- Structure + Dynamics graph; epistemic badges; dual evidence trails APIs
- Multi-LLM provider chain (Anthropic → Google → OpenAI) with resilience
- Engine bodies + brains exist (7 engines + ring brains + drivetrain)
- LAG rings + authority machinery in backend
- Multi-user invite mechanism exists; RLS isolation mechanism proven on many orgs
- KB-B0 (curatable compiler knowledge seed + guardrail that KB must not invent org facts) landed on main (~Jul 4)
- Wave D (refine + retract + rename) + D787 FE add-context / rate-limit hardening + E2E scenario suite on main (~Jul 5)

### STILL GAPS / not POC-complete

- File/comms door fully shipping as user-facing “drop any PDF” (designed; corpus prepared; not the closed demo path for everyone)
- P1 TRUTH GATE full close (Ironveil/Stackwise + 18-agent + founder W-5) as formal stamp
- P2 clean “ask the org” product surface
- P3 fully actionable graph (assign/invite from node, etc.)
- P4 full propose→approve→live-for-all dogfood on a real team (often thin in practice)
- P4.5 belief convergence as demoable product path
- P5 committed leak-test artifact; P6 Dynamics that truly move; TimeBar
- P7 dogfood + multi-persona honesty sweep
- MCP not the POC headline; production deploy HELD
- Parallel FE repos (`bizdaptive-individual`, old `yashwanth/*` branches) may be ahead/behind — don’t assume one UI = main POC substrate

**Rule for agents:** Prefer `planning/STATUS.md` + `POC-EXPERIENCE.md` + `POC-CAPABILITY-MAP.md` over marketing copy when claiming “done.”

---

## 6. Technical architecture snapshot (for coding agents)

```text
User prose / (future) file
  → OBSERVE interview / extractors  (observe-onboarding-brain.ts)
  → signals + cumulative extraction
  → accept / materialize seam
  → P1 assimilation spine (src/lib/api/assimilation/)
       layers: people_dept, assets, channels, metrics, goals, processes
       core: reconcile, working-set, edges, registry, spine
  → α2 version tables + governance_edge_versions + ChangeSet provenance
  → ring-graph API → Company Graph FE
```

**WorkingSet:** bounded retrieval (summary / neighborhood / text). Today text match ≈ name overlap; embeddings/RAG slot = `retrieveByText` (V1, D748).  
**“Compiler”** = this assimilation path, not HuggingFace.  
**“LAG vector”** = `ring_membership: ('L'|'A'|'G')[]` + locus — not an embedding vector.

### Key paths

- Design: `planning/build-plans/P1-ASSIMILATION-ENGINE-DESIGN.md`
- Compiler framing: `planning/build-plans/INGESTION-AND-COMPILER-ARCHITECTURE.md`
- Experience: `planning/POC-EXPERIENCE.md`
- Honest capability: `planning/POC-CAPABILITY-MAP.md`
- Live status: `planning/STATUS.md`
- Brain: `src/lib/ai/providers/*`, `src/lib/ai/engines/*`
- Assimilation: `src/lib/api/assimilation/*`

---

## 7. Blog / site content (ready to paste)

### Blog A — Title: Your company isn’t a dashboard. It’s a belief that gets sharper.

**Lead**  
Most tools show numbers. Bizdaptive builds a living picture of how your organization actually works — who reports to whom, what you sell, what you measure, what you promised — and it refuses to pretend that picture is “truth” until evidence says so.

**The problem**  
Decisions live in Slack. Structure lives in someone’s head. KPIs live in a sheet. When someone leaves, the org forgets. Dashboards don’t remember why.

**The POC idea**  
Talk to Bizdaptive the way you’d brief a sharp ops hire. It interviews you (role-first), compiles what you said into a company graph, and hands you a first governed decision receipt. Correct anything later in plain language — “churn is 4% now” — and it versions history instead of overwriting it.

**What makes it different**

- **Compiler, not chatbot:** six specialist layers place people, assets, channels, metrics, goals, processes — with cycle checks and honest “I don’t know” badges.
- **Belief + evidence:** every claim can carry source, confidence, freshness, time (was / is / will-be).
- **One graph, two lenses:** Structure and Dynamics — same underlying org.
- **Not your file dump:** we keep understanding + provenance; we don’t become your email archive.

**Honest PoC status**  
Onboarding → graph → receipt → add-context corrections are real on the substrate. File drop, full team propose→approve dogfood, and “ask why” as a polished product surface are on the PoC arc (P2–P7), not all finished. Production stays held for security audit. We’re dogfooding before customers.

**Close**  
The point isn’t another AI that answers. It’s an OS that remembers what the company believes, who said it, and what changed — so the next decision isn’t amnesia.

### Blog B — Title: From a conversation to a company graph

**Use-case narrative (Maya)**  
Maya onboards. She says she’s founder, names Priya on ops, Sam in the field, house blend + cold brew, Amazon + site, on-time target 95% now at 88%, weekly ops huddle. Bizdaptive builds people and departments without reporting loops, products with real classes, KPIs linked to goals, and a receipt for the first governed commitment. Later she types: “On-time is 91% as of this month.” The old 88% stays in history; 91% becomes current. When Priya joins, the system should recognize the Priya already described — not invent a twin — and route her edits through approval once multi-user gates are on.

**CTA**  
See Structure and Dynamics. Ask what a node is based on. Correct a fact. That’s the PoC.

### Short website bullets (honest)

- WHO-first conversation onboarding → assimilation → Company Graph
- First-decision receipt
- Structure & Dynamics, epistemic badges, dual trails
- Belief + evidence substrate (not a truth oracle)
- Add-context with supersede / version history
- Explicit: file/comms, full multi-user propose→approve, polished Q&A still on the arc
- Deploy held for audit; dogfood first

---

## 8. Instructions for agents in other repositories

- Do **not** claim “full RAG,” “live Slack sync,” “production customers,” or “truth oracle.”
- Do claim conversational onboarding, layered compile into LAG graph, receipt, graph views, add-context corrections with history, belief/evidence framing.
- If building marketing/UI: align copy to §7; link claims to §5 live vs gap.
- If building product features: treat P1 compiler + WorkingSet + ring-graph as source of truth; FE binds to API contracts, never raw DB.
- If syncing with main: pull `bizdaptive-mvp-v2` — Sudarshan lands backend on main; Yashwanth uses `yashwanth/*` branches for FE.
- Canonical docs to re-read if this pack ages: `planning/STATUS.md`, `POC-EXPERIENCE.md`, `POC-CAPABILITY-MAP.md`.

---

## 9. One-line for any agent system prompt

Bizdaptive POC = governance OS that compiles conversation (and later files) into one belief-graph of the org (LAG rings, time-tagged, evidence-stamped), with onboarding + add-context + Company Graph live-ish on Gemini; production deploy held; not a raw SoR; not finished on file-door / full multi-user moat / ask-why product; future = connectors, RAG in WorkingSet, simulate, autonomy.

---

*That’s the full pack. Paste into a system prompt in any repo, or keep this file as the canonical agent handoff for `bizapt-website` / related workstreams.*
