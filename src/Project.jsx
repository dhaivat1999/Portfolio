import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import ProjectAnimation from "./assets/ProjectAnimation.json";
import FirstProject from "./assets/Project1.png";
import DownAnimationData from "./assets/DownAnimation.json";
export default function Project() {
  return (
    <>
      <div className="bg-customGradient-900 pt-10 h-auto  pb-5" id="project">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 mx-auto max-w-7xl px-6 lg:px-8">
            <div>
              <Fade bottom duration={1200}>
                <h2 className="text-3xl font-bold tracking-tight text-customGradient-200 sm:text-4xl">
                  Projects
                </h2>
                <p className="mt-2 text-lg leading-8 text-customGradient-200">
                  Empowering Innovation: Building Tomorrow's Solutions Today,
                  Every Project, Every Time.
                </p>
              </Fade>
            </div>
            <div className="flex justify-center items-center">
              <Fade bottom duration={1200}>
                <div
                  style={{ width: "300px", height: "250px" }}
                  className="center"
                >
                  <Lottie animationData={ProjectAnimation}></Lottie>
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </div>
      <div class="overflow-hidden bg-customGradient-900 py-24 sm:py-32 border-t border-gray-200">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div class="lg:pr-8 lg:pt-4">
              <div class="lg:max-w-lg">
                <p class="mt-2 text-3xl font-bold tracking-tight text-customGradient-200 sm:text-4xl">
                  Task Manager
                </p>
                <p class="mt-6 text-lg leading-8 text-customGradient-200">
                  Task Manager is a web application developed to streamline task
                  organization and management for users.
                </p>
                <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div class="relative pl-9">
                    <dt class="inline font-semibold text-customGradient-200">
                      <svg
                        class="absolute left-1 top-1 h-5 w-5text-customGradient-200"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Task Creation and Management
                    </dt>
                    <dd className="inline pl-2 text-customGradient-200">
                      The user can create new tasks on the go. The user can
                      update the tasks on the go and also they are provided with
                      the target completion data and also given the chance to
                      set the priority of the tasks that are created. The user
                      can also categorize the tasks that are created to set up
                      the base of different tasks that are created by them.
                    </dd>
                  </div>
                  <div class="relative pl-9">
                    <dt class="inline font-semibold text-customGradient-200">
                      <svg
                        class="absolute left-1 top-1 h-5 w-5text-customGradient-200"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Session Management and Authentication using Google Auth
                    </dt>
                    <dd className="inline pl-2 text-customGradient-200">
                      We have made use of passport google Authentication, that
                      makes use of the latest google auth 2.0 for the
                      authentication and the signup and the sign in for the
                      user. Once the user is Sign In the session for the useris
                      managed with the use of Node.js Express and the same is
                      dont for the front end as well that is created using
                      React.
                    </dd>
                  </div>
                  <div class="relative pl-9">
                    <dt class="inline font-semibold text-customGradient-200">
                      <svg
                        class="absolute left-1 top-1 h-5 w-5 text-customGradient-200"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
                        <path
                          fill-rule="evenodd"
                          d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Database
                    </dt>
                    <dd className="inline pl-2 text-customGradient-200">
                      All the data is stored securely in the database and for
                      that purpose we have made use of Mongodb with Atlas that
                      makes use of cloud based database storage
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            {/* <img src={FirstLogo} alt="" className="w-full h-auto"></img> */}
            <div class="flex flex-col justify-start items-start">
              <img
                src={FirstProject}
                alt="Product screenshot"
                class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                width="2432"
                height="800"
              />
              <h1 class="mt-4 text-customGradient-200">
                Technologies Used:
                <ul class="list-disc pl-4 mt-2">
                  <li>Frontend: React</li>
                  <li>Backend: Node.js with Express</li>
                  <li>Database: MongoDB Atlas</li>
                  <li>Authentication: Google Auth</li>
                </ul>
              </h1>
              <h1 className="mt-4 text-customGradient-400">
                {" "}
                Github Link to the React Project :{" "}
                <a href="https://github.com/dhaivat1999/taskManager-React/tree/master">
                  https://github.com/dhaivat1999/taskManager-React/tree/master
                </a>{" "}
                <br />
                Github Link to the Node.js(Express) Project :{" "}
                <a href="https://github.com/dhaivat1999/TaskManager-api/tree/master">
                  https://github.com/dhaivat1999/TaskManager-api/tree/master
                </a>
              </h1>
            </div>
           
          </div>
          <Fade bottom duration={1500}>
              <Link
                to="experience"
                className="font-semibold leading-6 text-customGradient-200 hover:text-opacity-50"
                smooth={true}
                duration={800}
              >
                <div className="absolute  left-1/2 transform -translate-x-1/2 mb-8 pt-10">
                  <Lottie animationData={DownAnimationData}></Lottie>
                </div>
              </Link>
            </Fade>
        </div>
      </div>
    </>
  );
}
