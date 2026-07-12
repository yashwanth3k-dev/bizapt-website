import { useState, type FormEvent } from "react";
import { PageHero } from "../components/PageHero";
import { AnimatedCard } from "../components/motion";
import { usePageTitle } from "../hooks/usePageTitle";

const intents = [
  { value: "early-access", label: "Request early access" },
  { value: "founder-demo", label: "Book a founder demo" },
  { value: "waitlist", label: "Join the design partner waitlist" },
  { value: "other", label: "Something else" },
] as const;

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
  intent: (typeof intents)[number]["value"];
  message: string;
};

const initial: FormState = {
  name: "",
  email: "",
  company: "",
  role: "",
  intent: "early-access",
  message: "",
};

export function ContactPage() {
  usePageTitle("Contact — Bizdaptive");
  const [form, setForm] = useState<FormState>(initial);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setError("");
  }

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setError("Name and email are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      setError("Please enter a valid email.");
      return;
    }

    const intentLabel = intents.find((i) => i.value === form.intent)?.label ?? form.intent;
    const subject = encodeURIComponent(`Bizdaptive — ${intentLabel}`);
    const body = encodeURIComponent(
      [
        `Name: ${form.name.trim()}`,
        `Email: ${form.email.trim()}`,
        `Company: ${form.company.trim() || "—"}`,
        `Role: ${form.role.trim() || "—"}`,
        `Intent: ${intentLabel}`,
        "",
        form.message.trim() || "(No additional message)",
      ].join("\n"),
    );

    window.location.href = `mailto:info@bizdaptive.com?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const field =
    "w-full rounded-xl border px-4 py-3 text-sm outline-none transition focus:ring-2 focus:ring-[var(--accent)]/40";
  const fieldStyle = {
    borderColor: "var(--line)",
    background: "var(--card-solid)",
    color: "var(--fg)",
  } as const;

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="Contact"
        accent="accent"
        title="Request early access."
        lead="Tell us who you are and what you're looking for. We'll follow up personally."
      />

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="space-y-6">
            <AnimatedCard className="p-6" delay={0}>
              <h2 className="text-lg font-semibold" style={{ color: "var(--fg)" }}>
                What happens next
              </h2>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                <li>· We read every note — founders, not a ticket queue.</li>
                <li>· If there&apos;s a fit, we book a walkthrough on your org.</li>
                <li>· Expect a reply within a few business days.</li>
              </ul>
            </AnimatedCard>
            <AnimatedCard className="p-6" delay={0.06}>
              <h2 className="text-lg font-semibold" style={{ color: "var(--fg)" }}>
                Prefer email?
              </h2>
              <p className="mt-2 text-sm" style={{ color: "var(--fg-muted)" }}>
                <a
                  href="mailto:info@bizdaptive.com"
                  className="font-medium underline-offset-2 hover:underline"
                  style={{ color: "var(--fg)" }}
                >
                  info@bizdaptive.com
                </a>
              </p>
            </AnimatedCard>
          </div>

          <AnimatedCard className="p-6 sm:p-8" delay={0.08} from="right">
            {sent ? (
              <div className="py-8 text-center">
                <h2 className="text-2xl font-bold" style={{ color: "var(--fg)" }}>
                  Almost there.
                </h2>
                <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed" style={{ color: "var(--fg-muted)" }}>
                  Your mail client should open with the details filled in. Send it, and we&apos;ll be in
                  touch. If nothing opened, email us at info@bizdaptive.com.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setForm(initial);
                  }}
                  className="mt-6 text-sm font-semibold underline-offset-2 hover:underline"
                  style={{ color: "var(--accent)" }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4" noValidate>
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-left">
                    <span className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--fg-muted)" }}>
                      Name *
                    </span>
                    <input
                      className={field}
                      style={fieldStyle}
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      autoComplete="name"
                      required
                    />
                  </label>
                  <label className="block text-left">
                    <span className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--fg-muted)" }}>
                      Email *
                    </span>
                    <input
                      type="email"
                      className={field}
                      style={fieldStyle}
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block text-left">
                    <span className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--fg-muted)" }}>
                      Company
                    </span>
                    <input
                      className={field}
                      style={fieldStyle}
                      value={form.company}
                      onChange={(e) => update("company", e.target.value)}
                      autoComplete="organization"
                    />
                  </label>
                  <label className="block text-left">
                    <span className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--fg-muted)" }}>
                      Role
                    </span>
                    <input
                      className={field}
                      style={fieldStyle}
                      value={form.role}
                      onChange={(e) => update("role", e.target.value)}
                      autoComplete="organization-title"
                      placeholder="Founder, ops, investor…"
                    />
                  </label>
                </div>

                <fieldset>
                  <legend
                    className="mb-2 text-xs font-semibold"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    I&apos;m here to
                  </legend>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {intents.map((opt) => (
                      <label
                        key={opt.value}
                        className="flex cursor-pointer items-center gap-2 rounded-xl border px-3 py-2.5 text-left text-sm transition"
                        style={{
                          borderColor:
                            form.intent === opt.value ? "var(--accent)" : "var(--line)",
                          background: "var(--card-solid)",
                          color: "var(--fg)",
                        }}
                      >
                        <input
                          type="radio"
                          name="intent"
                          value={opt.value}
                          checked={form.intent === opt.value}
                          onChange={() => update("intent", opt.value)}
                          className="accent-[var(--accent)]"
                        />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="block text-left">
                  <span className="mb-1.5 block text-xs font-semibold" style={{ color: "var(--fg-muted)" }}>
                    Message
                  </span>
                  <textarea
                    className={`${field} min-h-[120px] resize-y`}
                    style={fieldStyle}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="What are you trying to run as one org?"
                  />
                </label>

                {error && (
                  <p className="text-sm" style={{ color: "var(--accent)" }} role="alert">
                    {error}
                  </p>
                )}

                <button type="submit" className="btn-solid w-full rounded-full px-5 py-3 text-sm font-semibold">
                  Send message →
                </button>
                <p className="text-center text-xs" style={{ color: "var(--fg-faint)" }}>
                  Opens your email app to info@bizdaptive.com
                </p>
              </form>
            )}
          </AnimatedCard>
        </div>
      </section>
    </div>
  );
}
