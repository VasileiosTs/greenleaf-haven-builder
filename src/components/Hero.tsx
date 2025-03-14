
import { HeroContent } from "./hero/HeroContent";
import { DecorativeElements } from "./hero/DecorativeElements";
import { BenefitsGrid } from "./hero/BenefitsGrid";

export const Hero = () => {
  const handleExploreClick = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] pt-32 pb-24 lg:pt-40 lg:pb-32 bg-gradient-to-br from-sage-50/50 via-white to-sage-50/30 overflow-hidden">
      <DecorativeElements />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col items-center justify-center gap-12 lg:gap-16">
          <HeroContent onExploreClick={handleExploreClick} />
        </div>
        <BenefitsGrid />
      </div>
    </section>
  );
};
