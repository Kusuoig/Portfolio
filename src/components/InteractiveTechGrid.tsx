import { motion, type Variants } from 'framer-motion';
import MagneticWrapper from './MagneticWrapper.tsx';
import { FiFigma } from "react-icons/fi";
import { TbBrandNextjs } from "react-icons/tb";
import { FaGitAlt,FaAws, FaGithub, FaNodeJs, FaReact, FaPython, FaDocker } from "react-icons/fa6";
import { ImNpm } from "react-icons/im";
import { SiAstro, SiTailwindcss, SiTypescript, SiPostgresql, SiGsap, SiNestjs } from "react-icons/si";
import { useState, useEffect } from 'react';


// 1. Helper para calcular si el texto debe ser blanco o negro dependiendo del fondo
const getContrastColor = (hexColor: string) => {
  const hex = hexColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 2), 16);
  const b = parseInt(hex.substring(4, 2), 16);
  // Fórmula YIQ para obtener el brillo percibido
  const yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000000' : '#FFFFFF';
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function InteractiveTechGrid() {
  // 2. El Estado para detectar el tema
  const [isDark, setIsDark] = useState(false);

  // 3. El Efecto que lee el HTML root
  useEffect(() => {
    const root = document.documentElement;
    
    // Función que revisa si el root tiene la clase "dark"
    const checkTheme = () => setIsDark(root.classList.contains('dark'));
    
    // Ejecutar al montar el componente
    checkTheme();

    // Escuchar si el usuario cambia el tema sin recargar la página
    const observer = new MutationObserver(checkTheme);
    observer.observe(root, { attributes: true, attributeFilter: ['class', 'data-theme'] });

    return () => observer.disconnect();
  }, []);

const techData = [
    { name: 'React/Native', color: '#58C4DC', contrast: null, icon: <FaReact /> },
    { name: 'AWS /Cloud', color: '#FF5D01', contrast: null, icon: <FaAws /> },
    { name: 'Tailwind', color: '#00BCFF', contrast: null, icon: <SiTailwindcss /> },
    { name: 'TypeScript/Js', color: '#3178C6', contrast: null, icon: <SiTypescript /> },
    { name: 'Node.js', color: '#5FA04E', contrast: null, icon: <FaNodeJs /> },
    { 
      name: 'Next.js', 
      color: isDark ? '#FFFFFF' : '#000000', 
      contrast: isDark ? '#000000' : '#FFFFFF', 
      icon: <TbBrandNextjs /> 
    },
    { name: 'PostgreSQL/SQL', color: '#356892', contrast: null, icon: <SiPostgresql /> },
    { name: 'Framer Motion', color: '#CB3D3C', contrast: null, icon: <ImNpm /> },
    { 
      name: 'Figma', 
      color: isDark ? '#FFFFFF' : '#000000', 
      contrast: isDark ? '#000000' : '#FFFFFF', 
      icon: <FiFigma /> 
    },
    { name: 'GSAP', color: '#0AE448', contrast: null, icon: <SiGsap /> },
    { name: 'Nest.js', color: '#EA284C', contrast: null, icon: <SiNestjs /> },
    { name: 'Git/Github', color: '#F05639', contrast: null, icon: <FaGitAlt /> },
  ];

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, margin: "-100px" }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
    >
      {techData.map((tech) => {
        // 2. Calculamos el color de contraste para esta tecnología específica
        const contrastColor = tech.contrast || getContrastColor(tech.color);  
        return (
          <motion.div
            key={tech.name}
            variants={itemVariants}
            className="relative group rounded-xl  border border-white/5 bg-surface/50 flex flex-col items-center justify-center cursor-pointer transition-all duration-400 overflow-hidden"
            // 3. Pasamos tanto el color base como el color de contraste a variables CSS
            style={{ 
              '--tech-color': tech.color, 
              '--contrast-color': contrastColor, 
              cursor: 'pointer'
            } as React.CSSProperties}
          >
            {/* Ripple Hover Effect */}
            <div 
              // Nota: Subí la opacidad a 100 (opacity-100) en el hover para que el color de fondo sea sólido y el contraste funcione perfectamente.
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] aspect-square rounded-full opacity-0 scale-0 group-hover:scale-120 group-hover:opacity-100 transition-all duration-800 ease-in-out pointer-events-none z-0"
              style={{ backgroundColor: 'var(--tech-color)' }}
            ></div>
            
            <MagneticWrapper className="w-full h-full p-6 flex flex-col items-center justify-center gap-3 z-10">
              
              {/* ICONO */}
              {/* Usamos las variables CSS: el color inicial es var(--tech-color), y en hover cambia a var(--contrast-color) */}
              <span className="text-4xl text-(--tech-color) group-hover:text-(--contrast-color) transition-colors duration-800 group-hover:scale-110 will-change-transform drop-shadow-lg">
                {tech.icon}
              </span>
              
              {/* TEXTO */}
              {/* Usamos la misma lógica para el texto en hover */}
              <span className="font-mono text-sm text-text-main/60 group-hover:text-(--contrast-color) hover:scale-110 transition-colors duration-800 relative z-10">
                {tech.name}
              </span>
              
            </MagneticWrapper>
          </motion.div>
        );
      })}
    </motion.div>
  );
}