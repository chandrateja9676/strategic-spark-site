import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { Services } from "@/components/site/services";
import { Solutions } from "@/components/site/solutions";
import { TechStack } from "@/components/site/tech-stack";
import { About } from "@/components/site/about";
import { Careers } from "@/components/site/careers";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";

const title = "CV Tech Solutions | Next-Gen IT Services & Consulting";
const description =
  "CV Tech Solutions builds custom software, cloud infrastructure, data & AI systems and strategic IT roadmaps for enterprises and startups.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "CV Tech Solutions",
          description,
          areaServed: "Global",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-dvh bg-background">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Solutions />
        <TechStack />
        <About />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
