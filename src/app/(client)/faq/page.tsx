import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { globalFaq, siteConfig } from "@/content/site-config";
import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Badge } from "@/components/marketing/Badge";
import { FaqAccordion } from "@/components/marketing/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ | MechAfrica",
  description:
    "Frequently asked questions about MechAfrica — a digital agricultural services platform with offline-first workflows and USSD access for farmers.",
};

export default function FAQPage() {
  return (
    <>
      <section className="bg-background">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>FAQ</Badge>
              <Badge variant="outline">Apps + USSD</Badge>
              <Badge variant="outline">Offline-first</Badge>
            </div>
            <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Frequently asked questions
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Answers to the most common questions about MechAfrica, access methods, and how the network works.
            </p>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-muted/35">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <SectionHeader
              eyebrow="Help center"
              title="Clear, practical answers"
              description="Need a detail that isn’t covered here? Contact us and we’ll connect you with the right team."
            />
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="mt-10">
              <FaqAccordion items={globalFaq} />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mt-10 rounded-3xl border bg-card p-6 shadow-sm">
              <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                <div className="lg:col-span-7">
                  <div className="font-serif text-2xl font-semibold text-foreground">Need help right now?</div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Farmers can also access the platform via USSD by dialing{" "}
                    <span className="font-semibold text-foreground">{siteConfig.ussd.code}</span>.
                  </p>
                </div>
                <div className="lg:col-span-5">
                  <div className="flex flex-wrap gap-2">
                    <Button asChild variant="secondary" className="h-11 rounded-full px-5">
                      <Link href="/download">
                        Download & access <ArrowRight className="size-4" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 rounded-full px-5">
                      <Link href="/contact">Contact support</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
