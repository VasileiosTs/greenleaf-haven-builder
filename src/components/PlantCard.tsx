import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Database } from "@/integrations/supabase/types";
import { motion } from "framer-motion";

type Plant = Database['public']['Tables']['plants']['Row'];

export const PlantCard = ({ plant }: { plant: Plant }) => {
  return (
    <Card className="overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={plant.image_url || "/placeholder.svg"}
          alt={plant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-sage-500">{plant.name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{plant.description}</p>
        <div className="mb-4">
          <h4 className="font-medium mb-2 text-sage-500">Benefits:</h4>
          <ul className="space-y-1">
            {plant.benefits?.map((benefit, index) => (
              <li key={index} className="text-gray-600 text-sm flex items-center">
                <span className="w-1.5 h-1.5 rounded-full bg-sage-300 mr-2" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <Button 
          className="w-full bg-sage-500 hover:bg-sage-600 transition-all duration-200 transform hover:scale-105"
        >
          Lease Now
        </Button>
      </div>
    </Card>
  );
};