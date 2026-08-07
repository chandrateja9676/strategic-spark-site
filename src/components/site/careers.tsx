import { useState } from "react";
import { GraduationCap, Laptop, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Reveal, SectionHeading } from "./reveal";

const roles = [
  {
    icon: Rocket,
    title: "React Full Stack Intern",
    body: "Build production React + Node features alongside senior engineers, from ticket to deploy.",
  },
  {
    icon: Laptop,
    title: "Java Full Stack Intern",
    body: "Work on Spring Boot services, REST APIs and relational data models in real client systems.",
  },
  {
    icon: GraduationCap,
    title: "Data Analyst Intern",
    body: "Support data pipelines, reporting dashboards and insight work across active engagements.",
  },
];

export function Careers() {
  const [open, setOpen] = useState(false);

  return (
    <section id="careers" className="surface-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-gradient-navy p-8 text-white sm:p-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_auto]">
              <div className="min-w-0">
                <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  Careers
                </span>
                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  Join Our Team — Batch 2027 &amp; 2028 Remote Internships
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80">
                  A structured, fully remote internship programme with real client work, mentorship
                  and a clear path to full-time consideration.
                </p>
              </div>
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="highlight" size="xl" className="w-full lg:w-auto">
                    View Eligibility &amp; Apply
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Internship Eligibility</DialogTitle>
                    <DialogDescription>
                      Remote internships for graduating batches 2027 and 2028.
                    </DialogDescription>
                  </DialogHeader>
                  <ul className="space-y-3 text-sm">
                    {[
                      "Minimum 65%+ consistent academic record (10th, 12th and degree).",
                      "Open to Batch 2027 and Batch 2028 students only.",
                      "100% remote mode — laptop and stable internet required.",
                      "Committed availability of at least 20 hours per week.",
                      "Selection via a short technical screen and a project task.",
                    ].map((t) => (
                      <li key={t} className="flex gap-3 rounded-xl surface-muted p-3">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" aria-hidden />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                  <Button variant="brand" size="lg" asChild onClick={() => setOpen(false)}>
                    <a href="#contact">Apply via Contact Form</a>
                  </Button>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand/50 hover:shadow-elegant">
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-highlight/15 text-brand">
                  <r.icon className="size-5" aria-hidden />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.body}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand">
                  100% Remote · 65%+ eligibility
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}