'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const carouselItems = [
    {
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&auto=format&fit=crop&q=60',
      title: 'Modern Living Spaces',
      description: 'Experience the perfect blend of comfort and contemporary design in our residential projects.'
    },
    {
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=60',
      title: 'Luxury Interiors',
      description: 'Transform your space into a luxurious haven with our premium interior solutions.'
    },
    {
      image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&auto=format&fit=crop&q=60',
      title: 'Smart Design Solutions',
      description: 'Innovative designs that maximize space and enhance functionality.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
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
          src={carouselItems[currentIndex].image}
          alt={carouselItems[currentIndex].title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            {carouselItems[currentIndex].title}
          </h2>
          <p className="text-lg md:text-xl text-center max-w-2xl">
            {carouselItems[currentIndex].description}
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {carouselItems.map((_, index) => (
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
