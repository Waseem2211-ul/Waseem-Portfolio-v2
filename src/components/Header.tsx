import React, { useState, useEffect } from "react";
import { Menu, X, Github, Mail, ArrowRight } from "lucide-react";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "portfolio", label: "Case Studies" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800 shadow-md shadow-slate-950/40"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo / Branding */}
          <div 
            onClick={() => scrollToSection("home")}
            className="cursor-pointer group flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold text-white transition-transform duration-300 group-hover:scale-105">
              W
            </div>
            <span className="font-display font-bold text-lg sm:text-xl text-white tracking-tight transition-colors duration-300 group-hover:text-indigo-400">
              Mohammed Waseem<span className="text-indigo-400 font-normal"> A</span>
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 bg-indigo-950/50 text-indigo-400 rounded-full font-medium border border-indigo-900/50 hidden lg:inline-block">
              Web Dev & Design
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider font-mono transition-all duration-200 cursor-pointer ${
                  activeSection === item.id
                    ? "text-indigo-400 bg-indigo-950/40 border border-indigo-900/50"
                    : "text-slate-400 hover:text-white hover:bg-slate-900/50 border border-transparent"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Waseem2211-ul"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="mailto:Alanjiwaseem@gmail.com"
              aria-label="Email Me"
              className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-900 transition-colors"
            >
              <Mail size={18} />
            </a>
            <button
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center space-x-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-xs font-semibold uppercase tracking-wider font-mono cursor-pointer transition-all duration-200 shadow-sm shadow-indigo-600/10"
            >
              <span>Get in Touch</span>
              <ArrowRight size={12} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-3 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-xs font-mono font-semibold uppercase tracking-wider"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-slate-950/95 backdrop-blur-lg z-40 transition-transform duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-4 py-6 space-y-3 h-full shadow-lg border-t border-slate-900">
          <p className="text-xs font-mono uppercase tracking-widest text-slate-500 px-3 pb-2">
            Navigation
          </p>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold uppercase tracking-wider font-mono transition-all duration-200 flex justify-between items-center ${
                activeSection === item.id
                  ? "text-indigo-400 bg-indigo-950/40 border border-indigo-900/40"
                  : "text-slate-400 hover:text-white hover:bg-slate-900"
              }`}
            >
              <span>{item.label}</span>
              {activeSection === item.id && (
                <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
              )}
            </button>
          ))}

          <div className="pt-8 border-t border-slate-800 mt-6 px-4">
            <p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-4">
              Get in Touch Directly
            </p>
            <div className="flex flex-col space-y-3">
              <a
                href="mailto:Alanjiwaseem@gmail.com"
                className="flex items-center space-x-3 text-sm text-slate-400 hover:text-white"
              >
                <Mail size={18} className="text-indigo-400" />
                <span>Alanjiwaseem@gmail.com</span>
              </a>
              <a
                href="https://github.com/Waseem2211-ul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-sm text-slate-400 hover:text-white"
              >
                <Github size={18} className="text-indigo-400" />
                <span>github.com/Waseem2211-ul</span>
              </a>
            </div>
            
            <div className="mt-8">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold shadow-md shadow-indigo-600/10 flex justify-center items-center space-x-2 cursor-pointer"
              >
                <span>Available for New Projects</span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
