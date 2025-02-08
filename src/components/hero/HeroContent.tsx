
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { PlantRecommendationForm } from "@/components/PlantRecommendationForm";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface HeroContentProps {
  onExploreClick: () => void;
}

export const HeroContent = ({ onExploreClick }: HeroContentProps) => {
  const { t } = useLanguage();
  const [showQuiz, setShowQuiz] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleQuizSubmit = (officeSize: string, lighting: string, maintenance: string) => {
    setLoading(true);
    // Simulate processing time
    setTimeout(() => {
      setLoading(false);
      onExploreClick(); // Scroll to services section after quiz completion
    }, 1500);
  };

  return (
    <div className="w-full max-w-4xl space-y-12 animate-fade-up">            
      <div className="text-center space-y-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl lg:text-6xl font-bold text-sage-500 leading-tight"
        >
          Effortless Plant Leasing for Offices & Businesses
          <span className="block text-3xl lg:text-4xl mt-4 text-sage-400">
            Green Spaces Made Simple!
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sage-400 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          Transform your workspace into a thriving, green environment with our premium 
          plant leasing solutions. Expert care included, zero hassle guaranteed.
        </motion.p>
      </div>
      
      {!showQuiz ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button 
            onClick={() => setShowQuiz(true)}
            className="bg-sage-500 text-white hover:bg-sage-600 transition-all duration-300 transform hover:scale-105"
            size="lg"
          >
            Find Your Perfect Plant Package
          </Button>
          
          <Button 
            variant="outline"
            onClick={onExploreClick}
            className="border-sage-500 text-sage-500 hover:bg-sage-50"
            size="lg"
          >
            Get a Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <PlantRecommendationForm 
            onSubmit={handleQuizSubmit}
            loading={loading}
          />
        </motion.div>
      )}
    </div>
  );
};
