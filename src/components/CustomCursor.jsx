import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";

function CustomCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  // Track hover state on interactive elements
  useEffect(() => {
    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if the element or its parent is interactive
      const isInteractive =
        target.closest("button") ||
        target.closest("a") ||
        target.closest('[role="button"]') ||
        target.closest("input") ||
        target.closest("select") ||
        target.closest("textarea") ||
        target.closest("img") ||
        target.closest(".cursor-pointer") ||
        target.closest(".hover\\:scale-") ||
        target.closest('[data-cursor="hover"]') ||
        target.tagName === "IMG" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        (target.closest(".group") &&
          target.closest(".group").querySelector("button, a, img")) ||
        (target.parentElement?.closest(".group") &&
          target.parentElement
            .closest(".group")
            .querySelector("button, a, img"));

      setIsHovering(!!isInteractive);
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      const isInteractive =
        target.closest("button") ||
        target.closest("a") ||
        target.closest('[role="button"]') ||
        target.closest("input") ||
        target.closest("select") ||
        target.closest("textarea") ||
        target.closest("img") ||
        target.closest(".cursor-pointer") ||
        target.closest(".hover\\:scale-") ||
        target.closest('[data-cursor="hover"]') ||
        target.tagName === "IMG" ||
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        (target.closest(".group") &&
          target.closest(".group").querySelector("button, a, img")) ||
        (target.parentElement?.closest(".group") &&
          target.parentElement
            .closest(".group")
            .querySelector("button, a, img"));

      if (!isInteractive) {
        setIsHovering(false);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 767px)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
      setIsHovering(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", checkMobile);
    };
  }, [cursorX, cursorY]);

  // Don't render on mobile or if reduced motion is preferred
  if (isMobile || prefersReducedMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="fixed pointer-events-none z-[9999] rounded-full border-2 border-green-400/70"
      style={{
        x: x,
        y: y,
        translateX: "-50%",
        translateY: "-50%",
        width: isHovering ? 56 : 28,
        height: isHovering ? 56 : 28,
      }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8,
        borderColor: isHovering
          ? "rgba(74, 222, 128, 1)"
          : "rgba(74, 222, 128, 0.7)",
        boxShadow: isHovering ? "0 0 20px rgba(74, 222, 128, 0.3)" : "none",
      }}
      transition={{
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
        width: { duration: 0.3, ease: "easeOut" },
        height: { duration: 0.3, ease: "easeOut" },
        borderColor: { duration: 0.3 },
        boxShadow: { duration: 0.3 },
      }}
    />
  );
}

export default CustomCursor;
