"use client";

import { useRef } from "react";
import {
  HelpCircle,
  Map,
  MessageSquare,
  PencilLine,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/Button";
import { HoverIcon } from "../components/HoverIcon";
import { SectionHeader } from "../components/motion";
import { usePageTitle } from "../hooks/usePageTitle";

const steps = [
  {
    n: "01",
    icon: MessageSquare,
    title: "Describe your company",
    body: "Plain language. Who you are, what you sell, who’s on the team, and what you’re aiming for. Share a file if useful. We process it for context and do not retain the uploaded file.",
  },
  {
    n: "02",
    icon: Map,
    title: "See a living map",
    body: "People, products, goals, and how they connect in one place you can walk. Structure for shape. Dynamics for what’s moving.",
  },
  {
    n: "03",
    icon: PencilLine,
    title: "Correct anytime",
    body: "Wrong KPI? Person moved teams? Say so. We update the picture and keep the old version labeled, so past-you doesn’t quietly vanish.",
  },
  {
    n: "04",
    icon: HelpCircle,
    title: "Ask why and get receipts",
    body: "Who owns revenue? Why did we pivot? Answers come with a trail: what was said, what was inferred, and how sure we are. Not vibes.",
  },
  {
    n: "05",
    icon: UsersRound,
    title: "Invite the team",
    body: "A teammate joins and gets recognized, not re-interrogated. They propose a change. The right person approves. It goes live for everyone.",
  },
];

function WalkthroughCard({ step }: { step: (typeof steps)[number] }) {
  const cardRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.18, 0.78, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.18, 0.78, 1], [60, 0, 0, -70]);
  const scale = useTransform(scrollYProgress, [0, 0.18, 0.78, 1], [0.96, 1, 1, 0.96]);

  return (
    <motion.article
      ref={cardRef}
      style={{
        opacity: reduceMotion ? 1 : opacity,
        y: reduceMotion ? 0 : y,
        scale: reduceMotion ? 1 : scale,
      }}
      className="walkthrough-card"
    >
      <div className="walkthrough-card__icon">
        <step.icon className="size-6" strokeWidth={1.6} aria-hidden />
      </div>
      <div>
        <p className="walkthrough-card__number">Step {step.n}</p>
        <h3>{step.title}</h3>
        <p className="walkthrough-card__body">{step.body}</p>
      </div>
    </motion.article>
  );
}

export function HowItWorksPage() {
  usePageTitle("How it works | Bizdaptive");

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="How it works"
        accent="accent"
        title="Talk once. Walk the company forever."
        lead="Five steps. Scroll to walk through them."
      />

      <section className="px-5 pb-20 sm:px-8">
        <div className="walkthrough-layout mx-auto max-w-6xl">
          <div className="walkthrough-copy">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              The walkthrough
            </p>
            <h2
              className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              From conversation to a shared company picture.
            </h2>
            <p
              className="mt-4 max-w-md text-sm leading-relaxed sm:text-base"
              style={{ color: "var(--fg-muted)" }}
            >
              Five small moves. Step through the cards without a jargon maze.
            </p>
            <p className="walkthrough-copy__hint">Scroll to follow the walkthrough</p>
          </div>

          <div className="walkthrough-cards">
            {steps.map((step) => (
              <WalkthroughCard key={step.n} step={step} />
            ))}
          </div>
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
            <Button to="/contact?intent=waitlist" showArrow>
              Join the waitlist
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
