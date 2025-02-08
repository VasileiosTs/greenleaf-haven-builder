
import { useLanguage } from "@/contexts/LanguageContext";
import { PlanCard } from "./subscription/PlanCard";

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
            <PlanCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

