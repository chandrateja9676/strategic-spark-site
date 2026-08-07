import { Cloud, Cpu, Compass, Code2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Reveal, SectionHeading } from "./reveal";

const services = [
  {
    icon: Code2,
    title: "Custom Software Engineering",
    body: "Product-grade web and platform builds with React, Node, Java Spring Boot and Python — designed for maintainability from day one.",
    points: ["React & Next.js", "Node.js APIs", "Java Spring Boot", "Python services"],
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure & Migration",
    body: "Scalable architectures, automated DevOps pipelines and hardened security baselines across AWS, Azure and hybrid estates.",
    points: ["Scalable architecture", "CI/CD & DevOps", "Cost optimisation", "Security hardening"],
  },
  {
    icon: Cpu,
    title: "Data Analytics & AI Automation",
    body: "Data engines, custom pipelines and AI-assisted workflows that turn raw operational data into actionable insight.",
    points: ["ETL pipelines", "Dashboards", "ML integration", "Process automation"],
  },
  {
    icon: Compass,
    title: "Strategic IT Consulting",
    body: "Digital transformation and technical roadmap planning that aligns engineering investment with measurable business growth.",
    points: ["Tech due diligence", "Roadmap planning", "Team enablement", "Vendor strategy"],
  },
];

export function Services() {
  return (
    <section id="services" className="surface-muted py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Core Services"
          title="Engineering capability, end to end"
          description="Four practices that cover the full lifecycle — from strategy and architecture through build, launch and continuous operation."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <Card className="group h-full border-border/70 bg-card/80 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-brand/50 hover:shadow-elegant">
                <CardHeader>
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-brand-foreground">
                    <s.icon className="size-6" aria-hidden />
                  </span>
                  <CardTitle className="mt-4 text-lg leading-snug">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                  <ul className="mt-5 space-y-2">
                    {s.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-foreground">
                        <span className="size-1.5 shrink-0 rounded-full bg-highlight" aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}