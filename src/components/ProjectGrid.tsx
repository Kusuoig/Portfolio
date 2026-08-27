import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { FaGithub } from "react-icons/fa6";
import { currentLang } from '../store/i18n';
import { translations } from '../data/translations';
import projectsDataRaw from '../data/projects.json';
import type { Project } from '../data/interface';

const projectsData = projectsDataRaw as Project[];

// 1. Array de configuraciones de color por tecnología
export const techDataMap = [
  { name: 'React', color: '#58C4DC' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Tailwind CSS', color: '#00BCFF' },
  { name: 'Node.js', color: '#5FA04E' },
  { name: 'Python', color: '#FFD43B' },
  { name: 'Next.js', color: '#FFFFFF' },
  { name: 'Astro', color: '#FF5D01' },
  { name: 'Framer Motion', color: '#CB3D3C' },
  { name: 'GSAP', color: '#0AE448' },
  { name: 'Angular', color: '#DD0031' },
  { name: 'Express', color: '#3B3B3B' },
  { name: 'MongoDB', color: '#199555' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Flask', color: '#FFFFFF' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'Flutter', color: '#59C7F8' },
  { name: 'Dart', color: '#34B9F6' },
  { name: 'Supabase', color: '#2EA979' },
  { name: 'Stripe', color: '#6860FF' }
];

export const getTechColor = (techName: string) => {
  const tech = techDataMap.find(t => t.name.toLowerCase() === techName.toLowerCase());
  return tech ? tech.color : '#888888'; // Color por defecto

};



const ProjectCard = ({ project }: { project: Project }) => {
  const lang = useStore(currentLang);
  const t = translations[lang];
  const [isDark, setIsDark] = useState(false);

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleCardClick = () => {
    window.location.href = `/project/${project.id}`;
  };

  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={handleCardClick}
      whileHover={{ scale: 1.03, y: -6 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-surface rounded-xl p-6 border border-white/5 hover:border-primary/40 transition-colors group flex flex-col h-full relative overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-primary/5"
    >
      {/* Bounce Bubble Effect */}
      <motion.div
        className="absolute ease-in-out pointer-events-none rounded-full bg-primary/30 blur-[50px] z-0"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          x: mousePosition.x - 100,
          y: mousePosition.y - 100,
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{
          type: "spring",
          bounce: 0.8,
          damping: 15,
          stiffness: 145,
          mass: 0.9
        }}
        style={{ width: 200, height: 200, left: 0, top: 0 }}
      />

      {/* Contenido (debe estar por encima de la burbuja) */}
      <div className="relative z-10 flex flex-col grow">
        {/* 2. Image / Mockup Container Preview */}
        <div className="relative mb-6 rounded-lg overflow-hidden h-44 bg-neutral-950/90 border border-white/10 flex flex-col shadow-inner">
          {project.id !== 'safe-rent-app' && (
            /* Mini PC / Browser Header solo para proyectos de escritorio (Anfitr y Cisco) */
            <div className="w-full bg-neutral-900/90 border-b border-white/10 px-3 py-1.5 flex items-center justify-between select-none shrink-0">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
              </div>
              <div className="bg-neutral-950/80 px-2 py-0.5 rounded text-[9px] font-mono text-white/50 border border-white/5 truncate max-w-[130px]">
                {project.id === 'anfitr-app' ? 'anfitr.app' : 'cisco-pkt.io'}
              </div>
              <div className="w-6" />
            </div>
          )}

          <div className="relative w-full flex-1 overflow-hidden bg-black/40">
            <img
              src={project.images?.[0]}
              alt={project.title}
              className={`w-full h-full ${project.id === 'safe-rent-app' ? 'object-contain object-center' : 'object-cover object-top'} group-hover:scale-105 transition-transform duration-500 ease-out`}
            />
            <motion.div
              className="absolute pointer-events-none inset-0 transition-opacity duration-300"
              style={{
                background: `radial-gradient(150px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(100,100,255,0.2), transparent)`,
                opacity: isHovered ? 1 : 0
              }}
            />
          </div>
        </div>

        {/* Header y Rol */}
        <motion.div layoutId={`title-${project.id}`} className="text-xl font-display text-text-main group-hover:text-primary transition-colors duration-300">
          {project.title}
        </motion.div>
        <motion.p layoutId={`role-${project.id}`} className="text-sm font-mono text-text-main/60 mt-2 mb-4">
          [{project.role}]
        </motion.p>

        {/* Descripción */}
        <motion.p layoutId={`desc-${project.id}`} className="text-text-main/80 text-sm grow line-clamp-3 leading-relaxed">
          {t[`project.${project.id}.shortDesc`] || project.shortDescription}
        </motion.p>

        {/* Tags de tecnologías con colores específicos */}
        <div className="flex flex-wrap gap-2 mt-6 z-20 pointer-events-auto">
          {project.technologies.map((tech) => {
            const color = getTechColor(tech);
            const hexToRgba = (hex: string, alpha: number) => {
              const r = parseInt(hex.slice(1, 3), 16) || 0;
              const g = parseInt(hex.slice(3, 5), 16) || 0;
              const b = parseInt(hex.slice(5, 7), 16) || 0;
              return `rgba(${r}, ${g}, ${b}, ${alpha})`;
            };

            return (
              <span
                key={tech}
                className="text-text-main text-[10px] font-semibold px-2 py-1 rounded border transition-colors"
                style={{
                  backgroundColor: isDark
                    ? hexToRgba(color, 0.3) // Fondo oscuro sutil
                    : hexToRgba(color, 0.45), // Fondo muy claro en Light mode
                  borderColor: isDark
                    ? hexToRgba(color, 0.3)
                    : hexToRgba(color, 0.7)
                }}
              >
                {tech}
              </span>
            );
          })}
        </div>

        {/* Botones de Acción */}
        <div className="flex items-center justify-end gap-4 mt-6 pt-4 border-t border-white/5">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-text-main/60 hover:text-primary transition-colors flex items-center gap-2 text-sm font-mono z-30"
          >
            <FaGithub className="w-4 h-4" />
            <span dangerouslySetInnerHTML={{ __html: t['project.repo'] || '&lt;GitHub /&gt;' }} />
          </a>

          <div
            className="bg-primary/10 group-hover:bg-primary group-hover:text-background text-primary px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-1 group-hover:translate-x-1"
          >
            {t['project.learnMore'] || 'Conocer más →'}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectGrid() {
  const lang = useStore(currentLang);
  const t = translations[lang];

  return (
    <div className="py-16">
      <h2 className="text-3xl font-display font-medium text-text-main mb-8" dangerouslySetInnerHTML={{ __html: t['projects.title'] || '<span class="text-primary font-mono mr-2">&gt;</span>Proyectos' }} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}