import {
  HelpCircle,
  Map,
  MessageSquare,
  PencilLine,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/Button";
import { HoverIcon } from "../components/HoverIcon";
import { AnimatedCard, SectionHeader } from "../components/motion";
import { usePageTitle } from "../hooks/usePageTitle";

const steps = [
  {
    n: "01",
    icon: MessageSquare,
    title: "Describe your company",
    body: "Plain language. Who you are, what you sell, who’s on the team, what you’re aiming for. Drop a file if you want — no three-day workshop required.",
  },
  {
    n: "02",
    icon: Map,
    title: "See a living map",
    body: "People, products, goals, and how they connect — in one place you can walk. Structure for shape. Dynamics for what’s moving.",
  },
  {
    n: "03",
    icon: PencilLine,
    title: "Correct anytime",
    body: "Wrong KPI? Person moved teams? Say so. We update the picture and keep the old version labeled — so past-you doesn’t quietly vanish.",
  },
  {
    n: "04",
    icon: HelpCircle,
    title: "Ask why — get receipts",
    body: "Who owns revenue? Why did we pivot? Answers come with a trail: what was said, what was inferred, and how sure we are. Not vibes.",
  },
  {
    n: "05",
    icon: UsersRound,
    title: "Invite the team",
    body: "A teammate joins and gets recognized — not re-interrogated. They propose a change. The right person approves. It goes live for everyone.",
  },
];

export function HowItWorksPage() {
  usePageTitle("How it works — Bizdaptive");

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="How it works"
        accent="accent"
        title="Talk once. Walk the company forever."
        lead="No jargon maze. Five steps from “here’s how we work” to a shared map your team can question, correct, and trust."
      />

      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-4">
          {steps.map((s, i) => (
            <AnimatedCard key={s.n} delay={i * 0.06} className="flex gap-5 p-6 sm:p-7">
              <div className="shrink-0">
                <HoverIcon icon={s.icon} variant="float" color="var(--accent)" />
              </div>
              <div>
                <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                  {s.n}
                </p>
                <h2 className="mt-1 text-xl font-semibold" style={{ color: "var(--fg)" }}>
                  {s.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed sm:text-[15px]" style={{ color: "var(--fg-muted)" }}>
                  {s.body}
                </p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8" style={{ background: "var(--bg-soft)" }}>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader>
            <HoverIcon icon={ShieldCheck} variant="bounce" color="var(--accent)" className="mx-auto" />
            <h2
              className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              Close the browser. Come back tomorrow.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "var(--fg-muted)" }}>
              Your company&apos;s picture is still there. Shared across people. Walled off from every
              other company. Boring in the best way.
            </p>
          </SectionHeader>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button to="/contact" showArrow>
              Request early access
            </Button>
            <Button to="/returns" variant="ghost">
              What you get
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
