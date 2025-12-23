// src/hooks/useInView.js
import { useEffect, useRef, useState } from "react";

export function useInView(options = {}) {
  const elementRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const target = elementRef.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);          // animate once
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.25, ...options }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [options]);

  return { elementRef, inView };
}
