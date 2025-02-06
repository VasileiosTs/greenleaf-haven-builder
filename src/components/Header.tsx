import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useLanguage } from "../contexts/LanguageContext";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";
import { HeaderActions } from "./HeaderActions";

export const Header = () => {
  const { setLanguage } = useLanguage();
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
          <Logo />
          <Navigation isScrolled={isScrolled} />
        </div>

        <div className="flex items-center space-x-6">
          <HeaderActions isScrolled={isScrolled} user={user} />
          
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