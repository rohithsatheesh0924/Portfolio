// src/App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

import "./index.css";

// Scroll Restoration Utility: Resets layout viewport back to coordinates (0,0) on path updates
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Layout component with constant Navbar
const Layout = ({ children }) => {
  const { isDark } = useDarkMode();
  
  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDark ? "bg-black text-yellow-400" : "bg-gray-50 text-gray-900"}`}>
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

function App() {
  return (
    <DarkModeProvider>
      <Router>
        {/* Placed inside Router so it can safely read the active history/location timeline state changes */}
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Layout>
      </Router>
    </DarkModeProvider>
  );
}

export default App;