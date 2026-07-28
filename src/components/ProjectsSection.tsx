import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/portfolioData';

// Image assets
import resumeforgeImg from '../assets/resumeforge_project.png';
import earBiometricsImg from '../assets/ear_biometrics_project.png';
import hotelImg from '../assets/hotel_project.png';

const projectImages: Record<string, string> = {
  resumeforge_project: resumeforgeImg,
  ear_biometrics_project: earBiometricsImg,
  hotel_project: hotelImg,
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full max-w-[1240px] mx-auto px-4 py-20 relative z-10">
      
      {/* Title Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-left mb-12"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
          03 / FEATURED PROJECTS
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-gradient-main tracking-tight mb-4">
          AI & Software Engineering Highlights
        </h2>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-[750px]">
          Showcasing production-ready AI applications, deep learning computer vision models, and secure full-stack database architectures.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => {
          const imageSrc = projectImages[project.image] || resumeforgeImg;
          return (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="glass-panel rounded-2xl overflow-hidden flex flex-col text-left group/project relative shadow-xl"
            >
              {/* Top border glow indicator */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-40 group-hover/project:opacity-100 transition-opacity duration-300 z-10" />

              {/* Project Image Box */}
              <div className="relative h-52 overflow-hidden bg-slate-950 border-b border-slate-800/80">
                <img
                  src={imageSrc}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/project:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/40 to-transparent opacity-85" />
                <span className="absolute top-3 left-3 text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-lg border border-cyan-500/30 bg-slate-950/80 text-cyan-300 backdrop-blur-md">
                  {project.subtitle}
                </span>
              </div>

              {/* Project Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-black text-white mb-3 tracking-wide group-hover/project:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md border border-purple-500/20 bg-purple-950/30 text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-slate-300 text-xs md:text-sm leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Bullet Points */}
                {project.bullets && (
                  <ul className="space-y-2 mb-6 text-xs text-slate-400">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} className="relative pl-4">
                        <span className="absolute left-0 top-1.5 h-1.5 w-1.5 rounded-full bg-cyan-400" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Buttons (Live Demo & GitHub) */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-slate-800/80">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-outline-glow flex items-center justify-center gap-2 text-slate-200 font-bold text-xs tracking-wider uppercase px-4 py-2.5 rounded-xl w-full text-center"
                    >
                      <FaGithub className="text-sm shrink-0" /> Codebase
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-cyan-glow flex items-center justify-center gap-2 text-white font-bold text-xs tracking-wider uppercase px-4 py-2.5 rounded-xl w-full text-center shadow-[0_0_12px_rgba(6,182,212,0.3)]"
                    >
                      <FaExternalLinkAlt className="text-xs shrink-0" /> Live Demo
                    </a>
                  )}
                </div>
              </div>

            </motion.article>
          );
        })}
      </div>

    </section>
  );
}
