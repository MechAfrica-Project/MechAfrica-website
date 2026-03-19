"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Tractor, Users, Wrench } from "lucide-react";

import { cn } from "@/lib/utils";
import { FadeIn } from "@/components/marketing/motion/FadeIn";
import { Badge } from "@/components/marketing/Badge";

function MobileCard({
  title,
  subtitle,
  meta,
  icon,
  tone = "green",
  badge,
}: {
  title: string;
  subtitle: string;
  meta: string;
  icon: React.ReactNode;
  tone?: "green" | "gold" | "neutral";
  badge?: string;
}) {
  const toneClass =
    tone === "gold"
      ? "bg-secondary/15 border-secondary/30"
      : tone === "neutral"
        ? "bg-muted/35"
        : "bg-accent border-primary/15";

  return (
    <div className={cn("rounded-3xl border p-5 shadow-sm", toneClass)}>
      <div className="flex items-start justify-between gap-3">
        <div className="inline-flex size-10 items-center justify-center rounded-2xl bg-background/80 text-primary">
          {icon}
        </div>
        {badge ? <Badge variant="outline">{badge}</Badge> : null}
      </div>
      <div className="mt-4 font-serif text-xl font-semibold text-foreground">{title}</div>
      <div className="mt-2 text-sm font-medium text-foreground/80">{subtitle}</div>
      <div className="mt-1 text-sm text-muted-foreground">{meta}</div>
    </div>
  );
}

export function EcosystemDiagram({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();
  const rawId = React.useId();
  const gradientId = `line-${rawId.replace(/:/g, "")}`;

  const lineTransition = { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const };
  const lineInitial = reduceMotion ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 };

  return (
    <div className={cn("overflow-hidden rounded-3xl border bg-card p-6 shadow-sm", className)}>
      {/* Mobile / small screens */}
      <div className="lg:hidden">
        <div className="grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <FadeIn>
              <MobileCard
                title="Farmers"
                subtitle="Request • Track • Complete"
                meta="App or USSD"
                icon={<Tractor className="size-5" aria-hidden="true" />}
                tone="green"
              />
            </FadeIn>
            <FadeIn delay={0.04}>
              <MobileCard
                title="Providers"
                subtitle="Accept • Assign • Deliver"
                meta="Provider App"
                icon={<Wrench className="size-5" aria-hidden="true" />}
                tone="gold"
              />
            </FadeIn>
          </div>

          <FadeIn delay={0.08}>
            <div
              className="mx-auto h-10 w-px bg-gradient-to-b from-secondary/70 via-border to-primary/70"
              aria-hidden="true"
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-3xl border bg-muted/35 p-5 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="font-serif text-xl font-semibold text-foreground">MechAfrica Platform</div>
                  <div className="mt-1 text-sm text-muted-foreground">Routing • Updates • Coordination</div>
                </div>
                <Badge variant="secondary">USSD reach</Badge>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <Badge variant="outline">Offline-first</Badge>
                <Badge variant="outline">Notifications</Badge>
                <Badge variant="outline">Location-aware</Badge>
                <Badge>Apps + USSD</Badge>
              </div>
              <div className="mt-4 rounded-2xl border bg-background/70 p-4 text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">USSD expands reach</span> — farmers can request
                services without a smartphone.
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.12}>
            <div
              className="mx-auto h-10 w-px bg-gradient-to-b from-primary/70 via-border to-secondary/70"
              aria-hidden="true"
            />
          </FadeIn>

          <FadeIn delay={0.14}>
            <MobileCard
              title="Agents"
              subtitle="Onboard • Support • Coordinate"
              meta="Agents App (planned release)"
              icon={<Users className="size-5" aria-hidden="true" />}
              tone="neutral"
              badge="Coming soon"
            />
          </FadeIn>
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block">
        <motion.svg
          viewBox="0 0 900 420"
          className="h-auto w-full"
          role="img"
          aria-label="Service network diagram showing farmers, service providers, and agents connected through MechAfrica via apps and USSD."
        >
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="rgb(244,176,0)" stopOpacity="0.9" />
              <stop offset="100%" stopColor="rgb(11,61,46)" stopOpacity="0.9" />
            </linearGradient>
            <radialGradient id="dot" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(11,61,46,0.22)" />
              <stop offset="1" stopColor="rgba(11,61,46,0)" />
            </radialGradient>
          </defs>

          {Array.from({ length: 20 }).map((_, i) => {
            const x = 90 + (i % 5) * 170;
            const y = 70 + Math.floor(i / 5) * 110;
            return <circle key={i} cx={x} cy={y} r="28" fill="url(#dot)" opacity="0.7" />;
          })}

          <motion.path
            d="M260 140 C330 80, 420 70, 480 110"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="5"
            strokeLinecap="round"
            initial={lineInitial}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ ...lineTransition, delay: 0.05 }}
          />
          <motion.path
            d="M260 280 C330 340, 420 350, 480 310"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="5"
            strokeLinecap="round"
            initial={lineInitial}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ ...lineTransition, delay: 0.1 }}
          />
          <motion.path
            d="M640 210 C700 210, 740 210, 780 210"
            fill="none"
            stroke={`url(#${gradientId})`}
            strokeWidth="5"
            strokeLinecap="round"
            initial={lineInitial}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ ...lineTransition, delay: 0.16 }}
          />

          <g>
            <rect
              x="60"
              y="90"
              width="200"
              height="110"
              rx="26"
              fill="rgba(11,61,46,0.08)"
              stroke="rgba(11,61,46,0.25)"
            />
            <text x="160" y="135" textAnchor="middle" fontSize="18" fill="rgb(15,30,22)" fontWeight="700">
              Farmers
            </text>
            <text x="160" y="162" textAnchor="middle" fontSize="13" fill="rgba(15,30,22,0.7)">
              Request • Track • Complete
            </text>
            <text x="160" y="188" textAnchor="middle" fontSize="12" fill="rgba(15,30,22,0.55)">
              App or USSD
            </text>
          </g>

          <g>
            <rect
              x="60"
              y="220"
              width="200"
              height="110"
              rx="26"
              fill="rgba(244,176,0,0.10)"
              stroke="rgba(244,176,0,0.35)"
            />
            <text x="160" y="265" textAnchor="middle" fontSize="18" fill="rgb(15,30,22)" fontWeight="700">
              Providers
            </text>
            <text x="160" y="292" textAnchor="middle" fontSize="13" fill="rgba(15,30,22,0.7)">
              Accept • Assign • Deliver
            </text>
            <text x="160" y="318" textAnchor="middle" fontSize="12" fill="rgba(15,30,22,0.55)">
              Provider App
            </text>
          </g>

          <g>
            <rect
              x="480"
              y="140"
              width="260"
              height="160"
              rx="32"
              fill="rgba(11,61,46,0.06)"
              stroke="rgba(11,61,46,0.25)"
            />
            <text x="610" y="188" textAnchor="middle" fontSize="18" fill="rgb(15,30,22)" fontWeight="800">
              MechAfrica Platform
            </text>
            <text x="610" y="214" textAnchor="middle" fontSize="13" fill="rgba(15,30,22,0.7)">
              Routing • Status updates • Coordination
            </text>
            <g>
              <rect x="510" y="250" width="200" height="34" rx="17" fill="rgba(244,176,0,0.16)" />
              <text x="610" y="272" textAnchor="middle" fontSize="12" fill="rgb(15,30,22)" fontWeight="700">
                USSD expands reach
              </text>
            </g>
          </g>

          <g>
            <rect
              x="780"
              y="155"
              width="120"
              height="110"
              rx="26"
              fill="rgba(11,61,46,0.08)"
              stroke="rgba(11,61,46,0.25)"
            />
            <text x="840" y="200" textAnchor="middle" fontSize="18" fill="rgb(15,30,22)" fontWeight="700">
              Agents
            </text>
            <text x="840" y="226" textAnchor="middle" fontSize="12" fill="rgba(15,30,22,0.6)">
              Onboard • Support
            </text>
            <text x="840" y="248" textAnchor="middle" fontSize="12" fill="rgba(15,30,22,0.6)">
              Coordinate
            </text>
          </g>
        </motion.svg>
      </div>
    </div>
  );
}
