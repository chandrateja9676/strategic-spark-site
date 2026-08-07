import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import logo from "@/assets/cvtech-logo.png.asset.json";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all ${
        scrolled ? "glass-panel shadow-sm" : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8"
      >
        <a href="#home" className="flex min-w-0 items-center gap-2">
          <img src={logo.url} alt="CV Tech Solutions logo" className="h-9 w-9 shrink-0" />
          <span className="truncate font-display text-sm font-bold leading-tight tracking-tight sm:text-base">
            CV TECH <span className="text-gradient-brand">SOLUTIONS</span>
          </span>
        </a>

        <ul className="ml-auto hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <ThemeToggle />
          <Button variant="brand" className="hidden sm:inline-flex" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="min-h-11 min-w-11 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {open ? (
        <div className="glass-panel border-t lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-accent"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="px-3 pb-2 pt-3">
              <Button variant="brand" className="w-full" asChild>
                <a href="#contact" onClick={() => setOpen(false)}>
                  Get in Touch
                </a>
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}