import React from "react";
import Fade from "react-reveal/Fade";
import KclLogo from "./assets/KingsLogo.png";
import NirmaLogo from "./assets/NirmaLogo.png";
import Lottie from "lottie-react";
import UpAnimationData from "./assets/UpAnimation.json";
import EducationAnimationData from "./assets/EducationAnimation.json";
import SocialMediaAnimation from "./assets/SocialMediaAnimation.json";
import InstagramAnimation from "./assets/InstagramAnimation.json";
import GithubAnimation from "./assets/GithubAnimation.json";
import MailAnimation from "./assets/MailAnimation.json";
import LinkedinAnimation from "./assets/LinkedInAnimation.json";
import { Link } from "react-scroll";
export default function Education() {
  return (
    <>
      <div id="education" className="bg-gray-800  w-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 mx-auto max-w-7xl px-6 lg:px-8">
            <div>
              <Fade bottom duration={1200}>
                <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
                  Education
                </h2>
                <p className="mt-2 text-lg leading-8 text-gray-100">
                  Grounded in academic excellence, my educational journey
                  enriches the foundation of my portfolio
                </p>
              </Fade>
            </div>
            <div className="flex justify-center items-center">
              <Fade bottom duration={1200}>
                <div
                  style={{ width: "400px", height: "250px" }}
                  className="center"
                >
                  <Lottie animationData={EducationAnimationData}></Lottie>
                </div>
              </Fade>
            </div>
          </div>
        </div>

        <section class="relative isolate overflow-hidden bg-gray-800 px-6 sm:py-32 lg:px-8">
          <div class="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-800"></div>
          <div class="mx-auto max-w-2xl lg:max-w-4xl pb-10">
            <Fade bottom duration={1500}>
              <img src={KclLogo} alt="" className="mx-auto h-14"></img>
            </Fade>
            <figure class="mt-10">
              <Fade bottom duration={1500}>
                <h3 className="text-center text-xl text-gray-100 font-bold leading-8">
                  MSc Advanced Software Engineerging
                </h3>
                <h3 className="text-center text-l text-gray-100 font-bold leading-8">
                  King's College London, London, United Kingdom | Sept 2022-Sept
                  2023
                </h3>

                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-xl font-semibold leading-6 text-indigo-400">
                    Coursework
                  </h4>
                  <div className="h-px flex-auto bg-gray-100"></div>
                </div>
              </Fade>
              <ul
                role="list"
                className="mt-8 grid grid-cols-3 gap-6 text-sm leading-6 text-gray-100 sm:grid-cols-3 sm:gap-6"
              >
                <Fade bottom duration={1100}>
                  <li className="flex gap-x-3">
                    <a
                      href="#"
                      class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Security Management
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1200}>
                  <li className="flex gap-x-3">
                    <a
                      href="#"
                      class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Software Measurement and Testing
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1300}>
                  <li className="flex gap-x-3">
                    <a
                      href="#"
                      class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Security Engineering
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1400}>
                  <li className="flex gap-x-3">
                    <a
                      href="#"
                      class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Human- Computer Interaction
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1500}>
                  <li className="flex gap-x-3">
                    <a
                      href="#"
                      class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Big Data Technologies
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1600}>
                  <li className="flex gap-x-3">
                    <a
                      href="#"
                      class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Model-Driven Development
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1700}>
                  <li className="flex gap-x-3">
                    <a
                      href="#"
                      class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      SE for Financial Systems
                    </a>
                  </li>
                </Fade>
              </ul>
            </figure>
          </div>
          <Fade bottom duration={1700}>
            <hr></hr>
          </Fade>
          <div class="mx-auto max-w-2xl lg:max-w-4xl pt-10">
            <Fade bottom duration={1500}>
              <img src={NirmaLogo} alt="" className="mx-auto h-14"></img>
            </Fade>
            <figure class="mt-10">
              <Fade bottom duration={1500}>
                <h3 className="text-center text-xl text-gray-100 font-bold leading-8">
                  Bachelors Of Information Technology
                </h3>
                <h3 className="text-center text-l text-gray-100 font-bold leading-8">
                  Nirma University, Ahmedabad, India | August 2017 - June 2020
                </h3>
                {/* </blockquote> */}
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-xl font-semibold leading-6 text-indigo-400">
                    Coursework
                  </h4>
                  <div className="h-px flex-auto bg-gray-100"></div>
                </div>
              </Fade>
              <ul
                role="list"
                className="mt-8 grid grid-cols-3 gap-6 text-sm leading-6 text-gray-100 sm:grid-cols-3 sm:gap-6"
              >
                <Fade bottom duration={1100}>
                  <li className="flex gap-x-3">
                    <a
                      href="#"
                      class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Operating System
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1200}>
                  <li className="flex gap-x-3">
                    <a
                      href="#"
                      class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Advanced Database
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1300}>
                  <li className="flex gap-x-3">
                    <a
                      href="#"
                      class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Software Engineering
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1400}>
                  <li className="flex gap-x-3">
                    <a
                      href="#"
                      class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Mircoservice Architectures
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1500}>
                  <li className="flex gap-x-3">
                    <a
                      href="#"
                      class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Data Structure
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1600}>
                  <li className="flex gap-x-3">
                    <a
                      href="#"
                      class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Information Retrieval Systems
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1700}>
                  <li className="flex gap-x-3">
                    <a
                      href="#"
                      class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Big Data Analytics
                    </a>
                  </li>
                </Fade>
                <Fade bottom duration={1800}>
                  <li className="flex gap-x-3">
                    <a
                      href="#"
                      class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      Data Mining
                    </a>
                  </li>
                </Fade>
              </ul>
            </figure>
          </div>
        </section>
        <>
          <div className="font-semibold leading-6 text-gray-100 hover:text-opacity-50 flex justify-center items-center">
            <div style={{ width: "200px", height: "200px" }}>
              <Lottie animationData={SocialMediaAnimation}></Lottie>
            </div>
          </div>
          <div className="flex justify-center items-center pb-10">
            <a
              href="https://www.instagram.com/dhaivat_dd"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4"
            >
              <div className="font-semibold leading-6 text-gray-100 hover:text-opacity-50 flex justify-center items-center">
                <div style={{ width: "50px", height: "50px" }}>
                  <Lottie animationData={InstagramAnimation}></Lottie>
                </div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/dhaivatdesai1999"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4"
            >
              <div className="font-semibold leading-6 text-gray-100 hover:text-opacity-50 flex justify-center items-center">
                <div style={{ width: "50px", height: "50px" }}>
                  <Lottie animationData={LinkedinAnimation}></Lottie>
                </div>
              </div>
            </a>
            <a href="mailto:dhaivat1999@gmail.com" className="mx-4">
              <div className="font-semibold leading-6 text-gray-100 hover:text-opacity-50 flex justify-center items-center">
                <div style={{ width: "50px", height: "50px" }}>
                  <Lottie animationData={MailAnimation}></Lottie>
                </div>
              </div>
            </a>
            <a
              href="https://github.com/dhaivat1999"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-4"
            >
              <div className="font-semibold leading-6 text-gray-100 hover:text-opacity-50 flex justify-center items-center">
                <div style={{ width: "50px", height: "50px" }}>
                  <Lottie animationData={GithubAnimation}></Lottie>
                </div>
              </div>
            </a>
          </div>
          {/* UpAnimation */}
          {/* <div
            style={{
              position: "fixed",
              bottom: "20px",
              right: "20px",
              zIndex: "1",
            }}
          >
            <Lottie animationData={UpAnimationData}></Lottie>
          </div> */}
        </>
      </div>
    </>
  );
}
