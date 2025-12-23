import React from "react";
export default function Container({ children, className = "" }) {
  return (
    <div className={`max-w-7xl mx-auto w-full px-4 md:px-8 ${className}`}>
      {children}
    </div>
  );
}
