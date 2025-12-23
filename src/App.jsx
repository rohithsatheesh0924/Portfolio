// src/App.jsx
import React from "react";
import Index from "./pages/index.jsx";
import "./index.css"; // your global CSS

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Index />
    </div>
  );
}

export default App;
