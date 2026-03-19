import Link from "next/link";
import { Cable, Phone, Smartphone, WifiOff } from "lucide-react";

import { siteConfig } from "@/content/site-config";
import { Container } from "@/components/site/Container";
import { AppStoreButtons } from "@/components/site/AppStoreButtons";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";

const methods = [
  {
    title: "Android app",
    description: "For farmers and providers who use Android devices.",
    icon: Smartphone,
  },
  {
    title: "iPhone app",
    description: "For iOS users who want a full app experience.",
    icon: Smartphone,
  },
  {
    title: "USSD for farmers",
    description: `Dial ${siteConfig.ussd.code} to request services without a smartphone.`,
    icon: Phone,
  },
  {
    title: "Offline-first workflows",
    description: "Keep work moving in low-connectivity areas and sync when ready.",
    icon: WifiOff,
  },
] as const;

export function PlatformAccess() {
  return (
    <section className="bg-background">
      <Container className="py-14 sm:py-20">
        <FadeIn>
          <SectionHeader
            eyebrow="Platform access"
            title="Multiple channels — one coordinated ecosystem"
            description="MechAfrica is built so farmers aren’t excluded by connectivity or device access. Apps and USSD work together to expand reach."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((m, idx) => (
            <FadeIn key={m.title} delay={idx * 0.04}>
              <Card className="h-full rounded-3xl">
                <CardHeader className="pb-2">
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-primary">
                    <m.icon className="size-5" aria-hidden="true" />
                  </div>
                  <CardTitle className="font-serif text-lg">{m.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.12}>
          <div className="mt-10 flex flex-col gap-4 rounded-3xl border bg-muted/40 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-3">
              <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-secondary/20 text-primary">
                <Cable className="size-5" aria-hidden="true" />
              </div>
              <div>
                <div className="font-semibold">Not every user needs a smartphone</div>
                <p className="mt-1 text-sm text-muted-foreground">
                  USSD gives farmers a reliable path to request services, while apps unlock richer workflows for
                  providers and agents.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <AppStoreButtons
                playStoreHref={siteConfig.appLinks.farmer.playStore}
                appStoreHref={siteConfig.appLinks.farmer.appStore}
              />
              <Button asChild variant="ghost" className="h-11 rounded-full px-4">
                <Link href="/download">See access options</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}

