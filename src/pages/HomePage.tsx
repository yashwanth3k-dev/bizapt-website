import {
  Clock,
  Eye,
  HelpCircle,
  Map,
  MessageSquare,
  Receipt,
  Share2,
  Shield,
  Tag,
  UserPlus,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { BrandLogo, SpiralWatermark } from "../components/BrandMark";
import { Button } from "../components/Button";
import { HoverIcon } from "../components/HoverIcon";
import {
  AnimatedCard,
  SectionHeader,
  SectionReveal,
  cascadeItem,
  easeOut,
} from "../components/motion";
import { usePageTitle } from "../hooks/usePageTitle";

/** Tangible things in hand on day one — not features, not process steps. */
const dayOne = [
  {
    icon: Map,
    title: "A living company map",
    body: "People, products, goals — connected. Not a wiki page you wrote once and forgot.",
  },
  {
    icon: Receipt,
    title: "Your first decision receipt",
    body: "Who decided, why, and what it was for — stamped before the next meeting starts.",
  },
  {
    icon: Tag,
    title: "Honest labels",
    body: "What’s stated, what’s guessed, what’s still unknown. No fake certainty.",
  },
  {
    icon: UserPlus,
    title: "A seat ready for the next person",
    body: "When a teammate joins, they land in the same picture — not a blank slate.",
  },
];

/** Short process — how you get day one, not what you hold. */
const steps = [
  {
    n: "01",
    icon: MessageSquare,
    title: "Talk",
    body: "Describe the company in plain language. About ten minutes.",
  },
  {
    n: "02",
    icon: Map,
    title: "Map",
    body: "See it connected. Fix what’s wrong — history stays labeled.",
  },
  {
    n: "03",
    icon: Users,
    title: "Share",
    body: "Ask why with a trail. Invite someone — propose, approve, live.",
  },
];

/** Ongoing returns — different job from day-one deliverables. */
const returns = [
  {
    icon: Clock,
    title: "Less reconstruction",
    body: "Decisions stay findable. Stop re-litigating last month’s call in this week’s meeting.",
  },
  {
    icon: HelpCircle,
    title: "Faster answers",
    body: "Who owns this? Why did we decide that? Seconds — not Slack archaeology.",
  },
  {
    icon: Share2,
    title: "Shared truth",
    body: "Propose → approve → live for everyone. No more per-person islands of “the truth.”",
  },
  {
    icon: Eye,
    title: "Honest AI",
    body: "Belief, confidence, and sources — never “the AI said it’s true, trust us.”",
  },
  {
    icon: Shield,
    title: "Memory that stays",
    body: "When people leave, their context doesn’t walk out the door with them.",
  },
  {
    icon: Receipt,
    title: "Evidence you can show",
    body: "Board, partner, or new hire — a trail beats a slide deck of vibes.",
  },
];

const heroStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: easeOut },
  },
};

export function HomePage() {
  usePageTitle("Bizdaptive — Operational autopilot for AI-native organizations");

  return (
    <>
      <section
        className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-16 text-center sm:px-8"
        style={{ background: "var(--hero-veil)" }}
      >
        <motion.div
          className="pointer-events-none absolute -right-24 top-16 sm:-right-16 sm:top-10"
          aria-hidden
          initial={{ opacity: 0, rotate: -8, scale: 0.92 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: easeOut }}
        >
          <SpiralWatermark size={520} animate className="sm:hidden" />
          <SpiralWatermark size={640} animate className="hidden sm:block" />
        </motion.div>

        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-3xl"
        >
          <motion.div
            variants={heroItem}
            className="mx-auto mb-7 inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-xs backdrop-blur"
            style={{
              borderColor: "var(--line)",
              background: "var(--card)",
              color: "var(--fg-muted)",
            }}
          >
            <BrandLogo size={16} animate />
            Operational autopilot for AI-native organizations
          </motion.div>

          <motion.h1
            variants={heroItem}
            className="text-4xl font-bold tracking-tight sm:text-5xl md:text-[3.15rem] md:leading-[1.1]"
            style={{ color: "var(--fg)" }}
          >
            Your organization is one thing.
            <br />
            <span className="accent-text">Nothing runs it as one.</span>
          </motion.h1>

          <motion.p
            variants={heroItem}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--fg-muted)" }}
          >
            Bizdaptive holds one honest, living picture of your company — who decided what, why,
            who owns it, and what&apos;s actually happening. It gets truer the more your team uses it.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            <Button to="/contact" showArrow>
              Request early access
            </Button>
            <Button to="/how-it-works" variant="ghost">
              See the product
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Day one — what lands in your hands immediately */}
      <SectionReveal
        variant="slideLeft"
        className="px-5 py-24 sm:px-8"
        style={{ background: "var(--bg-soft)" }}
      >
        <div className="mx-auto max-w-5xl">
          <SectionHeader className="text-center" replay>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              Day one
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              What you have the moment you start.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: "var(--fg-muted)" }}>
              After a short conversation — not a three-day workshop — these are in your hands.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {dayOne.map((item, i) => (
              <AnimatedCard
                key={item.title}
                delay={i * 0.08}
                from={i % 2 === 0 ? "left" : "right"}
                replay
                className="p-6 text-left sm:p-7"
              >
                <HoverIcon icon={item.icon} variant="float" color="var(--accent)" />
                <h3 className="text-lg font-semibold" style={{ color: "var(--fg)" }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {item.body}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal
        variant="clip"
        className="px-5 py-24 sm:px-8"
        style={{ background: "var(--bg)" }}
      >
        <div className="mx-auto max-w-5xl">
          <SectionHeader className="text-center" replay>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              How it works
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              Talk. Map. Share.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: "var(--fg-muted)" }}>
              Three moves. That’s the path from conversation to a shared company picture.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {steps.map((s, i) => (
              <AnimatedCard
                key={s.n}
                delay={i * 0.1}
                from="left"
                replay
                className="p-6 text-left"
              >
                <HoverIcon icon={s.icon} variant="float" color="var(--accent)" />
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

          <div className="mt-12 text-center">
            <Button to="/how-it-works" showArrow>
              Full walkthrough
            </Button>
          </div>
        </div>
      </SectionReveal>

      {/* Ongoing ROI — different job from day-one deliverables */}
      <SectionReveal
        variant="cascade"
        className="px-5 py-24 sm:px-8"
        style={{ background: "var(--bg-soft)" }}
      >
        <div className="mx-auto max-w-5xl text-center">
          <motion.div variants={cascadeItem}>
            <SectionHeader replay>
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--accent)" }}
              >
                Over time
              </p>
              <h2
                className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: "var(--fg)" }}
              >
                Returns you can feel.
              </h2>
              <p
                className="mx-auto mt-5 max-w-2xl text-base leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                Day one gives you the picture. Keeping it shared is what gives time back.
              </p>
            </SectionHeader>
          </motion.div>

          <div className="mt-14 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
            {returns.map((card) => (
              <motion.div key={card.title} variants={cascadeItem}>
                <AnimatedCard replay className="group h-full p-6 text-left">
                  <HoverIcon icon={card.icon} variant="pulse" color="var(--accent)" />
                  <h3 className="text-lg font-semibold" style={{ color: "var(--fg)" }}>
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                    {card.body}
                  </p>
                </AnimatedCard>
              </motion.div>
            ))}
          </div>

          <motion.div variants={cascadeItem} className="mt-12">
            <Button to="/returns" variant="ghost" showArrow>
              Full breakdown
            </Button>
          </motion.div>
        </div>
      </SectionReveal>

      <SectionReveal
        variant="scale"
        className="px-5 pb-16 pt-8 sm:px-8"
        style={{ background: "var(--bg)" }}
      >
        <motion.div
          whileHover={{ y: -4 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border px-6 py-16 text-center sm:px-12 sm:py-20"
          style={{
            borderColor: "var(--line)",
            background: "var(--card-solid)",
            boxShadow: "0 0 80px var(--cta-glow)",
          }}
        >
          <div className="pointer-events-none absolute right-8 top-8 opacity-40" aria-hidden>
            <BrandLogo size={48} animate />
          </div>
          <div className="relative z-10">
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              style={{ color: "var(--fg)" }}
            >
              Ready to see your org without the fog?
            </h2>
            <p
              className="mx-auto mt-4 max-w-md text-base"
              style={{ color: "var(--fg-muted)" }}
            >
              Bring curiosity. Leave with a clearer picture — and a few receipts.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button to="/contact" showArrow>
                Request early access
              </Button>
              <Button to="/about" variant="ghost">
                About us
              </Button>
            </div>
          </div>
        </motion.div>
      </SectionReveal>
    </>
  );
}
