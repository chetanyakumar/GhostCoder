import { motion } from 'framer-motion';
import { FiUser, FiCode, FiCpu, FiServer, FiLayers, FiCheckCircle } from 'react-icons/fi';
import { aboutBio } from '../data/portfolioData';

export default function AboutSection() {
  const coreCompetencies = [
    {
      icon: <FiCpu className="text-cyan-400 text-xl" />,
      title: 'GenAI & LLM Systems',
      description: 'Building intelligent applications, prompt engineering workflows, multi-LLM integrations (OpenAI, Gemini, Groq), and RAG retrieval pipelines.',
    },
    {
      icon: <FiServer className="text-purple-400 text-xl" />,
      title: 'Backend Engineering',
      description: 'Architecting high-performance asynchronous REST APIs in Python (FastAPI) and Node.js with database schemas in MongoDB and MySQL.',
    },
    {
      icon: <FiLayers className="text-indigo-400 text-xl" />,
      title: 'Full-Stack Development',
      description: 'Creating responsive, modern web applications with React, Tailwind CSS, and interactive UI component libraries.',
    },
  ];

  const resumeHighlights = [
    'BCA Student — GLA University (2024 - 2027)',
    'AI Engineer & Full-Stack Developer Focus',
    'Generative AI, Prompt Engineering & RAG',
    'Python, FastAPI, React, Node.js',
    'Scalable Backend Architecture & REST APIs',
    'Data-Driven Problem Solving',
  ];

  return (
    <section id="about" className="w-full max-w-[1240px] mx-auto px-4 py-20 relative z-10">
      
      {/* Title Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-left mb-12"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
          01 / ABOUT ME
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-gradient-main tracking-tight mb-4">
          Architecting AI & Modern Web Solutions
        </h2>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-[840px]">
          {aboutBio}
        </p>
      </motion.div>

      {/* Grid: 3 Core Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {coreCompetencies.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass-panel p-6 rounded-2xl flex flex-col text-left"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900/80 border border-slate-800 mb-4 shadow-[0_0_12px_rgba(6,182,212,0.15)]">
              {item.icon}
            </div>
            <h3 className="text-slate-200 font-extrabold text-base mb-2">{item.title}</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Key Focus Checklist */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel p-6 md:p-8 rounded-2xl text-left"
      >
        <h3 className="text-slate-200 font-extrabold text-lg mb-6 flex items-center gap-2">
          <FiCode className="text-cyan-400" /> Core Background & Strengths
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {resumeHighlights.map((highlight, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
              <FiCheckCircle className="text-cyan-400 shrink-0 text-base" />
              <span className="text-xs md:text-sm font-semibold text-slate-300">{highlight}</span>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}
