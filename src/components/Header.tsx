import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Logo } from "./Logo";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`w-full py-4 px-6 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <Logo />
      </div>
    </motion.header>
  );
};