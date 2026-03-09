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
        className="flex items-center gap-4 mb-8"
      >
        <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 border border-teal-500/20">
          <GraduationCap size={24} />
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
          Education
        </h2>
      </motion.div>

      <div className="space-y-4">
        {resumeData.education.map((edu, index) => {
          // Extract year range from dates if possible for the badge
          let yearBadge = edu.dates;
          if (edu.dates.includes(" - ")) {
            const parts = edu.dates.split(" - ");
            const startYear = parts[0].split(" ").pop();
            const endYear = parts[1].split(" ").pop();
            if (startYear && endYear) {
              yearBadge = `${startYear} - ${endYear}`;
            }
          }

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative p-6 rounded-2xl bg-[#0b1120] border border-white/5 hover:border-white/10 transition-all group"
            >
              <div className="flex justify-between items-start gap-4 mb-2">
                <h3 className="text-lg font-bold text-white leading-snug pr-16">
                  {edu.degree.split(",")[0]}
                  {edu.degree.includes(",") && (
                    <span className="block text-base font-normal text-slate-300 mt-1">
                      {edu.degree.split(",").slice(1).join(",").trim()}
                    </span>
                  )}
                </h3>
                <div className="absolute top-6 right-6 bg-slate-800/50 text-teal-400 text-xs font-medium px-2.5 py-1 rounded-md border border-white/5 whitespace-nowrap">
                  {yearBadge}
                </div>
              </div>
              
              <p className="text-slate-400 text-sm mb-4">{edu.institution}</p>
              
              {edu.score && (
                <div className="inline-block bg-emerald-500/10 text-emerald-400 text-xs font-medium px-3 py-1 rounded-md border border-emerald-500/20">
                  Score: {edu.score}
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
