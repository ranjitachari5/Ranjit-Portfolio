import Wave from "../components/Wave";
import aiFlash from '../../assets/AI-flash.png'
import portfolioImg from '../../assets/portfolio.png'
import gpaCalculator from '../../assets/gpa-calculator.png'
import calculatorImg from '../../assets/calculator.png'
import realEstate from '../../assets/realestate.png'
import interiorDesign from '../../assets/interior_design.png'

function Projects() {
  const projects = [
    {
      title: "AI Flashcard Generator",
      image: aiFlash,
      github: "https://github.com/ranjitachari5/ai_flashcard",
    },
    {
      title: "Portfolio Website",
      image: portfolioImg,
      github: "https://github.com/ranjitachari5/Ranjit-Portfolio",
    },
    {
      title: "GPA Calculator using PyQt5",
      image: gpaCalculator,
      github: "https://github.com/ranjitachari5/gpa_calculator_using_python",
    },
    {
      title: "Simple Calculator Using PyQt5",
      image: calculatorImg,
      github: "https://github.com/ranjitachari5/simple_calculator",
    },
    {
      title: "Real Estate Website",
      image: realEstate,
      github: "https://github.com/ranjitachari5/Sri-Venkateshwara-Enclave",
    },
    {
      title: "Interior Designers website",
      image: interiorDesign,
      github: "https://github.com/ranjitachari5/Interior_designing_website.git",
    }
    
  ];

  return (
    <div className="relative overflow-hidden min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl text-amber-50 font-bold text-center mb-4">
          Projects
        </h1>

        <p className="text-lg text-center mb-12 text-amber-50">
          Here are some of my latest work samples, showcasing web development and AI-focused projects.
        </p>

    
        <div className="grid grid-cols-1 text-2xl  font-semibold md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover group-hover:scale-105 transition duration-300"
              />

              <div className="p-4 bg-white">
                <h2 className="text-sm text-center font-semibold text-gray-800">
                  {project.title}
                </h2>
              </div>
            </a>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Projects;