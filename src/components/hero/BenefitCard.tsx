import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export const BenefitCard = ({ icon: Icon, title, description, image }: BenefitCardProps) => {
  return (
    <div className="bg-white/80 backdrop-blur p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-2 bg-sage-100 rounded-lg">
          <Icon className="w-5 h-5 text-sage-500" />
        </div>
        <h3 className="font-semibold text-sage-500">{title}</h3>
        <p className="text-sm text-sage-400 leading-snug">{description}</p>
      </div>
    </div>
  );
};