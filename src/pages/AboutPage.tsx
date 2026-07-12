import { Compass, Heart, Lightbulb, Sparkles, Users } from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/Button";
import { HoverIcon } from "../components/HoverIcon";
import { AnimatedCard, SectionHeader } from "../components/motion";
import { usePageTitle } from "../hooks/usePageTitle";

const pillars = [
  {
    icon: Compass,
    title: "What we believe",
    body: "A company should be understandable — not trapped in chat threads, slide decks, and one person's head.",
  },
  {
    icon: Sparkles,
    title: "What we're building",
    body: "A living map of how your org actually works: people, goals, decisions, and receipts you can show.",
  },
  {
    icon: Heart,
    title: "How we show up",
    body: "Plain language. Honest about what's ready. Prefer a live walkthrough over a roadmap theater.",
  },
];

const founders = [
  {
    name: "Sudarshan",
    role: "Co-founder",
    body: "Obsessed with how organizations actually decide — and tired of “the answer is somewhere in Slack.” Builds for clarity you can defend, not dashboards that look busy.",
  },
  {
    name: "Yashwanth",
    role: "Co-founder",
    body: "Makes the product real: the map, the receipts, the shared picture. Believes if we won’t run our own company on it, nobody else should either.",
  },
  {
    name: "Akil",
    role: "Co-founder",
    body: "Keeps the engine honest and the path to customers clear. Turns “nice idea” into something a team can actually use — without the roadmap theater.",
  },
];

export function AboutPage() {
  usePageTitle("About us — Bizdaptive");

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="About us"
        accent="accent"
        title="We're building the operating layer for companies that refuse to run on vibes."
        lead="Bizdaptive helps teams keep one honest picture of the organization — shared, correctable, and backed by evidence."
      />

      {/* Beliefs */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader className="mb-10 text-center">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              Who we are
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              Small team. Clear bet.
            </h2>
          </SectionHeader>
          <div className="grid gap-4 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <AnimatedCard key={p.title} delay={i * 0.08} className="p-6">
                <HoverIcon icon={p.icon} variant="tilt" color="var(--accent)" />
                <h3 className="text-lg font-semibold" style={{ color: "var(--fg)" }}>
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {p.body}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Why we built it */}
      <section className="px-5 py-20 sm:px-8" style={{ background: "var(--bg-soft)" }}>
        <div className="mx-auto max-w-3xl">
          <SectionHeader className="text-center">
            <HoverIcon icon={Lightbulb} variant="bounce" color="var(--accent)" className="mx-auto" />
            <p
              className="mt-2 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              Why Bizdaptive
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              We got tired of being the company hard drive.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Every org we&apos;ve seen runs on hallway lore, chat archaeology, and one founder who
              re-explains the company weekly. Tools store notes. Dashboards show numbers. Nobody
              held one honest, shared picture you could correct and query. So we&apos;re building that.
            </p>
          </SectionHeader>
        </div>
      </section>

      {/* Founders */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader className="mb-10 text-center">
            <HoverIcon icon={Users} variant="pulse" color="var(--accent)" className="mx-auto" />
            <p
              className="mt-2 text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              Founders
            </p>
            <h2
              className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              Three founders. One stubborn idea.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "var(--fg-muted)" }}>
              We build it, we argue about it, and we run our own company picture on it first.
            </p>
          </SectionHeader>

          <div className="grid gap-4 sm:grid-cols-3">
            {founders.map((f, i) => (
              <AnimatedCard key={f.name} delay={i * 0.1} className="p-7 sm:p-8">
                <div
                  className="mb-5 flex size-14 items-center justify-center rounded-2xl text-lg font-bold"
                  style={{
                    background: "color-mix(in srgb, var(--accent) 12%, transparent)",
                    color: "var(--accent)",
                  }}
                  aria-hidden
                >
                  {f.name.slice(0, 1)}
                </div>
                <h3 className="text-xl font-semibold" style={{ color: "var(--fg)" }}>
                  {f.name}
                </h3>
                <p
                  className="mt-1 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--fg-faint)" }}
                >
                  {f.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  {f.body}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Partners CTA */}
      <section className="px-5 py-20 sm:px-8" style={{ background: "var(--bg-soft)" }}>
        <div className="mx-auto max-w-3xl text-center">
          <SectionHeader>
            <h2
              className="text-3xl font-bold tracking-tight sm:text-4xl"
              style={{ color: "var(--fg)" }}
            >
              Early partners welcome.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-base" style={{ color: "var(--fg-muted)" }}>
              If you want to see a real engine — not a slide — on a live company picture, we&apos;d
              rather show you than pitch you. Bring curiosity; leave with receipts.
            </p>
          </SectionHeader>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Button to="/contact" showArrow>
              Talk to us
            </Button>
            <Button to="/returns" variant="ghost">
              What you get
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
