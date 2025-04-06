'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  // Sample Unsplash images (you can replace these with your preferred images)
  const images = [
    'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=60',
    'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&auto=format&fit=crop&q=60',
    // 'https://images.unsplash.com/photo-1616486011813-42c4c19ba5f4?w=800&auto=format&fit=crop&q=60',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setIsZoomed(true);
      setTimeout(() => setIsZoomed(false), 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <div
        className={`absolute inset-0 transition-transform duration-1000 ${
          isZoomed ? 'scale-110' : 'scale-100'
        }`}
      >
        <Image
          src={images[currentIndex]}
          alt={`Carousel image ${currentIndex + 1}`}
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setIsZoomed(true);
              setTimeout(() => setIsZoomed(false), 1000);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};
