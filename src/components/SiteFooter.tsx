import { BrandMark } from "./BrandMark";

export function SiteFooter() {
  return (
    <footer
      className="border-t px-5 py-10 sm:px-8"
      style={{ borderColor: "var(--line)", background: "var(--bg)" }}
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 sm:flex-row">
        <a href="#top" className="flex items-center">
          <BrandMark size={22} />
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm">
          <a href="#why-change" style={{ color: "var(--fg-faint)" }} className="hover:opacity-100">
            Why Change
          </a>
          <a href="#platform" style={{ color: "var(--fg-faint)" }}>
            Platform
          </a>
          <a href="#request-demo" style={{ color: "var(--fg-faint)" }}>
            Request a Demo
          </a>
        </nav>

        <p className="text-xs" style={{ color: "var(--fg-faint)" }}>
          PoC · deploy held · 2026
        </p>
      </div>
    </footer>
  );
}
