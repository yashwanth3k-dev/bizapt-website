import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { BrandMark } from "./BrandMark";
import { Button } from "./Button";
import { useTheme } from "../theme/ThemeProvider";

const links = [
  { label: "ROI you can feel", to: "/roi" },
  { label: "How it works", to: "/how-it-works" },
  { label: "About us", to: "/about" },
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
      className="sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-[border-color] duration-300"
      style={{
        background: "var(--nav-blur)",
        borderColor: scrolled ? "var(--line)" : "transparent",
      }}
    >
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center gap-3 px-5 sm:px-8">
        <Link to="/" className="flex shrink-0 items-center justify-self-start" aria-label="Bizdaptive home">
          <BrandMark size={28} />
        </Link>

        <nav
          className="hidden items-center gap-1 rounded-full border px-1.5 py-1 md:flex"
          style={{ borderColor: "var(--line)", background: "var(--card)" }}
          aria-label="Primary"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
                  isActive ? "opacity-100" : "opacity-80 hover:opacity-100"
                }`
              }
              style={({ isActive }) => ({
                color: isActive ? "var(--fg)" : "var(--fg-muted)",
                background: isActive ? "var(--bg-soft)" : "transparent",
              })}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center justify-self-end gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggle}
            className="inline-flex size-9 items-center justify-center rounded-full border transition hover:opacity-90"
            style={{
              borderColor: "var(--line)",
              color: "var(--fg)",
              background: "var(--card)",
            }}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            title={isDark ? "Light mode" : "Dark mode"}
          >
            {isDark ? <Sun className="size-3.5" aria-hidden /> : <Moon className="size-3.5" aria-hidden />}
          </button>
          <Button to="/contact?intent=waitlist" className="!px-4 !py-2 text-xs sm:text-sm">
            Contact Us
          </Button>
        </div>
      </div>

      <nav
        className="flex items-center justify-center gap-5 border-t px-5 py-2.5 md:hidden"
        style={{ borderColor: "var(--line)" }}
        aria-label="Primary"
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="text-xs font-medium transition hover:opacity-100"
            style={({ isActive }) => ({
              color: isActive ? "var(--fg)" : "var(--fg-muted)",
            })}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
