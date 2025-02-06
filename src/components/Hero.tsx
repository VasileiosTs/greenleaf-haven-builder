import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen pt-20 md:pt-24 px-4 bg-gradient-to-br from-sage-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6 md:space-y-8 animate-fade-up text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold text-sage-500 leading-tight">
            Life in<br />love with<br />plants
          </h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <span className="text-2xl md:text-3xl font-bold text-sage-500">280+</span>
              <p className="text-sage-400 mt-2 text-sm md:text-base">Shops around all over the world</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <span className="text-2xl md:text-3xl font-bold text-sage-500">325+</span>
              <p className="text-sage-400 mt-2 text-sm md:text-base">Unique plant including signature items</p>
            </div>
          </div>

          <button className="inline-flex items-center px-6 py-3 bg-sage-500 text-white rounded-full hover:bg-sage-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mx-auto md:mx-0">
            Shop the store
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Right Content */}
        <div className="relative mt-8 md:mt-0">
          <div className="aspect-square rounded-full bg-gradient-to-br from-sage-100/50 to-sage-200/30 backdrop-blur-sm overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <img 
              src="/lovable-uploads/21ed4423-a487-4c3e-b0f3-a8301e02d71c.png"
              alt="Featured plant"
              className="w-full h-full object-cover transform scale-90 hover:scale-95 transition-transform duration-500"
            />
          </div>
          
          <div className="absolute -bottom-4 md:bottom-12 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-xl mx-4 animate-fade-up">
            <h2 className="text-xl md:text-2xl font-bold text-sage-500 mb-2 md:mb-3">
              Decorate your home with natural beauty
            </h2>
            <p className="text-sage-400 mb-4 text-sm md:text-base">
              Green plants obtain most of their energy from sunlight via photosynthesis by primary chloroplasts that are derived from endosymbiosis with cyanobacteria.
            </p>
            <button className="text-sage-500 font-medium hover:text-sage-400 transition-colors inline-flex items-center text-sm md:text-base">
              Read more
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-sage-100/30 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sage-200/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </section>
  );
};