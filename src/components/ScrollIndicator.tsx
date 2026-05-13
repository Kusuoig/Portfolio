import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { currentLang } from '../store/i18n';
import { translations } from '../data/translations';

// Definimos las secciones incluyendo un icono en formato SVG para cada una
const sections = [
  { 
    id: 'hero', 
    i18nKey: 'nav.hero',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
  },
  { 
    id: 'sobre-mi', 
    i18nKey: 'nav.about',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
  },
  { 
    id: 'proyectos', 
    i18nKey: 'nav.projects',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
  },
  { 
    id: 'stack', 
    i18nKey: 'nav.stack',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>
  },
  { 
    id: 'contacto', 
    i18nKey: 'nav.contact',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
  },
];

export default function ScrollIndicator() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  
  const lang = useStore(currentLang);

  useEffect(() => {
let scrollTimeout: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
      setIsScrolling(true);

      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);

      let current = 'hero';
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
      {(isVisible && (isScrolling || isHovered)) && (
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col items-center justify-center gap-6 bg-surface/80 backdrop-blur-md p-3 rounded-full border border-white/5 py-6 shadow-2xl">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              // Verificamos si este icono en particular está siendo "hovered"
              const isItemHovered = hoveredSection === section.id;

              return (
                <div 
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  onMouseEnter={() => setHoveredSection(section.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                  className="relative cursor-pointer flex justify-center items-center"
                  aria-label={`Ir a ${translations[lang][section.i18nKey as keyof typeof translations['en']]}`}
                >
                  {/* Icono con cambio de color y efecto sutil si está activo */}
                  <div 
                    className={`transition-all duration-300 ${
                      isActive 
                        ? 'text-primary drop-shadow-[0_0_8px_rgba(245,158,11,0.6)] scale-110' 
                        : 'text-text-main/40 hover:text-primary/70 hover:scale-105'
                    }`}
                  >
                    {section.icon}
                  </div>

                  {/* Tarjetita de descripción (Tooltip) */}
                  <AnimatePresence>
                    {isItemHovered && (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.2 }}
                        // Aumentamos "left-12" para que no se superponga con el icono
                        className="absolute left-12 font-mono text-[12px] text-text-main/90 whitespace-nowrap bg-surface/95 px-3 py-1.5 rounded-md border border-white/10 shadow-lg"
                      >
                        {translations[lang][section.i18nKey as keyof typeof translations['en']]}
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