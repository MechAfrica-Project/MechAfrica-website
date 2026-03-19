import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { siteConfig } from "@/content/site-config";
import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/button";
import { UssdButton } from "@/components/site/UssdButton";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { Badge } from "@/components/marketing/Badge";
import { HeroVisual } from "@/components/marketing/sections/home/HeroVisual";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_10%,rgba(244,176,0,0.22),transparent_55%),radial-gradient(circle_at_80%_20%,rgba(11,61,46,0.18),transparent_55%)]" />
      <Container className="py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <FadeIn className="lg:col-span-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="outline">Ghana-first</Badge>
              <Badge>Apps + USSD</Badge>
              <Badge variant="outline">Offline-first</Badge>
            </div>

            <h1 className="mt-6 font-serif text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl">
              Mechanizing access to agricultural services across Africa
            </h1>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {siteConfig.description}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Button asChild variant="secondary" className="h-11 rounded-full px-5">
                <Link href="/download" aria-label="Download the MechAfrica apps">
                  Download the App <ArrowRight className="size-4" />
                </Link>
              </Button>

              <UssdButton code={siteConfig.ussd.code} telHref={siteConfig.ussd.telHref} />

              <Button asChild variant="ghost" className="h-11 rounded-full px-4">
                <Link href="/how-it-works" aria-label="See how MechAfrica works">
                  See how it works
                </Link>
              </Button>
            </div>

            <div className="mt-7 space-y-2 text-sm text-muted-foreground">
              {[
                "Built for farmers, providers, and field agents — not just tractor bookings.",
                "Works in low-connectivity areas with offline-first workflows and USSD access.",
              ].map((line) => (
                <div key={line} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 size-4 text-primary/80" aria-hidden="true" />
                  <span>{line}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-7" delay={0.05}>
            <HeroVisual />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

