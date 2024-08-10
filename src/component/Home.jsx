import { FiArrowRightCircle } from "react-icons/fi";
import heroimage from "../assets/Heroimage.jpg";
import React from 'react';
import { Link } from "react-scroll";
import Typewriter from 'typewriter-effect';
import { FcBriefcase } from "react-icons/fc";

function Home() {
  return (
    <div name="Home" className="bg-gradient-to-b from-black via-black to-gray-800 pl-10 sm:pl-0 w-full h-screen sm:h-screen sm:w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center h-[127%] md:h-full px-4">
        <div className="flex flex-col justify-center">
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

          <div>
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
        <div className="p-4 md:ml-8 mt-2 md:pl-0">
          <img className="rounded-2xl w-2/3 md:w-full max-w-sm sm:mx-8" src={heroimage} alt="Hero image of Thisshon Robert" />
        </div>
      </div>
    </div>
  );
}

export default Home;
