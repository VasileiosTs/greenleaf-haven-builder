import { Link } from "react-router-dom";

export const Navigation = ({ isScrolled }: { isScrolled: boolean }) => {
  return (
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
  );
};