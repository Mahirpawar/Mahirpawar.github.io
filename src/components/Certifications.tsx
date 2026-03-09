import { motion } from "motion/react";
import { resumeData } from "../data/resume";
import { BookOpen } from "lucide-react";

export default function Certifications() {
  const displayCerts = resumeData.certifications.slice(0, 5);
  const remainingCerts = resumeData.certifications.length - 5;

  return (
    <section id="certifications" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-400 border border-rose-500/20">
          <BookOpen size={24} />
        </div>
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white">
          Certifications
        </h2>
      </motion.div>

      <div className="space-y-3">
        {displayCerts.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center gap-4 p-5 rounded-2xl bg-[#0b1120] border border-white/5 hover:border-white/10 transition-all group"
          >
            <div className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_8px_rgba(244,63,94,0.6)] shrink-0 ml-1"></div>
            <div>
              <h3 className="font-bold text-white text-base leading-tight mb-1">{cert.name}</h3>
              {(cert.issuer || cert.date) && (
                <p className="text-xs text-slate-400 flex items-center gap-2">
                  {cert.issuer && <span>{cert.issuer}</span>} 
                  {cert.issuer && cert.date && <span>•</span>} 
                  {cert.date && <span>{cert.date}</span>}
                </p>
              )}
            </div>
          </motion.div>
        ))}
        
        {remainingCerts > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-end pt-2"
          >
            <button className="px-4 py-2 rounded-full bg-slate-800/50 text-slate-300 text-sm font-medium border border-white/5 hover:bg-slate-800 hover:text-white transition-colors">
              + {remainingCerts} More Certifications
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
