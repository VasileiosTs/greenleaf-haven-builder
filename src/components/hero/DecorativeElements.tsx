import { Leaf, LeafyGreen } from "lucide-react";
import { motion } from "framer-motion";

export const DecorativeElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.3, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-12 right-10"
      >
        <Leaf className="w-20 h-20 text-sage-200" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.2, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute bottom-20 left-10"
      >
        <LeafyGreen className="w-24 h-24 text-sage-200" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-1/4 left-1/4"
      >
        <Leaf className="w-16 h-16 text-sage-200 rotate-45" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-1/3 right-1/3"
      >
        <LeafyGreen className="w-20 h-20 text-sage-200 -rotate-12" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.25, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="absolute top-1/3 right-20"
      >
        <Leaf className="w-12 h-12 text-sage-200 rotate-90" />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="absolute top-1/3 right-1/4 w-40 h-40 rounded-full bg-sage-50"
      />
    </div>
  );
};