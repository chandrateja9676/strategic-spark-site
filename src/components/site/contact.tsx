import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reveal, SectionHeading } from "./reveal";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Enter a valid business email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(20),
  service: z.string().min(1, "Select a service"),
  budget: z.string().min(1, "Select a budget range"),
  message: z.string().trim().min(10, "Tell us a little more").max(1000),
});

type Errors = Partial<Record<keyof z.infer<typeof schema>, string>>;

const services = [
  "Custom Software Engineering",
  "Cloud Infrastructure & Migration",
  "Data Analytics & AI Automation",
  "Strategic IT Consulting",
  "Internship Application",
];

const budgets = ["Under $5,000", "$5,000 – $15,000", "$15,000 – $50,000", "$50,000+", "Not sure yet"];

export function Contact() {
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const result = schema.safeParse({
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      service,
      budget,
      message: String(fd.get("message") ?? ""),
    });

    if (!result.success) {
      const next: Errors = {};
      for (const issue of result.error.issues) {
        next[issue.path[0] as keyof Errors] = issue.message;
      }
      setErrors(next);
      return;
    }
    setErrors({});
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's scope your next build"
          description="Share a few details and a senior consultant will get back to you within one business day."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="h-full rounded-3xl bg-gradient-navy p-8 text-white">
              <h3 className="text-xl font-bold">Talk to our team</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                Consulting, delivery or internship enquiries — one inbox, fast replies.
              </p>
              <ul className="mt-8 space-y-5 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-white/80" aria-hidden />
                  <span className="min-w-0 break-words">hello@cvtechsolutions.com</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-white/80" aria-hidden />
                  <span>+1 (555) 018-2245</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-white/80" aria-hidden />
                  <span>Remote-first · Global delivery</span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              {submitted ? (
                <div
                  role="status"
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <CheckCircle2 className="size-12 text-brand" aria-hidden />
                  <h3 className="mt-5 text-2xl font-bold">Thank you, we'll reach out within 24 hours</h3>
                  <p className="mt-3 max-w-md text-sm text-muted-foreground">
                    Your enquiry is with our consulting team. Keep an eye on your inbox.
                  </p>
                  <Button variant="heroOutline" className="mt-6" onClick={() => setSubmitted(false)}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
                  <Field id="name" label="Full Name" error={errors.name}>
                    <Input id="name" name="name" placeholder="Jane Doe" autoComplete="name" />
                  </Field>
                  <Field id="email" label="Business Email" error={errors.email}>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      autoComplete="email"
                    />
                  </Field>
                  <Field id="phone" label="Phone" error={errors.phone}>
                    <Input id="phone" name="phone" type="tel" placeholder="+1 555 000 0000" autoComplete="tel" />
                  </Field>
                  <Field id="service" label="Service Needed" error={errors.service}>
                    <Select value={service} onValueChange={setService}>
                      <SelectTrigger id="service" className="w-full">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s} value={s}>
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field id="budget" label="Project Budget" error={errors.budget} className="sm:col-span-2">
                    <Select value={budget} onValueChange={setBudget}>
                      <SelectTrigger id="budget" className="w-full">
                        <SelectValue placeholder="Select a budget range" />
                      </SelectTrigger>
                      <SelectContent>
                        {budgets.map((b) => (
                          <SelectItem key={b} value={b}>
                            {b}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field id="message" label="Message" error={errors.message} className="sm:col-span-2">
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      placeholder="Tell us about your project, timeline and goals."
                    />
                  </Field>
                  <div className="sm:col-span-2">
                    <Button type="submit" variant="brand" size="xl" className="w-full sm:w-auto">
                      Send Enquiry
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  error,
  children,
  className,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
  className?: string | undefined;
}) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 block text-sm font-medium">
        {label}
      </Label>
      {children}
      {error ? (
        <p className="mt-2 text-sm font-medium text-destructive">{error}</p>
      ) : null}
    </div>
  );
}