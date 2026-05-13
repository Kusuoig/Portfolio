import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useStore } from '@nanostores/react';
import { FaGithub } from "react-icons/fa6";
import { currentLang } from '../store/i18n';
import { translations } from '../data/translations';
import ProjectDetailsCarousel from './ProjectDetailsCarousel';
import { getTechColor } from './ProjectGrid';
import type { Project } from '../data/interface';

// Función auxiliar para colores dinámicos
const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16) || 0;
  const g = parseInt(hex.slice(3, 5), 16) || 0;
  const b = parseInt(hex.slice(5, 7), 16) || 0;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export default function ProjectDetailView({ project }: { project: Project }) {
  const lang = useStore(currentLang);
  const t = translations[lang];
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const checkTheme = () => setIsDark(root.classList.contains('dark'));
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(root, { attributes: true, attributeFilter: ['class', 'data-theme'] });
    return () => observer.disconnect();
  }, []);

  const descHtml = t[`project.${project.id}.desc`] || project.description;
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="max-w-7xl mx-auto px-6 py-12 md:py-20"
    >
      {/* Botón de Regreso */}
      <nav className="mb-12">
        <a
          href="/#projects"
          className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-surface/30 hover:bg-surface text-text-main/70 hover:text-text-main transition-all text-sm font-medium backdrop-blur-sm"
        >
          <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>{t['project.back'] || 'Volver a proyectos'}</span>
        </a>
      </nav>

      {/* Header */}
      <header className="mb-16 md:mb-10">
        <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-none font-display font-bold text-text-main tracking-tighter mb-6">
          {t[`project.${project.id}.title`] || project.title}
        </h1>
        <div className="flex items-center gap-4">
          <div className="h-px bg-primary/30 w-12 md:w-10"></div>
          <p className="text-xl md:text-2xl font-mono text-primary/80">
            {t[`project.${project.id}.role`] || project.role}
          </p>
        </div>
      </header>

      {/* Carousel */}
      <div className="mb-20 md:mb-20 rounded-3xl overflow-hidden bg-surface/50 border border-white/5 shadow-2xl">
        <ProjectDetailsCarousel images={project.images} />
      </div>

      {/* Grid de Contenido */}
      <div id="project-content" className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

        {/* Lado Izquierdo: Narrativa */}
        <div className="lg:col-span-7 space-y-10">
          <h2 className="text-3xl font-display font-medium text-text-main mb-8 flex items-center gap-3">
            <span className="text-primary font-mono text-xl opacity-50">/</span> {t['project.whyAndHow'] || 'El Por Qué y el Cómo'}
          </h2>

          <div
            className="prose prose-invert prose-lg max-w-none text-text-main/70"
            dangerouslySetInnerHTML={{ __html: descHtml }}
          />
        </div>

        {/* Lado Derecho: Sidebar Sticky */}
        <aside className="lg:col-span-5 lg:sticky lg:top-32 space-y-12 bg-surface/20 p-8 rounded-3xl border border-/5">
          <div>
            <h3 className="text-xs font-mono text-text-main/40 uppercase tracking-widest mb-5 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
              {t['project.links'] || 'Links del Proyecto'}
            </h3>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between w-full bg-primary hover:bg-primary/90 text-background px-6 py-4 rounded-2xl text-base font-semibold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3">
                <FaGithub className="w-5 h-5" />
                <span dangerouslySetInnerHTML={{ __html: t['project.repo'] || 'Ver Repositorio Code' }} />
              </div>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          <hr className="border-white/5" />

          <div>
            <h3 className="text-xs font-mono text-text-main/40 uppercase tracking-widest mb-5 flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-primary/50"></div>
              {t['project.tech'] || 'Stack Tecnológico'}
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => {
                const color = getTechColor(tech);
                return (
                  <span
                    key={tech}
                    className="text-text-main text-[10px] font-semibold px-2 py-1 rounded border transition-all hover:scale-105 cursor-default"
                    style={{
                      backgroundColor: isDark ? hexToRgba(color, 0.3) : hexToRgba(color, 0.45),
                      borderColor: isDark ? hexToRgba(color, 0.3) : hexToRgba(color, 0.7)
                    }}
                  >
                    {tech}
                  </span>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </motion.article>
  );
}