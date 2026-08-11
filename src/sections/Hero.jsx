// Hero.jsx
import TextType from "../components/Animations/TextType";
import {
  motion as m,
  useReducedMotion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const [isRevealed, setIsRevealed] = useState(false);

  const [isMobile, setIsMobile] = useState(() => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function"
    ) {
      return false;
    }
    return window.matchMedia("(max-width: 767px)").matches;
  });

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof window.matchMedia !== "function"
    ) {
      return;
    }
    const mql = window.matchMedia("(max-width: 767px)");
    const handleChange = (e) => setIsMobile(e.matches);

    if (typeof mql.addEventListener === "function") {
      mql.addEventListener("change", handleChange);
      return () => mql.removeEventListener("change", handleChange);
    }
    mql.addListener(handleChange);
    return () => mql.removeListener(handleChange);
  }, []);

  // Canvas reveal animation timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const canvasRef = useRef(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const tiltX = useSpring(rawX, { stiffness: 90, damping: 18, mass: 0.6 });
  const tiltY = useSpring(rawY, { stiffness: 90, damping: 18, mass: 0.6 });

  const rotateX = useTransform(tiltY, [-140, 140], [6, -6]);
  const rotateY = useTransform(tiltX, [-140, 140], [-6, 6]);

  const interactive = !isMobile && !prefersReducedMotion;

  const handleMouseMove = (e) => {
    if (!interactive) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    rawX.set(Math.max(-140, Math.min(140, relX)));
    rawY.set(Math.max(-140, Math.min(140, relY)));
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const scrollToNextSection = () => {
    const element = document.getElementById("projects-section");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <m.section
      id="hero-section"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 overflow-hidden relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex items-center justify-center">
          <div
            ref={canvasRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full max-w-5xl h-[75vh] sm:h-[70vh] md:h-[72vh] lg:h-[75vh] xl:h-[78vh] flex items-center justify-center mx-auto mb-4 sm:mb-6 md:mb-8 lg:mb-10"
            style={{ perspective: 1200 }}
          >
            <m.div
              variants={itemVariants}
              style={
                interactive
                  ? { rotateX, rotateY, transformStyle: "preserve-3d" }
                  : undefined
              }
              className="relative w-[92%] h-[88%] rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] backdrop-blur-sm shadow-2xl shadow-green-400/10 overflow-hidden p-4 sm:p-6 md:p-8 lg:p-12 xl:p-16 flex flex-col items-center justify-center"
            >
              {/* Content inside the canvas */}
              <div className="max-w-3xl w-full space-y-5 sm:space-y-4 md:space-y-5 lg:space-y-6 text-center">
                {/* Status Badge */}
                <m.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full border border-green-400/30 bg-green-400/5 px-3 sm:px-4 py-1.5 sm:py-2 mx-auto"
                >
                  <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-green-400" />
                  </span>
                  <p className="text-green-400 font-geist-mono text-[10px] sm:text-xs md:text-sm tracking-wide">
                    Open to internship opportunities
                  </p>
                </m.div>

                {/* Main Heading */}
                <m.h1
                  variants={itemVariants}
                  className="font-geist text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-relaxed sm:leading-tight"
                >
                  <span className="block mb-2 sm:mb-0">IT Student &</span>
                  <span className="block text-green-400">
                    <TextType
                      text={[
                        "Web Developer",
                        "UI/UX Designer",
                        "Frontend Developer",
                      ]}
                      typingSpeed={80}
                      deletingSpeed={50}
                      pauseDuration={2000}
                      showCursor={true}
                      cursorCharacter="|"
                      cursorBlinkDuration={0.5}
                      loop={true}
                    />
                  </span>
                </m.h1>

                {/* Description */}
                <m.p
                  variants={itemVariants}
                  className="text-white/60 font-geist text-xs sm:text-sm md:text-base max-w-2xl mx-auto px-2 mt-2 sm:mt-0"
                >
                  Crafting exceptional digital experiences through creative
                  design and innovative solutions.
                </m.p>

                {/* CTA Button */}
                <m.div
                  variants={itemVariants}
                  data-cursor="hover"
                  className="pt-2 sm:pt-1"
                >
                  <m.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToNextSection}
                    className="bg-green-400/20 cursor-pointer border border-green-400 text-white/80 px-5 sm:px-5 md:px-6 py-2.5 sm:py-2.5 md:py-3 rounded-lg hover:bg-green-400/30 transition-all duration-300 text-xs sm:text-sm font-geist-mono"
                  >
                    See the work →
                  </m.button>
                </m.div>
              </div>
            </m.div>

            {/* Top-left corner decoration */}
            <m.div
              className="absolute top-0 left-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-t-2 border-l-2 border-green-400/20 rounded-tl-xl sm:rounded-tl-2xl pointer-events-none z-20"
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{
                x: isRevealed ? 0 : 0,
                y: isRevealed ? 0 : 0,
                opacity: isRevealed ? 1 : 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: "easeInOut",
              }}
            />

            {/* Bottom-right corner decoration */}
            <m.div
              className="absolute bottom-0 right-0 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 border-b-2 border-r-2 border-green-400/20 rounded-br-xl sm:rounded-br-2xl pointer-events-none z-20"
              initial={{ x: 0, y: 0, opacity: 1 }}
              animate={{
                x: isRevealed ? 0 : 0,
                y: isRevealed ? 0 : 0,
                opacity: isRevealed ? 1 : 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: "easeInOut",
              }}
            />

            {/* Outside-In Reveal - Top Left corner peeling */}
            <m.div
              className="absolute top-0 left-0 w-1/2 h-1/2 pointer-events-none z-10 overflow-hidden"
              initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
              animate={{
                clipPath: isRevealed
                  ? "inset(0% 0% 100% 100%)"
                  : "inset(0% 0% 0% 0%)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="w-full h-full bg-gradient-to-br from-black to-black/90 rounded-tl-xl sm:rounded-tl-2xl" />
            </m.div>

            {/* Outside-In Reveal - Bottom Right corner peeling */}
            <m.div
              className="absolute bottom-0 right-0 w-1/2 h-1/2 pointer-events-none z-10 overflow-hidden"
              initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
              animate={{
                clipPath: isRevealed
                  ? "inset(100% 100% 0% 0%)"
                  : "inset(0% 0% 0% 0%)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="w-full h-full bg-gradient-to-tl from-black to-black/90 rounded-br-xl sm:rounded-br-2xl" />
            </m.div>

            {/* Outside-In Reveal - Top Right corner peeling */}
            <m.div
              className="absolute top-0 right-0 w-1/2 h-1/2 pointer-events-none z-10 overflow-hidden"
              initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
              animate={{
                clipPath: isRevealed
                  ? "inset(0% 100% 100% 0%)"
                  : "inset(0% 0% 0% 0%)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="w-full h-full bg-gradient-to-bl from-black to-black/90" />
            </m.div>

            {/* Outside-In Reveal - Bottom Left corner peeling */}
            <m.div
              className="absolute bottom-0 left-0 w-1/2 h-1/2 pointer-events-none z-10 overflow-hidden"
              initial={{ clipPath: "inset(0% 0% 0% 0%)" }}
              animate={{
                clipPath: isRevealed
                  ? "inset(100% 0% 0% 100%)"
                  : "inset(0% 0% 0% 0%)",
              }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <div className="w-full h-full bg-gradient-to-tr from-black to-black/90" />
            </m.div>

            {/* Central reveal - fades in after corners peel */}
            <m.div
              className="absolute inset-0 pointer-events-none z-10"
              initial={{ opacity: 1 }}
              animate={{
                opacity: isRevealed ? 0 : 1,
              }}
              transition={{
                duration: 0.6,
                delay: 0.6,
                ease: "easeOut",
              }}
            >
              <div className="w-full h-full bg-black/95 rounded-xl sm:rounded-2xl" />
            </m.div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <m.button
        variants={itemVariants}
        onClick={scrollToNextSection}
        aria-label="Scroll to projects"
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 lg:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-1.5 md:gap-2 text-white/30 hover:text-green-400 transition-colors duration-300"
      >
        <span className="text-[8px] sm:text-[9px] md:text-[10px] font-geist-mono tracking-[0.2em] uppercase">
          Scroll
        </span>
        <m.div
          animate={!prefersReducedMotion ? { y: [0, 6, 0] } : undefined}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-sm sm:text-base md:text-xl"
        >
          ↓
        </m.div>
      </m.button>
    </m.section>
  );
}

export default Hero;
