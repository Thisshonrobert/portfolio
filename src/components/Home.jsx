import { FiArrowRightCircle } from "react-icons/fi";
import heroimage from "../assets/Heroimage.jpg"
import React from 'react'
import {Link} from "react-scroll"
import TypeWriterEffect from 'react-typewriter-effect';

function Home() {
  return (
    <div name="Home" className="bg-gradient-to-b from-black via-black to-gray-800 h-screen w-full">
        <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-center md:h-full px-4">
            <div className="flex flex-col justify-center h-full">
         
            
              <h2 className="text-4xl sm:text-7xl text-white font-bold ">I'm a Full Stack Developer</h2>
              <p className="py-4 mx-w-md text-gray-500">I like to work on web application using technologies like NodeJS,Express,React,
              MongoDB,PostgreSQL</p>
            <div>
             
            <Link to="Portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-500 to-purple-500 cursor-pointer">Portfolio
            <span className=" group-hover:rotate-90 duration-200"><FiArrowRightCircle className="ml-2" size={25}/></span></Link>
            </div>
            </div>
            
            <div>
                <img className="rounded-2xl mx-auto w-2/3  md:w-full max-w-sm" src={heroimage} alt="my image"></img>
            </div>
        </div>
    </div>
  )
}

export default Home
