import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Clock,
  GitBranch,
  Lightbulb,
  Map,
  MessageSquare,
  PencilLine,
  Receipt,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { HoverIcon } from "./HoverIcon";
import { AnimatedCard, SectionHeader, SectionReveal, easeOut, type RevealVariant } from "./motion";
import type { UseCase } from "../content/types";

const workflowIcons = [MessageSquare, Map, GitBranch, Receipt, PencilLine] as const;

type SectionBlockProps = {
  eyebrow: string;
  title: string;
  icon: LucideIcon;
  variant?: RevealVariant;
  children: ReactNode;
  soft?: boolean;
};

function SectionBlock({
  eyebrow,
  title,
  icon,
  variant = "rise",
  children,
  soft = false,
}: SectionBlockProps) {
  return (
    <SectionReveal variant={variant} className="uc-story-section">
      <div className={`uc-story-section__inner ${soft ? "uc-story-section__inner--soft" : ""}`}>
        <SectionHeader className="uc-story-section__head">
          <HoverIcon icon={icon} variant="tilt" color="var(--accent)" className="!mb-3" />
          <p className="uc-story-section__eyebrow">{eyebrow}</p>
          <h2 className="uc-story-section__title">{title}</h2>
        </SectionHeader>
        <div className="uc-story-section__content">{children}</div>
      </div>
    </SectionReveal>
  );
}

/** Marketing-length use case: scannable in ~2–3 minutes. Full archive fields stay in content for future deep dives. */
export function UseCaseStory({ uc }: { uc: UseCase }) {
  const challenges = uc.challenges.slice(0, 4);
  const solutions = [...uc.solutions]
    .sort((a, b) => Number(!!a.onArc) - Number(!!b.onArc))
    .slice(0, 3);
  const kpis = uc.kpis.slice(0, 3);
  const outcomes = uc.outcomes.slice(0, 3);

  return (
    <div className="uc-story">
      <section className="uc-story-hero">
        <div className="uc-story-hero__top mx-auto max-w-6xl px-5 sm:px-8">
          <Link to="/use-cases" className="story-back">
            <ArrowLeft aria-hidden />
            All use cases
          </Link>
        </div>
        <motion.div
          className="uc-story-hero__copy mx-auto max-w-6xl px-5 sm:px-8"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <p className="uc-story-hero__label">{uc.label} use case</p>
          <h1 className="uc-story-hero__title">{uc.title}</h1>
          <p className="uc-story-hero__lead">{uc.lead}</p>
          <blockquote className="uc-story-hero__quote">
            <span className="uc-story-hero__quote-label">The question</span>
            “{uc.question}”
          </blockquote>
          <p className="uc-story-hero__answer">{uc.answer}</p>
        </motion.div>
        <div className="uc-story-hero__wave" aria-hidden />
      </section>

      <div className="uc-story-body mx-auto max-w-6xl px-5 pb-16 sm:px-8">
        <SectionBlock eyebrow="Today" title="Current situation" icon={Clock} soft>
          <p className="uc-story-prose">{uc.currentSituation}</p>
        </SectionBlock>

        <SectionBlock eyebrow="Symptoms" title="What breaks" icon={AlertTriangle}>
          <div className="uc-story-challenge-grid">
            {challenges.map((item, i) => (
              <AnimatedCard key={item} delay={i * 0.05} className="uc-story-challenge-card !p-5">
                <span className="uc-story-challenge-card__num">{String(i + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </AnimatedCard>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="Bizdaptive" title="Capability → decision → value" icon={Sparkles}>
          <div className="uc-story-solution-grid">
            {solutions.map((row, i) => (
              <AnimatedCard key={row.capability} delay={i * 0.06} className="uc-story-solution-card !p-6">
                <div className="uc-story-solution-card__top">
                  <Lightbulb className="size-5 shrink-0" strokeWidth={1.6} aria-hidden />
                  {row.onArc && <span className="content-tag">On the POC arc</span>}
                </div>
                <h3 className="uc-story-solution-card__cap">{row.capability}</h3>
                <p className="uc-story-solution-card__decision">
                  <strong>Decision:</strong> {row.decision}
                </p>
                <p className="uc-story-solution-card__value">
                  <strong>Value:</strong> {row.value}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="POC pattern" title="How it flows" icon={GitBranch} variant="blur">
          <div className="uc-story-process">
            {uc.workflow.map((step, i) => {
              const StepIcon = workflowIcons[i] ?? Map;
              return (
                <motion.div
                  key={step}
                  className="uc-story-process__step group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ delay: i * 0.08, duration: 0.5, ease: easeOut }}
                >
                  {i < uc.workflow.length - 1 && (
                    <span className="uc-story-process__arrow" aria-hidden>
                      <ArrowRight />
                    </span>
                  )}
                  <div className="uc-story-process__icon-wrap">
                    <HoverIcon
                      icon={StepIcon}
                      variant="pulse"
                      color="var(--accent)"
                      className="!mb-0"
                      size={22}
                    />
                  </div>
                  <p className="uc-story-process__num">Step {i + 1}</p>
                  <p className="uc-story-process__text">{step}</p>
                </motion.div>
              );
            })}
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="Measure" title="Before & after" icon={TrendingUp}>
          <div className="uc-story-kpi-grid">
            {kpis.map((row, i) => (
              <AnimatedCard key={row.metric} delay={i * 0.07} className="uc-story-kpi-card !p-6">
                <p className="uc-story-kpi-card__metric">{row.metric}</p>
                <div className="uc-story-kpi-card__compare">
                  <div>
                    <span className="uc-story-kpi-card__label">Before</span>
                    <p>{row.before}</p>
                  </div>
                  <span className="uc-story-kpi-card__arrow" aria-hidden>
                    →
                  </span>
                  <div>
                    <span className="uc-story-kpi-card__label uc-story-kpi-card__label--after">After</span>
                    <p>{row.after}</p>
                  </div>
                </div>
                {row.note && <p className="uc-story-kpi-card__note">{row.note}</p>}
              </AnimatedCard>
            ))}
          </div>
        </SectionBlock>

        <SectionBlock eyebrow="Results" title="What changes" icon={CheckCircle2} variant="cascade">
          <motion.div
            className="uc-story-outcome-grid"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {outcomes.map((group) => (
              <motion.div
                key={group.category}
                className="uc-story-outcome-card group card-surface card-interactive"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
                }}
                whileHover={{ y: -6, transition: { duration: 0.22 } }}
              >
                <h3>{group.category}</h3>
                <ul>
                  {group.items.slice(0, 2).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </SectionBlock>
      </div>
    </div>
  );
}
