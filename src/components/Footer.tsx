import React from "react";
import { ArrowUp, Github, Mail, Phone, Heart } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 sm:py-16 font-sans border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-slate-900">
          
          {/* Brand/Identity */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="font-display font-bold text-xl text-white tracking-tight">
              Mohammed Waseem A.
            </h3>
            <p className="text-xs max-w-sm text-slate-400">
              B.E. Computer Science Engineering Student & Freelance Web Developer. Translating human requirements into elegant, high-speed software.
            </p>
          </div>

          {/* Social Icons / Links */}
          <div className="flex items-center space-x-4">
            <a
              href="mailto:Alanjiwaseem@gmail.com"
              aria-label="Email"
              className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full transition-colors border border-slate-800"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://wa.me/918248682077"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-emerald-400 rounded-full transition-colors border border-slate-800"
            >
              <Phone size={16} />
            </a>
            <a
              href="https://github.com/Waseem2211-ul"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full transition-colors border border-slate-800"
            >
              <Github size={16} />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1 px-4 py-2 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white text-xs font-mono rounded-lg transition-colors cursor-pointer border border-slate-800"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>

        {/* Legal / Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} Mohammed Waseem A. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 justify-center">
            <span>Crafted with pure dedication and engineering logic</span>
            <Heart size={10} className="text-indigo-400 fill-indigo-400" />
          </p>
        </div>

      </div>
    </footer>
  );
}
