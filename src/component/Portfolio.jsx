import React from 'react';
import express from "../assets/portfolio/express.png";
import paytm from "../assets/portfolio/paytm.png";
import portfolio from "../assets/portfolio/portfolio.png";
import { StickyScroll } from '../components/ui/sticky-scroll-reveal';

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: express,
      link: "https://github.com/Thisshonrobert/blogging-website",
    },
    {
      id: 2,
      src: paytm,
      link: "https://github.com/Thisshonrobert/paytm",
    },
    {
      id: 3,
      src: portfolio,
      link: "https://github.com/Thisshonrobert/portfolio",
    },
  ];
  const content = [
    {
      title: "Card 1 Title",
      description: "This is the description for Card 1. It's an introduction to the concept.",
      content: (
        <div className="p-4 text-white">
          <h3 className="text-xl font-bold">Card 1 Content</h3>
          <p>This is some detailed content for Card 1.</p>
        </div>
      ),
    },
    {
      title: "Card 2 Title",
      description: "This is the description for Card 2. It builds on what was discussed in Card 1.",
      content: (
        <div className="p-4 text-white">
          <h3 className="text-xl font-bold">Card 2 Content</h3>
          <p>This is some detailed content for Card 2.</p>
        </div>
      ),
    },
    {
      title: "Card 3 Title",
      description: "This is the description for Card 3. It wraps up the topic with some conclusions.",
      content: (
        <div className="p-4 text-white">
          <h3 className="text-xl font-bold">Card 3 Content</h3>
          <p>This is some detailed content for Card 3.</p>
        </div>
      ),
    },
    {
      title: "Card 4 Title",
      description: "This is the description for Card 3. It wraps up the topic with some conclusions.",
      content: (
        <div className=" text-white">
          <h3 className="text-xl font-bold">Card 4 Content</h3>
          <p>This is some detailed content for Card 4.</p>
        </div>
      ),
    },
  ];

  return (
    <div
      name="Portfolio"
      // className="bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 dark:from-gray-800 dark:via-black dark:to-black w-full md:h-screen text-black dark:text-white"
    >
      {/* <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500 dark:border-gray-500">
            My Projects
          </p>
          <p className="py-6 text-gray-700 dark:text-gray-400">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-400 dark:shadow-gray-600 rounded-lg">
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
      </div> */}
                <StickyScroll content={content} contentClassName="bg-black"/>

    </div>
  );
};

export default Portfolio;
