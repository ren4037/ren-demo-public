import { ContactForm } from "@/components/ContactForm";
import { SiteHeader } from "@/components/SiteHeader";

export default function ContactPage() {
  return (
    <main>
      <SiteHeader />
      <section className="page-shell split-layout">
        <div>
          <p className="eyebrow">Intake</p>
          <h1>Capture the next SEO test hypothesis</h1>
          <p className="lead">Use this form to collect a future audit idea while keeping the first version focused on baseline frontend behavior.</p>
        </div>
        <ContactForm />
      </section>
    </main>
  );
}
