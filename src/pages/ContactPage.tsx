import { useEffect, useRef, useState, type FormEvent, type KeyboardEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { usePageSeo } from "../hooks/usePageTitle";
import { easeOut } from "../components/motion";

const FOUNDERS_EMAIL = "info@bizdaptive.com";

const PLACEHOLDER =
  "Hi, I'm Jennifer, Marketing Head at ABC Pvt. Ltd. Our campaigns, approvals, and decisions live across Slack, WhatsApp, Gmail, and scattered docs, so context is hard to find a few months later. We'd love to see how Bizdaptive can help us preserve knowledge, onboard new teammates faster, and save time across marketing.";

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
  usePageSeo({
    title: "Contact Bizdaptive | Waitlist & Founder Demo",
    description:
      "Write the Bizdaptive founders for waitlist access, a founder demo, or a design partnership about decision intelligence and living company maps.",
    path: "/contact",
  });
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
    const t = window.setTimeout(() => bodyRef.current?.focus(), 350);
    return () => window.clearTimeout(t);
  }, []);

  function send() {
    if (opening.current) return;
    setError("");

    if (!from.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(from.trim())) {
      setError("Add a valid email so we can reply.");
      return;
    }
    if (!message.trim()) {
      setError("Tell us who you are and where context goes missing.");
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

  return (
    <div className="contact-solo" style={{ background: "var(--bg)" }}>
      <motion.header
        className="contact-solo__hero"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easeOut }}
      >
        <p>Contact</p>
        <h1>Write the founders.</h1>
        <p className="contact-solo__lead">
          Opens your email app with a draft to {FOUNDERS_EMAIL}. You hit send — we read every note.
        </p>
      </motion.header>

      <section className="contact-solo__section">
        <motion.form
          onSubmit={onSubmit}
          className="contact-sheet"
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, ease: easeOut, delay: 0.06 }}
          noValidate
        >
          <div className="contact-sheet__rail" aria-hidden />

          {sent ? (
            <div className="contact-sheet__sent">
              <p className="contact-sheet__kicker">Almost there</p>
              <h2>Finish in your mail app.</h2>
              <p>
                A draft should be open to <strong>{FOUNDERS_EMAIL}</strong>. Press send there.
                Nothing is submitted until you do.
              </p>
              <div className="contact-sheet__actions">
                <a href={mailtoHref} className="contact-sheet__cta">
                  Open draft again
                  <ArrowUpRight className="size-4" aria-hidden />
                </a>
                <button
                  type="button"
                  className="contact-sheet__ghost"
                  onClick={() => {
                    setSent(false);
                    setError("");
                  }}
                >
                  Edit message
                </button>
              </div>
              <Link to="/" className="contact-sheet__home">
                ← Back home
              </Link>
            </div>
          ) : (
            <>
              <div className="contact-sheet__head">
                <div>
                  <p className="contact-sheet__kicker">Message the founders</p>
                  <h2>What should we know?</h2>
                </div>
                <button
                  type="button"
                  className="contact-sheet__esc"
                  onClick={() => navigate(-1)}
                  aria-label="Close"
                >
                  Esc
                </button>
              </div>

              <div className="contact-sheet__meta">
                <div className="contact-sheet__to">
                  <span>To</span>
                  <strong>{FOUNDERS_EMAIL}</strong>
                </div>
                <label className="contact-sheet__field">
                  <span>From</span>
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
                  />
                </label>
              </div>

              <label className="contact-sheet__field">
                <span>Subject</span>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </label>

              <label className="contact-sheet__field contact-sheet__field--body">
                <span>Your message</span>
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
                />
                <em>
                  {message.length}/{MAX_BODY_CHARS}
                </em>
              </label>

              {error && (
                <p className="contact-sheet__error" role="alert">
                  {error}
                </p>
              )}

              <div className="contact-sheet__foot">
                <p>Straight to humans. No ticket fog.</p>
                <button type="submit" className="contact-sheet__cta">
                  Open in mail
                  <kbd>{isMac ? "⌘" : "Ctrl"}↵</kbd>
                </button>
              </div>
            </>
          )}
        </motion.form>
      </section>
    </div>
  );
}
