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
    title: "Describe Your Company",
    body: "Tell us about your company, your goals, and how you work today. This gives Bizdaptive the context it needs to understand your business from day one.",
  },
  {
    n: "02",
    icon: Map,
    title: "See a Living Map",
    body: "Watch your business come to life as people, goals, projects, decisions, and responsibilities connect into one living picture.",
  },
  {
    n: "03",
    icon: PencilLine,
    title: "Correct Anytime",
    body: "Your business is always evolving. Update, refine, or correct anything at any time so Bizdaptive always reflects how your company truly operates.",
  },
  {
    n: "04",
    icon: HelpCircle,
    title: "Ask Why and Get Receipts",
    body: "Ask any question about your business and trace every answer back to the decisions, conversations, and evidence that shaped it.",
  },
  {
    n: "05",
    icon: UsersRound,
    title: "Invite Your Team",
    body: "Bring your team into the conversation. As Bizdaptive grows with every contribution, your company's shared understanding grows too, and so does the value of every decision you make together.",
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
