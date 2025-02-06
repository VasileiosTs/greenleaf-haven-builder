import { Textarea } from "@/components/ui/textarea";

interface RequestDescriptionProps {
  value: string;
  onChange: (value: string) => void;
}

export const RequestDescription = ({ value, onChange }: RequestDescriptionProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Description
      </label>
      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Please describe the issue..."
        className="mt-1"
      />
    </div>
  );
};