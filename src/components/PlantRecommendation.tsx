import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { supabase } from "@/integrations/supabase/client";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import type { Database } from "@/integrations/supabase/types";

type Plant = Database['public']['Tables']['plants']['Row'];
type PlantRecommendation = Database['public']['Tables']['plant_recommendations']['Row'];

export const PlantRecommendation = () => {
  const [officeSize, setOfficeSize] = useState<string>("");
  const [lighting, setLighting] = useState<string>("");
  const [maintenance, setMaintenance] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<Plant[]>([]);
  const { toast } = useToast();

  const handleGetRecommendations = async () => {
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

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <Select onValueChange={setOfficeSize}>
          <SelectTrigger>
            <SelectValue placeholder="Office Size" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Small">Small</SelectItem>
            <SelectItem value="Medium">Medium</SelectItem>
            <SelectItem value="Large">Large</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setLighting}>
          <SelectTrigger>
            <SelectValue placeholder="Lighting Conditions" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Low">Low Light</SelectItem>
            <SelectItem value="Medium">Medium Light</SelectItem>
            <SelectItem value="Bright">Bright Light</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setMaintenance}>
          <SelectTrigger>
            <SelectValue placeholder="Maintenance Preference" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Low">Low Maintenance</SelectItem>
            <SelectItem value="Medium">Medium Maintenance</SelectItem>
            <SelectItem value="High">High Maintenance</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="text-center mb-12">
        <Button
          onClick={handleGetRecommendations}
          disabled={loading}
          className="bg-sage-500 hover:bg-sage-600"
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Get Recommendations
        </Button>
      </div>

      {recommendations.length > 0 && (
        <div className="grid md:grid-cols-3 gap-6">
          {recommendations.map((plant) => (
            <Card key={plant.id} className="overflow-hidden">
              <img
                src={plant.image_url || "/placeholder.svg"}
                alt={plant.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{plant.name}</h3>
                <p className="text-gray-600 mb-4">{plant.description}</p>
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Benefits:</h4>
                  <ul className="list-disc list-inside">
                    {plant.benefits?.map((benefit, index) => (
                      <li key={index} className="text-gray-600">
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-sage-500 hover:bg-sage-600">
                  Lease Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};