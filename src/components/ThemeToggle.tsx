import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Sync state with HTML class
    const isDark = document.documentElement.classList.contains('dark');
    setTheme(isDark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    
    // Apply to document
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
    
    // Persist
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-surface border border-white/5 hover:border-primary/50 transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 90, scale: theme === 'dark' ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="absolute inset-0 flex items-center justify-center text-primary"
      >
        <Moon size={20} />
      </motion.div>
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'light' ? 0 : -90, scale: theme === 'light' ? 1 : 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="text-primary flex items-center justify-center p-[2px]"
      >
        <Sun size={20} />
      </motion.div>
    </button>
  );
}