import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 md:space-x-3">
      <div className="relative h-10 w-10 md:h-12 md:w-12">
        <img 
          src="/lovable-uploads/31c8afa9-60ab-42f5-8b16-03b34549cd19.png" 
          alt="BloominTales Logo" 
          className="h-full w-full object-contain transition-transform duration-300 hover:scale-110"
        />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-lg md:text-2xl font-bold text-sage-500 hover:text-sage-600 transition-colors">
          BloominTales
        </span>
        <span className="text-[10px] md:text-xs text-sage-400">Premium Plant Leasing</span>
      </div>
    </Link>
  );
};