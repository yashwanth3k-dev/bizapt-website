import {
  Eye,
  Fingerprint,
  Layers,
  Map,
  Receipt,
  Scale,
  Share2,
  Shield,
  Sparkles,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/Button";
import { HoverIcon } from "../components/HoverIcon";
import { AnimatedCard, SectionHeader } from "../components/motion";
import { usePageTitle } from "../hooks/usePageTitle";

const features = [
  {
    icon: Fingerprint,
    title: "Recognition, not interrogation",
    body: "We ask who you are once, then never make you repeat yourself.",
  },
  {
    icon: Receipt,
    title: "Governed decision records",
    body: "Every important decision carries who, why, what-for, and reasoning you can walk.",
  },
  {
    icon: Map,
    title: "Living company map",
    body: "People, products, goals, channels — connected. Structure for shape. Dynamics for movement.",
  },
  {
    icon: Eye,
    title: "Evidence, not assertions",
    body: "What you told us / what we inferred / what we don't know yet — with confidence and sources.",
  },
  {
    icon: Share2,
    title: "Shared org state",
    body: "Not per-user islands. What the team approves is what everyone sees.",
  },
  {
    icon: Shield,
    title: "Turnover-proof memory",
    body: "Contributions stay with the org when people move on.",
  },
];

const differences = [
  {
    icon: Sparkles,
    title: "Governs AI — doesn't replace it",
    body: "Claude, GPT, Gemini stay where they are. Bizdaptive adds accountability, approvals, and memory across them.",
  },
  {
    icon: Layers,
    title: "Sits above your tools",
    body: "Slack, Notion, Jira, email — still yours. We operate the org as one across those surfaces.",
  },
  {
    icon: Map,
    title: "Map you can question",
    body: "Dashboards show numbers. Wikis store docs. We connect decisions, people, goals, and evidence into one map you can act on.",
  },
];

const faqs = [
  {
    q: "Is this another project management tool?",
    a: "No. PM tools track tasks. Bizdaptive holds why decisions were made, who owns outcomes, and how the org connects — across tools, people, and AI.",
  },
  {
    q: "Does Bizdaptive replace Claude / ChatGPT?",
    a: "No. It governs how your org uses them — with accountability, approvals, and memory.",
  },
  {
    q: "Does it store all our documents?",
    a: "No. We compile understanding and provenance. Raw files stay in your systems; we don't hoard content.",
  },
  {
    q: "Is the map “the truth”?",
    a: "It's an evidence-backed belief model. Confidence grows as more sources corroborate. Conflicts are surfaced, not silently resolved.",
  },
  {
    q: "How do I get started?",
    a: "Request early access or book a founder demo. We work with selected design partners first.",
  },
];

/** Capabilities page: spin / snap / pulse — precise, engineered. */
export function PlatformPage() {
  usePageTitle("Capabilities — Bizdaptive");

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="Capabilities"
        accent="accent"
        title="Not another dashboard. A mirror with receipts."
        lead="Bizdaptive doesn't compete with Claude, Notion, or Slack — it sits above them. Belief meets evidence. When someone asks “why,” you have an answer."
      />

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((card, i) => (
            <AnimatedCard key={card.title} delay={i * 0.05} className="p-6">
              <HoverIcon icon={card.icon} variant="spin" />
              <h2 className="text-lg font-semibold" style={{ color: "var(--fg)" }}>
                {card.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                {card.body}
              </p>
            </AnimatedCard>
          ))}
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8" style={{ background: "var(--bg-soft)" }}>
        <div className="mx-auto max-w-5xl">
          <SectionHeader className="text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--teal)" }}
            >
              Differentiation
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              How we&apos;re different.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base" style={{ color: "var(--fg-muted)" }}>
              Not a competitor to your stack — the layer that makes the stack operate as one org.
            </p>
          </SectionHeader>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {differences.map((card, i) => (
              <AnimatedCard key={card.title} delay={i * 0.08} className="p-6">
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
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeader className="text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--sky)" }}
            >
              FAQ
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight" style={{ color: "var(--fg)" }}>
              Straight answers.
            </h2>
          </SectionHeader>
          <div className="mt-10 space-y-4">
            {faqs.map((item, i) => (
              <AnimatedCard key={item.q} delay={i * 0.04} className="p-6 text-left">
                <HoverIcon
                  icon={Scale}
                  variant="pulse"
                  size={20}
                  color="var(--sky)"
                  className="mb-3"
                />
                <h3 className="font-semibold" style={{ color: "var(--fg)" }}>
                  {item.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {item.a}
                </p>
              </AnimatedCard>
            ))}
          </div>
          <div className="mt-14 flex flex-wrap justify-center gap-3">
            <Button to="/contact" showArrow>
              Request early access
            </Button>
            <Button to="/product" variant="ghost">
              See the product
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
