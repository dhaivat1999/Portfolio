import React from "react";
import Fade from "react-reveal/Fade";
import Lottie from "lottie-react";
import { Link } from "react-scroll";
import { motion } from "framer-motion"; // We'll need to install this

import AnimationData from "./assets/DownAnimation.json";
import DhaivatImage from "./assets/Dhaivat.jpg";
import LondonBackScreen from "./assets/LondonBackScreen.jpg";

const LandingPageContent = ({ className }) => {
  const skills = [
    "Javascript",
    "React",
    "Typescript",
    "Node.js",
    "HTML",
    "CSS",
  ];

  return (
    <div className={`${className} text-white relative z-10`}>
      <div className="space-y-6">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
            Turning Ideas
          </span>{" "}
          <br />
          <span className="text-white">Into Digital Reality</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          Hi, I'm Dhaivat Desai, a Software Engineer passionate about crafting
          exceptional web experiences. I specialize in front-end development and
          have experience in DevOps and CI/CD pipelines.
        </p>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm bg-white/10 backdrop-blur-sm rounded-full
                        border border-gray-700 hover:border-blue-500
                        transition-all duration-300 hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-8">
          <Link
            to="project"
            className="group relative px-6 py-3 overflow-hidden rounded-lg 
                     bg-gradient-to-r from-blue-500 to-violet-500
                     transition-all duration-300 hover:scale-105"
            smooth={true}
            duration={800}
          >
            <span className="relative z-10 text-white font-semibold">
              View My Work
            </span>
            <div
              className="absolute inset-0 bg-white/20 translate-y-12 
                          group-hover:translate-y-0 transition-transform duration-300"
            ></div>
          </Link>

          <a
            href="mailto:your.email@example.com"
            className="px-6 py-3 rounded-lg border border-gray-700 
                     hover:border-blue-500 transition-all duration-300
                     hover:scale-105 font-semibold"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

const BackgroundImage = () => (
  <>
    <div className="absolute inset-0 bg-gray-900/90 backdrop-blur-[2px] z-0" />
    <img
      src={LondonBackScreen}
      alt=""
      className="absolute inset-0 -z-10 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 via-gray-900/95 to-transparent" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#4338ca,transparent_50%)] opacity-20" />
  </>
);

const ProfileImage = () => (
  <div className="relative">
    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full blur opacity-70" />
    <img
      src={DhaivatImage}
      alt="Profile of Dhaivat Desai"
      className="relative w-48 h-48 md:w-72 md:h-72 rounded-full object-cover 
                border-4 border-gray-800 shadow-2xl transition-all duration-300 
                hover:scale-105 hover:border-blue-500"
    />
  </div>
);

const ScrollDownAnimation = () => (
  <Link
    to="expertise"
    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
              text-white/50 hover:text-white/80 transition-colors duration-300"
    smooth={true}
    duration={800}
  >
    <div className="w-12 h-12">
      <Lottie animationData={AnimationData} />
    </div>
  </Link>
);

export default function LandingPage() {
  return (
    <div
      id="home"
      className="relative isolate w-screen min-h-screen overflow-hidden 
                 flex flex-col md:flex-row items-center justify-center 
                 gap-12 px-6 py-24 sm:py-32"
    >
      <BackgroundImage />
      <div
        className="flex flex-col md:flex-row items-center gap-12 md:gap-16 
                    max-w-7xl mx-auto relative z-10"
      >
        <ProfileImage />
        <Fade bottom duration={1200}>
          <LandingPageContent />
        </Fade>
      </div>
      <ScrollDownAnimation />
    </div>
  );
}
