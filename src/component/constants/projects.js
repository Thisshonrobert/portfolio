import BugTracker from "@/assets/portfolio/BugTracker.png";
import express from "@/assets/portfolio/express.png";
import FeedSpot from "@/assets/portfolio/FeedSpot.png";
import paytm from "@/assets/portfolio/paytm.png";

export const PROJECTS = [
  {
    title: "Paytm",
    description:
      "A comprehensive payment and transaction management platform, Paytm clone, allows users to perform seamless transactions with enhanced security features. This project showcases a fully functional backend coupled with a responsive frontend, designed to handle high volumes of transactions efficiently. ",
    img: paytm,
    github: "https://github.com/Thisshonrobert/paytm",
    technologies: ["Node.js", "MongoDB", "React.js", "Express.js"],
  },
  {
    title: "Bug Tracker",
    description:
      "An intuitive bug tracking system designed to streamline issue management for development teams. This project allows users to report, track, and resolve bugs with ease. The application includes features like issue categorization, priority assignment, and real-time updates, enabling teams to maintain smooth workflows. ",
    img: BugTracker,
    deployedLink: "https://issue-tracker-sable-xi.vercel.app",
    technologies: ["Next.js", "Postgres DB", "Prisma ORM", "Tailwind CSS", "Radix UI"],
  },
  {
    title: "Express",
    description:
      "A dynamic blogging platform that supports full CRUD (Create, Read, Update, Delete) operations, providing users with the ability to create and manage their own blogs. This project features a sleek and responsive design with a focus on user experience. Integrated with Cloudflare and using advanced React.js techniques, this platform is both robust and user-friendly.",
    img: express,
    github: "https://github.com/Thisshonrobert/blogging-website",
    technologies: ["Cloudflare - Hono", "React.js", "Prisma", "Postgres DB", "Tailwind CSS"],
  },
  {
    title: "Feed Spot",
    description:
      "Feed Spot is a social media platform designed to provide an engaging user experience with a focus on community interaction. The project includes features like user profiles, content feeds, and real-time notifications. Its visually appealing design and smooth user interface make it a standout project in the social media space.",
    img: FeedSpot,
    github: "https://github.com/krithiexplorer/feedspot",
    technologies: ["Node.js", "Express", "React", "MongoDB", "Shadcn/ui", "Radix UI"],
  },
];
