// App.jsx
import Footer from "./components/Footer";
import { motion as m } from "framer-motion";
import { ReactLenis } from "lenis/react";
import "./styles/preloader.css";
import Home from "./pages/Home";
import Sample from "./components/Sample.jsx";
import CustomCursor from "./components/CustomCursor";
import { useState, useEffect } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis root>
      <CustomCursor />

      {/* Preloader */}
      {isLoading && <Sample />}

      {/* Main Content */}
      {!isLoading && (
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <Home />
          <Footer />
        </m.div>
      )}
    </ReactLenis>
  );
}

export default App;
