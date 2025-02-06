import React from 'react';
import { ArrowRight } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GalleryCardProps {
  title: string;
  images: string[];
  description: string;
  index: number;
}

export const GalleryCard = ({ title, images, description, index }: GalleryCardProps) => {
  return (
    <div
      className="group relative overflow-hidden rounded-2xl animate-fade-up shadow-lg hover:shadow-xl transition-all duration-300"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <Carousel className="w-full max-w-full">
        <CarouselContent>
          {images.map((image, imageIndex) => (
            <CarouselItem key={imageIndex}>
              <div className="aspect-[4/3]">
                <img
                  src={image}
                  alt={`${title} ${imageIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-0 flex items-center justify-between p-4 pointer-events-none">
          <CarouselPrevious className="relative left-0 pointer-events-auto" />
          <CarouselNext className="relative right-0 pointer-events-auto" />
        </div>
      </Carousel>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-4 md:p-6 text-white">
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-200 mb-4 line-clamp-2">{description}</p>
        <button className="inline-flex items-center text-sm font-medium group/btn">
          View Projects
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};