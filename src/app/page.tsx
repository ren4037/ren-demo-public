import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";
import { SiteHeader } from "@/components/SiteHeader";
import { baselineNotes, features, metrics } from "@/lib/demoData";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Unoptimized baseline</p>
          <h1>Designed pages for first-pass SEO testing.</h1>
          <p>
            A small public frontend with realistic page shapes, repeated content blocks, and clear visual states for audit experiments.
          </p>
          <div className="hero-actions">
            <Link className="primary-link" href="/features">Open matrix</Link>
            <Link className="secondary-link" href="/cases">Review samples</Link>
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
          {features.map((feature) => <FeatureCard feature={feature} key={feature.title} />)}
        </div>
      </section>
    </main>
  );
}
