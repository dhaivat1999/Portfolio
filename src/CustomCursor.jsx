import React, { useState, useEffect, useCallback } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Throttle mouse move updates for better performance
  const throttle = (func, limit) => {
    let inThrottle;
    return (args) => {
      if (!inThrottle) {
        func(args);
        inThrottle = requestAnimationFrame(() => {
          inThrottle = false;
        });
      }
    };
  };

  const onMouseMove = useCallback(
    throttle((e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    }, 16), // ~60fps
    []
  );

  useEffect(() => {
    const handleInteractionStart = () => setIsClicking(true);
    const handleInteractionEnd = () => setIsClicking(false);
    const handleHoverChange = (e) => {
      const isInteractive = e.target.closest('a, button, [role="button"], input, select, textarea');
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mousedown", handleInteractionStart);
    window.addEventListener("mouseup", handleInteractionEnd);
    window.addEventListener("mouseover", handleHoverChange);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", handleInteractionStart);
      window.removeEventListener("mouseup", handleInteractionEnd);
      window.removeEventListener("mouseover", handleHoverChange);
    };
  }, [onMouseMove]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Call it once to set the initial state

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className={`custom-cursor ${isMobile ? 'hidden' : 'block'} ${
        isHovering ? 'hovering' : ''
      } ${isClicking ? 'clicking' : ''}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    >
      <div className="cursor-outline"></div>
      <div className="cursor-dot"></div>
    </div>
  );
};

export default CustomCursor;
