// src/components/SplitText.jsx
import React, { useEffect, useRef } from "react";

const SplitText = ({ children, className = "" }) => {
  const wrapperRef = useRef(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    el.classList.remove("splittext-visible");
    requestAnimationFrame(() => {
      el.classList.add("splittext-visible");
    });
  }, []);

  const raw = typeof children === "string" ? children : "";
  const words = raw.split(" ");

  return (
    <span ref={wrapperRef} className={`splittext-wrapper ${className}`.trim()}>
      {words.map((word, i) => (
        <span key={i} className="splittext-word">
          {word}
          {i !== words.length - 1 && "\u00A0"}
        </span>
      ))}
    </span>
  );
};

export default SplitText;
