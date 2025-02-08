
import { Building2, Home, Utensils, Building, HeartPulse, PartyPopper } from "lucide-react";

export const Services = () => {
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
      cta: "Request a Quote"
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
      cta: "Get a Free Design Consultation"
    },
    {
      icon: Utensils,
      title: "Green Touch for Restaurants & Cafés",
      description: "Create an inviting, nature-infused ambiance that enhances your guests' dining experience. Our expertly curated plant installations complement your space's style.",
      features: [
        "Indoor & outdoor seating areas",
        "Seasonal plant styling",
        "Statement green walls & centerpieces"
      ],
      cta: "Let's Make Your Space Stand Out!"
    },
    {
      icon: Building,
      title: "Plant Solutions for Hotels & Hospitality",
      description: "Enhance your hotel's lobby, suites, and common areas with beautiful, low-maintenance greenery. Our flexible rental service ensures your space remains fresh and welcoming year-round.",
      features: [
        "Luxurious plant designs for upscale appeal",
        "Full maintenance service included",
        "Scalable solutions for multi-location properties"
      ],
      cta: "Book a Consultation"
    },
    {
      icon: HeartPulse,
      title: "Healthcare Facility Plant Solutions",
      description: "Create a healing environment with carefully selected plants for hospitals, doctors' offices, and health departments. Our solutions focus on promoting wellness and maintaining strict hygiene standards.",
      features: [
        "Antimicrobial plant selections",
        "Healthcare-compliant maintenance protocols",
        "Evidence-based biophilic design"
      ],
      cta: "Schedule Healthcare Consultation"
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
      cta: "Plan Your Event"
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-sage-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-sage-600 mb-4">Our Services</h2>
          <p className="text-sage-600/80 text-lg max-w-2xl mx-auto">
            Transforming spaces with the perfect blend of nature and design
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-sage-100 hover:border-sage-200"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-sage-100 group-hover:bg-sage-200 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-sage-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-sage-800 mb-4 group-hover:text-sage-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sage-600/80 mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-sage-500 mt-1">✓</span>
                    <span className="text-sage-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 px-6 bg-sage-600 text-white rounded-xl hover:bg-sage-700 transition-colors duration-300 text-sm font-medium shadow-sm hover:shadow-md">
                {service.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
