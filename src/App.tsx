/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import AnimatedBackground from "./components/AnimatedBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import Splash from "./components/Splash";
import Footer from "./components/Footer";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Splash />;
  }

  return (
    <div className="min-h-screen text-slate-200 font-sans selection:bg-indigo-500/30">
      <AnimatedBackground />
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 py-24 space-y-32">
        <Hero />
        <Experience />
        <Achievements />
        <Projects />
        <Skills />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <Education />
          <Certifications />
        </div>
      </main>
      <Footer />
    </div>
  );
}
