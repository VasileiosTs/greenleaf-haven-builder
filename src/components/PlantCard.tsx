import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Database } from "@/integrations/supabase/types";

type Plant = Database['public']['Tables']['plants']['Row'];

export const PlantCard = ({ plant }: { plant: Plant }) => {
  return (
    <Card className="overflow-hidden">
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
  );
};