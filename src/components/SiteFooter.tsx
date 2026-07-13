import { Link } from "react-router-dom";
import { BrandMark } from "./BrandMark";

const links = [
  { label: "ROI you can feel", to: "/roi" },
  { label: "How it works", to: "/how-it-works" },
  { label: "About us", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Legal", to: "/legal" },
];

export function SiteFooter() {
  return (
    <footer
      className="border-t px-5 py-10 sm:px-8"
      style={{ borderColor: "var(--line)", background: "var(--bg)" }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
        <div className="flex w-full flex-col items-center justify-between gap-6 sm:flex-row">
          <Link to="/" className="flex items-center" aria-label="Bizdaptive home">
            <BrandMark size={22} />
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-5 text-sm">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{ color: "var(--fg-faint)" }}
                className="hover:opacity-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <a
            href="mailto:info@bizdaptive.com"
            className="text-xs underline-offset-2 hover:underline"
            style={{ color: "var(--fg-faint)" }}
          >
            info@bizdaptive.com
          </a>
        </div>

        <p className="text-center text-xs" style={{ color: "var(--fg-faint)" }}>
          © 2026 Bizdaptive. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
