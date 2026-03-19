import { MapPinned } from "lucide-react";

import { impactMetrics } from "@/content/site-config";
import { Container } from "@/components/site/Container";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";

export function ImpactProof() {
  return (
    <section className="bg-muted/35">
      <Container className="py-14 sm:py-20">
        <FadeIn>
          <SectionHeader
            eyebrow="Reach & access"
            title="A growing network in Ghana"
            description="Reach across farmers and providers — with USSD access to keep participation inclusive."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 lg:grid-cols-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {impactMetrics.map((m, idx) => (
              <FadeIn key={m.label} delay={idx * 0.03}>
                <div className="rounded-3xl border bg-card p-6 shadow-sm">
                  <div className="text-3xl font-semibold tracking-tight text-foreground">{m.value}</div>
                  <div className="mt-2 text-sm font-medium text-foreground">{m.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="lg:col-span-5" delay={0.08}>
            <div className="relative h-full overflow-hidden rounded-3xl border bg-card p-6 shadow-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(244,176,0,0.18),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(11,61,46,0.18),transparent_60%)]" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-foreground">Coverage map</div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                    <MapPinned className="size-3" aria-hidden="true" />
                    Coming soon
                  </div>
                </div>

                <div className="mt-4 rounded-2xl border bg-background/70 p-4">
                  <div className="aspect-[16/10] w-full rounded-xl border bg-muted/40 p-4">
                    <div className="flex h-full flex-col items-center justify-center text-center">
                      <div className="text-sm font-semibold text-foreground">Map visualization</div>
                      <div className="mt-2 max-w-xs text-xs text-muted-foreground">
                        District coverage map coming soon.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

