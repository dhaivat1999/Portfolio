import React from "react";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import DownAnimationData from "./assets/DownAnimation.json";
import ExpertiseAnimation from "./assets/ExpertiseAnimation.json";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 20,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const ExpertiseCard = ({ icon, title, description }) => (
  <motion.div
    variants={cardVariants}
    className="relative p-6 rounded-xl border-2 border-[#2d3748]/50 bg-[#0c1120]/80 backdrop-blur-md
      hover:border-[#00ff88] hover:shadow-[0_0_15px_rgba(0,255,136,0.5)] transition-all duration-500 group overflow-hidden"
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.2 }
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 to-[#00aaff]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute -inset-[1px] bg-gradient-to-br from-[#00ff88] to-[#00aaff] rounded-xl opacity-20 group-hover:opacity-40 blur-sm transition-opacity duration-500"></div>
    <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
    <div className="relative z-10">
      <div className="flex items-center space-x-4 mb-4">
        <span className="p-3 rounded-lg bg-gradient-to-br from-[#00ff88]/10 to-[#00aaff]/10 text-[#00ff88]
          group-hover:from-[#00ff88]/20 group-hover:to-[#00aaff]/20 transition-all duration-500
          shadow-[0_0_10px_rgba(0,255,136,0.3)] group-hover:shadow-[0_0_20px_rgba(0,255,136,0.5)]">
          {icon}
        </span>
        <h3 className="text-xl font-bold text-white group-hover:text-[#00ff88] transition-colors duration-500
          [text-shadow:_0_0_10px_rgba(0,255,136,0.5)]">
          {title}
        </h3>
      </div>
      <p className="text-[#a0aec0] text-sm leading-relaxed group-hover:text-[#e2e8f0] transition-colors duration-500">
        {description}
      </p>
    </div>
    <div className="absolute -bottom-2 -right-2 w-32 h-32 bg-[#00ff88]/10 rounded-full blur-2xl 
      group-hover:bg-[#00ff88]/20 group-hover:w-40 group-hover:h-40 transition-all duration-500"></div>
  </motion.div>
);

const Expertise = () => {
  const expertiseData = [
    {
      icon: "💻",
      title: "Full Stack Development",
      description: "Crafting seamless web applications with modern technologies like React, Node.js, and cloud platforms."
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      description: "Creating intuitive and visually stunning interfaces with attention to user experience and modern design principles."
    },
    {
      icon: "🤖",
      title: "Machine Learning",
      description: "Implementing AI solutions and data analysis using Python, TensorFlow, and scikit-learn."
    },
    {
      icon: "📱",
      title: "Mobile Development",
      description: "Building cross-platform mobile applications with React Native and native Android development."
    }
  ];

  return (    <section id="expertise" className="relative py-20 overflow-hidden bg-[#070b14]">
      {/* Cyberpunk background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0c1120_0%,#070b14_100%)]"></div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00ff8830_1px,transparent_1px),linear-gradient(to_bottom,#00ff8830_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent opacity-50"></div>
      
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative container mx-auto px-4 z-10"
      >
        <div className="text-center mb-16">          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-bold mb-4 relative inline-block"
          >
            <span className="bg-gradient-to-r from-[#00ff88] to-[#00aaff] bg-clip-text text-transparent
              [text-shadow:_0_0_20px_rgba(0,255,136,0.5)]">
              Areas of Expertise
            </span>
            <div className="absolute -bottom-2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#00ff88] to-transparent"></div>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-40 h-40 mx-auto mb-8"
          >
            <Lottie animationData={ExpertiseAnimation} loop={true} />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {expertiseData.map((item, index) => (
            <ExpertiseCard key={index} {...item} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-16"
        >
          <div className="w-12 h-12 cursor-pointer hover:scale-110 transition-transform duration-300">
            <Lottie animationData={DownAnimationData} loop={true} />
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Expertise;