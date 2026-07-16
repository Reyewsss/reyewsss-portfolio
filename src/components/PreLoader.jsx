import { useEffect } from "react";
import { preLoaderAnim } from "./Animations/PreloaderAnimation";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader">
      <div className="texts-container">
        <span>Designer,</span>
        <span> Curator,</span>
        <span> Developer.</span>
      </div>
    </div>
  );
};

export default PreLoader;
