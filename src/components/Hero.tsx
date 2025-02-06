import { ArrowRight } from "lucide-react";
import { Building2, HeartPulse, ShoppingBag, Home, TreePine, Sprout } from "lucide-react";

export const Hero = () => {
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

  return (
    <section className="min-h-[90vh] flex flex-col justify-center bg-gradient-to-br from-sage-50 to-white relative overflow-hidden pt-32">
      <div className="max-w-7xl mx-auto text-center px-4">
        <div className="space-y-8 md:space-y-10 animate-fade-up mb-20">
          <span className="inline-block px-4 py-2 bg-sage-100/50 rounded-full text-sage-500 text-sm">
            Premium Plant Leasing Solutions
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-sage-500 leading-tight">
            Green Spaces Made Simple
          </h1>
          
          <p className="text-sage-400 text-lg md:text-xl max-w-3xl mx-auto">
            Transform your space with hassle-free, sustainable plant solutions
            tailored for offices, hotels, restaurants, and more.
          </p>
          
          <button className="inline-flex items-center px-6 py-3 bg-sage-500 text-white rounded-full hover:bg-sage-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore Our Packages
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-6 gap-4 max-w-7xl mx-auto animate-fade-up delay-200 px-4 mb-16">
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
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-sage-100/30 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sage-200/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </section>
  );
};