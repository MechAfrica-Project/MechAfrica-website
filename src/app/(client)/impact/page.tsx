import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, SignalLow, Sprout, Tractor } from "lucide-react";

import { impactMetrics, programNote, siteConfig } from "@/content/site-config";
import { IMAGES } from "@/lib/image";
import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/marketing/PageHero";
import { TiltedCallout } from "@/components/marketing/TiltedCallout";
import { CountUpValue } from "@/components/marketing/motion/CountUpValue";
import { StaggerReveal } from "@/components/marketing/motion/StaggerReveal";

export const metadata: Metadata = {
  title: "Impact | MechAfrica",
  description:
    "MechAfrica has reached 21,759+ farmers and 3,554+ service providers across 9 regions and 16 districts of Ghana — recording 6,273 service requests through the SAMA project led by Agrinvest with funding from AGRA.",
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        heroImage={IMAGES.marketing.impact}
        heroAlt="Mechanized farm work showing increased efficiency in the field"
        heading="Agricultural services that reach more people — reliably"
        description="MechAfrica strengthens service delivery by connecting demand, supply, and field coordination — with USSD access and offline-first workflows to keep participation inclusive."
        cta={
          <>
            <Button asChild className="h-11 rounded-full bg-primary px-5 text-white hover:bg-primary/90">
              <Link href="/download">Download & access</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-11 rounded-full border-primary/30 px-5 text-primary hover:bg-primary/5"
            >
              <Link href="/contact">Partner with us</Link>
            </Button>
          </>
        }
      />

      <section className="bg-muted/60 py-12 sm:py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-4xl">
              Efficiency + inclusion, at the service-chain level
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary/80 sm:text-base">
              MechAfrica improves how services are discovered, scheduled, delivered, and
              supported — not just booked.
            </p>
          </div>

          <StaggerReveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Improving access to mechanized services", icon: Tractor },
              { title: "Reducing friction in service delivery", icon: ShieldCheck },
              { title: "USSD + offline-first for inclusion", icon: SignalLow },
              { title: "Supporting more resilient livelihoods", icon: Sprout },
            ].map((x) => (
              <div key={x.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-primary text-white">
                  <x.icon className="size-5" aria-hidden="true" />
                </div>
                <div className="font-serif text-base font-bold text-primary">{x.title}</div>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-4xl">
              Where we are today
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary/80 sm:text-base">
              Verified reach as MechAfrica scaled through the SAMA project across Ghana.
            </p>
          </div>

          <StaggerReveal className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {impactMetrics.map((m) => (
              <div key={m.label} className="rounded-2xl bg-accent p-6">
                <div className="font-serif text-3xl font-bold text-primary">
                  <CountUpValue value={m.value} />
                </div>
                <div className="mt-2 text-sm font-medium text-primary/80">{m.label}</div>
              </div>
            ))}
          </StaggerReveal>

          {/* NOTE: "Where we operate" (coverage), "Women on the platform", and
              "Most-requested services" blocks are hidden for now per request.
              Their data still lives in site-config (coverage, womenParticipation,
              mostRequestedServices) so they can be restored later. */}

          <p className="mt-8 text-center text-xs leading-relaxed text-primary/60">
            Figures reflect reach through {programNote.name} —{" "}
            {programNote.full} — led by Agrinvest with funding from AGRA.
          </p>
        </Container>
      </section>

      <section className="bg-muted/60 py-12 sm:py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-4xl">
              From uncertainty to coordinated delivery
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary/80 sm:text-base">
              A simplified view of what improves when delivery is coordinated.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-sm font-bold text-primary">Before</div>
              <ul className="mt-4 space-y-2 text-sm text-primary/80">
                {[
                  "Farmers spend time searching for providers and negotiating timing.",
                  "Providers receive fragmented demand with limited planning visibility.",
                  "Status updates are inconsistent, leading to missed windows and mistrust.",
                  "Connectivity gaps exclude users without smartphones or stable internet.",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 rounded-full bg-border" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="text-sm font-bold text-primary">With MechAfrica</div>
              <ul className="mt-4 space-y-2 text-sm text-primary/80">
                {[
                  "Requests are captured consistently and routed to available providers.",
                  "Providers manage jobs, assets, and teams with clearer coordination.",
                  "Farmers receive status updates and can plan with more confidence.",
                  "USSD and offline-first design keep participation inclusive.",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 size-4 text-primary" aria-hidden="true" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <StaggerReveal stagger={0.12} className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                image: IMAGES.marketing.ploughing,
                alt: "Tractor ploughing a field",
                label: "Land preparation on time",
              },
              {
                image: IMAGES.marketing.harvesting,
                alt: "Mechanized harvesting in progress",
                label: "Harvest support at scale",
              },
              {
                image: IMAGES.marketing.logistics,
                alt: "Produce being loaded for transport on a rural road",
                label: "Post-harvest transport",
              },
            ].map((x) => (
              <figure key={x.label} className="group overflow-hidden rounded-2xl bg-white shadow-sm">
                <div className="relative h-44 overflow-hidden sm:h-52">
                  <Image
                    src={x.image}
                    alt={x.alt}
                    fill
                    sizes="(min-width: 640px) 384px, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-4 text-sm font-semibold text-primary">{x.label}</figcaption>
              </figure>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-4xl">
              Impact for every role
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary/80 sm:text-base">
              Better delivery helps farmers plan, providers operate, and field teams coordinate.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "Farmers",
                points: ["Faster access to services", "Clear updates and tracking", "USSD access without smartphones"],
              },
              {
                title: "Service providers",
                points: ["More demand visibility", "Better asset utilization", "Stronger professional presence"],
              },
              {
                title: "Agents",
                points: ["Improved onboarding", "Issue resolution workflows", "Field coordination (planned)"],
                comingSoon: true,
              },
            ].map((x) => (
              <div key={x.title} className="rounded-2xl bg-accent p-6">
                <div className="flex items-start justify-between gap-2">
                  <div className="font-serif text-lg font-bold text-primary">{x.title}</div>
                  {x.comingSoon ? (
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Coming soon
                    </span>
                  ) : null}
                </div>
                <ul className="mt-4 space-y-2 text-sm text-primary/80">
                  {x.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 text-primary" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <TiltedCallout
        heading="Expand service access in your area"
        description="Want to partner, support onboarding, or coordinate pilots? Let’s talk."
        primaryCta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: `Dial ${siteConfig.ussd.code}`, href: siteConfig.ussd.telHref }}
      />
    </>
  );
}
