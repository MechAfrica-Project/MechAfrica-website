import Image from "next/image";

export default function StatsSection() {
  const stats: [string, string][] = [
    ["1 million+", "Farmers Expected"],
    ["1000+", "Service Providers"],
    ["100+", "Trained Agents"],
    ["Nov", "2025 Launch"],
  ];

  return (
    <section className="relative py-20 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/assets/pngs/MechAfrica.png"
          alt="MechAfrica logo"
          fill
          className="object-cover opacity-5"
          priority
        />
      </div>
      <div className="relative z-10 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Mechanizing Africa Agriculture
          </h2>
          <p className="text-primary-foreground/80 text-lg font-sans">
            Our ambitious goals for continental impact
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map(([stat, label], idx) => (
            <div key={idx} className="group">
              <div className="text-4xl md:text-6xl font-serif font-bold text-accent mb-3 group-hover:scale-110 transition-transform">
                {stat}
              </div>
              <div className="text-primary-foreground/80 font-medium font-sans">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
