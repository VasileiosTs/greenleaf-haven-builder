import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";
import type { Database } from "@/integrations/supabase/types";
import { PlantRecommendationForm } from "./PlantRecommendationForm";
import { PlantCard } from "./PlantCard";

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
      const { data, error } = await supabase
        .from('plants')
        .select()
        .eq('suitable_space_size', officeSize)
        .eq('light_requirement', lighting)
        .eq('maintenance_level', maintenance)
        .limit(5);

      if (error) throw error;

      setRecommendations(data || []);
      
      // Store recommendation in database
      await supabase
        .from('plant_recommendations')
        .insert({
          office_size: officeSize,
          lighting,
          maintenance_preference: maintenance,
          recommended_plants: data?.map(plant => plant.id) || [],
        });

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
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Find Your Perfect Plants</h2>
        <p className="text-gray-600">
          Tell us about your space and we'll recommend the perfect plants for you
        </p>
      </div>

      <PlantRecommendationForm onSubmit={handleGetRecommendations} loading={loading} />

      {recommendations.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6">
          {recommendations.map((plant) => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      )}
    </div>
  );
};