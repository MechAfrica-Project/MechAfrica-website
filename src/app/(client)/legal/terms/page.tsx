import type { Metadata } from "next";

import { Container } from "@/components/site/Container";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Badge } from "@/components/marketing/Badge";

export const metadata: Metadata = {
  title: "Terms | MechAfrica",
  description: "Terms of use placeholder page for MechAfrica.",
};

export default function TermsPage() {
  return (
    <section className="bg-background">
      <Container className="py-14 sm:py-20">
        <FadeIn>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Legal</Badge>
            <Badge variant="outline">Placeholder</Badge>
          </div>
          <div className="mt-6">
            <SectionHeader
              eyebrow="Terms"
              title="Terms of use (placeholder)"
              description="Replace this placeholder content with your official terms before launch."
            />
          </div>

          <div className="mt-10 rounded-3xl border bg-card p-6 text-sm leading-relaxed text-muted-foreground shadow-sm">
            <p>
              This page is a placeholder. Add your terms of use covering user responsibilities, acceptable use,
              service availability, disclaimers, and contact details.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

