import { Linkedin } from "lucide-react";
import logo from "@/assets/cvtech-logo.png.asset.json";

const columns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "Services", href: "#services" },
      { label: "Solutions", href: "#solutions" },
      { label: "About Us", href: "#about" },
      { label: "Careers", href: "#careers" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Custom Software Engineering", href: "#services" },
      { label: "Cloud Infrastructure", href: "#services" },
      { label: "Data Analytics & AI", href: "#services" },
      { label: "Strategic IT Consulting", href: "#services" },
    ],
  },
  {
    title: "Legal & Policies",
    links: [
      { label: "Privacy Policy", href: "#contact" },
      { label: "Terms of Service", href: "#contact" },
      { label: "Remote Work Policy", href: "#careers" },
      { label: "Internship Eligibility", href: "#careers" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border surface-muted">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <img src={logo.url} alt="CV Tech Solutions logo" className="h-9 w-9 shrink-0" />
              <span className="font-display text-base font-bold">
                CV TECH <span className="text-gradient-brand">SOLUTIONS</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              IT services and strategic consulting for enterprises, startups and modern businesses —
              bridging complex engineering with real business growth.
            </p>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg border border-border bg-card px-4 text-sm font-medium transition-colors hover:border-brand hover:text-brand"
            >
              <Linkedin className="size-4" aria-hidden /> LinkedIn Page
            </a>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-brand"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} CV Tech Solutions. All rights reserved.</p>
          <p>Remote-first · Global delivery</p>
        </div>
      </div>
    </footer>
  );
}