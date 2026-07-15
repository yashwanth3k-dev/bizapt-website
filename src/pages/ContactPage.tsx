import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { PageHero } from "../components/PageHero";
import { usePageTitle } from "../hooks/usePageTitle";
import { easeOut } from "../components/motion";

const FOUNDERS_EMAIL = "info@bizdaptive.com";

const PLACEHOLDER =
  "Hi, I'm Priya, ops lead at Northwind (140 people). Our answers live in Slack and eight wikis, and new hires ask the same questions for months. We'd like to join the Bizdaptive waitlist. Can we talk this week?";

const HINT =
  "THREE LINES IS PLENTY: WHO YOU ARE, YOUR TEAM, WHERE CONTEXT GOES MISSING";

/** Keep mailto URLs short because long bodies break some desktop mail clients. */
const MAX_BODY_CHARS = 1200;

function subjectForIntent(intent: string | null) {
  if (intent === "early-access") return "Bizdaptive: early access";
  if (intent === "founder-demo") return "Bizdaptive: founder demo";
  if (intent === "other") return "Bizdaptive: hello";
  return "Bizdaptive: waitlist";
}

function buildMailto(from: string, subject: string, message: string) {
  const trimmed = message.trim().slice(0, MAX_BODY_CHARS);
  const body = encodeURIComponent(`Reply email: ${from.trim()}\n\n${trimmed}`);
  const sub = encodeURIComponent(subject.trim() || "Bizdaptive: waitlist");
  return `mailto:${FOUNDERS_EMAIL}?subject=${sub}&body=${body}`;
}

function openMailto(href: string) {
  const link = document.createElement("a");
  link.href = href;
  link.rel = "noopener";
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  link.remove();
}

export function ContactPage() {
  usePageTitle("Contact | Bizdaptive");
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const opening = useRef(false);

  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState(() => subjectForIntent(params.get("intent")));
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);
  const [mailtoHref, setMailtoHref] = useState(`mailto:${FOUNDERS_EMAIL}`);

  useEffect(() => {
    setSubject(subjectForIntent(params.get("intent")));
  }, [params]);

  useEffect(() => {
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        navigate(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  useEffect(() => {
    const t = window.setTimeout(() => bodyRef.current?.focus(), 400);
    return () => window.clearTimeout(t);
  }, []);

  function send() {
    if (opening.current) return;
    setError("");

    if (!from.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from.trim())) {
      setError("Add a valid From email so we can reply.");
      return;
    }
    if (!message.trim()) {
      setError("Three lines is plenty: who you are, your team, and where context goes missing.");
      return;
    }

    const href = buildMailto(from, subject, message);
    setMailtoHref(href);
    opening.current = true;
    openMailto(href);
    setSent(true);
    window.setTimeout(() => {
      opening.current = false;
    }, 800);
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    send();
  }

  function onBodyKeyDown(e: KeyboardEvent<HTMLTextAreaElement>) {
    if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
      e.preventDefault();
      send();
    }
  }

  const isMac =
    typeof navigator !== "undefined" && /Mac|iPhone|iPad/.test(navigator.platform);

  const fieldShell =
    "rounded-2xl border px-4 py-3 transition focus-within:ring-2 focus-within:ring-[var(--accent)]/25";
  const fieldShellStyle = {
    borderColor: "var(--line)",
    background: "var(--bg)",
  } as const;

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="Contact"
        accent="accent"
        title="Write the founders."
        lead="Opens your email app with a draft to info@bizdaptive.com. You hit send, and we read every note."
      />

      <section className="px-5 pb-24 sm:px-8">
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 32, rotateX: 18 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.65, ease: easeOut }}
          className="mx-auto max-w-3xl"
          style={{ perspective: 1200, transformStyle: "preserve-3d" }}
          noValidate
        >
          <motion.div
            className="overflow-hidden rounded-[1.75rem] border"
            style={{
              borderColor: "var(--line)",
              background: "var(--card-solid)",
              boxShadow: "0 0 80px var(--cta-glow)",
              transformOrigin: "top center",
            }}
            initial={{ rotateX: -12 }}
            animate={{ rotateX: 0 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.05 }}
          >
            <div
              className="flex items-center justify-between gap-3 px-5 py-4 sm:px-8"
              style={{ background: "var(--bg-soft)" }}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className="size-2 rounded-full"
                  style={{ background: "var(--accent)" }}
                  aria-hidden
                />
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--fg-faint)" }}
                >
                  New message: Bizdaptive
                </p>
              </div>
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex min-h-11 items-center rounded-full border px-3 text-xs font-semibold tracking-wide transition hover:opacity-80"
                style={{
                  borderColor: "var(--line)",
                  color: "var(--fg-faint)",
                  background: "var(--card-solid)",
                }}
                aria-label="Close (Escape)"
              >
                <span className="sm:hidden">Back</span>
                <span className="hidden sm:inline">ESC</span>
              </button>
            </div>

            {sent ? (
              <div className="px-6 py-14 text-center sm:px-10">
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.14em]"
                  style={{ color: "var(--accent)" }}
                >
                  Almost there
                </p>
                <h2
                  className="mt-3 text-2xl font-bold tracking-tight"
                  style={{ color: "var(--fg)" }}
                >
                  Finish in your mail app.
                </h2>
                <p
                  className="mx-auto mt-3 max-w-md text-sm leading-relaxed"
                  style={{ color: "var(--fg-muted)" }}
                >
                  A draft should be open to{" "}
                  <span style={{ color: "var(--fg)" }}>{FOUNDERS_EMAIL}</span>. Press send there.
                  Nothing is submitted until you do.
                </p>
                <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold"
                    style={{ background: "var(--btn-bg)", color: "var(--btn-fg)" }}
                  >
                    Open draft again
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSent(false);
                      setError("");
                    }}
                    className="text-sm font-semibold underline-offset-2 hover:underline"
                    style={{ color: "var(--accent)" }}
                  >
                    Edit message
                  </button>
                </div>
                <p className="mt-8 text-xs" style={{ color: "var(--fg-faint)" }}>
                  Or email directly:{" "}
                  <a
                    href={`mailto:${FOUNDERS_EMAIL}`}
                    className="underline-offset-2 hover:underline"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {FOUNDERS_EMAIL}
                  </a>
                </p>
                <p className="mt-4">
                  <Link
                    to="/"
                    className="text-xs font-medium underline-offset-2 hover:underline"
                    style={{ color: "var(--fg-faint)" }}
                  >
                    ← Back home
                  </Link>
                </p>
              </div>
            ) : (
              <div className="space-y-5 px-5 py-6 sm:px-8 sm:py-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className={fieldShell} style={fieldShellStyle}>
                    <p
                      className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                      style={{ color: "var(--fg-faint)" }}
                    >
                      To
                    </p>
                    <p className="mt-1.5 truncate text-sm font-semibold" style={{ color: "var(--accent)" }}>
                      {FOUNDERS_EMAIL}
                    </p>
                  </div>

                  <label className={`${fieldShell} block`} style={fieldShellStyle}>
                    <span
                      className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                      style={{ color: "var(--fg-faint)" }}
                    >
                      From
                    </span>
                    <input
                      type="email"
                      value={from}
                      onChange={(e) => {
                        setFrom(e.target.value);
                        setError("");
                      }}
                      placeholder="you@company.com"
                      autoComplete="email"
                      required
                      className="mt-1.5 w-full bg-transparent text-base outline-none placeholder:opacity-45"
                      style={{ color: "var(--fg)" }}
                    />
                  </label>
                </div>

                <label className={`${fieldShell} block`} style={fieldShellStyle}>
                  <span
                    className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: "var(--fg-faint)" }}
                  >
                    Subject
                  </span>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="mt-1.5 w-full bg-transparent text-base font-semibold outline-none"
                    style={{ color: "var(--fg)" }}
                  />
                </label>

                <div
                  className="rounded-2xl border px-4 py-4 sm:px-5 sm:py-5"
                  style={{
                    borderColor: "var(--line)",
                    background: "var(--bg-soft)",
                  }}
                >
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.14em]"
                    style={{ color: "var(--accent)" }}
                  >
                    {HINT}
                  </p>
                  <textarea
                    ref={bodyRef}
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value.slice(0, MAX_BODY_CHARS));
                      setError("");
                    }}
                    onKeyDown={onBodyKeyDown}
                    placeholder={PLACEHOLDER}
                    rows={7}
                    maxLength={MAX_BODY_CHARS}
                    className="mt-4 w-full resize-none bg-transparent text-[1.05rem] italic leading-relaxed outline-none placeholder:opacity-50"
                    style={{
                      color: "var(--fg)",
                      fontFamily: "var(--font-serif)",
                    }}
                  />
                </div>

                {error && (
                  <p className="text-sm" style={{ color: "var(--accent)" }} role="alert">
                    {error}
                  </p>
                )}

                <div className="flex flex-col-reverse items-stretch justify-between gap-4 pt-1 sm:flex-row sm:items-center">
                  <p
                    className="text-center text-[10px] font-semibold uppercase tracking-[0.16em] sm:text-left"
                    style={{ color: "var(--fg-faint)" }}
                  >
                    Goes straight to the founders
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold transition hover:opacity-90"
                    style={{ background: "var(--btn-bg)", color: "var(--btn-fg)" }}
                  >
                    Open in mail
                    <kbd
                      className="hidden items-center rounded-md border px-1.5 py-0.5 text-[10px] font-medium opacity-90 sm:inline-flex"
                      style={{ borderColor: "rgba(255,255,255,0.35)" }}
                    >
                      {isMac ? "⌘" : "Ctrl"}↵
                    </kbd>
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </motion.form>
      </section>
    </div>
  );
}
