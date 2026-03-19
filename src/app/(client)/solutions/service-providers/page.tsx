import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, ClipboardList, MapPinned, Star, Tractor, Users } from "lucide-react";

import { siteConfig } from "@/content/site-config";
import { IMAGES } from "@/lib/images";
import { Container } from "@/components/site/Container";
import { AppStoreButtons } from "@/components/site/AppStoreButtons";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";
import { Badge } from "@/components/marketing/Badge";
import { OptionalPhotoCard } from "@/components/marketing/OptionalPhotoCard";

export const metadata: Metadata = {
  title: "For Service Providers | MechAfrica",
  description:
    "Grow demand and operate efficiently with the MechAfrica Service Provider App. Manage requests, assign equipment and teams, track active work, and build a stronger professional presence.",
};

export default function ServiceProvidersPage() {
  return (
    <>
      <section className="bg-background">
        <Container className="py-14 sm:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <FadeIn className="lg:col-span-5">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>For service providers</Badge>
                <Badge variant="outline">Job management</Badge>
                <Badge variant="outline">Asset visibility</Badge>
              </div>
              <h1 className="mt-6 font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                Turn demand into delivered work — with clearer operations
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                The MechAfrica Service Provider App helps you receive requests, manage jobs, assign equipment and
                teams, track active work, and improve visibility across your service area.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-2">
                <AppStoreButtons
                  playStoreHref={siteConfig.appLinks.provider.playStore}
                  appStoreHref={siteConfig.appLinks.provider.appStore}
                />
                <Button asChild variant="ghost" className="h-11 rounded-full px-4">
                  <Link href="/how-it-works#providers">See provider flow</Link>
                </Button>
              </div>
            </FadeIn>

            <div className="lg:col-span-7">
              <OptionalPhotoCard
                src={IMAGES.marketing.providers}
                alt="Mechanization service provider with equipment in a field setting"
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
                eyebrow="Why providers join"
                title="More visibility. Better utilization."
                description="Providers grow when demand is organized and operations are easier to manage across assets and teams."
              />
            </FadeIn>

            <div className="grid gap-4 lg:col-span-7 sm:grid-cols-2">
              {[
                {
                  title: "Receive service requests",
                  text: "See demand by location and category so you can respond faster with confidence.",
                  icon: ClipboardList,
                },
                {
                  title: "Manage jobs end-to-end",
                  text: "Accept, schedule, and track jobs from assignment to completion.",
                  icon: Tractor,
                },
                {
                  title: "Assign teams and equipment",
                  text: "Coordinate operators and assets to reduce downtime and missed opportunities.",
                  icon: Users,
                },
                {
                  title: "Get insights over time",
                  text: "Use demand signals and job history to plan better and improve service quality.",
                  icon: BarChart3,
                },
              ].map((b, idx) => (
                <FadeIn key={b.title} delay={idx * 0.03}>
                  <div className="rounded-3xl border bg-card p-6 shadow-sm">
                    <div className="mb-3 inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-primary">
                      <b.icon className="size-5" aria-hidden="true" />
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

      <section className="bg-background">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <SectionHeader
              eyebrow="Core capabilities"
              title="Operations tools designed for service delivery"
              description="Organize demand, coordinate assets, and keep farmers informed with simple, reliable workflows."
            />
          </FadeIn>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              {
                title: "Request management",
                icon: ClipboardList,
                points: ["Accept or decline requests", "Schedule and route jobs", "Track active work to completion"],
              },
              {
                title: "Asset visibility",
                icon: MapPinned,
                points: ["Assign tractors and operators", "Reduce idle time", "Coordinate across multiple districts"],
              },
              {
                title: "Professional profile",
                icon: Star,
                points: ["Build trust over time", "Show readiness and services", "Improve discoverability"],
              },
            ].map((x, idx) => (
              <FadeIn key={x.title} delay={idx * 0.04}>
                <div className="rounded-3xl border bg-card p-6 shadow-sm">
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-primary">
                    <x.icon className="size-5" aria-hidden="true" />
                  </div>
                  <div className="font-serif text-xl font-semibold">{x.title}</div>
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

          <FadeIn delay={0.1}>
            <div className="mt-10 rounded-3xl border bg-muted/35 p-6">
              <div className="text-sm font-semibold">Analytics and planning</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Planned: provider-facing analytics modules like demand heatmaps, seasonality trends, completion
                times, and utilization insights.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  "Demand by district",
                  "Utilization rate",
                  "Completion time",
                  "Top services",
                  "Repeat requests",
                  "Capacity planning",
                ].map((k) => (
                  <div key={k} className="rounded-2xl border bg-card px-4 py-3 text-sm text-muted-foreground shadow-sm">
                    {k}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="bg-primary text-primary-foreground">
        <Container className="py-14 sm:py-20">
          <FadeIn>
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <h2 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                  Download the Service Provider App
                </h2>
                <p className="mt-3 max-w-2xl text-base text-primary-foreground/80 sm:text-lg">
                  Receive requests, manage jobs, assign assets, and keep farmers updated — all from one place.
                </p>
              </div>
              <div className="lg:col-span-5">
                <div className="flex flex-col gap-2 rounded-3xl bg-black/15 p-6">
                  <AppStoreButtons
                    playStoreHref={siteConfig.appLinks.provider.playStore}
                    appStoreHref={siteConfig.appLinks.provider.appStore}
                    className="justify-start"
                  />
                  <Button asChild variant="outline" className="h-11 rounded-full border-white/30 bg-transparent">
                    <Link href="/contact">
                      Contact us <ArrowRight className="size-4" />
                    </Link>
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

