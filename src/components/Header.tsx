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
import { motion } from "framer-motion";

export const Header = () => {
  const { setLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`w-full py-4 px-6 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/fd754747-8679-4e54-8b51-101e2ce3b4f2.png" 
              alt="BloominTales Logo" 
              className="h-10 w-10 object-contain transition-transform duration-300 hover:scale-110"
              style={{ filter: 'brightness(0) saturate(100%) invert(27%) sepia(15%) saturate(1309%) hue-rotate(89deg) brightness(97%) contrast(88%)' }}
            />
            <span className={`text-xl font-bold ${
              isScrolled ? "text-sage-500" : "text-sage-500"
            }`}>
              BloominTales
            </span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            {["Plants", "Accessories", "Community", "Shop"].map((item) => (
              <Link
                key={item}
                to={`/#${item.toLowerCase()}`}
                className={`hover:text-sage-500 transition-colors ${
                  isScrolled ? "text-sage-400" : "text-sage-400"
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>

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
          
          <Menubar className="border-none bg-transparent md:hidden">
            <MenubarMenu>
              <MenubarTrigger className={`${
                isScrolled ? "text-sage-400" : "text-sage-400"
              } hover:text-sage-500`}>
                <Menu className="w-5 h-5" />
              </MenubarTrigger>
              <MenubarContent className="bg-white/95 backdrop-blur-md">
                {["Plants", "Accessories", "Community", "Shop"].map((item) => (
                  <MenubarItem key={item} className="cursor-pointer">
                    {item}
                  </MenubarItem>
                ))}
                <MenubarItem onClick={() => handleLanguageChange('en')}>
                  English
                </MenubarItem>
                <MenubarItem onClick={() => handleLanguageChange('el')}>
                  Ελληνικά
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </motion.header>
  );
};