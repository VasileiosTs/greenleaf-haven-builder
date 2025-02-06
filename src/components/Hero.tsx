import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen pt-24 px-4 bg-sage-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-bold text-sage-500 leading-tight">
            Life in<br />love with<br />plants
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <span className="text-3xl font-bold text-sage-500">280+</span>
              <p className="text-sage-400 mt-2">Shops around all over the world</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <span className="text-3xl font-bold text-sage-500">325+</span>
              <p className="text-sage-400 mt-2">Unique plant including signature items</p>
            </div>
          </div>

          <button className="inline-flex items-center px-6 py-3 bg-sage-500 text-white rounded-full hover:bg-sage-400 transition-colors group">
            Shop the store
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Content */}
        <div className="relative">
          <div className="aspect-square rounded-full bg-sage-100/50 overflow-hidden">
            <img 
              src="/lovable-uploads/21ed4423-a487-4c3e-b0f3-a8301e02d71c.png"
              alt="Featured plant"
              className="w-full h-full object-cover transform scale-90"
            />
          </div>
          
          <div className="absolute bottom-12 left-0 right-0 bg-white p-6 rounded-2xl shadow-lg mx-4 animate-fade-up">
            <h2 className="text-2xl font-bold text-sage-500 mb-3">
              Decorate your home with natural beauty
            </h2>
            <p className="text-sage-400 mb-4">
              Green plants obtain most of their energy from sunlight via photosynthesis by primary chloroplasts that are derived from endosymbiosis with cyanobacteria.
            </p>
            <button className="text-sage-500 font-medium hover:text-sage-400 transition-colors inline-flex items-center">
              Read more
              <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};