export type UseCase = {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  lead: string;
  question: string;
  answer: string;
  evidence: string[];
  dayOne: string[];
};

/** Sentra-style vertical stories, grounded in Bizdaptive POC (map + receipts + shared context). */
export const useCases: UseCase[] = [
  {
    slug: "finance",
    label: "Finance",
    eyebrow: "Use case",
    title: "Budget decisions that still make sense next quarter.",
    lead: "When amounts change midstream, Bizdaptive keeps who approved, why, and what happened — on the living company map.",
    question: "Why did we implement the wrong budget amount?",
    answer:
      "The approval lived in Slack. The spreadsheet moved. Nobody could reconstruct who signed off or why. With Bizdaptive, the next budget decision opens with the last receipt: owner, rationale, and outcome.",
    evidence: [
      "Decision receipt — budget v3 approved by Finance lead on Mar 12",
      "Living map — Finance ↔ Ops linked to the same amount",
      "Ask why — trail shows Slack thread was evidence, not the system of record",
    ],
    dayOne: [
      "First decision receipt for a live budget call",
      "Honest labels on what’s stated vs still unknown",
      "Shared picture Finance and Ops can both open",
    ],
  },
  {
    slug: "sales",
    label: "Sales",
    eyebrow: "Use case",
    title: "Discounts and exceptions with ownership attached.",
    lead: "Verbal approvals disappear. Bizdaptive stamps who approved, why, and what the deal was for — before the next call.",
    question: "Who approved the Northwind discount, and why?",
    answer:
      "It was agreed on a call and never written down. Procurement stalled; the team argued product instead of process. Bizdaptive keeps the exception on a receipt so reps and leaders act from the same trail.",
    evidence: [
      "Decision receipt — 12% discount, VP Sales, Feb 27 rationale",
      "Living map — deal stage, owner, and related commitments",
      "Ask why — evidence points to the call note and follow-up owed",
    ],
    dayOne: [
      "Receipt for a live discount or exception",
      "Deal context on the company map",
      "Next hire lands in the same picture, not a blank CRM note",
    ],
  },
  {
    slug: "operations",
    label: "Operations",
    eyebrow: "Use case",
    title: "Priority changes without re-litigating last week.",
    lead: "Features get cut mid-sprint. Bizdaptive records why and who decided so execution continues without fog.",
    question: "Why did we ship without the burst window?",
    answer:
      "It was descoped after a risk surfaced. The decision moved in a PR comment and a Slack ping. Bizdaptive turns that into a receipt on the living map so the next sprint doesn’t restart the argument.",
    evidence: [
      "Decision receipt — burst window descoped Apr 8, owner Eng lead",
      "Living map — project goals linked to the change",
      "Ask why — points to the risk note and follow-up TODO",
    ],
    dayOne: [
      "Receipt for a priority or scope change",
      "Goals and people connected on the map",
      "Team invited into the same shared picture",
    ],
  },
  {
    slug: "marketing",
    label: "Marketing",
    eyebrow: "Use case",
    title: "Campaign choices connected to results.",
    lead: "Budgets get approved on calls. Months later nobody remembers why. Bizdaptive keeps the choice next to the outcome.",
    question: "Why did Q1 spend miss the target we planned for?",
    answer:
      "The plan lived in a deck; the approval lived in a call; the results lived in ads. Bizdaptive links the decision receipt to what happened so the next campaign starts from insight, not amnesia.",
    evidence: [
      "Decision receipt — campaign budget approved with stated goal",
      "Living map — channel, owner, and related KPIs",
      "Ask why — outcome notes attached when results land",
    ],
    dayOne: [
      "Receipt for a campaign or budget call",
      "Goals and owners on the living map",
      "Honest labels for guessed vs measured",
    ],
  },
  {
    slug: "leadership",
    label: "Leadership",
    eyebrow: "Use case",
    title: "What changed since the last board — without a scavenger hunt.",
    lead: "Material decisions scatter across email and heads. Bizdaptive makes the living picture and receipts the place leadership looks first.",
    question: "What’s changed since the last board?",
    answer:
      "Nine material decisions, a few reversals, two slipped commitments — usually reconstructed from memory. Bizdaptive surfaces them as receipts on one company map so prep is grounded, not theatrical.",
    evidence: [
      "Decision receipts — pricing review, hiring freeze exception, partner promise",
      "Living map — goals and owners across functions",
      "Ask why — each material change traces to evidence",
    ],
    dayOne: [
      "A first shared company picture from a short conversation",
      "Receipts for the decisions that matter this week",
      "A seat ready for the next leader who joins",
    ],
  },
];

export function getUseCase(slug: string) {
  return useCases.find((u) => u.slug === slug);
}

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  minutes: number;
  kind: "Guide" | "Note";
  body: string[];
};

/** Starter guides from product knowledge — no competitor comparisons. */
export const blogPosts: BlogPost[] = [
  {
    slug: "living-company-map",
    title: "What a living company map is",
    excerpt:
      "A living company map connects people, goals, decisions, and responsibilities as the business changes — a shared picture, not a page you wrote once and forgot.",
    minutes: 6,
    kind: "Guide",
    body: [
      "Most growing companies already have documents. What they lack is a shared picture of how the company actually operates today: who owns what, what was decided, and what is still unknown.",
      "A living company map is that picture. People, products, goals, and decisions connect from your perspective. When someone joins, they land in the same map — not a blank slate.",
      "Bizdaptive starts with a short conversation. You describe the company. You see a map. You correct it anytime. The point is not filing more pages. It is keeping judgment grounded in how the business really works.",
      "Day one on Bizdaptive is meant to leave you with a usable map, honest labels (stated vs guessed vs unknown), and a path for the next person to sit in the same picture.",
    ],
  },
  {
    slug: "decision-receipts",
    title: "Decision receipts: who decided, why, and what happened next",
    excerpt:
      "A decision receipt stamps ownership and rationale before the next meeting starts — accountability without archaeology.",
    minutes: 5,
    kind: "Guide",
    body: [
      "Teams don’t fail from a lack of chat. They fail when the next person cannot see who decided, what they knew, and what the outcome was.",
      "A decision receipt is a simple artifact: who decided, why, what it was for, and later what happened. It strengthens judgment. It is not another archive of files.",
      "In Bizdaptive, asking why traces answers back to the conversations and evidence that shaped a choice. Finance, sales, ops, and marketing all hit the same failure mode when receipts don’t exist.",
      "On day one, minting a first receipt — even for a small live decision — changes the habit: decisions become part of the living company map, not vapor after the call.",
    ],
  },
  {
    slug: "from-conversation-to-shared-picture",
    title: "From a short conversation to a shared company picture",
    excerpt:
      "How Bizdaptive’s early flow works: describe, see the map, correct anytime, ask why, invite the team.",
    minutes: 7,
    kind: "Guide",
    body: [
      "Bizdaptive’s early experience is deliberately small. Five moves: describe your company, see a living map, correct anytime, ask why and get receipts, invite your team.",
      "Describe: goals and how you work today. See: people, projects, and responsibilities connect into one picture. Correct: the map stays honest as the business evolves.",
      "Ask why: answers come with a trail. Invite: shared understanding grows as people contribute — and so does the quality of the next decision together.",
      "This is decision intelligence for growing companies: context and ownership available when it matters, without promising a full agent platform on day one.",
    ],
  },
  {
    slug: "when-context-scatters",
    title: "When decisions scatter: the fog growing companies hit",
    excerpt:
      "Meetings, email, chat, and a few people’s heads. Context gets lost. The next action starts from guesswork — unless the picture is shared.",
    minutes: 5,
    kind: "Note",
    body: [
      "As businesses grow, choices fragment. The budget is in a sheet. The why is in Slack. The owner is “someone on the call.” Dashboards show numbers. Task tools show tickets. Neither shows judgment.",
      "The cost shows up as rework: wrong amounts, forgotten discounts, weekly priority fights, campaigns that cannot explain themselves.",
      "Bizdaptive’s answer is not more storage. It is a living operational layer — map plus receipts — so people decide with proof, confidence, and clarity.",
      "If that sounds like your week, start with the use cases for finance, sales, operations, marketing, or leadership — then join the waitlist to see a live company picture.",
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
