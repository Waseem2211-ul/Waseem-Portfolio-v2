import React from "react";
import { MessageSquare, Star } from "lucide-react";
import { testimonialsData } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-slate-950 overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-indigo-950/40 text-indigo-400 border border-indigo-900/50 rounded-full text-xs font-mono font-medium uppercase tracking-wider mb-4">
            <MessageSquare size={12} />
            <span>Client Feedback</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
            What Clients Say
          </h2>
          <p className="text-base sm:text-lg text-slate-400 font-sans">
            Direct, unfiltered feedback from business owners, founders, and professionals I've collaborated with.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {testimonialsData.map((testimonial) => {
            // Generate initials for avatar placeholders
            const initials = testimonial.author
              .split(" ")
              .map((n) => n[0])
              .join("")
              .slice(0, 2);

            return (
              <div
                key={testimonial.id}
                className="bg-slate-900 border border-slate-800/80 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-slate-700 transition-colors text-left"
              >
                {/* 5 Star Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote Text */}
                <p className="text-sm sm:text-base text-slate-300 italic font-sans leading-relaxed flex-1">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center space-x-3.5 pt-4 border-t border-slate-800">
                  {/* Initial Avatar */}
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-mono font-bold text-xs flex items-center justify-center select-none shrink-0">
                    {initials}
                  </div>
                  <div className="font-sans">
                    <h4 className="text-xs sm:text-sm font-bold text-white">
                      {testimonial.author}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">
                      {testimonial.role}, <span className="text-indigo-400 font-semibold">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
