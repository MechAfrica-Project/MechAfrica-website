import { BarChart3, SignalLow, Timer, Wrench } from "lucide-react";

import { Container } from "@/components/site/Container";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";

const challenges = [
  {
    title: "Farmers struggle to find timely, reliable services",
    description: "Uncertainty delays planting and harvesting windows — and impacts yields and income.",
    icon: Timer,
  },
  {
    title: "Providers struggle with visibility and coordination",
    description: "Demand can be fragmented, scheduling is hard, and asset utilization suffers.",
    icon: Wrench,
  },
  {
    title: "Connectivity gaps limit digital access",
    description: "Many users operate in low-connectivity areas or without smartphones.",
    icon: SignalLow,
  },
  {
    title: "The ecosystem needs better operational insight",
    description: "Without clear workflows, it’s hard to improve delivery quality and scale service coverage.",
    icon: BarChart3,
  },
] as const;

export function WhyItMatters() {
  return (
    <section className="bg-background">
      <Container className="py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <SectionHeader
              eyebrow="Why it matters"
              title="Agricultural services are essential infrastructure"
              description="MechAfrica reduces friction across the service chain so farmers can plan with more confidence and providers can operate more efficiently — even with unreliable connectivity."
            />
          </FadeIn>

          <div className="grid gap-4 lg:col-span-7 sm:grid-cols-2">
            {challenges.map((c, idx) => (
              <FadeIn key={c.title} delay={idx * 0.04}>
                <div className="h-full rounded-3xl border bg-card p-6 shadow-sm">
                  <div className="flex items-start gap-3">
                    <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-primary">
                      <c.icon className="size-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="font-serif text-lg font-semibold text-foreground">{c.title}</div>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

