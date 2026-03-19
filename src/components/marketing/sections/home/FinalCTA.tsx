import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { siteConfig } from "@/content/site-config";
import { Container } from "@/components/site/Container";
import { AppStoreButtons } from "@/components/site/AppStoreButtons";
import { UssdButton } from "@/components/site/UssdButton";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/marketing/motion/FadeIn";

export function FinalCTA() {
  return (
    <section className="bg-primary text-primary-foreground">
      <Container className="py-14 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <FadeIn className="lg:col-span-7">
            <h2 className="font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mt-3 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
              Download the apps for full workflows, or dial USSD for farmers without a smartphone. For partnerships
              or support, contact us.
            </p>
          </FadeIn>

          <FadeIn className="lg:col-span-5" delay={0.08}>
            <div className="rounded-3xl bg-black/15 p-6">
              <div className="text-sm font-semibold">Download & access</div>
              <div className="mt-3 flex flex-col gap-2">
                <AppStoreButtons
                  playStoreHref={siteConfig.appLinks.farmer.playStore}
                  appStoreHref={siteConfig.appLinks.farmer.appStore}
                  className="justify-start"
                />
                <UssdButton
                  code={siteConfig.ussd.code}
                  telHref={siteConfig.ussd.telHref}
                  variant="secondary"
                  className="border-transparent"
                />
                <Button asChild variant="outline" className="h-11 rounded-full border-white/30 bg-transparent">
                  <Link href="/contact">
                    Contact us <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}

