import React from 'react';
import { Leaf, Flower } from "lucide-react";

export const DecorativeElements = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-16 right-16 animate-fade-in opacity-30 hidden md:block">
        <Leaf className="w-16 h-16 text-sage-300" />
      </div>
      <div className="absolute bottom-24 left-24 animate-fade-in opacity-20 hidden md:block" style={{ animationDelay: "200ms" }}>
        <Flower className="w-20 h-20 text-sage-300" />
      </div>
      <div 
        className="absolute top-1/3 left-1/4 w-36 h-36 rounded-full bg-sage-100/50 opacity-20 animate-fade-in hidden md:block"
        style={{ animationDelay: "300ms" }} 
      />
    </div>
  );
};