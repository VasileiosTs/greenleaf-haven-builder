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
    <section className="relative min-h-screen bg-gradient-to-br from-sage-50 to-white overflow-hidden pt-20 lg:pt-28">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8 max-w-xl mx-auto lg:mx-0">
            <span className="inline-block px-4 py-2 bg-sage-100/50 rounded-full text-sage-500 text-sm font-medium">
              Premium Plant Leasing Solutions
            </span>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-sage-500 leading-tight">
              Green Spaces Made Simple
            </h1>
            
            <p className="text-sage-400 text-lg lg:text-xl leading-relaxed">
              Transform your space with hassle-free, sustainable plant solutions
              tailored for offices, hotels, restaurants, and more.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleExploreClick}
                className="inline-flex items-center justify-center px-6 py-3 bg-sage-500 text-white rounded-full hover:bg-sage-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Our Packages
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>

              <form onSubmit={handleConsultationSubmit} className="flex-1 flex flex-col sm:flex-row gap-3">
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
                  className="px-6 py-3 bg-white text-sage-500 border border-sage-300 rounded-full hover:bg-sage-50 transition-all duration-300 whitespace-nowrap"
                >
                  Get Free Consultation
                </button>
              </form>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative aspect-[4/3] lg:aspect-square">
            <div className="relative h-full rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/lovable-uploads/7a6ee049-d995-4058-9b8f-7e42f64b0407.png"
                alt="Modern office with plants"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-500/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="mt-16 lg:mt-24">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="p-2 bg-sage-100 rounded-lg">
                    <benefit.icon className="w-5 h-5 text-sage-500" />
                  </div>
                  <h3 className="font-semibold text-sage-500">{benefit.title}</h3>
                  <p className="text-sm text-sage-400 leading-snug">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 -left-32 w-64 h-64 bg-sage-100/30 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-sage-200/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </section>
  );
};