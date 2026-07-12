import { GitBranch, MessageSquareQuote, ShieldCheck } from "lucide-react";
import { AnimatedCard, SectionHeader } from "./motion";

const cards = [
  {
    icon: MessageSquareQuote,
    title: "Capture isn't enough.",
    body: "Tools store notes. The PoC interviews WHO you are, then materializes people, departments, goals, and assets into one shared org state.",
  },
  {
    icon: GitBranch,
    title: "Legible ≠ correct.",
    body: "A pretty graph that invents channels or scrambles owners fails the bar. PoC ships a belief mirror: stated vs inferred, evidence-stamped, supersede when facts change.",
  },
  {
    icon: ShieldCheck,
    title: "Governance from the first decision.",
    body: "Onboarding mints a first-decision receipt — who committed, why, and what it was based on — before you ever open a second dashboard.",
  },
];

export function WhyChange() {
  return (
    <section id="why-change" className="px-5 py-24 sm:px-8" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-5xl text-center">
        <SectionHeader>
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--teal)" }}
          >
            Why Change
          </p>
          <h2
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.5rem] md:leading-tight"
            style={{ color: "var(--fg)" }}
          >
            Spreadsheets and chat can&apos;t carry institutional memory.
          </h2>
          <p
            className="mx-auto mt-5 max-w-2xl text-base leading-relaxed"
            style={{ color: "var(--fg-muted)" }}
          >
            Sudarshan and Yashwanth are building a substrate where the org is understood as a
            complex adaptive system — not another KPI wall. The PoC proves the mirror works for one
            org before any paying customer data.
          </p>
        </SectionHeader>

        <div className="mt-14 grid gap-4 text-left sm:grid-cols-3">
          {cards.map((card, i) => (
            <AnimatedCard key={card.title} delay={i * 0.1} className="p-6 text-left">
              <card.icon
                className="mb-4 size-6 transition-transform duration-300 group-hover:scale-110"
                strokeWidth={1.5}
                style={{ color: "var(--accent)" }}
                aria-hidden
              />
              <h3 className="text-lg font-semibold" style={{ color: "var(--fg)" }}>
                {card.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                {card.body}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
