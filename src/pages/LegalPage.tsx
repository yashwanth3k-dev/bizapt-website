import { useEffect, useState } from "react";
import {
  BadgeCheck,
  Cookie,
  Database,
  FileText,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/Button";
import { HoverIcon } from "../components/HoverIcon";
import { AnimatedCard } from "../components/motion";
import { usePageTitle } from "../hooks/usePageTitle";

type LegalSection = {
  id: string;
  title: string;
  short: string;
  icon: LucideIcon;
  wip?: boolean;
  body: string[];
};

const sections: LegalSection[] = [
  {
    id: "privacy",
    title: "Privacy policy",
    short: "Privacy",
    icon: Shield,
    body: [
      "Bizdaptive is built so your organization stays yours. We collect only what we need to operate the product and respond to your requests (for example, contact details when you join the waitlist).",
      "We do not sell personal data. Access inside our team is limited to people who need it to deliver the product or support you.",
      "This policy will expand as the product reaches broader production use. If you have questions now, email info@bizdaptive.com.",
    ],
  },
  {
    id: "data",
    title: "How we handle your data",
    short: "Data",
    icon: Database,
    body: [
      "Our plan is simple: store the minimum required to run a living company picture — and never treat your org as training fodder for someone else’s model without explicit agreement.",
      "Design direction: keep customer org context isolated, encrypt in transit and at rest, and prefer evidence trails you can audit over opaque copies of everything.",
      "“Without actually storing the data” in practice means: we aim to avoid unnecessary retention, avoid duplicate sprawl, and give you control to correct or retire facts — history stays labeled when you supersede, not silently copied forever.",
      "Exact retention windows and subprocessors will be published here as we harden production. Until then, treat this as our working plan — not a finished certification claim.",
    ],
  },
  {
    id: "compliance",
    title: "Security & compliance",
    short: "Security",
    icon: BadgeCheck,
    wip: true,
    body: [
      "ISO 27001 — incoming. We are aligning controls and documentation toward certification.",
      "SOC 2 Type II — incoming. We are building the evidence trail and operating practices required for an attestation.",
      "These are work in progress. We will update this page when milestones land — we won’t pretend they’re done early.",
    ],
  },
  {
    id: "terms",
    title: "Terms and conditions",
    short: "Terms",
    icon: FileText,
    body: [
      "By using this website or contacting us, you agree to use the materials for lawful purposes and not to misuse our brand, content, or systems.",
      "Product access (when granted) will be governed by a separate agreement. Early access and waitlist participation do not guarantee features, timelines, or pricing.",
      "Website content is provided “as is” for information. We may update these terms as the company and product evolve.",
    ],
  },
  {
    id: "cookies",
    title: "Cookie policy",
    short: "Cookies",
    icon: Cookie,
    body: [
      "We use essential cookies (or equivalent local storage) so the site works — for example, remembering your light/dark theme preference.",
      "We do not run advertising trackers on this marketing site today. If that changes, we will update this section and give you clear choices where required.",
    ],
  },
];

const SECTION_IDS = sections.map((s) => s.id);

function WipBadge() {
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
      style={{
        background: "color-mix(in srgb, var(--accent) 14%, transparent)",
        color: "var(--accent)",
      }}
    >
      Work in progress
    </span>
  );
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    const fromHash = window.location.hash.replace("#", "");
    if (fromHash && ids.includes(fromHash)) setActive(fromHash);

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0]?.target.id;
        if (top) setActive(top);
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.1, 0.35, 0.6],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return [active, setActive] as const;
}

function LegalToc({
  active,
  onSelect,
}: {
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <nav
      className="rounded-2xl border p-4 sm:p-5"
      style={{ borderColor: "var(--line)", background: "var(--card-solid)" }}
      aria-label="Legal sections"
    >
      <p
        className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em]"
        style={{ color: "var(--fg-faint)" }}
      >
        On this page
      </p>
      <ul className="space-y-1">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={isActive ? "location" : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  onSelect(s.id);
                  const el = document.getElementById(s.id);
                  if (el) {
                    el.scrollIntoView({ behavior: "smooth", block: "start" });
                    window.history.replaceState(null, "", `#${s.id}`);
                  }
                }}
                className="flex items-center justify-between gap-2 rounded-xl px-3 py-2.5 text-sm font-medium transition"
                style={{
                  color: isActive ? "var(--fg)" : "var(--fg-muted)",
                  background: isActive
                    ? "color-mix(in srgb, var(--accent) 12%, transparent)"
                    : "transparent",
                }}
              >
                <span className="flex items-center gap-2.5">
                  <s.icon className="size-4 shrink-0" strokeWidth={1.5} aria-hidden />
                  {s.short}
                </span>
                {s.wip && (
                  <span
                    className="text-[9px] font-semibold uppercase tracking-wider"
                    style={{ color: isActive ? "var(--accent)" : "var(--fg-faint)" }}
                  >
                    WIP
                  </span>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function LegalSectionCard({ section, index }: { section: LegalSection; index: number }) {
  return (
    <AnimatedCard
      id={section.id}
      delay={index * 0.05}
      className="scroll-mt-28 p-6 sm:p-8"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <HoverIcon icon={section.icon} variant="tilt" color="var(--accent)" className="!mb-0" />
          <div>
            <h2 className="text-xl font-bold tracking-tight sm:text-2xl" style={{ color: "var(--fg)" }}>
              {section.title}
            </h2>
            {section.wip && (
              <div className="mt-2">
                <WipBadge />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-3 border-t pt-5" style={{ borderColor: "var(--line)" }}>
        {section.body.map((p) => (
          <p key={p.slice(0, 48)} className="text-sm leading-relaxed sm:text-[15px]" style={{ color: "var(--fg-muted)" }}>
            {p}
          </p>
        ))}
      </div>
    </AnimatedCard>
  );
}

export function LegalPage() {
  usePageTitle("Legal — Bizdaptive");
  const [active, setActive] = useActiveSection(SECTION_IDS);

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="Legal"
        accent="accent"
        title="Rights, privacy, and how we handle data."
        lead="Straight answers. Honest about what’s ready — and what’s still work in progress."
      />

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[240px_1fr] lg:gap-10">
          <aside className="hidden lg:block">
            <div className="sticky top-24">
              <LegalToc active={active} onSelect={setActive} />
            </div>
          </aside>

          <div className="min-w-0 space-y-4">
            <div className="lg:hidden">
              <LegalToc active={active} onSelect={setActive} />
            </div>

            <div
              className="flex flex-wrap items-center gap-3 rounded-2xl border px-4 py-3 text-xs sm:px-5"
              style={{ borderColor: "var(--line)", background: "var(--bg-soft)", color: "var(--fg-muted)" }}
            >
              <span
                className="inline-flex size-2 rounded-full"
                style={{ background: "var(--accent)" }}
                aria-hidden
              />
              <span>
                ISO 27001 &amp; SOC 2 Type II are marked{" "}
                <span style={{ color: "var(--fg)" }} className="font-semibold">
                  work in progress
                </span>
                . Everything else is our current working policy.
              </span>
            </div>

            {sections.map((section, i) => (
              <LegalSectionCard key={section.id} section={section} index={i} />
            ))}

            <div
              className="flex flex-col gap-5 rounded-2xl border p-6 sm:flex-row sm:items-center sm:justify-between sm:p-7"
              style={{ borderColor: "var(--line)", background: "var(--card-solid)" }}
            >
              <div>
                <p className="text-sm font-medium" style={{ color: "var(--fg)" }}>
                  Last updated: July 2026
                </p>
                <p className="mt-1 text-sm" style={{ color: "var(--fg-muted)" }}>
                  Questions?{" "}
                  <a
                    href="mailto:info@bizdaptive.com"
                    className="font-medium underline-offset-2 hover:underline"
                    style={{ color: "var(--accent)" }}
                  >
                    info@bizdaptive.com
                  </a>
                </p>
              </div>
              <Button to="/contact?intent=waitlist" showArrow>
                Join the waitlist
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
