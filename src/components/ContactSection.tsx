import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiMapPin, FiSend, FiDownload } from 'react-icons/fi';
import { contactDetails } from '../data/portfolioData';

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="w-full max-w-[1240px] mx-auto px-4 py-20 relative z-10">
      
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-left mb-12"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 block mb-2">
          06 / GET IN TOUCH
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-gradient-main tracking-tight mb-4">
          Let's Build Something Extraordinary
        </h2>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-[700px]">
          Open to AI Engineer positions, Full-Stack Developer opportunities, research collaborations, and high-impact software projects.
        </p>
      </motion.div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Direct Channels & Resume Download */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-6 text-left">
          
          <div className="space-y-4">
            <h3 className="text-slate-200 font-extrabold text-base mb-4 border-l-2 border-cyan-400 pl-3">
              Direct Contact Information
            </h3>

            {[
              {
                icon: <FiMail className="text-cyan-400 text-lg" />,
                label: 'Email Address',
                value: contactDetails.email,
                url: `mailto:${contactDetails.email}`,
              },
              {
                icon: <FaLinkedin className="text-cyan-400 text-lg" />,
                label: 'LinkedIn Profile',
                value: 'in/chetanya-kumar',
                url: contactDetails.linkedin,
              },
              {
                icon: <FaGithub className="text-cyan-400 text-lg" />,
                label: 'GitHub Codebase',
                value: 'github.com/chetanyakumar',
                url: contactDetails.github,
              },
              {
                icon: <FiMapPin className="text-cyan-400 text-lg" />,
                label: 'Location',
                value: contactDetails.location,
                url: null,
              },
            ].map((channel, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-panel p-4 rounded-xl flex items-center gap-4 border border-slate-800 bg-slate-950/60 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 shadow-[0_0_10px_rgba(6,182,212,0.15)]">
                  {channel.icon}
                </div>
                <div className="flex flex-col select-all">
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                    {channel.label}
                  </span>
                  {channel.url ? (
                    <a
                      href={channel.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs md:text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {channel.value}
                    </a>
                  ) : (
                    <span className="text-xs md:text-sm font-semibold text-slate-200">
                      {channel.value}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Resume Download Action */}
          <div className="pt-2">
            <a
              href={contactDetails.resumeUrl}
              download="Chetanya_Kumar_Resume.pdf"
              className="btn-outline-glow px-5 py-3.5 rounded-xl text-slate-200 font-extrabold text-xs tracking-wider uppercase flex items-center justify-center gap-2.5 w-full text-center"
            >
              <FiDownload className="text-sm shrink-0" /> Download AI Engineer Resume
            </a>
          </div>

        </div>

        {/* Right Column: Contact Message Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-7 w-full text-left"
        >
          <div className="glass-panel p-6 md:p-8 rounded-2xl relative overflow-hidden bg-slate-950/80 border border-cyan-500/20">
            <h3 className="text-white font-black text-lg mb-6 flex items-center gap-2">
              <FiSend className="text-cyan-400" /> Send Direct Message
            </h3>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-2xl mb-4 animate-bounce">
                  ✓
                </div>
                <h4 className="text-emerald-400 font-bold text-base mb-1">Message Sent Successfully!</h4>
                <p className="text-slate-400 text-xs md:text-sm">Thank you for reaching out. I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-[10px] font-bold text-slate-400 uppercase mb-1.5 tracking-widest">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-slate-800 bg-slate-900/90 text-white placeholder-slate-600 text-xs md:text-sm focus:outline-none focus:border-cyan-500 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-[10px] font-bold text-slate-400 uppercase mb-1.5 tracking-widest">
                    Your Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-slate-800 bg-slate-900/90 text-white placeholder-slate-600 text-xs md:text-sm focus:outline-none focus:border-cyan-500 transition-all duration-300"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="text-[10px] font-bold text-slate-400 uppercase mb-1.5 tracking-widest">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    placeholder="Discuss project requirements, hiring details, or open roles..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-slate-800 bg-slate-900/90 text-white placeholder-slate-600 text-xs md:text-sm focus:outline-none focus:border-cyan-500 transition-all duration-300 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn-cyan-glow flex items-center justify-center gap-2 text-white font-extrabold text-xs tracking-wider uppercase px-5 py-3.5 rounded-xl w-full cursor-pointer mt-4 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                >
                  <FiSend className="text-xs shrink-0" /> Send Message
                </button>

              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
