
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface GalleryCardProps {
  title: string;
  description: string;
  images: string[];
  index: number;
}

export const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  description,
  images,
  index,
}) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md overflow-hidden animate-fade-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative w-full">
        <Carousel className="w-full" aria-label={`${title} gallery`}>
          <CarouselContent>
            {images.map((image, idx) => (
              <CarouselItem key={idx}>
                <div className="aspect-[4/3]">
                  <img
                    src={image}
                    alt={`${title} transformation image ${idx + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <CarouselPrevious className="relative" aria-label="Previous image" />
            <CarouselNext className="relative" aria-label="Next image" />
          </div>
        </Carousel>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-sage-500">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};
