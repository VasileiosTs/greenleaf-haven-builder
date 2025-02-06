import { ArrowRight } from "lucide-react";
import { Building2, HeartPulse, ShoppingBag, Home, TreePine, Sprout } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

export const Hero = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  
  const benefits = [
    {
      icon: Building2,
      title: "Offices",
      description: "Boost productivity and create a calming workspace"
    },
    {
      icon: ShoppingBag,
      title: "Retail",
      description: "Enhance customer experience and store aesthetics"
    },
    {
      icon: HeartPulse,
      title: "Healthcare",
      description: "Promote healing and reduce stress levels"
    },
    {
      icon: Home,
      title: "Hotels & Airbnb",
      description: "Create welcoming and luxurious environments"
    },
    {
      icon: Sprout,
      title: "Restaurants",
      description: "Add natural ambiance to dining spaces"
    },
    {
      icon: TreePine,
      title: "Corporate",
      description: "Improve air quality and employee wellbeing"
    }
  ];

  const handleExploreClick = () => {
    const servicesSection = document.querySelector('#services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thanks for your interest!",
      description: "We'll be in touch with you shortly.",
    });
    setEmail("");
  };

  return (
    <section className="min-h-[90vh] flex flex-col justify-center bg-gradient-to-br from-sage-50 to-white relative overflow-hidden pt-32">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-8 md:space-y-10 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-sage-100/50 rounded-full text-sage-500 text-sm">
            Premium Plant Leasing Solutions
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-sage-500 leading-tight">
            Green Spaces Made Simple
          </h1>
          
          <p className="text-sage-400 text-lg md:text-xl">
            Transform your space with hassle-free, sustainable plant solutions
            tailored for offices, hotels, restaurants, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleExploreClick}
              className="inline-flex items-center px-6 py-3 bg-sage-500 text-white rounded-full hover:bg-sage-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore Our Packages
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>

            <form onSubmit={handleConsultationSubmit} className="flex-1 flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-sage-200 focus:outline-none focus:ring-2 focus:ring-sage-300"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-white text-sage-500 border border-sage-300 rounded-full hover:bg-sage-50 transition-all duration-300"
              >
                Get Free Consultation
              </button>
            </form>
          </div>
        </div>

        <div className="hidden md:block relative animate-fade-up">
          <img
            src="/lovable-uploads/7a6ee049-d995-4058-9b8f-7e42f64b0407.png"
            alt="Modern office with plants"
            className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-sage-500/20 to-transparent" />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-7xl mx-auto animate-fade-up delay-200 px-4 mt-16 mb-16">
        {benefits.map((benefit, index) => (
          <div 
            key={index}
            className="bg-white/80 backdrop-blur p-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col items-center text-center space-y-1">
              <div className="p-1.5 bg-sage-100 rounded-lg">
                <benefit.icon className="w-4 h-4 text-sage-500" />
              </div>
              <h3 className="font-semibold text-sage-500 text-sm">{benefit.title}</h3>
              <p className="text-xs text-sage-400 leading-tight">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/4 left-0 w-64 h-64 bg-sage-100/30 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sage-200/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </section>
  );
};