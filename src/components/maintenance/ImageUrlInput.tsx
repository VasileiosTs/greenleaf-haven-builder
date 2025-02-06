import { Input } from "@/components/ui/input";

interface ImageUrlInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const ImageUrlInput = ({ value, onChange }: ImageUrlInputProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700">
        Image URL (Optional)
      </label>
      <Input
        type="url"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="https://example.com/image.jpg"
        className="mt-1"
      />
    </div>
  );
};