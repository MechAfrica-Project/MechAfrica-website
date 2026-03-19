import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, QrCode, Smartphone } from "lucide-react";

import { siteConfig } from "@/content/site-config";
import { Container } from "@/components/site/Container";
import { AppStoreButtons } from "@/components/site/AppStoreButtons";
import { UssdButton } from "@/components/site/UssdButton";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Badge } from "@/components/marketing/Badge";
import { ScreenshotCarousel } from "@/components/marketing/ScreenshotCarousel";

export const metadata: Metadata = {
  title: "Download / Access | MechAfrica",
  description:
    "Choose how to access MechAfrica: download the apps for farmers and service providers, or use USSD for farmer access without a smartphone. QR code and screenshot placeholders included.",
};

function QrPlaceholder({ label }: { label: string }) {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold text-foreground">{label}</div>
        <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
          <QrCode className="size-3" aria-hidden="true" />
          Placeholder
        </div>
      </div>
      <div className="mt-4 aspect-square w-full rounded-2xl border bg-muted/35 p-4">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="text-sm font-semibold text-foreground">QR code</div>
          <div className="mt-2 max-w-[16rem] text-xs text-muted-foreground">
            Replace with an actual QR code that links to the relevant store listing.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DownloadPage() {
  return (
    <>
      <section className="bg-background">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Download / access</Badge>
              <Badge variant="outline">Apps + USSD</Badge>
              <Badge variant="outline">Offline-first</Badge>
            </div>
            <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Choose your access method
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              MechAfrica is designed so the ecosystem can work across smartphones and basic phones. Farmers can
              request services via app or USSD. Providers use a dedicated app to manage jobs and assets. Agents
              tooling is planned for a future release.
            </p>
          </FadeIn>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <FadeIn delay={0.02}>
              <div className="rounded-3xl border bg-card p-6 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-serif text-xl font-semibold text-foreground">Farmers</div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Use the Farmers App for richer workflows, or dial USSD for smartphone-free access.
                    </p>
                  </div>
                  <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-primary">
                    <Phone className="size-5" aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Button asChild variant="secondary" className="h-11 rounded-full px-5">
                    <Link href="#farmers">Farmers access</Link>
                  </Button>
                  <UssdButton code={siteConfig.ussd.code} telHref={siteConfig.ussd.telHref} />
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.06}>
              <div className="rounded-3xl border bg-card p-6 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-serif text-xl font-semibold text-foreground">Service providers</div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Use the Provider App to receive requests, manage jobs, and assign assets and teams.
                    </p>
                  </div>
                  <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-primary">
                    <Smartphone className="size-5" aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Button asChild variant="secondary" className="h-11 rounded-full px-5">
                    <Link href="#providers">Provider access</Link>
                  </Button>
                  <Button asChild variant="outline" className="h-11 rounded-full px-5">
                    <Link href="/solutions/service-providers">Learn more</Link>
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="rounded-3xl border bg-card p-6 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-serif text-xl font-semibold text-foreground">Agents</div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      The Agents App is planned for a future release to support onboarding and coordination.
                    </p>
                  </div>
                  <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-secondary/20 text-primary">
                    <QrCode className="size-5" aria-hidden="true" />
                  </div>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Button asChild variant="secondary" className="h-11 rounded-full px-5">
                    <Link href={siteConfig.appLinks.agents.waitlist}>Join waitlist</Link>
                  </Button>
                  <Button asChild variant="outline" className="h-11 rounded-full px-5">
                    <Link href="/solutions/agents">Learn more</Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-muted/35">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <SectionHeader
              eyebrow="QR codes"
              title="Make downloads easy in the field"
              description="Use these placeholders for QR codes that link to each store listing."
            />
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FadeIn delay={0.02}>
              <QrPlaceholder label="Farmers App QR (placeholder)" />
            </FadeIn>
            <FadeIn delay={0.06}>
              <QrPlaceholder label="Provider App QR (placeholder)" />
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-3xl border bg-card p-6 shadow-sm">
                <div className="text-sm font-semibold text-foreground">USSD access</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Farmers can also request services without a smartphone by dialing:
                </p>
                <div className="mt-4 rounded-2xl border bg-muted/35 p-4 text-center">
                  <div className="text-3xl font-semibold tracking-tight text-foreground">{siteConfig.ussd.code}</div>
                  <div className="mt-2 text-xs text-muted-foreground">Tap to dial on mobile</div>
                  <div className="mt-4 flex justify-center">
                    <UssdButton code={siteConfig.ussd.code} telHref={siteConfig.ussd.telHref} variant="secondary" />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <SectionHeader
              eyebrow="Screenshots"
              title="Preview the product experience"
              description="A simple carousel component ready for real screenshots."
            />
          </FadeIn>
          <FadeIn delay={0.06}>
            <div className="mt-10">
              <ScreenshotCarousel
                slides={[
                  {
                    audience: "Farmers App",
                    title: "Request services in minutes",
                    description:
                      "Capture demand clearly (service type, farm details, timing) and receive updates as providers respond.",
                  },
                  {
                    audience: "Provider App",
                    title: "Manage jobs and assets",
                    description:
                      "Accept requests, schedule work, assign equipment and operators, and track active delivery across locations.",
                  },
                  {
                    audience: "Agents App",
                    title: "Support onboarding and coordination",
                    description:
                      "Planned release: workflows for onboarding, follow-ups, issue management, and operational notifications.",
                  },
                ]}
              />
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-muted/35">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <SectionHeader eyebrow="Access options" title="Choose the right channel for your role" />
          </FadeIn>

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <FadeIn className="lg:col-span-4">
              <div id="farmers" className="rounded-3xl border bg-card p-6 shadow-sm">
                <div className="text-xs font-semibold tracking-wide text-muted-foreground">Farmers</div>
                <div className="mt-2 font-serif text-xl font-semibold text-foreground">App or USSD</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Use the Farmers App if you have a smartphone. Use USSD if you need a basic-phone option.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <AppStoreButtons
                    playStoreHref={siteConfig.appLinks.farmer.playStore}
                    appStoreHref={siteConfig.appLinks.farmer.appStore}
                    className="justify-start"
                  />
                  <UssdButton code={siteConfig.ussd.code} telHref={siteConfig.ussd.telHref} />
                </div>
              </div>
            </FadeIn>

            <FadeIn className="lg:col-span-4" delay={0.05}>
              <div id="providers" className="rounded-3xl border bg-card p-6 shadow-sm">
                <div className="text-xs font-semibold tracking-wide text-muted-foreground">Service providers</div>
                <div className="mt-2 font-serif text-xl font-semibold text-foreground">Provider App</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A dedicated experience for receiving demand, managing jobs, assigning teams/assets, and tracking delivery.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <AppStoreButtons
                    playStoreHref={siteConfig.appLinks.provider.playStore}
                    appStoreHref={siteConfig.appLinks.provider.appStore}
                    className="justify-start"
                  />
                  <Button asChild variant="ghost" className="h-11 rounded-full px-4">
                    <Link href="/solutions/service-providers">
                      Learn more <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="lg:col-span-4" delay={0.1}>
              <div className="rounded-3xl border bg-card p-6 shadow-sm">
                <div className="text-xs font-semibold tracking-wide text-muted-foreground">Agents</div>
                <div className="mt-2 font-serif text-xl font-semibold text-foreground">Coming soon</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Operational support workflows for onboarding, coordination, and issue resolution (planned release).
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <Button asChild variant="secondary" className="h-11 rounded-full px-5">
                    <Link href={siteConfig.appLinks.agents.waitlist}>Join waitlist</Link>
                  </Button>
                  <Button asChild variant="outline" className="h-11 rounded-full px-5">
                    <Link href="/solutions/agents">Learn more</Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.12}>
            <div className="mt-10 rounded-3xl border bg-card p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-secondary/20 text-primary">
                  <Phone className="size-5" aria-hidden="true" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Need a smartphone-free option?</div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    Farmers can dial <span className="font-semibold text-foreground">{siteConfig.ussd.code}</span>{" "}
                    to request services without a smartphone.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <UssdButton code={siteConfig.ussd.code} telHref={siteConfig.ussd.telHref} variant="secondary" />
                    <Button asChild variant="ghost" className="h-11 rounded-full px-4">
                      <Link href="/faq">Read FAQs</Link>
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

