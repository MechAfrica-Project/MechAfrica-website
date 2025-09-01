import EmailSignup from "../../coming-soon/EmailSignUp";
import FeaturesSection from "../../coming-soon/FeaturesSection";
import HeroSection from "../../coming-soon/HeroSection";
import StatsSection from "../../coming-soon/StatsSection";

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <StatsSection />
      <EmailSignup />
    </div>
  )
}
