
import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const plans = [
  {
    name: "Small Space",
    price: "50",
    description: "Perfect for small offices and retail spaces up to 50 m²",
    features: [
      "3-5 carefully selected plants",
      "Monthly maintenance visits",
      "Plant health monitoring",
      "Free replacements if needed",
      "Basic plant care consultation"
    ],
    spaceSize: "Up to 50 m²",
    extraOptions: {
      name: "Seasonal Flowering Package",
      price: "25",
      description: "Add seasonal flowers and bouquets"
    }
  },
  {
    name: "Medium Space",
    price: "100",
    description: "Ideal for medium-sized spaces between 50-100 m²",
    features: [
      "6-10 curated plants",
      "Bi-weekly maintenance visits",
      "Plant health monitoring",
      "Free replacements if needed",
      "Advanced plant care consultation",
      "Seasonal rotations"
    ],
    spaceSize: "50-100 m²",
    popular: true,
    extraOptions: {
      name: "Premium Flowering Package",
      price: "40",
      description: "Add premium seasonal flowers and custom bouquets"
    }
  },
  {
    name: "Large Space",
    price: "200",
    description: "Designed for large commercial spaces over 100 m²",
    features: [
      "10-15 premium plants",
      "Weekly maintenance visits",
      "Plant health monitoring",
      "Priority replacements",
      "Expert plant care consultation",
      "Seasonal rotations",
      "Custom plant installations"
    ],
    spaceSize: "100+ m²",
    extraOptions: {
      name: "Luxury Flowering Package",
      price: "60",
      description: "Add luxury seasonal flowers and weekly custom bouquets"
    }
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Tailored solutions for businesses with multiple locations",
    features: [
      "Unlimited premium plants",
      "Custom maintenance schedule",
      "24/7 plant health monitoring",
      "Priority replacements",
      "Dedicated account manager",
      "Custom plant rotations",
      "Multi-location management",
      "Branded plant displays"
    ],
    spaceSize: "Multiple Locations",
    extraOptions: {
      name: "Enterprise Flowering Program",
      price: "Custom",
      description: "Fully customized flowering program for all locations"
    }
  }
];

export const SubscriptionPlans = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-sage-500">
            {t('subscriptions.title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('subscriptions.subtitle')}
          </p>
          <div className="text-sage-500 font-medium mt-4">
            {t('subscriptions.annualDiscount')}
          </div>
          <div className="w-24 h-1 bg-sage-300 mx-auto mt-8"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-sage-50 border-2 border-sage-300"
                  : "bg-white border border-gray-200"
              } shadow-lg animate-fade-up group hover:shadow-xl transition-all duration-300`}
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
                  {typeof plan.price === 'number' ? (
                    <>
                      <span className="text-4xl font-bold text-sage-500">
                        €{plan.price}
                      </span>
                      <span className="text-gray-500 ml-2">/month</span>
                    </>
                  ) : (
                    <span className="text-4xl font-bold text-sage-500">
                      {plan.price}
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mt-4">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start group">
                    <Check className="w-5 h-5 text-sage-500 mt-1 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {plan.extraOptions && (
                <div className="mb-8 p-4 bg-sage-50 rounded-lg transform transition-all duration-300 hover:scale-105">
                  <h4 className="font-semibold text-sage-700 mb-2">
                    {plan.extraOptions.name}
                  </h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {plan.extraOptions.description}
                  </p>
                  <p className="text-sage-600 font-medium">
                    {plan.extraOptions.price === 'Custom' ? (
                      'Custom pricing'
                    ) : (
                      <>+€{plan.extraOptions.price}/month</>
                    )}
                  </p>
                </div>
              )}

              <Button className="w-full bg-sage-500 text-white hover:bg-sage-600 transition-colors duration-200">
                Start Your Green Office
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 md:col-span-4">
          <div className="rounded-2xl p-8 bg-white border border-gray-200 shadow-lg">
            <div className="md:flex md:items-center md:justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold text-sage-500 mb-4">
                  {t('subscriptions.plans.enterprise.title')}
                </h3>
                <p className="text-gray-600 max-w-2xl">
                  {t('subscriptions.plans.enterprise.description')}
                </p>
              </div>
              <div className="flex-shrink-0">
                <Button 
                  className="w-full md:w-auto bg-sage-500 text-white hover:bg-sage-600"
                >
                  {t('subscriptions.plans.enterprise.cta')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
