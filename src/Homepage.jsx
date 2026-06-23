import 'tailwindcss'
import ranjit3 from '../assets/ranjit3.png'
import { FaGithub, FaPython, FaReact, FaCss3Alt } from 'react-icons/fa'
import { SiGit, SiNumpy, SiHtml5, SiJavascript, SiTailwindcss, SiMysql } from 'react-icons/si'
const Homepage = () => {
  return (
    <>
      {/* Hero */}
      <div className=" text-white font-serif pt-16 sm:pt-20 pb-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Hi, I'm<u className="text-green-700"> Ranjit</u>.
            </h1>
            <p className="mt-4">An Aspiring AI Engineer</p>
            <p className="mt-0">and Python FullStack Learner ...</p>
          </div>
          <img
            className="h-48 sm:h-64 md:h-72 lg:h-96 w-auto shrink-0 md:ml-10"
            src={ranjit3}
            alt="Ranjit"
          />
        </div>
      </div>

      <div className="w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-15 md:h-25 fill-[#e2e4dc]">
          <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,120L1320,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"></path>
        </svg>
      </div>

  

  
      <div className="bg-[#e2e4dc] text-green-800 font-serif pt-10 pb-10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
 <div className="flex flex-col items-start gap-4">
            <h2 className="text-3xl font-bold text-green-900">Skills </h2>
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 hover:scale-110 transition" title="Git">
                <SiGit className="w-6 h-6" />
              </span>

              <span className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 hover:scale-110 transition" title="GitHub">
                <FaGithub className="w-6 h-6" />
              </span>

              <span className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 hover:scale-110 transition" title="Python">
                <FaPython className="w-6 h-6" />
              </span>

              <span className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 hover:scale-110 transition" title="NumPy">
                <SiNumpy className="w-6 h-6" />
              </span>

              <span className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 hover:scale-110 transition" title="HTML5">
                <SiHtml5 className="w-6 h-6" />
              </span>

              <span className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 hover:scale-110 transition" title="CSS3">
                <FaCss3Alt className="w-6 h-6" />
              </span>

              <span className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 hover:scale-110 transition" title="JavaScript">
                <SiJavascript className="w-6 h-6" />
              </span>

              <span className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 hover:scale-110 transition" title="SQL">
                <SiMysql className="w-6 h-6" />
              </span>

              <span className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 hover:scale-110 transition" title="React">
                <FaReact className="w-6 h-6" />
              </span>

              <span className="w-12 h-12 rounded-full flex items-center justify-center border border-gray-300 hover:scale-110 transition" title="Tailwind CSS">
                <SiTailwindcss className="w-6 h-6" />
              </span>
            </div>
          </div>

         
        </div>
      </div>


      <div className="w-full bg-[#e2e4dc] overflow-hidden leading-none">
        <footer className="text-center px-4 mt-10 mb-10 font-serif text-sm sm:text-base">
          © 2026 Ranjit Kumar A. All Rights Reserved.
        </footer>
      </div>
    </>
  );
};
export default Homepage;