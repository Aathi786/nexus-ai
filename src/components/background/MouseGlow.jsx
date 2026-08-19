import { useEffect, useRef } from "react";
import "./MouseGlow.css";

function MouseGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    // Disable on coarse pointer devices (touchscreens)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const glow = glowRef.current;
    if (!glow) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let currentX = mouseX;
    let currentY = mouseY;
    let animationFrameId;

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    const updatePosition = () => {
      // Smooth lerp (0.15) for silky fluid motion
      currentX += (mouseX - currentX) * 0.15;
      currentY += (mouseY - currentY) * 0.15;

      glow.style.transform = `translate3d(${currentX - 200}px, ${currentY - 200}px, 0)`;
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    updatePosition();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <div ref={glowRef} className="mouse-glow" aria-hidden="true" />;
}

export default MouseGlow;