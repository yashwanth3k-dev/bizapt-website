import {
  FileStack,
  GitBranch,
  KeyRound,
  Layers,
  MessageSquareOff,
  Network,
  ShieldOff,
  Split,
  Users,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/Button";
import { HoverIcon } from "../components/HoverIcon";
import { AnimatedCard, SectionHeader } from "../components/motion";
import { usePageTitle } from "../hooks/usePageTitle";

const pains = [
  {
    icon: MessageSquareOff,
    title: "Notes aren't memory.",
    body: "Slack threads and sticky docs don't compound. Institutional knowledge leaks every time someone leaves the room.",
  },
  {
    icon: GitBranch,
    title: "Pretty ≠ true.",
    body: "Org charts invent owners. Dashboards invent certainty. Neither tells you what was stated vs guessed.",
  },
  {
    icon: ShieldOff,
    title: "Decisions without a trail.",
    body: "Who committed, why, and on what evidence? If that lives in someone's head, it isn't governance — it's folklore.",
  },
];

const tuesdays = [
  {
    icon: Split,
    title: "Decision splinters",
    body: "Claude → agency → Slack → regulator asks later. Reconstruction takes weeks. The decision itself took an afternoon.",
  },
  {
    icon: FileStack,
    title: "Spec in three places",
    body: "Half the call never made the brief. Teams build different products. Budget follows the wrong one.",
  },
  {
    icon: Layers,
    title: "Pivot, immediately lost",
    body: "Strategy shifts on a call. Engineering ships the old plan for two weeks because nothing held the new one.",
  },
];

const pillars = [
  {
    icon: KeyRound,
    title: "Lock & key",
    body: "AI providers make the locks. Bizdaptive is the key — accountability and governance so one model isn't roleplaying your org.",
  },
  {
    icon: Network,
    title: "One org, many surfaces",
    body: "Slack, Claude, Cursor, email, agencies — surfaces where the same organization already runs. We operate it as one.",
  },
  {
    icon: Users,
    title: "Memory that survives turnover",
    body: "When someone leaves, their contribution stays woven in — decisions, methods, context — not trapped in their Slack history.",
  },
  {
    icon: FileStack,
    title: "Not your system of record",
    body: "We compile understanding and provenance. Raw files stay in your systems. We keep the picture, with pointers back.",
  },
];

/** Problem page: shake / tilt — unsettled friction. */
export function WhyChangePage() {
  usePageTitle("Problem — Bizdaptive");

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="Problem"
        title="Your org's memory deserves better than Slack archaeology."
        lead="Today's firm makes dozens of decisions a week across tools and hallway chats. Almost none of them live somewhere the org can query tomorrow."
        accent="teal"
      />

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-3">
          {pains.map((card, i) => (
            <AnimatedCard key={card.title} delay={i * 0.08} className="group p-6">
              <HoverIcon icon={card.icon} variant="shake" color="var(--teal)" />
              <h2 className="text-lg font-semibold" style={{ color: "var(--fg)" }}>
                {card.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                {card.body}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8" style={{ background: "var(--bg-soft)" }}>
        <div className="mx-auto max-w-5xl">
          <SectionHeader className="text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              Three Tuesdays
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              The problem isn&apos;t AI vs governance.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base" style={{ color: "var(--fg-muted)" }}>
              It&apos;s an organization that can&apos;t operate as one across the surfaces it already uses.
            </p>
          </SectionHeader>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {tuesdays.map((card, i) => (
              <AnimatedCard key={card.title} delay={i * 0.08} className="p-6">
                <HoverIcon icon={card.icon} variant="tilt" />
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

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader className="text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--teal)" }}
            >
              Positioning
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              Why Bizdaptive exists.
            </h2>
          </SectionHeader>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {pillars.map((card, i) => (
              <AnimatedCard key={card.title} delay={i * 0.06} className="p-7">
                <HoverIcon icon={card.icon} variant="shake" color="var(--teal)" />
                <h3 className="text-xl font-semibold" style={{ color: "var(--fg)" }}>
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {card.body}
                </p>
              </AnimatedCard>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            <Button to="/product" showArrow>
              See the product
            </Button>
            <Button to="/contact" variant="ghost">
              Request early access
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
