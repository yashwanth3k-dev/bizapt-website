import {
  BookOpen,
  Bot,
  CheckSquare,
  Clock,
  LayoutDashboard,
  UserRound,
  Users,
  UserPlus,
} from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/Button";
import { HoverIcon } from "../components/HoverIcon";
import { AnimatedCard, SectionHeader, easeOut } from "../components/motion";
import { usePageTitle } from "../hooks/usePageTitle";

const stakeholders = [
  {
    icon: UserRound,
    role: "Founder / CEO",
    line: "Stop being the human API for your own company.",
    body: "Explain the org once. Get hours back every week. Show the board a trail — not a scavenger hunt.",
  },
  {
    icon: Users,
    role: "Manager / lead",
    line: "One map the team can question — without a weekly re-onboarding.",
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

const notYet = [
  "Automated Slack / email capture (coming later)",
  "Daily morning digest ritual",
  "Continuous “always-on” advice or simulate / digital twin",
  "Guaranteed regulatory compliance outcomes",
  "Paying-customer production deploy before security audit",
];

export function ReturnsPage() {
  usePageTitle("What you get — Bizdaptive");

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="What you get"
        accent="accent"
        title="Less reconstruction. One honest picture. Evidence you can show."
        lead="You describe the company in plain language. You correct it anytime. Your team shares one reality. When someone asks why — you have a trail, not a meeting."
      />

      <section className="px-5 pb-20 sm:px-8">
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

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stakeholders.map((s, i) => (
              <AnimatedCard key={s.role} delay={i * 0.08} className="p-6">
                <HoverIcon icon={s.icon} variant="pulse" color="var(--accent)" />
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "var(--fg-faint)" }}>
                  {s.role}
                </p>
                <h3 className="mt-2 text-lg font-semibold" style={{ color: "var(--fg)" }}>
                  {s.line}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {s.body}
                </p>
              </AnimatedCard>
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
              By the numbers
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              Directional — not a promise carved in stone.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm" style={{ color: "var(--fg-muted)" }}>
              Internal model for design-partner conversations. Real orgs vary. We&apos;re honest about that.
            </p>
          </SectionHeader>

          <motion.div
            className="mt-12 overflow-x-auto rounded-2xl border"
            style={{ borderColor: "var(--line)", background: "var(--card-solid)" }}
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <motion.tr
                  style={{ color: "var(--fg-faint)" }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                >
                  <th className="px-5 py-3 font-semibold">Metric</th>
                  <th className="px-5 py-3 font-semibold">Typical today</th>
                  <th className="px-5 py-3 font-semibold">With Bizdaptive</th>
                  <th className="px-5 py-3 font-semibold">Why</th>
                </motion.tr>
              </thead>
              <tbody>
                {numbers.map((row, i) => (
                  <motion.tr
                    key={row.metric}
                    className="border-t"
                    style={{ borderColor: "var(--line)", color: "var(--fg)" }}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.45, ease: easeOut }}
                  >
                    <td className="px-5 py-4 font-medium">{row.metric}</td>
                    <td className="px-5 py-4" style={{ color: "var(--fg-muted)" }}>
                      {row.today}
                    </td>
                    <td className="px-5 py-4">
                      <motion.span
                        className="inline-block font-semibold"
                        style={{ color: "var(--accent)" }}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.35 + i * 0.1,
                          type: "spring",
                          stiffness: 380,
                          damping: 22,
                        }}
                      >
                        {row.withUs}
                      </motion.span>
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

      <section className="px-5 py-20 sm:px-8">
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
              We sit above them — not instead of them.
            </h2>
          </SectionHeader>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {vs.map((item, i) => (
              <AnimatedCard key={item.title} delay={i * 0.06} className="p-6">
                <HoverIcon icon={item.icon} variant="tilt" color="var(--accent)" />
                <h3 className="text-lg font-semibold" style={{ color: "var(--fg)" }}>
                  {item.title}
                </h3>
                <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                  <span style={{ color: "var(--fg)" }}>You get:</span> {item.get}
                </p>
                <p className="mt-1 text-sm" style={{ color: "var(--fg-muted)" }}>
                  <span style={{ color: "var(--fg)" }}>You still miss:</span> {item.miss}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8" style={{ background: "var(--bg-soft)" }}>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              What&apos;s next
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              We won&apos;t pretend these are done.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "var(--fg-muted)" }}>
              Honesty builds trust. Here&apos;s what we&apos;re not claiming yet:
            </p>
          </SectionHeader>

          <ul className="mx-auto mt-10 max-w-md space-y-3 text-left text-sm" style={{ color: "var(--fg-muted)" }}>
            {notYet.map((item) => (
              <li key={item} className="flex gap-2">
                <Clock className="mt-0.5 size-4 shrink-0" style={{ color: "var(--accent)" }} aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 max-w-md text-sm font-medium" style={{ color: "var(--fg)" }}>
            Promise we keep: one honest, shared picture of your company — that you can correct,
            query, and keep.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button to="/contact" showArrow>
              Request early access
            </Button>
            <Button to="/how-it-works" variant="ghost">
              How it works
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
