import { impactMetrics as staticMetrics, type SiteMetric } from "@/content/site-config";

/**
 * Live platform metrics from the MechAfrica backend.
 *
 * The backend rounds every figure down before publishing it (see `roundDown` in
 * internal/services/public_metrics_service.go) so that exact counts stay private.
 * That makes each number a floor, which is why they render with a trailing "+".
 *
 * The endpoint caches for an hour on the server; we revalidate on the same
 * cadence rather than hammering it per request.
 */
const METRICS_URL =
  process.env.MECHAFRICA_METRICS_URL ??
  "https://mechafrica-backend.up.railway.app/api/v1/public/metrics";

const REVALIDATE_SECONDS = 3600;

type MetricsPayload = {
  farmers_count?: number;
  providers_count?: number;
  agents_count?: number;
  requests_placed?: number;
  requests_completed?: number;
  farms_count?: number;
  total_acres?: number;
};

function withPlus(value: number): string {
  return `${value.toLocaleString("en-US")}+`;
}

async function fetchMetrics(): Promise<MetricsPayload | null> {
  try {
    const res = await fetch(METRICS_URL, { next: { revalidate: REVALIDATE_SECONDS } });
    if (!res.ok) return null;
    const body = await res.json();
    return (body?.data ?? null) as MetricsPayload | null;
  } catch {
    // A backend hiccup must never stop the marketing site rendering; callers
    // fall back to the figures committed in site-config.
    return null;
  }
}

/** Headline counts as display strings, for prose and page metadata. */
export async function getHeadlineCounts(): Promise<{ farmers: string; providers: string }> {
  const live = await fetchMetrics();
  return {
    farmers:
      typeof live?.farmers_count === "number"
        ? withPlus(live.farmers_count)
        : (staticMetrics.find((m) => m.label === "Farmers reached")?.value ?? "21,759+"),
    providers:
      typeof live?.providers_count === "number"
        ? withPlus(live.providers_count)
        : (staticMetrics.find((m) => m.label === "Service providers")?.value ?? "3,554+"),
  };
}

/**
 * The impact grid, with the two live figures substituted in. Everything the
 * backend does not publish (regions, districts, service requests) stays on the
 * committed values.
 */
export async function getImpactMetrics(): Promise<SiteMetric[]> {
  const live = await fetchMetrics();
  if (!live) return staticMetrics;

  return staticMetrics.map((metric) => {
    if (metric.label === "Farmers reached" && typeof live.farmers_count === "number") {
      return { ...metric, value: withPlus(live.farmers_count) };
    }
    if (metric.label === "Service providers" && typeof live.providers_count === "number") {
      return { ...metric, value: withPlus(live.providers_count) };
    }
    return metric;
  });
}
