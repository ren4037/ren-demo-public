import { CaseList } from "@/components/CaseList";
import { SiteHeader } from "@/components/SiteHeader";
import { caseStudies } from "@/lib/demoData";

export default function CasesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell">
        <p className="eyebrow">Cases</p>
        <h1>Example workflows for browser capture planning</h1>
        <p className="lead">Each case has a detail route so a learning agent can discover dynamic App Router pages.</p>
        <CaseList cases={caseStudies} />
      </section>
    </main>
  );
}
