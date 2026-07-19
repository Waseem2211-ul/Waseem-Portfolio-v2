import React, { useState } from "react";
import { Mail, Phone, Github, Send, CheckCircle } from "lucide-react";
import BorderGlow from "./BorderGlow";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    let isValid = true;
    const errors = { name: "", email: "", message: "" };

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    } else if (formData.message.trim().length < 10) {
      errors.message = "Message must be at least 10 characters long";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (formErrors[name as keyof typeof formErrors]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate an API submit
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-slate-900/30 border-t border-slate-900 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Direct Channels (Left Column) */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 bg-indigo-950/40 text-indigo-400 border border-indigo-900/50 rounded-full text-xs font-mono font-medium uppercase tracking-wider">
                <Send size={12} />
                <span>Start a Project</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Let's Build Something Great Together
              </h2>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
                Whether you need a high-converting landing page, a clean business website, or are a recruiter/internship coordinator looking for dedicated engineering talent — my inbox is always open. 
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4 pt-4">
              
              {/* Email */}
              <a
                href="mailto:Alanjiwaseem@gmail.com"
                className="flex items-center space-x-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-indigo-600 hover:shadow-xs transition-all group"
              >
                <div className="p-2.5 bg-indigo-950/40 text-indigo-400 rounded-lg group-hover:bg-indigo-900/50 transition-colors">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block">
                    Write Me
                  </span>
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-indigo-400 transition-colors">
                    Alanjiwaseem@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone / WhatsApp */}
              <a
                href="https://wa.me/918248682077"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-emerald-600 hover:shadow-xs transition-all group"
              >
                <div className="p-2.5 bg-emerald-950/40 text-emerald-400 rounded-lg group-hover:bg-emerald-900/50 transition-colors">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block">
                    Call / WhatsApp
                  </span>
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-emerald-400 transition-colors">
                    +91 82486 82077
                  </span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Waseem2211-ul"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-slate-900 border border-slate-800 rounded-xl hover:border-slate-700 hover:shadow-xs transition-all group"
              >
                <div className="p-2.5 bg-slate-950 text-slate-400 rounded-lg group-hover:bg-slate-900 transition-colors">
                  <Github size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block">
                    Code Profile
                  </span>
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                    github.com/Waseem2211-ul
                  </span>
                </div>
              </a>

            </div>

            {/* Approachable Closing Line */}
            <div className="bg-slate-950 p-4 border border-slate-850 rounded-xl font-sans text-xs text-slate-400 leading-relaxed">
              <strong>Quick Response Guarantee:</strong> I typically reply to all direct WhatsApp and email inquiries within 3-4 hours during business days. Let's start sketching out your layout!
            </div>
          </div>

          {/* Contact Form (Right Column) */}
          <BorderGlow
            className="lg:col-span-7 w-full shadow-2xl"
            animated={true}
            colors={["#6366f1", "#a855f7", "#ec4899"]}
            glowColor="99 102 241"
            backgroundColor="#0f172a"
            borderRadius={24}
            glowRadius={50}
            glowIntensity={1.2}
            coneSpread={35}
          >
            <div className="p-6 sm:p-8 w-full h-full">
              {isSuccess ? (
                <div className="py-12 flex flex-col items-center justify-center text-center space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 bg-emerald-950/40 text-emerald-400 rounded-full flex items-center justify-center border border-emerald-900/50 mb-2">
                    <CheckCircle size={36} />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white">Message Delivered!</h3>
                  <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                    Thank you for reaching out, your inquiry was compiled successfully. I will review your goals and reply to your email address shortly.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-mono font-semibold uppercase tracking-wider cursor-pointer transition-all duration-200"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-left" noValidate>
                  <div className="space-y-2 border-b border-slate-850 pb-3">
                    <h3 className="font-display text-lg font-bold text-white">Direct Inquiry Form</h3>
                    <p className="text-xs text-slate-500">Describe your project requirements briefly below.</p>
                  </div>

                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono font-bold uppercase text-slate-400 block">
                      Your Name / Company
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. John Doe / Sky Cosme"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-200 bg-slate-950/80 outline-hidden transition-all placeholder:text-slate-600 ${
                        formErrors.name
                          ? "border-rose-900 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                          : "border-slate-800/80 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                      }`}
                    />
                    {formErrors.name && (
                      <p className="text-[11px] text-rose-500 font-mono mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono font-bold uppercase text-slate-400 block">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. johndoe@company.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-200 bg-slate-950/80 outline-hidden transition-all placeholder:text-slate-600 ${
                        formErrors.email
                          ? "border-rose-900 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                          : "border-slate-800/80 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                      }`}
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-rose-500 font-mono mt-1">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Message Textarea */}
                  <div className="space-y-1.5">
                    <div className="flex justify-between">
                      <label htmlFor="message" className="text-xs font-mono font-bold uppercase text-slate-400 block">
                        Message / Project Details
                      </label>
                      <span className="text-[10px] text-slate-500 font-mono">Min 10 chars</span>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Describe your goals, desired timeline, or any reference websites..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-200 bg-slate-950/80 outline-hidden transition-all resize-none placeholder:text-slate-600 ${
                        formErrors.message
                          ? "border-rose-900 focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500"
                          : "border-slate-800/80 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500"
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-rose-500 font-mono mt-1">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-800 text-white rounded-xl text-xs font-semibold uppercase tracking-wider font-mono cursor-pointer transition-all duration-200 flex items-center justify-center space-x-2 shadow-xs hover:shadow-md"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin inline-block w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full" />
                        <span>Sending inquiry...</span>
                      </>
                    ) : (
                      <>
                        <span>Transmit Message</span>
                        <Send size={12} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </BorderGlow>

        </div>
      </div>
    </section>
  );
}
