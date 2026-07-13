import {
  Brain,
  Map,
  MessageSquare,
  Receipt,
  RefreshCw,
  Shield,
  Sparkles,
  Tag,
  TrendingUp,
  UserPlus,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { BrandLogo, SpiralWatermark } from "../components/BrandMark";
import { Button } from "../components/Button";
import { HoverIcon } from "../components/HoverIcon";
import { TiltCard } from "../components/About3D";
import {
  CompanyGraphHero,
  DepthStepCard,
  FogCtaShell,
  StampCard,
} from "../components/Site3D";
import {
  SectionHeader,
  SectionReveal,
  cascadeItem,
  easeOut,
} from "../components/motion";
import { usePageTitle } from "../hooks/usePageTitle";

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

const roi = [
  {
    icon: Brain,
    title: "Never lose what your organization learns",
    body: "Every decision, interaction, and lesson becomes part of your organization's permanent knowledge.",
  },
  {
    icon: Sparkles,
    title: "Make better decisions with complete context",
    body: "Give your people and your AI the confidence to act with the full picture — not fragmented information.",
  },
  {
    icon: RefreshCw,
    title: "Stop repeating the same mistakes",
    body: "Capture every decision once, learn from every outcome, and never solve the same problem twice.",
  },
  {
    icon: TrendingUp,
    title: "Turn every interaction into a competitive advantage",
    body: "Every meeting, approval, customer conversation, and workflow strengthens your organization's intelligence over time.",
  },
  {
    icon: Shield,
    title: "Build an organization that gets smarter every day",
    body: "The longer you use Bizdaptive, the more context, knowledge, and organizational instinct you accumulate.",
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
  usePageTitle("Bizdaptive — Revolutionizing, Evidence-Driven organizational instinct");

  return (
    <>
      <section
        className="relative flex min-h-[calc(100svh-4rem)] flex-col items-center justify-center overflow-hidden px-5 pb-24 pt-16 text-center sm:px-8"
        style={{ background: "var(--hero-veil)" }}
      >
        <motion.div
          className="pointer-events-none absolute -left-28 bottom-8 opacity-50 sm:-left-16"
          aria-hidden
          initial={{ opacity: 0, rotate: 6 }}
          animate={{ opacity: 0.5, rotate: 0 }}
          transition={{ duration: 1.2, ease: easeOut }}
        >
          <SpiralWatermark size={320} animate className="hidden sm:block" />
        </motion.div>

        <CompanyGraphHero />

        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-3xl lg:mr-auto lg:max-w-xl lg:text-left xl:ml-[8%]"
        >
          <motion.div
            variants={heroItem}
            className="mx-auto mb-7 inline-flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 text-xs backdrop-blur lg:mx-0"
            style={{
              borderColor: "var(--line)",
              background: "var(--card)",
              color: "var(--fg-muted)",
            }}
          >
            <BrandLogo size={16} animate />
            Revolutionizing, Evidence-Driven organizational instinct
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
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg lg:mx-0"
            style={{ color: "var(--fg-muted)" }}
          >
            Bizdaptive continuously learns how your organization works. This creates a compounding
            impact over time so that every person and every AI have the context they need to make
            better decisions — backed by proof, confidence, and clarity.
          </motion.p>

          <motion.div
            variants={heroItem}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            <Button to="/contact?intent=waitlist" showArrow>
              Join the waitlist
            </Button>
            <Button to="/how-it-works" variant="ghost">
              See how it works
            </Button>
          </motion.div>
        </motion.div>
      </section>

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
                ROI you can feel
              </p>
              <h2
                className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: "var(--fg)" }}
              >
                Compounding organizational intelligence.
              </h2>
              <p
                className="mx-auto mt-5 max-w-2xl text-base leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                Every day on Bizdaptive makes the next decision clearer — for people and AI alike.
              </p>
            </SectionHeader>
          </motion.div>

          <div className="mt-14 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
            {roi.map((card, i) => (
              <motion.div
                key={card.title}
                variants={cascadeItem}
                className={card === roi[4] ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : undefined}
              >
                <TiltCard delay={i * 0.04} className="h-full p-6 text-left">
                  <HoverIcon icon={card.icon} variant="pulse" color="var(--accent)" />
                  <h3 className="text-lg font-semibold" style={{ color: "var(--fg)" }}>
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                    {card.body}
                  </p>
                </TiltCard>
              </motion.div>
            ))}
          </div>

          <motion.div variants={cascadeItem} className="mt-12">
            <Button to="/roi" variant="ghost" showArrow>
              Full breakdown
            </Button>
          </motion.div>
        </div>
      </SectionReveal>

      <SectionReveal
        variant="slideLeft"
        className="px-5 py-24 sm:px-8"
        style={{ background: "var(--bg)" }}
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
              <StampCard
                key={item.title}
                delay={i * 0.08}
                className="p-6 text-left sm:p-7"
              >
                <HoverIcon icon={item.icon} variant="float" color="var(--accent)" />
                <h3 className="text-lg font-semibold" style={{ color: "var(--fg)" }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {item.body}
                </p>
              </StampCard>
            ))}
          </div>
        </div>
      </SectionReveal>

      <SectionReveal
        variant="clip"
        className="px-5 py-24 sm:px-8"
        style={{ background: "var(--bg-soft)" }}
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

          <div
            className="mt-12 grid gap-4 sm:grid-cols-3"
            style={{ perspective: 1000 }}
          >
            {steps.map((s, i) => (
              <DepthStepCard key={s.n} index={i} className="p-6 text-left">
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
              </DepthStepCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/how-it-works" showArrow>
              Full walkthrough
            </Button>
          </div>
        </div>
      </SectionReveal>

      <SectionReveal
        variant="scale"
        className="px-5 pb-16 pt-8 sm:px-8"
        style={{ background: "var(--bg)" }}
      >
        <FogCtaShell>
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
                Join the waitlist. Bring curiosity — leave with proof, confidence, and clarity.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
                <Button to="/contact?intent=waitlist" showArrow>
                  Join the waitlist
                </Button>
                <Button to="/about" variant="ghost">
                  About us
                </Button>
              </div>
            </div>
          </motion.div>
        </FogCtaShell>
      </SectionReveal>
    </>
  );
}
