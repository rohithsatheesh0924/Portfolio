// src/pages/index.jsx
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack";
import SplitText from "../components/SplitText";
import CurvedLoop from "../components/CurvedLoop";
import LogoLoop from "../components/LogoLoop";





const ProjectCard = ({ title, subtitle, tech, desc }) => (
  <div className="group bg-white/3 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:bg-white/5 hover:scale-105 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/20">
    <div className="h-1 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity mb-6" />
    <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight">{title}</h3>
    <p className="text-indigo-400 font-semibold text-lg mb-2">{subtitle}</p>
    <p className="text-slate-400 text-sm uppercase tracking-wider mb-4 font-mono">{tech}</p>
    <p className="text-slate-300 leading-relaxed text-lg">{desc}</p>
  </div>
);

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsVisible(true), 400);
    return () => clearTimeout(t);
  }, []);

  const aboutRef = useRef(null);
const [aboutVisible, setAboutVisible] = useState(false);

useEffect(() => {
  const node = aboutRef.current;
  if (!node) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAboutVisible(true);
          observer.disconnect(); // animate only once
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(node);
  return () => observer.disconnect();
}, []);

const [heroVisible, setHeroVisible] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => setHeroVisible(true), 400); // slight delay feels premium
  return () => clearTimeout(timer);
}, []);


    


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black text-slate-100 font-['Inter',sans-serif] scroll-smooth">
      <Navbar />

      {/* HERO – use min-h-screen, not h-screen */}
<section
  id="home"
  className="relative min-h-screen flex items-center justify-center px-6 pt-32 pb-32 overflow-hidden"  // <- more bottom padding
>
  {/* Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.12),transparent_55%)]" />
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(129,140,248,0.18),transparent_55%)]" />

  <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col gap-10">
    {/* Top grid */}
    <div className="grid lg:grid-cols-[1.3fr,1fr] gap-16 items-center">
      {/* LEFT – content */}
      <div
        className={`space-y-8 transform transition-all duration-800 ease-out ${
          heroVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
        }`}
      >
        {/* Status pill */}
        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/40 backdrop-blur">
          <span className="inline-flex w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping-slow" />
          <span className="text-[11px] font-semibold tracking-[0.2em] text-emerald-200 uppercase">
            Available for full-time / internship
          </span>
        </div>

        {/* Heading + subheading with SplitText */}
        <div className="space-y-4">
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-slate-500 font-semibold">
            Rohith S · Portfolio
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.0]">
            <SplitText className="block text-slate-50">
              Frontend
            </SplitText>
            <span className="block text-slate-50">
              <SplitText>Developer</SplitText>
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-300 max-w-xl leading-relaxed">
            B.Tech in Artificial Intelligence &amp; Machine Learning{" "}
            <span className="font-semibold text-emerald-400">· CGPA 8.52</span>
            <br />
            <span className="text-slate-400">SNS College of Technology</span>
          </p>
        </div>

        {/* Tech stack */}
        <div className="space-y-3">
          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-500">
            Core skills
          </p>
          <div className="flex flex-wrap gap-3">
            {["React.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Figma"].map(
              (tech, idx) => (
                <div
                  key={tech}
                  className={`tech-pill px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-[12px] font-medium text-slate-100 shadow-sm hover:bg-white/10 hover:border-sky-400/60 hover:-translate-y-[2px] hover:shadow-[0_8px_30px_rgba(56,189,248,0.35)] transition-all duration-300 flex items-center gap-2 ${
                    heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  }`}
                  style={{ transitionDelay: `${200 + idx * 70}ms` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  {tech}
                </div>
              )
            )}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <a
            href="#projects"
            className={`inline-flex items-center justify-center px-7 py-3 rounded-2xl bg-sky-500 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:bg-sky-400 hover:-translate-y-[1px] transition-all ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            View projects
          </a>
          <a
            href="#contact"
            className={`inline-flex items-center justify-center px-7 py-3 rounded-2xl border border-slate-600 bg-slate-950/60 text-sm font-semibold text-slate-100 hover:bg-slate-900 hover:border-slate-300 transition-all ${
              heroVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            Contact me
          </a>
        </div>
      </div>

      {/* RIGHT – image card only */}
      <div
        className={`flex items-center justify-center transform transition-all duration-800 ease-out ${
          heroVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
        }`}
      >
        <div className="relative w-full max-w-xs sm:max-w-sm">
          <div className="absolute -inset-4 rounded-[2.25rem] bg-gradient-to-br from-sky-500/20 via-emerald-400/10 to-transparent blur-3xl" />
          <div className="relative rounded-[2rem] bg-slate-950/80 border border-white/10 shadow-[0_24px_80px_rgba(15,23,42,0.85)] backdrop-blur-xl overflow-hidden">
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img
                src="./my-pic.jpg"
                alt="Rohith S"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="px-6 py-4 border-t border-white/10 bg-slate-950/90">
              <p className="text-sm font-semibold text-white">Rohith S</p>
              <p className="text-[11px] text-slate-400 uppercase tracking-[0.18em]">
                Frontend Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Curved loop placed below hero content, inside flow */}
    <div className="w-full max-w-5xl mx-auto">
      <CurvedLoop
        marqueeText="Frontend Developer"
        speed={1.4}
        curveAmount={380}
        direction="left"
        interactive={true}
        className="fill-sky-300"
      />
    </div>
  </div>
</section>




      {/* ABOUT – remove h-screen, just padding and min-h */}
    <section
  id="about"
  ref={aboutRef}
  className="relative px-6 py-24 border-t border-white/5 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950/60 overflow-hidden"
>
  <div className="max-w-6xl mx-auto">
    {/* Section header */}
    <div className="text-center mb-14">
      <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400/80 font-semibold mb-3">
        Profile
      </p>
      <h2 className="text-3xl md:text-5xl font-black text-slate-50">
        About{" "}
        <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
          Me
        </span>
      </h2>
    </div>

    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
      {/* LEFT – main text */}
      <div
        className={`about-left ${
          aboutVisible ? "about-slide-left" : "about-hidden"
        } bg-white/3 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_18px_60px_rgba(15,23,42,0.75)]`}
      >
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-400 mb-4">
          Summary
        </p>
        <p className="text-lg md:text-xl text-slate-200 leading-relaxed">
          A results-driven <span className="font-semibold">Frontend Developer</span> with a strong
          foundation in HTML, CSS, JavaScript, and React, skilled at transforming Figma concepts
          into clean, scalable components and building responsive, user‑focused interfaces that
          balance aesthetics with performance; comfortable collaborating with design and backend
          teams, applying modern tooling such as Tailwind CSS, Git, Node.js, and MongoDB, and
          consistently focusing on accessibility, code quality, and maintainability to deliver
          pixel‑perfect, production‑ready web applications.
        </p>
      </div>

      {/* RIGHT – highlights list */}
      <div
        className={`about-right ${
          aboutVisible ? "about-slide-right" : "about-hidden"
        } bg-slate-950/80 border border-white/10 rounded-3xl p-8 md:p-10`}
      >
        <p className="text-sm font-semibold tracking-[0.2em] uppercase text-slate-400 mb-4">
          How I work
        </p>
        <ul className="space-y-4 text-sm md:text-[15px] text-slate-200">
          <li className="flex gap-3">
            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Focus on maintainable React code with clear component structure.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Value performance, accessibility, and clean UI in every screen.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Comfortable collaborating with design, backend, and product teams.</span>
          </li>
          <li className="flex gap-3">
            <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Always learning new tools, patterns, and UI/UX best practices.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

 {/* TECH */}
<section
  id="skills"
  className="relative px-6 py-24 border-t border-white/5 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950/60 overflow-hidden"
>
  <div className="max-w-6xl mx-auto">
    {/* Section header */}
    <div className="text-center mb-10">
      <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400/80 font-semibold mb-3">
        Skills
      </p>
      <h2 className="text-3xl md:text-5xl font-black text-slate-50">
        Technical{" "}
        <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
          Toolkit
        </span>
      </h2>
      <p className="mt-4 text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
        A focused stack around modern frontend, with strong foundations in core
        programming, UI design, and essential tooling for production-ready apps.
      </p>
    </div>

    {/* Logo loop strip */}
    <div className="mb-12 rounded-2xl border border-white/10 bg-slate-950/80 px-4 py-3">
      <LogoLoop
        logos={[
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
            alt: "React"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
            alt: "JavaScript"
          },
          {
            // Tailwind – use jsDelivr devicon plain logo (works reliably)
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            alt: "Tailwind CSS"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
            alt: "HTML5"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
            alt: "CSS3"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
            alt: "MySQL"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
            alt: "Git"
          },
          {
            src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
            alt: "Figma"
          }
        ]}
        speed={120}
        direction="left"
        gap={32}
        logoHeight={28}
        fadeOut
        scaleOnHover
        width="100%"
      />
    </div>

    {/* Grid – three columns of skill groups */}
    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
      {/* Programming Languages */}
      <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-6 md:p-7 shadow-[0_18px_60px_rgba(15,23,42,0.75)]">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-400 mb-4">
          Programming Languages
        </p>
        <div className="space-y-3 text-sm md:text-[15px] text-slate-100">
          {[
            {
              name: "C",
              logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
            },
            {
              name: "C++",
              logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
            },
            {
              name: "Python",
              logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            },
            {
              name: "JavaScript",
              logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            },
            {
              name: "PHP",
              logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
            }
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-3 rounded-2xl bg-white/0 hover:bg-white/5 border border-transparent hover:border-white/10 transition-all px-3 py-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-2xl bg-slate-900/80 flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <span>{item.name}</span>
              </div>
              <span className="text-[11px] uppercase tracking-[0.16em] text-slate-500">
                Core
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Frontend & UI */}
      <div className="bg-white/3 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-7">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-400 mb-4">
          Frontend &amp; UI
        </p>

        <div className="space-y-3 text-sm md:text-[15px] text-slate-100">
          {[
            {
              name: "HTML5",
              label: "Markup",
              logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            },
            {
              name: "CSS3",
              label: "Styling",
              logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            },
            {
              name: "React.js",
              label: "SPA / Components",
              logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            },
            {
              name: "Tailwind CSS",
              label: "Utility-first UI",
              logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
            },
            {
              name: "Bootstrap",
              label: "Component library",
              logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
            }
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-3 rounded-2xl bg-white/0 hover:bg-slate-900/40 border border-transparent hover:border-sky-400/50 transition-all px-3 py-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-2xl bg-slate-900/80 flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span>{item.name}</span>
                  <span className="text-[11px] text-slate-400">
                    {item.label}
                  </span>
                </div>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Tools & Database */}
      <div className="bg-slate-950/80 border border-white/10 rounded-3xl p-6 md:p-7">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-slate-400 mb-4">
          Tools &amp; Database
        </p>

        <div className="space-y-3 text-sm md:text-[15px] text-slate-100">
          {[
            {
              name: "MySQL",
              label: "Database",
              logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            },
            {
              name: "Git & GitHub",
              label: "Version control",
              logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            },
            {
              name: "Figma",
              label: "UI design",
              logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            },
            {
              name: "Canva",
              label: "Visual content",
              // use official static SVG (worldvectorlogo often blocks hotlinking)
              logo:
                "https://upload.wikimedia.org/wikipedia/commons/1/19/Canva_Logo.svg"
            },
            {
              name: "Adobe Photoshop",
              label: "Graphics",
              logo:
                "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
            }
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between gap-3 rounded-2xl bg-white/0 hover:bg-white/5 border border-transparent hover:border-emerald-400/50 transition-all px-3 py-2"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-2xl bg-slate-900/80 flex items-center justify-center">
                  <img
                    src={item.logo}
                    alt={item.name}
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span>{item.name}</span>
                  <span className="text-[11px] text-slate-400">
                    {item.label}
                  </span>
                </div>
              </div>
              <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
                Daily
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* PROJECTS */}
<section
  id="projects"
  className="relative px-6 py-24 border-t border-white/5 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950/60"
>
  <div className="max-w-6xl mx-auto w-full">
    {/* Header */}
    <div className="text-center mb-16">
      <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400/80 font-semibold mb-3">
        Work
      </p>
      <h2 className="text-4xl md:text-6xl font-black text-white mb-4">
        Projects
      </h2>
      <p className="text-xl text-slate-400">
        Hands-on production experience
      </p>
    </div>

    {/* Wider stack container */}
    <div className="relative max-w-5xl mx-auto">
      <ScrollStack
        itemDistance={120}
        itemScale={0.04}
        itemStackDistance={42}
        stackPosition="30%"
        scaleEndPosition="16%"
        baseScale={0.96}
        blurAmount={0}
        useWindowScroll={true}
        className="w-full"
      >
        {/* Project 1 */}
        <ScrollStackItem>
          <ProjectCard
            title="Freelancing for Students"
            subtitle="Full-stack MERN marketplace · Ongoing"
            tech="React · Node.js · Express · MongoDB · Socket.IO · JWT · Tailwind CSS"
            desc="A student-focused freelance marketplace that connects learners with real-world projects and micro-gigs, enabling them to build portfolios, earn income, and collaborate with clients in a structured way."
            points={[
              "Role-based dashboards for students and clients, with secure JWT authentication and protected routes.",
              "Real-time messaging using Socket.IO, supporting read states, typing indicators, and notification badges.",
              "RESTful APIs with MongoDB Atlas, pagination for job feeds, and server-side validation for proposals and offers.",
              "Responsive UI built with React and Tailwind CSS, designed for both desktop and mobile freelance workflows."
            ]}
          />
        </ScrollStackItem>

        {/* Project 2 */}
        <ScrollStackItem>
          <ProjectCard
            title="Stock Forecasting"
            subtitle="Machine learning time-series analysis"
            tech="Python · Pandas · NumPy · Scikit‑learn · Matplotlib · Seaborn"
            desc="An end-to-end stock trend forecasting pipeline that experiments with multiple ML models to understand price movement patterns and evaluation metrics."
            points={[
              "Ingested and cleaned historical stock data, handling missing values, outliers, and feature scaling.",
              "Engineered technical indicators (moving averages, returns, volatility features) to improve model signal quality.",
              "Trained and compared models such as Linear Regression and tree-based estimators, tracking performance with metrics like MAE and RMSE.",
              "Visualized predictions vs. actuals with Matplotlib and Seaborn to communicate model behaviour to non-technical stakeholders."
            ]}
          />
        </ScrollStackItem>

        {/* Project 3 */}
        <ScrollStackItem>
          <ProjectCard
            title="Smart Dustbin"
            subtitle="IoT-driven waste management solution"
            tech="Arduino · NodeMCU · Ultrasonic Sensors · IoT"
            desc="A hardware–software prototype that automates waste level monitoring in bins and assists municipalities in planning timely collection."
            points={[
              "Used ultrasonic sensors to continuously measure fill level; triggered alerts when capacity crossed a 75% threshold.",
              "Integrated Arduino and NodeMCU to push bin status to a networked dashboard for remote monitoring.",
              "Implemented basic classification for degradable vs. non‑degradable waste streams to support better segregation.",
              "Designed the system for low power and low maintenance, targeting deployment in public and institutional spaces."
            ]}
          />
        </ScrollStackItem>
      </ScrollStack>
    </div>
  </div>
</section>



{/*Shooling Details */}
<section
  id="education"
  className="relative px-6 py-24 min-h-[70vh] border-t border-white/5 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950/60"
>
  <div className="max-w-5xl mx-auto w-full">
    {/* Header */}
    <div className="text-center mb-12 space-y-3">
      <p className="text-[11px] uppercase tracking-[0.3em] text-slate-400 font-semibold">
        Education
      </p>
      <h2 className="text-4xl md:text-5xl font-black text-white">
        Academic Timeline
      </h2>
      <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
        A clear snapshot of formal education from school in Karur to a
        B.Tech specialization in AI &amp; Machine Learning.
      </p>
    </div>

    {/* Content */}
    <div className="grid md:grid-cols-[1.4fr,1fr] gap-10 items-start">
      {/* Left – refined vertical timeline */}
      <div className="relative">
        {/* line */}
        <div className="absolute left-4 top-1 bottom-1 w-px bg-slate-700/80" />

        <div className="space-y-7">
          {/* B.Tech */}
          <article className="relative pl-10">
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-sky-400 shadow-[0_0_0_4px_rgba(56,189,248,0.18)]" />
            <header className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
                2022 – 2026
              </span>
              <span className="text-[11px] text-slate-500">
                Coimbatore · Undergraduate
              </span>
            </header>
            <h3 className="mt-1 text-sm md:text-base font-semibold text-slate-50">
              B.Tech in Artificial Intelligence &amp; Machine Learning
            </h3>
            <p className="text-sm text-slate-300">
              SNS College of Technology
            </p>
            <p className="mt-1 text-xs font-medium text-emerald-400">
              CGPA: 8.52
            </p>
          </article>

          {/* HSC */}
          <article className="relative pl-10">
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-slate-300" />
            <header className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
                2021 – 2022
              </span>
              <span className="text-[11px] text-slate-500">
                Karur · Higher Secondary
              </span>
            </header>
            <h3 className="mt-1 text-sm md:text-base font-semibold text-slate-50">
              HSC · Higher Secondary Certificate
            </h3>
            <p className="text-sm text-slate-300">
              Bharani Park Matriculation Hr. Sec. School, Karur
            </p>
            <p className="mt-1 text-xs font-medium text-sky-300">
              Percentage: 69%
            </p>
          </article>

          {/* SSLC */}
          <article className="relative pl-10">
            <div className="absolute left-0 top-2 w-3 h-3 rounded-full bg-slate-500" />
            <header className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-400">
                2019 – 2020
              </span>
              <span className="text-[11px] text-slate-500">
                Karur · Secondary
              </span>
            </header>
            <h3 className="mt-1 text-sm md:text-base font-semibold text-slate-50">
              SSLC · Secondary School Leaving Certificate
            </h3>
            <p className="text-sm text-slate-300">
              St. Theresa&apos;s Matriculation Hr. Sec. School, Karur
            </p>
            <p className="mt-1 text-xs font-medium text-indigo-300">
              Percentage: 70%
            </p>
          </article>
        </div>
      </div>

      {/* Right – summary card kept minimal */}
      <aside className="space-y-4">
        <div className="rounded-3xl bg-slate-950/70 border border-white/10 px-6 py-6 md:px-7 md:py-7 backdrop-blur">
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400 mb-3">
            Snapshot
          </p>

          <div className="space-y-3 text-sm md:text-[15px] text-slate-50">
            <div className="flex items-center justify-between gap-4">
              <span className="text-slate-400">Current degree</span>
              <span className="font-medium text-right">
                B.Tech AI &amp; ML
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-slate-400">Institution</span>
              <span className="font-medium text-right">
                SNS College of Technology
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-slate-400">UG CGPA</span>
              <span className="font-medium text-emerald-400">8.52</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-slate-400">Schooling</span>
              <span className="font-medium text-right">
                Bharani Park &amp; St. Theresa&apos;s, Karur
              </span>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-white/10">
            <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400 mb-1">
              Languages
            </p>
            <p className="text-sm md:text-base text-slate-100">
              Tamil, English, Telugu, Hindi, French (Basic)
            </p>
          </div>
        </div>
      </aside>
    </div>
  </div>
</section>





      {/* CONTACT */}
    <section
  id="contact"
  className="relative px-6 py-24 border-t border-white/5 bg-gradient-to-b from-slate-950/40 via-slate-950/10 to-slate-950/80 overflow-hidden"
>
  <div className="pointer-events-none absolute inset-0 opacity-40">
    <div className="absolute -left-32 top-32 h-64 w-64 rounded-full bg-sky-500/10 blur-3xl" />
    <div className="absolute -right-32 bottom-10 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
  </div>

  <div className="relative max-w-5xl mx-auto w-full">
    {/* Header */}
    <div className="text-center mb-12 space-y-3">
      <p className="text-[11px] uppercase tracking-[0.3em] text-sky-400/80 font-semibold">
        Contact
      </p>
      <h2 className="text-3xl md:text-5xl font-black text-white">
        Let&apos;s work together
      </h2>
      <p className="text-sm md:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed">
        Open to frontend roles, internships, and freelance collaborations.
        Share a problem, an idea, or a product—and a tailored solution will follow.
      </p>
    </div>

    {/* Main card */}
    <div className="grid md:grid-cols-[1.25fr,1fr] gap-8 md:gap-10 items-start">
      {/* Left – primary contact methods */}
      <div className="space-y-4">
        <div className="rounded-3xl bg-slate-950/80 border border-white/10 px-6 py-6 md:px-7 md:py-7 shadow-[0_18px_60px_rgba(15,23,42,0.85)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400 mb-4">
            Get in touch
          </p>

          <div className="space-y-4">
            {/* Email */}
            <a
              href="mailto:rohithips296@gmail.com"
              className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-white/3 border border-white/10 hover:bg-white/8 hover:border-sky-400/70 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 flex items-center justify-center">
                <svg
                  className="w-4.5 h-4.5 text-sky-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M3 8l7.27 4.848a2 2 0 002.16 0L20 8m-15 9h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Email
                </p>
                <p className="text-sm md:text-[15px] font-medium text-slate-50">
                  rohithips296@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+919750565041"
              className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-white/3 border border-white/10 hover:bg-white/8 hover:border-emerald-400/70 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                <svg
                  className="w-4.5 h-4.5 text-emerald-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M3 5a2 2 0 012-2h2.6a1 1 0 01.95.684l1.12 3.359a1 1 0 01-.55 1.24l-1.65.66a11.04 11.04 0 005.23 5.23l.66-1.65a1 1 0 011.24-.55l3.36 1.12a1 1 0 01.68.95V19a2 2 0 01-2 2h-1C9.82 21 3 14.18 3 5z"
                  />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Phone / WhatsApp
                </p>
                <p className="text-sm md:text-[15px] font-medium text-slate-50">
                  +91 97505 65041
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-4 px-4 py-3 rounded-2xl bg-white/3 border border-white/10">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center">
                <svg
                  className="w-4.5 h-4.5 text-indigo-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M12 21s-6-4.35-6-10a6 6 0 1112 0c0 5.65-6 10-6 10z"
                  />
                  <circle cx="12" cy="11" r="2.5" />
                </svg>
              </div>
              <div className="text-left">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
                  Location
                </p>
                <p className="text-sm md:text-[15px] font-medium text-slate-50">
                  Karur, Tamil Nadu · India
                </p>
              </div>
            </div>
          </div>

          {/* Small note */}
          <p className="mt-5 text-[11px] md:text-xs text-slate-500">
            Prefer email for detailed discussions; usually responds within 24 hours.
          </p>
        </div>
      </div>

      {/* Right – social / CTA */}
      <div className="space-y-4">
        <div className="rounded-3xl bg-slate-950/80 border border-white/10 px-6 py-6 md:px-7 md:py-7">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400 mb-4">
            Online presence
          </p>

          <div className="space-y-3">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/rohith--s"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 px-3 py-3 rounded-2xl hover:bg-white/5 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-sky-500/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-sky-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14C2.2 0 1 1.2 1 2.7v18.7C1 22.8 2.2 24 3.7 24h14.6c1.5 0 2.7-1.2 2.7-2.7V2.7C21.9 1.2 20.7 0 19.2 0zM8.1 20.4H4.9V9h3.2v11.4zM6.5 7.6c-1 0-1.8-.8-1.8-1.8S5.5 4 6.5 4s1.8.8 1.8 1.8-.8 1.8-1.8 1.8zm13.1 12.8h-3.2v-5.9c0-1.4-.5-2.3-1.7-2.3-.9 0-1.4.6-1.7 1.2-.1.2-.1.5-.1.8v6.2H9.7V9h3.1v1.6c.4-.6 1.2-1.9 3.1-1.9 2.3 0 3.8 1.5 3.8 4.7v7z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-slate-50">LinkedIn</p>
                  <p className="text-[11px] text-slate-400">
                    linkedin.com/in/rohith--s
                  </p>
                </div>
              </div>
              <span className="text-slate-500 text-xs">View profile</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/rohithsatheesh0924"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between gap-4 px-3 py-3 rounded-2xl hover:bg-white/5 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-slate-500/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-slate-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .5C5.73.5.75 5.48.75 11.76c0 5 3.23 9.23 7.7 10.73.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.11-3.13.68-3.79-1.5-3.79-1.5-.51-1.29-1.25-1.64-1.25-1.64-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1 1.63-.26 2.02-.52.1-.75.39-1.26.71-1.55-2.5-.29-5.13-1.26-5.13-5.6 0-1.24.44-2.25 1.16-3.04-.12-.28-.5-1.43.11-2.98 0 0 .94-.3 3.08 1.16a10.5 10.5 0 0 1 5.61 0c2.14-1.46 3.08-1.16 3.08-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.8 1.16 3.04 0 4.36-2.63 5.3-5.14 5.59.4.35.76 1.05.76 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.21.66.78.54 4.46-1.5 7.69-5.73 7.69-10.73C23.25 5.48 18.27.5 12 .5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-slate-50">GitHub</p>
                  <p className="text-[11px] text-slate-400">
                    github.com/rohithsatheesh0924
                  </p>
                </div>
              </div>
              <span className="text-slate-500 text-xs">View projects</span>
            </a>

            {/* Portfolio / Resume */}
            <a
              href="#home"
              className="flex items-center justify-between gap-4 px-3 py-3 rounded-2xl hover:bg-white/5 transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-emerald-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.8}
                      d="M4 6h16M4 12h8m-8 6h6"
                    />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-medium text-slate-50">
                    Portfolio / Resume
                  </p>
                  <p className="text-[11px] text-slate-400">
                    Jump back to the overview section
                  </p>
                </div>
              </div>
              <span className="text-slate-500 text-xs">Scroll up</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="mt-10 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-500">
      <span>© {new Date().getFullYear()} Rohith S · Frontend Developer</span>
      <span className="flex items-center gap-2">
        <span className="inline-flex w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span>Currently available for opportunities</span>
      </span>
    </div>
  </div>
</section>


    </div>
  );
};

export default Index;
