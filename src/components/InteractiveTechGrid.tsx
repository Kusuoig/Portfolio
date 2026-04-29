import { motion } from 'framer-motion';
import MagneticWrapper from './MagneticWrapper.tsx';

const techData = [
  { name: 'React',  color: '#61DAFB', icon: '⚛️' },
  { name: 'Astro',  color: '#FF5D01', icon: '🚀' },
  { name: 'Tailwind', color: '#38BDF8', icon: '🌊' },
  { name: 'TypeScript', color: '#3178C6', icon: '📘' },
  { name: 'Node.js', color: '#339933', icon: '🟩' },
  { name: 'Express', color: '#FFFFFF', icon: '🚂' },
  { name: 'MongoDB', color: '#47A248', icon: '🍃' },
  { name: 'PostgreSQL', color: '#4169E1', icon: '🐘' },
  { name: 'Figma', color: '#F24E1E', icon: '🎨' },
  { name: 'GSAP', color: '#88CE02', icon: '🟢' },
  { name: 'Framer Motion', color: '#0055FF', icon: '⚡' },
  { name: 'Git', color: '#F05032', icon: '🌿' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export default function InteractiveTechGrid() {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
    >
      {techData.map((tech) => (
        <motion.div
          key={tech.name}
          variants={itemVariants}
          className="relative group rounded-xl border border-white/5 bg-surface/50 flex flex-col items-center justify-center cursor-default transition-all duration-300 overflow-hidden"
          style={{ '--hover-color': tech.color } as React.CSSProperties}
        >
          {/* Opción B: Relleno suave con color de marca al hover */}
          <div 
            className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
            style={{ backgroundColor: tech.color }}
          ></div>
          
          <MagneticWrapper className="w-full h-full p-6 flex flex-col items-center justify-center gap-3 z-10">
            <span className="text-4xl filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110 will-change-transform drop-shadow-lg">{tech.icon}</span>
            <span className="font-mono text-sm text-text-main/60 group-hover:text-text-main transition-colors duration-300">
              {tech.name}
            </span>
          </MagneticWrapper>
        </motion.div>
      ))}
    </motion.div>
  );
}