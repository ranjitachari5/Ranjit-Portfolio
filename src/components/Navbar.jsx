import 'tailwindcss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { FiMenu, FiPhone, FiX } from 'react-icons/fi'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="relative z-50 container mx-auto px-4 sm:px-8 py-4 text-white font-serif">
      <div className="flex items-center justify-between gap-4">
        <Link className="text-lg sm:text-xl font-semibold tracking-wide" to="/" onClick={closeMenu}>Ranjit Kumar A</Link>

        <button
          type="button"
          className="md:hidden w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {menuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>

        <nav id="primary-navigation" className={`${menuOpen ? 'block' : 'hidden'} md:block absolute md:static top-full left-4 right-4 md:flex md:items-center md:justify-between bg-[#273328] md:bg-transparent border border-white/10 md:border-0 rounded-xl md:rounded-none shadow-xl md:shadow-none p-4 md:p-0`}>
          <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-5 text-sm sm:text-base">
            <li className="hover:text-amber-400 transition"><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li className="hover:text-amber-400 transition"><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li className="hover:text-amber-400 transition"><a href="/#skills" onClick={closeMenu}>Skills</a></li>
            <li className="hover:text-amber-400 transition"><Link to="/experience" onClick={closeMenu}>Experience</Link></li>
            <li className="hover:text-amber-400 transition"><Link to="/projects" onClick={closeMenu}>Projects</Link></li>
            <li className="hover:text-amber-400 transition"><Link to="/certifications" onClick={closeMenu}>Certifications</Link></li>
            <li className="hover:text-amber-400 transition"><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>
          <div className="flex md:hidden items-center gap-3 mt-5 pt-4 border-t border-white/10">
            <a href="https://github.com/ranjitachari5" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 rounded-full flex items-center justify-center hover:text-amber-400 transition">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/ranjit-kumar-a-3a7785335" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 rounded-full flex items-center justify-center hover:text-amber-400 transition">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="mailto:ranjitkumarachari5@gmail.com" aria-label="Email" className="w-9 h-9 rounded-full flex items-center justify-center hover:text-amber-400 transition">
              <HiOutlineMail className="w-5 h-5" />
            </a>
            <a href="tel:+917892356966" aria-label="Phone" className="w-9 h-9 rounded-full flex items-center justify-center hover:text-amber-400 transition">
              <FiPhone className="w-5 h-5" />
            </a>
          </div>
        </nav>

        <div className="hidden md:flex items-center gap-2 text-2xl">
        <a
          href="https://github.com/ranjitachari5"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="w-10 h-10 rounded-full flex items-center justify-center hover:text-amber-400 transition"
        >
          <FaGithub className="w-6  hover:scale-110 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/ranjit-kumar-a-3a7785335"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="w-10 h-10 rounded-full flex items-center justify-center hover:text-amber-400 transition"
        >
          <FaLinkedin className="w-6 hover:scale-110 h-6" />
        </a>
        <a
          href="tel:+917892356966"
          aria-label="Phone"
          className="w-10 h-10 rounded-full flex items-center justify-center hover:text-amber-400 transition"
        >
          <FiPhone className="w-6 hover:scale-110 h-6" />
        </a>
        <a
          href="mailto:ranjitkumarachari5@gmail.com"
          aria-label="Email"
          className="w-10 h-10 rounded-full flex items-center justify-center hover:text-amber-400 transition"
        >
          <HiOutlineMail className="w-6 hover:scale-110 h-6" />
        </a>
        </div>
      </div>
    </header>
  );
};
export default Navbar;