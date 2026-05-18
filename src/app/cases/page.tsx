import { CaseList } from "@/components/CaseList";
import { SiteHeader } from "@/components/SiteHeader";
import { caseStudies } from "@/lib/demoData";

export default function CasesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell">
        <p className="eyebrow">Page samples</p>
        <h1>Three content shapes for search audit experiments</h1>
        <p className="lead">Each sample uses a dynamic detail route with visible content gaps that can be measured before later optimization rounds.</p>
        <CaseList cases={caseStudies} />
      </section>
    </main>
  );
}
