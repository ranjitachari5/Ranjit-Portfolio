import 'tailwindcss'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { FiPhone } from 'react-icons/fi'

const Navbar = () => {
  return (
    <div className="container mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between text-white font-serif px-4 sm:px-8 py-4 gap-3">
      <nav>
        <ul className="flex flex-wrap justify-center gap-3 sm:gap-5 text-sm sm:text-base">
          <li className="hover:underline decoration-amber-500"><Link to="/" >Home</Link></li>
          <li className="hover:underline decoration-amber-500"><Link to="/projects" >Projects</Link></li>
          <li className="hover:underline decoration-amber-500"><Link to="/" >Resume</Link></li>
          <li className="hover:underline decoration-amber-500"><Link to="/about" >About</Link></li>
          <li className="hover:underline decoration-amber-500"><Link to="/contact" >Contact</Link></li>
        </ul>
      </nav>
      <p className="text-xl gap-4 ml-5 flex  sm:text-2xl md:text-4xl text-m:text-right">
        <a
          href="https://github.com/ranjitachari5"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-100"
        >
          <FaGithub className="w-6  hover:scale-110 h-6" />
        </a>
        <a
          href="tel:+917892356966"
          className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-100"
        >
          <FiPhone className="w-6 hover:scale-110 h-6" />
        </a>
        <a
          href="mailto:ranjitkumarachari5@gmail.com"
          className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-100"
        >
          <HiOutlineMail className="w-6 hover:scale-110 h-6" />
        </a>
      <Link className="ml-10 flex items-center gap-2" to="/">
        <img src="/logo.png" alt="Logo" className="h-8 w-8 object-contain" />
        Ranjit Kumar A
      </Link>
      </p>
    </div>
  );
};
export default Navbar;