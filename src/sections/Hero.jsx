// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TextType from "../components/Animations/TextType";
import { motion as m } from "framer-motion";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
const Spline = lazy(() => import("@splinetool/react-spline"));
import image_preview from "../assets/images/3d-preview.jpg";

function Hero() {
  const splineContainerRef = useRef(null);
  const [isSplineVisible, setIsSplineVisible] = useState(false);

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

  useEffect(() => {
    const node = splineContainerRef.current;
    if (!node || isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSplineVisible(entry.isIntersecting),
      { threshold: 0.1 },
    );
    observer.observe(node);

    return () => observer.disconnect();
  }, [isMobile]);

  const shouldRenderSpline = !isMobile && isSplineVisible;

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
      className="min-h-screen flex items-center justify-center px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2">
            <m.p
              variants={itemVariants}
              className="text-green-400 font-geist-mono text-xs mb-6"
            >
              Open to internship opportunities
            </m.p>

            <m.h1
              variants={itemVariants}
              className="font-geist text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              <span className="block">Information Technology Student &</span>
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

            <m.div
              variants={itemVariants}
              className="flex flex-wrap text-xs gap-4 mt-10 font-geist-mono"
            >
              <button
                whileTap={{ scale: 0.9 }}
                onClick={scrollToNextSection}
                className="bg-green-400/20 cursor-pointer border border-green-400 text-white/80 px-6 py-3 rounded-lg hover:bg-green-400/30 transition-all duration-300"
              >
                See the work
              </button>
              {/* <button className="border border-white/30 text-white/60 px-6 py-3 rounded-lg font-bold hover:text-green-400 hover:border-green-400 transition-all duration-300 flex items-center gap-2">
                Resume
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </button> */}
            </m.div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div
              ref={splineContainerRef}
              className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px] xl:w-[480px] xl:h-[480px]"
            >
              {shouldRenderSpline ? (
                <Suspense
                  fallback={
                    <div className="w-full h-full rounded-full bg-green-400/10 animate-pulse" />
                  }
                >
                  <Spline
                    scene="https://prod.spline.design/Re3JilJ-AGTdYRFX/scene.splinecode"
                    className="w-full h-full"
                    renderOnDemand={true}
                  />
                </Suspense>
              ) : isMobile ? (
                <div className="w-full h-full rounded-full flex items-center justify-center">
                  <img
                    src={image_preview}
                    alt={image_preview}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>
              ) : (
                <div className="w-full h-full rounded-full bg-green-400/10 animate-pulse" />
              )}
            </div>
          </div>
        </div>
      </div>
    </m.section>
  );
}

export default Hero;
