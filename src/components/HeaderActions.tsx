import { Mail } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

export const HeaderActions = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (value: string) => {
    setLanguage(value as 'en' | 'el');
  };

  return (
    <div className="flex items-center gap-6">
      <a 
        href="mailto:info@bloomintales.com" 
        className="flex items-center space-x-2 hover:text-sage-500 transition-colors text-sage-400"
      >
        <Mail className="w-5 h-5" />
        <span className="hidden md:inline">info@bloomintales.com</span>
      </a>
      <Select value={language} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[100px]">
          <SelectValue placeholder="Language" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="el">Ελληνικά</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};