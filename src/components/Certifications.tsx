import { motion } from "motion/react";
import { resumeData } from "../data/resume";
import { BadgeCheck } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Certifications
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {resumeData.certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex items-start gap-4 p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-white/10 hover:border-indigo-500/30 hover:bg-slate-800/80 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center text-indigo-400 shrink-0 group-hover:scale-110 group-hover:text-cyan-400 transition-all duration-300 shadow-inner border border-white/5">
              <BadgeCheck size={20} />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white group-hover:text-indigo-300 transition-colors">{cert.name}</h3>
              {(cert.issuer || cert.date) && (
                <p className="text-sm text-slate-400 mt-1 flex items-center gap-2">
                  {cert.issuer && <span className="font-medium text-slate-300">{cert.issuer}</span>} 
                  {cert.issuer && cert.date && <span className="text-slate-600">•</span>} 
                  {cert.date && <span className="bg-white/5 px-2 py-0.5 rounded text-xs border border-white/5">{cert.date}</span>}
                </p>
              )}
              {cert.details && (
                <p className="text-sm text-slate-500 mt-3 leading-relaxed">
                  {cert.details}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
