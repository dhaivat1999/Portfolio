import React, { useState, useEffect } from "react";
import Pdf from "./assets/Dhaivat_CV.pdf";
import { Link, Element } from 'react-scroll';
export default function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

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
  return (
    <header id="header" className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-transparent shadow-lg' : 'bg-transparent'}`}>
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1"></div>
        <div className="flex lg:hidden"></div>
        <div className="lg:flex lg:gap-x-12">
          <a>
          <Link to="home" className="font-semibold leading-6 text-gray-100 hover:text-opacity-50" smooth={true} duration={800}>Home</Link> 
          </a>
          <a>
          <Link to="expertise" className="font-semibold leading-6 text-gray-100 hover:text-opacity-50" smooth={true} duration={800}>Expertise</Link> 
          </a>
          <a>
          <Link to="experience" className="font-semibold leading-6 text-gray-100 hover:text-opacity-50" smooth={true} duration={800}>Experience</Link> 
          </a>
          <a > 
          <Link to="education" className="font-semibold leading-6 text-gray-100 hover:text-opacity-50" smooth={true} duration={800}>Education</Link> 
          </a>
          <a href="https://www.linkedin.com/in/dhaivatdesai1999/" className="font-semibold leading-6 text-gray-100 hover:text-opacity-50">
            LinkedIn
          </a>
          <a href={Pdf} target="_blank" rel="noopener noreferrer" className="font-semibold leading-6 text-gray-100 hover:text-opacity-50">
            Resume
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
      </nav>
    </header>
  );
}
