import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";
import { PlantRecommendationForm } from "./PlantRecommendationForm";
import { PlantCard } from "./PlantCard";
import { motion } from "framer-motion";

type Plant = Database['public']['Tables']['plants']['Row'];

export const PlantRecommendation = () => {
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<Plant[]>([]);
  const { toast } = useToast();

  const handleGetRecommendations = async (officeSize: string, lighting: string, maintenance: string) => {
    if (!officeSize || !lighting || !maintenance) {
      toast({
        title: "Missing information",
        description: "Please fill in all fields to get recommendations.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      console.log("Fetching recommendations with:", { officeSize, lighting, maintenance });
      
      const { data, error } = await supabase
        .from('plants')
        .select('*')
        .eq('suitable_space_size', officeSize)
        .eq('light_requirement', lighting)
        .eq('maintenance_level', maintenance);

      if (error) {
        console.error("Supabase error:", error);
        throw error;
      }

      console.log("Received recommendations:", data);
      setRecommendations(data || []);
      
      if (data && data.length > 0) {
        await supabase
          .from('plant_recommendations')
          .insert({
            office_size: officeSize,
            lighting,
            maintenance_preference: maintenance,
            recommended_plants: data.map(plant => plant.id),
          });

        toast({
          title: "Success!",
          description: `Found ${data.length} plant recommendations for you.`,
        });
      } else {
        toast({
          title: "No matches found",
          description: "We couldn't find any plants matching your criteria. Try different options.",
          variant: "destructive",
        });
      }

    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "Failed to get recommendations. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 py-16 bg-gray-50"
    >
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl font-bold mb-4 text-sage-500"
        >
          Find Your Perfect Plants
        </motion.h2>
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 max-w-2xl mx-auto"
        >
          Tell us about your space and we'll recommend the perfect plants for your office
        </motion.p>
      </div>

      <PlantRecommendationForm onSubmit={handleGetRecommendations} loading={loading} />

      {recommendations.length > 0 && (
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {recommendations.map((plant, index) => (
            <motion.div
              key={plant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PlantCard plant={plant} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
};