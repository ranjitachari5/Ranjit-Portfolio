import Wave from "../components/Wave";
import ranjit1 from '../../assets/ranjit1.png'
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
                src={ranjit1}
                alt="Ranjit"
              />
            </div>

            {/* Text — right column */}
            <div className="w-full md:w-3/5 flex flex-col text-[#e0e3dc] gap-6">
              <p className="text-lg md:text-xl font-serif leading-relaxed text-justify">
                Computer Science and Engineering student with experience in Python,
                C++, JavaScript, PHP, SQL, and front-end development. Interested in
                software development, backend engineering, and building practical web
                applications.
              </p>

              <p className="text-lg md:text-xl font-serif leading-relaxed text-justify">
                I am currently studying at Rajarajeswari College of Engineering,
                Bengaluru, where I am building a strong foundation in software
                development through coursework, internships, and hands-on projects.
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