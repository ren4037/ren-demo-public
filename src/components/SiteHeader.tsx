import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/features", label: "Features" },
  { href: "/cases", label: "Cases" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Ren Demo Public home">
        Ren Demo Public
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
