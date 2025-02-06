import { Building2, HeartPulse, ShoppingBag, Home, TreePine, Sprout } from "lucide-react";

export const Services = () => {
  const services = [
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
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-sage-50 p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <service.icon className="w-8 h-8 text-sage-500" />
                <h3 className="text-xl font-semibold ml-2">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
