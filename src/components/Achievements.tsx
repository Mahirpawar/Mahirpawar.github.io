import { motion } from "motion/react";
import { resumeData } from "../data/resume";
import { Trophy, Star, Award, Target } from "lucide-react";

const icons = [Trophy, Star, Award, Target];

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Achievements & Impact
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resumeData.achievements.map((ach, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-8 rounded-3xl bg-slate-900/50 backdrop-blur-sm border border-white/10 hover:bg-slate-800/80 transition-all group overflow-hidden"
            >
              {/* Decorative background glow */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/20 transition-colors"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center text-indigo-400 mb-6 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300 shadow-inner border border-white/5">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all">
                  {ach.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{ach.context}</p>
              </div>
              
              {/* Bottom gradient line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
