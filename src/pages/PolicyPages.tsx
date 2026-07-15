import {
  BadgeCheck,
  Cookie,
  Database,
  FileText,
  LockKeyhole,
  Mail,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "../components/PageHero";
import { Button } from "../components/Button";
import { HoverIcon } from "../components/HoverIcon";
import { AnimatedCard } from "../components/motion";
import { usePageTitle } from "../hooks/usePageTitle";

type PolicySection = {
  title: string;
  icon: LucideIcon;
  paragraphs?: string[];
  bullets?: string[];
};

type PolicyPageProps = {
  eyebrow: string;
  title: string;
  lead: string;
  updated: string;
  sections: PolicySection[];
};

function PolicyPage({ eyebrow, title, lead, updated, sections }: PolicyPageProps) {
  usePageTitle(`${title} | Bizdaptive`);

  return (
    <div style={{ background: "var(--bg)" }}>
      <PageHero eyebrow={eyebrow} title={title} lead={lead} />

      <section className="px-5 pb-24 sm:px-8">
        <div className="mx-auto max-w-4xl space-y-4">
          <div
            className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border px-5 py-4 text-sm"
            style={{ borderColor: "var(--line)", background: "var(--bg-soft)", color: "var(--fg-muted)" }}
          >
            <span>Operated by Spirality Solutions under the Bizdaptive brand.</span>
            <span>Last updated: {updated}</span>
          </div>

          {sections.map((section, index) => (
            <AnimatedCard key={section.title} delay={index * 0.04} className="p-6 sm:p-8">
              <div className="flex items-start gap-4">
                <HoverIcon icon={section.icon} variant="tilt" color="var(--accent)" className="!mb-0" />
                <div className="min-w-0 flex-1">
                  <h2 className="text-xl font-bold tracking-tight sm:text-2xl" style={{ color: "var(--fg)" }}>
                    {section.title}
                  </h2>
                  {section.paragraphs?.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 60)}
                      className="mt-4 text-sm leading-7 sm:text-[15px]"
                      style={{ color: "var(--fg-muted)" }}
                    >
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="mt-4 space-y-2 text-sm leading-6 sm:text-[15px]" style={{ color: "var(--fg-muted)" }}>
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 size-1.5 shrink-0 rounded-full" style={{ background: "var(--accent)" }} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </AnimatedCard>
          ))}

          <div
            className="flex flex-col gap-5 rounded-2xl border p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8"
            style={{ borderColor: "var(--line)", background: "var(--card-solid)" }}
          >
            <div>
              <p className="font-semibold" style={{ color: "var(--fg)" }}>
                Questions about this policy?
              </p>
              <a
                href="mailto:info@bizdaptive.com"
                className="mt-1 inline-block text-sm underline-offset-2 hover:underline"
                style={{ color: "var(--accent)" }}
              >
                info@bizdaptive.com
              </a>
            </div>
            <Button to="/contact" variant="ghost">
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

const privacySections: PolicySection[] = [
  {
    title: "Information you provide",
    icon: Database,
    paragraphs: [
      "Depending on how you use Bizdaptive, we may process your name and email address; account credentials through our authentication provider; organization name, role, and professional information; and messages sent through email, support, waitlist, onboarding, or product experiences.",
      "Product use may include organizational information such as people, teams, reporting relationships, goals, KPIs, decisions, tasks, observations, evidence, operating context, feedback, and corrections.",
      "Our current website contact and waitlist links may open your email application. In that case, your email provider and our email provider process the sender details and message you choose to send.",
    ],
  },
  {
    title: "Technical and usage information",
    icon: LockKeyhole,
    paragraphs: [
      "When you access Bizdaptive, we and our infrastructure providers may process IP addresses, request timestamps, browser and device information, requested pages and API routes, authentication and session information, and feature usage, error, performance, and security logs.",
      "Where relevant to product operation, we may process AI usage metadata such as model, token usage, latency, and success or failure status, along with subscription, billing, and credit-usage records.",
      "We do not currently use advertising cookies or third-party advertising trackers.",
    ],
  },
  {
    title: "Files and extracted information",
    icon: FileText,
    paragraphs: [
      "Some Bizdaptive experiences may allow documents to be provided as organizational context. Original uploaded files are processed transiently and discarded after processing. Bizdaptive does not store the original uploaded files.",
      "Bizdaptive may retain information derived from a document, including summaries, extracted facts, source references, checksums, classifications, confidence information, and clarification history.",
      "Do not provide a file unless you have the right and authority to provide and process its contents.",
    ],
  },
  {
    title: "How we use information",
    icon: ShieldCheck,
    bullets: [
      "Provide and operate the Bizdaptive website and product.",
      "Create and manage accounts and organizations.",
      "Understand organizational context supplied by users.",
      "Generate product outputs, recommendations, summaries, and reasoning trails.",
      "Respond to support requests, waitlist messages, and product inquiries.",
      "Process subscriptions, credits, and payments.",
      "Secure, monitor, diagnose, and improve the service.",
      "Detect misuse, fraud, security incidents, and technical failures.",
      "Communicate material service or policy updates.",
      "Meet legal obligations and protect users, Spirality Solutions, and others.",
    ],
  },
  {
    title: "AI processing",
    icon: LockKeyhole,
    paragraphs: [
      "Bizdaptive uses AI services to process prompts and organizational context and produce product outputs. Depending on availability and configuration, information may be processed by Anthropic, Google services such as Gemini or Vertex AI, and OpenAI.",
      "We do not use customer organizational information to train our own general-purpose AI models. Third-party AI providers process information according to their applicable service terms, privacy commitments, and the configurations used by Bizdaptive.",
      "AI-generated outputs may be incomplete or inaccurate and should be reviewed before being used for important business decisions.",
    ],
  },
  {
    title: "Service providers and disclosures",
    icon: Database,
    paragraphs: [
      "Providers that help operate Bizdaptive may include Supabase for database services and authentication, Vercel for application hosting and delivery, Anthropic, Google, and OpenAI for AI processing, Stripe for payment and subscription processing, and email, security, monitoring, and professional-service providers.",
      "These providers receive information only as reasonably necessary to perform their services. We may also disclose information when required by law, to investigate fraud or security incidents, to protect rights and safety, or in connection with a merger, financing, acquisition, restructuring, or sale of business assets.",
    ],
  },
  {
    title: "Selling and advertising",
    icon: BadgeCheck,
    paragraphs: [
      "We do not sell personal information. We do not share personal information with data brokers or use organizational information for third-party targeted advertising.",
    ],
  },
  {
    title: "Cookies and local storage",
    icon: Cookie,
    paragraphs: [
      "Bizdaptive uses authentication and session technologies required to keep users signed in and secure their sessions.",
      "The service may also use browser storage for preferences such as theme settings, onboarding progress, drafts, and product guidance. We do not currently use third-party advertising cookies or cross-site advertising trackers.",
    ],
  },
  {
    title: "Data retention",
    icon: FileText,
    paragraphs: [
      "Original uploaded files are not retained. Other information is retained for as long as reasonably necessary to provide the service, maintain organizational and governance records requested by users, secure and diagnose the service, maintain billing, audit, and legal records, resolve disputes, enforce agreements, and meet legal obligations.",
      "Different categories of information may have different retention periods. Some governance records and logs are designed to preserve organizational history and may remain until the relevant organization or account is deleted, subject to legal, security, backup, and technical requirements.",
      "We will not promise a specific deletion period unless that period is supported by an implemented retention process.",
    ],
  },
  {
    title: "Security",
    icon: ShieldCheck,
    paragraphs: [
      "We use technical and organizational measures designed to protect information, including authenticated access, encrypted connections, database access controls, and organization-level data isolation.",
      "No service can guarantee absolute security. Users are responsible for protecting their credentials and limiting submitted information to what is reasonably necessary.",
    ],
  },
  {
    title: "International processing",
    icon: Database,
    paragraphs: [
      "Our service providers may process information in India, the United States, or other countries where they operate. Where required, we use appropriate contractual or other safeguards for international processing.",
    ],
  },
  {
    title: "Your choices and rights",
    icon: BadgeCheck,
    bullets: [
      "Ask whether we hold personal information about you and request access.",
      "Request correction of inaccurate information.",
      "Request deletion of eligible information.",
      "Withdraw consent where processing is based on consent.",
      "Object to or restrict certain processing.",
      "Request a portable copy of eligible information.",
      "Raise a concern or grievance about our handling of personal information.",
    ],
    paragraphs: [
      "Rights depend on applicable law. We may need to verify your identity and authority before acting. Some information may be retained where required for legal, security, billing, audit, or legitimate record-keeping purposes.",
      "To submit a privacy request, email info@bizdaptive.com with the subject line “Privacy Request.”",
    ],
  },
  {
    title: "Children’s privacy",
    icon: LockKeyhole,
    paragraphs: [
      "Bizdaptive is intended for adults using it for professional or business purposes. It is not intended for individuals under 18, and we do not knowingly collect personal information from children.",
    ],
  },
  {
    title: "Changes to this policy",
    icon: FileText,
    paragraphs: [
      "We may update this Privacy Policy as Bizdaptive develops or our processing changes. We will update the revision date and provide additional notice where required by law.",
    ],
  },
  {
    title: "Contact",
    icon: Mail,
    paragraphs: [
      "For privacy questions or requests, email info@bizdaptive.com. If our processing changes materially, we will update this page and its revision date.",
    ],
  },
];

const termsSections: PolicySection[] = [
  {
    title: "Using this website",
    icon: BadgeCheck,
    paragraphs: [
      "You may use this website for lawful informational and business purposes. You may not interfere with the website, attempt unauthorized access, introduce harmful code, scrape it abusively, or misuse Bizdaptive branding or content.",
    ],
  },
  {
    title: "Product access",
    icon: LockKeyhole,
    paragraphs: [
      "Joining the waitlist, requesting a demonstration, or discussing a design partnership does not guarantee product access, functionality, pricing, availability, or delivery dates. Product use may require a separate written agreement.",
      "If you receive an account, you are responsible for protecting your credentials, maintaining accurate account information, and promptly reporting suspected unauthorized access.",
    ],
  },
  {
    title: "Files you choose to provide",
    icon: Database,
    paragraphs: [
      "You must have the right to provide any file submitted for processing. Bizdaptive processes uploaded files transiently to extract relevant context and does not retain the original uploaded file after processing.",
    ],
  },
  {
    title: "AI-generated outputs",
    icon: ShieldCheck,
    paragraphs: [
      "Bizdaptive may use AI services to generate summaries, recommendations, classifications, and reasoning trails. AI-generated outputs may be incomplete or inaccurate and must be reviewed before being used for important business, legal, financial, employment, safety, or compliance decisions.",
    ],
  },
  {
    title: "Subscriptions and payments",
    icon: BadgeCheck,
    paragraphs: [
      "Paid product access may involve subscriptions, usage credits, and payment processing through Stripe. Applicable prices, billing periods, renewal terms, taxes, cancellation rights, and refund terms will be shown before purchase or included in a separate customer agreement.",
    ],
  },
  {
    title: "Content and intellectual property",
    icon: FileText,
    paragraphs: [
      "The website, product concepts, designs, copy, graphics, marks, and software are owned by Spirality Solutions or used with permission. These terms do not transfer ownership or grant a license beyond viewing and using the website as intended.",
    ],
  },
  {
    title: "Disclaimers and responsibility",
    icon: ShieldCheck,
    paragraphs: [
      "The website is provided on an as-available basis for general information. We do not promise that every statement will always be complete, current, or error-free. To the extent permitted by law, Spirality Solutions is not responsible for indirect or consequential losses arising from use of this marketing website.",
    ],
  },
  {
    title: "Changes",
    icon: BadgeCheck,
    paragraphs: [
      "We may update the website and these terms as Bizdaptive evolves. Continued use after an update means the revised terms apply from their stated effective date.",
    ],
  },
];

const cookieSections: PolicySection[] = [
  {
    title: "Essential authentication and sessions",
    icon: Cookie,
    paragraphs: [
      "Bizdaptive uses authentication and session technologies required to keep users signed in, protect account access, and secure product sessions. Essential technologies cannot be disabled through a consent banner because they are needed to provide the requested service.",
    ],
  },
  {
    title: "Preferences and product storage",
    icon: FileText,
    paragraphs: [
      "The service may use browser storage for preferences and product features such as theme settings, onboarding progress, drafts, and product guidance.",
    ],
  },
  {
    title: "Analytics and advertising",
    icon: BadgeCheck,
    paragraphs: [
      "We do not currently use third-party advertising cookies, cross-site advertising trackers, or organizational information for targeted advertising. If we add non-essential analytics or marketing technologies, we will update this page and provide choices where required.",
    ],
  },
  {
    title: "Managing browser storage",
    icon: FileText,
    paragraphs: [
      "You can clear or block cookies and local storage through your browser settings. Blocking essential storage may prevent authentication, session security, or preferences from working correctly.",
    ],
  },
];

const securitySections: PolicySection[] = [
  {
    title: "Our security approach",
    icon: ShieldCheck,
    paragraphs: [
      "We use technical and organizational measures designed to protect information, including authenticated access, encrypted connections, database access controls, organization-level data isolation, data minimization, least-privilege access, auditability, and secure development practices.",
      "No service can guarantee absolute security. Users are responsible for protecting their credentials and limiting submitted information to what is reasonably necessary.",
    ],
  },
  {
    title: "Current safeguards",
    icon: LockKeyhole,
    bullets: [
      "Encryption in transit through modern HTTPS connections.",
      "Uploaded source files are processed transiently and are not retained.",
      "Authentication and session controls for account access.",
      "Database access controls and organization-level data isolation.",
      "Restricted internal access based on operational need.",
      "Dependency review, source control, and deployment controls.",
      "Evidence-oriented product design with correction and history in mind.",
      "Incident assessment and communication procedures under development.",
    ],
  },
  {
    title: "Compliance status",
    icon: BadgeCheck,
    paragraphs: [
      "ISO 27001 certification and SOC 2 Type II attestation are not currently complete. We are aligning documentation, controls, and evidence toward those goals. We will not describe a certification or attestation as achieved until it is independently completed.",
    ],
  },
  {
    title: "Report a concern",
    icon: Mail,
    paragraphs: [
      "If you believe you found a security issue, email info@bizdaptive.com with a clear description and steps to reproduce. Do not access, alter, or retain data that does not belong to you.",
    ],
  },
];

const dataSections: PolicySection[] = [
  {
    title: "Data ownership",
    icon: Database,
    paragraphs: [
      "Your organization retains ownership of the information it provides to Bizdaptive. Uploaded source files are not retained. We process organizational context only to provide, secure, support, and improve the agreed service, subject to the applicable customer agreement.",
    ],
  },
  {
    title: "Uploaded files",
    icon: FileText,
    paragraphs: [
      "Files are processed transiently to identify relevant organizational context. The original uploaded file is discarded after processing and is not stored in Bizdaptive.",
      "Organizational context produced from that processing may become part of the customer's living company picture. It remains subject to customer controls, correction, and the applicable agreement.",
    ],
  },
  {
    title: "Minimum necessary data",
    icon: ShieldCheck,
    paragraphs: [
      "Our design goal is to collect and retain the minimum information needed to maintain a useful, living company picture. We aim to avoid unnecessary duplication and keep corrections and superseded facts clearly labeled.",
    ],
  },
  {
    title: "AI and customer context",
    icon: LockKeyhole,
    paragraphs: [
      "Bizdaptive may use Anthropic, Google services such as Gemini or Vertex AI, and OpenAI to process prompts and organizational context. We do not use customer organizational information to train our own general-purpose AI models.",
      "Third-party AI providers process information according to their applicable service terms, privacy commitments, and the configurations used by Bizdaptive.",
    ],
  },
  {
    title: "Derived document information",
    icon: Database,
    paragraphs: [
      "Although original uploaded files are discarded after processing, Bizdaptive may retain derived information such as summaries, extracted facts, source references, checksums, classifications, confidence information, and clarification history as part of the customer's organizational context.",
    ],
  },
  {
    title: "Context retention, deletion, and export",
    icon: FileText,
    paragraphs: [
      "Uploaded files are excluded from retention because they are not stored. Retention periods, deletion procedures, export capabilities, subprocessors, and backup handling for organizational context will be documented in customer agreements and product documentation as those systems become available.",
    ],
  },
  {
    title: "Data processing agreements",
    icon: BadgeCheck,
    paragraphs: [
      "Where Bizdaptive processes personal data for a customer, a Data Processing Agreement may be required. Contact us to discuss your jurisdiction, security requirements, and contractual needs.",
    ],
  },
];

export function PrivacyPage() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Privacy Policy"
      lead="What we process when you visit the website, contact us, create an account, or use the Bizdaptive platform."
      updated="July 15, 2026"
      sections={privacySections}
    />
  );
}

export function TermsPage() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Terms of Service"
      lead="The rules for using the Bizdaptive website and engaging with our early product."
      updated="July 15, 2026"
      sections={termsSections}
    />
  );
}

export function CookiesPage() {
  return (
    <PolicyPage
      eyebrow="Legal"
      title="Cookie Policy"
      lead="How this website uses cookies and similar browser storage."
      updated="July 15, 2026"
      sections={cookieSections}
    />
  );
}

export function SecurityPage() {
  return (
    <PolicyPage
      eyebrow="Trust"
      title="Security and Compliance"
      lead="A clear view of our current safeguards, design principles, and work in progress."
      updated="July 15, 2026"
      sections={securitySections}
    />
  );
}

export function DataHandlingPage() {
  return (
    <PolicyPage
      eyebrow="Trust"
      title="Data Handling"
      lead="How we intend to protect organizational context throughout its lifecycle."
      updated="July 15, 2026"
      sections={dataSections}
    />
  );
}
