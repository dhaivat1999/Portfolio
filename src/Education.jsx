import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import Lottie from "lottie-react";
import UpAnimationData from "./assets/UpAnimation.json";
import EducationAnimationData from "./assets/EducationAnimation.json";
import SocialMediaAnimation from "./assets/SocialMediaAnimation.json";
import InstagramAnimation from "./assets/InstagramAnimation.json";
import GithubAnimation from "./assets/GithubAnimation.json";
import MailAnimation from "./assets/MailAnimation.json";
import LinkedinAnimation from "./assets/LinkedInAnimation.json";
import KclLogo from "./assets/KingsLogo.png";
import NirmaLogo from "./assets/NirmaLogo.png";

const CourseTag = ({ name }) => (
  <motion.span
    whileHover={{ scale: 1.05 }}
    className="px-4 py-2 text-sm font-medium rounded-lg bg-[#00ff88]/5 text-[#00ff88]
             border border-[#00ff88]/20 hover:border-[#00ff88]/40 transition-all duration-300
             [text-shadow:_0_0_10px_rgba(0,255,136,0.3)]
             hover:[text-shadow:_0_0_15px_rgba(0,255,136,0.5)]
             shadow-[0_0_10px_rgba(0,255,136,0.1)]
             hover:shadow-[0_0_15px_rgba(0,255,136,0.2)]"
  >
    {name}
  </motion.span>
);

const EducationCard = ({ logo, degree, institution, period, courses }) => (
  <Fade bottom duration={1500}>
    <div className="relative group p-8 rounded-xl overflow-hidden bg-[#0c1120]/80 backdrop-blur-md 
      border-2 border-[#2d3748]/50 hover:border-[#00ff88] transition-all duration-500
      hover:shadow-[0_0_15px_rgba(0,255,136,0.3)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-[#00aaff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -inset-[1px] bg-gradient-to-br from-[#00ff88] to-[#00aaff] rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      <div className="relative z-10 flex flex-col items-center space-y-6">
        <motion.img
          src={logo}
          alt={institution}
          className="h-16 w-auto opacity-70 group-hover:opacity-100 transition-all duration-300
            filter group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]"
          whileHover={{ scale: 1.05 }}
        />

        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-white group-hover:text-[#00ff88] transition-colors duration-300
            [text-shadow:_0_0_10px_rgba(0,255,136,0.3)] group-hover:[text-shadow:_0_0_15px_rgba(0,255,136,0.5)]">
            {degree}
          </h3>
          <p className="text-[#a0aec0] group-hover:text-[#e2e8f0] transition-colors duration-300">
            {institution} | {period}
          </p>
        </div>

        <div className="w-full space-y-4">
          <div className="flex items-center gap-x-4">
            <h4 className="text-lg font-semibold text-[#e2e8f0] [text-shadow:_0_0_10px_rgba(0,255,136,0.3)]">
              Coursework
            </h4>
            <div className="h-px flex-auto bg-gradient-to-r from-[#00ff88]/20 to-[#00aaff]/20"></div>
          </div>

          <div className="flex flex-wrap gap-3">
            {courses.map((course, index) => (
              <CourseTag key={index} name={course} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </Fade>
);

const SocialLink = ({ href, animation }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="mx-4 relative group"
    whileHover={{ y: -2, transition: { duration: 0.2 } }}
  >
    <div className="absolute -inset-2 bg-gradient-to-r from-[#00ff88] to-[#00aaff] rounded-lg opacity-0 
      group-hover:opacity-30 blur-md transition-opacity duration-300"></div>
    <div style={{ width: "50px", height: "50px" }} className="relative z-10 transform group-hover:scale-110 
      transition-transform duration-300 drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]">
      <Lottie animationData={animation} />
    </div>
  </motion.a>
);

export default function Education() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const kclCourses = [
    "Security Management",
    "Software Measurement and Testing",
    "Security Engineering",
    "Human-Computer Interaction",
    "Big Data Technologies",
    "Model-Driven Development",
    "SE for Financial Systems",
  ];

  const nirmaCourses = [
    "Operating System",
    "Advanced Database",
    "Software Engineering",
    "Microservice Architectures",
    "Data Structure",
    "Information Retrieval Systems",
    "Big Data Analytics",
    "Data Mining",
  ];

  useEffect(() => {
    const handleScroll = () => setShowScrollButton(window.pageYOffset > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="relative bg-[#070b14] overflow-hidden" id="education">
      {/* Cyberpunk background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0c1120_0%,#070b14_100%)]"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff8830_1px,transparent_1px),linear-gradient(to_bottom,#00ff8830_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-50"></div>

      <div className="relative py-24 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <Fade bottom duration={1200}>
              <div className="space-y-4">
                <h2 className="text-5xl font-bold relative inline-block">
                  <span className="bg-gradient-to-r from-[#00ff88] to-[#00aaff] bg-clip-text text-transparent
                    [text-shadow:_0_0_20px_rgba(0,255,136,0.5)]">
                    Education
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent"></div>
                </h2>
                <p className="text-lg text-[#a0aec0] [text-shadow:_0_0_10px_rgba(0,255,136,0.2)]">
                  Grounded in academic excellence, my educational journey enriches
                  the foundation of my portfolio
                </p>
              </div>
            </Fade>

            <div className="flex justify-center lg:justify-end">
              <Fade bottom duration={1200}>
                <div className="w-72 h-72 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] via-[#00aaff] to-[#00ff88] rounded-full opacity-20 blur-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/10 to-[#00aaff]/10 rounded-full animate-pulse"></div>
                  <Lottie 
                    animationData={EducationAnimationData} 
                    className="relative z-10 drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]" 
                  />
                </div>
              </Fade>
            </div>
          </div>

          {/* Education Cards */}
          <div className="space-y-8">
            <EducationCard
              logo={KclLogo}
              degree="MSc Advanced Software Engineering"
              institution="King's College London, London, United Kingdom"
              period="Sept 2022-Sept 2023"
              courses={kclCourses}
            />

            <EducationCard
              logo={NirmaLogo}
              degree="Bachelors of Information Technology"
              institution="Nirma University, Ahmedabad, India"
              period="August 2017 - June 2020"
              courses={nirmaCourses}
            />
          </div>

          {/* Social Media Section */}
          <div className="relative mt-24 space-y-8">
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] via-[#00aaff] to-[#00ff88] rounded-full opacity-20 blur-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/10 to-[#00aaff]/10 rounded-full animate-pulse"></div>
                <div style={{ width: "200px", height: "200px" }} className="relative z-10">
                  <Lottie animationData={SocialMediaAnimation} />
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/10 via-transparent to-[#00aaff]/10 rounded-full opacity-20 blur-3xl"></div>
              <SocialLink
                href="https://www.linkedin.com/in/dhaivatdesai1999"
                animation={LinkedinAnimation}
              />
              <SocialLink
                href="mailto:dhaivat1999@gmail.com"
                animation={MailAnimation}
              />
              <SocialLink
                href="https://www.instagram.com/dhaivat_dd"
                animation={InstagramAnimation}
              />
              <SocialLink
                href="https://github.com/dhaivat1999"
                animation={GithubAnimation}
              />
            </div>
          </div>

          {/* Scroll to Top Button */}
          {showScrollButton && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-[#0c1120]/80 
                border border-[#00ff88]/60 hover:border-[#00ff88] transition-all duration-300
                shadow-[0_0_10px_rgba(0,255,136,0.2)] hover:shadow-[0_0_20px_rgba(0,255,136,0.4)]
                flex items-center justify-center group"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              aria-label="Scroll to top"
            >
              {/* Neon up arrow */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-[#00ff88] group-hover:text-[#00aaff] transition-colors duration-300 drop-shadow-[0_0_8px_rgba(0,255,136,0.7)]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </motion.button>
          )}
        </div>
      </div>
    </div>
  );
}
