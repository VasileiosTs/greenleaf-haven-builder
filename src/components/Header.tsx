import { Menu } from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { useLanguage } from "../contexts/LanguageContext";

export const Header = () => {
  const { setLanguage, t } = useLanguage();

  const handleLanguageChange = (lang: 'en' | 'el') => {
    setLanguage(lang);
  };

  return (
    <header className="w-full bg-white shadow-sm py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg" alt="BloominTales Logo" className="h-10 w-10" />
          <span className="text-xl font-bold text-sage-500">BloominTales</span>
        </div>
        
        <Menubar className="border-none">
          <MenubarMenu>
            <MenubarTrigger>Services</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Office Spaces</MenubarItem>
              <MenubarItem>Hotels & Resorts</MenubarItem>
              <MenubarItem>Restaurants</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>About</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Our Story</MenubarItem>
              <MenubarItem>Team</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Contact</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Language</MenubarTrigger>
            <MenubarContent>
              <MenubarItem onClick={() => handleLanguageChange('en')}>English</MenubarItem>
              <MenubarItem onClick={() => handleLanguageChange('el')}>Ελληνικά</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
    </header>
  );
};