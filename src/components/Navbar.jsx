// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDarkMode } from "../context/DarkModeContext";
import { Sun, Moon } from "lucide-react";

const Navbar = () => {
  const { isDark, toggleDarkMode } = useDarkMode();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Experience", path: "/experience" },
    { name: "Education", path: "/education" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? isDark
              ? "bg-zinc-950/40 backdrop-blur-xl border-b border-white/5 shadow-[0_30px_100px_rgba(0,0,0,0.8)]"
              : "bg-white/40 backdrop-blur-xl border-b border-black/5 shadow-[0_30px_60px_rgba(0,0,0,0.03)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center h-20 lg:h-24 transition-all duration-500">
            
            {/* Logo - Minimalist Luxury Monogram Branding */}
            <Link
              to="/"
              className="group flex items-center gap-4 transition-all duration-300"
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center font-black text-xs transition-all duration-300 relative border ${
                isDark 
                  ? "bg-zinc-900 border-white/10 text-white group-hover:border-blue-500/40" 
                  : "bg-white border-black/10 text-zinc-900 group-hover:border-blue-600/40"
              }`}>
                <span className="relative z-10 tracking-tighter">RS</span>
                {/* Micro-glow ring behind monogram on hover */}
                <div className="absolute inset-0 rounded-full bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="flex flex-col select-none">
                <span className={`text-[11px] font-black tracking-[0.3em] uppercase transition-colors duration-300 ${
                  isDark ? "text-white" : "text-zinc-900"
                }`}>
                  ROHITH
                </span>
                <span className="text-[8px] font-bold tracking-[0.25em] uppercase text-blue-600 dark:text-blue-500 mt-0.5">
                  SATHEESHKUMAR
                </span>
              </div>
            </Link>

            {/* Desktop Navigation - Clean Editorial Architecture */}
            <div className="hidden lg:flex items-center gap-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`relative px-4 py-2 text-[10px] font-bold tracking-[0.3em] uppercase transition-all duration-300 group ${
                      isActive
                        ? isDark
                          ? "text-white"
                          : "text-blue-600"
                        : isDark
                        ? "text-zinc-400 hover:text-white"
                        : "text-zinc-500 hover:text-zinc-900"
                    }`}
                  >
                    <span className="relative z-10">{link.name}</span>
                    
                    {/* Sleek Underline Animation Frame */}
                    <span
                      className={`absolute bottom-0 left-4 right-4 h-[1.5px] transform origin-left transition-transform duration-300 ${
                        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      } ${isDark ? "bg-white" : "bg-blue-600"}`}
                    />
                  </Link>
                );
              })}
            </div>

            {/* Right Side Actions Frame */}
            <div className="flex items-center gap-5">
              
              {/* Premium Dual-State Theme Selector Toggle Slider */}
              <button
                onClick={toggleDarkMode}
                className={`relative w-[68px] h-8 rounded-full p-1 transition-all duration-500 border ${
                  isDark 
                    ? "bg-zinc-900/80 border-white/10 text-zinc-400" 
                    : "bg-zinc-100/80 border-black/5 text-zinc-500"
                }`}
                aria-label="Toggle dark mode"
              >
                {/* Floating active pill behind the selected icon */}
                <div 
                  className={`absolute top-0.5 bottom-0.5 w-[28px] rounded-full transition-all duration-500 shadow-md ${
                    isDark 
                      ? "left-[36px] bg-blue-600 text-white shadow-blue-600/20" 
                      : "left-0.5 bg-white text-blue-600 shadow-black/5"
                  }`}
                />
                
                {/* Fixed Icons Track */}
                <div className="absolute inset-0 flex justify-between items-center px-2 pointer-events-none">
                  <Sun className={`w-3.5 h-3.5 stroke-[1.8] transition-colors duration-300 ${!isDark ? "text-blue-600" : "text-zinc-500"}`} />
                  <Moon className={`w-3.5 h-3.5 stroke-[1.8] transition-colors duration-300 ${isDark ? "text-white" : "text-zinc-400"}`} />
                </div>
              </button>

              {/* CTA Button - Desktop Minimal Luxury */}
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.25em] transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/10 hover:shadow-blue-600/20 hover:-translate-y-0.5"
              >
                Let's Talk
              </Link>

              {/* Mobile Menu Toggle button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`lg:hidden p-2 rounded-xl transition-colors duration-300 ${
                  isDark ? "text-white hover:bg-zinc-900" : "text-zinc-900 hover:bg-zinc-100"
                }`}
                aria-label="Toggle mobile menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu Panel */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-[500px] border-t" : "max-h-0"
          } ${isDark ? "border-white/5 bg-zinc-950/95" : "border-black/5 bg-white/95"} backdrop-blur-xl`}
        >
          <div className="px-6 py-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-5 py-3.5 rounded-xl text-[10px] font-bold tracking-[0.25em] uppercase transition-all duration-300 ${
                    isActive
                      ? isDark
                        ? "bg-white/5 text-white"
                        : "bg-blue-600/5 text-blue-600"
                      : isDark
                      ? "text-zinc-400 hover:bg-white/5 hover:text-white"
                      : "text-zinc-600 hover:bg-black/5 hover:text-zinc-900"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="pt-4 mt-2 border-t border-white/5">
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center px-6 py-3.5 rounded-full text-[10px] font-black tracking-[0.25em] uppercase transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700"
              >
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Under-Navbar Space Filler Block */}
      <div className="h-20 lg:h-24" />
    </>
  );
};

export default Navbar;