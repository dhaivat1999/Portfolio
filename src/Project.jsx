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
      <span className="absolute left-1 top-1 h-5 w-5 text-blue-400 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>
      {title}
    </dt>
    <dd className="inline-block pl-2 text-gray-300 group-hover:text-gray-100 transition-colors duration-300">
      {description}
    </dd>
  </div>
);

export default function Project() {
  return (
    <div className="bg-gray-900" id="project">
      {/* Header Section */}
      <div className="pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16">
            <Fade bottom duration={1200}>
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                  Projects
                </h2>
                <p className="text-lg text-gray-300">
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
      </div>

      {/* Project Section */}
      <div className="py-24 border-t border-gray-800">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {/* Project Info */}
            <div className="lg:pr-8 lg:pt-4">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400 mb-4">
                    Task Manager
                  </h3>
                  <p className="text-gray-300 text-lg">
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
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
                <img
                  src={FirstProject}
                  alt="Task Manager Screenshot"
                  className="relative rounded-xl shadow-2xl w-full"
                />
              </motion.div>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-white">
                  Technologies Used:
                </h4>
                <ul className="grid grid-cols-2 gap-2 text-gray-300">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    <span>React</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                    <span>Node.js with Express</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    <span>MongoDB Atlas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    <span>Google Auth</span>
                  </li>
                </ul>

                <div className="space-y-2">
                  <h4 className="text-xl font-semibold text-white">
                    Project Links:
                  </h4>
                  <div className="space-y-2 text-blue-400 hover:text-blue-300">
                    <a
                      href="https://github.com/dhaivat1999/taskManager-React/tree/master"
                      className="block transition duration-300"
                    >
                      Frontend Repository →
                    </a>
                    <a
                      href="https://github.com/dhaivat1999/TaskManager-api/tree/master"
                      className="block transition duration-300"
                    >
                      Backend Repository →
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
