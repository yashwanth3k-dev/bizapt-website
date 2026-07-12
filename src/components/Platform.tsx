import { Network, Receipt, Route, Sparkles } from "lucide-react";
import { AnimatedCard, SectionHeader } from "./motion";

const cards = [
  {
    icon: Sparkles,
    title: "WHO-first onboarding that materializes.",
    body: "Conversation → assimilation spine → people, departments, products, goals, and metrics with real names — not a scripted tour.",
  },
  {
    icon: Network,
    title: "Company Graph: Structure & Dynamics.",
    body: "React-flow graph with lenses, epistemic badges (Stated / Inferred / Unknown), and dual trails: why it's here, and why it's like this.",
  },
  {
    icon: Receipt,
    title: "First-decision receipt.",
    body: "At commit, a governed receipt mints (plan, alignment, or execution). Proven across brain providers — the record starts on day one.",
  },
  {
    icon: Route,
    title: "Add-context that supersedes, not duplicates.",
    body: "Correct a KPI or place a teammate through the same engine. α2 versioning keeps history honest when the org changes its mind.",
  },
];

export function Platform() {
  return (
    <section id="platform" className="px-5 py-24 sm:px-8" style={{ background: "var(--bg-soft)" }}>
      <div className="mx-auto max-w-5xl">
        <SectionHeader className="text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--sky)" }}
          >
            The Platform
          </p>
          <h2
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.5rem] md:leading-tight"
            style={{ color: "var(--fg)" }}
          >
            Not another dashboard. A belief + evidence substrate.
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed"
            style={{ color: "var(--fg-muted)" }}
          >
            What we&apos;re publishing as PoC — live against the real backend. File/comms ingestion and
            full multi-user approve loops are on the roadmap; this site doesn&apos;t pretend they&apos;re
            done.
          </p>
        </SectionHeader>

        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {cards.map((card, i) => (
            <AnimatedCard
              key={card.title}
              delay={i * 0.08}
              from={i % 2 === 0 ? "left" : "right"}
              className="p-7 sm:p-8"
            >
              <card.icon
                className="mb-5 size-7"
                strokeWidth={1.5}
                style={{ color: "var(--accent)" }}
                aria-hidden
              />
              <h3 className="text-xl font-semibold tracking-tight" style={{ color: "var(--fg)" }}>
                {card.title}
              </h3>
              <p
                className="mt-3 text-sm leading-relaxed sm:text-[15px]"
                style={{ color: "var(--fg-muted)" }}
              >
                {card.body}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
