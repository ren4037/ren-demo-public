import { FeatureCard } from "@/components/FeatureCard";
import { SiteHeader } from "@/components/SiteHeader";
import { checkpoints, features } from "@/lib/demoData";

export default function FeaturesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell">
        <p className="eyebrow">Testing matrix</p>
        <h1>Page patterns for baseline crawl reviews</h1>
        <p className="lead">The project includes a compact route map, repeated modules, and static detail pages for comparing crawler output before SEO changes.</p>
        <div className="feature-grid">
          {features.map((feature) => <FeatureCard feature={feature} key={feature.title} />)}
        </div>
        <ol className="workflow-list">
          {checkpoints.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>
    </main>
  );
}
