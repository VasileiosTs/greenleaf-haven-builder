import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { DetailedServices } from "@/components/DetailedServices";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <DetailedServices />
        <Services />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;