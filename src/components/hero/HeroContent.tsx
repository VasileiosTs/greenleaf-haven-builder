import { ArrowRight } from "lucide-react";

interface HeroContentProps {
  onExploreClick: () => void;
}

export const HeroContent = ({ onExploreClick }: HeroContentProps) => {
  return (
    <div className="w-full max-w-3xl space-y-12 animate-fade-up text-center lg:text-left">            
      <h1 className="text-4xl lg:text-6xl font-bold text-sage-500 leading-tight">
        Green Spaces Made Simple
      </h1>
      
      <p className="text-sage-400 text-lg lg:text-xl leading-relaxed max-w-2xl">
        Transform your workspace with our premium plant leasing solutions. Create a healthier, 
        more productive environment with expert plant care services.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
        <button 
          onClick={onExploreClick}
          className="inline-flex items-center justify-center px-6 py-3 bg-sage-500 text-white rounded-full hover:bg-sage-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          Explore Our Services
          <ArrowRight className="ml-2 w-4 h-4" />
        </button>
      </div>
    </div>
  );
};