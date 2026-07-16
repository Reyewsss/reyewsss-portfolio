import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  const scrollToNextSection = () => {
    const element = document.getElementById("hero-section");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="px-6 py-4 flex items-center">
      <div className="max-w-5xl mx-auto w-full justify-between md:flex md:items-center gap-4 md:gap-0">
        <div>
          <h1
            onClick={scrollToNextSection}
            className="text-base font-geist font-bold items-center text-white/80 cursor-pointer"
          >
            Reyewsss
            <span className="text-green-400 text-3xl ml-0.5">.</span>
          </h1>
          <span className="font-geist-mono text-xs text-white/40">
            Web Developer
          </span>
        </div>

        {/* <ul className="font-geist-mono col-span-1 ml-16 justify-center flex flex-col items-start space-y-2 md:flex-row md:items-center md:space-y-0 md:space-x-10 md:mx-auto text-xs text-white/40">
          <li className="border-b-2 border-transparent hover:border-green-400 hover:text-white transition pb-0.5">
            <a href="/about">About</a>
          </li>
          <li className="border-b-2 border-transparent hover:border-green-400 hover:text-white transition pb-0.5">
            <a href="/projects">Projects</a>
          </li>
        </ul> */}

        <ul className="flex items-center mt-4 space-x-4 md:space-x-6">
          <li>
            <a
              href="https://github.com/Reyewsss"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl md:text-2xl text-white/60 hover:text-green-400 hover:border-green-400 transition-all duration-300"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="w-7 h-7 md:w-8 md:h-8"
              />
            </a>
          </li>

          <li>
            <a
              href="mailto:reyesjundillmharcalagahan@gmail.com"
              className="text-xl md:text-2xl text-white/60 hover:text-green-400 hover:border-green-400 transition-all duration-300"
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className="w-7 h-7 md:w-8 md:h-8"
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
