import { Link, useParams, Navigate } from "react-router-dom";
import { ArrowRight, Briefcase } from "lucide-react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/Button";
import { UseCaseStory } from "../components/UseCaseStory";
import { easeOut } from "../components/motion";
import { usePageSeo } from "../hooks/usePageTitle";
import { getUseCase, useCaseIcons, useCases } from "../content/stories";

export function UseCasesHubPage() {
  usePageSeo({
    title: "Use Cases | Bizdaptive Decision Intelligence by Team",
    description:
      "How finance, sales, operations, marketing, and leadership use Bizdaptive: Company Graph, decision receipts, and governed corrections for real operational decisions.",
    path: "/use-cases",
  });

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="Use cases"
        title="Every team has its own view of the truth."
        lead="Finance reads numbers. Sales reads deals. Ops reads work. Bizdaptive connects decisions into one governed Company Graph — with receipts when someone asks why."
      />

      <section className="px-5 pb-20 sm:px-8">
        <div className="story-card-grid mx-auto max-w-5xl">
          {useCases.map((uc, i) => {
            const Icon = useCaseIcons[uc.slug] ?? Briefcase;
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
            POC flow: describe, compile, see the graph, correct, decide with a receipt.{" "}
            <Link
              to="/how-it-works"
              className="underline-offset-2 hover:underline"
              style={{ color: "var(--accent)" }}
            >
              How it works
            </Link>
            {" · "}
            <Link
              to="/blog"
              className="underline-offset-2 hover:underline"
              style={{ color: "var(--accent)" }}
            >
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

  useEffect(() => {
    document.documentElement.dataset.ucHero = "1";
    return () => {
      delete document.documentElement.dataset.ucHero;
    };
  }, []);

  if (!uc) {
    return <Navigate to="/use-cases" replace />;
  }

  return (
    <div className="uc-story-page">
      <UseCaseStory uc={uc} />
    </div>
  );
}
