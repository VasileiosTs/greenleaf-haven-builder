import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen pt-20 md:pt-24 px-4 bg-gradient-to-br from-sage-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <div className="space-y-6 md:space-y-8 animate-fade-up">
          <span className="inline-block px-4 py-2 bg-sage-100/50 rounded-full text-sage-500 text-sm">
            Premium Plant Leasing Solutions
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-sage-500 leading-tight">
            Green Spaces Made Simple
          </h1>
          
          <p className="text-sage-400 text-lg md:text-xl max-w-3xl mx-auto">
            Transform your space with hassle-free, sustainable plant solutions
            tailored for offices, hotels, restaurants, and more.
          </p>
          
          <button className="inline-flex items-center px-6 py-3 bg-sage-500 text-white rounded-full hover:bg-sage-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore Our Packages
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-sage-100/30 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sage-200/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </section>
  );
};