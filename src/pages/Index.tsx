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
    <main className="min-h-screen bg-white font-sans">
      <Hero />
      <About />
      <HowItWorks />
      <DetailedServices />
      <Services />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;