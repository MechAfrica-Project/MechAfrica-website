import { cn } from "@/lib/utils";

export function EcosystemDiagram({ className }: { className?: string }) {
  return (
    <div className={cn("overflow-hidden rounded-3xl border bg-card p-6 shadow-sm", className)}>
      <svg
        viewBox="0 0 900 420"
        className="h-auto w-full"
        role="img"
        aria-label="Ecosystem diagram showing farmers, service providers, and agents connected through the MechAfrica platform via apps and USSD."
      >
        <defs>
          <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgb(244,176,0)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="rgb(11,61,46)" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        <rect x="0" y="0" width="900" height="420" fill="transparent" />

        {/* Connections */}
        <path
          d="M260 140 C330 80, 420 70, 480 110"
          fill="none"
          stroke="url(#line)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M260 280 C330 340, 420 350, 480 310"
          fill="none"
          stroke="url(#line)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M640 210 C700 210, 740 210, 780 210"
          fill="none"
          stroke="url(#line)"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Left nodes */}
        <g>
          <rect x="60" y="90" width="200" height="110" rx="26" fill="rgba(11,61,46,0.08)" stroke="rgba(11,61,46,0.25)" />
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
          <rect x="60" y="220" width="200" height="110" rx="26" fill="rgba(244,176,0,0.10)" stroke="rgba(244,176,0,0.35)" />
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

        {/* Platform node */}
        <g>
          <rect x="480" y="140" width="260" height="160" rx="32" fill="rgba(11,61,46,0.06)" stroke="rgba(11,61,46,0.25)" />
          <text x="610" y="188" textAnchor="middle" fontSize="18" fill="rgb(15,30,22)" fontWeight="800">
            MechAfrica Platform
          </text>
          <text x="610" y="214" textAnchor="middle" fontSize="13" fill="rgba(15,30,22,0.7)">
            Request routing • Status updates • Coordination
          </text>
          <text x="610" y="245" textAnchor="middle" fontSize="12" fill="rgba(15,30,22,0.55)">
            Offline-first • Notifications • Location-aware operations
          </text>

          <g>
            <rect x="510" y="260" width="200" height="28" rx="14" fill="rgba(244,176,0,0.16)" />
            <text x="610" y="279" textAnchor="middle" fontSize="12" fill="rgb(15,30,22)" fontWeight="700">
              USSD access expands reach
            </text>
          </g>
        </g>

        {/* Agents node */}
        <g>
          <rect x="780" y="155" width="120" height="110" rx="26" fill="rgba(11,61,46,0.08)" stroke="rgba(11,61,46,0.25)" />
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
      </svg>
    </div>
  );
}

