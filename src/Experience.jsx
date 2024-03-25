import React from "react";
import DevLogo from "./assets/DevLogo.jpg";
import FirstLogo from "./assets/FirstWalkinLogo.jpg";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import DownAnimationData from "./assets/DownAnimation.json";
import ExperienceAnimationData from "./assets/ExperienceAnimation.json";
export default function Experience() {
  return (
    <>
      <div id="experience" className="bg-customGradient-900 py-24 w-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 mx-auto max-w-7xl px-6 lg:px-8">
            <div>
              <Fade bottom duration={1200}>
                <h2 className="text-3xl font-bold tracking-tight text-customGradient-200 sm:text-4xl">
                  Experience
                </h2>
                <p className="mt-2 text-lg leading-8 text-customGradient-200">
                  Crafting success through years of professional mastery, each
                  experience a brushstroke in the masterpiece of my portfolio.
                </p>
              </Fade>
            </div>
            <div className="flex justify-center items-center">
              <Fade bottom duration={1200}>
                <div
                  style={{ width: "300px", height: "250px" }}
                  className="center"
                >
                  <Lottie animationData={ExperienceAnimationData}></Lottie>
                </div>
              </Fade>
            </div>
          </div>

          <Fade bottom duration={1500}>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-customGradient-50 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-customGradient-200">
                  Bank of America - Software Engineer IB
                </h3>
                <h4 className="text-customGradient-200 italic">
                  July 2020 - June 2022 | GIFT City, Gujarat, India
                </h4>
                <p className="mt-6 text-base leading-7 text-customGradient-200">
                  • Received one gold and two bronze recognition awards. •
                  Developed a Java tool for global web.config file changes,
                  enhancing integration efficiency by 80%. • Led the DevOps
                  team, establishing CI/CD using Jenkins for over 400
                  repositories.
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-xl font-semibold leading-6 text-customGradient-400">
                    Technology Stack
                  </h4>
                  <div className="h-px flex-auto bg-gray-100"></div>
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-3 gap-6 text-sm leading-6 text-customGradient-200 sm:grid-cols-3 sm:gap-6"
                >
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a className="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      Angular
                    </a>
                  </li>
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a className="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      Java
                    </a>
                  </li>
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a className="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      Dev Ops
                    </a>
                  </li>
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a className="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      Anisble Tower
                    </a>
                  </li>
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a className="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      TypeScript
                    </a>
                  </li>
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a className="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      BitBucket
                    </a>
                  </li>
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full">
                  <div className="mx-auto max-w-xs h-full px-8 flex justify-center items-center">
                    <img
                      src="https://asset.brandfetch.io/ide4lTCz-B/id3wsg0wma.svg"
                      className="w-full h-auto"
                      alt="Bank of America Logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1700}>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-customGradient-50 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-customGradient-200">
                  Dev Information Technology Pvt Ltd - Intern
                </h3>
                <h4 className="text-customGradient-200 italic">
                  Jan 2020 — May 2020 - Ahmedabad, Gujarat, India
                </h4>
                <p className="mt-6 text-base leading-7 text-customGradient-200">
                  • Prepared the front-end of projects using Angular 8, focusing
                  on HTML, CSS, and Typescript. • Implemented a three-tier
                  architecture for seamless integration between the front-end
                  and APIs.
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-xl font-semibold leading-6 text-customGradient-400">
                    Technology Stack
                  </h4>
                  <div className="h-px flex-auto bg-gray-100"></div>
                </div>
                <ul
                  role="list"
                  class="mt-8 grid grid-cols-3 gap-6 text-sm leading-6 text-customGradient-200 sm:grid-cols-3 sm:gap-6"
                >
                  <li class="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      Angular
                    </a>
                  </li>
                  <li class="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      Express.js
                    </a>
                  </li>
                  <li class="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      Javascript
                    </a>
                  </li>
                  <li class="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      HTML / CSS
                    </a>
                  </li>
                  <li class="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      TypeScript
                    </a>
                  </li>
                  <li class="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      Github
                    </a>
                  </li>
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full">
                  <div className="mx-auto max-w-xs h-full px-8 flex justify-center items-center">
                    <img src={DevLogo} alt="" className="w-full h-auto"></img>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1900}>
            <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-customGradient-50 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
              <div className="p-8 sm:p-10 lg:flex-auto">
                <h3 className="text-2xl font-bold tracking-tight text-customGradient-200">
                  First Walkin Technologies Pvt Ltd - Summer Intern{" "}
                </h3>
                <h4 className="text-customGradient-200 italic">
                  May 2019 — July 2019 - Bangalore, Karnataka, India
                </h4>
                <p className="mt-6 text-base leading-7 text-customGradient-200">
                  • Spearheaded the adoption of Jest for API automation testing,
                  resulting in a 30% decrease in bug reports, enhancing the
                  reliability and stability of the software. • Managed the
                  performance and API testing of the CCD (Cafe Coffee Day)
                  application.
                </p>
                <div className="mt-10 flex items-center gap-x-4">
                  <h4 className="flex-none text-xl font-semibold leading-6 text-customGradient-400">
                    Technology Stack
                  </h4>
                  <div className="h-px flex-auto bg-gray-100"></div>
                </div>
                <ul
                  role="list"
                  className="mt-8 grid grid-cols-3 gap-6 text-sm leading-6 text-customGradient-200 sm:grid-cols-3 sm:gap-6"
                >
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      JEST
                    </a>
                  </li>
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      Github
                    </a>
                  </li>
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      Apollo Graphql
                    </a>
                  </li>
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      HTML / CSS
                    </a>
                  </li>
                  <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-start">
                    <a class="relative z-10 rounded-full bg-customGradient-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-customGradient-400">
                      JavaScript
                    </a>
                  </li>
                </ul>
              </div>
              <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full">
                  <div className="mx-auto max-w-xs h-full px-8 flex justify-center items-center">
                    <img src={FirstLogo} alt="" className="w-full h-auto"></img>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
          <Link
            to="education"
            className="font-semibold leading-6 text-customGradient-200 hover:text-opacity-50"
            smooth={true}
            duration={800}
          >
            <div className="absolute  left-1/2 transform -translate-x-1/2 mb-8 pt-10">
              <Lottie animationData={DownAnimationData}></Lottie>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
