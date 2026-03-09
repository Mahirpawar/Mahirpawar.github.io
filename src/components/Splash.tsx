import { motion } from "motion/react";

export default function Splash() {
  return (
    <div className="fixed inset-0 bg-[#020617] flex flex-col items-center justify-center z-50 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full"></div>
      
      <div className="relative flex flex-col items-center justify-center">
        {/* Animated rings */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
        >
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border border-indigo-500/20 animate-[spin_10s_linear_infinite]"></div>
          <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
        </motion.div>

        {/* Glowing background behind logo */}
        <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 via-purple-500 to-cyan-500 blur-3xl opacity-20 rounded-full animate-pulse"></div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center relative z-10 py-12 px-8"
        >
          <div className="text-7xl md:text-9xl font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-indigo-200 to-purple-400 py-4 px-2 mb-2 drop-shadow-lg">
            MSP
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-slate-400 font-mono text-xs md:text-sm tracking-[0.3em] uppercase mb-4"
          >
            Mahir Singh Pawar
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-8 w-64 h-1 bg-slate-800/50 rounded-full overflow-hidden relative"
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
          className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 relative"
        >
          {/* Shine effect on loading bar */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
        </motion.div>
      </motion.div>
    </div>
  );
}
