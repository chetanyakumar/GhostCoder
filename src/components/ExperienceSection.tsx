import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { experience } from '../data/portfolioData';

export default function ExperienceSection() {
  return (
    <section id="experience" className="w-full max-w-[1240px] mx-auto px-4 py-20 relative z-10">
      
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-left mb-12"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
          04 / WORK HISTORY
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-gradient-main tracking-tight mb-4">
          Professional Experience
        </h2>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-[720px]">
          Delivering production-ready full-stack software, custom API integrations, and scalable database backends.
        </p>
      </motion.div>

      {/* Timeline List */}
      <div className="relative border-l-2 border-cyan-500/20 pl-6 md:pl-10 ml-3 md:ml-6 space-y-12">
        {experience.map((item, index) => (
          <motion.div
            key={item.role + index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="relative"
          >
            {/* Glowing Pulse Node on Timeline */}
            <div className="absolute -left-[31px] md:-left-[47px] top-1.5 flex items-center justify-center h-6 w-6 rounded-full bg-slate-950 border-2 border-cyan-400 shadow-[0_0_12px_#06B6D4]">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            </div>

            {/* Experience Card */}
            <div className="glass-panel p-6 md:p-8 rounded-2xl flex flex-col text-left hover:-translate-y-1 transition-all duration-300">
              
              {/* Card Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-xl md:text-2xl font-black text-white flex items-center gap-2.5">
                    <FiBriefcase className="text-cyan-400 shrink-0 text-lg" /> {item.role}
                  </h3>
                  <span className="text-xs font-bold text-purple-400 tracking-wider uppercase mt-1 inline-block">
                    {item.company}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-3 text-slate-400 text-xs md:text-sm font-medium">
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan-500/20 bg-cyan-950/20 text-cyan-300 font-mono">
                    <FiCalendar className="text-cyan-400" /> {item.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-800 bg-slate-900/60 text-slate-300">
                    <FiMapPin className="text-purple-400" /> {item.location}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-3 text-slate-300 text-xs md:text-sm leading-relaxed mb-6">
                {item.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FiCheckCircle className="text-cyan-400 shrink-0 text-base mt-0.5" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md border border-cyan-500/20 bg-cyan-950/20 text-cyan-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
