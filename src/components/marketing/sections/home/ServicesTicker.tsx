import { siteConfig } from "@/content/site-config";

const items = [
  "Ploughing",
  "Harrowing",
  "Ripping",
  "Planting",
  "Spraying",
  "Fertilization",
  "Drone services",
  "Harvesting",
  "Threshing",
  "Bagging",
  "Transportation",
  `USSD ${siteConfig.ussd.code}`,
];

function TickerSet() {
  return (
    <div className="flex w-1/2 items-center justify-around whitespace-nowrap text-[13px] font-semibold text-white/85 md:text-[19px]">
      {items.map((item) => (
        <span key={item} className="flex items-center">
          <span>{item}</span>
          <span className="mx-4 text-[#a7ec33] md:mx-6" aria-hidden="true">
            ·
          </span>
        </span>
      ))}
    </div>
  );
}

export function ServicesTicker() {
  return (
    <section aria-label="Services ticker" className="relative flex items-center overflow-hidden bg-primary py-4 md:py-6">
      {/* Fade masks for edges */}
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-primary to-transparent md:w-32" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-primary to-transparent md:w-32" />

      <div className="flex w-[200%] animate-marquee">
        <TickerSet />
        {/* Duplicated set for a seamless loop */}
        <TickerSet />
      </div>
    </section>
  );
}
