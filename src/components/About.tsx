import { Check, Leaf, LeafyGreen } from "lucide-react";

export const About = () => {
  const benefits = [
    "Hassle-Free Maintenance: We take care of everything from watering to replacements",
    "Flexible Plans: Choose from small, medium, and large packages to suit your needs",
    "Sustainable Solutions: Eco-friendly and cost-effective plant leasing for your business",
    "Fresh Look, Always: Regular plant refreshes to keep your space vibrant and inviting",
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 right-10 animate-fade-in opacity-30">
          <Leaf className="w-20 h-20 text-sage-200" />
        </div>
        <div className="absolute bottom-20 left-10 animate-fade-in opacity-20" style={{ animationDelay: "200ms" }}>
          <LeafyGreen className="w-24 h-24 text-sage-200" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-sage-50 opacity-20 animate-fade-in"
             style={{ animationDelay: "300ms" }} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-sage-100 text-sage-500 rounded-full">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Bringing Nature to Your Workspace
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At BloominTales, we bring nature to your workspace with our hassle-free plant leasing services. 
            Whether you're looking to enhance your office, restaurant, or commercial space, we provide 
            beautifully curated plants with professional maintenance – so you can enjoy a greener environment 
            without the effort.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-sage-50 animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="rounded-full bg-sage-300 p-2">
                <Check className="w-5 h-5 text-white" />
              </div>
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};