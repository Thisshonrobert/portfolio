import React from 'react'
import fitnessproject from "../assets/portfolio/fitnessproject.jpg"
import paytm from "../assets/portfolio/paytm.png"
import portfolio from "../assets/portfolio/portfolio.png"


const Portfolio = () => {
    const portfolios = [
      {
        id: 1,
        src: fitnessproject,
      },
      {
        id: 2,
        src: paytm,
      },
      {
        id: 3,
        src: portfolio,
      },
      
    ];
  
    return (
      <div
        name="Portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full md:h-screen text-white"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my work right here</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({ id, src }) => (
              <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <a href="https://github.com/Thisshonrobert?tab=overview&from=2024-03-01&to=2024-03-23" target='_blank' rel='noreferrer' className="px-8 py-2 w-1/2 m-2 duration-200 hover:scale-105">
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
  
