import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Project } from "../types";
import { projectsData } from "../data";
import { ExternalLink, BookOpen, ChevronDown, ChevronUp, Check, Briefcase, HelpCircle, Laptop } from "lucide-react";
import LazyImage from "./LazyImage";

export default function Portfolio() {
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const originalTitleRef = useRef<string>("");

  useEffect(() => {
    // Save original title or use a polished default if it's the generic fallback
    const currentTitle = document.title;
    if (currentTitle === "My Google AI Studio App" || !currentTitle) {
      originalTitleRef.current = "Mohammed Waseem A | Portfolio Website";
      document.title = "Mohammed Waseem A | Portfolio Website";
    } else {
      originalTitleRef.current = currentTitle;
    }

    return () => {
      if (originalTitleRef.current) {
        document.title = originalTitleRef.current;
      }
    };
  }, []);

  useEffect(() => {
    if (expandedProjectId) {
      const project = projectsData.find((p) => p.id === expandedProjectId);
      if (project) {
        document.title = `${project.name} | Case Study`;
      }
    } else {
      if (originalTitleRef.current) {
        document.title = originalTitleRef.current;
      }
    }
  }, [expandedProjectId]);

  const toggleExpand = (id: string) => {
    if (expandedProjectId === id) {
      setExpandedProjectId(null);
    } else {
      setExpandedProjectId(id);
    }
  };

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-slate-900/30 border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-indigo-950/40 text-indigo-400 border border-indigo-900/50 rounded-full text-xs font-mono font-medium uppercase tracking-wider mb-4">
            <Briefcase size={12} />
            <span>Proven Client Work</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Real Client Case Studies
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-sans">
            Every project below is a real, live website custom-designed and custom-coded directly for small businesses and professionals.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project: Project) => {
            const isExpanded = expandedProjectId === project.id;

            return (
              <motion.div
                key={project.id}
                whileHover={{ scale: 1.02, y: -4 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-slate-900 border border-slate-800/80 rounded-2xl overflow-hidden shadow-2xl hover:border-slate-700 transition-all duration-300 flex flex-col group h-full"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <LazyImage
                    src={project.imageUrl}
                    alt={`${project.name} preview thumbnail`}
                    className="transform group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-80 pointer-events-none" />
                  
                  {/* Category overlay */}
                  <span className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md text-white text-xs font-mono font-bold px-3 py-1 rounded-md shadow-md border border-slate-800">
                    {project.category}
                  </span>

                  {/* Quick Client Tag */}
                  <span className="absolute bottom-4 left-4 text-white text-sm font-semibold font-sans drop-shadow-md">
                    {project.client}
                  </span>
                </div>

                {/* Main Copy */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Project Name */}
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                        {project.name}
                      </h3>
                      
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-1.5 text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors bg-indigo-950/40 border border-indigo-900/50 px-2.5 py-1.5 rounded-lg shrink-0"
                        title={`Visit live site: ${project.name}`}
                      >
                        <span>Live Site</span>
                        <ExternalLink size={12} />
                      </a>
                    </div>

                    {/* Brief snippet */}
                    <p className="text-sm text-slate-400 leading-relaxed font-sans line-clamp-3">
                      {project.problem}
                    </p>

                    {/* Tags List */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-[11px] font-mono text-slate-400 bg-slate-950 border border-slate-850 px-2.5 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Accordion expand block */}
                  <div className="mt-6 pt-6 border-t border-slate-800 space-y-4">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="w-full inline-flex items-center justify-between py-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-500 hover:text-white cursor-pointer transition-colors"
                    >
                      <span>{isExpanded ? "Hide detailed process" : "View Full Case Study"}</span>
                      {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {/* Expandable Case Study Area */}
                    {isExpanded && (
                      <div className="space-y-5 pt-2 border-t border-dashed border-slate-800 animate-fadeIn text-left font-sans text-sm">
                        
                        {/* Problem statement */}
                        <div className="space-y-1.5">
                          <h4 className="font-bold text-slate-200 flex items-center space-x-2">
                            <HelpCircle size={14} className="text-indigo-400 shrink-0" />
                            <span>The Problem</span>
                          </h4>
                          <p className="text-slate-400 pl-5 leading-relaxed text-xs">
                            {project.problem}
                          </p>
                        </div>

                        {/* Our solution */}
                        <div className="space-y-1.5">
                          <h4 className="font-bold text-slate-200 flex items-center space-x-2">
                            <Laptop size={14} className="text-cyan-400 shrink-0" />
                            <span>The Solution Provided</span>
                          </h4>
                          <p className="text-slate-400 pl-5 leading-relaxed text-xs">
                            {project.solution}
                          </p>
                        </div>

                        {/* Step-by-step Dev Process */}
                        <div className="space-y-2">
                          <h4 className="font-bold text-slate-200 flex items-center space-x-2">
                            <BookOpen size={14} className="text-indigo-400 shrink-0" />
                            <span>Development & Design Process</span>
                          </h4>
                          <ul className="space-y-1.5 pl-5">
                            {project.process.map((step, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-xs text-slate-400">
                                <span className="text-emerald-400 font-bold shrink-0">✓</span>
                                <span>{step}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Real-world results & feedback */}
                        <div className="bg-indigo-950/20 border-l-2 border-indigo-500 p-3 rounded-r-lg">
                          <h5 className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-bold mb-1">
                            Launch Outcome
                          </h5>
                          <p className="text-xs text-slate-300 italic leading-relaxed">
                            "{project.results}"
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
