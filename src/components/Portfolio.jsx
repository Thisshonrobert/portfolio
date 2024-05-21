import React from 'react'
import express from "../assets/portfolio/express.png"
import paytm from "../assets/portfolio/paytm.png"
import portfolio from "../assets/portfolio/portfolio.png"


const Portfolio = () => {
    const portfolios = [
      {
        id: 1,
        src: express,
        link:"https://github.com/Thisshonrobert/blogging-website"
      },
      {
        id: 2,
        src: paytm,
        link:"https://github.com/Thisshonrobert/paytm"
      },
      {
        id: 3,
        src: portfolio,
        link:"https://github.com/Thisshonrobert/portfolio"
      }
      
    ];

  
    return (
      <div
        name="Portfolio"
        className="bg-gradient-to-b from-gray-800 via-black to-black w-full md:h-screen text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="mt-20">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src,link }) => (
              <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <a href={link} target='_blank' rel='noreferrer' className="px-12 py-2 w-1/2 m-2 duration-200 hover:scale-105">
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Portfolio;
  
