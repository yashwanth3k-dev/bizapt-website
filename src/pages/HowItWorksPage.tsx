"use client";

import { useCallback, useEffect, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  HelpCircle,
  Map,
  MessageSquare,
  PencilLine,
  ShieldCheck,
  UsersRound,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/Button";
import { HoverIcon } from "../components/HoverIcon";
import { SectionHeader, easeOut } from "../components/motion";
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
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const step = steps[index]!;

  const goNext = useCallback(() => {
    setDir(1);
    setIndex((i) => (i + 1) % steps.length);
  }, []);

  const goPrev = useCallback(() => {
    setDir(-1);
    setIndex((i) => (i - 1 + steps.length) % steps.length);
  }, []);

  const goTo = useCallback(
    (i: number) => {
      setDir(i > index ? 1 : -1);
      setIndex(i);
    },
    [index],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [goNext, goPrev]);

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="How it works"
        accent="accent"
        title="Talk once. Walk the company forever."
        lead="Five steps. Use the arrows to walk through them."
      />

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-14">
          <div>
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
              Five small moves. Step through the cards — no jargon maze.
            </p>

            <div className="mt-8 flex items-center gap-3">
              <button
                type="button"
                onClick={goPrev}
                className="inline-flex size-10 items-center justify-center rounded-full border transition hover:opacity-90"
                style={{ borderColor: "var(--line)", color: "var(--fg)", background: "var(--card)" }}
                aria-label="Previous step"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={goNext}
                className="inline-flex size-10 items-center justify-center rounded-full border transition hover:opacity-90"
                style={{ borderColor: "var(--line)", color: "var(--fg)", background: "var(--card)" }}
                aria-label="Next step"
              >
                <ChevronRight className="size-4" />
              </button>
              <div className="ml-2 flex gap-1.5">
                {steps.map((s, i) => (
                  <button
                    key={s.n}
                    type="button"
                    aria-label={`Go to step ${s.title}`}
                    onClick={() => goTo(i)}
                    className="h-1.5 rounded-full transition-all"
                    style={{
                      width: i === index ? 22 : 8,
                      background: i === index ? "var(--accent)" : "var(--line)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

            <div className="relative mx-auto w-full max-w-md lg:mx-0" style={{ perspective: 1200 }}>
              <div
                className="pointer-events-none absolute inset-x-4 top-3 h-[calc(100%-0.75rem)] rounded-2xl border opacity-40"
                style={{
                  borderColor: "var(--line)",
                  background: "var(--card-solid)",
                  transform: "translateZ(-40px) rotateY(8deg)",
                }}
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-x-2 top-1.5 h-[calc(100%-0.35rem)] rounded-2xl border opacity-60"
                style={{
                  borderColor: "var(--line)",
                  background: "var(--card-solid)",
                  transform: "translateZ(-20px) rotateY(4deg)",
                }}
                aria-hidden
              />

              <div className="relative h-[300px] sm:h-[320px]" style={{ transformStyle: "preserve-3d" }}>
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.article
                    key={step.n}
                    custom={dir}
                    initial={{ opacity: 0, x: dir > 0 ? 56 : -56, rotateY: dir > 0 ? -28 : 28 }}
                    animate={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: dir > 0 ? -56 : 56, rotateY: dir > 0 ? 28 : -28 }}
                    transition={{ duration: 0.4, ease: easeOut }}
                    className="absolute inset-0 rounded-2xl border p-7 sm:p-8"
                    style={{
                      borderColor: "var(--line)",
                      background: "var(--card-solid)",
                      boxShadow: "0 18px 48px color-mix(in srgb, var(--accent) 12%, transparent)",
                      transformStyle: "preserve-3d",
                      backfaceVisibility: "hidden",
                    }}
                  >
                    <HoverIcon icon={step.icon} variant="float" color="var(--accent)" />
                    <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                      {step.n}
                    </p>
                    <h3
                      className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl"
                      style={{ color: "var(--fg)" }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="mt-3 text-sm leading-relaxed sm:text-[15px]"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {step.body}
                    </p>
                  </motion.article>
                </AnimatePresence>
              </div>

              {/* Depth trail */}
              <div className="mt-5 flex items-center justify-center gap-2" aria-hidden>
                {steps.map((s, i) => (
                  <motion.span
                    key={s.n}
                    className="rounded-full"
                    animate={{
                      width: i === index ? 18 : 8,
                      height: i === index ? 8 : 6,
                      opacity: i === index ? 1 : 0.35,
                      y: i === index ? -2 : 0,
                    }}
                    transition={{ type: "spring", stiffness: 380, damping: 24 }}
                    style={{ background: i === index ? "var(--accent)" : "var(--line)" }}
                  />
                ))}
              </div>
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
            <Button to="/roi" variant="ghost">
              With Bizdaptive you will be able to
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
