import { Building2, HeartPulse, ShoppingBag, Home, TreePine, Sprout } from "lucide-react";
import { BenefitCard } from "./hero/BenefitCard";
import { HeroContent } from "./hero/HeroContent";

export const Hero = () => {
  const benefits = [
    {
      icon: Building2,
      title: "Offices",
      description: "Boost productivity and create a calming workspace",
      image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80"
    },
    {
      icon: ShoppingBag,
      title: "Retail",
      description: "Enhance customer experience and store aesthetics",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
    },
    {
      icon: HeartPulse,
      title: "Healthcare",
      description: "Promote healing and reduce stress levels",
      image: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80"
    },
    {
      icon: Home,
      title: "Hotels & Airbnb",
      description: "Create welcoming and luxurious environments",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80"
    },
    {
      icon: Sprout,
      title: "Restaurants",
      description: "Add natural ambiance to dining spaces",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80"
    },
    {
      icon: TreePine,
      title: "Corporate",
      description: "Improve air quality and employee wellbeing",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
    }
  ];

  const handleExploreClick = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen pt-40 lg:pt-48 bg-white overflow-hidden">
      {/* Hero Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-sage-100/30 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sage-200/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-sage-50/40 rounded-full filter blur-2xl animate-pulse delay-500" />
        <div className="absolute bottom-1/3 left-1/4 w-72 h-72 bg-sage-100/20 rounded-full filter blur-2xl animate-pulse delay-700" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
          <HeroContent onExploreClick={handleExploreClick} />
        </div>

        {/* Benefits Grid */}
        <div className="mt-24 lg:mt-32 animate-fade-up">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
