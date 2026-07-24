import { FileText, Map, MessageSquare, Receipt } from "lucide-react";
import type { BlogPost } from "./types";

/** Problem → root cause → approach → practice. One soft CTA. POC-honest. */
export const blogPosts: BlogPost[] = [
  {
    slug: "decision-receipts",
    title: "Improving decision clarity with decision receipts",
    excerpt:
      "Recover lost context and cut rework with stamped ownership — who decided, why, and what it was for — before the next meeting starts.",
    tags: ["Decisions", "Governance"],
    author: "Bizdaptive",
    date: "Dec 10, 2024",
    minutes: 8,
    kind: "Guide",
    icon: Receipt,
    sections: [
      {
        heading: "Why decision receipts matter",
        body: "Monday morning often starts the same way: someone asks who approved a budget line, a discount, or a priority change. The answer is somewhere in Slack, a call recording, or “we talked about it last week.” Verbal approvals and chat archaeology drive involuntary rework. Notes in the CRM rarely preserve judgment — so handoffs stall and reviews open by reconstructing instead of deciding.",
        callouts: [
          "Most material decisions leave no durable who / why / what-for record",
          "Teams lose hours reconciling the same exception every quarter",
        ],
      },
      {
        heading: "Where the record usually breaks",
        body: "Tools are good at storing outcomes. They are weak at storing judgment. A spreadsheet shows the new number. A ticket shows the task. Neither answers why the change was allowed, who owned the call, or what the decision was meant to achieve. When people leave or priorities shift, the next person inherits a result without the rationale.",
        layout: "bullets",
        bullets: [
          "Approvals live in chat; the system of record only shows the after-state",
          "Corrections overwrite last month’s figure with no trail",
          "Board and audit prep turns into memory work",
        ],
      },
      {
        heading: "What a receipt captures",
        body: "A decision receipt on the Company Graph is a small governance artifact: owner, rationale, and intent — linked to the goals and people it affects. Corrections version history instead of erasing it. Labels stay honest: stated, inferred, or still unknown. The point is not a legal vault. It is a shared record the next review can open without archaeology.",
        layout: "bullets",
        bullets: [
          "Who decided — a named owner, not “the room”",
          "Why — the judgment in plain language",
          "What for — the goal or constraint the decision serves",
          "Evidence — what was known at the time, and what is still unknown",
        ],
      },
      {
        heading: "A familiar scene",
        body: "Finance walks into the monthly review. Ops changed a delivery cost mid-quarter. Sales locked a discount on a call. Three people remember three versions. With a receipt, the meeting starts from the last stamped decision: who signed off, why the exception existed, and what changed since. The debate moves forward instead of backward.",
      },
      {
        heading: "How to start without boiling the ocean",
        body: "You do not need receipts for every micro-choice. Stamp the decisions that create rework when they disappear — budget moves, pricing exceptions, priority flips, hiring freezes. Make the habit visible in one weekly forum first. Correct openly when reality changes so last quarter’s belief stays retrieveable.",
        layout: "checks",
        bullets: [
          "Pick one recurring decision type this week",
          "Stamp who / why / what-for before the next meeting",
          "Link it to the goal or metric it affects",
          "Correct in place when the number moves — do not silent-overwrite",
        ],
      },
    ],
    closing:
      "Start with one live decision this week — budget, discount, or priority — and record who / why / what-for before the next meeting.",
    cta: { label: "Join the waitlist", to: "/contact?intent=waitlist" },
  },
  {
    slug: "living-company-map",
    title: "Building a living company map your team can trust",
    excerpt:
      "Replace tribal knowledge with a shared Company Graph — structure and dynamics in one place — so ownership is visible before the meeting.",
    tags: ["Company Graph", "Operations"],
    author: "Bizdaptive",
    date: "Nov 18, 2024",
    minutes: 9,
    kind: "Guide",
    icon: Map,
    sections: [
      {
        heading: "Why a living map matters",
        body: "Org charts show reporting lines. Dashboards show numbers. Neither shows who owns the fix when a metric slips — or what changed since last week. Structure often lives in founders’ heads. Dynamics live in chat threads. New hires inherit tools and passwords, not context. The company keeps moving; the shared picture does not.",
        callouts: [
          "When ownership is unclear, every metric slip becomes a meeting",
          "Documentation projects die in week two because they are not correctable",
        ],
      },
      {
        heading: "Structure vs dynamics",
        body: "A useful operating picture holds both. Structure is what exists: people, products, teams, goals, responsibilities. Dynamics is what is moving: decisions in flight, metric shifts, open corrections, tensions between teams. Most companies split these across org charts, OKR docs, and Slack. Bizdaptive’s Company Graph keeps them on one underlying picture so you can see ownership and motion together.",
        layout: "bullets",
        bullets: [
          "Structure — who and what the company is made of",
          "Dynamics — what changed, who owns the next move",
          "Belief + evidence — not a fake truth oracle",
        ],
      },
      {
        heading: "What the Company Graph holds",
        body: "The graph is compiled from conversation, not a six-month documentation program. People, products, goals, and decisions link together. Corrections version history instead of silent overwrites. Where confidence matters, labels stay honest: stated, inferred, or unknown. The next person who joins gets a seat on the same picture — not a scavenger hunt.",
        layout: "bullets",
        bullets: [
          "Conversational build you can challenge on day one",
          "Versioned corrections that preserve last month’s belief",
          "Links from goals to owners to material decisions",
        ],
      },
      {
        heading: "What usually fails",
        body: "Wikis go stale because editing them is unpaid work. Org charts go stale because reality changes faster than HR updates. Dashboards go loud because they show symptoms without owners. A living map works only when correcting it is cheaper than arguing from three local truths.",
        layout: "checks",
        bullets: [
          "Avoid a perfect wiki that nobody maintains",
          "Avoid a dashboard that cannot answer “who owns this?”",
          "Prefer a picture the team can correct in plain language",
        ],
      },
      {
        heading: "A practical way to begin",
        body: "Start with one north-star metric and the people who own it. Add the products or projects that feed that metric. Invite the next stakeholder into the same view. Expand only when the weekly review stops reconciling and starts deciding. Describe → See → Correct → Invite.",
      },
    ],
    closing:
      "Build outward from one metric and its owners. Keep the map correctable — that is what makes it living.",
    cta: { label: "Join the waitlist", to: "/contact?intent=waitlist" },
  },
  {
    slug: "from-conversation-to-shared-picture",
    title: "From a short conversation to a shared company picture",
    excerpt:
      "Skip form-heavy onboarding. Get a usable operating picture from a brief that feels like briefing a sharp ops hire.",
    tags: ["Onboarding", "POC"],
    author: "Bizdaptive",
    date: "Oct 22, 2024",
    minutes: 7,
    kind: "Guide",
    icon: MessageSquare,
    sections: [
      {
        heading: "Why talk first",
        body: "Most tools ask you to fill fields or dump files before you see value. Growing companies need the opposite: talk first, picture second, corrections forever. When founders must become administrators to “set up the system,” implementation stalls. Knowledge transfer becomes a side quest while the business keeps moving.",
        callouts: [
          "A usable map in one afternoon beats a perfect wiki that never ships",
        ],
      },
      {
        heading: "What “brief like an ops hire” means",
        body: "You describe the company the way you would to a sharp new hire: who sells what, who owns margin, what is on fire this quarter, which decisions keep coming back. The system compiles that into a Company Graph — people, goals, responsibilities — you can see and challenge immediately. Mistakes are expected. Corrections are the product.",
      },
      {
        heading: "The early path",
        body: "Day one stays deliberately small and POC-honest: a usable graph, a path to decision receipts, and corrections that preserve history. No claim of a full agent platform or a production deploy. The early path is enough to stop arguing from three versions of the same metric.",
        layout: "flow",
        bullets: ["Describe", "See", "Correct", "Decide", "Invite"],
      },
      {
        heading: "What you should expect on day one",
        body: "Expect a picture you can stand behind for this week’s operating questions — not a finished enterprise model. Expect unknowns to be labeled as unknowns. Expect to correct names, owners, and links in plain language. That honesty is what makes the shared picture trustworthy.",
        layout: "bullets",
        bullets: [
          "Usable graph from conversation — not empty forms",
          "Clear labels: stated, inferred, unknown",
          "Room to stamp material decisions as receipts",
          "A seat for the next person without re-briefing from scratch",
        ],
      },
      {
        heading: "When this path is the wrong fit",
        body: "If you need a heavyweight MDM program, a full BSS replacement, or an AI that “knows the truth” with no human challenge, this is not that. Bizdaptive is decision intelligence for growing companies that want shared context they can correct — belief plus evidence, not a black box.",
      },
    ],
    closing:
      "Brief the system like a new ops hire. See the picture. Correct it. Then invite the next person in.",
    cta: { label: "See how it works", to: "/how-it-works" },
  },
  {
    slug: "when-context-scatters",
    title: "When decisions scatter, the next action starts from guesswork",
    excerpt:
      "Replace fog with a governed operating layer — map plus receipts — so meetings decide forward instead of reconstructing backward.",
    tags: ["Context", "Leadership"],
    author: "Bizdaptive",
    date: "Sep 5, 2024",
    minutes: 8,
    kind: "Note",
    icon: FileText,
    sections: [
      {
        heading: "Where context goes missing",
        body: "The budget is in a sheet. The why is in Slack. The owner is “someone on the call.” Dashboards and tickets help execution; they do not preserve judgment. Rework shows up as wrong amounts, forgotten discounts, and priority fights. Leadership prep gets expensive when material changes cannot be retrieved without interviewing three people.",
        callouts: [
          "Reporting is mature. Decision pipelines usually are not.",
        ],
      },
      {
        heading: "The cost of three local truths",
        body: "Finance, sales, and ops each hold a local truth that only reconciles in meetings. Duplicate standups appear. Exceptions get re-litigated. New leaders spend their first month reconstructing history instead of setting direction. None of that is a tooling shortage — it is a missing operating layer for decisions.",
        layout: "bullets",
        bullets: [
          "Meetings spent reconstructing instead of deciding",
          "Handoffs that transfer tasks but not rationale",
          "Board narratives assembled from memory",
        ],
      },
      {
        heading: "What replaces the scavenger hunt",
        body: "Not more storage — a living layer: Company Graph plus decision receipts. Structure and dynamics on one picture. Belief with evidence. Corrections that version history. A who / why / what-for when someone asks. The goal is not another archive. It is a shared picture teams can challenge before the weekly review.",
        layout: "bullets",
        bullets: [
          "Ownership visible before the meeting",
          "Material decisions stamped when they happen",
          "History kept when numbers change",
        ],
      },
      {
        heading: "What good looks like in a week",
        body: "A team opens the same picture. Last week’s material change is on the record with an owner. The metric that slipped has a named next move. Corrections from yesterday are versioned, not overwritten. The meeting agenda starts at “decide” instead of “who remembers?”",
        layout: "checks",
        bullets: [
          "One shared picture across functions",
          "Receipts for exceptions that used to live in chat",
          "Corrections that leave last week’s belief intact",
        ],
      },
      {
        heading: "A note on honesty",
        body: "This layer is not a truth oracle. It is belief plus evidence your team can challenge. Labels mark what was stated, what was inferred, and what is still unknown. That discipline is what keeps the picture useful when the business changes — which it will.",
      },
    ],
    closing:
      "One shared picture beats three local truths that only reconcile in meetings.",
    cta: { label: "Browse use cases", to: "/use-cases" },
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
