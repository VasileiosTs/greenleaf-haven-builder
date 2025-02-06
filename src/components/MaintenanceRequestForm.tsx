import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { RequestTypeSelect } from "./maintenance/RequestTypeSelect";
import { RequestDescription } from "./maintenance/RequestDescription";
import { ImageUrlInput } from "./maintenance/ImageUrlInput";

type RequestType = "Wilting" | "Pests" | "Needs Replacement" | "Other";

interface MaintenanceRequestFormProps {
  userId: string;
}

export const MaintenanceRequestForm = ({ userId }: MaintenanceRequestFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    type: "" as RequestType | "",
    description: "",
    imageUrl: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.type) {
      toast({
        title: "Error",
        description: "Please select an issue type",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);

    try {
      const { error } = await supabase.from("maintenance_requests").insert({
        user_id: userId,
        request_type: formData.type,
        description: formData.description || null,
        image_url: formData.imageUrl || null,
      });

      if (error) throw error;

      toast({
        title: "Success",
        description: "Maintenance request submitted successfully",
      });

      setFormData({
        type: "",
        description: "",
        imageUrl: "",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">Submit Maintenance Request</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <RequestTypeSelect
          value={formData.type}
          onChange={(value) => setFormData((prev) => ({ ...prev, type: value }))}
        />
        <RequestDescription
          value={formData.description}
          onChange={(value) => setFormData((prev) => ({ ...prev, description: value }))}
        />
        <ImageUrlInput
          value={formData.imageUrl}
          onChange={(value) => setFormData((prev) => ({ ...prev, imageUrl: value }))}
        />
        <Button
          type="submit"
          className="w-full bg-sage-600 hover:bg-sage-700"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Request"}
        </Button>
      </form>
    </div>
  );
};