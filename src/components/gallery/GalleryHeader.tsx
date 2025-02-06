import React from 'react';

export const GalleryHeader = () => {
  return (
    <div className="text-center mb-12 md:mb-16 animate-fade-up">
      <span className="inline-block px-4 py-1.5 mb-4 md:mb-6 text-sm font-medium bg-sage-100 text-sage-500 rounded-full">
        Gallery
      </span>
      <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
        See Transformations
      </h2>
      <p className="text-gray-600 text-sm md:text-base">
        Discover how plants has transformed spaces in vibrant green and healthy spots
      </p>
    </div>
  );
};