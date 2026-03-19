import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, MapPinned, ShieldCheck, SignalLow, Sprout, Tractor } from "lucide-react";

import { impactMetrics, siteConfig } from "@/content/site-config";
import { IMAGES } from "@/lib/images";
import { Container } from "@/components/site/Container";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Badge } from "@/components/marketing/Badge";
import { OptionalPhotoCard } from "@/components/marketing/OptionalPhotoCard";

export const metadata: Metadata = {
  title: "Impact | MechAfrica",
  description:
    "MechAfrica improves access to mechanized agricultural services, reduces friction in service delivery, supports inclusion through USSD and offline-first workflows, and strengthens coordination between farmers and providers.",
};

export default function ImpactPage() {
  return (
    <>
      <section className="bg-background">
        <Container className="py-14 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>Impact</Badge>
                <Badge variant="outline">Efficiency</Badge>
                <Badge variant="outline">Inclusion</Badge>
                <Badge variant="outline">Coordination</Badge>
              </div>
              <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Agricultural services that reach more people — reliably
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                MechAfrica strengthens service delivery by connecting demand, supply, and field coordination — with
                offline-first workflows and USSD access to keep participation inclusive.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                <Button asChild variant="secondary" className="h-11 rounded-full px-5">
                  <Link href="/download">Download / access</Link>
                </Button>
                <Button asChild variant="outline" className="h-11 rounded-full px-5">
                  <Link href="/contact">Partner with us</Link>
                </Button>
              </div>
            </FadeIn>

            <div className="lg:col-span-7">
              <OptionalPhotoCard
                src={IMAGES.marketing.impact}
                alt="Mechanized farm work showing increased efficiency in the field"
                aspect="4/3"
                priority
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-muted/35">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <SectionHeader
              eyebrow="Impact themes"
              title="Efficiency + inclusion, at the service-chain level"
              description="MechAfrica is built to improve how services are discovered, scheduled, delivered, and supported — not just how they’re booked."
            />
          </FadeIn>

          <div className="mt-10 grid gap-4 lg:grid-cols-4 sm:grid-cols-2">
            {[
              { title: "Improving access to mechanized services", icon: Tractor },
              { title: "Reducing friction in service delivery", icon: ShieldCheck },
              { title: "Supporting rural users via USSD + offline-first", icon: SignalLow },
              { title: "Enabling more inclusive transformation", icon: Sprout },
            ].map((x, idx) => (
              <FadeIn key={x.title} delay={idx * 0.03}>
                <div className="rounded-3xl border bg-card p-6 shadow-sm">
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-primary">
                    <x.icon className="size-5" aria-hidden="true" />
                  </div>
                  <div className="font-serif text-lg font-semibold text-foreground">{x.title}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <SectionHeader
              eyebrow="Impact metrics"
              title="A structure for reporting progress"
              description="Update these metrics with verified data as reporting matures."
            />
          </FadeIn>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {impactMetrics.map((m, idx) => (
              <FadeIn key={m.label} delay={idx * 0.02}>
                <div className="rounded-3xl border bg-card p-6 shadow-sm">
                  <div className="text-3xl font-semibold tracking-tight text-foreground">{m.value}</div>
                  <div className="mt-2 text-sm font-medium text-foreground">{m.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.08}>
            <div className="mt-10 rounded-3xl border bg-muted/35 p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-semibold">Service coverage map</div>
                <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  <MapPinned className="size-3" aria-hidden="true" />
                  Coming soon
                </div>
              </div>
              <div className="mt-4 aspect-[16/8] rounded-2xl border bg-card shadow-sm">
                <div className="flex h-full flex-col items-center justify-center px-6 text-center">
                  <div className="font-semibold text-foreground">Coverage visualization</div>
                  <div className="mt-2 max-w-md text-sm text-muted-foreground">
                    Add a Ghana district map or coverage dashboard when verified data is available.
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-muted/35">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <SectionHeader
              eyebrow="Before / after"
              title="From uncertainty to coordinated delivery"
              description="A simplified comparison of how workflows can improve when service delivery is organized."
            />
          </FadeIn>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            <FadeIn>
              <div className="rounded-3xl border bg-card p-6 shadow-sm">
                <div className="text-sm font-semibold text-foreground">Before</div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
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
            </FadeIn>

            <FadeIn delay={0.06}>
              <div className="rounded-3xl border bg-card p-6 shadow-sm">
                <div className="text-sm font-semibold text-foreground">With MechAfrica</div>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {[
                    "Requests are captured consistently and routed to available providers.",
                    "Providers manage jobs, assets, and teams with clearer coordination.",
                    "Farmers receive status updates and can plan with more confidence.",
                    "USSD and offline-first design keep participation inclusive.",
                  ].map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 size-4 text-primary/70" aria-hidden="true" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      <section className="bg-background">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <SectionHeader
              eyebrow="Ecosystem benefits"
              title="Impact for every role"
              description="Better service delivery helps farmers plan, providers operate, and the ecosystem coordinate more effectively."
            />
          </FadeIn>

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
              },
            ].map((x, idx) => (
              <FadeIn key={x.title} delay={idx * 0.04}>
                <div className="rounded-3xl border bg-card p-6 shadow-sm">
                  <div className="flex items-start justify-between gap-2">
                    <div className="font-serif text-xl font-semibold text-foreground">{x.title}</div>
                    {x.title === "Agents" ? <Badge variant="outline">Coming soon</Badge> : null}
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {x.points.map((p) => (
                      <li key={p} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 size-4 text-primary/70" aria-hidden="true" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
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
                  Expand service access in your area
                </h2>
                <p className="mt-3 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
                  Want to partner, support onboarding, or coordinate pilots? Let’s talk.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="secondary" className="h-11 rounded-full px-5">
                    <Link href="/contact">
                      Contact us <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="h-11 rounded-full border-white/30 bg-transparent px-5"
                  >
                    <Link href={siteConfig.ussd.telHref}>Dial {siteConfig.ussd.code}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
}
