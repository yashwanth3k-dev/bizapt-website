import {
  BookOpen,
  Bot,
  Brain,
  BrainCircuit,
  CheckSquare,
  LayoutDashboard,
  RefreshCw,
  Shield,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/Button";
import { SectionHeader, easeOut } from "../components/motion";
import { usePageTitle } from "../hooks/usePageTitle";

const roi = [
  {
    icon: Brain,
    title: "Never lose what your business learns",
    body: "Every decision, interaction, and lesson becomes part of your business's permanent knowledge.",
  },
  {
    icon: BrainCircuit,
    title: "Instinct is memory compiled for action",
    body: "Bizdaptive compresses situations, choices, rationales, outcomes, and values into shared priors your business owns, ready for every person and AI agent at the next decision.",
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
    body: "Every meeting, approval, customer conversation, and workflow strengthens your business's intelligence over time.",
  },
  {
    icon: Shield,
    title: "Build an business that gets smarter every day",
    body: "The longer you use Bizdaptive, the more context, knowledge, and business instinct you accumulate.",
  },
];

const numbers = [
  {
    department: "Finance",
    without:
      "Budget approval lost in Slack. Team implements wrong amount. “Why?” Nobody knows.",
    withUs:
      "Every budget decision recorded with reason, who approved, and proof.",
  },
  {
    department: "Sales",
    without:
      "Deal discount approved verbally. No record of who approved or why.",
    withUs:
      "Every discount has an approval trail with reason. Audit finds it instantly.",
  },
  {
    department: "Operations",
    without:
      "Feature deprioritized mid-sprint. Team confused. Happens every week.",
    withUs:
      "Priority change records why it happened and who decided. No repeat decisions.",
  },
  {
    department: "Marketing",
    without:
      "Campaign budget approved in a call. Results miss target. “Why?” Forgotten.",
    withUs:
      "Every campaign decision recorded. Learn what works. Use insights for the next one.",
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
        title="Use your business's instinct intelligently always."
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
              By the numbers
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              Without Bizdaptive vs with Bizdaptive.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm" style={{ color: "var(--fg-muted)" }}>
              Same decisions. Different outcomes — across finance, sales, operations, and marketing.
            </p>
          </SectionHeader>

          <div className="mt-12 overflow-x-auto rounded-2xl border" style={{ borderColor: "var(--line)", background: "var(--card-solid)" }}>
            <table className="dept-compare-table w-full min-w-[720px] text-left">
              <thead>
                <tr>
                  <th scope="col">Department</th>
                  <th scope="col">Without Bizdaptive</th>
                  <th scope="col">With Bizdaptive</th>
                </tr>
              </thead>
              <tbody>
                {numbers.map((row, i) => (
                  <motion.tr
                    key={row.department}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: i * 0.07, duration: 0.4, ease: easeOut }}
                  >
                    <th scope="row">{row.department}</th>
                    <td className="dept-compare-table__without">{row.without}</td>
                    <td className="dept-compare-table__with">{row.withUs}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8" style={{ background: "var(--bg)" }}>
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
