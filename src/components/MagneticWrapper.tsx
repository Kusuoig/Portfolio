import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function MagneticWrapper({ children, className = "" }: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Valores de movimiento para X y Y
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Físicas de resorte (spring) ultra suaves
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    
    // Coordenadas relativas al centro del elemento
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // Incrementa o reduce el float (0.3) ajustando la fuerza magnética
    x.set(middleX * 0.15);
    y.set(middleY * 0.15);
  };

  const handleMouseLeave = () => {
    // Regresa a la posición original suavemente
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.div>
  );
}