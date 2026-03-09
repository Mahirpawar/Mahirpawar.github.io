import { motion } from "motion/react";
import { resumeData } from "../data/resume";
import { Trophy, Award, Star, Zap } from "lucide-react";

const icons = [Trophy, Award, Star, Zap];

export default function Achievements() {
  return (
    <section id="achievements" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center mb-16"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
          <Award size={14} />
          <span>Milestones & Impact</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
          Key Achievements
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resumeData.achievements.map((ach, index) => {
          const Icon = icons[index % icons.length];
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-[#0b1120] border border-white/5 hover:border-white/10 transition-all group flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-500/5 flex items-center justify-center text-amber-500 mb-6 border border-amber-500/20 group-hover:bg-amber-500/10 transition-colors">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 leading-snug">
                {ach.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mt-auto">
                {ach.context}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
