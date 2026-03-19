import type { Metadata } from "next";

import { Container } from "@/components/site/Container";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Badge } from "@/components/marketing/Badge";

export const metadata: Metadata = {
  title: "Privacy | MechAfrica",
  description: "Privacy policy placeholder page for MechAfrica.",
};

export default function PrivacyPage() {
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
              eyebrow="Privacy"
              title="Privacy policy (placeholder)"
              description="Replace this placeholder content with your official privacy policy before launch."
            />
          </div>

          <div className="mt-10 rounded-3xl border bg-card p-6 text-sm leading-relaxed text-muted-foreground shadow-sm">
            <p>
              This page is a placeholder. Add your privacy policy covering what data you collect, how you use it,
              retention, sharing, user rights, and contact information.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

