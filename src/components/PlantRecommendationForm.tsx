
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
import { motion } from "framer-motion";

interface PlantRecommendationFormProps {
  onSubmit: (officeSize: string, lighting: string, maintenance: string) => void;
  loading: boolean;
}

export const PlantRecommendationForm = ({ onSubmit, loading }: PlantRecommendationFormProps) => {
  const [officeSize, setOfficeSize] = useState<string>("");
  const [lighting, setLighting] = useState<string>("");
  const [maintenance, setMaintenance] = useState<string>("");

  const handleSubmit = () => {
    if (officeSize && lighting && maintenance) {
      onSubmit(officeSize, lighting, maintenance);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto"
    >
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Office Size</label>
          <Select onValueChange={setOfficeSize} value={officeSize}>
            <SelectTrigger className="w-full bg-white border-gray-200">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="Small">Small Space (up to 50m²)</SelectItem>
              <SelectItem value="Medium">Medium Space (50-100m²)</SelectItem>
              <SelectItem value="Large">Large Space (100m²+)</SelectItem>
              <SelectItem value="Enterprise">Enterprise (Multiple Locations)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Lighting</label>
          <Select onValueChange={setLighting} value={lighting}>
            <SelectTrigger className="w-full bg-white border-gray-200">
              <SelectValue placeholder="Light conditions" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="Low">Low Light</SelectItem>
              <SelectItem value="Medium">Medium Light</SelectItem>
              <SelectItem value="Bright">Bright Light</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Maintenance</label>
          <Select onValueChange={setMaintenance} value={maintenance}>
            <SelectTrigger className="w-full bg-white border-gray-200">
              <SelectValue placeholder="Maintenance level" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="Low">Low Maintenance</SelectItem>
              <SelectItem value="Medium">Medium Maintenance</SelectItem>
              <SelectItem value="High">High Maintenance</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="text-center">
        <Button
          onClick={handleSubmit}
          disabled={loading || !officeSize || !lighting || !maintenance}
          className="bg-sage-500 hover:bg-sage-600 transition-all duration-200 transform hover:scale-105"
        >
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Get Recommendations
        </Button>
      </div>
    </motion.div>
  );
};
