import { motion } from 'framer-motion';
import { FiTerminal, FiCpu, FiServer, FiCode, FiTool } from 'react-icons/fi';
import { skillCategories } from '../data/portfolioData';

const categoryIconMap: Record<string, React.ReactNode> = {
  Languages: <FiTerminal className="text-purple-400 text-lg" />,
  'AI & Machine Learning': <FiCpu className="text-cyan-400 text-lg" />,
  'Backend Development': <FiServer className="text-indigo-400 text-lg" />,
  'Frontend Development': <FiCode className="text-sky-400 text-lg" />,
  'Developer Tools': <FiTool className="text-violet-400 text-lg" />,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="w-full max-w-[1240px] mx-auto px-4 py-20 relative z-10">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-left mb-12"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
          02 / TECH STACK & EXPERTISE
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-gradient-main tracking-tight mb-4">
          Core Technical Capabilities
        </h2>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-[720px]">
          Proficiencies across Generative AI, Large Language Models, deep learning frameworks, async web backends, and modern frontend tools.
        </p>
      </motion.div>

      {/* Grid of 5 Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((group, idx) => {
          const icon = categoryIconMap[group.category] || <FiCpu className="text-cyan-400" />;
          return (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-panel p-6 rounded-2xl flex flex-col text-left relative overflow-hidden group/card"
            >
              {/* Glowing accent border line */}
              <div 
                className="absolute top-0 left-0 right-0 h-[2px] transition-all duration-300 opacity-60 group-hover/card:opacity-100"
                style={{ 
                  background: `linear-gradient(90deg, transparent, ${group.color}, transparent)`,
                  boxShadow: `0 0 12px ${group.color}`
                }} 
              />

              {/* Category Header */}
              <div className="flex items-center gap-3.5 mb-6">
                <div 
                  className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900/90 border transition-all duration-300"
                  style={{ borderColor: group.borderColor }}
                >
                  {icon}
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-100 text-base md:text-lg tracking-wide">
                    {group.category}
                  </h3>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    {group.skills.length} Competencies
                  </span>
                </div>
              </div>

              {/* Skill Pill List */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-slate-800/60 transition-all duration-200"
                  >
                    <span className="text-xs font-semibold text-slate-200">{skill.name}</span>
                    {skill.tag && (
                      <span 
                        className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border"
                        style={{
                          borderColor: group.borderColor,
                          color: group.color,
                          backgroundColor: group.glowColor,
                        }}
                      >
                        {skill.tag}
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
