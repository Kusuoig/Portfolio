import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TechPillProps {
  label: string;
  tooltipText: string;
}

export default function TechPill({ label, tooltipText }: TechPillProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="font-mono text-sm border border-primary/20 text-primary px-4 py-2 rounded-full cursor-default transition-colors hover:bg-primary/10">
        {label}
      </div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[200px] bg-surface border border-white/10 text-text-main text-xs font-body p-2 rounded shadow-xl z-10"
          >
            {tooltipText}
            {/* Pequeño triángulo para el tooltip */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-surface drop-shadow-sm"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}