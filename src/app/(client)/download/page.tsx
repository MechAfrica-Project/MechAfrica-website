import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, QrCode } from "lucide-react";

import { downloadScreenshots, siteConfig } from "@/content/site-config";
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
    `Download the MechAfrica apps for farmers and service providers — or dial ${siteConfig.ussd.code} for farmer access via USSD.`,
};

function QrPlaceholder({ label }: { label: string }) {
  return (
    <div className="rounded-3xl border bg-card p-6 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold text-foreground">{label}</div>
        <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
          <QrCode className="size-3" aria-hidden="true" />
          Add QR
        </div>
      </div>
      <div className="mt-4 aspect-square w-full rounded-2xl border bg-muted/35 p-4">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="text-sm font-semibold text-foreground">QR code</div>
          <div className="mt-2 max-w-[16rem] text-xs text-muted-foreground">
            Add a QR code linked to this store listing.
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
              <Badge>Download</Badge>
              <Badge variant="outline">Apps + USSD</Badge>
              <Badge variant="outline">Offline-first</Badge>
            </div>
            <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Download the apps. Or use USSD.
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Farmers can request services through the Farmers App or by dialing{" "}
              <span className="font-semibold text-foreground">{siteConfig.ussd.code}</span>. Service providers use
              the Provider App to manage requests, jobs, and assets. The Agents App is planned for a future
              release.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              <Button asChild variant="secondary" className="h-11 rounded-full px-5">
                <Link href="#farmers">Farmers</Link>
              </Button>
              <Button asChild variant="outline" className="h-11 rounded-full px-5">
                <Link href="#providers">Service providers</Link>
              </Button>
              <UssdButton code={siteConfig.ussd.code} telHref={siteConfig.ussd.telHref} />
            </div>
          </FadeIn>

          <div className="mt-10 grid gap-4 lg:grid-cols-12">
            <FadeIn className="lg:col-span-4">
              <div id="farmers" className="rounded-3xl border bg-card p-6 shadow-sm">
                <div className="text-xs font-semibold tracking-wide text-muted-foreground">Farmers</div>
                <div className="mt-2 font-serif text-xl font-semibold text-foreground">App or USSD</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Use the Farmers App for the full experience. No smartphone? Dial USSD to request services.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <AppStoreButtons
                    playStoreHref={siteConfig.appLinks.farmer.playStore}
                    appStoreHref={siteConfig.appLinks.farmer.appStore}
                    className="justify-start"
                  />
                  <UssdButton code={siteConfig.ussd.code} telHref={siteConfig.ussd.telHref} />
                  <Button asChild variant="ghost" className="h-11 justify-start rounded-full px-4">
                    <Link href="/solutions/farmers">
                      Learn more <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="lg:col-span-4" delay={0.05}>
              <div id="providers" className="rounded-3xl border bg-card p-6 shadow-sm">
                <div className="text-xs font-semibold tracking-wide text-muted-foreground">Service providers</div>
                <div className="mt-2 font-serif text-xl font-semibold text-foreground">Provider App</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A dedicated app for receiving demand, scheduling work, assigning assets/teams, and tracking delivery.
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  <AppStoreButtons
                    playStoreHref={siteConfig.appLinks.provider.playStore}
                    appStoreHref={siteConfig.appLinks.provider.appStore}
                    className="justify-start"
                  />
                  <Button asChild variant="ghost" className="h-11 justify-start rounded-full px-4">
                    <Link href="/solutions/service-providers">
                      Learn more <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </FadeIn>

            <FadeIn className="lg:col-span-4" delay={0.1}>
              <div className="rounded-3xl border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-xs font-semibold tracking-wide text-muted-foreground">Agents</div>
                  <Badge variant="outline">Coming soon</Badge>
                </div>
                <div className="mt-2 font-serif text-xl font-semibold text-foreground">Agents App</div>
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
        </Container>
      </section>

      <section className="bg-muted/35">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <SectionHeader
              eyebrow="QR codes"
              title="QR codes for faster downloads"
              description="Use QR codes in training, onboarding, and community outreach materials."
            />
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FadeIn delay={0.02}>
              <QrPlaceholder label="Farmers App QR code" />
            </FadeIn>
            <FadeIn delay={0.06}>
              <QrPlaceholder label="Provider App QR code" />
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
              title="Preview key workflows"
              description="A quick look at what farmers and providers can do in the apps."
            />
          </FadeIn>
          <FadeIn delay={0.06}>
            <div className="mt-10">
              <ScreenshotCarousel
                slides={downloadScreenshots}
              />
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}

