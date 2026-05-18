import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Matrix" },
  { href: "/cases", label: "Samples" },
  { href: "/contact", label: "Intake" }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="SEO Baseline Lab home">
        SEO Baseline Lab
      </Link>
      <nav aria-label="Primary navigation">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
