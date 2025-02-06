import { Building2, HeartPulse, ShoppingBag, Home, TreePine, Sprout } from "lucide-react";
import { BenefitCard } from "./BenefitCard";

const benefits = [
  {
    icon: Building2,
    title: "Offices",
    description: "Boost productivity and create a calming workspace",
    image: "/lovable-uploads/bc35aa09-eb76-497b-bc8c-5cfca26249d0.png"
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description: "Enhance customer experience and store aesthetics",
    image: "/lovable-uploads/5d193498-bb32-46b4-9182-f8ff2e7c2632.png"
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Promote healing and reduce stress levels",
    image: "/lovable-uploads/379bb504-cde2-4ab4-b8f1-b75c36c1f6af.png"
  },
  {
    icon: Home,
    title: "Hotels & Airbnb",
    description: "Create welcoming and luxurious environments",
    image: "/lovable-uploads/a2b1cc9e-3b21-4f02-9233-e296082187bb.png"
  },
  {
    icon: TreePine,
    title: "Restaurants",
    description: "Add natural ambiance to dining spaces",
    image: "/lovable-uploads/986a6649-f6ad-4f66-946e-addd5d1a5e7e.png"
  },
  {
    icon: Sprout,
    title: "Café",
    description: "Improve air quality and employee wellbeing",
    image: "/lovable-uploads/986a6649-f6ad-4f66-946e-addd5d1a5e7e.png"
  }
];

export const BenefitsGrid = () => {
  return (
    <div className="mt-20 lg:mt-24 animate-fade-up">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </div>
    </div>
  );
};