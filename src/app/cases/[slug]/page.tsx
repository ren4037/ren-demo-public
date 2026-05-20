import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/SiteHeader";
import { caseStudies } from "@/lib/demoData";

export function generateStaticParams() {
  return caseStudies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = caseStudies.find((entry) => entry.slug === slug);
  if (!item) return {};
  return {
    title: `${item.name} – Case Sample`,
    description: item.detail,
    alternates: { canonical: `/cases/${slug}` },
    openGraph: {
      title: `${item.name} – Case Sample`,
      description: item.detail,
      url: `/cases/${slug}`,
      type: "article",
    },
  };
}

export default async function CaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
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
        <div className="detail-grid">
          <div>
            <h2>Visible signals</h2>
            <ul>
              {item.signals.map((signal) => (
                <li key={signal}>{signal}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Known gaps</h2>
            <ul>
              {item.gaps.map((gap) => (
                <li key={gap}>{gap}</li>
              ))}
            </ul>
          </div>
        </div>
        <Link className="secondary-link" href="/cases">
          Back to cases
        </Link>
      </section>
    </main>
  );
}
