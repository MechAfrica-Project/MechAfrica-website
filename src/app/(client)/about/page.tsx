import type { Metadata } from "next";
import { ArrowRight, Globe, ShieldCheck, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { founder, partners } from "@/content/site-config";
import { getHeadlineCounts } from "@/lib/metrics";
import { IMAGES } from "@/lib/image";
import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/marketing/PageHero";
import { TiltedCallout } from "@/components/marketing/TiltedCallout";
import { StaggerReveal } from "@/components/marketing/motion/StaggerReveal";

export const metadata: Metadata = {
  title: "About | MechAfrica",
  description:
    "Learn about MechAfrica — a Ghana-first agricultural services network connecting farmers, service providers, and field agents through apps and USSD.",
};

export default async function AboutPage() {
  const { farmers } = await getHeadlineCounts();

  return (
    <>
      <PageHero
        heroImage={IMAGES.marketing.onboarding}
        heroAlt="Field onboarding and support in a farming community"
        heading="Building agricultural service infrastructure that works in the real world"
        description="MechAfrica is a coordinated agricultural services network in Ghana. We connect farmers, service providers, and field agents through apps and USSD — so services can be requested, scheduled, delivered, and tracked with clear updates."
      />

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-4xl">
                Built to expand access and reliability
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-primary/80 sm:text-base">
                MechAfrica was built by MechLink Limited, with support from leading partners
                in agricultural innovation.
              </p>
            </div>

            <StaggerReveal className="grid gap-4 lg:col-span-7 sm:grid-cols-2">
              {[
                {
                  title: "Ghana focus, built to scale",
                  description:
                    "Focused on Ghana today, designed to scale to additional markets over time.",
                  icon: Globe,
                },
                {
                  title: "Operational clarity builds trust",
                  description:
                    "Clear steps from request to completion make delivery more reliable over time.",
                  icon: ShieldCheck,
                },
                {
                  title: "Role-based journeys",
                  description:
                    "Built for farmers, service providers, and field agents — each with the right tools.",
                  icon: Users,
                },
                {
                  title: "Inclusive by design",
                  description:
                    "USSD and offline-first workflows keep participation possible without perfect connectivity.",
                  icon: ShieldCheck,
                },
              ].map((c) => (
                <div key={c.title} className="rounded-2xl bg-accent p-5 sm:p-6">
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-xl bg-primary text-white">
                    <c.icon className="size-5" aria-hidden="true" />
                  </div>
                  <div className="font-serif text-base font-bold text-primary">{c.title}</div>
                  <p className="mt-2 text-sm leading-relaxed text-primary/80">{c.description}</p>
                </div>
              ))}
            </StaggerReveal>
          </div>
        </Container>
      </section>

      <section className="bg-muted/60 py-12 sm:py-16 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-5">
              <h2 className="font-serif text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-4xl">
                Make services easier to access, manage, and scale
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-primary/80 sm:text-base">
                We build practical tools that reduce friction from request to delivery to
                support.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8 lg:col-span-7">
              <div className="grid gap-6 sm:grid-cols-2">
                {[
                  {
                    label: "Mission",
                    text: "Help farmers access timely services and help providers deliver efficiently — even with unreliable connectivity.",
                  },
                  {
                    label: "Vision",
                    text: "A stronger, more inclusive agricultural services network across Africa.",
                  },
                  {
                    label: "Approach",
                    text: "Role-based apps, USSD access, offline-first workflows, and field support.",
                  },
                  {
                    label: "Focus",
                    text: "Operational clarity grounded in the realities of rural service delivery.",
                  },
                ].map((b) => (
                  <div key={b.label}>
                    <div className="text-xs font-bold uppercase tracking-wide text-primary">
                      {b.label}
                    </div>
                    <div className="mt-2 text-sm leading-relaxed text-primary/80">{b.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-4xl">
              Three roles. One network.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary/80 sm:text-base">
              A coordinated approach to requesting, delivering, and supporting farm services.
            </p>
          </div>

          <StaggerReveal stagger={0.12} className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Farmers",
                description: "Request services and track updates via app or USSD.",
                href: "/solutions/farmers",
                image: IMAGES.marketing.farmers,
                imageAlt: "Farmer checking service updates on his phones in the field",
              },
              {
                title: "Service providers",
                description: "Receive requests, schedule jobs, and manage teams and assets.",
                href: "/solutions/service-providers",
                image: IMAGES.marketing.providers,
                imageAlt: "Service provider team observing a tractor at work",
              },
              {
                title: "Agents",
                description:
                  "Support onboarding, coordination, and issue resolution (coming soon).",
                href: "/solutions/agents",
                image: IMAGES.marketing.agents,
                imageAlt: "Field agent coordinating with farmers in a rural community",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white p-6"
              >
                <div className="relative -mx-6 -mt-6 mb-5 h-36 overflow-hidden sm:h-40">
                  <Image
                    src={x.image}
                    alt={x.imageAlt}
                    fill
                    sizes="(min-width: 640px) 384px, 100vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="font-serif text-lg font-bold text-primary">{x.title}</div>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-primary/80">
                  {x.description}
                </p>
                <Link
                  href={x.href}
                  className="mt-4 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary"
                >
                  Learn more <ArrowRight className="size-4" />
                </Link>
              </div>
            ))}
          </StaggerReveal>
        </Container>
      </section>

      <section className="bg-muted/60 py-12 sm:py-16 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-10 lg:items-center">
            <div className="lg:col-span-6">
              <h2 className="font-serif text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-4xl">
                Access that works beyond smartphones
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-primary/80 sm:text-base">
                Agricultural service delivery can&rsquo;t depend on perfect connectivity.
                MechAfrica supports app and USSD access for the field.
              </p>
              <div className="relative mt-6 h-44 overflow-hidden rounded-2xl shadow-sm sm:h-52">
                <Image
                  src={IMAGES.marketing.ussd}
                  alt="Hands dialing a USSD code on a basic phone near a farm"
                  fill
                  sizes="(min-width: 1024px) 560px, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8 lg:col-span-6">
              <ul className="space-y-3 text-sm text-primary/80">
                {[
                  "USSD gives farmers access without a smartphone.",
                  "Offline-first workflows support work when the network drops.",
                  "Status updates reduce confusion and missed windows.",
                  "Agents support onboarding and follow-ups (planned).",
                ].map((line) => (
                  <li key={line} className="flex items-start gap-2">
                    <span className="mt-1.5 size-1.5 rounded-full bg-primary" aria-hidden="true" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button
                  asChild
                  className="h-11 rounded-full bg-primary px-5 text-white hover:bg-primary/90"
                >
                  <Link href="/download">Download & access</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-12 sm:py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-serif text-2xl font-bold leading-tight text-primary sm:text-3xl md:text-4xl">
              Built by MechLink. Backed by partners.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-primary/80 sm:text-base">
              MechLink Limited founded and develops MechAfrica, which scaled through the SAMA
              project — Strengthened Access to Mechanization for Agribusiness — led by Agrinvest
              with funding from AGRA, reaching {farmers} farmers across 9 regions of Ghana.
            </p>
          </div>

          <div className="mt-10 flex flex-col items-center gap-8 md:gap-12">
            <div className="flex flex-col items-center gap-2">
              <a
                href={founder.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${founder.name}`}
                className="transition-opacity hover:opacity-80"
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={220}
                  height={70}
                  className="h-auto w-[140px] object-contain md:w-[220px]"
                />
              </a>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-primary/70 md:text-xs">
                {founder.note}
              </span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-16">
              {partners.map((p) => (
                <div key={p.name} className="flex flex-col items-center gap-2">
                  <Image
                    src={p.image}
                    alt={p.name}
                    width={185}
                    height={70}
                    className="h-auto w-[100px] object-contain md:w-[150px]"
                  />
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-primary/70 md:text-xs">
                    {p.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <TiltedCallout
        heading="What’s next"
        description="We’re expanding operational support for field teams, deepening provider workflows, and continuing our focus on inclusive access through USSD and offline-first design."
        primaryCta={{ label: "Contact us", href: "/contact" }}
        secondaryCta={{ label: "See impact themes", href: "/impact" }}
      />
    </>
  );
}
