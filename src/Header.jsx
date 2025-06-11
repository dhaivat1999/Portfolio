import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Pdf from "./assets/Dhaivat_CV.pdf";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-scroll";

const NavLink = ({ to, children, onClick }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="relative inline-block"
  >
    <Link
      to={to}
      className="relative font-medium text-gray-300 transition-colors duration-300 group"
      smooth={true}
      duration={500}
      onClick={onClick}
    >
      <span className="relative z-10 hover:text-cyber-primary">
        {children}
      </span>
      <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyber-primary 
                     group-hover:w-full transition-all duration-300 
                     shadow-glow" />
    </Link>
  </motion.div>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-effect border-b border-cyber-primary/20"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
        <div className="relative flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex lg:flex-1"
            whileHover={{ scale: 1.05 }}
          >
            <Link
              to="home"
              className="text-xl font-bold cursor-pointer relative group"
              smooth={true}
              duration={500}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r 
                           from-cyber-primary via-cyan-400 to-blue-400
                           animate-gradient bg-300% neon-text">
                Dhaivat Desai
              </span>
              <span className="absolute -inset-x-4 -inset-y-2 border border-cyber-primary/20
                           rounded-lg opacity-0 group-hover:opacity-100 transition-opacity
                           duration-300" />
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={toggleMobileMenu}
            className="lg:hidden inline-flex items-center justify-center p-2
                     rounded-lg border border-cyber-primary/20 text-cyber-primary
                     hover:bg-cyber-primary/10 transition-colors duration-300"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </motion.button>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            <NavLink to="home">Home</NavLink>
            <NavLink to="expertise">Expertise</NavLink>
            <NavLink to="project">Projects</NavLink>
            <NavLink to="experience">Experience</NavLink>
            <NavLink to="education">Education</NavLink>
            {/* <NavLink to="social">Social</NavLink> */}            <motion.a
              href={Pdf}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="relative group px-4 py-2 font-medium"
            >
              <span className="relative z-10 text-[#00ff88] group-hover:text-white transition-colors duration-300
                [text-shadow:_0_0_8px_rgba(0,255,136,0.5)] group-hover:[text-shadow:_0_0_8px_rgba(255,255,255,0.5)]">
                Resume
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00aaff] opacity-20 
                group-hover:opacity-100 rounded-lg transition-opacity duration-300"></span>
              <span className="absolute inset-0 border-2 border-[#00ff88] rounded-lg 
                [box-shadow:_0_0_15px_rgba(0,255,136,0.3),_inset_0_0_15px_rgba(0,255,136,0.3)]
                group-hover:[box-shadow:_0_0_20px_rgba(0,255,136,0.5),_inset_0_0_20px_rgba(0,255,136,0.5)]
                transition-all duration-300"></span>
            </motion.a>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="lg:hidden absolute left-0 right-0 top-full glass-effect
                       border-t border-cyber-primary/20 shadow-xl"
            >
              <div className="flex flex-col space-y-4 p-4">
                <NavLink to="home" onClick={toggleMobileMenu}>Home</NavLink>
                <NavLink to="expertise" onClick={toggleMobileMenu}>Expertise</NavLink>
                <NavLink to="project" onClick={toggleMobileMenu}>Projects</NavLink>
                <NavLink to="experience" onClick={toggleMobileMenu}>Experience</NavLink>
                <NavLink to="education" onClick={toggleMobileMenu}>Education</NavLink>
                {/* <NavLink to="social" onClick={toggleMobileMenu}>Social</NavLink> */}                <motion.a
                  href={Pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group inline-block px-4 py-2 font-medium text-center"
                >
                  <span className="relative z-10 text-[#00ff88] group-hover:text-white transition-colors duration-300
                    [text-shadow:_0_0_8px_rgba(0,255,136,0.5)] group-hover:[text-shadow:_0_0_8px_rgba(255,255,255,0.5)]">
                    Resume
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00aaff] opacity-20 
                    group-hover:opacity-100 rounded-lg transition-opacity duration-300"></span>
                  <span className="absolute inset-0 border-2 border-[#00ff88] rounded-lg 
                    [box-shadow:_0_0_15px_rgba(0,255,136,0.3),_inset_0_0_15px_rgba(0,255,136,0.3)]
                    group-hover:[box-shadow:_0_0_20px_rgba(0,255,136,0.5),_inset_0_0_20px_rgba(0,255,136,0.5)]
                    transition-all duration-300"></span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}