import { Layers3 } from "lucide-react";

import { platformHighlights } from "@/content/site-config";
import { Container } from "@/components/site/Container";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";

export function PlatformHighlights() {
  return (
    <section className="bg-muted/35">
      <Container className="py-14 sm:py-20">
        <FadeIn>
          <SectionHeader
            eyebrow="Platform highlights"
            title="Built for coordination — not just bookings"
            description="A platform layer that supports farmers, providers, and agents with clear workflows and inclusive access."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {platformHighlights.map((f, idx) => (
            <FadeIn key={f.title} delay={idx * 0.03}>
              <div className="h-full rounded-3xl border bg-card p-6 shadow-sm">
                <div className="mb-3 inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-primary">
                  <Layers3 className="size-5" aria-hidden="true" />
                </div>
                <div className="font-serif text-lg font-semibold text-foreground">{f.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

