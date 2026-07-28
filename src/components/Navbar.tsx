import { useState, useEffect } from 'react';
import { navLinks } from '../data/portfolioData';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentTime, setCurrentTime] = useState('');
  const [scrolled, setScrolled] = useState(false);

  // Real-time clock update
  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      let hours = date.getHours();
      const minutes = String(date.getMinutes()).padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      setCurrentTime(`${String(hours).padStart(2, '0')}:${minutes} ${ampm}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Track active scroll section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`nav-shell transition-all duration-300 ${scrolled ? 'scrolled' : ''}`}>
      {/* Brand Logo */}
      <a href="#home" className="flex items-center gap-2.5 group">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#7C3AED] to-[#06B6D4] text-white font-black text-sm shadow-[0_0_15px_rgba(124,58,237,0.4)] group-hover:scale-105 transition-transform duration-300">
          CK
        </div>
        <span className="hidden sm:inline-block font-bold text-xs tracking-wider text-slate-200 group-hover:text-cyan-400 transition-colors">
          CHETANYA <span className="text-purple-400">KUMAR</span>
        </span>
      </a>

      {/* Navigation Links */}
      <nav className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
              setActiveSection(link.id);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-300 ${
              activeSection === link.id
                ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.15)]'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 border border-transparent'
            }`}
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Mobile nav indicator & time */}
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
          Available for Roles
        </span>
        <span className="hidden sm:inline-block text-xs font-semibold text-slate-400 font-mono tracking-wide">
          {currentTime}
        </span>
      </div>
    </header>
  );
}
