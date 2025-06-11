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
        className="px-4 py-1.5 text-sm font-medium rounded-lg bg-[#00ff88]/5 text-[#00ff88]
                   border border-[#00ff88]/20 hover:border-[#00ff88]/40 transition-all duration-300
                   [text-shadow:_0_0_10px_rgba(0,255,136,0.3)]
                   hover:[text-shadow:_0_0_15px_rgba(0,255,136,0.5)]
                   shadow-[0_0_10px_rgba(0,255,136,0.1)]
                   hover:shadow-[0_0_15px_rgba(0,255,136,0.2)]"
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
    <div className="group relative rounded-xl overflow-hidden bg-[#0c1120]/80 backdrop-blur-md 
      border-2 border-[#2d3748]/50 hover:border-[#00ff88] transition-all duration-500
      hover:shadow-[0_0_15px_rgba(0,255,136,0.3)]">
      <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-[#00aaff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute -inset-[1px] bg-gradient-to-br from-[#00ff88] to-[#00aaff] rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition-opacity duration-500"></div>
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="relative p-8 sm:p-10 lg:flex gap-8 z-10">
        <div className="lg:flex-auto space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white group-hover:text-[#00ff88] transition-colors duration-300
              [text-shadow:_0_0_10px_rgba(0,255,136,0.3)] group-hover:[text-shadow:_0_0_15px_rgba(0,255,136,0.5)]">
              {title}
            </h3>
            <p className="text-[#a0aec0] italic group-hover:text-[#e2e8f0] transition-colors duration-300">
              {period} | {location}
            </p>
          </div>
            <div className="text-[#a0aec0] leading-relaxed space-y-2 group-hover:text-[#e2e8f0] transition-colors duration-300">
            {description.split('\n').map((item, i) => (
              <p key={i} className="flex items-start">
                <span className="inline-block w-2 h-2 mt-2 mr-3 bg-[#00ff88] rounded-full 
                  shadow-[0_0_8px_rgba(0,255,136,0.5)]"></span>
                <span>{item.trim()}</span>
              </p>
            ))}
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-[#e2e8f0] [text-shadow:_0_0_10px_rgba(0,255,136,0.3)]
              relative inline-block">
              Technology Stack
              <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#00ff88] to-[#00aaff] opacity-50"></div>
            </h4>
            <TechStack technologies={technologies} />
          </div>
        </div>

        <div className="hidden lg:block lg:flex-shrink-0 lg:w-48">
          <div className="mt-4 lg:mt-0 flex items-center justify-center h-full">
            <motion.img
              src={logo}
              alt={logoAlt}
              className="w-32 h-32 object-contain opacity-70 group-hover:opacity-100 transition-all duration-300
                filter group-hover:brightness-110 group-hover:drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]"
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
    }
  ];

  return (
    <div className="relative bg-[#070b14] overflow-hidden" id="experience">
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
                    Experience
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent"></div>
                </h2>
                <p className="text-lg text-[#a0aec0] [text-shadow:_0_0_10px_rgba(0,255,136,0.2)]">
                  Crafting success through years of professional mastery, each
                  experience a brushstroke in the masterpiece of my portfolio.
                </p>
              </div>
            </Fade>

            <div className="flex justify-center lg:justify-end">
              <Fade bottom duration={1200}>
                <div className="w-72 h-72 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] via-[#00aaff] to-[#00ff88] rounded-full opacity-20 blur-2xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/10 to-[#00aaff]/10 rounded-full animate-pulse"></div>
                  <Lottie 
                    animationData={ExperienceAnimationData} 
                    className="relative z-10 drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]" 
                  />
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
              <div className="w-12 h-12 relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/20 to-[#00aaff]/20 rounded-full 
                  opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                <Lottie 
                  animationData={DownAnimationData} 
                  className="relative z-10 drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]" 
                />
              </div>
            </Link>
          </Fade>
        </div>
      </div>
    </div>
  );
}