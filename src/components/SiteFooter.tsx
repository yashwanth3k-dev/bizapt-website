import { Link } from "react-router-dom";
import { BrandMark } from "./BrandMark";

const links = [
  { label: "Problem", to: "/problem" },
  { label: "Product", to: "/product" },
  { label: "Capabilities", to: "/capabilities" },
  { label: "Contact Us", to: "/contact" },
];

export function SiteFooter() {
  return (
    <footer
      className="border-t px-5 py-10 sm:px-8"
      style={{ borderColor: "var(--line)", background: "var(--bg)" }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <Link to="/" className="flex items-center" aria-label="Bizdaptive home">
          <BrandMark size={22} />
        </Link>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
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

        <p className="text-xs" style={{ color: "var(--fg-faint)" }}>
          © 2026 Bizdaptive ·{" "}
          <a href="mailto:info@bizdaptive.com" className="underline-offset-2 hover:underline">
            info@bizdaptive.com
          </a>
        </p>
      </div>
    </footer>
  );
}
