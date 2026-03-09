import { motion } from "motion/react";
import { resumeData } from "../data/resume";
import { FolderGit2, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
          Featured Projects
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resumeData.projects.map((project, index) => {
          const content = (
            <div className="relative h-full p-6 rounded-2xl bg-slate-900/80 backdrop-blur-sm border border-white/10 group-hover:border-transparent transition-colors z-10 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-500">
                  <FolderGit2 size={24} />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/5">
                    {project.dates}
                  </span>
                  {/* @ts-ignore */}
                  {project.link && (
                    <ExternalLink size={18} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
                  )}
                </div>
              </div>

              <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-cyan-400 transition-all">
                {project.title}
              </h3>

              <ul className="space-y-2 text-slate-400 text-sm mb-6 flex-grow">
                {project.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="text-indigo-500 mt-1">•</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium text-indigo-300 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );

          // @ts-ignore
          if (project.link) {
            return (
              <motion.a
                key={index}
                // @ts-ignore
                href={project.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex flex-col h-full group cursor-pointer rounded-2xl"
              >
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                {content}
              </motion.a>
            );
          }

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col h-full group rounded-2xl"
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {content}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
