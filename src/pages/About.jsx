// src/pages/About.jsx
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { useDarkMode } from "../context/DarkModeContext";
import ScrollVelocity from "../components/ScrollVelocity";

const About = () => {
  const { isDark } = useDarkMode();
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    profile: false,
    skills: false,
    contact: false,
    footer: false
  });
  
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: false });
  
  const heroRef = useRef(null);
  const profileRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.dataset.section;
          setVisibleSections(prev => ({ ...prev, [section]: true }));
        }
      });
    }, observerOptions);

    const refs = [heroRef, profileRef, skillsRef, contactRef, footerRef];
    const sections = ['hero', 'profile', 'skills', 'contact', 'footer'];
    
    refs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.dataset.section = sections[index];
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false });
    
    import('@emailjs/browser').then((emailjs) => {
      emailjs.sendForm(
        'YOUR_SERVICE_ID', 
        'YOUR_TEMPLATE_ID', 
        e.target, 
        'YOUR_PUBLIC_KEY'
      )
      .then(() => {
        setFormStatus({ loading: false, success: true, error: false });
        e.target.reset();
      })
      .catch(() => {
        setFormStatus({ loading: false, success: false, error: true });
      });
    }).catch(() => {
      setFormStatus({ loading: false, success: false, error: true });
    });
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-900'}`}>
      <Navbar />
      
      {/* HERO SECTION */}
      <section 
        ref={heroRef}
        className={`py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 ${isDark ? 'bg-zinc-950' : 'bg-zinc-50'}`}
      >
        <div className="max-w-7xl mx-auto">
          {/* Large ABOUT Heading with Classy Design */}
          <div 
            className={`text-center mb-16 sm:mb-20 select-none transition-all duration-1000 ${
              visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className={`text-6xl sm:text-7xl md:text-8xl lg:text-[12rem] font-black tracking-tighter uppercase leading-none ${isDark ? 'text-blue-500' : 'text-blue-600'}`}>
              ABOUT
            </h1>
            
            {/* Four-Pointed Star/Diamond Shape */}
            <div className={`mt-4 sm:mt-6 flex justify-center transition-all duration-700 delay-300 ${visibleSections.hero ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <svg 
                className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ${isDark ? 'text-blue-500' : 'text-blue-600'}`} 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* PROFILE SECTION */}
      <section 
        ref={profileRef}
        className={`py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 relative overflow-hidden transition-all duration-1000 ${
          visibleSections.profile ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } ${isDark ? 'bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-900'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
           {/* Left Column - Profile Photo Canvas Component */}
<div 
  className={`lg:col-span-5 w-full flex items-stretch transition-all duration-1000 ease-out ${
    visibleSections.profile ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
  }`}
>
  <div className="relative group w-full max-w-[360px] sm:max-w-[400px] mx-auto lg:mx-0 pt-6 pr-6 pb-20 pl-0 select-none">
    
    {/* 1. Main Background Blue Accent Plate Container Card */}
    <div className="absolute inset-0 bg-blue-600 dark:bg-blue-500 rounded-2xl z-0 shadow-xl" />
    
    {/* 2. Main Portrait Image - Nested inside with equal margin structures */}
    <div className="relative rounded-2xl overflow-hidden shadow-2xl z-10 w-full aspect-[4/5] bg-zinc-900 translate-x-6 -translate-y-6">
      <img 
        src="./my-pic.jpg" 
        alt="Rohith S" 
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>

    {/* 3. Handwritten Swirl Vector Element - Positioned relative to the image canvas */}
    <div className="absolute top-[-10px] right-[-16px] w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 z-20 text-blue-600 dark:text-blue-400 pointer-events-none drop-shadow-md">
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
        <path d="M30 60 C 20 20, 50 10, 55 40 C 60 70, 45 80, 52 50 C 60 20, 80 40, 85 45" />
      </svg>
    </div>
    
    {/* 4. Integrated Social Navigation Bar - Aligned perfectly within the footer bounds of the blue frame */}
    <div className="absolute bottom-0 left-6 right-0 h-20 z-20 flex items-center justify-around text-white px-4">
      {[
        { href: "https://linkedin.com/in/rohith--s", label: "LinkedIn", path: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" },
        { href: "https://github.com/rohithsatheesh0924", label: "GitHub", path: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" }
      ].map((soc, i) => (
        <a 
          key={i} 
          href={soc.href} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:scale-110 active:scale-95 transition-transform duration-300"
          aria-label={soc.label}
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d={soc.path}/></svg>
        </a>
      ))}
      <a href="mailto:rohithips296@gmail.com" aria-label="Email" className="hover:scale-110 active:scale-95 transition-transform duration-300">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
      </a>
      <a href="tel:+919750565041" aria-label="Phone" className="hover:scale-110 active:scale-95 transition-transform duration-300">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
      </a>
    </div>

  </div>
</div>

            {/* Right Column - Text Content */}
            <div 
              className={`lg:col-span-7 flex flex-col justify-center transition-all duration-1000 delay-200 ease-out ${
                visibleSections.profile ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
              }`}
            >
              <div className="flex flex-col gap-8 lg:gap-12 text-left">
                
                {/* Main Statement */}
                <div className="flex flex-col gap-3">
                  <span className="text-[9px] sm:text-[10px] font-black tracking-[0.3em] uppercase text-zinc-400 dark:text-zinc-500 block select-none">
                    Core Philosophy
                  </span>
                  <p className={`text-xl sm:text-2xl lg:text-3xl font-black leading-tight tracking-tight uppercase scale-y-105 font-sans ${
                    isDark ? 'text-zinc-100' : 'text-zinc-800'
                  }`}>
                    My passion lies in the intersection of art and technology, creating visually 
                    captivating interfaces and elevating overall user digital experiences.
                  </p>
                </div>
                
                {/* Professional Biography */}
                <div className="flex flex-col gap-3">
                  <span className="text-[9px] sm:text-[10px] font-black tracking-[0.3em] uppercase text-zinc-400 dark:text-zinc-500 block select-none">
                    Professional Narrative
                  </span>
                  <p className={`text-sm sm:text-base lg:text-lg leading-relaxed font-normal font-sans tracking-wide ${
                    isDark ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    I hold a <span className={`font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Bachelor of Technology in Artificial Intelligence and Machine Learning</span> from SNS College of Technology. This academic foundation equips me with an analytical framework to architect high-performance products that bridge advanced logic with seamless layout usability.
                  </p>
                  <p className={`text-sm sm:text-base lg:text-lg leading-relaxed font-normal font-sans tracking-wide ${
                    isDark ? 'text-zinc-400' : 'text-zinc-600'
                  }`}>
                    As a dedicated developer anchored in <span className="font-semibold text-zinc-900 dark:text-white">React.js, modern JavaScript, and Tailwind CSS</span>, I specialize in transforming interactive Figma compositions into scalable digital solutions, supported by real-world engineering immersion across diverse internship environments.
                  </p>
                </div>

              </div>

              {/* Metrics Badge & Tags */}
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between pt-6 sm:pt-8 mt-8 lg:mt-12 border-t border-dashed border-zinc-200 dark:border-zinc-800">
                <div className={`p-4 sm:p-5 rounded-2xl border backdrop-blur-sm w-full sm:w-auto ${
                  isDark ? 'bg-zinc-900/30 border-zinc-800/80' : 'bg-white border-zinc-200/80'
                }`}>
                  <p className="text-[9px] sm:text-[10px] font-black tracking-[0.3em] uppercase text-zinc-400 dark:text-zinc-500 mb-1.5 select-none">
                    Academic Matrix
                  </p>
                  <p className={`text-xs sm:text-sm font-black uppercase tracking-wider ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    CGPA: 8.68 <span className="opacity-30 mx-2">/</span> Expected Graduation: 2026
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 select-none">
                  {["Frontend Specialist", "UI Optimization"].map((tag, i) => (
                    <span 
                      key={i}
                      className={`px-3 py-1.5 rounded-lg text-[9px] sm:text-[10px] font-black tracking-widest uppercase border ${
                        isDark 
                          ? 'bg-zinc-900/50 border-zinc-800 text-zinc-400' 
                          : 'bg-white border-zinc-200 text-zinc-500'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* FRONTEND DEVELOPER VELOCITY MARQUEE SECTION */}
<section className={`py-20 sm:py-28 overflow-hidden border-t border-b select-none ${isDark ? 'bg-zinc-950 border-white/5' : 'bg-zinc-50 border-black/5'}`}>
  <div className="w-full flex flex-col gap-4">
    
    <ScrollVelocity
      texts={['Frontend Developer ✦', 'Frontend Developer ✦']} 
      velocity={80}
      className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-[1000] uppercase font-sans tracking-tighter scale-y-110 ${
        isDark ? 'text-blue-500' : 'text-blue-600'
      }`}
      numCopies={6}
      damping={50}
      stiffness={400}
    />

  </div>
</section>

     {/* SKILLS SECTION - Premium Interactive Scroll Stack Engine */}
<section 
  ref={skillsRef}
  className={`py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 ${isDark ? 'bg-zinc-950' : 'bg-zinc-50'}`}
>
  <div className="max-w-4xl mx-auto">
    
    {/* Section Header */}

<div
  className={`mb-16 sm:mb-20 transition-all duration-1000 ease-out ${
    visibleSections.skills
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10"
  }`}
>
  <h3
    className={`text-sm sm:text-base font-black tracking-[0.25em] uppercase font-sans scale-y-105 select-none ${
      isDark ? "text-blue-400" : "text-blue-600"
    }`}
  >
    Technical Skill Stack
  </h3>
</div>
    
    {/* Active Scroll Stack Layer Track */}
    <div className="relative flex flex-col gap-6">
      {[
        { 
          name: "React.js", 
          description: "Frontend library",
          icon: (
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
              <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
              <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>
          )
        },
        { 
          name: "JavaScript", 
          description: "Programming language",
          icon: (
            <svg className="w-8 h-8 sm:w-10 sm:h-10 rounded text-[#F7DF1E]" viewBox="0 0 24 24" fill="currentColor">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M1.5 1.5v21h21v-21h-21zm19.5 13.05l-1.04-.62c.57-.96 1.04-1.37 1.76-1.37.75 0 1.29.39 1.29 1.41 0 .91-.56 1.34-1.44 1.71l-.64.27c-.96.4-1.42.92-1.42 1.83v.16h-1.62v-.22c0-1.47.78-2.07 1.74-2.48l.63-.26c.72-.3 1.13-.6 1.13-1.18 0-.52-.39-.77-.85-.77-.55 0-.91.31-1.22.95l-.72-.4zm-6.07.6c.13-.88.66-1.32 1.52-1.32.79 0 1.29.39 1.29 1.41 0 1-.58 1.41-1.57 1.79l-.54.21c-.81.31-1.19.78-1.19 1.55v.16h-1.62v-.22c0-1.42.72-2.11 1.73-2.5l.55-.21c.64-.25.99-.51.99-1.05 0-.48-.34-.73-.78-.73-.49 0-.82.31-.99.91l-.98-.22z"/>
            </svg>
          )
        },
        { 
          name: "HTML/CSS", 
          description: "Markup & Styling",
          icon: (
            <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="aboutHtmlGradientStack" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E34F26" />
                  <stop offset="100%" stopColor="#EF652A" />
                </linearGradient>
              </defs>
              <path fill="url(#aboutHtmlGradientStack)" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11h-2.61l.294 3.928L12 19.288l5.374-1.53L18.976 6.57 5.152 6.569z"/>
            </svg>
          )
        },
        { 
          name: "Figma", 
          description: "UI/UX Design tool",
          icon: (
            <svg className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.5 5.5C5.5 3.01 7.51 1 10 1C12.49 1 14.5 3.01 14.5 5.5C14.5 6.72 14.01 7.82 13.22 8.62C14.01 9.42 14.5 10.53 14.5 11.75C14.5 14.24 12.49 16.25 10 16.25C7.51 16.25 5.5 14.24 5.5 11.75C5.5 10.53 5.99 9.42 6.78 8.62C5.99 7.82 5.5 6.72 5.5 5.5Z" fill="#F24E1E"/>
              <path d="M14.5 5.5C14.5 3.01 16.51 1 19 1C21.49 1 23.5 3.01 23.5 5.5C23.5 7.99 21.49 10 19 10C16.51 10 14.5 7.99 14.5 5.5Z" fill="#FF7262"/>
              <path d="M5.5 18C5.5 15.51 7.51 13.5 10 13.5H14.5V18C14.5 20.49 12.49 22.5 10 22.5C7.51 22.5 5.5 20.49 5.5 18Z" fill="#0ACF83"/>
              <path d="M14.5 10H19C21.49 10 23.5 12.01 23.5 14.5C23.5 16.99 21.49 19 19 19C16.51 19 14.5 16.99 14.5 14.5V10Z" fill="#1ABC9C"/>
              <path d="M5.5 11.75C5.5 9.26 7.51 7.25 10 7.25H14.5V11.75C14.5 14.24 12.49 16.25 10 16.25C7.51 16.25 5.5 14.24 5.5 11.75Z" fill="#A259FF"/>
            </svg>
          )
        },
        { 
          name: "PHP/MySQL", 
          description: "Backend & Database",
          icon: (
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600 dark:text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <ellipse cx="12" cy="5" rx="9" ry="3" />
              <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
            </svg>
          )
        },
        { 
          name: "Git/GitHub", 
          description: "Version control",
          icon: (
            <svg className="w-8 h-8 sm:w-10 sm:h-10 text-zinc-900 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="18" r="3" />
              <circle cx="6" cy="6" r="3" />
              <circle cx="18" cy="6" r="3" />
              <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9" />
              <path d="M12 12v3" />
            </svg>
          )
        }
      ].map((skill, idx) => (
        <div 
          key={skill.name}
          className={`group relative rounded-2xl sm:rounded-3xl py-7 sm:py-9 px-6 sm:px-8 border-2 backdrop-blur-md sticky transition-all duration-500 shadow-2xl flex items-center justify-between hover:scale-[1.01] ${
            isDark 
              ? 'bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border-zinc-800 hover:border-blue-500/40 text-white shadow-[0_25px_60px_rgba(0,0,0,0.4)]' 
              : 'bg-gradient-to-br from-white via-white to-zinc-50 border-zinc-200 hover:border-blue-600/40 text-zinc-900 shadow-[0_25px_60px_rgba(0,0,0,0.06)]'
          }`}
          style={{
            // Math equation configuration generating sticky overlap offsets 
            top: `calc(7rem + ${idx * 24}px)`,
            transform: visibleSections.skills 
              ? `translateY(0) scale(${1 - (6 - idx) * 0.012})` 
              : 'translateY(40px) scale(0.95)',
            opacity: visibleSections.skills ? 1 : 0,
            zIndex: idx + 1
          }}
        >
          {/* Ambient interactive background hover state overlay */}
          <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
            isDark 
              ? 'bg-gradient-to-br from-blue-500/5 via-transparent to-transparent' 
              : 'bg-gradient-to-br from-blue-600/5 via-transparent to-transparent'
          }`} />
          
          <div className="flex items-center gap-4 sm:gap-6 relative z-10 flex-1 min-w-0">
            {/* Vector Brand Shield Wrapper */}
            <div className={`flex-shrink-0 select-none p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 ${
              isDark 
                ? 'bg-zinc-800/50 group-hover:bg-zinc-800' 
                : 'bg-zinc-100 group-hover:bg-zinc-200'
            }`}>
              {skill.icon}
            </div>
            
            <div className="select-none flex-1 min-w-0">
              <h4 className="font-black text-sm sm:text-base uppercase tracking-wider mb-0.5 sm:mb-1 truncate">{skill.name}</h4>
              <p className={`text-xs sm:text-sm font-medium truncate ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>
                {skill.description}
              </p>
            </div>
          </div>
          
          {/* Classy Index Indicator Badge */}
          <div className={`relative z-10 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 transition-all duration-300 flex-shrink-0 ml-4 ${
            isDark 
              ? 'border-zinc-700 group-hover:border-blue-500/50 text-zinc-500 group-hover:text-blue-400' 
              : 'border-zinc-300 group-hover:border-blue-600/50 text-zinc-400 group-hover:text-blue-600'
          }`}>
            <span className="text-[10px] sm:text-xs font-black tracking-wider">
              0{idx + 1}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


{/* SKILLS INFINITE SCROLL TICKER SECTION */}
<section className={`py-16 sm:py-24 overflow-hidden border-t border-b select-none ${isDark ? 'bg-black border-blue-500/20' : 'bg-zinc-50 border-blue-600/20'}`}>
  <div className="w-full flex flex-col gap-4 sm:gap-6">
    {/* Row 1: Left to Right */}
    <div className="w-full overflow-hidden flex whitespace-nowrap">
      <div className="flex gap-6 sm:gap-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[1000] uppercase font-sans tracking-tighter animate-marquee-left">
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex gap-6 sm:gap-8 flex-shrink-0 items-center">
            <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>HTML</span>
            <span className={`${isDark ? 'text-blue-400/30' : 'text-blue-600/30'}`}>✦</span>
            <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>CSS</span>
            <span className={`${isDark ? 'text-blue-400/30' : 'text-blue-600/30'}`}>✦</span>
            <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>JAVASCRIPT</span>
            <span className={`${isDark ? 'text-blue-400/30' : 'text-blue-600/30'}`}>✦</span>
            <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>REACT.JS</span>
            <span className={`${isDark ? 'text-blue-400/30' : 'text-blue-600/30'}`}>✦</span>
            <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>FIGMA</span>
            <span className={`${isDark ? 'text-blue-400/30' : 'text-blue-600/30'}`}>✦</span>
            <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>GIT</span>
            <span className={`${isDark ? 'text-blue-400/30' : 'text-blue-600/30'}`}>✦</span>
            <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>GITHUB</span>
            <span className={`${isDark ? 'text-blue-400/30' : 'text-blue-600/30'}`}>✦</span>
          </div>
        ))}
      </div>
    </div>

    {/* Row 2: Right to Left */}
    <div className="w-full overflow-hidden flex whitespace-nowrap">
      <div className="flex gap-6 sm:gap-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[1000] uppercase font-sans tracking-tighter animate-marquee-right">
        {[...Array(2)].map((_, setIndex) => (
          <div key={setIndex} className="flex gap-6 sm:gap-8 flex-shrink-0 items-center">
            <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>PHP</span>
            <span className={`${isDark ? 'text-blue-400/30' : 'text-blue-600/30'}`}>✦</span>
            <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>MYSQL</span>
            <span className={`${isDark ? 'text-blue-400/30' : 'text-blue-600/30'}`}>✦</span>
            <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>PYTHON</span>
            <span className={`${isDark ? 'text-blue-400/30' : 'text-blue-600/30'}`}>✦</span>
            <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>C++</span>
            <span className={`${isDark ? 'text-blue-400/30' : 'text-blue-600/30'}`}>✦</span>
            <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>PHOTOSHOP</span>
            <span className={`${isDark ? 'text-blue-400/30' : 'text-blue-600/30'}`}>✦</span>
            <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>CANVA</span>
            <span className={`${isDark ? 'text-blue-400/30' : 'text-blue-600/30'}`}>✦</span>
            <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>EXCEL</span>
            <span className={`${isDark ? 'text-blue-400/30' : 'text-blue-600/30'}`}>✦</span>
          </div>
        ))}
      </div>
    </div>
  </div>

  <style dangerouslySetInnerHTML={{__html: `
    @keyframes marquee-left {
      0% {
        transform: translateX(-50%);
      }
      100% {
        transform: translateX(0%);
      }
    }
    
    @keyframes marquee-right {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    
    .animate-marquee-left {
      animation: marquee-left 30s linear infinite;
    }
    
    .animate-marquee-right {
      animation: marquee-right 30s linear infinite;
    }
    
    .animate-marquee-left:hover,
    .animate-marquee-right:hover {
      animation-play-state: paused;
    }
  `}} />
</section>

      {/* CONTACT SECTION */}
      <section 
        ref={contactRef}
        className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-12 ${isDark ? 'bg-zinc-900/30' : 'bg-white/50'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Left - Contact info */}
            <div className={`transition-all duration-1000 ${visibleSections.contact ? "opacity-100 -translate-x-0" : "opacity-0 -translate-x-12"}`}>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black font-sans leading-tight sm:leading-snug tracking-tight uppercase mb-8 sm:mb-12">
                Looking to start a project or need a consultation?{" "}
                <span className="block mt-2 text-blue-600 dark:text-blue-500">Feel free to contact me.</span>
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] sm:text-[10px] tracking-[0.3em] font-bold uppercase text-zinc-500">Headquarters</span>
                  <span className="text-base sm:text-lg font-semibold">Coimbatore, Tamil Nadu, India</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] sm:text-[10px] tracking-[0.3em] font-bold uppercase text-zinc-500">Email</span>
                  <a href="mailto:rohithips296@gmail.com" className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-500 hover:underline transition-colors break-all">
                    rohithips296@gmail.com
                  </a>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] sm:text-[10px] tracking-[0.3em] font-bold uppercase text-zinc-500">Phone</span>
                  <a href="tel:+919750565041" className="text-base sm:text-lg font-semibold text-blue-600 dark:text-blue-500 hover:underline transition-colors">
                    +91 97505 65041
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Contact Form */}
            <div className={`transition-all duration-1000 delay-300 ${visibleSections.contact ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
              <form onSubmit={handleFormSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[9px] sm:text-[10px] font-black tracking-[0.25em] uppercase text-zinc-500 px-1">Your Name</label>
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
                    <label className="text-[9px] sm:text-[10px] font-black tracking-[0.25em] uppercase text-zinc-500 px-1">Email Address</label>
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
                  <label className="text-[9px] sm:text-[10px] font-black tracking-[0.25em] uppercase text-zinc-500 px-1">Your Message</label>
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

                {formStatus?.success && (
                  <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/30">
                    <p className="text-xs sm:text-sm font-black tracking-[0.15em] text-green-500 uppercase">
                      ✓ Message sent successfully. I'll get back to you soon!
                    </p>
                  </div>
                )}
                {formStatus?.error && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                    <p className="text-xs sm:text-sm font-black tracking-[0.15em] text-red-500 uppercase">
                      ✗ Failed to send message. Please try again.
                    </p>
                  </div>
                )}

                <button 
                  type="submit"
                  disabled={formStatus?.loading}
                  className="w-full py-4 sm:py-4.5 rounded-xl font-black text-xs sm:text-sm tracking-[0.3em] uppercase text-white bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-500 shadow-xl shadow-blue-600/10 hover:shadow-blue-600/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 select-none"
                >
                  {formStatus?.loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default About;