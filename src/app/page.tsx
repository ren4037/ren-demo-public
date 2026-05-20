import Link from "next/link";
import type { Metadata } from "next";
import { FeatureCard } from "@/components/FeatureCard";
import { SiteHeader } from "@/components/SiteHeader";
import { baselineNotes, features, metrics } from "@/lib/demoData";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is an SEO baseline demo used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "An unoptimized baseline lets you measure the starting state before applying any improvements. Without a before snapshot, you cannot calculate the true impact of your optimization work.",
      },
    },
    {
      "@type": "Question",
      name: "Why are title tags and meta descriptions intentionally missing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The absence of title tags, meta descriptions, and schema markup is by design. This site tests how audit tools behave when metadata is missing, providing a controlled before state.",
      },
    },
    {
      "@type": "Question",
      name: "How do I use this site for my own SEO audits?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit the Testing Matrix for an overview of available page patterns, review the Case Samples for three distinct content shapes, then use the Intake form to log your own audit hypotheses.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: { absolute: "SEO Baseline Lab – Unoptimized Frontend for SEO Audits" },
  description:
    "Explore a minimal public site built as a neutral starting point for SEO and AI discoverability audits. Compare crawler behavior before and after optimization.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "SEO Baseline Lab – Unoptimized Frontend for SEO Audits",
    description:
      "Explore a minimal public site built as a neutral starting point for SEO and AI discoverability audits. Compare crawler behavior before and after optimization.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "SEO Baseline Lab – unoptimized demo pages for SEO audit experiments",
      },
    ],
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SiteHeader />
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Unoptimized baseline</p>
          <h1>Designed pages for first-pass SEO testing.</h1>
          <p>
            A small public frontend with realistic page shapes, repeated content
            blocks, and clear visual states for audit experiments.
          </p>
          <div className="hero-actions">
            <Link className="primary-link" href="/features">
              Open matrix
            </Link>
            <Link className="secondary-link" href="/cases">
              Review samples
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="metric-panel" aria-label="Repository summary">
            {metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
          <div className="scan-card" aria-label="Audit preview">
            <span>Audit preview</span>
            <strong>Baseline crawl</strong>
            <div className="scan-line wide" />
            <div className="scan-line mid" />
            <div className="scan-line short" />
          </div>
        </div>
      </section>
      <section className="status-band" aria-label="Baseline status">
        {baselineNotes.map((note) => (
          <div key={note.label}>
            <span>{note.label}</span>
            <strong>{note.value}</strong>
          </div>
        ))}
      </section>
      <section className="content-band">
        <div className="section-heading">
          <p className="eyebrow">Test surface</p>
          <h2>Neutral pages before optimization work begins</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <FeatureCard feature={feature} key={feature.title} />
          ))}
        </div>
      </section>
      <section className="content-band">
        <div className="section-heading">
          <h2>What this demo is</h2>
        </div>
        <p>
          SEO Baseline Lab is an intentionally unoptimized public site built for
          testing SEO and AI discoverability tools. Every page is a controlled
          starting point — plain HTML structure, no metadata tuning, no schema
          markup, no keyword strategy. That neutral state is the point.
        </p>
        <p>
          Auditing this site before any optimization work gives you a clean
          before snapshot. Run your crawlers, test your tools, capture
          screenshots and structured data counts. Then apply improvements and
          measure the delta. The project keeps content human-readable without
          adding search-specific markup, so every optimization you apply is
          measurable and attributable.
        </p>
      </section>
      <section className="content-band">
        <div className="section-heading">
          <h2>Page inventory</h2>
        </div>
        <p>
          The demo includes four main route types plus three dynamic case detail
          pages:
        </p>
        <ul>
          <li>
            <Link href="/">Home</Link> – Entry point with a baseline status
            panel and feature summary.
          </li>
          <li>
            <Link href="/features">Testing Matrix</Link> – An index of the three
            page patterns used across the project.
          </li>
          <li>
            <Link href="/cases">Case Samples</Link> – An index linking to three
            content shape demos.
          </li>
          <li>
            <Link href="/contact">Intake</Link> – A form page for capturing
            future audit hypotheses.
          </li>
          <li>
            <Link href="/cases/baseline-product-page">
              Baseline Product Page
            </Link>{" "}
            – A commercial-style page with hero copy and no metadata.
          </li>
          <li>
            <Link href="/cases/thin-article-page">Thin Article Page</Link> – A
            lightweight editorial page for testing thin-content improvements.
          </li>
          <li>
            <Link href="/cases/local-service-page">Local Service Page</Link> – A
            location page without local schema or geo markup.
          </li>
        </ul>
        <p>
          Each page is intentionally incomplete in different ways, so you can
          target specific SEO dimensions independently.
        </p>
      </section>
      <section className="content-band">
        <div className="section-heading">
          <h2>How to run an audit on this site</h2>
        </div>
        <ol>
          <li>
            Visit the <Link href="/features">Testing Matrix</Link> to understand
            the available page patterns.
          </li>
          <li>
            Open individual <Link href="/cases">Case Samples</Link> to inspect
            specific content and structural gaps.
          </li>
          <li>
            Run your SEO or AI crawler across the site and record the baseline
            state.
          </li>
          <li>
            Apply your planned optimizations to a copy or fork of the codebase.
          </li>
          <li>
            Re-crawl and compare the before and after results to measure impact.
          </li>
        </ol>
      </section>
      <section className="content-band">
        <div className="section-heading">
          <h2>Frequently asked questions</h2>
        </div>
        <dl>
          <dt>What is an SEO baseline demo used for?</dt>
          <dd>
            An unoptimized baseline lets you measure the starting state before
            applying any improvements. Without a before snapshot, you cannot
            calculate the true impact of your optimization work.
          </dd>
          <dt>
            Why are title tags and meta descriptions intentionally missing?
          </dt>
          <dd>
            The absence of title tags, meta descriptions, and schema markup is
            by design. This site tests how audit tools behave when metadata is
            missing, providing a controlled before state.
          </dd>
          <dt>How do I use this site for my own SEO audits?</dt>
          <dd>
            Visit the <Link href="/features">Testing Matrix</Link> for an
            overview of page patterns, review the{" "}
            <Link href="/cases">Case Samples</Link> for three distinct content
            shapes, and use the <Link href="/contact">Intake form</Link> to log
            your own audit hypotheses.
          </dd>
        </dl>
      </section>
    </main>
  );
}
