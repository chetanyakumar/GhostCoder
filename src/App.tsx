import { useEffect, useState, useMemo } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import ResumeSection from './components/ResumeSection';
import ContactSection from './components/ContactSection';
import { contactDetails } from './data/portfolioData';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: -100, y: -100 });
  const [loading, setLoading] = useState(true);
  const year = useMemo(() => new Date().getFullYear(), []);

  // Update cursor position for mouse spotlight glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate scroll progress percentage
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight <= 0 ? 0 : (scrollTop / docHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Page initialization loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="site-shell relative min-h-screen overflow-hidden">
      
      {/* Page Preloader */}
      {loading && (
        <div className="fixed inset-0 bg-[#030712] z-[9999] flex flex-col items-center justify-center">
          <div className="relative flex items-center justify-center">
            <div className="absolute h-16 w-16 rounded-full border-2 border-cyan-500/20 border-t-cyan-400 animate-spin" />
            <div className="h-10 w-10 rounded-xl bg-slate-900 border border-cyan-500/40 flex items-center justify-center font-black text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              CK
            </div>
          </div>
          <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500 mt-6 animate-pulse">
            Initializing AI Portfolio
          </span>
        </div>
      )}

      {/* Global Scroll Progress Bar */}
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      {/* Mouse Follow Glow Spotlight */}
      <div 
        className="cursor-glow hidden md:block" 
        style={{ 
          left: `${cursorPosition.x}px`, 
          top: `${cursorPosition.y}px` 
        }} 
      />

      {/* Interactive Particle Backdrop */}
      <ParticleBackground />

      {/* Main Portfolio Sections */}
      <div className="relative z-10">
        <Navbar />
        
        <HeroSection />
        
        <div className="section-divider" />
        <AboutSection />
        
        <div className="section-divider" />
        <SkillsSection />
        
        <div className="section-divider" />
        <ProjectsSection />
        
        <div className="section-divider" />
        <ExperienceSection />
        
        <div className="section-divider" />
        <ResumeSection />
        
        <div className="section-divider" />
        <ContactSection />

        {/* Floating WhatsApp Quick Signal */}
        <a
          href={`https://wa.me/${contactDetails.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          aria-label="Direct Signal via WhatsApp"
          className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 text-xl hover:bg-emerald-500/20 hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(16,185,129,0.3)] group/whatsapp"
        >
          <FaWhatsapp />
          <span className="absolute right-14 scale-0 group-hover/whatsapp:scale-100 bg-[#030712] border border-emerald-500/30 text-emerald-300 text-[10px] font-bold tracking-wider uppercase px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg transition-all duration-200 origin-right">
            WhatsApp signal
          </span>
        </a>

        {/* Global Footer */}
        <footer className="w-full border-t border-slate-800/80 bg-[#030712]/80 backdrop-blur-md py-8 text-center text-xs font-semibold text-slate-500 tracking-wider">
          <div className="max-w-[1240px] mx-auto px-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              © {year} CHETANYA KUMAR. All rights reserved.
            </div>
            <div className="flex justify-center gap-3 text-[11px]">
              <span className="text-cyan-400 font-bold">AI ENGINEER</span>
              <span>·</span>
              <span className="text-purple-400 font-bold">FULL-STACK DEVELOPER</span>
              <span>·</span>
              <span className="text-slate-400">MATHURA, INDIA</span>
            </div>
          </div>
        </footer>

      </div>
    </main>
  );
}
