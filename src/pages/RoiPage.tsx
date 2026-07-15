import {
  BookOpen,
  Bot,
  Brain,
  BrainCircuit,
  CheckSquare,
  Crown,
  LayoutDashboard,
  Network,
  RefreshCw,
  Shield,
  Sparkles,
  TrendingUp,
  UserPlus,
} from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/Button";
import { SectionHeader, easeOut } from "../components/motion";
import { usePageTitle } from "../hooks/usePageTitle";

const roi = [
  {
    icon: Brain,
    title: "Never lose what your organization learns",
    body: "Every decision, interaction, and lesson becomes part of your organization's permanent knowledge.",
  },
  {
    icon: BrainCircuit,
    title: "Instinct is memory compiled for action",
    body: "Bizdaptive compresses situations, choices, rationales, outcomes, and values into shared priors your organization owns, ready for every person and AI agent at the next decision.",
  },
  {
    icon: Sparkles,
    title: "Make better decisions with complete context",
    body: "Give your people and your AI agents the confidence to act with the full picture, not fragmented information.",
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

const stakeholders = [
  {
    icon: Crown,
    role: "Founder / CEO",
    line: "Stop being the human API for your own company.",
    body: "Explain the org once. Get hours back every week. Show the board a trail, not a scavenger hunt.",
  },
  {
    icon: Network,
    role: "Manager / lead",
    line: "One map the team can question without a weekly re-onboarding.",
    body: "Fewer alignment meetings. Catch KPI drift earlier. Contradictions surface before they become bugs.",
  },
  {
    icon: UserPlus,
    role: "Joiner / teammate",
    line: "Land somewhere that already expected you.",
    body: "Hours to situational awareness, not weeks of tribal knowledge. See why things are the way they are.",
  },
];

const numbers = [
  {
    metric: "Time to answer “why did we decide X?”",
    today: "Hours to days",
    withUs: "Minutes",
    note: "Trail on the map",
  },
  {
    metric: "Time for a joiner to get “how we work”",
    today: "1–2 weeks",
    withUs: "Hours",
    note: "Shared picture, not hallway lore",
  },
  {
    metric: "Time to fix a wrong org fact",
    today: "Often never",
    withUs: "Seconds",
    note: "Correct anytime; history stays",
  },
  {
    metric: "Founder context-transfer per week",
    today: "3–8+ hours",
    withUs: "Compounds down",
    note: "Internal model for small orgs",
  },
];

const vs = [
  {
    icon: BookOpen,
    title: "Wikis & docs",
    get: "Pages you write",
    miss: "A living, shared company picture with approvals",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards",
    get: "Numbers",
    miss: "Who decided, why, and what’s behind the belief",
  },
  {
    icon: Bot,
    title: "Chat AI alone",
    get: "Fast answers",
    miss: "Persistent multi-person memory of your org",
  },
  {
    icon: CheckSquare,
    title: "Task tools",
    get: "Tickets",
    miss: "Strategy-to-execution in one connected map",
  },
];

export function RoiPage() {
  usePageTitle("With Bizdaptive you will be able to | Bizdaptive");

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="With Bizdaptive you will be able to"
        accent="accent"
        title="Use your organization's instinct intelligently always."
        lead="Every decision, interaction, and outcome becomes lasting advantage, so people and AI agents act with proof, confidence, and clarity."
      />

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="roi-focus-grid">
            {roi.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.06, duration: 0.45, ease: easeOut }}
              >
                <article className="roi-focus-card">
                  <card.icon className="size-7" strokeWidth={1.5} aria-hidden />
                  <h3 className="mt-4 text-lg font-semibold">
                    {card.title}
                  </h3>
                  <p className="roi-focus-card__body mt-2 text-sm leading-relaxed">
                    {card.body}
                  </p>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8" style={{ background: "var(--bg-soft)" }}>
        <div className="mx-auto max-w-5xl">
          <SectionHeader className="text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              By seat
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              Same map. Different payday.
            </h2>
          </SectionHeader>

          <div className="payday-card-grid mt-12">
            {stakeholders.map((s, i) => (
              <motion.div
                key={s.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: easeOut }}
              >
                <article className="payday-card">
                  <div className="payday-card__icon">
                    <s.icon className="size-7" strokeWidth={1.6} aria-hidden />
                  </div>
                  <div className="payday-card__content">
                    <p className="payday-card__role">{s.role}</p>
                    <h3>{s.line}</h3>
                    <p className="payday-card__body">{s.body}</p>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader className="text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              By the numbers
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              Directional, not a promise carved in stone.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm" style={{ color: "var(--fg-muted)" }}>
              Internal model for design-partner conversations. Real orgs vary. We&apos;re honest about that.
            </p>
          </SectionHeader>

          <div className="mt-8 grid gap-3 sm:hidden">
            {numbers.map((row, i) => (
              <motion.article
                key={row.metric}
                className="rounded-2xl border p-5"
                style={{ borderColor: "var(--line)", background: "var(--card-solid)" }}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.05, duration: 0.4, ease: easeOut }}
              >
                <h3 className="font-semibold leading-snug" style={{ color: "var(--fg)" }}>
                  {row.metric}
                </h3>
                <dl className="mt-4 grid gap-3 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--fg-faint)" }}>
                      Typical today
                    </dt>
                    <dd className="mt-1" style={{ color: "var(--fg-muted)" }}>{row.today}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--fg-faint)" }}>
                      With Bizdaptive
                    </dt>
                    <dd className="mt-1 font-semibold" style={{ color: "var(--accent)" }}>{row.withUs}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--fg-faint)" }}>
                      Why
                    </dt>
                    <dd className="mt-1" style={{ color: "var(--fg-muted)" }}>{row.note}</dd>
                  </div>
                </dl>
              </motion.article>
            ))}
          </div>
          <motion.div
            className="mt-12 hidden overflow-x-auto rounded-2xl border sm:block"
            style={{ borderColor: "var(--line)", background: "var(--card-solid)" }}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: easeOut }}
            role="region"
            aria-label="Bizdaptive outcome comparison table"
            tabIndex={0}
          >
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr style={{ color: "var(--fg-faint)" }}>
                  <th className="px-5 py-3 font-semibold">Metric</th>
                  <th className="px-5 py-3 font-semibold">Typical today</th>
                  <th className="px-5 py-3 font-semibold">With Bizdaptive</th>
                  <th className="px-5 py-3 font-semibold">Why</th>
                </tr>
              </thead>
              <tbody>
                {numbers.map((row, i) => (
                  <motion.tr
                    key={row.metric}
                    className="border-t"
                    style={{ borderColor: "var(--line)", color: "var(--fg)" }}
                    initial={{ opacity: 0, y: 12, rotateX: -12 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.45, ease: easeOut }}
                  >
                    <td className="px-5 py-4 font-medium">{row.metric}</td>
                    <td className="px-5 py-4" style={{ color: "var(--fg-muted)" }}>
                      {row.today}
                    </td>
                    <td className="px-5 py-4">
                      <span className="font-semibold" style={{ color: "var(--accent)" }}>
                        {row.withUs}
                      </span>
                    </td>
                    <td className="px-5 py-4" style={{ color: "var(--fg-muted)" }}>
                      {row.note}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8" style={{ background: "var(--bg-soft)" }}>
        <div className="mx-auto max-w-5xl">
          <SectionHeader className="text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              Vs tools you already have
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              We sit above them, not instead of them.
            </h2>
          </SectionHeader>

          <div className="tool-stack-grid mt-12">
            {vs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06, duration: 0.45, ease: easeOut }}
                className="tool-stack-card"
              >
                <article className="tool-stack-card__panel">
                  <div className="tool-stack-card__heading">
                    <h3>{item.title}</h3>
                    <p><span>You get:</span> {item.get}</p>
                  </div>
                  <div className="tool-stack-card__reveal">
                    <p className="tool-stack-card__label">Bizdaptive adds the missing layer</p>
                    <p><span>You still miss:</span> {item.miss}</p>
                  </div>
                </article>
                <div className="tool-stack-card__icon">
                  <item.icon aria-hidden />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader>
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              Ready for what Bizdaptive enables?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "var(--fg-muted)" }}>
              Join the waitlist. We&apos;ll show you a live company picture, not a slide.
            </p>
          </SectionHeader>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button to="/contact?intent=waitlist" showArrow>
              Join the waitlist
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
