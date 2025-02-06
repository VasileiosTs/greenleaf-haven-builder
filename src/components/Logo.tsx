import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <div className="relative h-12 w-12">
        <img 
          src="/lovable-uploads/fd754747-8679-4e54-8b51-101e2ce3b4f2.png" 
          alt="BloominTales Logo" 
          className="h-full w-full object-contain transition-transform duration-300 hover:scale-110"
          style={{ 
            filter: 'brightness(0) saturate(100%) invert(27%) sepia(15%) saturate(1309%) hue-rotate(89deg) brightness(97%) contrast(88%)'
          }}
        />
      </div>
      <div className="flex flex-col items-start">
        <span className="text-2xl font-bold text-sage-500 hover:text-sage-600 transition-colors">
          BloominTales
        </span>
        <span className="text-xs text-sage-400">Premium Plant Leasing</span>
      </div>
    </Link>
  );
};