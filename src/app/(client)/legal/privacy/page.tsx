import type { Metadata } from "next";

import { Container } from "@/components/site/Container";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Badge } from "@/components/marketing/Badge";

export const metadata: Metadata = {
  title: "Privacy | MechAfrica",
  description: "MechAfrica privacy policy (coming soon).",
};

export default function PrivacyPage() {
  return (
    <section className="bg-background">
      <Container className="py-14 sm:py-20">
        <FadeIn>
          <div className="flex flex-wrap items-center gap-2">
            <Badge>Legal</Badge>
            <Badge variant="outline">Coming soon</Badge>
          </div>
          <div className="mt-6">
            <SectionHeader
              eyebrow="Privacy"
              title="Privacy policy"
              description="We’re finalizing our privacy policy. For questions about data and support, contact us."
            />
          </div>

          <div className="mt-10 rounded-3xl border bg-card p-6 text-sm leading-relaxed text-muted-foreground shadow-sm">
            <p>
              This page will be updated with MechAfrica’s official privacy policy. We aim to be clear about what
              data we collect, how it’s used, and the choices available to users. If you need more information
              today, please contact us.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

