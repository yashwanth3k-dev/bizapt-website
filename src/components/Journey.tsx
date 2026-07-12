"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeader, easeOut } from "./motion";

const steps = [
  {
    n: "01",
    title: "Discover",
    body: "WHO-first interview — role and authority shape the conversation. Connecting probes elicit structure and dynamics.",
  },
  {
    n: "02",
    title: "Assimilate",
    body: "Specialist layers place people, assets, channels, metrics, goals, and processes — with belief stamps and supersede when you correct.",
  },
  {
    n: "03",
    title: "Receipt + Graph",
    body: "First-decision receipt mints. You land in the Company Graph: Structure, Dynamics, trails, and epistemic badges.",
  },
  {
    n: "04",
    title: "Extend",
    body: "Add-context anytime. Multi-user invite is live; full propose→approve with a real team, plus file/comms intake, follow on the July PoC arc.",
  },
];

export function Journey() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i + dir + steps.length) % steps.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => go(1), 4200);
    return () => window.clearInterval(id);
  }, [go, paused]);

  const step = steps[index]!;

  return (
    <section id="journey" className="px-5 py-24 sm:px-8" style={{ background: "var(--bg)" }}>
      <div className="mx-auto max-w-6xl">
        <SectionHeader className="text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--sky)" }}
          >
            The Journey
          </p>
          <h2
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
            style={{ color: "var(--fg)" }}
          >
            From first conversation to a walkable org mirror.
          </h2>
        </SectionHeader>

        {/* Auto-advancing slider (featured card) */}
        <div
          className="relative mx-auto mt-12 max-w-2xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div
            className="overflow-hidden rounded-[1.5rem] border"
            style={{ borderColor: "var(--line)", background: "var(--card-solid)" }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={step.n}
                initial={{ opacity: 0, x: 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -48 }}
                transition={{ duration: 0.4, ease: easeOut }}
                className="px-8 py-10 sm:px-12 sm:py-12"
              >
                <p className="text-sm font-semibold" style={{ color: "var(--accent)" }}>
                  {step.n}
                </p>
                <h3
                  className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl"
                  style={{ color: "var(--fg)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="mt-4 max-w-lg text-base leading-relaxed"
                  style={{ color: "var(--fg-muted)" }}
                >
                  {step.body}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-5 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              {steps.map((s, i) => (
                <button
                  key={s.n}
                  type="button"
                  aria-label={`Go to step ${s.title}`}
                  onClick={() => setIndex(i)}
                  className="h-1.5 rounded-full transition-all"
                  style={{
                    width: i === index ? 28 : 10,
                    background: i === index ? "var(--accent)" : "var(--line)",
                  }}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                className="inline-flex size-9 items-center justify-center rounded-full border transition hover:opacity-90"
                style={{ borderColor: "var(--line)", color: "var(--fg)" }}
                aria-label="Previous step"
              >
                <ChevronLeft className="size-4" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="inline-flex size-9 items-center justify-center rounded-full border transition hover:opacity-90"
                style={{ borderColor: "var(--line)", color: "var(--fg)" }}
                aria-label="Next step"
              >
                <ChevronRight className="size-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Thumbnail strip with hover */}
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.button
              key={s.n}
              type="button"
              onClick={() => setIndex(i)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.45, ease: easeOut }}
              whileHover={{ y: -5, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="card-surface card-interactive rounded-2xl p-5 text-left"
              style={{
                outline: i === index ? "2px solid var(--accent)" : undefined,
                outlineOffset: 2,
              }}
            >
              <p className="text-xs font-semibold" style={{ color: "var(--accent)" }}>
                {s.n}
              </p>
              <h4 className="mt-2 text-sm font-semibold" style={{ color: "var(--fg)" }}>
                {s.title}
              </h4>
              <p
                className="mt-1.5 line-clamp-2 text-xs leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                {s.body}
              </p>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
