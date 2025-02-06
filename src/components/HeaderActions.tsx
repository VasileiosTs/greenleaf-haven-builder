import { Link, useNavigate } from "react-router-dom";
import { Mail, Languages } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useLanguage } from "@/contexts/LanguageContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HeaderActionsProps {
  isScrolled: boolean;
  user: any;
}

export const HeaderActions = ({ isScrolled, user }: HeaderActionsProps) => {
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div className="flex items-center space-x-6">
      <Select value={language} onValueChange={(value: 'en' | 'el') => setLanguage(value)}>
        <SelectTrigger className="w-[100px] bg-white/95 border-sage-200">
          <div className="flex items-center gap-2">
            <Languages className="h-4 w-4 text-sage-500" />
            <SelectValue>{language === 'en' ? 'English' : 'Ελληνικά'}</SelectValue>
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="en">English</SelectItem>
          <SelectItem value="el">Ελληνικά</SelectItem>
        </SelectContent>
      </Select>

      <a 
        href="mailto:info@bloomintales.com" 
        className={`flex items-center space-x-2 hover:text-sage-500 transition-colors ${
          isScrolled ? "text-sage-400" : "text-sage-400"
        }`}
      >
        <Mail className="w-5 h-5" />
        <span className="hidden md:inline">info@bloomintales.com</span>
      </a>

      {user && (
        <div className="flex items-center space-x-4">
          <Link to="/dashboard">
            <Button 
              variant="outline" 
              className="text-sage-500 border-sage-500 hover:bg-sage-50"
            >
              Dashboard
            </Button>
          </Link>
          <Button
            variant="outline"
            className="text-sage-500 border-sage-500 hover:bg-sage-50"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </div>
      )}
    </div>
  );
};