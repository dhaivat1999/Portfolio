import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import DownAnimationData from "./assets/DownAnimation.json";
import ExpertiseAnimation from "./assets/ExpertiseAnimation.json";

const ExpertiseCard = ({ icon, title, description }) => (
  <Fade bottom duration={1500}>
    <div className="group relative p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-gray-800 hover:border-gray-700 transition-all duration-300">
      <div className="flex items-center space-x-4 mb-4">
        <span className="p-2 rounded-lg bg-gray-800/50 text-white">
          {icon}
        </span>
        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  </Fade>
);

export default function Expertise() {
  const expertiseData = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 8a1 1 0 0 0-1 1v10H9a1 1 0 1 0 0 2h11a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-8Z"/>
        </svg>
      ),
      title: "Software Development",
      description: "In the realm of software development, I seamlessly transition between the worlds of functional and object-oriented programming, proficient in Java, Go, Python, JavaScript, and TypeScript"
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5.029-.18.077-.37.1-.545.217-2.058-.273-3.543-1.379-4.182-1.235-.714-2.983-.186-4.751 1.239Z"/>
        </svg>
      ),
      title: "Frontend Development",
      description: "Mastering the art of front-end alchemy: React, Angular, HTML, CSS (Tailwind CSS), TypeScript, and JavaScript are my tools of choice."
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 7.205c4.418 0 8-1.165 8-2.602C20 3.165 16.418 2 12 2S4 3.165 4 4.603c0 1.437 3.582 2.602 8 2.602Z"/>
        </svg>
      ),
      title: "Database & API Development",
      description: "At the intersection of databases and APIs, I orchestrate seamless experiences with Node.js, Express, and MongoDB, ensuring data flows smoothly and securely."
    }
  ];

  return (
    <div
      id="expertise"
      className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-24 overflow-hidden"
    >
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#1a237e_0%,_transparent_50%)] opacity-20"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <Fade bottom duration={1200}>
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
                My Expertise
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl">
                Sometimes the best way to solve a problem is to help others -
                Uncle Iroh, 'Avatar: The Last Airbender'
              </p>
            </div>
          </Fade>
          
          <div className="flex justify-center lg:justify-end">
            <Fade bottom duration={1200}>
              <div className="w-72 h-72 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full opacity-20 blur-2xl"></div>
                <Lottie animationData={ExpertiseAnimation} className="relative z-10" />
              </div>
            </Fade>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {expertiseData.map((item, index) => (
            <ExpertiseCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

        <Fade bottom duration={1500}>
          <Link
            to="project"
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