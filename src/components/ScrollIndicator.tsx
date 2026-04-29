import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const sections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre Mí' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'stack', label: 'Tech Stack' },
  { id: 'contacto', label: 'Contacto' },
];

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostrar solo después de bajar un poco (100px)
      setIsVisible(window.scrollY > 100);

      // Detectar sección activa
      let current = 'hero';
      // Iteramos en reversa para encontrar la sección más baja que haya pasado la mitad de la pantalla
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Llamar una vez para establecer estado inicial
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block" // Oculto en móbiles pequeños por espacio
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Píldora minimalista de navegación */}
          <div className="flex flex-col items-center justify-center gap-4 bg-surface/80 backdrop-blur-md p-3 rounded-full border border-white/5 py-6 shadow-2xl">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <div 
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className="relative group cursor-pointer w-4 h-4 flex justify-center items-center"
                  aria-label={`Ir a ${section.label}`}
                >
                  <div 
                    className={`rounded-full transition-all duration-300 ${
                      isActive 
                        ? 'w-2.5 h-2.5 bg-primary shadow-[0_0_8px_rgba(245,158,11,0.6)]' 
                        : 'w-1.5 h-1.5 bg-text-main/20 group-hover:bg-primary/50'
                    }`}
                  />
                  {/* Tooltip visible al hacer hover en toda la píldora */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-8 font-mono text-[10px] text-text-main/80 whitespace-nowrap bg-surface/90 px-2 py-1 rounded border border-white/5"
                      >
                        {section.label}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}