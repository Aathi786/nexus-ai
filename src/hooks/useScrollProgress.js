import { useEffect, useRef } from "react";

/**
 * Tracks overall page scroll progress (0 -> 1) without causing React
 * re-renders on every scroll tick. Reads the value imperatively via
 * progressRef.current, which is what the Three.js render loop wants.
 */
export function useScrollProgress() {
  const progressRef = useRef(0);

  useEffect(() => {
    let ticking = false;

    const computeProgress = () => {
      const doc = document.documentElement;
      const scrollTop = window.scrollY || doc.scrollTop;
      const maxScroll = doc.scrollHeight - window.innerHeight;
      progressRef.current = maxScroll > 0 ? Math.min(scrollTop / maxScroll, 1) : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(computeProgress);
        ticking = true;
      }
    };

    computeProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", computeProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", computeProgress);
    };
  }, []);

  return progressRef;
}
