import Wave from "../components/Wave";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';

function About() {
  return (
    <>
      <div className="w-full relative pt-20 pb-36 md:pb-44 overflow-hidden ">
        <div className="relative z-10 max-w-6xl mx-auto px-8">

          {/* Title */}
          <h1 className="text-5xl font-bold text-[#e2e4dc] mb-12 text-center">
            About Me
          </h1>

          {/* Side-by-side layout: photo left, text right */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">

            {/* Photo — left column */}
            <div className="shrink-0 w-full md:w-2/5 flex justify-center md:justify-start">
              <img
                className="h-72 sm:h-80 md:h-105 lg:h-120 w-auto object-cover"
                src="/assets/ranjit1.png"
                alt="Ranjit"
              />
            </div>

            {/* Text — right column */}
            <div className="w-full md:w-3/5 flex flex-col text-[#e0e3dc] gap-6">
              <p className="text-lg md:text-xl font-serif leading-relaxed text-justify">
                Hello, I'm Ranjit, a Computer Science Engineering student passionate
                about building modern digital experiences and exploring the
                possibilities of artificial intelligence. I enjoy creating full-stack
                applications, experimenting with AI-powered solutions, and learning
                new technologies that help transform ideas into reality.
              </p>

              <p className="text-lg md:text-xl font-serif leading-relaxed  text-justify">
                I believe that great software is a combination of clean code, thoughtful
                design, and continuous improvement. Through personal projects and
                hands-on learning, I strive to develop solutions that are efficient,
                scalable, and visually appealing.
              </p>

              <p className="text-lg md:text-xl font-serif leading-relaxed text-justify">
                When I'm not coding, I'm constantly exploring emerging technologies,
                improving my problem-solving skills, and working toward becoming a
                better software engineer. My journey is driven by curiosity, creativity,
                and the desire to build technology that makes a meaningful impact.
              </p>
            </div>
          </div>
        </div>

        <Wave />
      </div>

      {/* Social links section */}
      <div className="w-full bg-[#e2e4dc] min-h-[25vh] flex items-start justify-center gap-6 pt-10 pb-12">
        <a
          href="https://github.com/ranjitachari5"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full  border-gray-800 flex items-center justify-center hover:bg-gray-200 transition"
        >
          <FaGithub className="w-8 h-8 text-gray-800" />
        </a>

        <a
          href="https://www.linkedin.com/in/ranjit-kumar-a-3a7785335"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full  border-gray-800 flex items-center justify-center hover:bg-gray-200 transition"
        >
          <FaLinkedin className="w-8 h-8 text-gray-800" />
        </a>

        <a
          href="tel:+917892356966"
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full  border-gray-800 flex items-center justify-center hover:bg-gray-200 transition"
        >
          <FiPhone className="w-8 h-8 text-gray-800" />
        </a>
      </div>
    </>
  );
}

export default About;