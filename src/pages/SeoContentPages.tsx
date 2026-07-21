import { Link } from "react-router-dom";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/Button";
import { usePageSeo } from "../hooks/usePageTitle";

export function WhatIsBizdaptivePage() {
  usePageSeo({
    title: "What Is Bizdaptive? | Decision Intelligence & Living Company Map",
    description:
      "Bizdaptive is decision intelligence for growing companies: a living company map, decision receipts, and shared business context so teams decide with proof and clarity.",
    path: "/what-is-bizdaptive",
  });

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="Definition"
        title="What is Bizdaptive?"
        lead="Decision intelligence for growing companies — not another wiki, not another chat box."
      />

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-3xl space-y-8 text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
          <p style={{ color: "var(--fg)" }} className="text-lg font-medium leading-relaxed">
            Bizdaptive is a living operational layer that turns how your company works into a shared
            picture: people, goals, decisions, and evidence — so the next decision starts from clarity.
          </p>

          <div>
            <h2 className="text-xl font-bold tracking-tight" style={{ color: "var(--fg)" }}>
              Three ideas at the core
            </h2>
            <ul className="mt-4 list-disc space-y-3 pl-5">
              <li>
                <strong style={{ color: "var(--fg)" }}>Living company map</strong> — a shared picture of
                how the business operates today, updated as the company changes.
              </li>
              <li>
                <strong style={{ color: "var(--fg)" }}>Decision receipts</strong> — who decided, why,
                what was known, and what happened next. Accountability without archaeology.
              </li>
              <li>
                <strong style={{ color: "var(--fg)" }}>Decision intelligence</strong> — context and
                ownership available when judgment is required, not buried in chat history.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight" style={{ color: "var(--fg)" }}>
              Who it is for
            </h2>
            <p className="mt-3">
              Growing businesses where critical context is fragmented across founders, managers,
              meetings, messages, and documents — and where repeating the same decisions costs real time.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold tracking-tight" style={{ color: "var(--fg)" }}>
              What it is not
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5">
              <li>Not a wiki or document dump</li>
              <li>Not a dashboard of numbers alone</li>
              <li>Not a replacement for human judgment</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <Button to="/contact?intent=waitlist" showArrow>
              Join the waitlist
            </Button>
            <Button to="/how-it-works" variant="ghost">
              See how it works
            </Button>
            <Button to="/bizdaptive-vs-wiki" variant="ghost">
              vs wiki &amp; ChatGPT
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export function BizdaptiveVsWikiPage() {
  usePageSeo({
    title: "Bizdaptive vs Wiki & ChatGPT | Living Company Map Comparison",
    description:
      "Wikis store pages you write. ChatGPT answers a prompt. Bizdaptive holds a living company map with decision receipts so teams share context and accountability.",
    path: "/bizdaptive-vs-wiki",
  });

  const rows = [
    {
      tool: "Wikis & Notion",
      get: "Pages and docs you maintain",
      miss: "A living map of decisions, ownership, and outcomes",
    },
    {
      tool: "ChatGPT alone",
      get: "Fast answers from a prompt",
      miss: "Shared company context and decision receipts across the team",
    },
    {
      tool: "Dashboards",
      get: "Numbers and charts",
      miss: "Who decided, why, and what was behind the belief",
    },
    {
      tool: "Task tools",
      get: "Tickets and status",
      miss: "Strategy-to-execution in one connected company picture",
    },
  ];

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero
        eyebrow="Comparison"
        title="Bizdaptive vs wiki, ChatGPT, and the tools you already have."
        lead="We sit above them — a living company map with decision receipts — not instead of them."
      />

      <section className="px-5 pb-20 sm:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
            If your team already has docs and chat AI, you still miss a shared picture of how the
            company decides. That is the gap Bizdaptive fills.
          </p>

          <div
            className="mt-12 overflow-x-auto rounded-2xl border"
            style={{ borderColor: "var(--line)", background: "var(--card-solid)" }}
          >
            <table className="w-full min-w-[640px] text-left text-sm">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--line)" }}>
                  <th className="px-5 py-4 font-semibold" style={{ color: "var(--fg)" }}>
                    Tool
                  </th>
                  <th className="px-5 py-4 font-semibold" style={{ color: "var(--fg)" }}>
                    You get
                  </th>
                  <th className="px-5 py-4 font-semibold" style={{ color: "var(--fg)" }}>
                    You still miss
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row.tool} style={{ borderBottom: "1px solid var(--line)" }}>
                    <td className="px-5 py-4 font-medium" style={{ color: "var(--fg)" }}>
                      {row.tool}
                    </td>
                    <td className="px-5 py-4" style={{ color: "var(--fg-muted)" }}>
                      {row.get}
                    </td>
                    <td className="px-5 py-4" style={{ color: "var(--fg-muted)" }}>
                      {row.miss}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mx-auto mt-12 max-w-2xl space-y-4 text-base leading-relaxed" style={{ color: "var(--fg-muted)" }}>
            <h2 className="text-xl font-bold tracking-tight" style={{ color: "var(--fg)" }}>
              The short answer
            </h2>
            <p>
              A wiki is a place to write. ChatGPT is a place to ask. Bizdaptive is decision
              intelligence: a living company map so ownership, context, and receipts stay with the
              business when people move on.
            </p>
            <p>
              Read more in{" "}
              <Link to="/what-is-bizdaptive" className="underline-offset-2 hover:underline" style={{ color: "var(--accent)" }}>
                What is Bizdaptive?
              </Link>{" "}
              or see{" "}
              <Link to="/how-it-works" className="underline-offset-2 hover:underline" style={{ color: "var(--accent)" }}>
                how it works
              </Link>
              .
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button to="/contact?intent=waitlist" showArrow>
              Join the waitlist
            </Button>
            <Button to="/faq" variant="ghost">
              FAQ
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
