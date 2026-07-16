import { useEffect } from "react";
import { preLoaderAnim } from "./Animations/PreloaderAnimation";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>R</span>
        <span>e</span>
        <span>y</span>
        <span>e</span>
        <span>w</span>
        <span>s</span>
        <span>s</span>
        <span>s</span>
        <span className="text-green-400 text-3xl ml-0.5">.</span>
      </div>
    </div>
  );
};

export default PreLoader;
