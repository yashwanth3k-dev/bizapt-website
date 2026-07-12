import {
  Building2,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { motion } from "framer-motion";
import { SectionHeader } from "./motion";

const industries = [
  { icon: Factory, label: "Manufacturing" },
  { icon: ShoppingBag, label: "FMCG & Retail" },
  { icon: Truck, label: "Logistics" },
  { icon: Landmark, label: "Financial Services" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Building2, label: "Public Sector" },
];

function IndustryChip({
  icon: Icon,
  label,
}: {
  icon: (typeof industries)[number]["icon"];
  label: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 380, damping: 22 }}
      className="card-surface card-interactive flex min-w-[210px] items-center gap-3.5 rounded-2xl px-5 py-4"
    >
      <Icon className="size-5" strokeWidth={1.5} style={{ color: "var(--fg-muted)" }} aria-hidden />
      <span className="text-sm font-medium whitespace-nowrap" style={{ color: "var(--fg)" }}>
        {label}
      </span>
    </motion.div>
  );
}

export function Industries() {
  const loop = [...industries, ...industries, ...industries];

  return (
    <section id="industries" className="overflow-hidden py-24" style={{ background: "var(--bg-soft)" }}>
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeader className="text-center">
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--teal)" }}
          >
            Industries
          </p>
          <h2
            className="mx-auto mt-4 max-w-3xl font-serif text-3xl tracking-tight sm:text-4xl md:text-[2.6rem] md:leading-[1.15]"
            style={{ color: "var(--fg)" }}
          >
            Wherever complexity lives, Bizdaptive belongs.
          </h2>
          <p
            className="mx-auto mt-5 max-w-xl text-sm leading-relaxed"
            style={{ color: "var(--fg-muted)" }}
          >
            Industry packs seed how the interview and specialists read language — they never invent
            org facts. We prove the product on real CPG and ops organizations first — before any
            paying customer data goes live.
          </p>
        </SectionHeader>
      </div>

      <motion.div
        className="marquee-mask mt-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="marquee-track px-5" aria-label="Industries">
          {loop.map((item, i) => (
            <IndustryChip key={`${item.label}-${i}`} icon={item.icon} label={item.label} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
