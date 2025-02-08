
import { Building2, Store, ShoppingBag, Shop, ShoppingCart, ScanBarcode } from "lucide-react";

const services = [
  {
    icon: Store,
    title: "Plant Rentals for Retail Spaces",
    description: "Enhance your retail environment and create an inviting shopping experience with our carefully curated plant displays. Perfect for boutiques, showrooms, and retail spaces.",
    features: [
      "Custom plant arrangements for retail spaces",
      "Regular maintenance and care included",
      "Seasonal display updates available"
    ],
    cta: "Transform Your Space",
  },
  {
    icon: ShoppingBag,
    title: "Fashion & Apparel Stores",
    description: "Create an elevated shopping atmosphere that complements your brand aesthetic. Our plant designs enhance the visual appeal of your fashion retail space.",
    features: [
      "Brand-aligned plant styling",
      "Flexible rental plans",
      "Professional installation and maintenance"
    ],
    cta: "Elevate Your Store",
  },
  {
    icon: Shop,
    title: "Shopping Mall & Department Stores",
    description: "Transform large retail spaces with stunning plant installations that create memorable shopping environments and improve customer experience.",
    features: [
      "Large-scale plant installations",
      "Custom planters and displays",
      "Regular maintenance program"
    ],
    cta: "Book a Consultation",
  },
  {
    icon: Building2,
    title: "Pop-up Shops & Markets",
    description: "Make your temporary retail space stand out with eye-catching plant displays. Perfect for pop-up stores, markets, and temporary retail installations.",
    features: [
      "Short-term rental options",
      "Quick setup and removal",
      "Flexible design solutions"
    ],
    cta: "Plan Your Pop-up",
  },
  {
    icon: ShoppingCart,
    title: "Grocery & Food Retail",
    description: "Create a fresh and vibrant atmosphere in your grocery store or food retail space with our specialized plant solutions.",
    features: [
      "Food-safe plant selections",
      "Enhance produce departments",
      "Regular cleaning and maintenance"
    ],
    cta: "Fresh Up Your Space",
  },
  {
    icon: ScanBarcode,
    title: "Specialty & Concept Stores",
    description: "Stand out from the competition with unique plant designs that complement your specialty retail concept and enhance customer experience.",
    features: [
      "Concept-specific plant designs",
      "Custom installation solutions",
      "Regular maintenance included"
    ],
    cta: "Create Your Concept",
  }
];

export const DetailedServices = () => {
  return (
    <section className="py-24 px-4 bg-sage-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sage-500">
            Our Retail Solutions
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

