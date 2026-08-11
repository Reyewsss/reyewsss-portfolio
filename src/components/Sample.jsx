// Sample.jsx
import { motion } from "framer-motion";

function Sample() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0a0a0a]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="loader">
        <span className="loader-inner"></span>
      </div>
      <style>{`
        .loader {
          display: inline-block;
          width: 40px;
          height: 40px;
          position: relative;
          border: 3px solid #4ADE80;
          animation: loader 2s infinite ease;
        }

        .loader-inner {
          vertical-align: top;
          display: inline-block;
          width: 100%;
          background-color: #4ADE80;
          animation: loader-inner 2s infinite ease-in;
        }

        @keyframes loader {
          0% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(180deg);
          }
          50% {
            transform: rotate(180deg);
          }
          75% {
            transform: rotate(360deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes loader-inner {
          0% {
            height: 0%;
          }
          25% {
            height: 0%;
          }
          50% {
            height: 100%;
          }
          75% {
            height: 100%;
          }
          100% {
            height: 0%;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default Sample;
