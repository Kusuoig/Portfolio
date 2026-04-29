import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import projectsData from '../data/projects.json';

export default function ProjectGrid() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <div className="py-16">
      <h2 className="text-3xl font-display font-medium text-text-main mb-8">
        <span className="text-primary font-mono mr-2">&gt;</span>Proyectos
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <motion.div
            layoutId={`card-${project.id}`}
            key={project.id}
            onClick={() => setSelectedId(project.id)}
            className="bg-surface rounded-xl p-6 border border-white/5 hover:border-primary/30 cursor-pointer transition-colors group flex flex-col h-full"
          >
            <motion.div layoutId={`title-${project.id}`} className="text-xl font-display text-text-main group-hover:text-primary transition-colors">
              {project.title}
            </motion.div>
            <motion.p layoutId={`role-${project.id}`} className="text-sm font-mono text-text-main/60 mt-2 mb-4">
              [{project.role}]
            </motion.p>
            <motion.p layoutId={`desc-${project.id}`} className="text-text-main/80 text-sm flex-grow line-clamp-3">
              {project.shortDescription}
            </motion.p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40"
            />
            <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none p-4">
              {projectsData.filter(p => p.id === selectedId).map(project => (
                <motion.div
                  key="modal"
                  layoutId={`card-${project.id}`}
                  className="bg-surface w-full max-w-2xl rounded-2xl p-8 border border-primary/20 pointer-events-auto overflow-y-auto max-h-[90vh] shadow-2xl"
                >
                  <div className="flex justify-between items-start mb-6">
                    <motion.h3 layoutId={`title-${project.id}`} className="text-3xl font-display text-primary">
                      {project.title}
                    </motion.h3>
                    <button 
                      onClick={() => setSelectedId(null)}
                      className="text-text-main/50 hover:text-text-main p-2"
                    >
                      &#x2715;
                    </button>
                  </div>
                  
                  <motion.div layoutId={`role-${project.id}`} className="font-mono text-secondary text-sm mb-6 inline-block bg-secondary/10 px-3 py-1 rounded">
                    Rol: {project.role}
                  </motion.div>
                  
                  <motion.p layoutId={`desc-${project.id}`} className="text-text-main/90 mb-6 leading-relaxed">
                    {project.fullDescription}
                  </motion.p>

                  {project.technicalHighlights && (
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="border-t border-white/10 pt-6 mt-6"
                    >
                      <h4 className="text-lg font-display text-text-main mb-4 font-bold flex items-center gap-2">
                        <span className="text-primary opacity-70">{"{"}</span> Technical Breakdown <span className="text-primary opacity-70">{"}"}</span>
                      </h4>
                      <ul className="space-y-3">
                        {project.technicalHighlights.map((highlight, idx) => (
                          <li key={idx} className="flex font-mono text-sm text-text-main/80">
                            <span className="text-secondary mr-3 mt-[2px]">&gt;&gt;</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}