import { motion } from "motion/react";
import { resumeData } from "../data/resume";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Experience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
      </motion.div>

      <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-indigo-500/50 before:via-purple-500/50 before:to-cyan-500/50">
        {resumeData.experience.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
          >
            {/* Timeline dot */}
            <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-950 bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:scale-110 transition-transform duration-300">
              <Briefcase size={16} />
            </div>

            {/* Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-slate-900/80 border border-white/10 backdrop-blur-md hover:bg-slate-800/80 hover:border-indigo-500/30 transition-all shadow-lg hover:shadow-indigo-500/10">
              <div className="flex flex-col gap-1 mb-4">
                <h3 className="text-xl font-display font-bold text-white group-hover:text-indigo-300 transition-colors">{exp.role}</h3>
                <h4 className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-medium">{exp.company}</h4>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mt-2">
                  <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                    <Calendar size={14} className="text-indigo-400" /> {exp.dates}
                  </span>
                  <span className="flex items-center gap-1 bg-white/5 px-2 py-1 rounded-md border border-white/5">
                    <MapPin size={14} className="text-cyan-400" /> {exp.location}
                  </span>
                </div>
              </div>

              {exp.bullets.length > 0 && (
                <ul className="space-y-2 text-slate-300 text-sm">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-indigo-500 mt-1 text-lg leading-none">•</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
