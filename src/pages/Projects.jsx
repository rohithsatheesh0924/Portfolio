// src/pages/Projects.jsx
import React, { useEffect, useState, useRef } from "react";
import Navbar from "../components/Navbar";
import { useDarkMode } from "../context/DarkModeContext";
import { ExternalLink, Layout } from "lucide-react";

// Performance-optimized Progressive Counting Sub-Component
const StatCounter = ({ targetValue, duration = 2000, triggerAnimation }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggerAnimation) return;

    const numericTarget = parseInt(targetValue, 10);
    if (isNaN(numericTarget)) {
      setCount(targetValue);
      return;
    }

    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // smooth easeOutQuad progress mapping function
      const easeProgress = progress * (2 - progress);
      
      setCount(Math.floor(easeProgress * numericTarget));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [targetValue, duration, triggerAnimation]);

  const suffix = typeof targetValue === "string" ? targetValue.replace(/[0-9]/g, "") : "";
  
  return <>{count}{suffix}</>;
};

const Projects = () => {
  const { isDark } = useDarkMode();
  const [visibleSections, setVisibleSections] = useState({
    hero: false,
    featured: false,
    projects: false,
    marquee: false,
    cta: false,
    footer: false
  });
  const [activeFilter, setActiveFilter] = useState("All");

  const heroRef = useRef(null);
  const featuredRef = useRef(null);
  const projectsRef = useRef(null);
  const marqueeRef = useRef(null);
  const ctaRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.10,
      rootMargin: "0px 0px -40px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const section = entry.target.dataset.section;
          if (section) {
            setVisibleSections(prev => ({ ...prev, [section]: true }));
          }
        }
      });
    }, observerOptions);

    const refs = [heroRef, featuredRef, projectsRef, marqueeRef, ctaRef, footerRef];
    const sections = ['hero', 'featured', 'projects', 'marquee', 'cta', 'footer'];
    
    refs.forEach((ref, index) => {
      if (ref.current) {
        ref.current.dataset.section = sections[index];
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // 12 Real Projects Data from Resume
  const allProjects = [
    {
      id: 1,
      title: "DS Future World",
      category: "E-Commerce",
      subtitle: "E-Commerce Platform",
      description: "Developed a responsive e-commerce platform with product management, order processing, and admin dashboard functionalities. Integrated APIs and optimized performance for an enhanced user experience.",
      tech: ["React.js", "Node.js", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop",
      liveUrl: "https://dsfutureworld.com/",
      adminUrl: "https://admin.dsfutureworld.com/",
      githubUrl: "#",
      year: "2025",
      featured: true
    },
    {
      id: 2,
      title: "Hira Fashions",
      category: "E-Commerce",
      subtitle: "Fashion E-Commerce Platform",
      description: "Built a complete fashion e-commerce solution with user-friendly shopping interface and comprehensive admin dashboard for inventory and order management.",
      tech: ["React.js", "Firebase", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&auto=format&fit=crop",
      liveUrl: "https://hirafashions.web.app/",
      adminUrl: "https://admin-hirafashions.web.app/",
      githubUrl: "#",
      year: "2025",
      featured: true
    },
    {
      id: 3,
      title: "Vishakhan Solution",
      category: "Business",
      subtitle: "Real Estate Photo Editing",
      description: "Developed a responsive business website showcasing real estate photo editing services, portfolio, and inquiry management features. Optimized performance, SEO, and mobile responsiveness.",
      tech: ["React.js", "Tailwind CSS", "SEO"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
      liveUrl: "https://www.vishakhansolution.in/",
      githubUrl: "#",
      year: "2025",
      featured: true
    },
    {
      id: 4,
      title: "Chefz Partner",
      category: "Management",
      subtitle: "Restaurant Management Platform",
      description: "Developed a restaurant management platform with order, subscription, and event booking features. Built responsive dashboards, integrated APIs, and optimized performance.",
      tech: ["React.js", "Node.js", "MongoDB", "APIs"],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop",
      liveUrl: "https://chefzpartner.com/",
      githubUrl: "#",
      year: "2024",
      featured: true
    },
    {
      id: 5,
      title: "The Sanvis",
      category: "Business",
      subtitle: "Corporate Website",
      description: "Professional corporate website with modern design, responsive layout, and optimized performance for enhanced brand presence and user engagement.",
      tech: ["React.js", "Tailwind CSS", "Vercel"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
      liveUrl: "https://thesanvis.com/",
      githubUrl: "#",
      year: "2024",
      featured: false
    },
    {
      id: 6,
      title: "TV Kalvimaiyam",
      category: "Education",
      subtitle: "Educational Platform",
      description: "Educational content platform featuring video courses, learning resources, and interactive modules for students and educators.",
      tech: ["React.js", "Firebase", "YouTube API"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop",
      liveUrl: "https://tvkkalvimaiyam.com/",
      githubUrl: "#",
      year: "2024",
      featured: false
    },
    {
      id: 7,
      title: "Maharaja ELC",
      category: "Business",
      subtitle: "Business Management System",
      description: "Comprehensive business management platform with inventory tracking, customer management, and analytics dashboard for data-driven decisions.",
      tech: ["React.js", "Firebase", "Node.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
      liveUrl: "https://maharajaelc.web.app",
      githubUrl: "#",
      year: "2024",
      featured: false
    },
    {
      id: 8,
      title: "Nexarco",
      category: "Business",
      subtitle: "Corporate Solutions Platform",
      description: "Modern corporate website showcasing business solutions, services, and client portfolio with smooth animations and responsive design.",
      tech: ["React.js", "Tailwind CSS", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&auto=format&fit=crop",
      liveUrl: "https://nexarco.com/",
      githubUrl: "#",
      year: "2024",
      featured: false
    },
    {
      id: 9,
      title: "Sync Rabim",
      category: "Business",
      subtitle: "Business Collaboration Platform",
      description: "Collaborative platform for business teams with project management, task tracking, and real-time communication features.",
      tech: ["React.js", "Socket.IO", "MongoDB", "Express"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
      liveUrl: "https://syncrabim.com",
      githubUrl: "#",
      year: "2024",
      featured: false
    },
    {
      id: 10,
      title: "Aerial Vision",
      category: "Technology",
      subtitle: "Drone Services Platform",
      description: "Professional drone services platform showcasing aerial photography, videography services, and portfolio with booking functionality.",
      tech: ["React.js", "Vercel", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&auto=format&fit=crop",
      liveUrl: "https://aerial-vision250.vercel.app/",
      githubUrl: "#",
      year: "2024",
      featured: false
    },
    {
      id: 11,
      title: "Project Tracking CRM",
      category: "Management",
      subtitle: "CRM & Project Management",
      description: "Currently developing a comprehensive CRM system with project tracking, client management, task automation, and analytics dashboard.",
      tech: ["React.js", "Node.js", "MongoDB", "Express", "JWT"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop",
      liveUrl: "#",
      githubUrl: "#",
      year: "2025",
      featured: false,
      inProgress: true
    }
  ];

  const categories = ["All", "E-Commerce", "Business", "Management", "Education", "Technology"];
  
  const filteredProjects = activeFilter === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  const featuredProjects = allProjects.filter(p => p.featured);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? 'bg-zinc-950 text-white' : 'bg-zinc-50 text-zinc-900'}`}>
      <Navbar />
      
      {/* HERO SECTION */}
      <section 
        ref={heroRef}
        className={`py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-12 transition-all duration-1000 ${
          visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } ${isDark ? 'bg-zinc-950' : 'bg-zinc-50'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16 select-none">
            <p className={`text-[10px] sm:text-xs font-black tracking-[0.4em] uppercase mb-4 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
              Portfolio Showcase
            </p>
            <h1 className={`text-6xl sm:text-7xl md:text-8xl lg:text-[12rem] font-black tracking-tighter uppercase leading-none scale-y-110 ${isDark ? 'text-blue-500' : 'text-blue-600'}`}>
              PROJECTS
            </h1>
            
            <div className={`mt-6 flex justify-center transition-all duration-700 delay-300 ${visibleSections.hero ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <svg 
                className={`w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ${isDark ? 'text-blue-500' : 'text-blue-600'}`} 
                viewBox="0 0 24 24" 
                fill="currentColor"
              >
                <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
              </svg>
            </div>

            <p className={`mt-8 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg font-medium tracking-wide ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              A curated collection of <span className={`font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>12 production-grade projects</span> spanning e-commerce platforms, business solutions, and modern web applications.
            </p>
          </div>

          {/* Project Stats */}
          <div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto transition-all duration-1000 delay-500 ${
              visibleSections.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {[
              { label: "Total Projects", value: "12+" },
              { label: "Live Deployed", value: "10" },
              { label: "Technologies", value: "15+" },
              { label: "Years Experience", value: "02+" }
            ].map((stat, idx) => (
              <div 
                key={idx}
                className={`p-4 sm:p-6 rounded-2xl border backdrop-blur-sm text-center ${
                  isDark 
                    ? 'bg-zinc-900/30 border-zinc-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.3)]' 
                    : 'bg-white border-zinc-200/80 shadow-lg shadow-zinc-200/20'
                }`}
              >
                <p className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight scale-y-105 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                  <StatCounter 
                    targetValue={stat.value} 
                    duration={2500} 
                    triggerAnimation={visibleSections.hero} 
                  />
                </p>
                <p className={`text-[9px] sm:text-[10px] font-black tracking-[0.25em] uppercase mt-1 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS - Premium Editorial Scroll Stack Style */}
      <section 
        ref={featuredRef}
        className={`px-4 sm:px-6 lg:px-12 py-20 sm:py-32 transition-all duration-1000 ${
          visibleSections.featured ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } ${isDark ? 'bg-zinc-900/30' : 'bg-white/50'}`}
      >
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header with Classy Design */}
          <div className="flex items-center gap-6 mb-16 sm:mb-20">
            <div className="flex flex-col">
              <span className={`text-[10px] sm:text-xs font-black tracking-[0.4em] uppercase ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                Featured Selection
              </span>
              <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight uppercase leading-none mt-2 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
                Premium Work
              </h2>
            </div>
            <div className={`flex-1 h-px ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`} />
            <div className={`hidden sm:flex items-center gap-2 text-[10px] font-black tracking-[0.3em] uppercase ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
              <span>04</span>
              <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>Projects</span>
            </div>
          </div>

          {/* Featured Projects Scroll Stack Track Container */}
          <div className="relative flex flex-col gap-12 sm:gap-16">
            {featuredProjects.map((project, idx) => (
              <article
                key={project.id}
                className={`group relative rounded-3xl overflow-hidden border backdrop-blur-md sticky transition-all duration-500 shadow-2xl hover:shadow-3xl ${
                  isDark 
                    ? 'bg-gradient-to-br from-zinc-900/95 via-zinc-900/90 to-zinc-950/95 border-zinc-800/80 hover:border-blue-500/30 shadow-[0_30px_80px_rgba(0,0,0,0.5)]' 
                    : 'bg-gradient-to-br from-white/95 via-white/90 to-zinc-50/95 border-zinc-200/80 hover:border-blue-600/30 shadow-[0_30px_80px_rgba(0,0,0,0.08)]'
                }`}
                style={{ 
                  top: `calc(6rem + ${idx * 32}px)`,
                  transform: visibleSections.featured ? `scale(${1 - (featuredProjects.length - idx) * 0.015})` : 'scale(0.95)',
                  opacity: visibleSections.featured ? 1 : 0,
                  zIndex: idx + 1,
                  transitionDelay: visibleSections.featured ? `${idx * 100}ms` : '0ms'
                }}
              >
                <div className="grid lg:grid-cols-[1.2fr,1fr] gap-0">
                  
                  {/* Left Side - Image Display with No Filters */}
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[520px] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    
                    <div className={`absolute inset-0 bg-gradient-to-tr ${
                      isDark ? 'from-zinc-900/40 via-transparent to-transparent' : 'from-white/20 via-transparent to-transparent'
                    }`} />
                    
                    {/* Top Badges */}
                    <div className="absolute top-6 left-6 flex gap-3 z-10">
                      <div className={`px-4 py-2 rounded-full text-[10px] font-black tracking-[0.25em] uppercase backdrop-blur-xl ${
                        isDark ? 'bg-blue-500/90 text-white border border-blue-400/50' : 'bg-blue-600/90 text-white border border-blue-500/50'
                      } shadow-lg`}>
                        {project.category}
                      </div>
                      <div className={`px-4 py-2 rounded-full text-[10px] font-black tracking-[0.25em] uppercase backdrop-blur-xl ${
                        isDark ? 'bg-zinc-900/90 text-zinc-200 border border-zinc-700/50' : 'bg-white/90 text-zinc-800 border border-zinc-300/50'
                      } shadow-lg`}>
                        {project.year}
                      </div>
                    </div>

                    {/* Project Number Indicator */}
                    <div className={`absolute bottom-6 left-6 text-[80px] sm:text-[100px] lg:text-[120px] font-black leading-none tracking-tighter select-none pointer-events-none ${
                      isDark ? 'text-white/5' : 'text-zinc-900/5'
                    }`}>
                      0{project.id}
                    </div>
                  </div>

                  {/* Right Side - Content Panel */}
                  <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between relative z-10">
                    <div className="space-y-6">
                      <div>
                        <div className={`inline-block px-3 py-1 rounded-md text-[9px] font-black tracking-[0.3em] uppercase mb-4 ${
                          isDark ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'bg-blue-600/10 text-blue-600 border border-blue-600/20'
                        }`}>
                          {project.subtitle}
                        </div>
                        
                        <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase leading-tight mb-4 scale-y-105 ${
                          isDark ? 'text-white' : 'text-zinc-900'
                        }`}>
                          {project.title}
                        </h3>
                      </div>

                      <p className={`text-sm sm:text-base leading-relaxed font-medium tracking-wide ${
                        isDark ? 'text-zinc-300' : 'text-zinc-600'
                      }`}>
                        {project.description}
                      </p>

                      <div className="pt-6 border-t border-dashed border-zinc-200 dark:border-zinc-800">
                        <p className={`text-[9px] font-black tracking-[0.3em] uppercase mb-3 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                          Technology Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, i) => (
                            <span 
                              key={i}
                              className={`px-3 py-1.5 rounded-lg text-[10px] font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 ${
                                isDark 
                                  ? 'bg-zinc-800/60 text-zinc-300 border border-zinc-700/50 hover:border-blue-500/50 hover:text-blue-400' 
                                  : 'bg-zinc-100 text-zinc-700 border border-zinc-200 hover:border-blue-600/50 hover:text-blue-600'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-8">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn flex-1 py-4 rounded-xl font-black text-xs tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-2 hover:-translate-y-0.5 ${
                          isDark 
                            ? 'bg-blue-500 hover:bg-blue-400 text-white shadow-xl shadow-blue-500/20 hover:shadow-blue-400/30' 
                            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20 hover:shadow-blue-700/30'
                        }`}
                      >
                        <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-12" />
                        <span>Visit Live Site</span>
                      </a>
                      
                      {project.adminUrl && project.adminUrl !== "#" && (
                        <a 
                          href={project.adminUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group/btn flex-1 py-4 rounded-xl font-black text-xs tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-2 border-2 hover:-translate-y-0.5 ${
                            isDark 
                              ? 'border-zinc-700 hover:border-blue-500 text-zinc-300 hover:text-blue-400 hover:bg-zinc-900/50' 
                              : 'border-zinc-300 hover:border-blue-600 text-zinc-700 hover:text-blue-600 hover:bg-white'
                          }`}
                        >
                          <Layout className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
                          <span>Admin Panel</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FILTER TABS & PROJECTS GRID */}
      <section 
        ref={projectsRef}
        className={`px-4 sm:px-6 lg:px-12 py-16 transition-all duration-1000 ${
          visibleSections.projects ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } ${isDark ? 'bg-zinc-950' : 'bg-zinc-50'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <h3 className={`text-sm sm:text-base font-black tracking-[0.25em] uppercase font-sans scale-y-105 select-none ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              All Projects
            </h3>
            <div className={`flex-1 h-px ${isDark ? 'bg-zinc-800' : 'bg-zinc-200'}`} />
            <span className={`text-[10px] font-black tracking-[0.25em] uppercase select-none ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
              {filteredProjects.length} Projects
            </span>
          </div>

          <div className="flex flex-wrap gap-2 sm:gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-black tracking-widest uppercase border transition-all duration-300 hover:scale-105 ${
                  activeFilter === cat
                    ? isDark
                      ? 'bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-500/20'
                      : 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/20'
                    : isDark
                      ? 'bg-zinc-900/50 border-zinc-800 text-zinc-400 hover:border-blue-500/50 hover:text-blue-400'
                      : 'bg-white border-zinc-200 text-zinc-600 hover:border-blue-600/50 hover:text-blue-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* PROJECTS GRID CONTAINER */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <article
                key={project.id}
                className={`group relative rounded-3xl overflow-hidden border-2 backdrop-blur-md transition-all duration-700 shadow-2xl hover:scale-[1.02] hover:-translate-y-2 ${
                  isDark 
                    ? 'bg-gradient-to-br from-zinc-900 via-zinc-900 to-zinc-950 border-zinc-800 hover:border-blue-500/40 text-white shadow-[0_25px_60px_rgba(0,0,0,0.4)]' 
                    : 'bg-gradient-to-br from-white via-white to-zinc-50 border-zinc-200 hover:border-blue-600/40 text-zinc-900 shadow-[0_25px_60px_rgba(0,0,0,0.06)]'
                } ${visibleSections.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: visibleSections.projects ? `${idx * 40}ms` : '0ms' }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Category Badge */}
                  <div className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-[9px] font-black tracking-[0.2em] uppercase backdrop-blur-md ${
                    isDark ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30' : 'bg-blue-600/20 text-blue-600 border border-blue-600/30'
                  }`}>
                    {project.category}
                  </div>

                  {/* Year Badge */}
                  <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-[9px] font-black tracking-[0.2em] uppercase backdrop-blur-md ${
                    isDark ? 'bg-zinc-900/60 text-zinc-300 border border-zinc-700/50' : 'bg-white/60 text-zinc-700 border border-white/50'
                  }`}>
                    {project.year}
                  </div>

                  {/* In Progress Badge */}
                  {project.inProgress && (
                    <div className="absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-[9px] font-black tracking-[0.2em] uppercase backdrop-blur-md bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      In Progress
                    </div>
                  )}

                  {/* Hover Overlay with Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 ${
                        isDark ? 'bg-blue-500/90 text-white hover:bg-blue-400' : 'bg-blue-600/90 text-white hover:bg-blue-500'
                      }`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    {project.adminUrl && project.adminUrl !== "#" && (
                      <a 
                        href={project.adminUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 ${
                          isDark ? 'bg-zinc-800/90 text-white hover:bg-zinc-700' : 'bg-zinc-900/90 text-white hover:bg-zinc-800'
                        }`}
                      >
                        <Layout className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className={`font-black text-lg sm:text-xl uppercase tracking-tight leading-tight ${
                        isDark ? 'text-white' : 'text-zinc-900'
                      }`}>
                        {project.title}
                      </h3>
                      <p className={`text-xs sm:text-sm font-bold tracking-[0.15em] uppercase mt-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                        {project.subtitle}
                      </p>
                    </div>
                    <span className={`text-[10px] font-black tracking-wider flex-shrink-0 mt-1 ${isDark ? 'text-zinc-600' : 'text-zinc-400'}`}>
                      // 0{project.id}
                    </span>
                  </div>

                  <p className={`text-sm leading-relaxed font-medium tracking-wide mb-6 ${isDark ? 'text-zinc-300' : 'text-zinc-600'}`}>
                    {project.description}
                  </p>

                  <div className="mt-auto pt-5 border-t border-dashed border-zinc-200 dark:border-zinc-800">
                    <p className={`text-[9px] font-black tracking-[0.3em] uppercase mb-3 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                      Technology Stack
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className={`px-2.5 py-1 rounded-md text-[9px] font-black tracking-wider uppercase transition-all duration-300 hover:scale-105 ${
                            isDark 
                              ? 'bg-zinc-800/50 text-zinc-400 border border-zinc-700/50 hover:border-blue-500/50 hover:text-blue-400' 
                              : 'bg-zinc-100 text-zinc-600 border border-zinc-200 hover:border-blue-600/50 hover:text-blue-600'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className={`text-lg font-bold ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <section 
        ref={marqueeRef}
        className={`py-16 sm:py-24 overflow-hidden border-t border-b select-none transition-all duration-1000 ${
          visibleSections.marquee ? "opacity-100 scale-100" : "opacity-0 scale-95"
        } ${isDark ? 'bg-black border-blue-500/20' : 'bg-zinc-50 border-blue-600/20'}`}
      >
        <div className="w-full flex flex-col gap-4 sm:gap-6">
          <div className="w-full overflow-hidden flex whitespace-nowrap">
            <div className="flex gap-6 sm:gap-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[1000] uppercase font-sans tracking-tighter animate-marquee-left">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-6 sm:gap-8 flex-shrink-0 items-center">
                  <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>REACT.JS</span>
                  <span className={isDark ? 'text-blue-400/30' : 'text-blue-600/30'}>✦</span>
                  <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>NODE.JS</span>
                  <span className={isDark ? 'text-blue-400/30' : 'text-blue-600/30'}>✦</span>
                  <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>MONGODB</span>
                  <span className={isDark ? 'text-blue-400/30' : 'text-blue-600/30'}>✦</span>
                  <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>TAILWIND</span>
                  <span className={isDark ? 'text-blue-400/30' : 'text-blue-600/30'}>✦</span>
                  <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>FIREBASE</span>
                  <span className={isDark ? 'text-blue-400/30' : 'text-blue-600/30'}>✦</span>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full overflow-hidden flex whitespace-nowrap">
            <div className="flex gap-6 sm:gap-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[1000] uppercase font-sans tracking-tighter animate-marquee-right">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-6 sm:gap-8 flex-shrink-0 items-center">
                  <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>FIGMA</span>
                  <span className={isDark ? 'text-blue-400/30' : 'text-blue-600/30'}>✦</span>
                  <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>EXPRESS</span>
                  <span className={isDark ? 'text-blue-400/30' : 'text-blue-600/30'}>✦</span>
                  <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>PYTHON</span>
                  <span className={isDark ? 'text-blue-400/30' : 'text-blue-600/30'}>✦</span>
                  <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>GIT</span>
                  <span className={isDark ? 'text-blue-400/30' : 'text-blue-600/30'}>✦</span>
                  <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>VERCEL</span>
                  <span className={isDark ? 'text-blue-400/30' : 'text-blue-600/30'}>✦</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style dangerouslySetInnerHTML={{__html: `
          @keyframes marquee-left {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
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

      {/* CTA SECTION */}
      <section 
        ref={ctaRef}
        className={`py-20 sm:py-32 px-4 sm:px-6 lg:px-12 transition-all duration-1000 ${
          visibleSections.cta ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } ${isDark ? 'bg-zinc-950' : 'bg-zinc-50'}`}
      >
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <p className={`text-[10px] sm:text-xs font-black tracking-[0.4em] uppercase mb-4 ${isDark ? 'text-zinc-500' : 'text-zinc-400'}`}>
              Have a Project in Mind?
            </p>
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight uppercase leading-tight mb-6 ${isDark ? 'text-white' : 'text-zinc-900'}`}>
              Let's Build Something <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>Extraordinary</span>
            </h2>
            <p className={`text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-10 ${isDark ? 'text-zinc-400' : 'text-zinc-600'}`}>
              Available for freelance projects, full-time opportunities, and creative collaborations. Let's discuss how we can bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/contact"
                className={`w-full sm:w-auto px-10 py-4 rounded-full font-black text-xs sm:text-sm tracking-[0.25em] uppercase transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark 
                    ? 'bg-blue-500 hover:bg-blue-400 text-white shadow-xl shadow-blue-500/20' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xl shadow-blue-600/20'
                }`}
              >
                Start a Project
              </a>
              <a
                href="mailto:rohithips296@gmail.com"
                className={`w-full sm:w-auto px-10 py-4 rounded-full font-black text-xs sm:text-sm tracking-[0.25em] uppercase border-2 transition-all duration-300 hover:-translate-y-0.5 ${
                  isDark 
                    ? 'border-zinc-800 text-white hover:border-blue-500 hover:text-blue-400' 
                    : 'border-zinc-300 text-zinc-800 hover:border-blue-600 hover:text-blue-600'
                }`}
              >
                Email Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER TEXT */}
      <section 
        ref={footerRef}
        className={`py-12 sm:py-16 lg:py-24 overflow-hidden border-t transition-all duration-1000 ${
          visibleSections.footer ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        } ${isDark ? 'bg-zinc-950 border-white/5' : 'bg-zinc-50 border-black/5'}`}
      >
        <div className="max-w-7xl mx-auto px-6 select-none">
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 lg:gap-6 text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[18rem] font-black leading-none tracking-tighter uppercase scale-y-105">
            <span className={isDark ? 'text-blue-500' : 'text-blue-600'}>DEV</span>
            <span className={isDark ? 'text-blue-500/20' : 'text-blue-600/10'}>✦</span>
            <span className={isDark ? 'text-blue-500' : 'text-blue-600'}>CODE</span>
            <span className={isDark ? 'text-blue-500/20' : 'text-blue-600/10'}>✦</span>
            <span className={isDark ? 'text-blue-500' : 'text-blue-600'}>SHIP</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;