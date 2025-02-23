
import { Button } from "../ui/button";
import { PlanFeature } from "./PlanFeature";
import { PlanHeader } from "./PlanHeader";
import { FloweringPackage } from "./FloweringPackage";

interface PlanCardProps {
  plan: {
    name: string;
    price: string | number;
    description: string;
    features: string[];
    spaceSize: string;
    popular?: boolean;
    extraOptions?: {
      name: string;
      price: string | number;
      description: string;
    };
  };
}

export const PlanCard = ({ plan }: PlanCardProps) => {
  return (
    <div
      className={`relative flex flex-col rounded-2xl ${
        plan.popular
          ? "bg-sage-50 border-2 border-sage-300"
          : "bg-white border border-gray-200"
      } shadow-lg animate-fade-up group hover:shadow-xl transition-all duration-300`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <span className="bg-sage-500 text-white px-6 py-1.5 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      <div className="p-8 flex flex-col h-full">
        <div className="flex-grow">
          <PlanHeader
            name={plan.name}
            spaceSize={plan.spaceSize}
            price={plan.price}
            description={plan.description}
          />

          <ul className="space-y-4 mb-8">
            {plan.features.map((feature, idx) => (
              <PlanFeature key={idx} feature={feature} />
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          {plan.extraOptions && (
            <FloweringPackage
              name={plan.extraOptions.name}
              description={plan.extraOptions.description}
              price={plan.extraOptions.price}
            />
          )}

          <Button className="w-full bg-sage-500 text-white hover:bg-sage-600 transition-colors duration-200">
            Start Your Green Office
          </Button>
        </div>
      </div>
    </div>
  );
};
