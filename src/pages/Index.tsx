import { Hero } from "@/components/Hero";
import { DetailedServices } from "@/components/DetailedServices";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { Gallery } from "@/components/Gallery";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SubscriptionPlans } from "@/components/SubscriptionPlans";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <DetailedServices />
        <SubscriptionPlans />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;