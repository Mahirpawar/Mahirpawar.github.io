import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 mt-32 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-slate-200 tracking-tight">
            Leadership & Extracurricular
          </h2>
          <p className="text-sm text-slate-400 leading-relaxed max-w-3xl mx-auto">
            Public Relations Head at ED-CELL BIT Durg, responsible for outreach initiatives, communication
            strategy, and student engagement activities. Actively involved in organizing entrepreneurship
            events, including workshops, hackathons, and networking sessions for students and startups.
          </p>
        </div>
        
        <div className="pt-16">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Mahir Pawar. Built with Next.js & Tailwind.
          </p>
        </div>
      </div>
    </footer>
  );
}
