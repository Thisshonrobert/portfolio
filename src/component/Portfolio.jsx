import React from 'react';
import BugTracker from "../assets/portfolio/BugTracker.png";
import express from "../assets/portfolio/express.png";
import FeedSpot from "../assets/portfolio/FeedSpot.png";
import paytm from "../assets/portfolio/paytm.png";

import { StickyScroll } from '../components/ui/sticky-scroll-reveal';

const Portfolio = () => {
  
  const content = [
    {
      title: "Paytm",
      description: "Basic payment,tansaction functionalities are done",
      tech:"Made With: Node js,MongoDB,React js,Express js",
      visit:"https://github.com/Thisshonrobert/paytm",
      content: (
        <img src={paytm} className='h-60'/>
      ),
    },
    {
      title: "Bug Tracker",
      description: "To Effortlessly manage Issues",
      tech:"Made With: Next js,Postgres DB,Prisma ORM,TailwindCss,Radix UI",
      visit:"https://issue-tracker-sable-xi.vercel.app",
      content: (
        <img src={BugTracker} className='h-60'/>
      ),
    },
    {
      title: "Express",
      description: "A Blogging website with CRUD operations",
      tech:"Made With: Cloudflare - Hono,React js,Prisma,Postgres DB,TailwindCss",
      visit:"https://github.com/Thisshonrobert/blogging-website",
      content: (
        <img src={express} className='h-60'/>
      ),
    },
   
    {
      title: "Feed Spot",
      description: "A social Media website with attractive UI/UX ",
      tech:"Made With: Node js,Express,React,Mongo DB,Shadcn/ui, Radix UI",
      content: (
        <img src={FeedSpot} className='h-60'/>
      ),
    },
  ];

  return (
    <div
      name="Portfolio"
      className='size-full'
      
    >
                <StickyScroll content={content} contentClassName="bg-black"/>
    </div>
  );
};

export default Portfolio;
