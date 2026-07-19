import React from "react";
import { ArrowRight, Sparkles, FolderGit2, CheckCircle2, ChevronRight, GraduationCap } from "lucide-react";

interface HeroProps {
  onSeeWork: () => void;
  onGetInTouch: () => void;
}

export default function Hero({ onSeeWork, onGetInTouch }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-16 flex items-center bg-slate-950 overflow-hidden"
    >
      {/* Decorative Grid Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Copy (Left) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 sm:space-y-8">
            {/* Status Pill */}
            <div className="inline-flex items-center space-x-2 bg-indigo-950/40 text-indigo-400 border border-indigo-900/50 rounded-full py-1.5 px-3.5 text-xs font-mono font-medium transition-all duration-300 hover:bg-indigo-900/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
              </span>
              <span>Available for Freelance Projects</span>
            </div>

            {/* Headline */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
                Designing Performance.<br />
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                  Building Value.
                </span>
              </h1>
              
              {/* College Student Description */}
              <p className="text-base sm:text-lg text-slate-400 font-sans max-w-2xl leading-relaxed">
                Hi, I'm <strong className="text-white font-semibold">Mohammed Waseem A</strong>. 
                I'm a Computer Science Engineering student and a freelance web developer. 
                I bridge the gap between creative visual design and engineering — crafting websites that don't just look spectacular, but are fast, responsive, and designed to grow your business.
              </p>
            </div>

            {/* Quick trust metrics */}
            <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0 sm:space-x-6 text-sm text-slate-400 font-sans">
              <div className="flex items-center space-x-2">
                <CheckCircle2 size={16} className="text-emerald-400" />
                <span>4 Client Projects Delivered Live</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap size={16} className="text-indigo-400" />
                <span>B.E Computer Science Student</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
              <button
                onClick={onSeeWork}
                className="inline-flex justify-center items-center space-x-2 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/35"
              >
                <span>See My Work</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={onGetInTouch}
                className="inline-flex justify-center items-center space-x-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer"
              >
                <span>Get in Touch</span>
                <ChevronRight size={16} className="text-slate-500" />
              </button>
            </div>
          </div>

          {/* Interactive Bento Showcase (Right) */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden group">
              {/* Card visual elements */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-cyan-400" />
              
              {/* Interactive visual layout of skills/tools */}
              <div className="space-y-6 font-sans">
                {/* Header of card */}
                <div className="flex justify-between items-start border-b border-slate-800 pb-4">
                  <div>
                    <h3 className="font-display font-bold text-white text-lg">Mohammed Waseem</h3>
                    <p className="text-xs font-mono text-slate-500 mt-0.5">@Waseem2211-ul</p>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 bg-slate-950 text-slate-400 rounded-md border border-slate-850">
                    Portfolio.v2
                  </span>
                </div>

                {/* Live Feed Simulator */}
                <div className="space-y-3">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">
                    Recent Live Launches
                  </span>
                  <div className="space-y-2.5">
                    {[
                      { name: "Alanji Computers", status: "Live Portfolio", link: "alanji-computers.vercel.app" },
                      { name: "Skyflies Cosmetics", status: "Live Catalog", link: "skyflies-cosmetics-and-skincar.vercel.app" },
                      { name: "Envie Salon", status: "Live Local Business", link: "enviesalon.vercel.app" },
                      { name: "Waseem Gym", status: "Live Fitness Landing", link: "waseem-gym.vercel.app" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs p-2 bg-slate-950/40 border border-slate-850 hover:border-slate-700 transition-colors">
                        <div className="flex items-center space-x-2">
                          <FolderGit2 size={13} className="text-indigo-400" />
                          <span className="font-semibold text-slate-300">{item.name}</span>
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-900/40 px-1.5 py-0.5 rounded-full font-medium">
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Design/Dev Stack */}
                <div className="space-y-3">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block">
                    Core Capabilities
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {["Figma UI/UX", "Tailwind CSS", "React", "TypeScript", "WordPress", "Vanilla Code"].map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs px-2.5 py-1 bg-indigo-950/50 text-indigo-300 rounded-md border border-indigo-900/40 font-medium font-sans"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Focus/Philosophy snippet */}
                <div className="p-3 bg-slate-950 border border-slate-850 text-white rounded-xl space-y-1">
                  <div className="flex items-center space-x-1.5 text-xs font-mono text-indigo-400">
                    <Sparkles size={12} />
                    <span>Philosophy</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans">
                    "Websites are more than visual brochures. They are systems designed to load instantly, rank on Google, and drive real user action."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
