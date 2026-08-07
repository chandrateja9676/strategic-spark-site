import { CheckCircle2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Reveal, SectionHeading } from "./reveal";

const solutions = [
  {
    id: "healthcare",
    tab: "Healthcare & HIPAA",
    title: "Compliant healthcare platforms",
    body: "Patient-facing portals, clinical dashboards and integrations built with HIPAA-aligned controls, audit trails and encryption at rest and in transit.",
    points: [
      "HIPAA-aligned architecture & access controls",
      "HL7 / FHIR interoperability",
      "Audit logging and data retention policies",
      "Secure telehealth and scheduling flows",
    ],
  },
  {
    id: "luxury",
    tab: "Luxury & E-commerce",
    title: "Conversion-first commerce experiences",
    body: "High-craft storefronts with editorial pacing, fast media pipelines and headless commerce backends that stay fast under campaign load.",
    points: [
      "Headless storefronts & CMS",
      "Payment and fulfilment integrations",
      "Sub-second media delivery",
      "Merchandising analytics",
    ],
  },
  {
    id: "saas",
    tab: "Enterprise SaaS",
    title: "Multi-tenant SaaS at scale",
    body: "Tenant isolation, role-based access, billing and observability designed in from the first sprint — not retrofitted after growth.",
    points: [
      "Multi-tenant data modelling",
      "SSO, RBAC and audit readiness",
      "Usage metering & billing",
      "Observability and SLOs",
    ],
  },
  {
    id: "startups",
    tab: "Early-Stage Startups",
    title: "MVPs that survive product-market fit",
    body: "Lean, senior-led delivery that ships a credible product fast while keeping the architecture clean enough to scale after traction.",
    points: [
      "4-8 week MVP delivery",
      "Investor-ready demos",
      "Pragmatic, low-cost infrastructure",
      "Clear handover documentation",
    ],
  },
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industry Solutions"
          title="Built for the constraints of your industry"
          description="Every sector carries its own compliance, performance and go-to-market realities. We adapt the delivery model accordingly."
        />
        <Reveal className="mt-12">
          <Tabs defaultValue="healthcare" className="w-full">
            <TabsList className="flex h-auto w-full flex-wrap justify-start gap-2 rounded-2xl bg-muted p-2">
              {solutions.map((s) => (
                <TabsTrigger
                  key={s.id}
                  value={s.id}
                  className="min-h-11 flex-1 rounded-xl px-4 text-sm data-[state=active]:bg-brand data-[state=active]:text-brand-foreground"
                >
                  {s.tab}
                </TabsTrigger>
              ))}
            </TabsList>
            {solutions.map((s) => (
              <TabsContent key={s.id} value={s.id} className="mt-8">
                <div className="grid gap-8 rounded-3xl border border-border bg-card p-6 sm:p-10 lg:grid-cols-2">
                  <div>
                    <h3 className="text-2xl font-bold">{s.title}</h3>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">{s.body}</p>
                  </div>
                  <ul className="grid content-start gap-3">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-3 rounded-xl surface-muted p-4 text-sm"
                      >
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-brand" aria-hidden />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </Reveal>
      </div>
    </section>
  );
}