import type { Metadata } from "next";

import { Container } from "@/components/site/Container";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Badge } from "@/components/marketing/Badge";

export const metadata: Metadata = {
  title: "Terms | MechAfrica",
  description: "MechAfrica terms of use (coming soon).",
};

export default function TermsPage() {
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
              eyebrow="Terms"
              title="Terms of use"
              description="We’re finalizing our terms. If you need a copy for partnership or procurement, contact us."
            />
          </div>

          <div className="mt-10 rounded-3xl border bg-card p-6 text-sm leading-relaxed text-muted-foreground shadow-sm">
            <p>
              This page will be updated with MechAfrica’s official terms of use. Until then, please use the
              platform responsibly and reach out if you have questions about access, partnerships, or support.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

