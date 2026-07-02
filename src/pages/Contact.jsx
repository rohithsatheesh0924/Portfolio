// src/pages/Contact.jsx
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import ContactSection from "../components/ContactSection";
import { useDarkMode } from "../context/DarkModeContext";

const Contact = () => {
  const { isDark } = useDarkMode();
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-900'}`}>
      <Navbar />
      
      {/* HERO SECTION */}
      <section 
        ref={heroRef}
        className={`min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-12 relative overflow-hidden ${isDark ? 'bg-zinc-950' : 'bg-zinc-50'}`}
      >
        <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
          
          {/* Large CONTACT Heading */}
          <div 
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h1 className={`text-6xl sm:text-7xl md:text-8xl lg:text-[12rem] font-black tracking-tighter uppercase leading-none ${isDark ? 'text-blue-500' : 'text-blue-600'}`}>
              CONTACT
            </h1>
            
            {/* Four-Pointed Star/Diamond Shape */}
            <div className={`mt-4 sm:mt-6 flex justify-center transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <svg 
                className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ${isDark ? 'text-blue-500' : 'text-blue-600'}`} 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>

            {/* Subtitle */}
            <p 
              className={`mt-8 sm:mt-12 text-base sm:text-lg lg:text-xl font-medium max-w-2xl mx-auto px-4 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}
            >
              Let's build something extraordinary together. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <div ref={contactRef}>
        <ContactSection 
          sectionTitle="GET IN TOUCH"
          headingText="Have a project in mind? Let's work together to create something amazing."
          location="Coimbatore, Tamil Nadu, India"
          email="rohithips296@gmail.com"
          phone="+91 97505 65041"
          isVisible={true}
        />
      </div>

      {/* ADDITIONAL CONTACT INFO SECTION - Professional Classic Design */}
<section className={`py-20 sm:py-28 lg:py-36 px-4 sm:px-6 lg:px-12 relative overflow-hidden ${isDark ? 'bg-zinc-900/30' : 'bg-white/50'}`}>
  
  <div className="max-w-7xl mx-auto relative z-10">
    
    {/* Section Header - Classy Design */}
    <div className="text-center mb-16 sm:mb-20 lg:mb-24">
      <h3 className={`text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
        Connect With Me
      </h3>
      <div className="flex items-center justify-center gap-3">
        <div className={`w-12 h-px ${isDark ? 'bg-zinc-700' : 'bg-zinc-300'}`} />
        <div className={`w-3 h-3 rotate-45 ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`} />
        <div className={`w-12 h-px ${isDark ? 'bg-zinc-700' : 'bg-zinc-300'}`} />
      </div>
      <p className={`mt-6 text-base sm:text-lg max-w-2xl mx-auto ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
        Let's collaborate and bring your ideas to life. I'm always excited to connect with fellow professionals and potential clients.
      </p>
    </div>

    {/* Social Links Grid - Premium Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      
      {/* LinkedIn */}
      <a 
        href="https://linkedin.com/in/rohith--s"
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative p-8 rounded-3xl border-2 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-zinc-950/80 border-zinc-800 hover:border-blue-500/50' 
            : 'bg-gradient-to-br from-white/90 via-white/70 to-zinc-50/90 border-zinc-200 hover:border-blue-600/50'
        }`}
      >
        {/* Hover gradient overlay */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isDark ? 'bg-gradient-to-br from-blue-500/10 to-transparent' : 'bg-gradient-to-br from-blue-600/5 to-transparent'
        }`} />
        
        <div className="relative z-10 flex flex-col items-center gap-6">
          {/* Icon Container with animated ring */}
          <div className="relative">
            <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ${
              isDark ? 'bg-blue-500/20 scale-150' : 'bg-blue-600/20 scale-150'
            }`} />
            <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
              isDark 
                ? 'bg-zinc-800/80 group-hover:bg-zinc-800' 
                : 'bg-zinc-100 group-hover:bg-white'
            }`}>
              <svg className={`w-8 h-8 sm:w-9 sm:h-9 transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <h4 className={`font-black text-lg sm:text-xl uppercase tracking-wider ${isDark ? 'text-white' : 'text-zinc-900'}`}>
              LinkedIn
            </h4>
            <p className={`text-sm font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Professional Network
            </p>
            <div className={`pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
              <span className={`text-xs font-bold tracking-[0.2em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                Connect Now →
              </span>
            </div>
          </div>
        </div>
      </a>

      {/* GitHub */}
      <a 
        href="https://github.com/rohithsatheesh0924"
        target="_blank"
        rel="noopener noreferrer"
        className={`group relative p-8 rounded-3xl border-2 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-zinc-950/80 border-zinc-800 hover:border-blue-500/50' 
            : 'bg-gradient-to-br from-white/90 via-white/70 to-zinc-50/90 border-zinc-200 hover:border-blue-600/50'
        }`}
      >
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isDark ? 'bg-gradient-to-br from-blue-500/10 to-transparent' : 'bg-gradient-to-br from-blue-600/5 to-transparent'
        }`} />
        
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="relative">
            <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ${
              isDark ? 'bg-blue-500/20 scale-150' : 'bg-blue-600/20 scale-150'
            }`} />
            <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
              isDark 
                ? 'bg-zinc-800/80 group-hover:bg-zinc-800' 
                : 'bg-zinc-100 group-hover:bg-white'
            }`}>
              <svg className={`w-8 h-8 sm:w-9 sm:h-9 transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <h4 className={`font-black text-lg sm:text-xl uppercase tracking-wider ${isDark ? 'text-white' : 'text-zinc-900'}`}>
              GitHub
            </h4>
            <p className={`text-sm font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Code Repositories
            </p>
            <div className={`pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
              <span className={`text-xs font-bold tracking-[0.2em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                View Code →
              </span>
            </div>
          </div>
        </div>
      </a>

      {/* Email */}
      <a 
        href="mailto:rohithips296@gmail.com"
        className={`group relative p-8 rounded-3xl border-2 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-zinc-950/80 border-zinc-800 hover:border-blue-500/50' 
            : 'bg-gradient-to-br from-white/90 via-white/70 to-zinc-50/90 border-zinc-200 hover:border-blue-600/50'
        }`}
      >
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isDark ? 'bg-gradient-to-br from-blue-500/10 to-transparent' : 'bg-gradient-to-br from-blue-600/5 to-transparent'
        }`} />
        
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="relative">
            <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ${
              isDark ? 'bg-blue-500/20 scale-150' : 'bg-blue-600/20 scale-150'
            }`} />
            <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
              isDark 
                ? 'bg-zinc-800/80 group-hover:bg-zinc-800' 
                : 'bg-zinc-100 group-hover:bg-white'
            }`}>
              <svg className={`w-8 h-8 sm:w-9 sm:h-9 transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <h4 className={`font-black text-lg sm:text-xl uppercase tracking-wider ${isDark ? 'text-white' : 'text-zinc-900'}`}>
              Email
            </h4>
            <p className={`text-sm font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Direct Message
            </p>
            <div className={`pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
              <span className={`text-xs font-bold tracking-[0.2em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                Send Mail →
              </span>
            </div>
          </div>
        </div>
      </a>

      {/* Phone */}
      <a 
        href="tel:+919750565041"
        className={`group relative p-8 rounded-3xl border-2 backdrop-blur-md transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-zinc-950/80 border-zinc-800 hover:border-blue-500/50' 
            : 'bg-gradient-to-br from-white/90 via-white/70 to-zinc-50/90 border-zinc-200 hover:border-blue-600/50'
        }`}
      >
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
          isDark ? 'bg-gradient-to-br from-blue-500/10 to-transparent' : 'bg-gradient-to-br from-blue-600/5 to-transparent'
        }`} />
        
        <div className="relative z-10 flex flex-col items-center gap-6">
          <div className="relative">
            <div className={`absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 ${
              isDark ? 'bg-blue-500/20 scale-150' : 'bg-blue-600/20 scale-150'
            }`} />
            <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${
              isDark 
                ? 'bg-zinc-800/80 group-hover:bg-zinc-800' 
                : 'bg-zinc-100 group-hover:bg-white'
            }`}>
              <svg className={`w-8 h-8 sm:w-9 sm:h-9 transition-colors duration-300 ${isDark ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
          </div>
          
          <div className="text-center space-y-2">
            <h4 className={`font-black text-lg sm:text-xl uppercase tracking-wider ${isDark ? 'text-white' : 'text-zinc-900'}`}>
              Phone
            </h4>
            <p className={`text-sm font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
              Call or WhatsApp
            </p>
            <div className={`pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
              <span className={`text-xs font-bold tracking-[0.2em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                Get in Touch →
              </span>
            </div>
          </div>
        </div>
      </a>

    </div>
  </div>
</section>

      {/* AVAILABILITY STATUS SECTION */}
      <section className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-12 ${isDark ? 'bg-zinc-950' : 'bg-zinc-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          
          <div className={`p-8 sm:p-12 rounded-3xl border-2 backdrop-blur-md ${
            isDark 
              ? 'bg-zinc-900/30 border-zinc-800' 
              : 'bg-white/60 border-zinc-200'
          }`}>
            
            {/* Status Indicator */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
              </div>
              <span className={`text-sm font-bold tracking-[0.2em] uppercase ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                Available for Work
              </span>
            </div>

            <h3 className={`text-2xl sm:text-3xl font-black uppercase tracking-tight mb-4 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
              Currently Accepting Projects
            </h3>
            
            <p className={`text-base sm:text-lg leading-relaxed mb-8 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              I'm actively seeking new opportunities and collaborations. Whether you have a project in mind or just want to discuss ideas, I'm here to help bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:rohithips296@gmail.com"
                className={`px-8 py-4 rounded-xl font-black text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark 
                    ? 'bg-blue-500 hover:bg-blue-400 text-white shadow-xl shadow-blue-500/20' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20'
                }`}
              >
                Start a Project
              </a>
              <a 
                href="https://linkedin.com/in/rohith--s"
                target="_blank"
                rel="noopener noreferrer"
                className={`px-8 py-4 rounded-xl font-black text-sm tracking-[0.2em] uppercase border-2 transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark 
                    ? 'border-zinc-700 text-zinc-300 hover:border-blue-500 hover:text-blue-400' 
                    : 'border-zinc-300 text-zinc-700 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                View LinkedIn
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER TEXT */}
      <section className={`py-12 sm:py-16 overflow-hidden border-t ${isDark ? 'bg-zinc-950 border-white/5' : 'bg-zinc-50 border-black/5'}`}>
        <div className="max-w-7xl mx-auto px-6 select-none text-center">
          <p className={`text-sm sm:text-base font-medium ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
            Let's create something amazing together
          </p>
        </div>
      </section>

    </div>
  );
};

export default Contact;