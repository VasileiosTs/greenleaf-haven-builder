import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type RequestType = "Wilting" | "Pests" | "Needs Replacement" | "Other";

interface RequestTypeSelectProps {
  value: RequestType | "";
  onChange: (value: RequestType) => void;
}

export const RequestTypeSelect = ({ value, onChange }: RequestTypeSelectProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Issue Type
      </label>
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select issue type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Wilting">Wilting</SelectItem>
          <SelectItem value="Pests">Pests</SelectItem>
          <SelectItem value="Needs Replacement">Needs Replacement</SelectItem>
          <SelectItem value="Other">Other</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};