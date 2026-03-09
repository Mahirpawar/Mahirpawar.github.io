import { motion } from "motion/react";
import { resumeData } from "../data/resume";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center pt-20 relative">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="flex flex-col md:flex-row items-center md:items-center justify-between gap-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="flex-1"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-sm font-medium tracking-wide mb-6 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
            {resumeData.extra[0]}
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
            <span className="text-white">I'm </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              {resumeData.basics.name}
            </span>
          </h1>
          <h3 className="text-2xl md:text-3xl text-slate-300 font-medium mb-8 max-w-2xl leading-snug">
            {resumeData.basics.title}
          </h3>
          <p className="text-slate-400 text-lg max-w-3xl leading-relaxed mb-10">
            {resumeData.basics.summary}
          </p>

          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#experience"
              className="group flex items-center gap-2 px-8 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-indigo-50 hover:text-indigo-900 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              View Experience
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Downloading Internshala Resume...");
              }}
              className="flex items-center gap-2 px-8 py-4 bg-white/5 text-white font-bold rounded-full hover:bg-white/10 transition-all border border-white/10 hover:border-white/20 hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-6 text-slate-400">
            <a
              href={
                resumeData.basics.links.find((l) => l.name === "LinkedIn")?.url
              }
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-indigo-500/20 hover:text-indigo-300 hover:border-indigo-500/50 transition-all hover:-translate-y-1"
            >
              <Linkedin size={22} />
            </a>
            <a
              href={resumeData.basics.links.find((l) => l.name === "GitHub")?.url}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:text-purple-300 hover:border-purple-500/50 transition-all hover:-translate-y-1"
            >
              <Github size={22} />
            </a>
            <a
              href={`mailto:${resumeData.basics.email}`}
              className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-cyan-500/20 hover:text-cyan-300 hover:border-cyan-500/50 transition-all hover:-translate-y-1"
            >
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
          className="relative shrink-0"
        >
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Outer glowing ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 opacity-30 blur-xl animate-pulse"></div>
            
            {/* Image container */}
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 relative z-10 shadow-2xl">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 border-4 border-slate-900">
                <img 
                  src="https://github.com/Mahirpawar.png" 
                  alt={resumeData.basics.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 -right-4 z-20 bg-slate-900 border border-white/10 px-4 py-2 rounded-2xl shadow-xl flex items-center gap-2 backdrop-blur-md"
            >
              <span className="text-2xl">🚀</span>
              <div className="flex flex-col">
                <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Available for</span>
                <span className="text-sm text-white font-bold">Internships</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
