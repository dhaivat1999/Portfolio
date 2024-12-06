import React from "react";
import DhaivatImage from './assets/Dhaivat.jpg';
import LondonBackScreen from './assets/LondonBackScreen.jpg';
import Lottie from 'lottie-react';
import AnimationData from './assets/DownAnimation.json';
import Fade from "react-reveal/Fade";
import { Link } from 'react-scroll';
export default function LandingPage(props) {
  if (props.isLoggedIn) {
    return (
      <>
        <div id="home" className="relative isolate w-screen min-h-screen overflow-hidden bg-customGradient-900 py-24 sm:py-32 flex flex-col md:flex-row items-center justify-center">
          <img src={LondonBackScreen} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-15"></img>
          <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#013a63] to-[#90e0ef] opacity-20"></div>
          </div>
          <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#90e0ef] to-[#013a63] opacity-20"></div>
          </div>
          <img
            src={DhaivatImage}
            alt="The profile person image is presented for the profile is to be kept here"
            className="w-64 h-64 md:w-96 md:h-96 rounded-full object-cover object-right md:object-center opacity-95"
          />
          <Fade bottom duration={1200}>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 md:ml-16">
              <h2 className="text-4xl font-bold tracking-tight text-customGradient-50 sm:text-6xl hover:text-opacity-50 hover:underline">
                Software Engineer and Front-end Developer
              </h2>
              <p className="mt-6 text-lg leading-8 text-customGradient-300">
                Hi, I am Dhaivat Desai based in Ahmedabad, Gujarat, India. I am a driven Software Engineer with a Master's in Advanced Software Engineering from Kings College London. Experienced in leading DevOps processes, setting up CI/CD pipelines, and developing automation utilities, with extensive knowledge of front end development Technologies such as React, Angular using Javascript and Typescript. 
              </p>
            </div>
          </Fade>
  
          <Link to="expertise" className="font-semibold leading-6 text-gray-100 hover:text-opacity-50" smooth={true} duration={800}>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8">
            <Lottie animationData={AnimationData}></Lottie>
          </div>
          </Link> 
       
        </div>
      </>
    );
  }
}
