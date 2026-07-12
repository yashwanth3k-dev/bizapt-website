import {
  Fingerprint,
  Map,
  MessageCircleQuestion,
  ShieldCheck,
  UserRound,
  UsersRound,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/Button";
import { HoverIcon } from "../components/HoverIcon";
import { AnimatedCard, SectionHeader } from "../components/motion";
import { usePageTitle } from "../hooks/usePageTitle";

const acts = [
  {
    n: "I",
    icon: Fingerprint,
    title: "Learn your org",
    body: "WHO-first interview. Plain language becomes people, teams, products, channels, metrics, goals — plus your first governed decision record. You land in your living company map.",
  },
  {
    n: "II",
    icon: MessageCircleQuestion,
    title: "Ask why",
    body: "Why is churn slipping? Who owns revenue? Why did we decide X? Every answer shows its work — an evidence trail, never a bare true/false.",
  },
  {
    n: "III",
    icon: Map,
    title: "Work from the map",
    body: "Your company map is the workspace. Switch Structure (what exists) ↔ Dynamics (what's moving). Fix wrong facts on the spot.",
  },
  {
    n: "IV",
    icon: UsersRound,
    title: "Team makes it shared",
    body: "A teammate joins, recognized as the person you already described. They propose → the right authority approves → it goes live for everyone.",
  },
  {
    n: "V",
    icon: ShieldCheck,
    title: "Always there, always safe",
    body: "Close the browser, come back tomorrow. Your org's picture persists. Each company's data stays walled off from every other.",
  },
  {
    n: "VI",
    icon: UserRound,
    title: "Honest across every seat",
    body: "Founder, lead, or individual contributor — same shared org picture, at the depth each role needs. No separate story per login.",
  },
];

const steps = [
  {
    n: "01",
    icon: UserRound,
    title: "Tell us who you are",
    body: "Role and authority shape the conversation. Founder, team lead, and IC get different depth — we ask once, then never make you repeat yourself.",
  },
  {
    n: "02",
    icon: Fingerprint,
    title: "Describe your company",
    body: "Products, people, goals, metrics — in plain language. File drop is coming; the conversation path is live.",
  },
  {
    n: "03",
    icon: Map,
    title: "Live in the map",
    body: "Navigate Structure and Dynamics. Ask why. Add context. Invite your team. Approve changes.",
  },
];

/** Product page: float / bounce — forward motion. */
export function HowItWorksPage() {
  usePageTitle("Product — Bizdaptive");

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="Product"
        accent="sky"
        title="Talk to your company. It talks back — with evidence."
        lead="Describe your org in plain language. Bizdaptive builds a living map you can navigate, question, and govern — not a dashboard that forgets by Friday."
      />

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader className="text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--sky)" }}
            >
              Three steps
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              From first conversation to a shared org map.
            </h2>
          </SectionHeader>
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {steps.map((s, i) => (
              <AnimatedCard key={s.n} delay={i * 0.08} className="p-6">
                <HoverIcon icon={s.icon} variant="float" color="var(--sky)" />
                <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                  {s.n}
                </p>
                <h3 className="mt-2 text-lg font-semibold" style={{ color: "var(--fg)" }}>
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {s.body}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8" style={{ background: "var(--bg-soft)" }}>
        <div className="mx-auto max-w-5xl">
          <SectionHeader className="text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--teal)" }}
            >
              The arc
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              One promise that deepens at every stage.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: "var(--fg-muted)" }}>
              An honest, living, shared, evidence-backed picture of your organization.
            </p>
          </SectionHeader>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {acts.map((act, i) => (
              <AnimatedCard key={act.n} delay={i * 0.05} className="p-6 sm:p-7">
                <HoverIcon icon={act.icon} variant="bounce" color="var(--sky)" />
                <p
                  className="text-xs font-semibold uppercase tracking-widest"
                  style={{ color: "var(--accent)" }}
                >
                  Act {act.n}
                </p>
                <h3 className="mt-2 text-xl font-semibold" style={{ color: "var(--fg)" }}>
                  {act.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {act.body}
                </p>
              </AnimatedCard>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            <Button to="/capabilities" showArrow>
              Explore capabilities
            </Button>
            <Button to="/contact" variant="ghost">
              Book a founder demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
