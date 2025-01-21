import { Leaf, LeafyGreen, Flower } from "lucide-react";

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
];

export const Services = () => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-sage-100 text-sage-500 rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tailored Plant Solutions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our flexible packages designed to bring life to any space
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-100 hover:shadow-lg transition-shadow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <service.icon className="w-10 h-10 text-sage-300 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <p className="font-medium text-sage-500">{service.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};