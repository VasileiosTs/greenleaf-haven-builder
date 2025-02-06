import { Building2, HeartPulse, ShoppingBag, Home, TreePine, Sprout, Leaf, LeafyGreen } from "lucide-react";
import { BenefitCard } from "./hero/BenefitCard";
import { HeroContent } from "./hero/HeroContent";
import { motion } from "framer-motion";

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
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-12 right-10"
        >
          <Leaf className="w-20 h-20 text-sage-200" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute bottom-20 left-10"
        >
          <LeafyGreen className="w-24 h-24 text-sage-200" />
        </motion.div>
        {/* New leaf patterns */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-1/4 left-1/4"
        >
          <Leaf className="w-16 h-16 text-sage-200 rotate-45" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="absolute bottom-1/3 right-1/3"
        >
          <LeafyGreen className="w-20 h-20 text-sage-200 -rotate-12" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 0.25, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="absolute top-1/3 right-20"
        >
          <Leaf className="w-12 h-12 text-sage-200 rotate-90" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-sage-50"
        />
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