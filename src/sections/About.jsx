// About.jsx
import image1 from "../assets/images/reyewss-image-1.jpg";
import image2 from "../assets/images/reyewss-image-2.jpg";

function About() {
  const images = [
    {
      src: image1,
      rotate: -6,
      y: 32,
      class: "z-10",
    },
    {
      src: image2,
      rotate: 6,
      y: -32,
      class: "-ml-16",
    },
  ];

  return (
    <div className="min-h-screen bg-dark-radial-bottom flex items-center justify-center px-6 border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto w-full mt-8">
        <div className="scroll ml-6 relative grid grid-cols-1 sm:grid-cols-2 md:flex md:flex-row justify-items-center items-center gap-8 py-16 md:justify-center md:items-center">
          {images.map((img, i) => (
            <img
              key={i}
              loading="lazy"
              src={img.src}
              alt={`Yeloe ${i + 1}`}
              style={{
                transform: `rotate(${img.rotate}deg) translateY(${img.y}px)`,
                justifySelf: "center",
              }}
              className={`image-scroll w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 object-cover rounded-lg ${img.class} ${i === 1 ? "-ml-0 md:-ml-16" : ""}`}
            />
          ))}
        </div>
        <div className="justify-start text-justify text-white mt-20">
          <h1 className="font-geist-mono text-base text-white/40 scroll">
            <span className="text-green-400">────</span> ABOUT
          </h1>
          <h2 className="text-white font-geist text-4xl md:text-5xl font-bold mt-2 scroll">
            Jundill Mhar C. Reyes
          </h2>
          <h1 className="text-white font-geist-mono text-2xl font-bold py-10 whitespace-pre-line scroll">
            I am a passionate{" "}
            <span className="text-green-400">Web Developer</span> dedicated to
            crafting exceptional digital experiences through{" "}
            <span className="text-green-400">creative design</span>.{"\n\n"}
            <h1 className="scroll">
              With knowledge in <span className="text-green-400">React</span>,{" "}
              <span className="text-green-400">UI/UX</span>, and{" "}
              <span className="text-green-400">responsive design</span>, I bring
              ideas to life with a focus on{" "}
              <span className="text-green-400">performance</span>,{" "}
              <span className="text-green-400">accessibility</span>, and{" "}
              <span className="text-green-400">user delight</span>.{"\n\n"}
            </h1>
          </h1>
          <div>
            <p className="font-geist-mono text-base text-left mt-10 text-white/40 scroll">
              <span>────</span> CURRENTLY
            </p>
            <h1 className="font-geist-mono text-2xl font-bold py-2 whitespace-pre-line scroll">
              Bachelor of Science in Information Technology (4th Year)
              {"\n"}
              <span className="text-green-400 whitespace-pre-line">
                Quezon City University
              </span>
            </h1>
          </div>

          <div className="font-geist-mono mb-24 grid grid-cols-1 md:grid-cols-3 md:gap-4 mt-20 space-y-10 md:space-y-0">
            <div>
              <h1 className="text-lg text-left text-white/80 scroll">
                <span className="text-green-400">──</span> LANGUAGES
              </h1>
              <ul className="flex gap-3 mt-4 text-xs flex-wrap">
                <li className="scroll inline-block hover:text-green-400 hover:bg-green-400/20 transition-all duration-300 bg-gray-400/20 text-white/60 font-medium py-2 px-4 rounded">
                  Java
                </li>
                <li className="scroll inline-block hover:text-green-400 hover:bg-green-400/20 transition-all duration-300 bg-gray-400/20 text-white/60 font-medium py-2 px-4 rounded">
                  C#
                </li>
                <li className="scroll inline-block hover:text-green-400 hover:bg-green-400/20 transition-all duration-300 bg-gray-400/20 text-white/60 font-medium py-2 px-4 rounded">
                  JavaScript
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-lg text-left text-white/80 scroll">
                <span className="text-green-400">──</span> FRAMEWORK
              </h1>
              <ul className="flex gap-3 mt-4 text-xs flex-wrap">
                <li className="scroll inline-block hover:text-green-400 hover:bg-green-400/20 transition-all duration-300 bg-gray-400/20 text-white/60 font-medium py-2 px-4 rounded">
                  React.js
                </li>
                <li className="scroll inline-block hover:text-green-400 hover:bg-green-400/20 transition-all duration-300 bg-gray-400/20 text-white/60 font-medium py-2 px-4 rounded">
                  ASP.NET
                </li>
                <li className="scroll inline-block hover:text-green-400 hover:bg-green-400/20 transition-all duration-300 bg-gray-400/20 text-white/60 font-medium py-2 px-4 rounded">
                  Spring Boot
                </li>
              </ul>
            </div>
            <div>
              <h1 className="text-lg text-left text-white/80 scroll">
                <span className="text-green-400">──</span> CLOUD & DATABASE
              </h1>
              <ul className="flex gap-3 mt-4 text-xs flex-wrap">
                <li className="scroll inline-block hover:text-green-400 hover:bg-green-400/20 transition-all duration-300 bg-gray-400/20 text-white/60 font-medium py-2 px-4 rounded">
                  Azure
                </li>
                <li className="scroll inline-block hover:text-green-400 hover:bg-green-400/20 transition-all duration-300 bg-gray-400/20 text-white/60 font-medium py-2 px-4 rounded">
                  MongoDB
                </li>
                <li className="scroll inline-block hover:text-green-400 hover:bg-green-400/20 transition-all duration-300 bg-gray-400/20 text-white/60 font-medium py-2 px-4 rounded">
                  MySQL
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
