import { Reveal, SectionHeading } from "./reveal";

const tech = [
  "React.js",
  "Next.js",
  "Node.js",
  "Java",
  "Python",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "Tailwind CSS",
];

export function TechStack() {
  return (
    <section className="surface-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Technologies we build production systems with"
        />
      </div>

      <Reveal className="relative mt-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[var(--surface-muted)] to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[var(--surface-muted)] to-transparent"
        />
        <div className="flex overflow-hidden">
          <ul className="animate-marquee flex shrink-0 items-center gap-4 pr-4">
            {[...tech, ...tech].map((t, i) => (
              <li
                key={`${t}-${i}`}
                className="whitespace-nowrap rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold shadow-sm"
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-7xl grid-cols-2 gap-3 px-4 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8">
        {tech.map((t, i) => (
          <Reveal key={t} delay={i * 0.03}>
            <div className="rounded-xl border border-border bg-card px-4 py-3 text-center text-sm font-medium transition-colors hover:border-brand/60 hover:text-brand">
              {t}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}