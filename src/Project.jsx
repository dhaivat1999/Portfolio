import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import ProjectAnimation from "./assets/ProjectAnimation.json";
import FirstProject from "./assets/Project1.png";
import DownAnimationData from "./assets/DownAnimation.json";

const ProjectFeature = ({ icon, title, description }) => (
  <div className="relative pl-9 group">
    <dt className="inline font-semibold text-white">
      <span className="absolute left-1 top-1 h-5 w-5 text-[#00ff88] transition-all duration-300 group-hover:scale-110 
        group-hover:text-[#00ffaa] [filter:drop-shadow(0_0_8px_rgba(0,255,136,0.5))]">
        {icon}
      </span>
      <span className="group-hover:text-[#00ff88] transition-colors duration-300 
        [text-shadow:_0_0_10px_rgba(0,255,136,0.3)]">
        {title}
      </span>
    </dt>
    <dd className="inline-block pl-2 text-[#a0aec0] group-hover:text-[#e2e8f0] transition-colors duration-300">
      {description}
    </dd>
  </div>
);

export default function Project() {
  return (    <div className="relative bg-[#070b14] overflow-hidden" id="project">
      {/* Cyberpunk background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0c1120_0%,#070b14_100%)]"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff8830_1px,transparent_1px),linear-gradient(to_bottom,#00ff8830_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-50"></div>
      
      {/* Header Section */}
      <div className="relative pt-20 pb-10 z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
            <Fade bottom duration={1200}>
              <div className="space-y-4">
                <h2 className="text-5xl font-bold relative inline-block">
                  <span className="bg-gradient-to-r from-[#00ff88] to-[#00aaff] bg-clip-text text-transparent
                    [text-shadow:_0_0_20px_rgba(0,255,136,0.5)]">
                    Projects
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent"></div>
                </h2>
                <p className="text-lg text-[#a0aec0] [text-shadow:_0_0_10px_rgba(0,255,136,0.2)]">
                  Empowering Innovation: Building Tomorrow's Solutions Today,
                  Every Project, Every Time.
                </p>
              </div>
            </Fade>
            <div className="flex justify-center items-center">
              <Fade bottom duration={1200}>
                <div className="w-72 h-72 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full opacity-20 blur-2xl"></div>
                  <Lottie
                    animationData={ProjectAnimation}
                    className="relative z-10"
                  />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>      {/* Project Section */}
      <div className="relative py-24 z-10">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-30"></div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {/* Project Info */}
            <div className="lg:pr-8 lg:pt-4">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold relative inline-block mb-4">
                    <span className="bg-gradient-to-r from-[#00ff88] to-[#00aaff] bg-clip-text text-transparent
                      [text-shadow:_0_0_15px_rgba(0,255,136,0.5)]">
                      Task Manager
                    </span>
                    <div className="absolute -bottom-1 left-0 right-0 h-px bg-gradient-to-r from-[#00ff88] to-[#00aaff] opacity-50"></div>
                  </h3>
                  <p className="text-[#a0aec0] text-lg [text-shadow:_0_0_10px_rgba(0,255,136,0.2)]">
                    Task Manager is a web application developed to streamline
                    task organization and management for users.
                  </p>
                </div>

                <div className="space-y-8">
                  <ProjectFeature
                    icon={
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                        />
                      </svg>
                    }
                    title="Task Creation and Management"
                    description="Create, update, and prioritize tasks with target completion dates and custom categories."
                  />
                  <ProjectFeature
                    icon={
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path
                          fillRule="evenodd"
                          d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                        />
                      </svg>
                    }
                    title="Authentication & Session Management"
                    description="Secure Google Auth 2.0 integration with Express session management."
                  />
                  <ProjectFeature
                    icon={
                      <svg viewBox="0 0 20 20" fill="currentColor">
                        <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                      </svg>
                    }
                    title="Database"
                    description="Cloud-based secure data storage using MongoDB Atlas."
                  />
                </div>
              </div>
            </div>

            {/* Project Image and Links */}
            <div className="space-y-6">              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff88] via-[#00aaff] to-[#00ff88] rounded-xl opacity-30 
                  group-hover:opacity-50 blur-lg transition duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88] to-[#00aaff] rounded-xl opacity-0 
                  group-hover:opacity-10 transition duration-300"></div>
                <img
                  src={FirstProject}
                  alt="Task Manager Screenshot"
                  className="relative rounded-xl shadow-[0_0_20px_rgba(0,255,136,0.3)] w-full border border-[#20232c]
                    group-hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-300"
                />
              </motion.div>              <div className="space-y-6">
                <div className="relative">
                  <h4 className="text-xl font-semibold text-white mb-4 [text-shadow:_0_0_10px_rgba(0,255,136,0.3)]">
                    Technologies Used:
                  </h4>
                  <ul className="grid grid-cols-2 gap-4 text-[#a0aec0]">
                    <li className="flex items-center space-x-3 group">
                      <span className="w-2 h-2 bg-[#00ff88] rounded-full shadow-[0_0_8px_rgba(0,255,136,0.5)] group-hover:shadow-[0_0_12px_rgba(0,255,136,0.7)] transition-all duration-300"></span>
                      <span className="group-hover:text-[#00ff88] transition-colors duration-300">React</span>
                    </li>
                    <li className="flex items-center space-x-3 group">
                      <span className="w-2 h-2 bg-[#00aaff] rounded-full shadow-[0_0_8px_rgba(0,170,255,0.5)] group-hover:shadow-[0_0_12px_rgba(0,170,255,0.7)] transition-all duration-300"></span>
                      <span className="group-hover:text-[#00aaff] transition-colors duration-300">Node.js with Express</span>
                    </li>
                    <li className="flex items-center space-x-3 group">
                      <span className="w-2 h-2 bg-[#ff00ff] rounded-full shadow-[0_0_8px_rgba(255,0,255,0.5)] group-hover:shadow-[0_0_12px_rgba(255,0,255,0.7)] transition-all duration-300"></span>
                      <span className="group-hover:text-[#ff00ff] transition-colors duration-300">MongoDB Atlas</span>
                    </li>
                    <li className="flex items-center space-x-3 group">
                      <span className="w-2 h-2 bg-[#ff3366] rounded-full shadow-[0_0_8px_rgba(255,51,102,0.5)] group-hover:shadow-[0_0_12px_rgba(255,51,102,0.7)] transition-all duration-300"></span>
                      <span className="group-hover:text-[#ff3366] transition-colors duration-300">Google Auth</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-white [text-shadow:_0_0_10px_rgba(0,255,136,0.3)]">
                    Project Links:
                  </h4>
                  <div className="space-y-3">
                    <a
                      href="https://github.com/dhaivat1999/taskManager-React/tree/master"
                      className="block transition-all duration-300 text-[#00ff88] hover:text-[#00ffaa] [text-shadow:_0_0_10px_rgba(0,255,136,0.3)] 
                        hover:[text-shadow:_0_0_15px_rgba(0,255,136,0.5)] relative group"
                    >
                      <span className="relative z-10">Frontend Repository →</span>
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-[#00ff88] group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a
                      href="https://github.com/dhaivat1999/TaskManager-api/tree/master"
                      className="block transition-all duration-300 text-[#00ff88] hover:text-[#00ffaa] [text-shadow:_0_0_10px_rgba(0,255,136,0.3)]
                        hover:[text-shadow:_0_0_15px_rgba(0,255,136,0.5)] relative group"
                    >
                      <span className="relative z-10">Backend Repository →</span>
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-[#00ff88] group-hover:w-full transition-all duration-300"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrow */}
          <Fade bottom duration={1500}>
            <Link
              to="experience"
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
    </div>
  );
}
