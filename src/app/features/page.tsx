import type { Metadata } from "next";
import { FeatureCard } from "@/components/FeatureCard";
import { SiteHeader } from "@/components/SiteHeader";
import { checkpoints, features } from "@/lib/demoData";

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to run a baseline SEO crawl audit",
  description:
    "Steps for auditing a website's SEO baseline before applying optimizations.",
  step: checkpoints.map((text, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    text,
  })),
};

export const metadata: Metadata = {
  title: "Testing Matrix – Page Patterns for Baseline Crawl Reviews",
  description:
    "A compact route map with mixed page types for comparing crawler output before SEO changes. Understand baseline content density, copy mix, and UI states.",
  alternates: { canonical: "/features" },
  openGraph: {
    title: "Testing Matrix – Page Patterns for Baseline Crawl Reviews",
    description:
      "A compact route map with mixed page types for comparing crawler output before SEO changes. Understand baseline content density, copy mix, and UI states.",
    url: "/features",
    type: "website",
  },
};

export default function FeaturesPage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <SiteHeader />
      <section className="page-shell">
        <p className="eyebrow">Testing matrix</p>
        <h1>Page patterns for baseline crawl reviews</h1>
        <p className="lead">
          The project includes a compact route map, repeated modules, and static
          detail pages for comparing crawler output before SEO changes.
        </p>
        <h2>Available page patterns</h2>
        <div className="feature-grid">
          {features.map((feature) => (
            <FeatureCard feature={feature} key={feature.title} />
          ))}
        </div>
        <h2>Audit workflow</h2>
        <ol className="workflow-list">
          {checkpoints.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </main>
  );
}
