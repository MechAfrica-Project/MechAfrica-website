import Link from "next/link";
import { ArrowRight, ClipboardCheck, Headphones, Send, Tractor } from "lucide-react";

import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";

const steps = [
  {
    title: "Farmers request a service",
    description: "Via the Farmers App or USSD — even in low-connectivity areas.",
    icon: Send,
  },
  {
    title: "Providers receive and respond",
    description: "Accept jobs, plan work, and coordinate teams and assets.",
    icon: Tractor,
  },
  {
    title: "Agents support coordination",
    description: "Onboard users, support operations, and help resolve issues (coming soon).",
    icon: Headphones,
  },
  {
    title: "Work is tracked to completion",
    description: "Clear status updates help everyone stay aligned until the job is done.",
    icon: ClipboardCheck,
  },
] as const;

export function HowItWorksPreview() {
  return (
    <section className="bg-background">
      <Container className="py-14 sm:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <FadeIn>
            <SectionHeader
              eyebrow="How it works"
              title="A simple flow, supported by strong infrastructure"
              description="MechAfrica keeps requests organized and operations coordinated across farmers, providers, and agents."
            />
          </FadeIn>

          <FadeIn delay={0.08}>
            <Button asChild variant="ghost" className="h-11 rounded-full px-4">
              <Link href="/how-it-works">
                Explore the full flow <ArrowRight className="size-4" />
              </Link>
            </Button>
          </FadeIn>
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <FadeIn key={s.title} delay={idx * 0.04}>
              <div className="relative h-full rounded-3xl border bg-card p-6 shadow-sm">
                <div className="mb-4 inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-primary">
                  <s.icon className="size-5" aria-hidden="true" />
                </div>
                <div className="font-serif text-lg font-semibold">{s.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>

                <div className="mt-5 inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <span className="inline-flex size-6 items-center justify-center rounded-full bg-muted text-foreground">
                    {idx + 1}
                  </span>
                  Step {idx + 1}
                </div>

                {idx < steps.length - 1 ? (
                  <div
                    className="absolute right-0 top-1/2 hidden h-px w-10 -translate-y-1/2 bg-border lg:block"
                    aria-hidden="true"
                  />
                ) : null}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

