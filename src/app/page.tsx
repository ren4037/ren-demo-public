import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";
import { SiteHeader } from "@/components/SiteHeader";
import { features, metrics } from "@/lib/demoData";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">GitHub learning sample</p>
          <h1>Public product pages with routes, forms, and reusable content.</h1>
          <p>
            This demo gives image-agent a compact public frontend to inspect when validating GitHub repository learning.
          </p>
          <div className="hero-actions">
            <Link className="primary-link" href="/features">Explore features</Link>
            <Link className="secondary-link" href="/cases">View cases</Link>
          </div>
        </div>
        <div className="metric-panel" aria-label="Repository summary">
          {metrics.map((metric) => (
            <div key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="content-band">
        <div className="section-heading">
          <p className="eyebrow">Core surface</p>
          <h2>Readable components for route and UI analysis</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => <FeatureCard feature={feature} key={feature.title} />)}
        </div>
      </section>
    </main>
  );
}
