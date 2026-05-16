import { ContactForm } from "@/components/ContactForm";
import { SiteHeader } from "@/components/SiteHeader";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell split-layout">
        <div>
          <p className="eyebrow">Contact</p>
          <h1>Request a repository learning walkthrough</h1>
          <p className="lead">This page includes a client component and a mock POST endpoint for scanner coverage.</p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
