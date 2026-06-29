// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { DarkModeProvider, useDarkMode } from "./context/DarkModeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

import "./index.css";

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
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            
          </Routes>
        </Layout>
      </Router>
    </DarkModeProvider>
  );
}

export default App;