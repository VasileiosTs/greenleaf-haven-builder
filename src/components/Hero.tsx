import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen pt-20 md:pt-24 px-4 bg-gradient-to-br from-sage-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* Main Content */}
        <div className="space-y-6 md:space-y-8 animate-fade-up">
          <span className="inline-block text-sage-500">Plant Leasing Solutions</span>
          <h1 className="text-4xl md:text-6xl font-bold text-sage-500 leading-tight">
            Green Spaces Made Simple
          </h1>
          
          <button className="inline-flex items-center px-6 py-3 bg-sage-500 text-white rounded-full hover:bg-sage-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Explore Our Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 max-w-5xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <p className="text-sage-400 text-sm md:text-base">Professional plant maintenance and care services</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <p className="text-sage-400 text-sm md:text-base">Customized plant selection for your space</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <p className="text-sage-400 text-sm md:text-base">Regular health monitoring and replacements</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all">
            <p className="text-sage-400 text-sm md:text-base">Flexible leasing terms and packages</p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-sage-100/30 rounded-full filter blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-sage-200/20 rounded-full filter blur-3xl animate-pulse delay-1000" />
    </section>
  );
};