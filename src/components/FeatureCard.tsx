import type { Feature } from "@/lib/demoData";

export function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <article className="feature-card">
      <span className="accent-label">{feature.accent}</span>
      <h3>{feature.title}</h3>
      <p>{feature.summary}</p>
      <small>{feature.detail}</small>
    </article>
  );
}
