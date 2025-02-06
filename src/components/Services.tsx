import { Leaf, LeafyGreen, Flower, Sparkles, CalendarDays } from "lucide-react";

const services = [
  {
    icon: Leaf,
    title: "Small Spaces",
    description: "Perfect for cafes and small offices with 3-5 carefully selected plants.",
    price: "From €50/month",
  },
  {
    icon: LeafyGreen,
    title: "Medium Spaces",
    description: "Ideal for restaurants and larger offices with 10-15 mixed-size plants.",
    price: "From €200/month",
  },
  {
    icon: Flower,
    title: "Large Spaces",
    description: "Comprehensive solutions for hotels and malls with 25+ statement plants.",
    price: "From €500/month",
  },
  {
    icon: Sparkles,
    title: "Custom Solutions",
    description: "Tailored plant arrangements and maintenance plans for unique spaces.",
    price: "Custom pricing",
  },
];

const comingSoonService = {
  icon: CalendarDays,
  title: "Event Rentals",
  description: "Transform your special occasions with our stunning plant arrangements. Perfect for weddings, corporate events, and photoshoots.",
  price: "Coming Soon",
};

export const Services = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-white to-sage-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 animate-fade-in opacity-30 hidden md:block">
          <Flower className="w-16 h-16 text-sage-300" />
        </div>
        <div className="absolute bottom-32 right-16 animate-fade-in opacity-20 hidden md:block" style={{ animationDelay: "200ms" }}>
          <LeafyGreen className="w-20 h-20 text-sage-200" />
        </div>
        <div className="absolute top-1/4 right-1/3 w-32 h-32 rounded-full bg-sage-50 opacity-20 animate-fade-in hidden md:block"
             style={{ animationDelay: "300ms" }} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1.5 mb-4 md:mb-6 text-sm font-medium bg-sage-100 text-sage-500 rounded-full">
            Our Services
          </span>
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            Tailored Plant Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Choose from our flexible packages designed to bring life to any space
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-4 md:p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-sage-100 hover:shadow-xl transition-all duration-300 animate-fade-up transform hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <service.icon className="w-8 md:w-10 h-8 md:h-10 text-sage-300 mb-4" />
              <h3 className="text-lg md:text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4 text-sm md:text-base">{service.description}</p>
              <p className="font-medium text-sage-500">{service.price}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 md:mt-8 max-w-4xl mx-auto">
          <div 
            className="p-6 md:p-8 rounded-xl bg-gradient-to-br from-sage-50 to-white border border-sage-100 hover:shadow-xl transition-all duration-300 animate-fade-up w-full transform hover:-translate-y-1"
            style={{ animationDelay: "500ms" }}
          >
            <comingSoonService.icon className="w-10 md:w-12 h-10 md:h-12 text-sage-300 mb-4 mx-auto" />
            <h3 className="text-xl md:text-2xl font-semibold mb-3 text-center">{comingSoonService.title}</h3>
            <p className="text-gray-600 mb-4 text-center max-w-2xl mx-auto text-sm md:text-base">{comingSoonService.description}</p>
            <p className="font-medium text-sage-500 text-center">{comingSoonService.price}</p>
          </div>
        </div>
      </div>
    </section>
  );
};