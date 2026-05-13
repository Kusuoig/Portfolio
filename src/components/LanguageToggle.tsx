import { useStore } from '@nanostores/react';
import { currentLang } from '../store/i18n';
import { useEffect } from 'react';

export default function LanguageToggle() {
  const $lang = useStore(currentLang);

  const toggleLanguage = () => {
    const nextLang = $lang === 'en' ? 'es' : 'en';
    currentLang.set(nextLang);
    document.documentElement.lang = nextLang;
  };

  useEffect(() => {
    // Seteamos el attributo lang de HTML basado en el estado inicial
    document.documentElement.lang = $lang;
  }, []);

  return (
    <button 
      onClick={toggleLanguage} 
      className="font-mono text-sm group flex items-center justify-center gap-1.5 focus:outline-none transition-transform active:scale-95 cursor-none"
      aria-label="Toggle language"
    >
      <span className={`transition-colors duration-300 ${$lang === 'en' ? 'text-primary font-bold' : 'text-text-main/40 hover:text-text-main/70'}`}>EN</span>
      <span className="text-text-main/20">/</span>
      <span className={`transition-colors duration-300 ${$lang === 'es' ? 'text-primary font-bold' : 'text-text-main/40 hover:text-text-main/70'}`}>ES</span>
    </button>
  );
}
