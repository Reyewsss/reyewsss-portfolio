// Projects.jsx
import project1 from "../assets/images/yeloe.jpg";
import project2 from "../assets/images/sheessentials-cosmetics.jpg";
import project3 from "../assets/images/portfolio.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Yeloe",
      year: "2025",
      description:
        "A Project Management System for students to manage and track their work and collaborate with others.",
      image: project1,
      techStack: ["ASP.NET", "C#", "MongoDB", "Bootstrap", "Azure"],
      liveLink: "https://yeloe-demo.com",
      codeLink: "https://github.com/Reyewsss/yeloe-task-management-web-app",
    },
    {
      id: 2,
      title: "Sheessentials",
      year: "2026",
      description:
        "A Ecommerce platform focused on natural and sustainable skincare products.",
      image: project2,
      techStack: [
        "ASP.NET",
        "C#",
        "MongoDB",
        "Bootstrap",
        "Azure",
        "PayMongo API",
      ],
      liveLink: "https://sheessentials-demo.com",
      codeLink: "https://github.com/Reyewsss/sheessentials-ecommerce-website",
    },
    {
      id: 3,
      title: "Portfolio",
      year: "2026",
      description:
        "A Personal Portfolio website to display my projects and skills.",
      image: project3,
      techStack: ["React.js", "Tailwind CSS", "Framer Motion", "Spline"],
      liveLink: "https://reyewsss.github.io/reyewsss-portfolio/",
      codeLink: "https://github.com/Reyewsss/reyewsss-portfolio",
    },
  ];

  return (
    <section
      id="projects-section"
      className="border-b border-white/10 shadow-lg px-6 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        {/* Header */}
        <div className="justify-start mb-16">
          <h1 className="font-geist-mono text-base text-white/40 scroll">
            <span className="text-green-400">────</span> PROJECTS
          </h1>
          <h2 className="text-white font-geist text-4xl md:text-5xl font-bold mt-2 scroll">
            Featured Work
          </h2>
          <p className="text-white/40 font-geist-mono text-sm mt-4 max-w-2xl scroll">
            Here are some of the projects I've worked on. Each one reflects my
            passion for creating meaningful digital experiences.
          </p>
        </div>

        {projects.map((project, index) => (
          <div
            key={project.id}
            className={`group flex flex-col md:flex-row gap-8 md:gap-12 py-12 md:py-16 ${
              index !== projects.length - 1 ? "border-b border-white/10" : ""
            }`}
          >
            {/* Image Section */}
            <div className="md:w-1/2">
              <div className="scroll relative rounded-xl overflow-hidden shadow-[0_0_60px_rgba(74,222,128,0.15)] transition-shadow duration-500 group-hover:shadow-[0_0_80px_rgba(74,222,128,0.25)]">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Year Badge */}
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                  <span className="font-geist-mono text-xs text-white/80">
                    {project.year}
                  </span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 flex flex-col justify-center">
              {/* Project Number */}
              <span className="scroll font-geist-mono text-sm text-green-400/60 mb-2">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3 className="scroll font-geist text-3xl md:text-4xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Description */}
              <p className="scroll font-geist text-white/60 leading-relaxed mt-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="scroll font-geist-mono text-xs bg-white/10 hover:bg-green-500/20 text-white/60 hover:text-green-400 font-medium py-1.5 px-3 rounded-full transition-all duration-300 border border-white/5 hover:border-green-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-8 flex gap-6">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scroll font-geist-mono inline-flex items-center gap-2 text-sm text-white/80 hover:text-green-400 transition-all duration-300 group/link"
                >
                  <span>Live Demo</span>
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="text-xs group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform duration-300"
                  />
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="scroll font-geist-mono inline-flex items-center gap-2 text-sm text-white/50 hover:text-green-400 transition-all duration-300 group/link"
                >
                  <span>Source Code</span>
                  <FontAwesomeIcon
                    icon={faCode}
                    className="text-xs group-hover/link:translate-x-1 group-hover/link:-translate-y transition-transform duration-300"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
