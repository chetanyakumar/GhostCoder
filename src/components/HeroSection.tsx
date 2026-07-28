import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaDownload, 
  FaRocket,
  FaBrain,
  FaTerminal
} from 'react-icons/fa';
import { 
  FiCode, 
  FiCpu, 
  FiDatabase, 
  FiZap,
  FiSend
} from 'react-icons/fi';
import { contactDetails, heroStats } from '../data/portfolioData';
import heroPhoto from '../assets/profile.png';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex flex-col justify-center py-12 lg:py-16 z-10 overflow-hidden">
      
      {/* Background glowing gradient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#7C3AED]/20 via-[#4F46E5]/15 to-[#06B6D4]/20 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-[#06B6D4]/15 rounded-full blur-[100px] pointer-events-none z-0" />

      {/* Main Hero Container */}
      <div className="w-full max-w-[1240px] mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center z-10 my-auto">
        
        {/* Left Column: Greeting, Title, Description & CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-purple-500/30 bg-purple-950/40 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
            <FiZap className="text-cyan-400 text-sm animate-pulse" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-cyan-300">
              AI Engineer Portfolio
            </span>
          </div>

          {/* Hero Title */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-4">
            <span className="text-slate-300 block text-2xl sm:text-3xl font-bold tracking-widest uppercase mb-1">Hi, I'm</span>
            <span className="text-gradient-main block">CHETANYA KUMAR</span>
            <span className="text-gradient-ai text-neon-glow block mt-1">
              AI Engineer & Full Stack Developer
            </span>
          </h1>

          {/* Short Description */}
          <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-[620px] mb-8 font-normal">
            I build AI-powered applications, intelligent backend systems, and scalable full-stack products using Python, FastAPI, React, and Large Language Models.
          </p>

          {/* Buttons: Download Resume, View Projects, Contact Me */}
          <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
            <motion.a 
              href={contactDetails.resumeUrl}
              download="Chetanya_Kumar_Resume.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-cyan-glow px-6 py-3.5 rounded-xl text-white font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              <FaDownload className="text-sm" /> Download Resume
            </motion.a>

            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary-glow px-6 py-3.5 rounded-xl text-white font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_0_20px_rgba(124,58,237,0.4)]"
            >
              <FaRocket className="text-sm" /> View Projects
            </motion.a>

            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-outline-glow px-6 py-3.5 rounded-xl text-slate-200 font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <FiSend className="text-sm" /> Contact Me
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-2">
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-500">
              Connect
            </span>
            <div className="h-px w-8 bg-slate-800" />
            <div className="flex items-center gap-3">
              <a
                href={contactDetails.github}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-950/20 transition-all duration-300 shadow-[0_0_10px_transparent] hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                aria-label="GitHub"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href={contactDetails.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-950/20 transition-all duration-300 shadow-[0_0_10px_transparent] hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href={`mailto:${contactDetails.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-950/20 transition-all duration-300 shadow-[0_0_10px_transparent] hover:shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                aria-label="Email"
              >
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Profile Image with AI Portal Glow */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center items-center relative py-6"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-[#7C3AED]/20 to-[#06B6D4]/20 blur-3xl opacity-80 pointer-events-none" />
          
          {/* Rotating AI Ring Overlay */}
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] flex items-center justify-center">
            {/* Outer Glowing Pulsing Border */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 pointer-events-none"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-4 rounded-full border border-purple-500/30 pointer-events-none"
            />

            {/* Glowing Accent Dots */}
            <div className="absolute top-2 left-10 w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_12px_#06B6D4]" />
            <div className="absolute bottom-4 right-12 w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_10px_#7C3AED]" />

            {/* Profile Image Container */}
            <div className="relative w-[88%] h-[88%] rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-[0_0_30px_rgba(6,182,212,0.4),0_0_60px_rgba(124,58,237,0.25),inset_0_0_20px_rgba(6,182,212,0.15)] bg-gradient-to-b from-[#0b1329] via-[#080d1e] to-[#030712] flex items-center justify-center p-2.5">
              <img 
                src={heroPhoto} 
                alt="Chetanya Kumar - AI Engineer" 
                className="w-full h-full object-contain filter contrast-[1.04] drop-shadow-[0_12px_24px_rgba(0,0,0,0.85)] transition-transform duration-500 hover:scale-105"
              />
              {/* Subtle bottom vignette gradient for seamless blending */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#030712] to-transparent opacity-60 pointer-events-none" />
            </div>

            {/* Floating Badge 1 */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-2 -right-2 glass-panel px-3.5 py-2 rounded-xl border border-cyan-500/30 flex items-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.2)]"
            >
              <FaBrain className="text-cyan-400 text-base" />
              <span className="text-xs font-extrabold text-slate-200">GenAI & LLMs</span>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 -left-2 glass-panel px-3.5 py-2 rounded-xl border border-purple-500/30 flex items-center gap-2 shadow-[0_0_15px_rgba(124,58,237,0.2)]"
            >
              <FaTerminal className="text-purple-400 text-base" />
              <span className="text-xs font-extrabold text-slate-200">FastAPI + React</span>
            </motion.div>

          </div>
        </motion.div>

      </div>

      {/* Key Metrics Strip */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full max-w-[1240px] mx-auto px-4 mt-12 z-10"
      >
        <div className="glass-panel p-6 rounded-2xl grid grid-cols-2 md:grid-cols-4 gap-6 text-left divide-y md:divide-y-0 md:divide-x divide-slate-800/60">
          {heroStats.map((stat, idx) => (
            <div key={idx} className="flex flex-col pt-4 md:pt-0 md:px-4 first:pt-0 first:px-0">
              <div className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1 flex items-center gap-2">
                {stat.icon === 'Brain' && <FiCpu />}
                {stat.icon === 'Code' && <FiCode />}
                {stat.icon === 'Database' && <FiDatabase />}
                {stat.label}
              </div>
              <div className="text-2xl font-black text-white">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-0.5">{stat.detail}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
