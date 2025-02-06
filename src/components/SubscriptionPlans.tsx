import { Check } from "lucide-react";

const plans = [
  {
    name: "Small Space",
    price: "299",
    description: "Perfect for small offices and retail spaces up to 46 m²",
    features: [
      "3-5 carefully selected plants",
      "Monthly maintenance visits",
      "Plant health monitoring",
      "Free replacements if needed",
      "Basic plant care consultation"
    ],
    spaceSize: "Up to 46 m²"
  },
  {
    name: "Medium Space",
    price: "599",
    description: "Ideal for medium-sized spaces up to 140 m²",
    features: [
      "8-12 curated plants",
      "Bi-weekly maintenance visits",
      "Plant health monitoring",
      "Free replacements if needed",
      "Advanced plant care consultation",
      "Seasonal rotations"
    ],
    spaceSize: "46-140 m²",
    popular: true
  },
  {
    name: "Large Space",
    price: "999",
    description: "Designed for large commercial spaces over 140 m²",
    features: [
      "15+ premium plants",
      "Weekly maintenance visits",
      "Plant health monitoring",
      "Priority replacements",
      "Expert plant care consultation",
      "Seasonal rotations",
      "Custom plant installations"
    ],
    spaceSize: "140+ m²"
  }
];

export const SubscriptionPlans = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sage-500">
            Subscription Plans
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plant subscription plan for your space. All plans include professional maintenance and care.
          </p>
          <div className="w-24 h-1 bg-sage-300 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-sage-50 border-2 border-sage-300"
                  : "bg-white border border-gray-200"
              } shadow-lg animate-fade-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-sage-500 text-white px-4 py-1 rounded-full text-sm">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-sage-500 mb-2">
                  {plan.name}
                </h3>
                <div className="text-gray-600 mb-4">{plan.spaceSize}</div>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-sage-500">
                    €{plan.price}
                  </span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <p className="text-gray-600 mt-4">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-sage-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 px-6 rounded-lg bg-sage-500 text-white hover:bg-sage-600 transition-colors duration-200">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};