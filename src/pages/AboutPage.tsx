import {
  BrainCircuit,
  Building2,
  ClipboardCheck,
  FileCheck2,
  Layers,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import { HoverIcon } from "../components/HoverIcon";
import { FounderAvatar } from "../components/FounderAvatar";
import { SectionHeader, easeOut } from "../components/motion";
import { usePageTitle } from "../hooks/usePageTitle";

const story = [
  {
    icon: Building2,
    label: "The problem",
    title: "Information everywhere. Memory nowhere.",
    body: "As businesses grow, decisions scatter across meetings, email, chat, docs, and a few people’s heads. Context gets lost. Knowledge walks out the door.",
  },
  {
    icon: Layers,
    label: "What we’re building",
    title: "The AI Operating System for Companies.",
    body: "A living operational layer that preserves context, keeps accountability, and learns from every decision and interaction. It is not another place to dump files.",
  },
  {
    icon: TrendingUp,
    label: "What compounds",
    title: "Business intelligence that lasts.",
    body: "Every decision. Every interaction. Every outcome. Experience doesn’t disappear. It becomes Compounding Business Intelligence.",
  },
];

const beliefs = [
  {
    icon: BrainCircuit,
    title: "Judgment, strengthened",
    body: "Technology shouldn't replace human judgment. It should strengthen it.",
  },
  {
    icon: FileCheck2,
    title: "Evidence over memory",
    body: "Businesses shouldn't rely on memory. They should rely on evidence.",
  },
  {
    icon: ClipboardCheck,
    title: "Context & accountability",
    body: "Every decision should have context. Every action should have accountability. Every outcome should become institutional knowledge.",
  },
];

const founders = [
  {
    name: "Sudarshan",
    slug: "sudarshan",
    photo: "/founders/sudarshan.jpg",
    role: "Co-founder",
    tag: "Systems Thinker · Precision-Driven",
    linkedin: "https://in.linkedin.com/in/sudarshan-rajan-",
    body: "Sudarshan is the engineer behind Bizdaptive's foundation. He architects the systems that make complex problems feel simple, building scalable, reliable infrastructure that enables the platform to grow without compromising performance. He believes the best architecture is the one users never have to think about.",
  },
  {
    name: "Akil Srikanth",
    slug: "akil",
    photo: "/founders/akil.jpg",
    role: "Co-founder",
    tag: "Vision-Led · Customer-Obsessed",
    linkedin: "https://www.linkedin.com/in/akil-srikanth-2aaaa5149/",
    body: "Akil focuses on connecting technology with real business problems. From shaping the product vision and brand to working closely with customers, partnerships, and growth, he ensures every idea is driven by purpose and every decision creates long-term value. He believes great companies aren't built by adding more features. They're built by solving the right problems.",
  },
  {
    name: "Yashwanth",
    slug: "yashwanth",
    photo: "/founders/yashwanth.jpg",
    role: "Co-founder",
    tag: "Design-Led · Experience-Driven",
    linkedin: "https://www.linkedin.com/in/yashwanth0311/",
    body: "Yashwanth believes exceptional products are defined by how they make people feel, not just what they do. He transforms complex ideas into intuitive, elegant experiences by combining thoughtful design with frontend engineering. His philosophy is simple: great software doesn't demand attention. It earns trust through clarity, simplicity, and consistency.",
  },
];

export function AboutPage() {
  usePageTitle("About us | Bizdaptive");

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
          <div className="about-flip-grid">
            {story.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: easeOut }}
              >
                <article
                  className="about-flip-card"
                  tabIndex={0}
                  aria-label={`${card.label}: ${card.title}`}
                >
                  <div className="about-flip-card__inner">
                    <div className="about-flip-card__face about-flip-card__front">
                      <card.icon className="size-8" strokeWidth={1.5} aria-hidden />
                      <p>{card.label}</p>
                      <h3>{card.title}</h3>
                    </div>
                    <div className="about-flip-card__face about-flip-card__back">
                      <card.icon className="size-7" strokeWidth={1.5} aria-hidden />
                      <h3>{card.title}</h3>
                      <p>{card.body}</p>
                    </div>
                  </div>
                </article>
              </motion.div>
            ))}
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
              Businesses that learn faster outperform those that only work harder.
            </h2>
          </SectionHeader>
          <div className="belief-card-grid">
            {beliefs.map((p, i) => (
              <motion.div
                key={p.title}
                className="belief-card-shell"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: i * 0.08, duration: 0.45, ease: easeOut }}
              >
                <article className="belief-expand-card" tabIndex={0}>
                  <div className="belief-expand-card__circle">
                    <p.icon strokeWidth={1.5} aria-hidden />
                  </div>
                  <div className="belief-expand-card__content">
                    <div className="belief-expand-card__detail">
                      <span>Our belief</span>
                      <h3>{p.title}</h3>
                      <p>{p.body}</p>
                    </div>
                    <div className="belief-expand-card__visual">
                      <p.icon strokeWidth={1.35} aria-hidden />
                    </div>
                  </div>
                </article>
              </motion.div>
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
              ashwanth. Easy to remember.
            </p>
          </SectionHeader>

          <div className="founder-profile-grid">
            {founders.map((f, i) => (
              <motion.article
                key={f.name}
                className="founder-profile-card"
                tabIndex={0}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: easeOut }}
              >
                <FounderAvatar name={f.name} slug={f.slug} photo={f.photo} />
                <h3>{f.name}</h3>
                <p className="founder-profile-card__role">{f.role}</p>
                <p className="founder-profile-card__tag">{f.tag}</p>
                <p className="founder-profile-card__info">{f.body}</p>
                <a
                  className="founder-profile-card__linkedin"
                  href={f.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${f.name} on LinkedIn`}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-.5 15.5v-5.3c0-2.6-.55-4.6-3.85-4.6-1.6 0-2.67.87-3.11 1.7h-.04V8.9H8.38v9.6h3.25v-4.75c0-1.25.23-2.45 1.77-2.45 1.52 0 1.54 1.42 1.54 2.53v4.67h3.56ZM6.88 8.9H3.63v9.6h3.25V8.9ZM5.25 4.1a1.88 1.88 0 1 0 0 3.75 1.88 1.88 0 0 0 0-3.75Z" />
                  </svg>
                  <span>LinkedIn</span>
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8" style={{ background: "var(--bg-soft)" }}>
        <div className="mx-auto grid max-w-5xl items-start gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <SectionHeader>
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "var(--accent)" }}
            >
              Why we exist
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl" style={{ color: "var(--fg)" }}>
              Build memory into how the business moves.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
              Our mission defines what we change today. Our vision describes what becomes possible
              when business knowledge compounds instead of disappearing.
            </p>
          </SectionHeader>

          <div className="grid gap-4 sm:grid-cols-2">
            <article className="mission-bloom-card" tabIndex={0}>
              <span className="mission-bloom-card__fill" aria-hidden />
              <div className="mission-bloom-card__content">
                <span className="mission-bloom-card__icon">
                  <Target strokeWidth={1.5} aria-hidden />
                </span>
                <p className="mission-bloom-card__label">Our mission</p>
                <p className="mission-bloom-card__body">
                  To transform every decision, interaction, and outcome into Compounding Business
                  Intelligence, helping businesses make better decisions, strengthen accountability,
                  and continuously improve.
                </p>
              </div>
            </article>
            <article className="mission-bloom-card" tabIndex={0}>
              <span className="mission-bloom-card__fill" aria-hidden />
              <div className="mission-bloom-card__content">
                <span className="mission-bloom-card__icon">
                  <Lightbulb strokeWidth={1.5} aria-hidden />
                </span>
                <p className="mission-bloom-card__label">Our vision</p>
                <p className="mission-bloom-card__body">
                  To build the AI Operating System for Companies, a future where every business has
                  a living operational layer that understands, learns, and continuously adapts.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
