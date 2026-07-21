import { Link } from "react-router-dom";
import { BrandMark } from "./BrandMark";

const productLinks = [
  { label: "With Bizdaptive", to: "/with-bizdaptive" },
  { label: "How it works", to: "/how-it-works" },
  { label: "Use cases", to: "/use-cases" },
  { label: "FAQ", to: "/faq" },
];

const resourceLinks = [
  { label: "Blog", to: "/blog" },
  { label: "Status", to: "/status" },
];

const companyLinks = [
  { label: "About us", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Legal and trust", to: "/legal" },
];

const policyLinks = [
  { label: "Privacy", to: "/privacy" },
  { label: "Terms", to: "/terms" },
  { label: "Cookies", to: "/cookies" },
  { label: "Security", to: "/security" },
  { label: "Data handling", to: "/data-handling" },
];

export function SiteFooter() {
  return (
    <footer
      className="border-t px-5 py-10 sm:px-8"
      style={{ borderColor: "var(--line)", background: "var(--bg)" }}
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center" aria-label="Bizdaptive home">
              <BrandMark size={26} />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-6" style={{ color: "var(--fg-muted)" }}>
              Adaptive business instinct. Decision intelligence for growing companies.
            </p>
            <a
              href="mailto:info@bizdaptive.com"
              className="mt-4 inline-block text-sm underline-offset-2 hover:underline"
              style={{ color: "var(--accent)" }}
            >
              info@bizdaptive.com
            </a>
          </div>

          <FooterGroup title="Product" links={productLinks} />
          <FooterGroup title="Resources" links={resourceLinks} />
          <FooterGroup title="Company" links={companyLinks} />
          <FooterGroup title="Legal" links={policyLinks} />
        </div>

        <div
          className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs sm:flex-row"
          style={{ borderColor: "var(--line)", color: "var(--fg-faint)" }}
        >
          <p>© 2026 Spirality Solutions. All rights reserved.</p>
          <p>Bizdaptive is a product of Spirality Solutions.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({
  title,
  links,
}: {
  title: string;
  links: Array<{ label: string; to: string }>;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.16em]" style={{ color: "var(--fg)" }}>
        {title}
      </p>
      <nav className="mt-4 flex flex-col items-start gap-3 text-sm" aria-label={`${title} links`}>
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            style={{ color: "var(--fg-faint)" }}
            className="inline-flex min-h-11 items-center py-1.5 transition hover:opacity-100"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
