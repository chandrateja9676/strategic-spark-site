import { HeartHandshake, ShieldCheck, Clock } from "lucide-react";
import { Reveal } from "./reveal";

const stats = [
  { icon: HeartHandshake, value: "100%", label: "Client Commitment" },
  { icon: ShieldCheck, value: "Modern", label: "Cloud Standards" },
  { icon: Clock, value: "24/7", label: "Reliability" },
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-highlight/40 bg-highlight/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-highlight-foreground dark:text-highlight">
              About Us
            </span>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Bridging complex engineering with{" "}
              <span className="text-gradient-brand">real business growth</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              CV Tech Solutions is an IT services and strategic consulting firm built around a
              simple conviction: technical depth only matters when it moves a business forward. We
              work as an embedded engineering partner — shaping the roadmap, building the system,
              and staying accountable for how it performs in production.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Senior-led delivery, transparent communication and modern cloud standards on every
              engagement, whether you are a funded startup or an established enterprise.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant">
                  <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <s.icon className="size-6" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-2xl font-bold">{s.value}</p>
                    <p className="truncate text-sm text-muted-foreground">{s.label}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}