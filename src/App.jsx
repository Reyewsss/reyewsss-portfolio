import Footer from "./components/Footer";
// import AppRoutes from "./Routes";
import { motion as m } from "framer-motion";
import { ReactLenis } from "lenis/react";
import PreLoader from "./components/PreLoader";
import "./styles/preloader.css";
import Home from "./pages/Home";

function App() {
  return (
    <ReactLenis root>
      <PreLoader />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      >
        <Home />
        <Footer />
      </m.div>
    </ReactLenis>
  );
}

export default App;
