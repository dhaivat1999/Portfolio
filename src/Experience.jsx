import React from "react";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import DownAnimationData from "./assets/DownAnimation.json";
import ExperienceAnimationData from "./assets/ExperienceAnimation.json";

const TechStack = ({ technologies }) => (
  <div className="flex flex-wrap gap-3">
    {technologies.map((tech, index) => (
      <motion.span
        key={index}
        className="px-4 py-1.5 text-sm font-medium rounded-full bg-blue-500/10 text-blue-400 
                   border border-blue-500/20 hover:border-blue-500/40 transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {tech}
      </motion.span>
    ))}
  </div>
);

const ExperienceCard = ({ title, period, location, description, technologies, logo, logoAlt }) => (
  <Fade bottom duration={1500}>
    <div className="group relative rounded-2xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-gray-700 transition-all duration-300">
      <div className="p-8 sm:p-10 lg:flex gap-8">
        <div className="lg:flex-auto space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-gray-400 italic">
              {period} | {location}
            </p>
          </div>
          
          <p className="text-gray-300 leading-relaxed">
            {description}
          </p>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-gray-300">
              Technology Stack
            </h4>
            <TechStack technologies={technologies} />
          </div>
        </div>

        <div className="hidden lg:block lg:flex-shrink-0 lg:w-48">
          <div className="mt-4 lg:mt-0 flex items-center justify-center h-full">
            <motion.img
              src={logo}
              alt={logoAlt}
              className="w-32 h-32 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </div>
        </div>
      </div>
    </div>
  </Fade>
);

export default function Experience() {
  const experiences = [
    {
      title: "Bank of America - Software Engineer IB",
      period: "July 2020 - June 2022",
      location: "GIFT City, Gujarat, India",
      description: `• Received one gold and two bronze recognition awards.
        • Developed a Java tool for global web.config file changes, enhancing integration efficiency by 80%.
        • Led the DevOps team, establishing CI/CD using Jenkins for over 400 repositories.`,
      technologies: ["Angular", "Java", "DevOps", "Ansible Tower", "TypeScript", "BitBucket"],
      logo: "https://asset.brandfetch.io/ide4lTCz-B/id3wsg0wma.svg",
      logoAlt: "Bank of America Logo"
    },
    // ... Add other experiences here
  ];

  return (
    <div id="experience" className="bg-gray-900 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <Fade bottom duration={1200}>
            <div className="space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                Experience
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl">
                Crafting success through years of professional mastery, each
                experience a brushstroke in the masterpiece of my portfolio.
              </p>
            </div>
          </Fade>
          
          <div className="flex justify-center lg:justify-end">
            <Fade bottom duration={1200}>
              <div className="w-72 h-72 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full opacity-20 blur-2xl"></div>
                <Lottie animationData={ExperienceAnimationData} className="relative z-10" />
              </div>
            </Fade>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>

        {/* Navigation Arrow */}
        <Fade bottom duration={1500}>
          <Link
            to="education"
            className="flex justify-center mt-20"
            smooth={true}
            duration={800}
          >
            <div className="w-12 h-12 text-gray-400 hover:text-gray-300 transition-colors duration-300">
              <Lottie animationData={DownAnimationData} />
            </div>
          </Link>
        </Fade>
      </div>
    </div>
  );
}