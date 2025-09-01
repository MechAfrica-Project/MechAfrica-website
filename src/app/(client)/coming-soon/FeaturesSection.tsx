import { Card, CardContent } from "@/components/ui/card";
import { Tractor, Clock, Users, Zap } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Tractor className="h-10 w-10 text-accent" />,
      title: "Equipment Access",
      desc: "Connect with tractors, planters, harvesters, and specialized farming equipment across multiple regions when you need them most.",
    },
    {
      icon: <Clock className="h-10 w-10 text-accent" />,
      title: "Real-time Matching",
      desc: "Get instant matching with available service providers, track requests in real-time, and receive weather updates for optimal timing.",
    },
    {
      icon: <Users className="h-10 w-10 text-accent" />,
      title: "Community Growth",
      desc: "Empowering rural communities across Africa by creating jobs for agents and improving agricultural productivity continent-wide.",
    },
  ];

  return (
    <section
      id="features"
      className="py-24 bg-gradient-to-b from-background to-muted/30 relative"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-accent/10 rounded-full px-6 py-2 mb-6 font-sans">
            <Zap className="h-4 w-4 text-accent" />
            <span className="text-accent font-medium text-sm tracking-wide">
              INNOVATION
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-primary mb-6">
            Bridging the Gap in
            <span className="block text-accent">Agricultural Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-sans">
            MechAfrica connects farmers with agricultural service providers
            through a comprehensive digital platform, reducing equipment
            shortages and creating opportunities across rural Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto ">
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="text-center p-8 hover:shadow-2xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:-translate-y-2"
            >
              <CardContent className="pt-8">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-sans">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
