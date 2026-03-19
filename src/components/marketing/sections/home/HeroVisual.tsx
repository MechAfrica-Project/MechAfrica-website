"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Bell, CheckCircle2, MapPin, Route, Tractor, Users } from "lucide-react";

import { cn } from "@/lib/utils";

function PhoneMock({
  title,
  accent,
  items,
}: {
  title: string;
  accent: "gold" | "green";
  items: { icon: React.ReactNode; label: string; meta: string }[];
}) {
  const accentClass = accent === "gold" ? "bg-secondary/20" : "bg-accent";

  return (
    <div className="relative rounded-[2.2rem] border bg-card shadow-sm">
      <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-border" />
      <div className="p-4 pt-6">
        <div className={cn("rounded-2xl border p-3", accentClass)}>
          <div className="flex items-center justify-between gap-2">
            <div className="text-xs font-semibold text-foreground">{title}</div>
            <Bell className="size-4 text-muted-foreground" aria-hidden="true" />
          </div>
          <div className="mt-3 space-y-2">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 rounded-xl bg-background/80 p-2">
                <div className="mt-0.5 text-foreground/80">{item.icon}</div>
                <div className="min-w-0">
                  <div className="truncate text-xs font-medium text-foreground">{item.label}</div>
                  <div className="truncate text-[11px] text-muted-foreground">{item.meta}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between text-[11px] text-muted-foreground">
            <span>Offline-first</span>
            <span className="inline-flex items-center gap-1">
              <CheckCircle2 className="size-3" aria-hidden="true" />
              Synced
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapMock() {
  return (
    <div className="relative overflow-hidden rounded-3xl border bg-card shadow-sm">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(244,176,0,0.25),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(11,61,46,0.18),transparent_60%)]" />
      <div className="relative p-5">
        <div className="flex items-center justify-between">
          <div className="text-sm font-semibold">Request routing</div>
          <div className="inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
            <Route className="size-3" aria-hidden="true" />
            Live updates
          </div>
        </div>

        <div className="mt-4 rounded-2xl border bg-background/60 p-4">
          <svg viewBox="0 0 420 200" className="h-auto w-full" aria-hidden="true">
            <defs>
              <linearGradient id="route" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="rgb(244,176,0)" stopOpacity="0.9" />
                <stop offset="100%" stopColor="rgb(11,61,46)" stopOpacity="0.9" />
              </linearGradient>
            </defs>
            <path
              d="M40,150 C110,40 200,210 290,90 C330,40 360,60 390,30"
              fill="none"
              stroke="url(#route)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="6 10"
              opacity="0.9"
            />
            {[
              { x: 40, y: 150 },
              { x: 170, y: 90 },
              { x: 290, y: 90 },
              { x: 390, y: 30 },
            ].map((p, idx) => (
              <g key={idx}>
                <circle cx={p.x} cy={p.y} r="10" fill="rgba(11,61,46,0.12)" />
                <circle cx={p.x} cy={p.y} r="5.5" fill="rgb(11,61,46)" />
              </g>
            ))}
          </svg>
          <div className="mt-3 grid grid-cols-3 gap-2 text-xs">
            <div className="rounded-xl bg-muted p-2">
              <div className="font-semibold text-foreground">New</div>
              <div className="text-muted-foreground">Requests</div>
            </div>
            <div className="rounded-xl bg-muted p-2">
              <div className="font-semibold text-foreground">Assigned</div>
              <div className="text-muted-foreground">Providers</div>
            </div>
            <div className="rounded-xl bg-muted p-2">
              <div className="font-semibold text-foreground">In progress</div>
              <div className="text-muted-foreground">Work</div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1">
            <MapPin className="size-3" aria-hidden="true" />
            Location-aware
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1">
            <Users className="size-3" aria-hidden="true" />
            Farmers • Providers • Agents
          </span>
        </div>
      </div>
    </div>
  );
}

export function HeroVisual({ className }: { className?: string }) {
  const reduceMotion = useReducedMotion();

  const floatTransition = {
    duration: 8,
    repeat: Infinity,
    ease: "easeInOut" as const,
  };

  return (
    <div className={cn("relative", className)} aria-label="Platform visual overview">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[2.5rem]">
        <div className="absolute -left-16 -top-16 h-56 w-56 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute -bottom-10 -right-16 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
        <svg
          className="absolute inset-0 h-full w-full opacity-70"
          viewBox="0 0 900 600"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="dot" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse">
              <stop stopColor="rgba(11,61,46,0.28)" />
              <stop offset="1" stopColor="rgba(11,61,46,0)" />
            </radialGradient>
          </defs>
          {Array.from({ length: 24 }).map((_, i) => {
            const x = 90 + (i % 6) * 140;
            const y = 70 + Math.floor(i / 6) * 120;
            return <circle key={i} cx={x} cy={y} r="28" fill="url(#dot)" />;
          })}
        </svg>
      </div>

      <div className="grid gap-4 lg:grid-cols-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-2">
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
            transition={reduceMotion ? undefined : floatTransition}
            className="sm:mt-6"
          >
            <PhoneMock
              title="Farmers App"
              accent="gold"
              items={[
                {
                  icon: <Tractor className="size-4" aria-hidden="true" />,
                  label: "Request ploughing",
                  meta: "Select farm • Choose date",
                },
                {
                  icon: <MapPin className="size-4" aria-hidden="true" />,
                  label: "Track your request",
                  meta: "Status updates • Notifications",
                },
              ]}
            />
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
            transition={reduceMotion ? undefined : { ...floatTransition, delay: 0.8 }}
            className="sm:-mt-2"
          >
            <PhoneMock
              title="Provider App"
              accent="green"
              items={[
                {
                  icon: <CheckCircle2 className="size-4" aria-hidden="true" />,
                  label: "Accept jobs",
                  meta: "Confirm capacity • Schedule work",
                },
                {
                  icon: <Users className="size-4" aria-hidden="true" />,
                  label: "Assign assets & teams",
                  meta: "Tractors • Operators • Routes",
                },
              ]}
            />
          </motion.div>
        </div>

        <div className="grid gap-4 lg:col-span-5">
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -4, 0] }}
            transition={reduceMotion ? undefined : { ...floatTransition, delay: 0.3 }}
          >
            <MapMock />
          </motion.div>

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 4, 0] }}
            transition={reduceMotion ? undefined : { ...floatTransition, delay: 1.2 }}
            className="relative overflow-hidden rounded-3xl border bg-card p-5 shadow-sm"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(11,61,46,0.18),transparent_55%),radial-gradient(circle_at_80%_80%,rgba(244,176,0,0.18),transparent_55%)]" />
            <div className="relative">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold">Agents & operations</div>
                  <div className="mt-1 text-xs text-muted-foreground">
                    Onboarding • Support • Coordination
                  </div>
                </div>
                <div className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  Coming soon
                </div>
              </div>

              <div className="mt-4 grid gap-2">
                {[
                  { title: "Provider onboarding", meta: "Verify profile • Add assets" },
                  { title: "Farmer support", meta: "USSD assistance • Follow-ups" },
                  { title: "Completion tracking", meta: "Field updates • Resolution" },
                ].map((row) => (
                  <div
                    key={row.title}
                    className="flex items-start justify-between gap-3 rounded-2xl border bg-background/70 p-3"
                  >
                    <div className="min-w-0">
                      <div className="truncate text-xs font-semibold text-foreground">{row.title}</div>
                      <div className="truncate text-[11px] text-muted-foreground">{row.meta}</div>
                    </div>
                    <CheckCircle2 className="mt-0.5 size-4 text-primary/70" aria-hidden="true" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

