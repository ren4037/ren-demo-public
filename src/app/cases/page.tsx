import type { Metadata } from "next";
import { CaseList } from "@/components/CaseList";
import { SiteHeader } from "@/components/SiteHeader";
import { caseStudies } from "@/lib/demoData";

export const metadata: Metadata = {
  title: "Case Samples – Three Content Shapes for SEO Audits",
  description:
    "Three demo pages representing different real-world content shapes – product, article, and local service – for audit baseline comparison before optimization.",
  alternates: { canonical: "/cases" },
  openGraph: {
    title: "Case Samples – Three Content Shapes for SEO Audits",
    description:
      "Three demo pages representing different real-world content shapes – product, article, and local service – for audit baseline comparison before optimization.",
    url: "/cases",
    type: "website",
  },
};

export default function CasesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell">
        <p className="eyebrow">Page samples</p>
        <h1>Three content shapes for search audit experiments</h1>
        <p className="lead">
          Each sample uses a dynamic detail route with visible content gaps that
          can be measured before later optimization rounds.
        </p>
        <h2>Browse page samples</h2>
        <CaseList cases={caseStudies} />
      </section>
    </main>
  );
}
