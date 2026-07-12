import { Eye, Layers, Scale, Waypoints } from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedCard, SectionHeader } from "./motion";

const benefits = [
  {
    icon: Waypoints,
    text: "Walk observation → claim → commitment → receipt on a causal spine — not a slide deck.",
  },
  {
    icon: Eye,
    text: "See what was stated vs inferred. Epistemic badges keep the mirror honest.",
  },
  {
    icon: Scale,
    text: "Adaptive Rings (L / A / G) and authority gates — governance is substrate, not a plugin.",
  },
  {
    icon: Layers,
    text: "Specialist assimilation layers (people, assets, channels, metrics, goals, processes) share one CORE.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="px-5 py-24 sm:px-8" style={{ background: "var(--bg)" }}>
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <SectionHeader>
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--teal)" }}
          >
            Benefits
          </p>
          <h2
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:leading-tight"
            style={{ color: "var(--fg)" }}
          >
            Less noise. More foresight you can defend.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
            Bizdaptive doesn&apos;t assert absolute truth. It records belief with confidence,
            evidence, and lineage — so when someone asks “why,” the trail answers.
          </p>
        </SectionHeader>

        <div className="space-y-3">
          {benefits.map((item, i) => (
            <AnimatedCard
              key={item.text}
              delay={i * 0.08}
              from="right"
              className="flex items-center gap-4 px-5 py-4"
            >
              <motion.span
                whileHover={{ rotate: 8, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 18 }}
                className="inline-flex shrink-0"
              >
                <item.icon
                  className="size-5"
                  strokeWidth={1.5}
                  style={{ color: "var(--accent)" }}
                  aria-hidden
                />
              </motion.span>
              <p
                className="text-sm font-medium leading-snug sm:text-[15px]"
                style={{ color: "var(--fg)" }}
              >
                {item.text}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}
