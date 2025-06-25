import { FiArrowRightCircle } from "react-icons/fi";
import { FcBriefcase } from "react-icons/fc";
import React from 'react';
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect';

export default function Home() {
  return (
    <div name="Home" className="bg-gradient-to-b from-black via-black to-gray-800 w-full min-h-screen flex items-center justify-center px-4">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="flex flex-col justify-center mb-8 md:mb-0 text-center md:text-left md:w-1/2">
          <h2 className="text-xl sm:text-2xl pb-4 text-white font-semibold">I'm Thisshon Robert, and I Enjoy </h2>

          <h1 className="text-4xl sm:text-5xl text-white font-bold pb-4">
            Building Pixel-Perfect <span className="bg-gradient-to-r from-purple-500 to-purple-300 text-transparent bg-clip-text">Interactive</span> apps
            <FcBriefcase aria-label="briefcase icon" className="inline ml-2"/>
          </h1>

          <div className="text-white font-semibold pb-4">
            <Typewriter
              options={{
                strings: ["Full-Stack Developer", "Competitive Programmer"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 'natural'
              }}
            />
          </div>

          <div className="flex justify-center md:justify-start">
            <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-500 to-purple-500 cursor-pointer"
              aria-label="Link to Portfolio"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-200">
                <FiArrowRightCircle className="ml-2" size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center items-center">
          <img 
            src="/Portfolio.jpg" 
            alt="Hero image of Thisshon Robert" 
            className="rounded-2xl w-2/3 md:w-full max-w-sm object-cover"
          />
        </div>
      </div>
    </div>
  );
}