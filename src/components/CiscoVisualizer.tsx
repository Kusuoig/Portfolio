import { motion } from 'framer-motion';

export default function CiscoVisualizer() {
  // Datos mock para nodos de red
  const nodes = [
    { id: 1, x: 20, y: 50, type: 'router', label: 'Core_R1' },
    { id: 2, x: 80, y: 50, type: 'router', label: 'Core_R2' },
    { id: 3, x: 20, y: 80, type: 'switch', label: 'Dist_SW1' },
    { id: 4, x: 80, y: 80, type: 'switch', label: 'Dist_SW2' },
    { id: 5, x: 50, y: 20, type: 'wan', label: 'ISP_Link' },
  ];

  const edges = [
    { source: 1, target: 2 },
    { source: 1, target: 3 },
    { source: 2, target: 4 },
    { source: 3, target: 4 },
    { source: 1, target: 5 },
    { source: 2, target: 5 },
  ];

  const packetVariants = {
    start: { pathLength: 0, opacity: 0 },
    animate: { 
      pathLength: [0, 1],
      opacity: [0, 1, 1, 0],
      transition: { duration: 2, repeat: Infinity, ease: "linear", repeatDelay: 1 } 
    }
  };

  return (
    <div className="my-8 relative group">
      
      <div className="relative w-full aspect-[3/1] bg-surface rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
        <svg viewBox="0 0 100 100" className="w-full h-full preserve-3d absolute inset-0">
          
          {/* Conexiones / Edges */}
          {edges.map((edge, i) => {
            const s = nodes.find(n => n.id === edge.source)!;
            const t = nodes.find(n => n.id === edge.target)!;
            
            return (
              <g key={`edge-${i}`}>
                <line x1={s.x} y1={s.y} x2={t.x} y2={t.y} className="stroke-white/5" strokeWidth="0.5" />
                <motion.line
                  x1={s.x} y1={s.y} x2={t.x} y2={t.y}
                  className="stroke-primary" 
                  strokeWidth="0.5"
                  variants={packetVariants}
                  initial="start"
                  animate="animate"
                />
              </g>
            );
          })}

          {/* Nodos */}
          {nodes.map((node) => (
            <motion.g 
              key={`node-${node.id}`} 
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: node.id * 0.1, type: "spring" }}
            >
              <circle cx={node.x} cy={node.y} r="2" className="fill-background stroke-primary" strokeWidth="0.5" />
              <circle cx={node.x} cy={node.y} r="1" className="fill-secondary/50 group-hover:fill-secondary transition-colors" />
            </motion.g>
          ))}
        </svg>
      </div>
      
    </div>
  );
}