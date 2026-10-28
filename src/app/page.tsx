import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { JourneySection } from "@/components/sections/JourneySection";
import { ModulesSection } from "@/components/sections/ModulesSection";
import { SecuritySection } from "@/components/sections/SecuritySection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ModulesSection />
      <JourneySection />
      <SecuritySection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
