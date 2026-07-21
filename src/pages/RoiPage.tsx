import {
  ArrowRight,
  Briefcase,
  BrainCircuit,
  Landmark,
  Megaphone,
  Receipt,
  RefreshCw,
  Settings2,
  Shield,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/Button";
import { SectionHeader, easeOut } from "../components/motion";
import { usePageSeo } from "../hooks/usePageTitle";
import { useCases } from "../content/stories";

const roi = [
  {
    icon: Sparkles,
    title: "Decide with the full picture",
    body: "Decision intelligence for your team: context, ownership, and evidence before the next call or action.",
  },
  {
    icon: BrainCircuit,
    title: "Turn experience into shared instinct",
    body: "Situations, choices, rationales, and outcomes become shared priors your business owns, ready at the next decision.",
  },
  {
    icon: Receipt,
    title: "Ask why and get a decision receipt",
    body: "Trace answers back to who decided, what they knew, and what happened after. Accountability without archaeology.",
  },
  {
    icon: RefreshCw,
    title: "Stop repeating the same mistakes",
    body: "Capture the decision once, learn from the outcome, and move on. Teams stop solving the same problem twice.",
  },
  {
    icon: TrendingUp,
    title: "Make every interaction count forward",
    body: "Meetings, approvals, customer conversations, and workflows sharpen the living company map over time.",
  },
  {
    icon: Shield,
    title: "Build a business that acts smarter",
    body: "The longer you use Bizdaptive, the clearer the next move becomes for everyone on the team.",
  },
];

const numbers = [
  {
    department: "Finance",
    without:
      "Budget approval lost in Slack. Team implements wrong amount. “Why?” Nobody knows.",
    withUs:
      "Next budget decision opens with who approved last time, why, and what the outcome was.",
  },
  {
    department: "Sales",
    without:
      "Deal discount approved verbally. No record of who approved or why.",
    withUs:
      "Discount decisions carry ownership and rationale. Reps and leaders act from the same trail.",
  },
  {
    department: "Operations",
    without:
      "Feature deprioritized mid-sprint. Team confused. Happens every week.",
    withUs:
      "Priority changes show why and who decided. The team executes without re-litigating last week.",
  },
  {
    department: "Marketing",
    without:
      "Campaign budget approved in a call. Results miss target. “Why?” Forgotten.",
    withUs:
      "Campaign choices stay connected to results, so the next plan starts from insight, not amnesia.",
  },
];

export function RoiPage() {
  usePageSeo({
    title: "With Bizdaptive | Decision Intelligence & Decision Receipts",
    description:
      "See what Bizdaptive enables: decide with the full picture, get decision receipts, stop repeating mistakes, and keep a living company map across the team.",
    path: "/with-bizdaptive",
  });

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="With Bizdaptive you will be able to"
        accent="accent"
        title="Decision intelligence your team can actually use."
        lead="A living company map so people move with proof, confidence, and clarity, not scattered context."
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
              Same decisions. Clearer next moves across finance, sales, operations, and marketing.
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
              By team
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              Used across the company.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm" style={{ color: "var(--fg-muted)" }}>
              Each team asks “why?” differently. Same living map. Same decision receipts.
            </p>
          </SectionHeader>

          <div className="story-card-grid mt-12">
            {useCases.map((uc, i) => {
              const Icon =
                {
                  finance: Landmark,
                  sales: TrendingUp,
                  operations: Settings2,
                  marketing: Megaphone,
                  leadership: Briefcase,
                }[uc.slug] ?? Briefcase;
              return (
              <motion.div
                key={uc.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.06, duration: 0.45, ease: easeOut }}
              >
                <Link to={`/use-cases/${uc.slug}`} className="story-card" style={{ minHeight: "12.5rem" }}>
                  <span className="story-card__wash" aria-hidden />
                  <div className="story-card__top">
                    <span className="story-card__label">{uc.label}</span>
                    <span className="story-card__icon" aria-hidden>
                      <Icon strokeWidth={1.6} />
                    </span>
                  </div>
                  <p className="story-card__question" style={{ marginTop: "1rem" }}>
                    “{uc.question}”
                  </p>
                  <span className="story-card__cta">
                    Open story
                    <ArrowRight aria-hidden />
                  </span>
                </Link>
              </motion.div>
            );
            })}
          </div>

          <div className="mt-10 text-center">
            <Button to="/use-cases" variant="ghost" showArrow>
              All use cases
            </Button>
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
