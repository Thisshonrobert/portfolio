import { FiArrowRightCircle } from "react-icons/fi";
import { FcBriefcase } from "react-icons/fc";
import React from "react";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { PointerHighlight } from "../components/ui/pointer-highlight";
import { WrapButton, Globe } from "../components/ui/wrap-button";

export default function Home() {
  return (
    <div
      name="Home"
      className="bg-gradient-to-b from-black via-black to-gray-800 w-full min-h-screen flex items-center justify-center px-4"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center md:flex-row md:justify-between">
        <div className="flex flex-col justify-center mb-8 md:mb-0 text-center md:text-left pt-16 md:mt-0">
          <h2 className="text-xl md:text-3xl pb-4 text-white font-semibold justify-center ">
            I'm Thisshon Robert, and I Enjoy{" "}
          </h2>

          <h1 className="text-2xl md:text-5xl text-white font-bold pb-4">
            Turning Ideas into Full-Stack, Production-Ready Apps with a
            <div className="flex flex-row items-center  justify-center-safe md:justify-start">
              <PointerHighlight>
                <span className="bg-gradient-to-r from-purple-500 to-purple-300 text-transparent bg-clip-text text-4xl md:text-7xl ">
                  Pixel Sharp
                </span>{" "}
              </PointerHighlight>
              <div className="ml-4">
                <span className="text-2xl md:text-5xl">Focus</span>
             
                <span className="hand" role="img" aria-label="waving hand">
                  👋
                </span>
              </div>
            </div>
          </h1>

          <div className="text-white font-semibold pb-4">
            <Typewriter
              options={{
                strings: ["Full-Stack Developer", "Competitive Programmer","DevOps","Cloud"],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: "natural",
              }}
            />
          </div>

         
          <div className="flex justify-center md:justify-start">
           
            <Link to="Portfolio" smooth={true} duration={500}>
              <WrapButton>Projects</WrapButton>
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
