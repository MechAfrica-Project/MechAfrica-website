"use client";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

export default function HeroSection() {
  const handleLearnMoreClick = () => {
    const element = document.getElementById("email-signup");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/jpgs/tractor-field.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-foreground px-4 max-w-6xl mx-auto">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-2 mb-8 font-sans">
            <Leaf className="h-4 w-4 text-accent" />
            <span className="text-accent font-medium">
              Launching November 2025
            </span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight text-gray-200">
          Mechanizing Africa
          <span className="block text-accent">Agriculture</span>
        </h1>

        <p className="text-lg md:text-xl mb-12 opacity-90 max-w-4xl mx-auto leading-relaxed text-gray-300 font-sans">
          Revolutionizing agricultural services across the continent through
          digital innovation, real-time matching, and community empowerment.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center font-sans">
          <Button className="bg-transparent hover:bg-transparent">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-6 py-2">
              <Leaf className="h-4 w-4 text-accent" />
              <span className="text-accent font-medium">
                Join the Revolution
              </span>
            </div>
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={handleLearnMoreClick} // 👈 Added
            className="border-foreground/30 cursor-pointer text-foreground hover:bg-foreground/10 px-10 py-4 text-lg font-semibold rounded-full backdrop-blur-sm bg-transparent"
          >
            Learn More
          </Button>
        </div>

        <p className="text-sm text-white opacity-75 mt-6 font-sans">
          Be part of Africa&apos;s agricultural transformation
        </p>
      </div>
    </section>
  );
}
