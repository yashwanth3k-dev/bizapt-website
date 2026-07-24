import type { ReactNode } from "react";
import type { BlogPost, KpiRow, SolutionRow, UseCase } from "../content/types";

type SectionProps = {
  heading: string;
  children: ReactNode;
};

export function ContentSection({ heading, children }: SectionProps) {
  return (
    <section className="content-section">
      <h2 className="content-section__heading">{heading}</h2>
      <div className="content-section__body">{children}</div>
    </section>
  );
}

export function ContentList({ items }: { items: string[] }) {
  return (
    <ul className="content-list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export function SolutionTable({ rows }: { rows: SolutionRow[] }) {
  return (
    <div className="content-table-wrap">
      <table className="content-table">
        <thead>
          <tr>
            <th>Capability</th>
            <th>Decision enabled</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.capability}>
              <td>
                {row.capability}
                {row.onArc && <span className="content-tag">On the POC arc</span>}
              </td>
              <td>{row.decision}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function KpiTable({ rows }: { rows: KpiRow[] }) {
  return (
    <div className="content-table-wrap">
      <table className="content-table content-table--kpi">
        <thead>
          <tr>
            <th>Metric</th>
            <th>Before</th>
            <th>After</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.metric}>
              <td>
                {row.metric}
                {row.note && <span className="content-table__note">{row.note}</span>}
              </td>
              <td>{row.before}</td>
              <td>{row.after}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function WorkflowSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="content-workflow">
      {steps.map((step, i) => (
        <li key={step}>
          <span className="content-workflow__num">{i + 1}</span>
          <span>{step}</span>
        </li>
      ))}
    </ol>
  );
}

export function HookBlock({ text }: { text: string }) {
  return (
    <blockquote className="content-hook">
      {text.split("\n").map((line) => (
        <p key={line}>{line}</p>
      ))}
    </blockquote>
  );
}

/** Full archive render — marketing pages use `UseCaseStory` (short). Keep for PDFs/deep dives. */
export function UseCaseBody({ uc }: { uc: UseCase }) {
  return (
    <div className="content-prose">
      <ContentSection heading="Current situation">
        <p>{uc.currentSituation}</p>
      </ContentSection>
      <ContentSection heading="Business challenges">
        <ContentList items={uc.challenges.slice(0, 4)} />
      </ContentSection>
      <ContentSection heading="Bizdaptive solution">
        <SolutionTable rows={uc.solutions.filter((s) => !s.onArc).slice(0, 3)} />
      </ContentSection>
      <ContentSection heading="Workflow">
        <WorkflowSteps steps={uc.workflow} />
      </ContentSection>
      <ContentSection heading="KPIs">
        <KpiTable rows={uc.kpis.slice(0, 3)} />
      </ContentSection>
    </div>
  );
}

export function BlogBody({ post }: { post: BlogPost }) {
  return (
    <div className="content-prose">
      <p className="blog-subtitle">
        {post.tags.join(" · ")} · {post.author} · {post.date}
      </p>
      <p>{post.excerpt}</p>

      {post.sections.map((section) => (
        <ContentSection key={section.heading} heading={section.heading}>
          <p>{section.body}</p>
          {section.callouts && section.callouts.length > 0 && <ContentList items={section.callouts} />}
          {section.bullets && section.bullets.length > 0 && <ContentList items={section.bullets} />}
        </ContentSection>
      ))}

      <p className="blog-soft-cta">{post.closing}</p>
      <p className="blog-soft-cta">{post.cta.label}</p>
    </div>
  );
}
