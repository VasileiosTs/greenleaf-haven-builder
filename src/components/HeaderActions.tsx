import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
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
      <button className={`hover:text-sage-500 transition-colors ${
        isScrolled ? "text-sage-400" : "text-sage-400"
      }`}>
        <Search className="w-5 h-5" />
      </button>
      
      <button className={`hover:text-sage-500 transition-colors ${
        isScrolled ? "text-sage-400" : "text-sage-400"
      }`}>
        <ShoppingCart className="w-5 h-5" />
      </button>
      
      {user ? (
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
      ) : (
        <Link to="/auth">
          <Button 
            variant="outline" 
            className="text-sage-500 border-sage-500 hover:bg-sage-50"
          >
            Sign In
          </Button>
        </Link>
      )}
    </div>
  );
};