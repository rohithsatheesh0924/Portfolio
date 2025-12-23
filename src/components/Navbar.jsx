// src/components/Navbar.jsx
import React from "react";

const Navbar = () => {
  const navItems = ["home", "about", "projects", "contact"];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-4xl backdrop-blur-xl bg-white/3 border border-white/10 shadow-xl shadow-black/20 rounded-2xl px-8 py-4">
      <div className="flex items-center justify-between h-16">
        {/* Logo - Fixed Layout: Image → Name → Role */}
        <div className="flex items-center gap-4 group cursor-pointer hover:scale-105 transition-transform">
          {/* Profile Image Container */}
          <div className="relative w-12 h-12 rounded-2xl shadow-lg border border-white/20 overflow-hidden flex-shrink-0">
            {/* Your Profile Image - Replace src with your photo path */}
            <img 
              src="./my-pic.jpg" 
              alt="Rohith S" 
              className="w-full h-full object-cover rounded-2xl"
              onError={(e) => {
                // Fallback gradient if image fails to load
                e.target.style.background = 'linear-gradient(135deg, #4f46e5 0%, #06b6d4 50%, #10b981 100%)';
                e.target.style.backgroundClip = 'content-box';
                e.target.innerHTML = '<span class="text-white font-bold text-xs flex items-center justify-center h-full">RS</span>';
              }}
            />
            {/* Fallback gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-blue-600/20" />
          </div>
          
          {/* Name & Role - Name first, role below */}
          <div className="min-w-0">
            <p className="text-lg font-black text-white truncate leading-tight">Rohith S</p>
            <p className="text-xs font-medium text-slate-400 uppercase tracking-wider">Frontend Developer</p>
          </div>
        </div>
        
        {/* Professional Desktop Nav - 4 items only */}
        <nav className="hidden lg:flex items-center gap-10">
          {navItems.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="relative text-lg font-semibold text-slate-200 hover:text-white transition-all duration-300 group"
            >
              <span className="block py-2 px-1">{id.charAt(0).toUpperCase() + id.slice(1)}</span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-0 bg-gradient-to-r from-indigo-400 to-blue-500 rounded-full group-hover:w-8 group-hover:translate-x-0 transition-all duration-300" />
            </a>
          ))}
        </nav>
        
        {/* CTA + Mobile */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:rohithips296@gmail.com"
            className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-105 transition-all duration-300 border border-white/10"
          >
            Get In Touch
          </a>
          {/* Mobile menu */}
          <button className="lg:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all text-slate-300 hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
