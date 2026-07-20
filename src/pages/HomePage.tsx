import {
  Brain,
  Map,
  Receipt,
  Shield,
  Sparkles,
  Tag,
  UserPlus,
} from "lucide-react";
import { motion } from "framer-motion";
import { BrandLogo, SpiralWatermark } from "../components/BrandMark";
import { Button } from "../components/Button";
import { FogCtaShell } from "../components/Site3D";
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
    body: "People, products, and goals, connected from your perspective. Not a wiki page you wrote once and forgot.",
  },
  {
    icon: Receipt,
    title: "Your first decision receipt",
    body: "Who decided, why, and what it was for, stamped before the next meeting starts.",
  },
  {
    icon: Tag,
    title: "Honest labels",
    body: "What’s stated, what’s guessed, what’s still unknown. No fake certainty.",
  },
  {
    icon: UserPlus,
    title: "A seat ready for the next person",
    body: "When a teammate joins, they land in the same picture, not a blank slate.",
  },
];

/** Home shows the three pillars; full six live on /with-bizdaptive. */
const roiHome = [
  {
    icon: Brain,
    title: "Never lose what your business learns",
    body: "Every decision, interaction, and lesson becomes part of your business's permanent knowledge.",
  },
  {
    icon: Sparkles,
    title: "Make better decisions with complete context",
    body: "Give your people and your AI agents the confidence to act with the full picture, not fragmented information.",
  },
  {
    icon: Shield,
    title: "Build an business that gets smarter every day",
    body: "The longer you use Bizdaptive, the more context, knowledge, and business instinct you accumulate.",
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
  usePageTitle("Adaptive Business Instinct | Bizdaptive");

  return (
    <>
      <section
        className="relative flex flex-col items-center justify-center overflow-x-clip px-5 pb-20 pt-14 sm:px-8 sm:pb-24 sm:pt-16 md:min-h-[calc(100svh-4rem)]"
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

        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 text-center lg:grid-cols-[1.2fr_0.8fr] lg:text-left"
        >
          <div>
            <motion.h1
              variants={heroItem}
              className="text-4xl font-bold tracking-tight sm:text-5xl md:text-[3.15rem] md:leading-[1.1]"
              style={{ color: "var(--fg)" }}
            >
              Adaptive Business Instinct
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg lg:mx-0"
              style={{ color: "var(--fg-muted)" }}
            >
              Bizdaptive continuously learns how your business works. This creates a compounding
              impact over time so that every person and every AI agent has the context needed to
              make better decisions, backed by proof, confidence, and clarity.
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
          </div>

          <div className="hero-cube-stage">
            <div
              className="hero-cube-container"
              role="img"
              aria-label="Business instinct connects decisions, evidence, context, authority, execution, and learning."
            >
              <div className="hero-cube-scaler">
                <div className="hero-cube">
                  <div className="hero-cube__face hero-cube__face--front">
                    <strong>Decisions</strong>
                    <span>What the business chooses</span>
                  </div>
                  <div className="hero-cube__face hero-cube__face--right">
                    <strong>Evidence</strong>
                    <span>Why it makes those choices</span>
                  </div>
                  <div className="hero-cube__face hero-cube__face--top">
                    <strong>Context</strong>
                    <span>What the business understands</span>
                  </div>
                  <div className="hero-cube__face hero-cube__face--back">
                    <strong>Authority</strong>
                    <span>Who can make decisions</span>
                  </div>
                  <div className="hero-cube__face hero-cube__face--left">
                    <strong>Execution</strong>
                    <span>What happens next</span>
                  </div>
                  <div className="hero-cube__face hero-cube__face--bottom">
                    <strong>Learning</strong>
                    <span>What compounds over time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                With Bizdaptive you will be able to
              </p>
              <h2
                className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: "var(--fg)" }}
              >
                Use your business's instinct intelligently always.
              </h2>
              <p
                className="mx-auto mt-5 max-w-2xl text-base leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                Every day on Bizdaptive makes the next action clearer for people and AI agents alike.
              </p>
            </SectionHeader>
          </motion.div>

          <div className="insight-card-grid mt-14">
            {roiHome.map((card) => (
              <motion.article
                key={card.title}
                variants={cascadeItem}
                className="insight-card"
              >
                <div className="insight-card__front">
                  <span className="insight-card__icon">
                    <card.icon size={23} strokeWidth={1.6} aria-hidden />
                  </span>
                  <h3 className="insight-card__front-title">
                    {card.title}
                  </h3>
                </div>
                <div className="insight-card__reveal">
                  <card.icon className="size-7" strokeWidth={1.5} aria-hidden />
                  <h3 className="insight-card__reveal-title">{card.title}</h3>
                  <p className="insight-card__body">
                    {card.body}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>

          <motion.div variants={cascadeItem} className="mt-12">
            <Button to="/with-bizdaptive" variant="ghost" showArrow>
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
              After a short conversation and the most minimal information given.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {dayOne.map((item) => (
              <motion.article
                key={item.title}
                variants={cascadeItem}
                className="day-one-card"
              >
                <div className="day-one-card__back">
                  <div className="day-one-card__content">
                    <p className="text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                      {item.body}
                    </p>
                  </div>
                </div>
                <div className="day-one-card__front">
                  <item.icon className="day-one-card__front-icon" strokeWidth={1.5} aria-hidden />
                  <h3 className="day-one-card__front-title">{item.title}</h3>
                </div>
              </motion.article>
            ))}
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
                Join the waitlist. Bring curiosity and leave with proof, confidence, and clarity.
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
