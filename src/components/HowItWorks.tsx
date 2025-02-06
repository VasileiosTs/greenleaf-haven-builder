import { ClipboardList, Truck, Leaf } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "Choose Your Plan",
      description: "Select from our flexible plant leasing packages tailored to your space and needs."
    },
    {
      icon: Truck,
      title: "We Deliver & Maintain",
      description: "Our experts handle delivery, installation, and regular maintenance of your plants."
    },
    {
      icon: Leaf,
      title: "Enjoy a Greener Space",
      description: "Transform your workspace with thriving, professionally maintained plants."
    }
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-sage-100 text-sage-500 rounded-full">
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple Steps to a Greener Space
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Transform your workspace with our hassle-free plant leasing service
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-sage-50 hover:bg-sage-100/50 transition-colors animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sage-100 text-sage-500 mb-6">
                <step.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};