export type Feature = {
  title: string;
  summary: string;
  accent: string;
};

export type CaseStudy = {
  slug: string;
  name: string;
  sector: string;
  result: string;
  detail: string;
};

export const features: Feature[] = [
  {
    title: "Repository-aware onboarding",
    summary: "Import a frontend codebase, map the routes, and create a reusable site brief.",
    accent: "Cyan"
  },
  {
    title: "Visual task planning",
    summary: "Keep screenshots, UI notes, and workflow context together before a browser run.",
    accent: "Coral"
  },
  {
    title: "Stable capture handoff",
    summary: "Give an agent selectors, wait rules, and page intent before it opens the browser.",
    accent: "Lime"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "launch-room",
    name: "Launch Room",
    sector: "SaaS go-to-market",
    result: "42 percent faster screenshot QA",
    detail: "Launch Room uses route notes and checklist states to prepare polished product screenshots before release."
  },
  {
    slug: "studio-ledger",
    name: "Studio Ledger",
    sector: "Creative operations",
    result: "18 reusable capture recipes",
    detail: "Studio Ledger documents dashboard panels, invoice flows, and permission states for repeatable visual reviews."
  },
  {
    slug: "field-map",
    name: "Field Map",
    sector: "Logistics planning",
    result: "9 core workflows mapped",
    detail: "Field Map keeps route-level instructions for planning, dispatch, and exception review screens."
  }
];

export const metrics = [
  { label: "Routes", value: "5" },
  { label: "Components", value: "6" },
  { label: "Mock records", value: "12" }
];
