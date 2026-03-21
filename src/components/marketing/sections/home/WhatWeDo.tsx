import { Activity, MessageSquareText, ShieldCheck, Sparkles } from "lucide-react";

import { Container } from "@/components/site/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";

const items = [
  {
    title: "Request farm services easily",
    description:
      "Farmers can request land preparation, planting, spraying, harvesting, threshing, logistics, and more — via app or USSD.",
    icon: Sparkles,
  },
  {
    title: "Match with trusted providers",
    description:
      "Providers with different specializations receive demand, respond, and keep farmers updated.",
    icon: ShieldCheck,
  },
  {
    title: "Manage operations in real time",
    description:
      "Track requests, schedule jobs, and coordinate teams and assets across locations.",
    icon: Activity,
  },
  {
    title: "Access support through apps + USSD",
    description:
      "USSD expands reach while offline-first workflows keep work moving.",
    icon: MessageSquareText,
  },
] as const;

export function WhatWeDo() {
  return (
    <section className="bg-background">
      <Container className="py-14 sm:py-20">
        <FadeIn>
          <SectionHeader
            eyebrow="What MechAfrica does"
            title="A coordinated service network — built for real-world farming"
            description="MechAfrica reduces friction across the agricultural service chain, from requesting to delivery to support."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => (
            <FadeIn key={item.title} delay={idx * 0.04}>
              <Card className="h-full rounded-3xl">
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-primary">
                    <item.icon className="size-5" aria-hidden="true" />
                  </div>
                  <CardTitle className="font-serif text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

