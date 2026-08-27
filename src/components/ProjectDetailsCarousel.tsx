import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
  images: string[];
  projectId?: string;
}

export default function ProjectDetailsCarousel({ images, projectId }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;

    // Auto-play feature: 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return null;

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const currentImg = images[currentIndex] || '';
  const isMobile = currentImg.includes('saferent') || projectId === 'safe-rent-app';

  const getDomain = () => {
    if (currentImg.includes('anfitr') || projectId === 'anfitr-app') {
      return 'https://anfitr.app/explore';
    }
    if (currentImg.includes('cisco') || projectId === 'cisco-pkt-designer') {
      return 'https://cisco-pkt.io/topology';
    }
    return 'https://app.local';
  };

  return (
    <div className="relative w-full mx-auto aspect-video md:aspect-[21/10] bg-surface/40 rounded-3xl overflow-hidden border border-white/10 group shadow-2xl flex items-center justify-center p-4 md:p-8">
      {/* Fondo desenfocado ambiental */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full bg-cover bg-center blur-3xl scale-125 pointer-events-none"
          style={{ backgroundImage: `url(${currentImg})` }}
        />
      </AnimatePresence>

      {/* Contenedor de la Imagen con Marco Mockup */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full h-full flex items-center justify-center"
        >
          {isMobile ? (
            /* Captura nativa de Safe Rent (sin marcos extra porque ya viene de emulador) */
            <img
              src={currentImg}
              alt={`Project screen ${currentIndex + 1}`}
              className="h-full max-h-[500px] w-auto object-contain drop-shadow-2xl rounded-2xl"
            />
          ) : (
            /* Mockup PC Desktop / Browser Window para Anfitr y Cisco */
            <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden border border-white/20 bg-neutral-950/90 shadow-2xl shadow-black/90 flex flex-col backdrop-blur-md">
              {/* Barra superior de PC / Navegador */}
              <div className="flex items-center justify-between px-4 py-2.5 bg-neutral-900/90 border-b border-white/10 select-none">
                {/* Botones de control de ventana (Traffic lights) */}
                <div className="flex items-center gap-2 w-16">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]/60 shadow-sm inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]/60 shadow-sm inline-block" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]/60 shadow-sm inline-block" />
                </div>

                {/* Barra de dirección URL */}
                <div className="flex-1 max-w-sm mx-auto">
                  <div className="w-full bg-neutral-950/90 border border-white/10 rounded-md py-1 px-3 flex items-center justify-center gap-2 text-[11px] font-mono text-text-main/70 shadow-inner">
                    <svg className="w-3.5 h-3.5 text-emerald-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="truncate">{getDomain()}</span>
                  </div>
                </div>

                {/* Controles de ventana derecha */}
                <div className="w-16 flex justify-end gap-2 text-white/30 text-xs font-mono">
                  <span>—</span>
                  <span>□</span>
                  <span>✕</span>
                </div>
              </div>

              {/* Área de la captura de pantalla */}
              <div className="relative w-full aspect-[16/9] md:aspect-[2.1/1] overflow-hidden bg-black/60">
                <img
                  src={currentImg}
                  alt={`Project desktop view ${currentIndex + 1}`}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Botones de navegación Anterior / Siguiente */}
      <div className="absolute inset-0 flex items-center justify-between p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
        <button
          onClick={handlePrev}
          className="pointer-events-auto bg-black/50 hover:bg-black/80 text-white/90 p-3 rounded-full backdrop-blur-md border border-white/20 transition-all hover:scale-110 shadow-lg"
          aria-label="Previous image"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto bg-black/50 hover:bg-black/80 text-white/90 p-3 rounded-full backdrop-blur-md border border-white/20 transition-all hover:scale-110 shadow-lg"
          aria-label="Next image"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>

      {/* Indicadores de diapositivas */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2.5 z-30 pointer-events-none">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`pointer-events-auto h-2 rounded-full transition-all duration-300 ${idx === currentIndex
              ? 'bg-primary w-6 opacity-100 shadow-[0_0_10px_rgba(255,255,255,0.6)]'
              : 'bg-white/40 w-2 hover:opacity-100 hover:scale-110'
              }`}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}