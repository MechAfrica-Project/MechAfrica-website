import { ChevronDown, ChevronRight, Network, Tractor, Users, Wrench } from "lucide-react";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const nodes = {
  farmers: { title: "Farmers", subtitle: "Request • Track • Complete", meta: "App or USSD" },
  providers: { title: "Providers", subtitle: "Accept • Assign • Deliver", meta: "Provider App" },
  platform: {
    title: "MechAfrica Platform",
    subtitle: "Routing • Status updates • Coordination",
    meta: "USSD expands reach — farmers can request services without a smartphone.",
  },
  agents: {
    title: "Agents",
    subtitle: "Onboard • Support • Coordinate",
    meta: "Agents App (planned release)",
  },
} as const;

function NodeCard({
  title,
  subtitle,
  meta,
  icon,
  tone = "accent",
  badge,
  className,
}: {
  title: string;
  subtitle: string;
  meta?: string;
  icon: ReactNode;
  tone?: "accent" | "lime" | "primary";
  badge?: string;
  className?: string;
}) {
  const toneClass =
    tone === "primary"
      ? "bg-primary text-white"
      : tone === "lime"
        ? "bg-[#a7ec33]/20 text-primary"
        : "bg-accent text-primary";
  const iconToneClass = tone === "primary" ? "bg-white/15 text-white" : "bg-primary text-white";
  const subtitleToneClass = tone === "primary" ? "text-white/85" : "text-primary/75";
  const metaToneClass = tone === "primary" ? "text-white/70" : "text-primary/60";
  const badgeToneClass = tone === "primary" ? "bg-white/15 text-white" : "bg-primary/10 text-primary";

  return (
    <div className={cn("rounded-2xl p-5 sm:p-6", toneClass, className)}>
      <div className="flex items-start justify-between gap-3">
        <div className={cn("inline-flex size-10 items-center justify-center rounded-xl", iconToneClass)}>
          {icon}
        </div>
        {badge ? (
          <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", badgeToneClass)}>{badge}</span>
        ) : null}
      </div>
      <div className="mt-4 font-serif text-lg font-bold">{title}</div>
      <div className={cn("mt-1 text-sm font-medium", subtitleToneClass)}>{subtitle}</div>
      {meta ? <div className={cn("mt-2 text-xs leading-relaxed", metaToneClass)}>{meta}</div> : null}
    </div>
  );
}

function Connector({ direction }: { direction: "right" | "down" }) {
  if (direction === "down") {
    return (
      <div className="relative flex h-10 items-center justify-center self-center">
        <div className="h-full w-px bg-primary/15" />
        <div className="absolute inline-flex size-8 items-center justify-center rounded-full bg-primary text-white shadow-sm">
          <ChevronDown className="size-4" aria-hidden="true" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative flex w-10 items-center self-stretch sm:w-14 lg:w-16">
      <div className="h-px w-full bg-primary/15" />
      <div className="absolute left-1/2 top-1/2 inline-flex size-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-white shadow-sm">
        <ChevronRight className="size-4" aria-hidden="true" />
      </div>
    </div>
  );
}

export function EcosystemDiagram({ className }: { className?: string }) {
  return (
    <div className={cn("rounded-2xl bg-white p-5 shadow-sm sm:p-8", className)}>
      {/* Mobile / tablet — stacked flow */}
      <div className="flex flex-col lg:hidden">
        <div className="grid gap-4 sm:grid-cols-2">
          <NodeCard
            title={nodes.farmers.title}
            subtitle={nodes.farmers.subtitle}
            meta={nodes.farmers.meta}
            icon={<Tractor className="size-5" aria-hidden="true" />}
            tone="accent"
          />
          <NodeCard
            title={nodes.providers.title}
            subtitle={nodes.providers.subtitle}
            meta={nodes.providers.meta}
            icon={<Wrench className="size-5" aria-hidden="true" />}
            tone="lime"
          />
        </div>

        <Connector direction="down" />

        <NodeCard
          title={nodes.platform.title}
          subtitle={nodes.platform.subtitle}
          meta={nodes.platform.meta}
          icon={<Network className="size-5" aria-hidden="true" />}
          tone="primary"
        />

        <Connector direction="down" />

        <NodeCard
          title={nodes.agents.title}
          subtitle={nodes.agents.subtitle}
          meta={nodes.agents.meta}
          icon={<Users className="size-5" aria-hidden="true" />}
          tone="accent"
          badge="Coming soon"
        />
      </div>

      {/* Desktop — horizontal flow */}
      <div className="hidden items-stretch gap-0 lg:flex">
        <div className="flex flex-1 flex-col justify-center gap-4">
          <NodeCard
            title={nodes.farmers.title}
            subtitle={nodes.farmers.subtitle}
            meta={nodes.farmers.meta}
            icon={<Tractor className="size-5" aria-hidden="true" />}
            tone="accent"
          />
          <NodeCard
            title={nodes.providers.title}
            subtitle={nodes.providers.subtitle}
            meta={nodes.providers.meta}
            icon={<Wrench className="size-5" aria-hidden="true" />}
            tone="lime"
          />
        </div>

        <Connector direction="right" />

        <div className="flex flex-[1.2] items-center">
          <NodeCard
            title={nodes.platform.title}
            subtitle={nodes.platform.subtitle}
            meta={nodes.platform.meta}
            icon={<Network className="size-5" aria-hidden="true" />}
            tone="primary"
            className="w-full"
          />
        </div>

        <Connector direction="right" />

        <div className="flex flex-1 items-center">
          <NodeCard
            title={nodes.agents.title}
            subtitle={nodes.agents.subtitle}
            meta={nodes.agents.meta}
            icon={<Users className="size-5" aria-hidden="true" />}
            tone="accent"
            badge="Coming soon"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
