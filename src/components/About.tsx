import React from "react";
import { User, Sparkles, Code2, Heart, GraduationCap, Compass, Layers } from "lucide-react";

export default function About() {
  const skillCategories = [
    {
      title: "UI/UX & Design",
      skills: ["Figma", "User Flow Mapping", "Wireframing", "Color Theory", "Prototyping"],
    },
    {
      title: "Web Technologies",
      skills: ["HTML5 / CSS3", "Modern JavaScript", "React", "Vite", "Tailwind CSS", "WordPress"],
    },
    {
      title: "Core Programming",
      skills: ["Java", "Python", "Data Structures", "OOP Concepts"],
    },
    {
      title: "Engineering Tools",
      skills: ["Git & GitHub", "VS Code", "Vercel / Netlify", "Command Line"],
    },
  ];

  const differentiators = [
    {
      icon: <Layers className="text-indigo-400" size={20} />,
      title: "Design Meets Engineering",
      desc: "I don't just build from templates. I sketch, prototype, and refine user journeys in Figma first, then translate them line-by-line into clean, performant React or semantic HTML/CSS code."
    },
    {
      icon: <Compass className="text-cyan-400" size={20} />,
      title: "Student Perspective",
      desc: "Studying Computer Science Engineering means I bring fresh, current design sensibilities and modern standard coding methodologies directly to the table — keeping your brand ahead of competitors."
    },
    {
      icon: <Code2 className="text-indigo-400" size={20} />,
      title: "Zero Agency Layers",
      desc: "You collaborate directly with me. No account managers, sales representatives, or communication bottlenecks. Just fast, clear, direct progress from initial draft to deployment."
    },
    {
      icon: <Sparkles className="text-amber-400" size={20} />,
      title: "Accessible Premium Quality",
      desc: "Having low structural overhead allows me to offer premium-grade digital experiences at rates that are highly affordable and practical for local businesses and independent startups."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-indigo-950/40 text-indigo-400 border border-indigo-900/50 rounded-full text-xs font-mono font-medium uppercase tracking-wider mb-4">
            <User size={12} />
            <span>Behind the Code</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            My Story & Philosophy
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-sans">
            How I blend structural engineering principles with modern interactive UI design.
          </p>
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Story Column (Left) */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8 text-left">
            <div className="space-y-4">
              <h3 className="font-display text-2xl font-bold text-white flex items-center space-x-2">
                <span>The Journey of a Student-Developer</span>
              </h3>
              
              <div className="text-slate-400 font-sans space-y-4 leading-relaxed">
                <p>
                  I'm currently pursuing my <strong className="text-white font-medium">B.E. in Computer Science Engineering</strong> at C. Abdul Hakeem College of Engineering and Technology. My path began with a simple curiosity: <em>why are so many small business websites frustrating to look at and even harder to use?</em>
                </p>
                <p>
                  I realized that local businesses were stuck in a hard place — either paying exorbitant fees to big creative agencies, or struggling with generic page-builders that feel clunky and load slowly.
                </p>
                <p>
                  I decided to bridge this gap. By combining my academic understanding of computer systems, database design, and algorithmic optimization with a self-taught passion for modern UI/UX design, I started offering freelance web services directly. 
                </p>
                <p>
                  To date, I have completed <strong className="text-white font-semibold">4 real-world client projects</strong>, learning how to handle budgets, timelines, and real customer satisfaction from start to finish.
                </p>
              </div>
            </div>

            {/* Academic Card */}
            <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-start space-x-3.5">
              <div className="p-2.5 bg-indigo-950/40 text-indigo-400 rounded-lg shrink-0">
                <GraduationCap size={20} />
              </div>
              <div className="font-sans text-xs">
                <h4 className="font-bold text-white">C. Abdul Hakeem College of Engineering</h4>
                <p className="text-slate-400 mt-0.5">B.E in Computer Science Engineering</p>
                <p className="text-indigo-400 font-semibold mt-1 font-mono">2026 - Active Pursuit</p>
              </div>
            </div>
          </div>

          {/* Skills Column (Right) */}
          <div className="lg:col-span-6 space-y-8">
            <h3 className="font-display text-2xl font-bold text-white text-left">
              My Toolkit & Technologies
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillCategories.map((cat, index) => (
                <div 
                  key={index} 
                  className="p-5 bg-slate-900/40 border border-slate-800/80 rounded-xl space-y-3 hover:border-slate-700 transition-colors text-left"
                >
                  <h4 className="font-display font-bold text-white text-sm border-b border-slate-800 pb-1.5">
                    {cat.title}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs px-2.5 py-1 bg-slate-950 text-slate-300 border border-slate-850 rounded-md font-sans hover:border-indigo-850 hover:text-indigo-400 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why work with me section (Differentiators) */}
        <div className="mt-20 pt-16 border-t border-slate-800">
          <h3 className="font-display text-2xl font-bold text-white text-center mb-12">
            What Makes Me Different
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {differentiators.map((diff, index) => (
              <div 
                key={index}
                className="p-6 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl hover:shadow-2xl transition-all duration-300 space-y-4 flex flex-col h-full justify-between"
              >
                <div className="space-y-3">
                  <div className="p-2.5 bg-slate-950 border border-slate-850 rounded-xl inline-block">
                    {diff.icon}
                  </div>
                  <h4 className="font-display font-bold text-white text-base">
                    {diff.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                    {diff.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
