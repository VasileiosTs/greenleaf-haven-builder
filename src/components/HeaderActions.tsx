import { Link, useNavigate } from "react-router-dom";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

interface HeaderActionsProps {
  isScrolled: boolean;
  user: any;
}

export const HeaderActions = ({ isScrolled, user }: HeaderActionsProps) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <div className="flex items-center space-x-6">
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