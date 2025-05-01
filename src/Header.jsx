import React, { useState, useEffect } from "react";
import Pdf from "./assets/Dhaivat_CV.pdf";
import { Link } from "react-scroll";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      id="header"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-transparent shadow-lg" : "bg-transparent"
      }`}
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          {/* LOGO */}
          <a href="#" className="text-customGradient-50 font-bold">
          Dhaivat Desai
          </a>
        </div>
        {/* Hamburger Menu */}
        <div className="flex lg:hidden">
          <button onClick={toggleMobileMenu} className="text-white">
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <a>
            <Link
              to="home"
              className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50"
              smooth={true}
              duration={800}
            >
              Home
            </Link>
          </a>
          <a>
            <Link
              to="expertise"
              className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50"
              smooth={true}
              duration={800}
            >
              Expertise
            </Link>
          </a>
          <a>
            <Link
              to="project"
              className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50"
              smooth={true}
              duration={800}
            >
              Projects
            </Link>
          </a>
          <a>
            <Link
              to="experience"
              className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50"
              smooth={true}
              duration={800}
            >
              Experience
            </Link>
          </a>
          <a>
            <Link
              to="education"
              className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50"
              smooth={true}
              duration={800}
            >
              Education
            </Link>
          </a>
          <a>
            <Link
              to="social"
              className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50"
              smooth={true}
              duration={800}
            >
              Social
            </Link>
          </a>
          <a
            href={Pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute left-0 top-full w-full bg-gray-800 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col gap-4 p-6">
            <Link
              to="home"
              className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50"
              smooth={true}
              duration={800}
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="expertise"
              className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50"
              smooth={true}
              duration={800}
              onClick={toggleMobileMenu}
            >
              Expertise
            </Link>
            <Link
              to="project"
              className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50"
              smooth={true}
              duration={800}
              onClick={toggleMobileMenu}
            >
              Projects
            </Link>
            <Link
              to="experience"
              className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50"
              smooth={true}
              duration={800}
              onClick={toggleMobileMenu}
            >
              Experience
            </Link>
              <Link to="social" className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50" smooth={true} duration={800} onClick={toggleMobileMenu} >
              Social
            </Link>
            <a href={Pdf} target="_blank" rel="noopener noreferrer" className="font-semibold leading-6 text-customGradient-50 hover:text-opacity-50">Resume</a>
          </div>
        </div>
      </nav>
    </header>
  );
}
