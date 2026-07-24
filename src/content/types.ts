import type { LucideIcon } from "lucide-react";

export type SolutionRow = {
  capability: string;
  decision: string;
  value: string;
  onArc?: boolean;
};

export type KpiRow = {
  metric: string;
  before: string;
  after: string;
  note?: string;
};

export type OutcomeGroup = {
  category: string;
  items: string[];
};

export type PhaseStep = {
  phase: string;
  items: string[];
};

export type UseCase = {
  slug: string;
  label: string;
  eyebrow: string;
  title: string;
  lead: string;
  question: string;
  answer: string;
  overview: string;
  currentSituation: string;
  challenges: string[];
  existingProcess: string[];
  processProblems: string[];
  futureState: string[];
  solutions: SolutionRow[];
  workflow: string[];
  surfaces: string[];
  decisionExamples: string[];
  kpis: KpiRow[];
  outcomes: OutcomeGroup[];
  industries: string[];
  nextSteps: PhaseStep[];
  onArc: string[];
};

export type BlogSection = {
  heading: string;
  body: string;
  bullets?: string[];
  /** checkmarks list, flow line, or plain bullets */
  layout?: "checks" | "flow" | "bullets";
  callouts?: string[];
};

export type BlogCta = {
  label: string;
  to: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  author: string;
  date: string;
  minutes: number;
  kind: "Guide" | "Note";
  icon: LucideIcon;
  sections: BlogSection[];
  closing: string;
  cta: BlogCta;
};
