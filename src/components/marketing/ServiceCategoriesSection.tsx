"use client";

import { Droplets, Layers3, Radar, Shovel, Sprout, Truck, Wheat, Wrench, type LucideIcon } from "lucide-react";

import { serviceCategories, type ServiceCategoryKey } from "@/content/site-config";
import { cn } from "@/lib/utils";
import { Container } from "@/components/site/Container";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { SectionHeader } from "@/components/marketing/SectionHeader";

const iconMap: Record<ServiceCategoryKey, LucideIcon> = {
  "land-prep": Shovel,
  planting: Sprout,
  spraying: Droplets,
  harvesting: Wheat,
  threshing: Layers3,
  drone: Radar,
  logistics: Truck,
  technical: Wrench,
};

export function ServiceCategoriesSection({
  eyebrow = "Services",
  title = "A wide range of farm services",
  description = "Request the service you need. Availability varies by district and provider capacity.",
  className,
  backgroundClassName = "bg-muted/35",
}: {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
  backgroundClassName?: string;
}) {
  return (
    <section className={cn(backgroundClassName, className)}>
      <Container className="py-14 sm:py-20">
        <FadeIn>
          <SectionHeader eyebrow={eyebrow} title={title} description={description} />
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((c, idx) => {
            const Icon = iconMap[c.key];
            return (
              <FadeIn key={c.key} delay={idx * 0.03}>
                <div className="h-full rounded-3xl border bg-card p-6 shadow-sm">
                  <div className="mb-3 inline-flex size-10 items-center justify-center rounded-2xl bg-accent text-primary">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <div className="font-serif text-lg font-semibold text-foreground">{c.title}</div>
                  <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted-foreground">
                    {c.services.map((s) => (
                      <span key={s} className="rounded-full bg-muted px-3 py-1">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

