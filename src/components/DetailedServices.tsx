import { Building2, Home, UtensilsCrossed, Hotel, Stethoscope, PartyPopper } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Plant Rentals for Offices & Workspaces",
    description: "Boost productivity and employee well-being with biophilic design. Our office plant rental service brings greenery into your workspace with minimal effort on your end.",
    features: [
      "Selection of air-purifying plants",
      "Regular maintenance and replacements",
      "Custom styling to match your office aesthetic"
    ],
    cta: "Request a Quote",
  },
  {
    icon: Home,
    title: "Airbnb & Short-Term Rental Plant Styling",
    description: "Give your Airbnb or vacation rental a fresh, inviting look with professionally styled plants. First impressions matter—let your guests enjoy a cozy, green retreat.",
    features: [
      "Stylish plant arrangements that elevate your decor",
      "Hassle-free maintenance for long-term hosts",
      "Affordable rental plans for short stays"
    ],
    cta: "Get a Free Design Consultation",
  },
  {
    icon: UtensilsCrossed,
    title: "Green Touch for Restaurants & Cafés",
    description: "Create an inviting, nature-infused ambiance that enhances your guests' dining experience. Our expertly curated plant installations complement your space's style.",
    features: [
      "Indoor & outdoor seating areas",
      "Seasonal plant styling",
      "Statement green walls & centerpieces"
    ],
    cta: "Let's Make Your Space Stand Out!",
  },
  {
    icon: Hotel,
    title: "Plant Solutions for Hotels & Hospitality",
    description: "Enhance your hotel's lobby, suites, and common areas with beautiful, low-maintenance greenery. Our flexible rental service ensures your space remains fresh and welcoming year-round.",
    features: [
      "Luxurious plant designs for upscale appeal",
      "Full maintenance service included",
      "Scalable solutions for multi-location properties"
    ],
    cta: "Book a Consultation",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Facility Plant Solutions",
    description: "Create a healing environment with carefully selected plants for hospitals, doctors' offices, and health departments. Our solutions focus on promoting wellness and maintaining strict hygiene standards.",
    features: [
      "Antimicrobial plant selections",
      "Healthcare-compliant maintenance protocols",
      "Evidence-based biophilic design"
    ],
    cta: "Schedule Healthcare Consultation",
  },
  {
    icon: PartyPopper,
    title: "Event & Special Occasion Greenery",
    description: "Transform your events with stunning plant arrangements and living decor. Perfect for corporate gatherings, weddings, conferences, and special celebrations.",
    features: [
      "Custom event-specific designs",
      "Short-term and long-term rental options",
      "Professional setup and removal"
    ],
    cta: "Plan Your Event",
  }
];

export const DetailedServices = () => {
  return (
    <section className="py-24 px-4 bg-sage-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sage-500">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-sage-300 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <service.icon className="w-10 h-10 text-sage-400" />
                <h3 className="text-xl font-semibold text-sage-500">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-sage-400">✔</span>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-3 bg-sage-300 text-white rounded-lg hover:bg-sage-400 transition-colors">
                {service.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};