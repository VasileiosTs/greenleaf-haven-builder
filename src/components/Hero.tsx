import { ArrowRight, Leaf, LeafyGreen, Flower } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top left leaf */}
        <div className="absolute top-10 left-10 animate-fade-in opacity-50">
          <Leaf className="w-16 h-16 text-sage-200" />
        </div>
        {/* Top right flower */}
        <div className="absolute top-20 right-20 animate-fade-in opacity-50" style={{ animationDelay: "200ms" }}>
          <Flower className="w-20 h-20 text-sage-300" />
        </div>
        {/* Bottom left leafy green */}
        <div className="absolute bottom-20 left-32 animate-fade-in opacity-50" style={{ animationDelay: "400ms" }}>
          <LeafyGreen className="w-24 h-24 text-sage-200" />
        </div>
        {/* Decorative shapes */}
        <div className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full bg-sage-50 opacity-30 animate-fade-in" 
             style={{ animationDelay: "100ms" }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-sage-100 opacity-20 animate-fade-in"
             style={{ animationDelay: "300ms" }} />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-sage-50/50 to-white/30 -z-10" />
      <div className="max-w-4xl mx-auto text-center animate-fade-up">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-sage-100 text-sage-500 rounded-full">
          Premium Plant Leasing Solutions
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
          Green Spaces Made Simple
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Transform your space with hassle-free, sustainable plant solutions tailored for offices, hotels, restaurants, and more.
        </p>
        <button className="inline-flex items-center px-6 py-3 bg-sage-300 text-white rounded-lg hover:bg-sage-400 transition-colors group">
          Explore Our Packages
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};