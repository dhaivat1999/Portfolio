import React, { useState, useEffect } from "react";
import Pdf from "./assets/Dhaivat_CV.pdf";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

const NavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    className="relative font-medium text-gray-300 hover:text-white transition-colors duration-300 
              after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-4px] after:left-0 
              after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
    smooth={true}
    duration={500}
    onClick={onClick}
  >
    {children}
  </Link>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link
              to="home"
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400 
                        text-xl font-bold cursor-pointer hover:opacity-80 transition-opacity duration-300"
              smooth={true}
              duration={500}
            >
              Dhaivat Desai
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 
                       hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 
                       focus:ring-inset focus:ring-blue-500 transition-all duration-300"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            <NavLink to="home">Home</NavLink>
            <NavLink to="expertise">Expertise</NavLink>
            <NavLink to="project">Projects</NavLink>
            <NavLink to="experience">Experience</NavLink>
            <NavLink to="education">Education</NavLink>
            <NavLink to="social">Social</NavLink>
            <a
              href={Pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="relative px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-violet-500 
                       rounded-full font-medium hover:opacity-90 transition-all duration-300 
                       hover:shadow-lg hover:shadow-blue-500/25"
            >
              Resume
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden absolute left-0 right-0 top-full p-4 backdrop-blur-lg bg-gray-900/90 
                     border-t border-gray-800 shadow-xl transition-all duration-300 transform
                     ${
                       isMobileMenuOpen
                         ? "translate-y-0 opacity-100"
                         : "-translate-y-full opacity-0"
                     }`}
        >
          <div className="flex flex-col space-y-4 p-4">
            <NavLink to="home" onClick={toggleMobileMenu}>
              Home
            </NavLink>
            <NavLink to="expertise" onClick={toggleMobileMenu}>
              Expertise
            </NavLink>
            <NavLink to="project" onClick={toggleMobileMenu}>
              Projects
            </NavLink>
            <NavLink to="experience" onClick={toggleMobileMenu}>
              Experience
            </NavLink>
            <NavLink to="education" onClick={toggleMobileMenu}>
              Education
            </NavLink>
            <NavLink to="social" onClick={toggleMobileMenu}>
              Social
            </NavLink>
            <a
              href={Pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 text-white bg-gradient-to-r from-blue-500 to-violet-500 
                       rounded-full font-medium hover:opacity-90 transition-all duration-300 text-center"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
