import type { Metadata } from "next";
import { ArrowRight, Globe, ShieldCheck, Users } from "lucide-react";
import Link from "next/link";

import { partners, siteConfig } from "@/content/site-config";
import { IMAGES } from "@/lib/image";
import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Badge } from "@/components/marketing/Badge";
import { OptionalPhotoCard } from "@/components/marketing/OptionalPhotoCard";

export const metadata: Metadata = {
  title: "About | MechAfrica",
  description:
    "Learn about MechAfrica — a Ghana-first agricultural services network connecting farmers, service providers, and field agents through apps and USSD.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-background">
        <Container className="py-14 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-6">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>Our story</Badge>
                <Badge variant="outline">Ghana-first</Badge>
                <Badge variant="outline">Inclusive access</Badge>
              </div>
              <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Building agricultural service infrastructure that works in the real world
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                MechAfrica is a coordinated agricultural services network in Ghana. We connect farmers, service
                providers, and field agents through apps and USSD — so services can be requested, scheduled,
                delivered, and tracked with clear updates.
              </p>
            </FadeIn>

            <FadeIn className="lg:col-span-6" delay={0.06}>
              <OptionalPhotoCard
                src={IMAGES.marketing.onboarding}
                alt="Field onboarding and support in a farming community"
                aspect="4/3"
                priority
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-muted/35">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-5">
              <SectionHeader
                eyebrow="Our story"
                title="Built to expand access and reliability"
                description="MechAfrica was formed through the partnership of Agrinvest Limited and MechLink Limited, with support from AGRA."
              />
            </FadeIn>

            <div className="grid gap-4 lg:col-span-7 sm:grid-cols-2">
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
              ].map((c, idx) => (
                <FadeIn key={c.title} delay={idx * 0.03}>
                  <div className="rounded-3xl border bg-card p-6 shadow-sm">
                    <div className="mb-3 inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-primary">
                      <c.icon className="size-5" aria-hidden="true" />
                    </div>
                    <div className="font-serif text-lg font-semibold">{c.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-5">
              <SectionHeader
                eyebrow="Our mission"
                title="Make services easier to access, manage, and scale"
                description="We build practical tools that reduce friction from request to delivery to support."
              />
            </FadeIn>

            <FadeIn className="lg:col-span-7" delay={0.06}>
              <div className="rounded-3xl border bg-card p-8 shadow-sm">
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
                      <div className="text-xs font-semibold tracking-wide text-muted-foreground">{b.label}</div>
                      <div className="mt-2 text-sm leading-relaxed text-foreground">{b.text}</div>
                    </div>
                  ))}
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
              eyebrow="Our model"
              title="Three roles. One network."
              description="A coordinated approach to requesting, delivering, and supporting farm services."
            />
          </FadeIn>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "Farmers",
                description:
                  "Request services and track updates via app or USSD.",
                href: "/solutions/farmers",
              },
              {
                title: "Service providers",
                description:
                  "Receive requests, schedule jobs, and manage teams and assets.",
                href: "/solutions/service-providers",
              },
              {
                title: "Agents",
                description:
                  "Support onboarding, coordination, and issue resolution (coming soon).",
                href: "/solutions/agents",
              },
            ].map((x, idx) => (
              <FadeIn key={x.title} delay={idx * 0.04}>
                <div className="flex h-full flex-col rounded-3xl border bg-card p-6 shadow-sm">
                  <div className="font-serif text-xl font-semibold">{x.title}</div>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{x.description}</p>
                  <Button asChild variant="ghost" className="mt-4 h-10 self-start rounded-full px-4">
                    <Link href={x.href}>
                      Learn more <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container className="py-14 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-6">
              <SectionHeader
                eyebrow="Why accessibility matters"
                title="Access that works beyond smartphones"
                description="Agricultural service delivery can’t depend on perfect connectivity. MechAfrica supports app and USSD access for the field."
              />
            </FadeIn>
            <FadeIn className="lg:col-span-6" delay={0.06}>
              <div className="rounded-3xl border bg-card p-8 shadow-sm">
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "USSD gives farmers access without a smartphone.",
                    "Offline-first workflows support work when the network drops.",
                    "Status updates reduce confusion and missed windows.",
                    "Agents support onboarding and follow-ups (planned).",
                  ].map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <span className="mt-1.5 size-1.5 rounded-full bg-secondary" aria-hidden="true" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Button asChild variant="secondary" className="h-11 rounded-full px-5">
                    <Link href="/download">Download & access</Link>
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
              eyebrow="Our partners"
              title="Partners"
              description={siteConfig.partnershipLine}
            />
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {partners.map((p, idx) => (
              <FadeIn key={p.name} delay={idx * 0.03}>
                <div className="rounded-3xl border bg-card p-6 text-center shadow-sm">
                  <div className="text-lg font-semibold text-foreground">{p.name}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{p.note}</div>
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
                  What’s next
                </h2>
                <p className="mt-3 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
                  We’re expanding operational support for field teams, deepening provider workflows, and
                  continuing our focus on inclusive access through USSD and offline-first design.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="rounded-3xl bg-black/15 p-6">
                  <div className="text-sm font-semibold">Get involved</div>
                  <p className="mt-2 text-sm text-primary-foreground/80">
                    Want to partner, pilot, or support rollout in your district? Reach out and we’ll connect you
                    with the right team.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Button asChild variant="secondary" className="h-11 rounded-full px-5">
                      <Link href="/contact">Contact us</Link>
                    </Button>
                    <Button asChild variant="outline" className="h-11 rounded-full border-white/30 bg-transparent">
                      <Link href="/impact">See impact themes</Link>
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

