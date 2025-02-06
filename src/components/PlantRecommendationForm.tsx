import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface PlantRecommendationFormProps {
  onSubmit: (officeSize: string, lighting: string, maintenance: string) => void;
  loading: boolean;
}

export const PlantRecommendationForm = ({ onSubmit, loading }: PlantRecommendationFormProps) => {
  const [officeSize, setOfficeSize] = useState<string>("");
  const [lighting, setLighting] = useState<string>("");
  const [maintenance, setMaintenance] = useState<string>("");

  const handleSubmit = () => {
    onSubmit(officeSize, lighting, maintenance);
  };

  return (
    <>
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
          onClick={handleSubmit}
          disabled={loading || !officeSize || !lighting || !maintenance}
          className="bg-sage-500 hover:bg-sage-600"
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Get Recommendations
        </Button>
      </div>
    </>
  );
};