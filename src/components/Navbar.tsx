import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { Button } from "./Button";
import { useTheme } from "../theme/ThemeProvider";

const links = [
  { label: "Why Change", href: "#why-change" },
  { label: "Platform", href: "#platform" },
  { label: "Industries", href: "#industries" },
  { label: "Journey", href: "#journey" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { isDark, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-xl"
      style={{
        background: "var(--nav-blur)",
        borderColor: scrolled ? "var(--line)" : "transparent",
      }}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-5 sm:px-8">
        <a href="#top" className="flex shrink-0 items-center" aria-label="Bizdaptive home">
          <BrandMark size={28} />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm transition hover:opacity-100"
              style={{ color: "var(--fg-muted)" }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            className="inline-flex h-9 items-center gap-2 rounded-full border px-3 text-xs font-semibold transition hover:opacity-90"
            style={{
              borderColor: "var(--line)",
              color: "var(--fg)",
              background: "var(--card)",
            }}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
          >
            {isDark ? <Sun className="size-3.5" aria-hidden /> : <Moon className="size-3.5" aria-hidden />}
            <span className="hidden sm:inline">{isDark ? "Light" : "Dark"}</span>
          </button>
          <Button href="#request-demo" className="!px-4 !py-2 text-xs sm:text-sm">
            Request a Demo
          </Button>
        </div>
      </div>
    </header>
  );
}
