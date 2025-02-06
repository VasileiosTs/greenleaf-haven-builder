import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

export const BenefitCard = ({ icon: Icon, title, description, image }: BenefitCardProps) => {
  return (
    <div className="bg-white/80 backdrop-blur p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 min-h-[280px] flex flex-col">
      <div className="flex flex-col items-center text-center space-y-3 h-full">
        <div className="relative w-full h-32 mb-2 rounded-lg overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-1.5 bg-sage-100 rounded-lg">
          <Icon className="w-4 h-4 text-sage-500" />
        </div>
        <h3 className="font-semibold text-sm text-sage-500">{title}</h3>
        <p className="text-xs text-sage-400 leading-snug flex-grow">{description}</p>
      </div>
    </div>
  );
};