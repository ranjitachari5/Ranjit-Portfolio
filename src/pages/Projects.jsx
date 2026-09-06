import realEstate from '../../assets/realestate.png'
import interiorDesign from '../../assets/interior_design.png'
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Secure Access Platform",
      role: "Backend Developer",
      technologies: "FastAPI, PostgreSQL, WebSockets",
      description: "Developing backend APIs with authentication and RBAC/ABAC access control.",
      github: "https://github.com/ranjitachari5/Broken-access-control",
    },
    {
      title: "Sri Venkateshwara Enclave",
      role: "Freelance Web Developer",
      technologies: "HTML, CSS, JavaScript",
      description: "Built and deployed a responsive real-estate website for property showcasing and customer enquiries.",
      image: realEstate,
      github: "https://github.com/ranjitachari5/Sri-Venkateshwara-Enclave",
      live: "https://srivenkateshwaraenvclave.netlify.app/",
    },
    {
      title: "Interior Designing Website",
      role: "Freelance Web Developer",
      technologies: "HTML, CSS, JavaScript",
      description: "Developed and deployed a responsive interior-design business website with project galleries and contact functionality.",
      image: interiorDesign,
      github: "https://github.com/ranjitachari5/Interior_designing_website",
      live: "https://ranjitachari5.github.io/Interior_designing_website/",
    },
    {
      title: "Tesla and GameStop Historical Share Price Dashboard",
      role: "Data Analysis Project",
      technologies: "Python, Pandas, Matplotlib",
      description: "Dashboard for exploring historical Tesla and GameStop share-price data.",
      github: "https://github.com/ranjitachari5/Tesla-and-Game-Stop-Historical-Share-Price-Dashboard.git",
    }
    
  ];

  return (
    <div className="relative overflow-hidden min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-amber-50 font-bold text-center mb-4">
          Projects
        </h1>

        <p className="text-lg text-center mb-12 text-amber-50">Selected software and freelance web development work.</p>

    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8 px-1 sm:px-0">
          {projects.map((project, index) => (
            <article key={index} className="group relative overflow-hidden rounded-2xl shadow-lg bg-white transition duration-300 ease-out hover:z-10 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl active:scale-[1.01]">
              {project.image ? <img src={project.image} alt={project.title} className="w-full h-52 object-cover transition duration-500 group-hover:scale-105" /> : <div className="h-52 bg-green-900 flex items-center justify-center text-white text-5xl font-bold">{project.title.startsWith("Tesla") ? "TG" : "SA"}</div>}
              <div className="p-5 text-gray-800">
                <h2 className="text-xl font-semibold">{project.title}</h2>
                <p className="mt-2 text-sm font-medium text-green-800">{project.role}</p>
                <p className="mt-2 text-sm">{project.technologies}</p>
                <p className="mt-3 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-4 mt-5 text-sm font-semibold">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-900 hover:text-amber-600">
                    <FaGithub /> GitHub
                  </a>
                  {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-900 hover:text-amber-600">
                    <FaExternalLinkAlt /> Live Website
                  </a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Projects;