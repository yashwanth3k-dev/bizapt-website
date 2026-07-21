import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Landmark,
  Megaphone,
  Settings2,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/Button";
import { easeOut } from "../components/motion";
import { usePageSeo } from "../hooks/usePageTitle";
import { getUseCase, useCases } from "../content/stories";

const icons = {
  finance: Landmark,
  sales: TrendingUp,
  operations: Settings2,
  marketing: Megaphone,
  leadership: Briefcase,
} as const;

export function UseCasesHubPage() {
  usePageSeo({
    title: "Use Cases | Bizdaptive Decision Intelligence by Team",
    description:
      "How finance, sales, operations, marketing, and leadership use Bizdaptive: living company maps and decision receipts for real questions.",
    path: "/use-cases",
  });

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="Use cases"
        title="Every team has its own view of the truth."
        lead="Finance reads numbers. Sales reads deals. Ops reads work. Bizdaptive connects decisions into one living company picture — with receipts when someone asks why."
      />

      <section className="px-5 pb-20 sm:px-8">
        <div className="story-card-grid mx-auto max-w-5xl">
          {useCases.map((uc, i) => {
            const Icon = icons[uc.slug as keyof typeof icons] ?? Briefcase;
            return (
              <motion.div
                key={uc.slug}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: easeOut }}
              >
                <Link to={`/use-cases/${uc.slug}`} className="story-card">
                  <span className="story-card__wash" aria-hidden />
                  <div className="story-card__top">
                    <span className="story-card__label">{uc.label}</span>
                    <span className="story-card__icon" aria-hidden>
                      <Icon strokeWidth={1.6} />
                    </span>
                  </div>
                  <h2 className="story-card__title">{uc.title}</h2>
                  <p className="story-card__question">“{uc.question}”</p>
                  <span className="story-card__cta">
                    Open story
                    <ArrowRight aria-hidden />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mx-auto mt-14 max-w-2xl text-center">
          <p className="text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
            Early flow: describe the company, see a living map, correct anytime, ask why, invite the
            team.{" "}
            <Link to="/how-it-works" className="underline-offset-2 hover:underline" style={{ color: "var(--accent)" }}>
              How it works
            </Link>
            {" · "}
            <Link to="/blog" className="underline-offset-2 hover:underline" style={{ color: "var(--accent)" }}>
              Guides
            </Link>
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/contact?intent=waitlist" showArrow>
              Join the waitlist
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export function UseCaseDetailPage() {
  const { slug = "" } = useParams();
  const uc = getUseCase(slug);

  usePageSeo({
    title: uc ? `${uc.label} Use Case | Bizdaptive` : "Use Case | Bizdaptive",
    description: uc
      ? `${uc.question} ${uc.lead}`.slice(0, 160)
      : "Bizdaptive use cases for growing companies.",
    path: uc ? `/use-cases/${uc.slug}` : "/use-cases",
  });

  if (!uc) {
    return <Navigate to="/use-cases" replace />;
  }

  const Icon = icons[uc.slug as keyof typeof icons] ?? Briefcase;

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero eyebrow={uc.eyebrow} title={uc.title} lead={uc.lead} />

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-10">
          <motion.article
            className="story-evidence"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: easeOut }}
          >
            <div className="mb-5 flex items-center gap-3">
              <span className="story-card__icon" aria-hidden>
                <Icon strokeWidth={1.6} />
              </span>
              <p
                className="text-xs font-semibold uppercase tracking-[0.16em]"
                style={{ color: "var(--accent)" }}
              >
                The question
              </p>
            </div>
            <h2 className="text-2xl font-bold tracking-tight" style={{ color: "var(--fg)" }}>
              “{uc.question}”
            </h2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              {uc.answer}
            </p>
            <div className="mt-6">
              {uc.evidence.map((item) => (
                <div key={item} className="story-evidence__row">
                  <span className="story-evidence__mark" aria-hidden />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.article>

          <div>
            <h3 className="text-lg font-semibold" style={{ color: "var(--fg)" }}>
              What you have on day one
            </h3>
            <div className="story-chip-grid mt-4">
              {uc.dayOne.map((item, i) => (
                <motion.div
                  key={item}
                  className="story-chip"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: easeOut }}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button to="/contact?intent=waitlist" showArrow>
              Join the waitlist
            </Button>
            <Button to="/use-cases" variant="ghost">
              All use cases
            </Button>
            <Button to="/how-it-works" variant="ghost">
              How it works
            </Button>
          </div>

          <nav className="flex flex-wrap gap-2.5 border-t pt-8" style={{ borderColor: "var(--line)" }} aria-label="Other use cases">
            {useCases
              .filter((o) => o.slug !== uc.slug)
              .map((o) => (
                <Link key={o.slug} to={`/use-cases/${o.slug}`} className="story-pill">
                  {o.label}
                </Link>
              ))}
          </nav>
        </div>
      </section>
    </div>
  );
}
