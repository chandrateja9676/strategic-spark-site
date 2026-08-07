import { motion } from "motion/react";
import { ArrowRight, Cloud, Code2, Database, Plug, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const stackItems = [
  { icon: Cloud, label: "Cloud Infrastructure", meta: "AWS · Azure · Kubernetes" },
  { icon: Plug, label: "APIs & Integrations", meta: "REST · GraphQL · Events" },
  { icon: Code2, label: "React Engineering", meta: "Next.js · TypeScript" },
  { icon: Database, label: "Data Systems", meta: "PostgreSQL · MongoDB" },
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-navy opacity-[0.06] dark:opacity-100"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-96 w-96 rounded-full bg-highlight/20 blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
            <Sparkles className="size-3.5" /> IT Services &amp; Strategic Consulting
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            Architecting Next-Gen IT Solutions &amp;{" "}
            <span className="text-gradient-brand">Strategic Engineering</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We empower enterprises, startups, and modern businesses to innovate, scale, and build
            resilient digital products with cutting-edge tech stacks.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="brand" size="xl" asChild>
              <a href="#services">
                Explore Services <ArrowRight />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Book a Consultation</a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="animate-float glass-panel rounded-3xl p-5 shadow-elegant sm:p-7">
            <div className="flex items-center justify-between gap-4">
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  Live Stack
                </p>
                <p className="truncate font-display text-lg font-bold">Platform Health</p>
              </div>
              <span className="shrink-0 rounded-full bg-highlight/15 px-3 py-1 text-xs font-semibold text-highlight-foreground dark:text-highlight">
                All systems nominal
              </span>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {stackItems.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="rounded-2xl border border-border bg-card/70 p-4 transition-transform hover:-translate-y-1"
                >
                  <item.icon className="size-5 text-brand" aria-hidden />
                  <p className="mt-3 text-sm font-semibold">{item.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{item.meta}</p>
                </motion.li>
              ))}
            </ul>
            <div className="mt-6 grid grid-cols-3 gap-3 rounded-2xl surface-muted p-4 text-center">
              {[
                ["99.9%", "Uptime target"],
                ["24/7", "Monitoring"],
                ["<24h", "Response"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="font-display text-lg font-bold text-brand">{v}</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}