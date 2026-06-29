// src/pages/Home.jsx
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import { Star } from "lucide-react";
import emailjs from '@emailjs/browser';

const Home = () => {
  const { isDark } = useDarkMode();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);

  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const aboutUsRef = useRef(null);
  const contactFormRef = useRef(null);

  const [aboutActive, setAboutActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);
  const [testimonialsActive, setTestimonialsActive] = useState(false);
  const [aboutUsActive, setAboutUsActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);
  const [formStatus, setFormStatus] = useState({ loading: false, success: false, error: false });

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const handleScrollProgress = () => {
      setScrollYPosition(window.scrollY);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScrollProgress);
    return () => window.removeEventListener("scroll", handleScrollProgress);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    };

    const createObserver = (setActivityState) => {
      return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActivityState(true);
          }
        });
      }, observerOptions);
    };

    const aboutObserver = createObserver(setAboutActive);
    const projectsObserver = createObserver(setProjectsActive);
    const testimonialsObserver = createObserver(setTestimonialsActive);
    const aboutUsObserver = createObserver(setAboutUsActive);
    const contactObserver = createObserver(setContactActive);

    if (aboutRef.current) aboutObserver.observe(aboutRef.current);
    if (projectsRef.current) projectsObserver.observe(projectsRef.current);
    if (testimonialsRef.current) testimonialsObserver.observe(testimonialsRef.current);
    if (aboutUsRef.current) aboutUsObserver.observe(aboutUsRef.current);
    if (contactFormRef.current) contactObserver.observe(contactFormRef.current);

    return () => {
      if (aboutRef.current) aboutObserver.unobserve(aboutRef.current);
      if (projectsRef.current) projectsObserver.unobserve(projectsRef.current);
      if (testimonialsRef.current) testimonialsObserver.unobserve(testimonialsRef.current);
      if (aboutUsRef.current) aboutUsObserver.unobserve(aboutUsRef.current);
      if (contactFormRef.current) contactObserver.unobserve(contactFormRef.current);
    };
  }, []);

  const portfolioProjects = [
    {
      id: 1,
      title: "Brand Identity",
      category: "Identity",
      slug: "brand-identity",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
      logo: (
        <svg className="w-16 h-16 text-zinc-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 12l10 10 10-10L12 2zm0 4.5L17.5 12 12 17.5 6.5 12 12 6.5z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Monogram Design",
      category: "Monogram",
      slug: "monogram",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
      logo: (
        <svg className="w-20 h-20 text-zinc-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 4h7v16H4V4zm9 0h7v8h-7V4zm0 10h7v6h-7v-6z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Digital Ecosystem",
      category: "Development",
      slug: "digital-ecosystem",
      image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
      logo: (
        <svg className="w-16 h-16 text-zinc-500" viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Art Direction",
      category: "Creative",
      slug: "art-direction",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop",
      logo: (
        <svg className="w-16 h-16 text-zinc-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 22h20L12 2zm0 5l6.5 11.5h-13L12 7z"/>
        </svg>
      )
    }
  ];

  const clientTestimonials = [
    {
      id: 1,
      name: "Alexander Wright",
      position: "Product Director",
      company: "SuperCo Corp",
      rating: 5,
      feedback: "Transformed our complex web infrastructure into a highly dense, interactive experience. The frontend architecture executed using React and Vite exceeded our strict design standards and processing performance targets."
    },
    {
      id: 2,
      name: "Elena Rostova",
      position: "Managing Director",
      company: "BlendEcosystems",
      rating: 5,
      feedback: "An exceptional blend of clean graphic design and modern development. Delivered an ultra-clean, minimalist interface framework that significantly optimized user onboarding interactions and platform stability."
    },
    {
      id: 3,
      name: "Marcus Vance",
      position: "Tech Lead",
      company: "Nexus Labs",
      rating: 5,
      feedback: "Rohith is a rare talent who bridges the gap between high-fidelity design layouts and production-ready full-stack systems seamlessly. Core responsive processing saw an immediate leap forward under his integration."
    },
    {
      id: 4,
      name: "Sarah Jenkins",
      position: "Creative Head",
      company: "Aura Studio",
      rating: 5,
      feedback: "The level of professionalism and attention to pixel-perfect micro-interactions makes working together an incredible asset. An absolute masterclass in user interface elegance and performance-oriented design."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % clientTestimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [clientTestimonials.length]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ loading: true, success: false, error: false });
    
    // CRITICAL: Replace these with your actual EmailJS credentials
    emailjs.sendForm(
      'YOUR_SERVICE_ID', 
      'YOUR_TEMPLATE_ID', 
      e.target, 
      'YOUR_PUBLIC_KEY'
    )
    .then(() => {
      setFormStatus({ loading: false, success: true, error: false });
      e.target.reset();
      setTimeout(() => setFormStatus({ loading: false, success: false, error: false }), 5000);
    })
    .catch(() => {
      setFormStatus({ loading: false, success: false, error: true });
      setTimeout(() => setFormStatus({ loading: false, success: false, error: false }), 5000);
    });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        html {
          scroll-behavior: smooth !important;
        }
      `}} />

      <section className={`min-h-0 md:min-h-screen flex flex-col justify-between px-4 relative overflow-hidden ${isDark ? 'bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-900'}`}>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:3rem_3rem] md:bg-[size:4rem_4rem]" />
        
        <div className="max-w-7xl mx-auto text-center relative z-10 w-full pt-6 md:pt-12 flex flex-col justify-between min-h-0 md:min-h-screen">
          
          <div>
            <p className={`text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] font-medium mt-4 mb-2 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
              Crafting Digital Goods Since — Y-2017
            </p>
          </div>
          
          <div className={`flex-1 flex justify-center items-center transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} overflow-visible py-8 md:py-4`}>
            <div className="relative inline-flex flex-col justify-center items-center select-none w-full mx-auto overflow-visible">
              
              <h1 className={`font-sans uppercase text-center flex flex-col items-center z-0 scale-y-105 tracking-[-0.05em] sm:tracking-[-0.06em] leading-[0.80] sm:leading-[0.72] text-blue-600 dark:text-blue-500 font-[1000]`}>
                
                <span className="text-[19vw] sm:text-[11rem] md:text-[15rem] lg:text-[18rem] xl:text-[21rem]">
                  ROHITH
                </span>
                
                <span className="text-[9.5vw] sm:text-[5.5rem] md:text-[7.5rem] lg:text-[9rem] xl:text-[10.5rem] tracking-[-0.04em] mt-0 sm:mt-3 md:mt-6">
                  SATHEESHKUMAR
                </span>
                
              </h1>

              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[28vw] h-[39vw] sm:w-44 sm:h-[15.5rem] md:w-56 md:h-[21rem] lg:w-72 lg:h-[27rem] rounded-full overflow-hidden shadow-none md:shadow-2xl transition-all duration-500 hover:scale-105 select-none z-10">
                <img 
                  src="./my-pic.jpg" 
                  alt="Rohith Satheeshkumar" 
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          </div>

          <div className="hidden md:flex pb-4 flex-col items-center justify-end z-20">
            <div className={`flex flex-col items-center gap-2 ${isDark ? 'text-zinc-500' : 'text-zinc-400'} text-[9px] tracking-[0.3em] font-medium`}>
              <span>SCROLL DOWN</span>
              <div className="relative w-[1.5px] h-12 overflow-hidden bg-zinc-200/50 dark:bg-zinc-800/50 rounded-full">
                <div 
                  className="absolute left-0 w-full h-full rounded-full bg-blue-600"
                  style={{
                    animation: 'scrollUpLine 2s cubic-bezier(0.4, 0, 0.2, 1) infinite',
                  }}
                />
              </div>
              <style dangerouslySetInnerHTML={{__html: `
                @keyframes scrollUpLine {
                  0% { transform: translateY(100%); }
                  50% { transform: translateY(0%); }
                  100% { transform: translateY(-100%); }
                }
              `}} />
            </div>
          </div>

        </div>
      </section>

      <div 
        ref={aboutRef}
        className={`py-12 sm:py-20 px-6 relative z-10 transition-all duration-1000 ease-out ${
          aboutActive 
            ? "opacity-100 translate-y-0 scale-100" 
            : "opacity-0 translate-y-16 scale-[0.98]"
        } ${isDark ? 'bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-900'}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="flex justify-center items-center mb-6 sm:mb-8">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 9L22 12L15 15L12 22L9 15L2 12L9 9L12 2Z"/>
            </svg>
          </div>
          
          <p className={`text-base sm:text-2xl md:text-3xl max-w-3xl mx-auto leading-relaxed font-normal tracking-wide mb-12 ${isDark ? 'text-white' : 'text-zinc-800'}`}>
            I'm <span className="font-bold text-blue-600">Rohith Satheeshkumar</span> — a full-stack developer and professional designer passionately creating minimalist, high-performance digital experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/projects"
              className="w-full sm:w-auto px-10 py-4 rounded-full font-semibold text-sm tracking-widest uppercase transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 hover:-translate-y-0.5"
            >
              View Projects
            </Link>
            <Link
              to="/contact"
              className={`w-full sm:w-auto px-10 py-4 rounded-full font-semibold text-sm tracking-widest uppercase border transition-all duration-300 hover:-translate-y-0.5 ${
                isDark 
                  ? 'border-zinc-800 text-white hover:border-blue-500 hover:text-blue-500' 
                  : 'border-zinc-300 text-zinc-800 hover:border-blue-600 hover:text-blue-600'
              }`}
            >
              Contact Me
            </Link>
          </div>

        </div>
      </div>

      <section 
        ref={projectsRef}
        className={`py-32 px-6 md:px-12 lg:px-20 transition-all duration-[1200ms] cubic-bezier(0.2, 0.8, 0.2, 1) ${
          projectsActive 
            ? "opacity-100 translate-y-0" 
            : "opacity-0 translate-y-24"
        } ${isDark ? 'bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-900'}`}
      >
        <div className="max-w-7xl mx-auto">
          
          <div className="flex items-center justify-between gap-8 mb-20 select-none">
            <h2 className="text-4xl md:text-5xl font-[1000] font-sans tracking-tight uppercase text-blue-600 whitespace-nowrap scale-y-105">
              PROJECTS
            </h2>
            <div className="relative flex-1 h-[2px] bg-zinc-200 dark:bg-zinc-800 overflow-hidden rounded-full">
              <div 
                className="absolute top-0 right-0 h-full bg-blue-600 transition-transform duration-100 ease-out"
                style={{
                  width: "100%",
                  transform: `translateX(${scrollProgress}%)`,
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
            {portfolioProjects.map((project, idx) => (
              <div 
                key={project.id} 
                className={`flex flex-col gap-4 transition-all duration-1000 ease-out`}
                style={{ 
                  transitionDelay: projectsActive ? `${idx * 150}ms` : '0ms',
                  transform: projectsActive ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.97)',
                  opacity: projectsActive ? 1 : 0
                }}
              >
                
                <Link 
                  to={`/projects/${project.slug}`}
                  className="group relative block aspect-[4/3] w-full overflow-hidden bg-zinc-900 rounded-2xl sm:rounded-3xl shadow-xl transition-all duration-500"
                >
                  <div className="absolute inset-0 w-full h-full grayscale opacity-40 group-hover:opacity-20 group-hover:scale-[1.03] mix-blend-luminosity transition-all duration-700 ease-out">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none transition-transform duration-500 group-hover:scale-95 opacity-80 group-hover:opacity-100">
                    {project.logo}
                  </div>

                  <div className="absolute bottom-0 left-0 bg-blue-600 text-white px-8 py-3.5 text-xs font-black tracking-[0.2em] uppercase rounded-tr-xl transition-all duration-300 translate-y-full group-hover:translate-y-0 select-none shadow-lg">
                    {project.category}
                  </div>

                  <div className="absolute inset-0 border border-black/10 dark:border-white/5 pointer-events-none rounded-2xl sm:rounded-3xl" />
                </Link>

                <div className="flex justify-between items-center px-2 pt-1 select-none">
                  <h3 className="text-lg md:text-xl font-extrabold tracking-tight uppercase text-zinc-900 dark:text-zinc-100">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-zinc-400 dark:text-zinc-500">
                    // 0{project.id}
                  </span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    {/* PROFESSIONAL INFINITE TRACK LOOP TESTIMONIALS SECTION */}
<section 
  ref={testimonialsRef}
  className={`py-32 px-4 md:px-12 lg:px-20 relative overflow-hidden transition-all duration-1000 ease-out ${
    testimonialsActive ? "opacity-100" : "opacity-0"
  } ${isDark ? 'bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-900'}`}
>
  {/* Global custom keyframe injection for seamless hardware-accelerated ticking layout mechanics */}
  <style dangerouslySetInnerHTML={{__html: `
    @keyframes infiniteHorizontalLoop {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-infinite-ticker {
      animation: infiniteHorizontalLoop 35s linear infinite;
    }
    .animate-infinite-ticker:hover {
      animation-play-state: paused;
    }
  `}} />

  <div className="max-w-7xl mx-auto">
    
    {/* Synchronized Header Tracking Matching Projects Animation */}
    <div 
      className={`flex items-center justify-between gap-8 mb-24 select-none transition-all duration-1000 ease-out ${
        testimonialsActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-[1000] font-sans tracking-tight uppercase whitespace-nowrap scale-y-105 text-blue-600 dark:text-blue-500">
        TESTIMONIALS
      </h2>
      <div className="relative flex-1 h-[2px] bg-zinc-200 dark:bg-zinc-800 overflow-hidden rounded-full">
        <div 
          className="absolute top-0 right-0 h-full bg-blue-600 dark:bg-blue-500 transition-transform duration-100 ease-out"
          style={{
            width: "100%",
            transform: `translateX(${scrollProgress}%)`,
          }}
        />
      </div>
    </div>

    {/* Infinite Ticker Canvas Viewport Container Mask */}
    <div 
      className={`relative w-full overflow-visible flex items-center transition-all duration-[1200ms] delay-150 ease-out ${
        testimonialsActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      
      
      {/* Marquee Motion Track Row containing exact identical data duplication tracks for seamless looping */}
      <div className="flex gap-6 w-max animate-infinite-ticker cursor-grab active:cursor-grabbing py-4">
        
        {/* Double Map array distribution engine ensuring infinite data coverage */}
        {[...clientTestimonials, ...clientTestimonials].map((item, idx) => (
          <div 
            key={`${item.id}-${idx}`} 
            className="w-[320px] sm:w-[420px] md:w-[460px] flex-shrink-0"
          >
            
            {/* Classic Luxury Showcase Box Layout */}
            <div className={`w-full p-8 md:p-10 rounded-2xl border backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 ${
              isDark 
                ? 'bg-zinc-900/20 border-white/5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] hover:border-blue-500/20 hover:bg-zinc-900/40' 
                : 'bg-white/40 border-black/5 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.03)] hover:border-blue-600/20 hover:bg-white/70'
            }`}>
              
              {/* High-density counter layout parameter labels */}
              <div className="flex justify-between items-start mb-6 select-none">
                {/* 5-Star Indicator Module */}
                <div className="flex items-center gap-0.5 text-blue-600 dark:text-blue-500">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current stroke-[1.5]" />
                  ))}
                </div>
                <span className={`text-[9px] font-black tracking-[0.2em] font-sans ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
                  // 0{(item.id)}
                </span>
              </div>

              {/* Core Testimonial Feedback String */}
              <p className={`text-sm sm:text-base font-normal leading-relaxed tracking-wide font-sans mb-8 ${
                isDark ? 'text-white' : 'text-zinc-700'
              }`}>
                "{item.feedback}"
              </p>

              {/* Minimal Fine Line Segment Separator */}
              <div className={`w-10 h-px mb-6 ${isDark ? 'bg-white/10' : 'bg-black/10'}`} />

              {/* User Identity Info Blocks */}
              <div className="select-none flex flex-col">
                <h3 className={`text-sm font-black tracking-tight uppercase ${
                  isDark ? 'text-white' : 'text-zinc-900'
                }`}>
                  {item.name}
                </h3>
                <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-blue-600 dark:text-blue-500 mt-1">
                  {item.company} <span className={`${isDark ? 'text-zinc-700' : 'text-zinc-300'} mx-1`}>/</span> {item.position}
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>

  </div>
</section>

      {/* ABOUT US SECTION - Added after testimonials */}
     <section 
  ref={aboutUsRef}
  className={`py-32 px-6 md:px-12 lg:px-20 transition-all duration-[1200ms] ease-out ${
    aboutUsActive 
      ? "opacity-100 translate-y-0" 
      : "opacity-0 translate-y-24"
  } ${isDark ? 'bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-900'}`}
>
  <div className="max-w-6xl mx-auto">
    
    {/* Section Header */}
    <div 
      className={`flex items-center justify-between gap-8 mb-20 select-none transition-all duration-1000 ease-out ${
        aboutUsActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <h2 className={`text-4xl md:text-5xl font-[1000] font-sans tracking-tight uppercase whitespace-nowrap scale-y-105 ${isDark ? 'text-blue-500' : 'text-blue-600'}`}>
        ABOUT ME
      </h2>
      <div className="relative flex-1 h-[2px] bg-zinc-200 dark:bg-zinc-800 overflow-hidden rounded-full">
        <div 
          className={`absolute top-0 right-0 h-full transition-transform duration-100 ease-out ${isDark ? 'bg-blue-500' : 'bg-blue-600'}`}
          style={{
            width: "100%",
            transform: `translateX(${scrollProgress}%)`,
          }}
        />
      </div>
    </div>

    {/* Two Column Layout */}
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      
      {/* Left Column - Passion Statement */}
      <div 
        className={`transition-all duration-1000 delay-200 ease-out lg:sticky lg:top-32 ${
          aboutUsActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <p className={`text-base sm:text-lg leading-relaxed mb-6 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
          My passion lies in the intersection of art and technology, creating visually captivating interfaces and elevating overall user digital experiences. As a Frontend Developer, I specialize in turning Figma designs into pixel-perfect, responsive applications that balance aesthetics with performance.
        </p>
        
        <p className={`text-base sm:text-lg leading-relaxed mb-8 ${isDark ? 'text-zinc-300' : 'text-zinc-700'}`}>
          I'm comfortable collaborating with design and backend teams, applying modern tooling such as React.js, Tailwind CSS, Git, and Node.js, consistently focusing on accessibility, code quality, and maintainability to deliver production-ready web applications.
        </p>

        {/* Education Info */}
        <div className={`p-6 rounded-2xl border backdrop-blur-sm ${
          isDark 
            ? 'bg-zinc-900/30 border-zinc-800/80' 
            : 'bg-white/50 border-zinc-200/80'
        }`}>
          <h3 className={`text-sm font-bold tracking-[0.2em] uppercase mb-3 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            Education
          </h3>
          <p className={`text-base font-semibold mb-1 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
            B.Tech in Artificial Intelligence & Machine Learning
          </p>
          <p className={`text-sm mb-2 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            SNS College of Technology • Coimbatore • 2026
          </p>
          <p className={`text-sm font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
            CGPA: 8.68
          </p>
        </div>
      </div>

      {/* Right Column - Premium React Bits Styled Scroll Stack Layout */}
      <div 
        className={`transition-all duration-1000 delay-400 ease-out ${
          aboutUsActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <h3 className={`text-sm font-bold tracking-[0.2em] uppercase mb-8 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
          Technical Skills
        </h3>

        {/* Scroll Stack Container Container Tracking Component Mechanics */}
<div className="relative flex flex-col gap-6">
  {[
    { 
      name: "React.js", 
      description: "Frontend library",
      icon: (
        <svg className="w-8 h-8 text-[#61DAFB]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
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
    <svg className="w-8 h-8 text-[#F7DF1E]" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3 3h18v18H3V3zm16.525 13.707c-.142.884-.619 1.303-1.458 1.303-.742 0-1.18-.342-1.304-.994-.136-.757.155-1.18.846-1.503l.613-.258c1.123-.478 1.639-1.058 1.42-2.316-.142-.846-.749-1.4-1.775-1.4-1.342 0-2.103.697-2.258 1.748l1.4.239c.116-.594.439-.833.942-.833.51 0 .781.245.884.716.142.69-.174 1.026-.833 1.31l-.658.277c-1.233.523-1.755 1.194-1.516 2.523.29 1.581 1.613 2.149 3.052 2.149 1.58 0 2.678-.832 2.884-2.226l-1.394-.245zm-7.148-.155c-.11.645-.47.942-.987.942-.49 0-.742-.226-.852-.697-.135-.587.123-.949.787-1.207l.53-.206c1.025-.407 1.477-.897 1.297-2.02-.143-.858-.781-1.348-1.69-1.348-1.252 0-1.936.613-2.11 1.562l1.323.251c.09-.478.342-.69.78-.69.42 0 .646.193.723.587.11.568-.123.845-.71 1.1l-.542.213c-1.11.445-1.561.987-1.368 2.13.24 1.38 1.446 1.89 2.73 1.89 1.393 0 2.393-.684 2.586-1.845l-1.322-.252z"/>
    </svg>
  )
},
{ 
  name: "HTML/CSS", 
  description: "Markup & Styling",
  icon: (
    <svg className="w-8 h-8" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="htmlGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E34F26" />
          <stop offset="100%" stopColor="#EF652A" />
        </linearGradient>
      </defs>
      <path fill="url(#htmlGradient)" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11h-2.61l.294 3.928L12 19.288l5.374-1.53L18.976 6.57 5.152 6.569z"/>
    </svg>
  )
},
    { 
      name: "Figma", 
      description: "UI/UX Design tool",
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <svg className="w-8 h-8 text-blue-600 dark:text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
        <svg className="w-8 h-8 text-zinc-900 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
      className={`rounded-2xl py-7 px-6 border backdrop-blur-md sticky transition-all duration-500 shadow-xl flex items-center justify-between ${
        isDark 
          ? 'bg-zinc-900 border-zinc-800 text-white shadow-[0_20px_50px_rgba(0,0,0,0.3)]' 
          : 'bg-white border-zinc-200 text-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.04)]'
      }`}
      style={{
        // Staggered React Bits Stack Positioning logic
        top: `calc(7rem + ${idx * 24}px)`,
        transform: aboutUsActive 
          ? `translateY(0) scale(${1 - (5 - idx) * 0.012})` 
          : 'translateY(40px) scale(0.95)',
        opacity: aboutUsActive ? 1 : 0,
        transitionDelay: aboutUsActive ? `${idx * 75}ms` : '0ms',
        zIndex: idx + 1
      }}
    >
      <div className="flex items-center gap-5">
        {/* Tech Brand Vector Icon */}
        <div className="flex-shrink-0 select-none">
          {skill.icon}
        </div>
        
        <div className="select-none">
          <h4 className="font-black text-sm uppercase tracking-wider">{skill.name}</h4>
          <p className={`text-xs mt-0.5 font-medium ${isDark ? 'text-zinc-400' : 'text-zinc-500'}`}>{skill.description}</p>
        </div>
      </div>

      {/* Clean high-density comment counter identifier tags */}
      <span className={`text-[10px] font-black tracking-[0.2em] uppercase select-none hidden sm:inline ${
        isDark ? 'text-zinc-500' : 'text-zinc-400'
      }`}>
        // 0{idx + 1}
      </span>
    </div>
  ))}
</div>

        {/* Additional Skills Tags */}
        <div className="mt-16 relative z-30">
          <h4 className={`text-xs font-bold tracking-[0.2em] uppercase mb-4 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Also Proficient In
          </h4>
          <div className="flex flex-wrap gap-2">
            {["C", "C++", "Python", "Canva", "Adobe Photoshop", "Microsoft Excel"].map((skill) => (
              <span 
                key={skill}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 hover:scale-105 ${
                  isDark 
                    ? 'bg-zinc-900 text-zinc-300 border border-zinc-800 hover:border-blue-500' 
                    : 'bg-white text-zinc-700 border border-zinc-200 hover:border-blue-600'
                }`}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

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


{/* CONTACT SECTION - Exact architectural replica of image_a327f5.png */}
<section 
  ref={contactFormRef}
  className={`py-32 px-6 md:px-12 lg:px-20 relative overflow-hidden transition-all duration-[1200ms] ease-out ${
    contactActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
  } ${isDark ? 'bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-900'}`}
>
  <div className="max-w-7xl mx-auto">
    
    {/* Section Header Track matching your structural design theme */}
    <div 
      className={`flex items-center justify-between gap-8 mb-20 select-none transition-all duration-1000 ease-out ${
        contactActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-[1000] font-sans tracking-tight uppercase whitespace-nowrap scale-y-105 text-blue-600 dark:text-blue-500">
        CONTACT
      </h2>
      <div className="relative flex-1 h-[2px] bg-zinc-200 dark:bg-zinc-800 overflow-hidden rounded-full">
        <div 
          className="absolute top-0 right-0 h-full bg-blue-600 dark:bg-blue-500 transition-transform duration-100 ease-out"
          style={{
            width: "100%",
            transform: `translateX(${scrollProgress}%)`,
          }}
        />
      </div>
    </div>

    {/* Two Column Form Grid Area */}
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      
      {/* Left Column: Contextual Meta Information Blocks */}
      <div 
        className={`flex flex-col gap-8 transition-all duration-1000 delay-200 ease-out ${
          contactActive ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        <h3 className="text-2xl sm:text-3xl font-normal leading-snug tracking-wide font-sans max-w-md">
          Looking to start a project or you need consultation? Feel free to contact me.
        </h3>
        
        <div className="flex flex-col gap-2 text-base font-normal tracking-wide mt-4">
          <span className={`${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
            Coimbatore, Tamil Nadu, India
          </span>
          <a 
            href="mailto:rohithips296@gmail.com" 
            className="text-blue-600 dark:text-blue-500 hover:underline w-max transition-all"
          >
            rohithips296@gmail.com
          </a>
          <a 
            href="tel:+919750565041" 
            className="text-blue-600 dark:text-blue-500 hover:underline w-max transition-all"
          >
            +91 97505 65041
          </a>
        </div>
      </div>

      {/* Right Column: Premium Action Input Field Elements using EmailJS API */}
      <form 
        onSubmit={handleFormSubmit}
        className={`flex flex-col gap-4 w-full transition-all duration-1000 delay-400 ease-out ${
          contactActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input 
            type="text" 
            name="user_name"
            required
            placeholder="Your Name"
            className={`w-full px-5 py-4 rounded-xl border text-sm transition-all outline-none font-medium ${
              isDark 
                ? 'bg-zinc-900/50 border-zinc-800 text-white placeholder-zinc-500 focus:border-blue-500' 
                : 'bg-zinc-200/60 border-transparent text-zinc-900 placeholder-zinc-500 focus:border-blue-600 focus:bg-white'
            }`}
          />
          <input 
            type="email" 
            name="user_email"
            required
            placeholder="Email@domain.com"
            className={`w-full px-5 py-4 rounded-xl border text-sm transition-all outline-none font-medium ${
              isDark 
                ? 'bg-zinc-900/50 border-zinc-800 text-white placeholder-zinc-500 focus:border-blue-500' 
                : 'bg-zinc-200/60 border-transparent text-zinc-900 placeholder-zinc-500 focus:border-blue-600 focus:bg-white'
            }`}
          />
        </div>

        <textarea 
          name="message"
          required
          rows={6}
          placeholder="Message..."
          className={`w-full px-5 py-4 rounded-xl border text-sm transition-all outline-none font-medium resize-none ${
            isDark 
              ? 'bg-zinc-900/50 border-zinc-800 text-white placeholder-zinc-500 focus:border-blue-500' 
              : 'bg-zinc-200/60 border-transparent text-zinc-900 placeholder-zinc-500 focus:border-blue-600 focus:bg-white'
          }`}
        />

        {/* Dynamic Submission Callback Status Logs */}
        {formStatus.success && (
          <p className="text-xs font-bold tracking-wider text-green-500 uppercase px-1">
            // Message sent successfully. Thank you.
          </p>
        )}
        {formStatus.error && (
          <p className="text-xs font-bold tracking-wider text-red-500 uppercase px-1">
            // Error transmission failure. Please retry.
          </p>
        )}

        <button 
          type="submit"
          disabled={formStatus.loading}
          className="w-full py-4 rounded-xl font-bold text-sm tracking-widest uppercase text-white bg-blue-600 hover:bg-blue-700 disabled:bg-zinc-500 shadow-xl shadow-blue-600/10 hover:shadow-blue-600/20 transition-all duration-300"
        >
          {formStatus.loading ? 'Sending...' : 'Send'}
        </button>
      </form>

    </div>
  </div>
</section>
    </>
  );
};

export default Home;