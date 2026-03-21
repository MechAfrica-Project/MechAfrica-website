import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Phone, Tractor } from "lucide-react";

import { siteConfig } from "@/content/site-config";
import { IMAGES } from "@/lib/image";
import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/button";
import { UssdButton } from "@/components/site/UssdButton";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Badge } from "@/components/marketing/Badge";
import { OptionalPhotoCard } from "@/components/marketing/OptionalPhotoCard";
import { ServiceCategoriesSection } from "@/components/marketing/ServiceCategoriesSection";

export const metadata: Metadata = {
  title: "For Farmers | MechAfrica",
  description:
    "Request ploughing, spraying, harvesting, and more through the MechAfrica Farmers App or USSD. Track updates and complete jobs with confidence.",
};

const farmerFaq = [
  {
    q: "Can I use MechAfrica without a smartphone?",
    a: `Yes. Farmers can request services via USSD by dialing ${siteConfig.ussd.code}.`,
  },
  {
    q: "Do I need internet?",
    a: "No. USSD works without internet, and the app supports field-ready workflows for low-connectivity areas.",
  },
  {
    q: "What services are available?",
    a: "Common services include ploughing, planting, spraying, harvesting, transportation, threshing, and more — depending on availability in your area.",
  },
] as const;

export default function FarmersPage() {
  return (
    <>
      <section className="bg-background">
        <Container className="py-14 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>For farmers</Badge>
                <Badge variant="outline">App + USSD</Badge>
                <Badge variant="outline">Offline-first</Badge>
              </div>
              <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Farm services, matched faster — with updates you can trust
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Request land preparation, planting, spraying, harvesting, logistics, and more through the Farmers App
                or by dialing USSD — then track updates through the same channel.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                <Button asChild variant="secondary" className="h-11 rounded-full px-5">
                  <Link href="/download">Download Farmers App</Link>
                </Button>
                <UssdButton code={siteConfig.ussd.code} telHref={siteConfig.ussd.telHref} />
                <Button asChild variant="ghost" className="h-11 rounded-full px-4">
                  <Link href="/how-it-works#farmers">See the farmer flow</Link>
                </Button>
              </div>
            </FadeIn>

            <div className="lg:col-span-7">
              <OptionalPhotoCard
                src={IMAGES.marketing.farmers}
                alt="Farmer using a phone in a field"
                aspect="4/3"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted/35">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-5">
              <SectionHeader
                eyebrow="Why farmers use MechAfrica"
                title="Less searching. More certainty."
                description="Request services with clear details and stay informed with reliable updates."
              />
            </FadeIn>

            <div className="grid gap-4 lg:col-span-7 sm:grid-cols-2">
              {[
                {
                  title: "Request services quickly",
                  text: "Share the key details providers need to respond quickly.",
                },
                {
                  title: "Track progress",
                  text: "Follow updates from request to completion.",
                },
                {
                  title: "Use USSD if needed",
                  text: "Dial USSD to request services without a smartphone.",
                },
                {
                  title: "Work with trusted providers",
                  text: "Providers manage jobs and assets to improve delivery reliability.",
                },
              ].map((b, idx) => (
                <FadeIn key={b.title} delay={idx * 0.03}>
                  <div className="rounded-3xl border bg-card p-6 shadow-sm">
                    <div className="mb-3 inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-primary">
                      <Tractor className="size-5" aria-hidden="true" />
                    </div>
                    <div className="font-serif text-lg font-semibold">{b.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <ServiceCategoriesSection
        eyebrow="Available services"
        title="Services farmers can access"
        description="Request the category you need — land preparation, spraying, planting, harvesting, transport, and technical support. Availability varies by district."
        backgroundClassName="bg-background"
      />

      <section className="bg-muted/35">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <SectionHeader
              eyebrow="How requests work"
              title="A simple process with clear updates"
              description="Whether you use the app or USSD, your request stays organized and easy to track."
            />
          </FadeIn>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                step: "1",
                title: "Request",
                text: "Submit what you need (service type, farm details, preferred timing).",
              },
              {
                step: "2",
                title: "Match + schedule",
                text: "Providers respond based on availability and location — and work is scheduled.",
              },
              {
                step: "3",
                title: "Track to completion",
                text: "Receive status updates and confirm when the job is done.",
              },
            ].map((x, idx) => (
              <FadeIn key={x.title} delay={idx * 0.04}>
                <div className="rounded-3xl border bg-card p-6 shadow-sm">
                  <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-primary">
                    <span className="text-sm font-bold">{x.step}</span>
                  </div>
                  <div className="mt-4 font-serif text-xl font-semibold">{x.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{x.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <FadeIn className="lg:col-span-6">
              <SectionHeader
                eyebrow="App + USSD access"
                title="Choose what works for you"
                description="Use the Farmers App for richer workflows. Use USSD when you need a basic-phone option."
              />
              <div className="mt-6 flex flex-wrap gap-2">
                <Button asChild variant="secondary" className="h-11 rounded-full px-5">
                  <Link href="/download">Download & access</Link>
                </Button>
                <UssdButton code={siteConfig.ussd.code} telHref={siteConfig.ussd.telHref} />
              </div>
            </FadeIn>

            <FadeIn className="lg:col-span-6" delay={0.06}>
              <div className="rounded-3xl border bg-card p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-secondary/20 text-primary">
                    <Phone className="size-5" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="font-serif text-xl font-semibold text-foreground">USSD quick access</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      Dial <span className="font-semibold text-foreground">{siteConfig.ussd.code}</span> to request
                      services without a smartphone. Menu steps can vary slightly by location.
                    </p>
                    <div className="mt-4 rounded-2xl border bg-muted/35 p-4">
                      <div className="text-xs font-semibold text-muted-foreground">Example menu</div>
                      <ol className="mt-2 space-y-1 text-sm text-muted-foreground">
                        <li>1. Dial {siteConfig.ussd.code}</li>
                        <li>2. Select “Request service”</li>
                        <li>3. Choose service category</li>
                        <li>4. Confirm location and timing</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-muted/35">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <SectionHeader eyebrow="FAQ for farmers" title="Common questions" />
          </FadeIn>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {farmerFaq.map((f, idx) => (
              <FadeIn key={f.q} delay={idx * 0.03}>
                <div className="rounded-3xl border bg-card p-6 shadow-sm">
                  <div className="font-serif text-lg font-semibold text-foreground">{f.q}</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-primary text-primary-foreground">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                  Ready to request a service?
                </h2>
                <p className="mt-3 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
                  Download the Farmers App, or dial USSD if you don’t have a smartphone.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="secondary" className="h-11 rounded-full px-5">
                    <Link href="/download">
                      Download Farmers App <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <UssdButton
                    code={siteConfig.ussd.code}
                    telHref={siteConfig.ussd.telHref}
                    variant="outline"
                    className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

