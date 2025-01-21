import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">
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