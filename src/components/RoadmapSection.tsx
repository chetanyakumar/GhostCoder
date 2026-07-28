import { motion } from 'framer-motion';
import { FiCheckCircle, FiPlayCircle, FiLock, FiBookOpen } from 'react-icons/fi';
import { roadmap } from '../data/portfolioData';

export default function RoadmapSection() {
  const getStatusIcon = (status: 'completed' | 'ongoing' | 'upcoming') => {
    switch (status) {
      case 'completed':
        return <FiCheckCircle className="text-emerald-400 text-lg" />;
      case 'ongoing':
        return <FiPlayCircle className="text-purple-400 text-lg animate-pulse" />;
      case 'upcoming':
        return <FiLock className="text-slate-500 text-base" />;
    }
  };

  const getStatusColor = (status: 'completed' | 'ongoing' | 'upcoming') => {
    switch (status) {
      case 'completed':
        return 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5 shadow-[0_0_8px_rgba(52,211,153,0.15)]';
      case 'ongoing':
        return 'text-purple-400 border-purple-500/30 bg-purple-500/10 shadow-[0_0_10px_rgba(157,78,221,0.25)]';
      case 'upcoming':
        return 'text-slate-500 border-slate-700 bg-slate-950/20';
    }
  };

  return (
    <section id="roadmap" className="w-full max-w-[1240px] mx-auto px-4 py-20 relative z-10">
      
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-left mb-12"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-purple-400 block mb-2">05 / LEARNING TRACK</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gradient-silver tracking-tight mb-4">
          AI Engineer Learning Roadmap
        </h2>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-[700px]">
          Mapping continuous upskilling milestones to remain at the cutting edge of AI development and model deployment.
        </p>
      </motion.div>

      {/* Roadmap List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {roadmap.map((step, idx) => (
          <motion.div
            key={step.phase}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.12 }}
            className={`glass-panel p-6 rounded-2xl flex flex-col text-left hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
          >
            {/* Status indicator bar */}
            <div 
              className={`absolute top-0 left-0 right-0 h-[3px]`}
              style={{
                background: step.status === 'completed' 
                  ? '#34d399' 
                  : step.status === 'ongoing' 
                    ? '#9d4edd' 
                    : '#475569'
              }}
            />

            {/* Header */}
            <div className="flex items-center justify-between gap-3 mb-4">
              <span className="text-[10px] font-extrabold tracking-widest uppercase text-slate-500">
                {step.phase}
              </span>
              <span className={`flex items-center gap-1 px-2.5 py-0.5 rounded-full border text-[9px] font-bold uppercase ${getStatusColor(step.status)}`}>
                {getStatusIcon(step.status)}
                {step.status}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-slate-100 font-extrabold text-base mb-3 leading-snug">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
              {step.description}
            </p>

            {/* Skill tags */}
            <div className="mt-auto border-t border-purple-500/5 pt-4">
              <span className="flex items-center gap-1 text-[10px] font-bold tracking-wider text-purple-400 uppercase mb-2">
                <FiBookOpen className="text-xs" /> Skills Targeted
              </span>
              <div className="flex flex-wrap gap-1.5">
                {step.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[9px] font-bold text-slate-400 bg-slate-900 border border-slate-800 px-2 py-0.5 rounded"
                  >
                    {skill}
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
