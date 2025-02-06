import React from 'react';
import { GalleryHeader } from './gallery/GalleryHeader';
import { GalleryCard } from './gallery/GalleryCard';
import { DecorativeElements } from './gallery/DecorativeElements';
import { galleries } from './gallery/galleryData';

export const Gallery = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-sage-50 to-white relative overflow-hidden">
      <DecorativeElements />
      
      <div className="max-w-6xl mx-auto">
        <GalleryHeader />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {galleries.map((gallery, index) => (
            <GalleryCard
              key={index}
              {...gallery}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};