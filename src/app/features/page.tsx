import { FeatureCard } from "@/components/FeatureCard";
import { SiteHeader } from "@/components/SiteHeader";
import { features } from "@/lib/demoData";

const workflow = ["Import repository", "Extract route map", "Review UI states", "Write site knowledge"];

export default function FeaturesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell">
        <p className="eyebrow">Features</p>
        <h1>Small but realistic frontend structure</h1>
        <p className="lead">The codebase intentionally includes reusable data, shared components, and a client form for learning tests.</p>
        <div className="feature-grid">
          {features.map((feature) => <FeatureCard feature={feature} key={feature.title} />)}
        </div>
        <ol className="workflow-list">
          {workflow.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>
    </main>
  );
}
