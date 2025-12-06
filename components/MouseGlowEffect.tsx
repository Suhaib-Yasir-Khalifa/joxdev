"use client";

import { useEffect, useState } from "react";

export default function MouseGlowEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [targetSize, setTargetSize] = useState(600);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Check if we're hovering over an element with the data-glow attribute
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const isHoveringGlass = target?.closest('[data-glow="true"]');

      // If we're hovering over a glass element, increase the glow size
      if (isHoveringGlass) {
        setIsHovering(true);
        // Get the size of the hovered element to adjust the glow size
        const element = target?.closest('[data-glow="true"]') as HTMLElement;
        if (element) {
          const rect = element.getBoundingClientRect();
          // Make the glow slightly larger than the element
          const size = Math.max(rect.width, rect.height) * 1.5;
          setTargetSize(size);
        }
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Only render the glow effect if the mouse is over a glass element
  if (!isHovering) return null;

  return (
    <div
      className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 transition-all duration-300"
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
        width: `${targetSize}px`,
        height: `${targetSize}px`,
        opacity: isHovering ? 1 : 0,
        transition: "width 0.3s ease, height 0.3s ease, opacity 0.3s ease",
        filter: "blur(60px)",
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
