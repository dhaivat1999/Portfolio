import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Link } from "react-scroll";

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
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`${className} text-white relative z-10`}
    >
      <div className="space-y-8">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyber-primary via-cyan-400 to-blue-400 animate-gradient bg-300% neon-text">
            Turning Ideas
          </span>{" "}
          <br />
          <span className="text-white text-shadow-glow">Into Digital Reality</span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-gray-300 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Hi, I'm Dhaivat Desai, a Software Engineer passionate about crafting
          exceptional web experiences. I specialize in front-end development and
          have experience in DevOps and CI/CD pipelines.
        </motion.p>

        <motion.div 
          className="flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.05, borderColor: 'var(--cyber-primary)' }}
              className="px-4 py-2 text-sm glass-effect rounded-lg
                        border border-cyber-primary/20 text-cyber-primary
                        transition-all duration-300 hover:shadow-glow"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        <motion.div 
          className="flex gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="project"
              className="relative px-6 py-3 rounded-lg font-semibold
                       border border-cyber-primary bg-cyber-primary/10
                       hover:bg-cyber-primary/20 transition-all duration-300
                       hover:shadow-glow group"
              smooth={true}
              duration={800}
            >
              <span className="relative z-10 text-cyber-primary">
                View My Work
              </span>
              <div className="absolute inset-0 bg-cyber-primary/10 rounded-lg
                           scale-x-0 group-hover:scale-x-100 transition-transform
                           duration-300 origin-left"></div>
            </Link>
          </motion.div>

          <motion.a
            href="mailto:your.email@example.com"
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-lg border border-cyber-primary/20
                     text-cyber-primary hover:bg-cyber-primary/10
                     transition-all duration-300 hover:shadow-glow font-semibold"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

const BackgroundImage = () => (
  <>
    <div className="absolute inset-0 bg-cyber-dark/90 backdrop-blur-[2px] z-0" />
    <img
      src={LondonBackScreen}
      alt=""
      className="absolute inset-0 -z-10 h-full w-full object-cover mix-blend-overlay"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-cyber-dark via-cyber-dark/95 to-transparent" />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,var(--cyber-primary),transparent_50%)] opacity-10" />
    <div className="absolute inset-0" style={{
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300f6ff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      backgroundSize: '60px 60px',
    }} />
  </>
);

const ProfileImage = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8 }}
    className="relative"
  >
    <div className="absolute -inset-1 bg-gradient-to-r from-cyber-primary to-blue-500 rounded-full blur-xl opacity-70 animate-pulse" />
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative rounded-full p-1 bg-gradient-to-r from-cyber-primary to-blue-500"
    >
      <img
        src={DhaivatImage}
        alt="Profile of Dhaivat Desai"
        className="w-48 h-48 md:w-72 md:h-72 rounded-full object-cover 
                  border-4 border-cyber-dark"
      />
    </motion.div>
  </motion.div>
);

const ScrollDownAnimation = () => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 1, duration: 0.8 }}
  >
    <Link
      to="expertise"
      className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                text-cyber-primary/50 hover:text-cyber-primary 
                transition-colors duration-300"
      smooth={true}
      duration={800}
    >
      <div className="w-12 h-12">
        <Lottie animationData={AnimationData} />
      </div>
    </Link>
  </motion.div>
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-col md:flex-row items-center gap-12 md:gap-16 
                  max-w-7xl mx-auto relative z-10"
      >
        <ProfileImage />
        <LandingPageContent className="mt-8 md:mt-0" />
      </motion.div>
      <ScrollDownAnimation />
    </div>
  );
}