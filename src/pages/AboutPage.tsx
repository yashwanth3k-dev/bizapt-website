import {
  Brain,
  Building2,
  Compass,
  Eye,
  Heart,
  Layers,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "../components/About3D";
import { Button } from "../components/Button";
import { HoverIcon } from "../components/HoverIcon";
import { SectionHeader, easeOut } from "../components/motion";
import { usePageTitle } from "../hooks/usePageTitle";

const story = [
  {
    icon: Building2,
    label: "The problem",
    title: "Information everywhere. Memory nowhere.",
    body: "As organizations grow, decisions scatter across meetings, email, chat, docs, and a few people’s heads. Context gets lost. Knowledge walks out the door.",
  },
  {
    icon: Layers,
    label: "What we’re building",
    title: "The AI Operating System for Companies.",
    body: "A living operational layer that preserves context, keeps accountability, and learns from every decision and interaction — not another place to dump files.",
  },
  {
    icon: TrendingUp,
    label: "What compounds",
    title: "Organizational intelligence that lasts.",
    body: "Every decision. Every interaction. Every outcome. Experience doesn’t disappear — it becomes Compounding Organizational Intelligence.",
  },
];

const beliefs = [
  {
    icon: Heart,
    title: "Judgment, strengthened",
    body: "Technology shouldn't replace human judgment. It should strengthen it.",
  },
  {
    icon: Eye,
    title: "Evidence over memory",
    body: "Organizations shouldn't rely on memory. They should rely on evidence.",
  },
  {
    icon: Compass,
    title: "Context & accountability",
    body: "Every decision should have context. Every action should have accountability. Every outcome should become institutional knowledge.",
  },
];

const founders = [
  {
    name: "Sudarshan",
    say: "S",
    role: "Co-founder",
    tag: "Systems Thinker · Precision-Driven",
    body: "Sudarshan is the engineer behind Bizdaptive's foundation. He architects the systems that make complex problems feel simple — building scalable, reliable infrastructure that enables the platform to grow without compromising performance. He believes the best architecture is the one users never have to think about.",
  },
  {
    name: "Akil Srikanth",
    say: "A",
    role: "Co-founder",
    tag: "Vision-Led · Customer-Obsessed",
    body: "Akil focuses on connecting technology with real business problems. From shaping the product vision and brand to working closely with customers, partnerships, and growth, he ensures every idea is driven by purpose and every decision creates long-term value. He believes great companies aren't built by adding more features — they're built by solving the right problems.",
  },
  {
    name: "Yashwanth",
    say: "Y",
    role: "Co-founder",
    tag: "Design-Led · Experience-Driven",
    body: "Yashwanth believes exceptional products are defined by how they make people feel, not just what they do. He transforms complex ideas into intuitive, elegant experiences by combining thoughtful design with frontend engineering. His philosophy is simple: great software doesn't demand attention — it earns trust through clarity, simplicity, and consistency.",
  },
];

function SayLetter({ letter }: { letter: string }) {
  return (
    <span
      className="inline-flex size-14 items-center justify-center rounded-2xl text-xl font-bold"
      style={{
        background: "color-mix(in srgb, var(--accent) 12%, transparent)",
        color: "var(--accent)",
      }}
      aria-hidden
    >
      {letter}
    </span>
  );
}

function SayName({ name, letter }: { name: string; letter: string }) {
  const first = name[0] ?? "";
  const rest = name.slice(1);
  return (
    <h3 className="text-xl font-semibold" style={{ color: "var(--fg)" }}>
      <span style={{ color: "var(--accent)" }}>{first}</span>
      {rest}
      <span className="sr-only"> ({letter} in SAY)</span>
    </h3>
  );
}

export function AboutPage() {
  usePageTitle("About us — Bizdaptive");

  return (
    <div style={{ background: "var(--bg)" }}>
      <header className="relative overflow-hidden px-5 pb-6 pt-14 text-center sm:px-8 sm:pt-16">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.55, ease: easeOut }}
          className="relative z-10 mx-auto max-w-3xl"
        >
          <p
            className="text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "var(--accent)" }}
          >
            About us
          </p>
          <h1
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-tight"
            style={{ color: "var(--fg)" }}
          >
            We build systems that remember.
          </h1>
          <p
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: "var(--fg-muted)" }}
          >
            Every company has information. Very few have institutional memory.
          </p>
        </motion.div>
      </header>

      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-4 md:grid-cols-3">
            {story.map((card, i) => (
              <TiltCard key={card.label} delay={i * 0.08} className="flex h-full flex-col p-6 sm:p-7">
                <HoverIcon icon={card.icon} variant="float" color="var(--accent)" />
                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.16em]"
                  style={{ color: "var(--accent)" }}
                >
                  {card.label}
                </p>
                <h3
                  className="mt-2 text-lg font-semibold tracking-tight sm:text-xl"
                  style={{ color: "var(--fg)" }}
                >
                  {card.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {card.body}
                </p>
              </TiltCard>
            ))}
          </div>

          <div className="mt-4">
            <TiltCard
              delay={0.28}
              className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:gap-6 sm:p-8"
            >
              <span
                className="inline-flex size-12 shrink-0 items-center justify-center rounded-2xl"
                style={{
                  background: "color-mix(in srgb, var(--accent) 12%, transparent)",
                  color: "var(--accent)",
                }}
              >
                <Brain size={22} strokeWidth={1.5} aria-hidden />
              </span>
              <div>
                <p className="text-base font-semibold sm:text-lg" style={{ color: "var(--fg)" }}>
                  We&apos;re not building another tool to store information.
                </p>
                <p className="mt-1 text-sm leading-relaxed sm:text-base" style={{ color: "var(--fg-muted)" }}>
                  We&apos;re building a system that helps organizations understand themselves —
                  and we believe organizations deserve better than Slack archaeology.
                </p>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8" style={{ background: "var(--bg-soft)" }}>
        <div className="mx-auto max-w-5xl">
          <SectionHeader className="mb-10 text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              What we believe
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              Organizations that learn faster outperform those that only work harder.
            </h2>
          </SectionHeader>
          <div className="grid gap-4 sm:grid-cols-3">
            {beliefs.map((p, i) => (
              <TiltCard key={p.title} delay={i * 0.08} className="p-6">
                <HoverIcon icon={p.icon} variant="tilt" color="var(--accent)" />
                <h3 className="text-lg font-semibold" style={{ color: "var(--fg)" }}>
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {p.body}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader className="mb-10 text-center">
            <HoverIcon icon={Users} variant="pulse" color="var(--accent)" className="mx-auto" />
            <p
              className="mt-2 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              Meet the team
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              Three co-founders. One idea.{" "}
              <span className="accent-text">SAY.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "var(--fg-muted)" }}>
              <span style={{ color: "var(--accent)" }} className="font-semibold">
                S
              </span>
              udarshan ·{" "}
              <span style={{ color: "var(--accent)" }} className="font-semibold">
                A
              </span>
              kil ·{" "}
              <span style={{ color: "var(--accent)" }} className="font-semibold">
                Y
              </span>
              ashwanth — easy to remember.
            </p>
          </SectionHeader>

          <div className="grid gap-4 sm:grid-cols-3">
            {founders.map((f, i) => (
              <TiltCard key={f.name} delay={i * 0.1} className="p-7 sm:p-8">
                <SayLetter letter={f.say} />
                <div className="mt-5">
                  <SayName name={f.name.split(" ")[0]!} letter={f.say} />
                  {f.name.includes(" ") && (
                    <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                      {f.name.split(" ").slice(1).join(" ")}
                    </p>
                  )}
                </div>
                <p
                  className="mt-1 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--fg-faint)" }}
                >
                  {f.role}
                </p>
                <p className="mt-1 text-xs font-medium" style={{ color: "var(--accent)" }}>
                  {f.tag}
                </p>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {f.body}
                </p>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8" style={{ background: "var(--bg-soft)" }}>
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
          <TiltCard className="p-8">
            <HoverIcon icon={Target} variant="float" color="var(--accent)" />
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              Our mission
            </p>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              To transform every decision, interaction, and outcome into Compounding Organizational
              Intelligence — helping organizations make better decisions, strengthen accountability,
              and continuously improve.
            </p>
          </TiltCard>
          <TiltCard delay={0.08} className="p-8">
            <HoverIcon icon={Lightbulb} variant="bounce" color="var(--accent)" />
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              Our vision
            </p>
            <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              To build the AI Operating System for Companies — a future where every organization has
              a living operational layer that understands, learns, and continuously adapts.
            </p>
          </TiltCard>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.15fr] lg:gap-14">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, ease: easeOut }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "var(--accent)" }}
              >
                Looking ahead
              </p>
              <h2
                className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-tight"
                style={{ color: "var(--fg)" }}
              >
                Intelligence that compounds.
              </h2>
              <p className="mt-5 text-sm leading-relaxed" style={{ color: "var(--fg-faint)" }}>
                Every organization generates knowledge. Bizdaptive ensures it compounds.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/contact?intent=waitlist" showArrow>
                  Join the waitlist
                </Button>
                <Button to="/roi" variant="ghost">
                  ROI you can feel
                </Button>
              </div>
            </motion.div>

            <div className="space-y-4">
              <TiltCard className="p-6 sm:p-8" delay={0.08}>
                <p className="text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  We envision a future where every organization has a system that doesn&apos;t just
                  store information — it understands context, learns from experience, and helps
                  people make better decisions every day.
                </p>
                <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  A future where knowledge never walks out the door. Where accountability is built
                  into every decision. Where every interaction makes the organization smarter than
                  it was yesterday.
                </p>
              </TiltCard>

              <TiltCard
                delay={0.16}
                className="p-6 sm:p-7"
              >
                <div
                  className="mb-4 h-1 w-12 rounded-full"
                  style={{ background: "var(--accent)" }}
                  aria-hidden
                />
                <p
                  className="text-lg font-semibold leading-snug tracking-tight sm:text-xl"
                  style={{ color: "var(--fg)" }}
                >
                  The companies that lead tomorrow won&apos;t be the ones with the most data.
                </p>
                <p className="mt-2 text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  They&apos;ll be the ones whose intelligence compounds over time.
                </p>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
