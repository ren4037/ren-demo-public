import Link from "next/link";
import type { CaseStudy } from "@/lib/demoData";

export function CaseList({ cases }: { cases: CaseStudy[] }) {
  return (
    <div className="case-grid">
      {cases.map((item) => (
        <Link className="case-card" href={`/cases/${item.slug}`} key={item.slug}>
          <span>{item.sector}</span>
          <h3>{item.name}</h3>
          <strong>{item.result}</strong>
          <p>{item.detail}</p>
          <em>Review sample</em>
        </Link>
      ))}
    </div>
  );
}
