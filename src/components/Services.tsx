import React from "react";
import { Globe, Zap, Figma, FileCode, Sparkles, Check, HelpCircle } from "lucide-react";
import { servicesData } from "../data";

interface ServicesProps {
  onQuoteRequested: () => void;
}

export default function Services({ onQuoteRequested }: ServicesProps) {
  // Helper to map string icon names to Lucide icon components safely
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="text-indigo-400" size={24} />;
      case "Zap":
        return <Zap className="text-amber-400" size={24} />;
      case "Figma":
        return <Figma className="text-indigo-400" size={24} />;
      case "FileCode":
        return <FileCode className="text-cyan-400" size={24} />;
      case "Sparkles":
        return <Sparkles className="text-indigo-400" size={24} />;
      default:
        return <Globe className="text-indigo-400" size={24} />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-900/30 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-24">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-indigo-950/40 text-indigo-400 border border-indigo-900/50 rounded-full text-xs font-mono font-medium uppercase tracking-wider mb-4">
            <Sparkles size={12} />
            <span>Commercial Offerings</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            Services That Drive Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-sans">
            I build bespoke digital solutions that solve real-world problems. No pre-made low-quality templates — just optimized, responsive code.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 sm:p-8 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 h-full"
            >
              <div className="space-y-5 text-left">
                {/* Icon wrapper */}
                <div className="p-3 bg-slate-950 border border-slate-850 rounded-xl inline-block">
                  {renderIcon(service.iconName)}
                </div>

                {/* Service Title */}
                <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                  {service.title}
                </h3>

                {/* Service description */}
                <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables lists */}
                <div className="space-y-2 pt-3 border-t border-slate-800">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 font-bold block">
                    What's Included:
                  </span>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((del, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-xs text-slate-400">
                        <Check size={13} className="text-emerald-400 shrink-0" />
                        <span className="font-sans">{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Pricing Quote Custom Bento Card */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-black text-white rounded-2xl p-6 sm:p-8 flex flex-col justify-between text-left shadow-2xl md:col-span-2 lg:col-span-1 h-full border border-slate-800">
            <div className="space-y-4">
              <div className="p-2.5 bg-slate-950 border border-slate-850 rounded-xl inline-block text-indigo-400">
                <HelpCircle size={22} />
              </div>
              <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                Get a Custom Quote
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
                Every business has specific requirements. Instead of forcing your brand into a rigid price package, I offer flexible, customized scopes that align precisely with your budget and goals.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-800 mt-6">
              <button
                onClick={onQuoteRequested}
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider font-mono cursor-pointer transition-colors shadow-md shadow-indigo-600/10"
              >
                Discuss Your Project
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
