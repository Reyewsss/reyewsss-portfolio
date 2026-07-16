// Home.jsx
import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Contacts from "../sections/Contacts";
import { motion as m, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <m.div
      initial={{ y: 25, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="bg-dark-radial-right min-h-screen">
        <Hero />
        <About />
      </div>
      <Projects />
      <Contacts />

      {/* Animated Scroll to Top Button */}
      <AnimatePresence>
        {isVisible && (
          <m.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed cursor-pointer bottom-8 right-8 bg-green-400/20 border border-green-400 text-white/80 p-3 rounded hover:bg-green-400/30 z-50 shadow-lg backdrop-blur-sm"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-6 h-6" />
          </m.button>
        )}
      </AnimatePresence>
    </m.div>
  );
}

export default Home;
