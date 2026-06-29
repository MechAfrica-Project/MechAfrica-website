import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, QrCode } from "lucide-react";

import { downloadScreenshots, siteConfig } from "@/content/site-config";
import { IMAGES } from "@/lib/image";
import { Container } from "@/components/site/Container";
import { AppStoreButtons } from "@/components/site/AppStoreButtons";
import { UssdButton } from "@/components/site/UssdButton";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/marketing/PageHero";
import { ScreenshotCarousel } from "@/components/marketing/ScreenshotCarousel";

export const metadata: Metadata = {
  title: "Download / Access | MechAfrica",
  description:
    `Download the MechAfrica apps for farmers and service providers — or dial ${siteConfig.ussd.code} for farmer access via USSD.`,
};

function QrPlaceholder({ label }: { label: string }) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold text-primary">{label}</div>
        <div className="inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1 text-xs text-primary/70">
          <QrCode className="size-3" aria-hidden="true" />
          Add QR
        </div>
      </div>
      <div className="mt-4 aspect-square w-full rounded-xl bg-accent p-4">
        <div className="flex h-full flex-col items-center justify-center text-center">
          <div className="text-sm font-semibold text-primary">QR code</div>
          <div className="mt-2 max-w-[16rem] text-xs text-primary/70">
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
      <PageHero
        heroImage={IMAGES.marketing.ussd}
        heroAlt="A farmer dialing USSD on a basic phone in the field"
        heading="Download the apps. Or use USSD."
        description="Farmers can request services through the Farmers App or by dialing the USSD code below. Service providers use the Provider App to manage requests, jobs, and assets. The Agents App is planned for a future release."
        cta={
          <>
            <Button asChild className="h-11 rounded-full bg-primary px-5 text-white hover:bg-primary/90">
              <Link href="#farmers">Farmers</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-primary/30 px-5 text-primary hover:bg-primary/5"
            >
              <Link href="#providers">Service providers</Link>
            </Button>
            <UssdButton code={siteConfig.ussd.code} telHref={siteConfig.ussd.telHref} />
          </>
        }
      />

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <Container>
          <div className="grid gap-4 lg:grid-cols-3">
            <div id="farmers" className="rounded-2xl bg-accent p-6">
              <div className="text-xs font-bold uppercase tracking-wide text-primary/70">Farmers</div>
              <div className="mt-2 font-serif text-lg font-bold text-primary">App or USSD</div>
              <p className="mt-2 text-sm leading-relaxed text-primary/80">
                Use the Farmers App for the full experience. No smartphone? Dial USSD to request
                services.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <AppStoreButtons
                  playStoreHref={siteConfig.appLinks.farmer.playStore}
                  appStoreHref={siteConfig.appLinks.farmer.appStore}
                  className="justify-start"
                />
                <UssdButton code={siteConfig.ussd.code} telHref={siteConfig.ussd.telHref} />
                <Link
                  href="/solutions/farmers"
                  className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Learn more <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div id="providers" className="rounded-2xl bg-accent p-6">
              <div className="text-xs font-bold uppercase tracking-wide text-primary/70">
                Service providers
              </div>
              <div className="mt-2 font-serif text-lg font-bold text-primary">Provider App</div>
              <p className="mt-2 text-sm leading-relaxed text-primary/80">
                A dedicated app for receiving demand, scheduling work, assigning assets/teams, and
                tracking delivery.
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <AppStoreButtons
                  playStoreHref={siteConfig.appLinks.provider.playStore}
                  appStoreHref={siteConfig.appLinks.provider.appStore}
                  className="justify-start"
                />
                <Link
                  href="/solutions/service-providers"
                  className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
                >
                  Learn more <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl bg-accent p-6">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs font-bold uppercase tracking-wide text-primary/70">Agents</div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  Coming soon
                </span>
              </div>
              <div className="mt-2 font-serif text-lg font-bold text-primary">Agents App</div>
              <p className="mt-2 text-sm leading-relaxed text-primary/80">
                Operational support workflows for onboarding, coordination, and issue resolution
                (planned release).
              </p>
              <div className="mt-5 flex flex-col gap-2">
                <Button asChild className="h-11 rounded-full bg-primary px-5 text-white hover:bg-primary/90">
                  <Link href={siteConfig.appLinks.agents.waitlist}>Join waitlist</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="h-11 rounded-full border-primary/30 px-5 text-primary hover:bg-primary/5"
                >
                  <Link href="/solutions/agents">Learn more</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted/60 py-12 sm:py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-4xl">
              QR codes for faster downloads
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary/80 sm:text-base">
              Use QR codes in training, onboarding, and community outreach materials.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <QrPlaceholder label="Farmers App QR code" />
            <QrPlaceholder label="Provider App QR code" />
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-sm font-semibold text-primary">USSD access</div>
              <p className="mt-2 text-sm leading-relaxed text-primary/80">
                Farmers can also request services without a smartphone by dialing:
              </p>
              <div className="mt-4 rounded-xl bg-accent p-4 text-center">
                <div className="font-serif text-3xl font-bold text-primary">{siteConfig.ussd.code}</div>
                <div className="mt-2 text-xs text-primary/70">Tap to dial on mobile</div>
                <div className="mt-4 flex justify-center">
                  <UssdButton code={siteConfig.ussd.code} telHref={siteConfig.ussd.telHref} />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-4xl">
              Preview key workflows
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary/80 sm:text-base">
              A quick look at what farmers and providers can do in the apps.
            </p>
          </div>
          <div className="mt-10">
            <ScreenshotCarousel slides={downloadScreenshots} />
          </div>
        </Container>
      </section>
    </>
  );
}
