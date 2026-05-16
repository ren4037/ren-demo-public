import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { caseStudies } from "@/lib/demoData";

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export default async function CaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = caseStudies.find((entry) => entry.slug === slug);
  if (!item) notFound();

  return (
    <main>
      <SiteHeader />
      <section className="page-shell detail-shell">
        <p className="eyebrow">{item.sector}</p>
        <h1>{item.name}</h1>
        <strong className="result-pill">{item.result}</strong>
        <p className="lead">{item.detail}</p>
        <Link className="secondary-link" href="/cases">Back to cases</Link>
      </section>
    </main>
  );
}
