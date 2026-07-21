import {
  ArrowRight,
  CircleHelp,
  Cookie,
  Database,
  FileQuestion,
  FileText,
  Gauge,
  LockKeyhole,
  ShieldCheck,
} from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/Button";
import { HoverIcon } from "../components/HoverIcon";
import { TiltCard } from "../components/About3D";
import { usePageSeo } from "../hooks/usePageTitle";

const legalLinks = [
  {
    icon: ShieldCheck,
    title: "Privacy Policy",
    body: "What we collect, how we use it, and the choices available to you.",
    to: "/privacy",
  },
  {
    icon: FileText,
    title: "Terms of Service",
    body: "The rules for using this website and engaging with the early product.",
    to: "/terms",
  },
  {
    icon: Cookie,
    title: "Cookie Policy",
    body: "How essential cookies and browser storage support the website.",
    to: "/cookies",
  },
  {
    icon: LockKeyhole,
    title: "Security and Compliance",
    body: "Our current safeguards, principles, and compliance work in progress.",
    to: "/security",
  },
  {
    icon: Database,
    title: "Data Handling",
    body: "How uploaded files and business context are processed, controlled, and protected.",
    to: "/data-handling",
  },
];

export function LegalHubPage() {
  usePageSeo({
    title: "Legal and Trust | Bizdaptive",
    description:
      "Privacy, terms, cookies, security, and data handling for Bizdaptive — how we protect business context and operate the marketing site.",
    path: "/legal",
  });

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="Legal and trust"
        title="Clear policies. Honest status."
        lead="Everything you need to understand how Bizdaptive approaches privacy, data, security, and responsible use."
      />
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2">
          {legalLinks.map((item, index) => (
            <TiltCard
              key={item.to}
              delay={index * 0.06}
              className="p-6 sm:p-8"
            >
              <HoverIcon icon={item.icon} variant="tilt" color="var(--accent)" />
              <h2 className="text-xl font-semibold" style={{ color: "var(--fg)" }}>
                {item.title}
              </h2>
              <p className="card-reveal-copy mt-2 text-sm leading-6" style={{ color: "var(--fg-muted)" }}>
                {item.body}
              </p>
              <Link
                to={item.to}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold"
                style={{ color: "var(--accent)" }}
              >
                Read policy <ArrowRight className="size-4" aria-hidden />
              </Link>
            </TiltCard>
          ))}
        </div>
      </section>
    </div>
  );
}

const faqs = [
  {
    question: "What is Bizdaptive?",
    answer:
      "Bizdaptive is decision intelligence for growing companies. It builds a living company map that connects people, goals, and decisions, and issues decision receipts so teams can act with proof and clarity.",
  },
  {
    question: "Is Bizdaptive a wiki or knowledge management tool?",
    answer:
      "No. Wikis store pages you write. Bizdaptive is built around a living company map that connects people, goals, decisions, rationales, outcomes, and confidence. Documents can provide evidence; they are not the product.",
  },
  {
    question: "What is a decision receipt?",
    answer:
      "A decision receipt captures who decided, why, what context was known at the time, and what happened next. It is an accountable trail for judgment, not a dump of files.",
  },
  {
    question: "What is a living company map?",
    answer:
      "A living company map is a shared picture of how the business works today: people, goals, projects, decisions, and responsibilities, updated as the company changes.",
  },
  {
    question: "How is Bizdaptive different from ChatGPT alone?",
    answer:
      "ChatGPT answers from a prompt. Bizdaptive holds shared business context across your team, with ownership and decision history, so answers stay grounded in how your company actually operates.",
  },
  {
    question: "Who is Bizdaptive for?",
    answer:
      "We are initially focused on growing businesses where critical context is fragmented across founders, managers, meetings, messages, and documents.",
  },
  {
    question: "Is the product generally available?",
    answer:
      "Not yet. Bizdaptive is being prepared for limited design-partner and early-access use. Joining the waitlist does not guarantee immediate access.",
  },
  {
    question: "How does onboarding work?",
    answer:
      "The intended experience begins with a short plain-language conversation and optional supporting information. Uploaded files are processed for relevant context and are not retained. The business reviews and corrects the resulting company map.",
  },
  {
    question: "Does Bizdaptive replace human judgment?",
    answer:
      "No. It strengthens judgment by making relevant context, evidence, ownership, and uncertainty available when a decision is made.",
  },
  {
    question: "How is business data protected?",
    answer:
      "Uploaded files are not retained after processing. Our direction for business context includes data minimization, customer separation, least-privilege access, encryption, and auditable evidence. See the Security and Data Handling pages for current details and limitations.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Standard pricing has not been published. Design-partner scope and terms are discussed directly, and pricing will be clear before any paid access begins.",
  },
];

export function FaqPage() {
  usePageSeo({
    title: "FAQ | Decision Intelligence, Living Company Map & Receipts",
    description:
      "Answers about Bizdaptive decision intelligence: living company maps, decision receipts, how onboarding works, and how we differ from wikis and ChatGPT.",
    path: "/faq",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "bizdaptive-faq-schema";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.getElementById("bizdaptive-faq-schema")?.remove();
    };
  }, []);

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="FAQ"
        title="Decision intelligence, answered plainly."
        lead="What Bizdaptive is, how a living company map works, and what to expect at this stage."
      />
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-2xl border p-5 sm:p-6"
              style={{ borderColor: "var(--line)", background: "var(--card-solid)" }}
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">
                <span className="flex items-center gap-3" style={{ color: "var(--fg)" }}>
                  <CircleHelp className="size-5 shrink-0" strokeWidth={1.5} style={{ color: "var(--accent)" }} />
                  {faq.question}
                </span>
                <span className="text-xl transition group-open:rotate-45" style={{ color: "var(--accent)" }}>
                  +
                </span>
              </summary>
              <p className="mt-4 pl-8 text-sm leading-7" style={{ color: "var(--fg-muted)" }}>
                {faq.answer}
              </p>
            </details>
          ))}
          <p className="pt-4 text-center text-sm" style={{ color: "var(--fg-muted)" }}>
            Go deeper:{" "}
            <Link to="/what-is-bizdaptive" className="underline-offset-2 hover:underline" style={{ color: "var(--accent)" }}>
              What is Bizdaptive?
            </Link>
            {" · "}
            <Link to="/bizdaptive-vs-wiki" className="underline-offset-2 hover:underline" style={{ color: "var(--accent)" }}>
              vs wiki &amp; ChatGPT
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}

const services = [
  { name: "Marketing website", status: "Operational", detail: "Public website and contact experience" },
  { name: "Waitlist contact", status: "Operational", detail: "Email draft workflow" },
  { name: "Bizdaptive product", status: "Pre-release", detail: "Not yet generally available" },
];

export function StatusPage() {
  usePageSeo({
    title: "Status | Bizdaptive",
    description:
      "Current status of the Bizdaptive marketing website, waitlist contact, and product availability.",
    path: "/status",
    noIndex: true,
  });

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="Status"
        title="Bizdaptive service status."
        lead="A manually maintained view of the public website and current product availability."
      />
      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <div
            className="mb-4 flex items-center gap-3 rounded-2xl border p-5"
            style={{ borderColor: "var(--line)", background: "var(--bg-soft)" }}
          >
            <Gauge className="size-5" style={{ color: "var(--accent)" }} aria-hidden />
            <div>
              <p className="font-semibold" style={{ color: "var(--fg)" }}>
                Public systems are operating normally
              </p>
              <p className="text-sm" style={{ color: "var(--fg-muted)" }}>
                Last reviewed July 15, 2026
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border" style={{ borderColor: "var(--line)" }}>
            {services.map((service) => (
              <div
                key={service.name}
                className="flex flex-col gap-3 border-b p-5 last:border-b-0 sm:flex-row sm:items-center sm:justify-between sm:p-6"
                style={{ borderColor: "var(--line)", background: "var(--card-solid)" }}
              >
                <div>
                  <p className="font-semibold" style={{ color: "var(--fg)" }}>
                    {service.name}
                  </p>
                  <p className="mt-1 text-sm" style={{ color: "var(--fg-muted)" }}>
                    {service.detail}
                  </p>
                </div>
                <span
                  className="inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold"
                  style={{
                    color: "var(--teal)",
                    background: "color-mix(in srgb, var(--teal) 12%, transparent)",
                  }}
                >
                  <span className="size-1.5 rounded-full" style={{ background: "var(--teal)" }} />
                  {service.status}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-5 text-center text-xs leading-5" style={{ color: "var(--fg-faint)" }}>
            This is not automated uptime monitoring. For a current service question, contact info@bizdaptive.com.
          </p>
        </div>
      </section>
    </div>
  );
}

export function NotFoundPage() {
  usePageSeo({
    title: "Page not found | Bizdaptive",
    description: "This Bizdaptive page is not on the map. Return home or explore how decision intelligence works.",
    path: "/404",
    noIndex: true,
  });

  return (
    <section
      className="flex min-h-[calc(100svh-8rem)] items-center px-5 py-20 text-center sm:px-8"
      style={{ background: "var(--hero-veil)" }}
    >
      <div className="mx-auto max-w-xl">
        <FileQuestion className="mx-auto size-12" strokeWidth={1.3} style={{ color: "var(--accent)" }} aria-hidden />
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--accent)" }}>
          Error 404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: "var(--fg)" }}>
          This page is not on the map.
        </h1>
        <p className="mx-auto mt-5 max-w-md leading-7" style={{ color: "var(--fg-muted)" }}>
          The address may have changed, or the page may never have existed. You can return home or explore how Bizdaptive works.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button to="/" showArrow>
            Return home
          </Button>
          <Button to="/how-it-works" variant="ghost">
            How it works
          </Button>
        </div>
      </div>
    </section>
  );
}
