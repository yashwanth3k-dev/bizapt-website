import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BrandMark } from "./BrandMark";
import { Button } from "./Button";
import { ThemeSwitch } from "./ThemeSwitch";

const links = [
  { label: "With Bizdaptive", to: "/with-bizdaptive" },
  { label: "How it works", to: "/how-it-works" },
  { label: "Use cases", to: "/use-cases" },
  { label: "About us", to: "/about" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-xl transition-[border-color,background] duration-300"
      data-scrolled={scrolled ? "true" : "false"}
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
          <ThemeSwitch />
          <Button to="/contact?intent=waitlist" className="!px-4 !py-2 text-xs sm:text-sm">
            Contact Us
          </Button>
        </div>
      </div>

      <nav
        className="flex items-center justify-start gap-4 overflow-x-auto whitespace-nowrap border-t px-5 py-2.5 sm:justify-center sm:gap-5 md:hidden"
        style={{ borderColor: "var(--line)" }}
        aria-label="Primary"
      >
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            className="inline-flex min-h-11 items-center text-xs font-medium transition hover:opacity-100"
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
