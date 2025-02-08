
import { Check } from "lucide-react";

interface PlanFeatureProps {
  feature: string;
}

export const PlanFeature = ({ feature }: PlanFeatureProps) => {
  return (
    <li className="flex items-start">
      <Check className="w-5 h-5 text-sage-500 mt-1 mr-3 flex-shrink-0" />
      <span className="text-gray-600 text-left">{feature}</span>
    </li>
  );
};

