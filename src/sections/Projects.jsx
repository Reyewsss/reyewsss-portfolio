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
      liveLink: "https://yourportfolio.com",
      codeLink: "https://github.com/Reyewsss/portfolio-website-1",
    },
  ];

  return (
    <section
      id="projects-section"
      className="flex border-b border-white/10 shadow-lg items-center justify-center px-6"
    >
      <div className="max-w-5xl mx-auto w-full mb-28 mt-28">
        <div className="justify-start text-justify">
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
          {/* Projects Grid */}
          <div className="font-geist grid grid-cols-1 md:grid-cols-3 gap-16 mt-10 text-white">
            {projects.map((project) => (
              <div key={project.id} className="flex flex-col">
                {/* Image Container */}
                <div
                  className={`scroll max-w-sm rounded-xl overflow-hidden shadow-[0_0_60px_rgba(74,222,128,0.25)] transition-shadow duration-500`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                  />
                </div>

                {/* Project Info */}
                <h1 className="text-2xl font-bold mt-8 text-white/80 scroll">
                  {project.title}
                </h1>
                <p className="font-geist-mono text-xs scroll">{project.year}</p>
                <p className="mt-2 text-sm text-white/60 scroll">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-2 text-xs">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="scroll inline-block hover:text-green-400 hover:bg-green-400/20 transition-all duration-300 bg-gray-400/20 text-white/60 font-medium py-1 px-3 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="scroll inline-flex items-center gap-2 text-sm text-white/80 hover:text-green-400 transition-colors duration-300 group"
                  >
                    <span>Live Demo</span>
                    <FontAwesomeIcon
                      icon={faExternalLinkAlt}
                      className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    />
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="scroll inline-flex items-center gap-2 text-sm text-white/60 hover:text-green-400 transition-colors duration-300 group"
                  >
                    <span>Source Code</span>
                    <FontAwesomeIcon
                      icon={faCode}
                      className="text-xs group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                    />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
