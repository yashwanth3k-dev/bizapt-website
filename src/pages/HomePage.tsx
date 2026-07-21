import {
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
import { usePageSeo } from "../hooks/usePageTitle";

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
    icon: Sparkles,
    title: "Decide with the full picture",
    body: "Decision intelligence for your team: context, ownership, and evidence before the next call or action.",
  },
  {
    icon: Receipt,
    title: "Trace every answer back to why",
    body: "Decision receipts show who decided, what they knew, and what happened after. Judgment with proof, not another archive.",
  },
  {
    icon: Shield,
    title: "Stop repeating the same work",
    body: "When the living company map updates, the next person starts from clarity, not a blank slate.",
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
  usePageSeo({
    title: "Bizdaptive | Decision Intelligence & Living Company Map",
    description:
      "Bizdaptive is decision intelligence for growing companies: a living company map, decision receipts, and shared business context so teams decide with proof and clarity.",
    path: "/",
  });

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
              Bizdaptive is decision intelligence for growing companies: a living company map that
              connects people, goals, and choices, with decision receipts so teams act with proof,
              confidence, and clarity.
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
                Clearer decisions. Stronger accountability. Shared instinct.
              </h2>
              <p
                className="mx-auto mt-5 max-w-2xl text-base leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                A living company map that keeps decision context shared across the team.
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
                Ready for decisions without the fog?
              </h2>
              <p
                className="mx-auto mt-4 max-w-md text-base"
                style={{ color: "var(--fg-muted)" }}
              >
                Join the waitlist. See a living company picture, not another place to dump files.
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
