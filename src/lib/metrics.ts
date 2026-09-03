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
 *
 * Everything coming back is treated as untrusted input. These figures are
 * published as fact on the marketing site, so a corrupted, hostile, or merely
 * buggy response must degrade to the committed numbers rather than render.
 */
const METRICS_URL =
  process.env.MECHAFRICA_METRICS_URL ??
  "https://mechafrica-backend.up.railway.app/api/v1/public/metrics";

const REVALIDATE_SECONDS = 3600;

/** A hung backend must not stall a page render or block a deploy. */
const REQUEST_TIMEOUT_MS = 5000;

/** Above this, a value is not a real count — it is corruption or an attack. */
const MAX_PLAUSIBLE_COUNT = 50_000_000;

type MetricsPayload = {
  farmers_count?: unknown;
  providers_count?: unknown;
};

/**
 * Accepts a value only if it is a real, positive, plausibly-sized integer.
 * Zero is rejected: for a headline reach figure it means a failed query far more
 * often than it means the truth, and "0+ farmers" is worse than a stale number.
 * Note `typeof NaN === "number"` and `typeof Infinity === "number"`, so a bare
 * typeof check would happily render "NaN+" on the homepage.
 */
function readCount(value: unknown): number | null {
  if (typeof value !== "number") return null;
  if (!Number.isInteger(value)) return null;
  if (value <= 0 || value > MAX_PLAUSIBLE_COUNT) return null;
  return value;
}

function withPlus(value: number): string {
  return `${value.toLocaleString("en-US")}+`;
}

function staticValue(label: string, fallback: string): string {
  return staticMetrics.find((m) => m.label === label)?.value ?? fallback;
}

async function fetchMetrics(): Promise<MetricsPayload | null> {
  try {
    const res = await fetch(METRICS_URL, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      headers: { accept: "application/json" },
    });
    if (!res.ok) return null;
    if (!res.headers.get("content-type")?.includes("application/json")) return null;

    const body: unknown = await res.json();
    if (typeof body !== "object" || body === null) return null;

    const data = (body as { data?: unknown }).data;
    if (typeof data !== "object" || data === null) return null;

    return data as MetricsPayload;
  } catch {
    // Timeout, network failure, or malformed JSON. A backend hiccup must never
    // stop the marketing site rendering; callers fall back to committed figures.
    return null;
  }
}

/** Headline counts as display strings, for prose and page metadata. */
export async function getHeadlineCounts(): Promise<{ farmers: string; providers: string }> {
  const live = await fetchMetrics();
  const farmers = readCount(live?.farmers_count);
  const providers = readCount(live?.providers_count);

  return {
    farmers: farmers === null ? staticValue("Farmers reached", "21,759+") : withPlus(farmers),
    providers:
      providers === null ? staticValue("Service providers", "3,554+") : withPlus(providers),
  };
}

/**
 * The impact grid, with the two live figures substituted in. Everything the
 * backend does not publish (regions, districts, service requests) stays on the
 * committed values, as does any figure that fails validation.
 */
export async function getImpactMetrics(): Promise<SiteMetric[]> {
  const live = await fetchMetrics();
  if (!live) return staticMetrics;

  const farmers = readCount(live.farmers_count);
  const providers = readCount(live.providers_count);

  return staticMetrics.map((metric) => {
    if (metric.label === "Farmers reached" && farmers !== null) {
      return { ...metric, value: withPlus(farmers) };
    }
    if (metric.label === "Service providers" && providers !== null) {
      return { ...metric, value: withPlus(providers) };
    }
    return metric;
  });
}
