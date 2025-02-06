import { Check, Leaf, LeafyGreen } from "lucide-react";
import { motion } from "framer-motion";

export const About = () => {
  const benefits = [
    "Hassle-Free Maintenance: We take care of everything from watering to replacements",
    "Flexible Plans: Choose from small, medium, and large packages to suit your needs",
    "Sustainable Solutions: Eco-friendly and cost-effective plant leasing for your business",
    "Fresh Look, Always: Regular plant refreshes to keep your space vibrant and inviting",
    "Environmental Impact: We help businesses meet their sustainability goals through biophilic design and carbon-reducing plant solutions, demonstrating corporate environmental responsibility",
  ];

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden" aria-labelledby="about-heading">
      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.3, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-12 right-10"
        >
          <Leaf className="w-20 h-20 text-sage-200" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.2, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute bottom-20 left-10"
        >
          <LeafyGreen className="w-24 h-24 text-sage-200" />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-sage-50"
        />
      </div>

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-sage-100 text-sage-500 rounded-full">
            About Us
          </span>
          <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6">
            Bringing Nature to Your Workspace
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            At BloominTales, we bring nature to your workspace with our hassle-free plant leasing services. 
            Whether you're looking to enhance your office, restaurant, or commercial space, we provide 
            beautifully curated plants with professional maintenance – so you can enjoy a greener environment 
            without the effort.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {benefits.slice(0, 4).map((benefit, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-sage-50 hover:bg-sage-100 transition-colors"
            >
              <div className="rounded-full bg-sage-300 p-2">
                <Check className="w-5 h-5 text-white" />
              </div>
              <p className="text-gray-700">{benefit}</p>
            </motion.div>
          ))}
        </div>
        {/* Full-width sustainability point */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex items-start gap-4 p-6 rounded-xl bg-sage-50 hover:bg-sage-100 transition-colors"
        >
          <div className="rounded-full bg-sage-300 p-2">
            <Check className="w-5 h-5 text-white" />
          </div>
          <p className="text-gray-700">{benefits[4]}</p>
        </motion.div>
      </div>
    </section>
  );
};