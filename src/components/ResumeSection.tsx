import { motion } from 'framer-motion';
import { FiDownload, FiFileText, FiAward, FiBookOpen, FiCheckCircle } from 'react-icons/fi';
import { education, certifications, contactDetails } from '../data/portfolioData';

export default function ResumeSection() {
  return (
    <section id="certifications" className="w-full max-w-[1240px] mx-auto px-4 py-20 relative z-10">
      
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-left mb-12"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
          05 / CREDENTIALS & ACADEMICS
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-gradient-main tracking-tight mb-4">
          Education, Certifications & Resume
        </h2>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-[720px]">
          Academic degree coursework, verified problem-solving achievements, and downloadable ATS-tailored resume.
        </p>
      </motion.div>

      {/* Grid: Education + Certifications on Left, Resume Card on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Education & Certs */}
        <div className="lg:col-span-7 space-y-8 text-left">
          
          {/* Certifications Block */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <FiAward className="text-cyan-400 text-xl" /> Professional Certifications
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="glass-panel p-5 rounded-2xl flex flex-col justify-between border border-cyan-500/20 bg-slate-950/60"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <FiCheckCircle className="text-cyan-400 text-lg shrink-0" />
                    <span className="text-xs font-bold uppercase text-slate-400 tracking-wider">
                      {cert.issuer}
                    </span>
                  </div>

                  <h4 className="text-slate-100 font-extrabold text-sm mb-2 leading-snug">
                    {cert.name}
                  </h4>

                  {cert.date && (
                    <span className="text-[10px] font-semibold text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20 w-max mt-auto">
                      {cert.date}
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Block */}
          <div>
            <h3 className="text-lg font-black uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <FiBookOpen className="text-purple-400 text-xl" /> Academic Background
            </h3>

            {education.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-panel p-6 rounded-2xl border border-purple-500/20 bg-slate-950/60"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h4 className="text-slate-100 font-black text-base md:text-lg">
                    {item.degree}
                  </h4>
                  <span className="text-xs text-cyan-300 font-mono font-bold bg-cyan-950/40 px-3 py-1 rounded-lg border border-cyan-500/30 w-max">
                    {item.period}
                  </span>
                </div>
                <p className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">
                  {item.institution}
                </p>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed font-mono">
                  Relevant Coursework: {item.coursework}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Right Column: ATS Resume Download Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5 w-full"
        >
          <div className="glass-panel p-8 rounded-2xl text-center flex flex-col items-center relative overflow-hidden group/resume shadow-2xl">
            
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED]/10 via-transparent to-[#06B6D4]/10 opacity-70 pointer-events-none" />

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 text-3xl mb-5 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <FiFileText />
            </div>

            <h3 className="text-white font-black text-xl tracking-wide mb-2">
              ATS-Optimized Resume
            </h3>

            <p className="text-slate-400 text-xs md:text-sm leading-relaxed mb-6 max-w-[320px]">
              Download full PDF resume formatted for top tech recruiters (Google, Microsoft, Amazon, OpenAI, NVIDIA).
            </p>

            {/* Document specs */}
            <div className="w-full bg-slate-900/80 border border-slate-800 rounded-xl p-4 text-left space-y-2 mb-6 font-mono text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500 uppercase">Format:</span>
                <span className="text-slate-200">PDF Document</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 uppercase">Focus:</span>
                <span className="text-cyan-400 font-bold">AI Engineer / Full-Stack</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 uppercase">Status:</span>
                <span className="text-emerald-400 font-bold">Latest 2026 Edition</span>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={contactDetails.resumeUrl}
              download="Chetanya_Kumar_Resume.pdf"
              className="btn-cyan-glow flex items-center justify-center gap-2.5 text-white font-extrabold text-xs tracking-wider uppercase px-6 py-4 rounded-xl w-full cursor-pointer shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            >
              <FiDownload className="text-base shrink-0" /> Download Resume PDF
            </a>

            <span className="text-[10px] text-slate-500 mt-4 italic">
              Direct download link
            </span>

          </div>
        </motion.div>

      </div>

    </section>
  );
}
