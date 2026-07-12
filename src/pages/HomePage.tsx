import {
  Eye,
  FileStack,
  Layers,
  Map,
  Receipt,
  Share2,
  Split,
  UserRound,
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

const pains = [
  {
    icon: Split,
    title: "Decision splinters",
    body: "Model run in Claude → agency sign-off → Slack approval → regulator asks six months later → weeks to reconstruct.",
  },
  {
    icon: FileStack,
    title: "Spec lives in three places",
    body: "Half the decision never made it to the brief. Spend follows the wrong plan.",
  },
  {
    icon: Layers,
    title: "Pivot decided, immediately lost",
    body: "Strategy changes on a call. Engineering builds the old plan for two weeks.",
  },
];

const steps = [
  {
    n: "01",
    icon: UserRound,
    title: "Tell us who you are",
    body: "Role and authority shape the conversation. Different seats get different depth — we ask once.",
  },
  {
    n: "02",
    icon: Layers,
    title: "Describe your company",
    body: "People, products, goals, metrics — in plain language. The picture starts taking shape.",
  },
  {
    n: "03",
    icon: Map,
    title: "Live in the map",
    body: "Navigate Structure and Dynamics. Ask why. Add context. Invite the team.",
  },
];

const outcomes = [
  {
    icon: Receipt,
    title: "Governed decision records",
    body: "Who decided, why, and what it was for — a trail you can walk, not a vibe.",
  },
  {
    icon: Map,
    title: "Living company map",
    body: "People, products, goals, channels — connected. Shape and movement in one place.",
  },
  {
    icon: Eye,
    title: "Evidence trails",
    body: "What you told us, what we inferred, what we don’t know yet — with confidence and sources.",
  },
  {
    icon: Share2,
    title: "Shared org state",
    body: "Not per-user islands. What the team approves is what everyone sees.",
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
      {/* Hero — blur + staggered rise */}
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
            <Button to="/product" variant="ghost">
              See the product
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Problem — cascade stagger (cards rise one-by-one) */}
      <SectionReveal
        variant="cascade"
        className="px-5 py-24 sm:px-8"
        style={{ background: "var(--bg)" }}
      >
        <div className="mx-auto max-w-5xl text-center">
          <motion.div variants={cascadeItem}>
            <SectionHeader replay>
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--teal)" }}
              >
                Problem
              </p>
              <h2
                className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ color: "var(--fg)" }}
              >
                Your firm makes 30+ decisions a week.
                <br className="hidden sm:block" /> None of them live in one place tomorrow.
              </h2>
              <p
                className="mx-auto mt-5 max-w-2xl text-base leading-relaxed"
                style={{ color: "var(--fg-muted)" }}
              >
                The problem isn&apos;t “AI vs governance.” It&apos;s an organization that can&apos;t operate as
                one across Slack, email, AI tools, and hallway conversations.
              </p>
            </SectionHeader>
          </motion.div>

          <div className="mt-14 grid gap-4 text-left sm:grid-cols-3">
            {pains.map((card) => (
              <motion.div key={card.title} variants={cascadeItem}>
                <AnimatedCard replay className="group h-full p-6 text-left">
                  <HoverIcon icon={card.icon} variant="shake" color="var(--teal)" />
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
            <Button to="/problem" variant="ghost" showArrow>
              Explore the problem
            </Button>
          </motion.div>
        </div>
      </SectionReveal>

      {/* How it works — slide in from left */}
      <SectionReveal
        variant="slideLeft"
        className="px-5 py-24 sm:px-8"
        style={{ background: "var(--bg-soft)" }}
      >
        <div className="mx-auto max-w-5xl">
          <SectionHeader className="text-center" replay>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--sky)" }}
            >
              How it works
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              From conversation to a map you can run.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: "var(--fg-muted)" }}>
              Three steps. No re-onboarding every time the org changes its mind.
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
                <HoverIcon icon={s.icon} variant="float" color="var(--sky)" />
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
            <Button to="/product" showArrow>
              See the product
            </Button>
          </div>
        </div>
      </SectionReveal>

      {/* What you get — clip-path reveal */}
      <SectionReveal
        variant="clip"
        className="px-5 py-24 sm:px-8"
        style={{ background: "var(--bg)" }}
      >
        <div className="mx-auto max-w-5xl">
          <SectionHeader className="text-center" replay>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--teal)" }}
            >
              What you get
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              An honest, living picture — with receipts.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: "var(--fg-muted)" }}>
              Dashboards show numbers. Wikis store documents. Bizdaptive connects decisions, people,
              goals, and evidence into one map you can question and act on.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {outcomes.map((card, i) => (
              <AnimatedCard
                key={card.title}
                delay={i * 0.08}
                from={i % 2 === 0 ? "left" : "right"}
                replay
                className="p-6 sm:p-7 text-left"
              >
                <HoverIcon icon={card.icon} variant="pulse" color="var(--teal)" />
                <h3 className="text-lg font-semibold" style={{ color: "var(--fg)" }}>
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {card.body}
                </p>
              </AnimatedCard>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/capabilities" variant="ghost" showArrow>
              Explore capabilities
            </Button>
          </div>
        </div>
      </SectionReveal>

      {/* Closing CTA — scale + spring */}
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
              Request early access or book a founder demo. Bring curiosity — leave with a clearer
              picture.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <Button to="/contact" showArrow>
                Request early access
              </Button>
              <Button to="/contact" variant="ghost">
                Book a founder demo
              </Button>
            </div>
          </div>
        </motion.div>
      </SectionReveal>
    </>
  );
}
