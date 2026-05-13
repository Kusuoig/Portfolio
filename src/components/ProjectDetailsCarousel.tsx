import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  images: string[];
}

export default function ProjectDetailsCarousel({ images }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    // Auto-play feature: 4.5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full  mx-auto aspect-video md:aspect-21/10 bg-surface/30 rounded-2xl overflow-hidden border border-white/5 group shadow-sm">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Efecto de fondo desenfocado para llenar el espacio sin importar el aspect ratio */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center blur-3xl opacity-50 scale-110"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          />
          {/* Imagen principal que siempre se mostrará completa */}
          <img
            src={images[currentIndex]}
            alt={`Project view ${currentIndex + 1}`}
            className="absolute inset-0 w-full h-full object-contain p-4 md:p-8 drop-shadow-2xl"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons - Más sutiles */}
      <div className="absolute inset-0 flex items-center justify-between p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={handlePrev}
          className="bg-black/20 hover:bg-black/40 text-white/90 p-3 rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-105"
          aria-label="Previous image"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button
          onClick={handleNext}
          className="bg-black/20 hover:bg-black/40 text-white/90 p-3 rounded-full backdrop-blur-md border border-white/10 transition-all hover:scale-105"
          aria-label="Next image"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>

      {/* Indicators - Minimalistas */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex
              ? 'bg-primary w-2 scale-125 opacity-100 shadow-[0_0_8px_rgba(255,255,255,0.5)]'
              : 'bg-white w-2 opacity-40 hover:opacity-100 hover:scale-110'
              }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>

      {/* Gradiente sutil en la parte inferior para asegurar que los puntos siempre se vean bien */}
    </div>
  );
}