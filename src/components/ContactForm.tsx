"use client";

import { FormEvent, useState } from "react";

type SubmitState = "idle" | "submitting" | "sent" | "error";

export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("submitting");
    const form = new FormData(event.currentTarget);
    if (process.env.NEXT_PUBLIC_STATIC_EXPORT === "true") {
      await new Promise((resolve) => setTimeout(resolve, 300));
      console.info("Static export SEO test note captured", Object.fromEntries(form.entries()));
      setState("sent");
      return;
    }
    const response = await fetch("/api/leads", {
      method: "POST",
      body: JSON.stringify(Object.fromEntries(form.entries())),
      headers: { "Content-Type": "application/json" }
    });
    setState(response.ok ? "sent" : "error");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Name
        <input name="name" placeholder="Renee Chen" required />
      </label>
      <label>
        Work email
        <input name="email" placeholder="ren@example.com" type="email" required />
      </label>
      <label>
        Test hypothesis
        <textarea name="goal" placeholder="Describe the page pattern that should be audited next." rows={5} required />
      </label>
      <button disabled={state === "submitting"} type="submit">
        {state === "submitting" ? "Sending" : "Submit note"}
      </button>
      {state === "sent" && <p className="form-note">Test note captured by the mock route.</p>}
      {state === "error" && <p className="form-note error">Something went wrong. Please try again.</p>}
    </form>
  );
}
