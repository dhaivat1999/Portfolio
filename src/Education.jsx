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
    className="px-4 py-2 text-sm font-medium rounded-full bg-blue-500/10 text-blue-400 
               border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-300"
  >
    {name}
  </motion.span>
);

const EducationCard = ({ logo, degree, institution, period, courses }) => (
  <Fade bottom duration={1500}>
    <div
      className="relative group p-8 rounded-2xl backdrop-blur-sm bg-white/5 border border-gray-800 
                    hover:border-gray-700 transition-all duration-300"
    >
      <div className="flex flex-col items-center space-y-6">
        <motion.img
          src={logo}
          alt={institution}
          className="h-16 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
          whileHover={{ scale: 1.05 }}
        />

        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
            {degree}
          </h3>
          <p className="text-gray-400">
            {institution} | {period}
          </p>
        </div>

        <div className="w-full space-y-4">
          <div className="flex items-center gap-x-4">
            <h4 className="text-lg font-semibold text-gray-300">Coursework</h4>
            <div className="h-px flex-auto bg-gray-800"></div>
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
    className="mx-4 transform hover:scale-110 transition-transform duration-300"
    whileHover={{ y: -2 }}
  >
    <div style={{ width: "50px", height: "50px" }}>
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
    <div id="education" className="bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <Fade bottom duration={1200}>
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                Education
              </h2>
              <p className="text-lg text-gray-300">
                Grounded in academic excellence, my educational journey enriches
                the foundation of my portfolio
              </p>
            </div>
          </Fade>

          <div className="flex justify-center lg:justify-end">
            <Fade bottom duration={1200}>
              <div className="w-72 h-72 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full opacity-20 blur-2xl"></div>
                <Lottie
                  animationData={EducationAnimationData}
                  className="relative z-10"
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
        <div className="mt-24 space-y-8">
          <div className="flex justify-center">
            <div style={{ width: "200px", height: "200px" }}>
              <Lottie animationData={SocialMediaAnimation} />
            </div>
          </div>

          <div className="flex justify-center items-center">
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
            className="fixed bottom-4 right-4 w-12 h-12 rounded-full bg-blue-500/20 
                     hover:bg-blue-500/30 transition-colors duration-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
          >
            <Lottie animationData={UpAnimationData} />
          </motion.button>
        )}
      </div>
    </div>
  );
}
