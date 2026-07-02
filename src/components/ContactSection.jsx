// src/components/ContactSection.jsx
import React, { useState } from "react";
import { useDarkMode } from "../context/DarkModeContext";

const ContactSection = ({ 
  id = "contact", // Added dynamic section ID for route anchors
  sectionTitle = "CONTACT",
  headingText = "Looking to start a project or you need consultation? Feel free to contact me.",
  location = "Coimbatore, Tamil Nadu, India",
  email = "rohithips296@gmail.com",
  phone = "+91 97505 65041",
  onSubmit,
  isVisible = true
}) => {
  const { isDark } = useDarkMode();
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false });

    try {
      if (onSubmit) {
        // Parent custom submission routing override
        await onSubmit(e);
        setFormStatus({ loading: false, success: true, error: false });
        e.target.reset();
      } else {
        // Direct production connection with EmailJS API
        const emailjs = await import('@emailjs/browser');
        await emailjs.sendForm(
          'YOUR_SERVICE_ID',   // Replace with your operational EmailJS Service ID
          'YOUR_TEMPLATE_ID',  // Replace with your operational EmailJS Template ID
          e.target, 
          'YOUR_PUBLIC_KEY'    // Replace with your operational EmailJS Public API Key
        );
        setFormStatus({ loading: false, success: true, error: false });
        e.target.reset();
      }
    } catch (error) {
      setFormStatus({ loading: false, success: false, error: true });
    }

    // Clear submission logs automatically after 5 seconds tracking window
    setTimeout(() => {
      setFormStatus({ loading: false, success: false, error: false });
    }, 5000);
  };

  return (
    <section 
      id={id} // Root Anchor Identification Link Node
      className={`py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      } ${isDark ? 'bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-900'}`}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header Track matching your structural design theme */}
        <div 
          className={`flex items-center justify-between gap-8 mb-16 sm:mb-20 select-none transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
          }`}
        >
          <h2 className={`text-4xl sm:text-5xl font-black font-sans tracking-tight uppercase whitespace-nowrap scale-y-105 ${
            isDark ? 'text-blue-500' : 'text-blue-600'
          }`}>
            {sectionTitle}
          </h2>
          <div className={`relative flex-1 h-[2px] overflow-hidden rounded-full ${
            isDark ? 'bg-zinc-800' : 'bg-zinc-200'
          }`}>
            <div 
              className={`absolute top-0 right-0 h-full transition-transform duration-100 ease-out ${
                isDark ? 'bg-blue-500' : 'bg-blue-600'
              }`}
              style={{
                width: "100%",
                transform: "translateX(0%)",
              }}
            />
          </div>
        </div>

        {/* Two Column Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Column - Contact Information */}
          <div 
            className={`flex flex-col gap-8 transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-black font-sans leading-tight sm:leading-snug tracking-tight uppercase ${
              isDark ? 'text-white' : 'text-zinc-900'
            }`}>
              {headingText}
            </h3>
            
            <div className="space-y-4 sm:space-y-6 mt-4">
              <div className="flex flex-col gap-1">
                <span className="text-[9px] sm:text-[10px] tracking-[0.3em] font-bold uppercase text-zinc-500">
                  Headquarters
                </span>
                <span className={`text-base sm:text-lg font-semibold ${isDark ? 'text-zinc-100' : 'text-zinc-900'}`}>
                  {location}
                </span>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-[9px] sm:text-[10px] tracking-[0.3em] font-bold uppercase text-zinc-500">
                  Email
                </span>
                <a 
                  href={`mailto:${email}`} 
                  className={`text-base sm:text-lg font-semibold hover:underline transition-colors break-all ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  {email}
                </a>
              </div>
              
              <div className="flex flex-col gap-1">
                <span className="text-[9px] sm:text-[10px] tracking-[0.3em] font-bold uppercase text-zinc-500">
                  Phone
                </span>
                <a 
                  href={`tel:${phone.replace(/\s/g, '')}`} 
                  className={`text-base sm:text-lg font-semibold hover:underline transition-colors ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  {phone}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div 
            className={`transition-all duration-1000 delay-400 ease-out ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] sm:text-[10px] font-black tracking-[0.25em] uppercase text-zinc-500 px-1">
                    Your Name
                  </label>
                  <input 
                    type="text" 
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className={`w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl border text-sm transition-all duration-300 outline-none font-bold tracking-wide ${
                      isDark 
                        ? 'bg-zinc-900/40 border-zinc-800/80 text-white placeholder-zinc-600 focus:border-blue-500 focus:bg-zinc-900' 
                        : 'bg-zinc-200/50 border-transparent text-zinc-900 placeholder-zinc-400 focus:border-blue-600 focus:bg-white focus:shadow-xl'
                    }`}
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] sm:text-[10px] font-black tracking-[0.25em] uppercase text-zinc-500 px-1">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className={`w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl border text-sm transition-all duration-300 outline-none font-bold tracking-wide ${
                      isDark 
                        ? 'bg-zinc-900/40 border-zinc-800/80 text-white placeholder-zinc-600 focus:border-blue-500 focus:bg-zinc-900' 
                        : 'bg-zinc-200/50 border-transparent text-zinc-900 placeholder-zinc-400 focus:border-blue-600 focus:bg-white focus:shadow-xl'
                    }`}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[9px] sm:text-[10px] font-black tracking-[0.25em] uppercase text-zinc-500 px-1">
                  Your Message
                </label>
                <textarea 
                  name="message"
                  required
                  rows={6}
                  placeholder="Tell me about your project..."
                  className={`w-full px-4 sm:px-5 py-3.5 sm:py-4 rounded-xl border text-sm transition-all duration-300 outline-none font-bold tracking-wide resize-none ${
                    isDark 
                      ? 'bg-zinc-900/40 border-zinc-800/80 text-white placeholder-zinc-600 focus:border-blue-500 focus:bg-zinc-900' 
                      : 'bg-zinc-200/50 border-transparent text-zinc-900 placeholder-zinc-400 focus:border-blue-600 focus:bg-white focus:shadow-xl'
                  }`}
                />
              </div>

              {/* Status Messages */}
              {formStatus.success && (
                <div className={`p-4 rounded-xl border ${
                  isDark ? 'bg-green-500/10 border-green-500/30' : 'bg-green-50 border-green-200'
                }`}>
                  <p className="text-xs sm:text-sm font-black tracking-[0.15em] text-green-500 uppercase">
                    ✓ Message sent successfully. I'll get back to you soon!
                  </p>
                </div>
              )}
              
              {formStatus.error && (
                <div className={`p-4 rounded-xl border ${
                  isDark ? 'bg-red-500/10 border-red-500/30' : 'bg-red-50 border-red-200'
                }`}>
                  <p className="text-xs sm:text-sm font-black tracking-[0.15em] text-red-500 uppercase">
                    ✗ Failed to send message. Please try again.
                  </p>
                </div>
              )}

              <button 
                type="submit"
                disabled={formStatus.loading}
                className={`w-full py-4 sm:py-4.5 rounded-xl font-black text-xs sm:text-sm tracking-[0.3em] uppercase text-white shadow-xl transition-all duration-300 select-none ${
                  formStatus.loading 
                    ? 'bg-zinc-500 cursor-not-allowed' 
                    : isDark
                      ? 'bg-blue-500 hover:bg-blue-400 shadow-blue-500/10 hover:shadow-blue-500/20 hover:-translate-y-0.5'
                      : 'bg-blue-600 hover:bg-blue-700 shadow-blue-600/10 hover:shadow-blue-600/20 hover:-translate-y-0.5'
                }`}
              >
                {formStatus.loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;