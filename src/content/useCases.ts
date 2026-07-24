import type { UseCase } from "./types";

/** POC-aligned use cases — see docs/MASTER_CONTENT_GUIDELINES_POC.md */
export const useCases: UseCase[] = [
  {
    slug: "finance",
    label: "Finance",
    eyebrow: "Use case",
    title: "When the budget moves, who approved it — and why?",
    lead: "A regional services company kept reconciling the same budget number in three places. Bizdaptive gives Finance a governed record before the next review meeting.",
    question: "Why did we implement the wrong budget amount?",
    answer:
      "The approval lived in Slack. The spreadsheet moved. Nobody could reconstruct who signed off or why. With Bizdaptive, the next budget decision opens with the last receipt: owner, rationale, and what changed since.",
    overview:
      "Northwind-style professional services, ~120 people, founder plus Finance lead. Revenue in projects and retainers; margin pressure makes every budget line contentious. Decision makers: founder, Finance lead, Ops head.",
    currentSituation:
      "Budgets live in a master sheet. Approvals happen on calls or in chat. Ops tracks delivery cost in another file. When a line item shifts mid-quarter, Finance is the last to know — and the first asked to explain it in the monthly review.",
    challenges: [
      "No shared map of which goals tie to which budget lines",
      "Corrections overwrite last month’s figure without a trail",
      "Verbal approvals leave no durable who / why / what-for record",
      "Weekly review time spent reconstructing instead of deciding",
    ],
    existingProcess: [
      "Finance drafts budget in the master sheet",
      "Founder and Ops leads review on a call",
      "Changes land in Slack or email; someone updates the sheet later",
      "Month-end: Finance explains variances from memory and screenshots",
    ],
    processProblems: [
      "2–4 hours per month reconciling three versions of the same number",
      "Delayed decisions when nobody trusts the latest figure",
      "Audit risk when rationale cannot be retrieved",
      "New Finance hire starts from a sheet, not the story behind it",
    ],
    futureState: [
      "One Company Graph Finance and Ops can both open",
      "Budget commitments recorded as first-decision receipts",
      "Corrections version history — last quarter’s belief stays visible",
      "Stated vs inferred labels on numbers still being validated",
    ],
    solutions: [
      {
        capability: "WHO-first interview → Company Graph",
        decision: "Which budget line owns this variance?",
        value: "Hours back in monthly review prep",
      },
      {
        capability: "Add-context correction",
        decision: "Update Q2 target without erasing Q1",
        value: "Trust in the number the team acts on",
      },
      {
        capability: "First-decision receipt",
        decision: "Record who approved the revised amount and why",
        value: "Alignment without another reconciliation meeting",
      },
      {
        capability: "Ask-why trail UI",
        decision: "Trace a figure back to evidence",
        value: "Faster answers when the board asks",
        onArc: true,
      },
    ],
    workflow: [
      "Describe or correct budget context in conversation",
      "Compile into Company Graph — Finance ↔ Ops ↔ goals linked",
      "See Structure (owners, lines) and Dynamics (what moved)",
      "Record commitment as a governed receipt",
      "Correct again when reality shifts — history preserved",
    ],
    surfaces: [
      "Company Graph (Structure & Dynamics)",
      "Node detail — ownership and linked metrics",
      "First-decision receipt",
      "Add-context workspace correction",
    ],
    decisionExamples: [
      "Revised contractor cap — who approved, and for which delivery goal?",
      "Margin target restated — same metric or a new definition?",
      "Founder commits to a Q3 hiring freeze exception — what was decided?",
    ],
    kpis: [
      {
        metric: "Time to align on budget owner",
        before: "1–2 meetings / change",
        after: "Minutes via graph + receipt",
        note: "Assumes one Finance lead, weekly review cadence",
      },
      {
        metric: "Monthly reconciliation hours",
        before: "3–4 hours",
        after: "Under 1 hour",
      },
      {
        metric: "Retrievable approval record",
        before: "Often missing",
        after: "Stamped at decision time",
      },
    ],
    outcomes: [
      {
        category: "Operational",
        items: ["Fewer duplicate review meetings", "Clear handoff when Finance rotates"],
      },
      {
        category: "Financial",
        items: ["Less leakage from late budget corrections", "Fewer surprise variances in board prep"],
      },
      {
        category: "Strategic",
        items: ["Institutional memory survives people leaving", "Board questions answered from record, not memory"],
      },
    ],
    industries: ["Professional services", "Distribution", "Light manufacturing", "Founder-led operators"],
    nextSteps: [
      { phase: "POC today", items: ["Conversational build", "Company Graph", "Receipt", "Add-context corrections"] },
      { phase: "Next on arc", items: ["File/comms ingestion", "Team propose→approve", "Polished ask-why trails"] },
      { phase: "Later", items: ["ERP connectors", "Continuous advice", "Simulate scenarios"] },
    ],
    onArc: ["Polished natural-language ask-why across all nodes", "Multi-user approve→live for all"],
  },
  {
    slug: "sales",
    label: "Sales",
    eyebrow: "Use case",
    title: "Who approved the exception — before procurement stalls?",
    lead: "Verbal discount approvals disappear between the call and the contract. Bizdaptive stamps ownership and rationale on the Company Graph before the next deal review.",
    question: "Who approved the Northwind discount, and why?",
    answer:
      "It was agreed on a call and never written down. Procurement stalled; the team argued product instead of process. Bizdaptive keeps the exception on a receipt so reps and leaders act from the same trail.",
    overview:
      "B2B software reseller, ~80 people, regional sales pods. Exceptions are common; deal velocity depends on fast, clear approvals. Decision makers: VP Sales, regional leads, founder on large deals.",
    currentSituation:
      "CRM holds stage and amount. Exceptions are agreed verbally or in chat. Legal and Finance learn late. When a deal slips, nobody can reconstruct who authorized the discount or what trade-off was accepted.",
    challenges: [
      "Exceptions without a durable who / why / what-for record",
      "CRM notes don’t connect to the goal the discount served",
      "New rep inherits a deal with no decision trail",
      "Review meetings re-litigate closed calls",
    ],
    existingProcess: [
      "Rep requests exception on internal chat",
      "Manager approves on a call",
      "Rep updates CRM amount; rationale stays in someone’s head",
      "Procurement or Finance flags mismatch weeks later",
    ],
    processProblems: [
      "Deal cycle extends when approval cannot be verified",
      "Revenue leakage when exceptions stack without visibility",
      "Manager time spent repeating the same approval story",
      "Customer trust erodes when internal confusion surfaces",
    ],
    futureState: [
      "Exception recorded as receipt at moment of approval",
      "Deal, owner, and related commitments on one graph",
      "Next hire opens the same picture — not a blank CRM note",
      "Evidence linked where the product supports it",
    ],
    solutions: [
      {
        capability: "First-decision receipt",
        decision: "Was this discount approved, by whom, for what?",
        value: "Procurement moves without another call",
      },
      {
        capability: "Company Graph — Dynamics",
        decision: "What else did we promise this account?",
        value: "Fewer conflicting commitments",
      },
      {
        capability: "Stated / Inferred / Unknown labels",
        decision: "Is this approval confirmed or assumed?",
        value: "Less false confidence in pipeline reviews",
      },
      {
        capability: "Team propose→approve",
        decision: "Manager approves; team sees live change",
        value: "Single team truth on exceptions",
        onArc: true,
      },
    ],
    workflow: [
      "Describe deal context or correct an exception",
      "See deal, owner, and linked goals on the graph",
      "Record approval as governed receipt",
      "Attach outcome notes when the deal closes",
      "Correct if terms shift — history kept",
    ],
    surfaces: ["Company Graph", "First-decision receipt", "Node detail for deal owner", "Add-context"],
    decisionExamples: [
      "12% discount on Northwind — VP Sales, Feb 27 rationale",
      "Payment terms exception — who owns the risk?",
      "Pilot extended — was this a new decision or the same one?",
    ],
    kpis: [
      {
        metric: "Time to verify an exception",
        before: "Days (chat archaeology)",
        after: "Minutes (receipt on graph)",
      },
      {
        metric: "Duplicate approval meetings",
        before: "2–3 per contested deal",
        after: "0–1",
      },
    ],
    outcomes: [
      { category: "Operational", items: ["Faster procurement handoff", "Cleaner QBR narrative"] },
      { category: "Financial", items: ["Fewer unauthorized discounts surfacing late"] },
      { category: "Strategic", items: ["Pipeline reviews focus on forward bets, not archaeology"] },
    ],
    industries: ["B2B services", "Distribution", "SaaS resale", "Regional sales organizations"],
    nextSteps: [
      { phase: "POC today", items: ["Receipt for live exception", "Deal context on graph"] },
      { phase: "Next on arc", items: ["CRM connectors", "Team approvals"] },
      { phase: "Later", items: ["Automated exception policies"] },
    ],
    onArc: ["CRM sync", "Multi-user approve→live"],
  },
  {
    slug: "operations",
    label: "Operations",
    eyebrow: "Use case",
    title: "When on-time slips, who owns the fix?",
    lead: "Priority fights restart every sprint because last week’s decision left no record. Bizdaptive connects the corrective action to a receipt on the living Company Graph.",
    question: "Why did we ship without the burst window?",
    answer:
      "It was descoped after a risk surfaced. The decision moved in a PR comment and a Slack ping. Bizdaptive turns that into a receipt on the graph so the next sprint doesn’t restart the argument.",
    overview:
      "Regional logistics operator, ~200 people, hub-and-spoke model. On-time delivery is the north-star metric; every slip triggers cross-functional debate. Decision makers: COO, regional ops lead, product/engineering lead.",
    currentSituation:
      "KPIs in sheets and a BI tool. Priorities shift in standups and chat. When on-time drops twelve points, Sales blames routing, Ops blames staffing, Finance points at fuel — and Thursday’s review is spent reconstructing.",
    challenges: [
      "No shared map of who owns on-time end-to-end",
      "Scope cuts don’t update the team’s picture",
      "Decisions in PR comments don’t reach Sales or Finance",
      "Corrections overwrite last week’s target",
    ],
    existingProcess: [
      "Weekly ops review surfaces the metric",
      "Teams debate cause in the meeting",
      "A owner is named verbally; actions live in tickets",
      "Next week: same debate if the number moved again",
    ],
    processProblems: [
      "Decision latency — days from signal to recorded commitment",
      "Rework in weekly review (3+ hours for leadership)",
      "Customer impact when fixes start late",
      "Trust erosion — ‘we already decided this’ with no proof",
    ],
    futureState: [
      "On-time owner visible on Company Graph before the meeting",
      "Scope changes recorded with who / why / what-for",
      "Last month’s 88% kept when today’s read is 91%",
      "Evidence linked where stated vs inferred",
    ],
    solutions: [
      {
        capability: "Company Graph — Structure ↔ Dynamics",
        decision: "Who owns on-time for this region?",
        value: "Skip the first 30 minutes of review",
      },
      {
        capability: "Add-context correction",
        decision: "Update KPI without erasing history",
        value: "Trust in week-over-week trends",
      },
      {
        capability: "First-decision receipt",
        decision: "Record burst-window descope with rationale",
        value: "Next sprint starts from alignment",
      },
    ],
    workflow: [
      "Correct or describe ops context",
      "Compile people, goals, and metrics on the graph",
      "See what moved (Dynamics) vs what exists (Structure)",
      "Decide with receipt at moment of clarity",
      "Correct when the plan shifts again",
    ],
    surfaces: ["Company Graph", "Add-context", "First-decision receipt", "Node detail for metric owner"],
    decisionExamples: [
      "Burst window descoped Apr 8 — Eng lead, risk note attached",
      "On-time target restated — same definition or new?",
      "Staffing exception for peak week — who committed?",
    ],
    kpis: [
      {
        metric: "Time from signal to recorded decision",
        before: "3–7 days",
        after: "Same day",
        note: "Assumes one ops lead and weekly cadence",
      },
      {
        metric: "Weekly review time on reconciliation",
        before: "2–3 hours",
        after: "Under 1 hour",
      },
    ],
    outcomes: [
      { category: "Operational", items: ["Faster corrective action", "Fewer duplicate escalations"] },
      { category: "Financial", items: ["Less leakage from late routing fixes"] },
      { category: "Strategic", items: ["Ops memory survives reorgs"] },
    ],
    industries: ["Logistics", "Distribution", "Field services", "CPG fulfillment"],
    nextSteps: [
      { phase: "POC today", items: ["Graph + receipt + corrections"] },
      { phase: "Next on arc", items: ["Ticket/BI connectors", "Ask-why trails"] },
      { phase: "Later", items: ["Continuous monitoring", "Simulate staffing scenarios"] },
    ],
    onArc: ["Live Slack ingestion", "Polished ask-why UI"],
  },
  {
    slug: "marketing",
    label: "Marketing",
    eyebrow: "Use case",
    title: "Campaign spend changed — can anyone explain the original bet?",
    lead: "Budgets get approved on calls; results land in ads platforms. Bizdaptive links the decision receipt to the outcome so the next campaign starts from insight, not amnesia.",
    question: "Why did Q1 spend miss the target we planned for?",
    answer:
      "The plan lived in a deck; the approval lived in a call; the results lived in ads. Bizdaptive links the receipt to what happened so leadership sees the bet and the outcome in one governed picture.",
    overview:
      "Growing CPG brand, ~60 people, DTC plus retail. Marketing spend is lumpy; founder still approves major bets. Decision makers: founder, marketing lead, finance partner.",
    currentSituation:
      "Campaign plans in slides. Spend in ad platforms. Approvals on calls. Three months later, Q1 ‘miss’ triggers a post-mortem where nobody agrees what was originally approved.",
    challenges: [
      "Decision and outcome live in different tools",
      "Channel owners use different definitions of ‘on plan’",
      "Corrections mid-quarter don’t update the team narrative",
      "No receipt for what the spend was supposed to achieve",
    ],
    existingProcess: [
      "Marketing drafts plan in a deck",
      "Founder approves on a call",
      "Spend executes in platforms",
      "Quarter-end: deck updated; original rationale lost",
    ],
    processProblems: [
      "Repeated post-mortems without learning",
      "Finance–Marketing friction on ‘who moved the number’",
      "Slow next-quarter planning from bad memory",
      "New channel hire inherits tactics, not decisions",
    ],
    futureState: [
      "Campaign approval as receipt with stated goal",
      "Channel, owner, and KPIs on Company Graph",
      "Outcome notes attached when results land",
      "Honest labels for guessed vs measured performance",
    ],
    solutions: [
      {
        capability: "First-decision receipt",
        decision: "What was approved, for which goal?",
        value: "Post-mortems start from record",
      },
      {
        capability: "Company Graph links",
        decision: "Which KPI does this channel own?",
        value: "Fewer definition disputes",
      },
      {
        capability: "Add-context + versioning",
        decision: "Mid-quarter shift without erasing original bet",
        value: "Cleaner learning loop",
      },
    ],
    workflow: [
      "Describe campaign and goals",
      "See channel ↔ KPI ↔ owner on graph",
      "Record approval receipt",
      "Attach results when measured",
      "Plan next quarter from governed history",
    ],
    surfaces: ["Company Graph", "First-decision receipt", "Add-context", "Node detail"],
    decisionExamples: [
      "Q1 Meta budget — approved goal vs actual",
      "Influencer pilot — who signed off on the test?",
      "Retail co-op shift — new decision or correction?",
    ],
    kpis: [
      { metric: "Post-mortem prep time", before: "4–6 hours", after: "Under 1 hour" },
      { metric: "Disputes on ‘original plan’", before: "Most quarters", after: "Rare" },
    ],
    outcomes: [
      { category: "Operational", items: ["Faster quarterly planning"] },
      { category: "Financial", items: ["Less wasted spend from repeated mistakes"] },
      { category: "Strategic", items: ["Marketing memory compounds"] },
    ],
    industries: ["CPG", "DTC", "Services with paid acquisition", "Founder-led brands"],
    nextSteps: [
      { phase: "POC today", items: ["Receipt + graph for campaign decisions"] },
      { phase: "Next on arc", items: ["Ads platform notes (manual)", "Team visibility"] },
      { phase: "Later", items: ["Live ad spend connectors"] },
    ],
    onArc: ["Automated ads ingestion"],
  },
  {
    slug: "leadership",
    label: "Leadership",
    eyebrow: "Use case",
    title: "What changed since the last board — without a scavenger hunt?",
    lead: "Material decisions scatter across email and heads. Bizdaptive surfaces receipts on one Company Graph so leadership prep is grounded, not theatrical.",
    question: "What’s changed since the last board?",
    answer:
      "Nine material decisions, a few reversals, two slipped commitments — usually reconstructed from memory. Bizdaptive surfaces them as receipts on one graph so prep is grounded, not theatrical.",
    overview:
      "Founder-led operator, ~150 people, multi-product. Board every six weeks. Material changes span pricing, hiring, partnerships, and delivery commitments. Decision makers: founder, COO, functional leads.",
    currentSituation:
      "Board deck assembled from slides, sheets, and memory. Decisions since last board live in email threads, calls, and individual heads. Prep week is expensive and still misses reversals.",
    challenges: [
      "No single governed picture of material changes",
      "Reversals invisible until someone remembers",
      "Functional leads report different versions of the same fact",
      "New executive starts without institutional decision memory",
    ],
    existingProcess: [
      "Functional leads send updates to founder",
      "Founder and COO assemble deck",
      "Gaps filled by calls the week before board",
      "Board asks ‘why’ — follow-up promises made live",
    ],
    processProblems: [
      "20+ hours leadership prep per cycle",
      "Surprise questions the team cannot answer with evidence",
      "Delayed accountability when ownership was never recorded",
      "Strategic drift when commitments aren’t visible",
    ],
    futureState: [
      "Material decisions as receipts on Company Graph",
      "Structure shows org shape; Dynamics shows what moved",
      "Board prep exports governed summary — not re-invented narrative",
      "Honest scope: POC today is conversational build, not full board pack automation",
    ],
    solutions: [
      {
        capability: "Company Graph — Structure & Dynamics",
        decision: "What materially changed since last board?",
        value: "Prep hours back",
      },
      {
        capability: "First-decision receipts",
        decision: "Pricing review, hiring exception, partner promise — who / why?",
        value: "Board answers from record",
      },
      {
        capability: "Add-context corrections",
        decision: "Reversal recorded without erasing original commitment",
        value: "Trust in leadership narrative",
      },
      {
        capability: "Ask-why trails",
        decision: "Trace any material change to evidence",
        value: "Fewer live homework assignments",
        onArc: true,
      },
    ],
    workflow: [
      "Leaders describe or correct material changes",
      "Graph compiles structure and movement",
      "Receipts stamped at decision time",
      "Board prep reads governed picture",
      "Post-board corrections versioned",
    ],
    surfaces: ["Company Graph", "First-decision receipt", "Add-context", "Workspace home (on arc)"],
    decisionExamples: [
      "Pricing review outcome — owner and rationale",
      "Hiring freeze exception — who approved?",
      "Partner promise on delivery date — still live?",
    ],
    kpis: [
      { metric: "Leadership prep hours per board cycle", before: "20+", after: "8–12" },
      { metric: "Material decisions with retrievable record", before: "Partial", after: "Governed at source" },
    ],
    outcomes: [
      { category: "Operational", items: ["Less scramble before board"] },
      { category: "Financial", items: ["Fewer slipped commitments surfacing late"] },
      { category: "Strategic", items: ["Institutional memory at leadership transitions"] },
    ],
    industries: ["Founder-led operators", "Multi-product services", "Growth-stage private companies"],
    nextSteps: [
      { phase: "POC today", items: ["Shared picture + receipts for material decisions"] },
      { phase: "Next on arc", items: ["Multi-user governance", "Ask-why", "Digest surfaces"] },
      { phase: "Later", items: ["Board pack assist", "Simulate scenarios"] },
    ],
    onArc: ["Automated board pack", "Full team propose→approve"],
  },
];

export function getUseCase(slug: string) {
  return useCases.find((u) => u.slug === slug);
}
