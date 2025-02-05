import { ArrowRight, Leaf, LeafyGreen, Flower } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat -z-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        }}
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] -z-10" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 animate-fade-in opacity-50">
          <Leaf className="w-16 h-16 text-sage-100" />
        </div>
        <div className="absolute top-20 right-20 animate-fade-in opacity-50" style={{ animationDelay: "200ms" }}>
          <Flower className="w-20 h-20 text-sage-100" />
        </div>
        <div className="absolute bottom-20 left-32 animate-fade-in opacity-50" style={{ animationDelay: "400ms" }}>
          <LeafyGreen className="w-24 h-24 text-sage-100" />
        </div>
        <div className="absolute top-1/4 left-1/3 w-32 h-32 rounded-full bg-sage-50 opacity-30 animate-fade-in" 
             style={{ animationDelay: "100ms" }} />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-sage-100 opacity-20 animate-fade-in"
             style={{ animationDelay: "300ms" }} />
      </div>
      
      <div className="max-w-4xl mx-auto text-center animate-fade-up relative z-10">
        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-sage-100/90 text-sage-500 rounded-full backdrop-blur-sm">
          Premium Plant Leasing Solutions
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-sage-100">
          Green Spaces Made Simple
        </h1>
        <p className="text-lg md:text-xl text-sage-200 mb-8 max-w-2xl mx-auto">
          Transform your space with hassle-free, sustainable plant solutions tailored for offices, hotels, restaurants, and more.
        </p>
        <button className="inline-flex items-center px-6 py-3 bg-sage-300 text-white rounded-lg hover:bg-sage-400 transition-colors group backdrop-blur-sm">
          Explore Our Packages
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};