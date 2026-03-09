import { motion } from "motion/react";
import { resumeData } from "../data/resume";
import { GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Education
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
      </motion.div>

      <div className="space-y-6">
        {resumeData.education.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex gap-6 p-8 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-white/10 hover:border-indigo-500/30 transition-all group hover:bg-slate-800/80"
          >
            <div className="shrink-0 mt-1">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300 shadow-inner border border-white/5">
                <GraduationCap size={28} />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all">
                {edu.institution}
              </h3>
              <p className="text-indigo-400 font-medium mt-2 text-lg">{edu.degree}</p>
              <div className="flex items-center gap-4 text-sm text-slate-400 mt-3">
                <span className="bg-white/5 px-3 py-1 rounded-md border border-white/5">{edu.dates}</span>
                {edu.score && <span className="bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-md border border-indigo-500/20 font-medium">{edu.score}</span>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
