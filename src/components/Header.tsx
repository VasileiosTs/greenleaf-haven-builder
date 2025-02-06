import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Search, ShoppingCart } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useLanguage } from "../contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const { setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const handleLanguageChange = (lang: 'en' | 'el') => {
    setLanguage(lang);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <header className="w-full bg-sage-500 text-white py-4 px-6 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/placeholder.svg" alt="BloominTales Logo" className="h-8 w-8" />
            <span className="text-xl font-bold">BloominTales</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/#plants" className="hover:text-sage-100 transition-colors">Plants</Link>
            <Link to="/#accessories" className="hover:text-sage-100 transition-colors">Accessories</Link>
            <Link to="/#community" className="hover:text-sage-100 transition-colors">Community</Link>
            <Link to="/#shop" className="hover:text-sage-100 transition-colors">Shop</Link>
          </nav>
        </div>

        <div className="flex items-center space-x-6">
          <button className="hover:text-sage-100 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-sage-100 transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
          
          {user ? (
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="outline" className="text-white border-white hover:bg-sage-400">
                  Dashboard
                </Button>
              </Link>
              <Button
                variant="outline"
                className="text-white border-white hover:bg-sage-400"
                onClick={handleSignOut}
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <Link to="/auth">
              <Button variant="outline" className="text-white border-white hover:bg-sage-400">
                Sign In
              </Button>
            </Link>
          )}
          
          <Menubar className="border-none bg-transparent md:hidden">
            <MenubarMenu>
              <MenubarTrigger className="text-white hover:text-sage-100">
                <Menu className="w-5 h-5" />
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Plants</MenubarItem>
                <MenubarItem>Accessories</MenubarItem>
                <MenubarItem>Community</MenubarItem>
                <MenubarItem>Shop</MenubarItem>
                <MenubarItem onClick={() => handleLanguageChange('en')}>English</MenubarItem>
                <MenubarItem onClick={() => handleLanguageChange('el')}>Ελληνικά</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </header>
  );
};