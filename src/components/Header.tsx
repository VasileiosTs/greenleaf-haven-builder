import { Menu, Search, ShoppingCart } from "lucide-react";
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
    <header className="w-full bg-sage-500 text-white py-4 px-6 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <img src="/placeholder.svg" alt="BloominTales Logo" className="h-8 w-8" />
            <span className="text-xl font-bold">BloominTales</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#plants" className="hover:text-sage-100 transition-colors">Plants</a>
            <a href="#accessories" className="hover:text-sage-100 transition-colors">Accessories</a>
            <a href="#community" className="hover:text-sage-100 transition-colors">Community</a>
            <a href="#shop" className="hover:text-sage-100 transition-colors">Shop</a>
          </nav>
        </div>

        <div className="flex items-center space-x-6">
          <button className="hover:text-sage-100 transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="hover:text-sage-100 transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
          
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