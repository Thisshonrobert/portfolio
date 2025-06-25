import BugTracker from "@/assets/portfolio/BugTracker.png";
import express from "@/assets/portfolio/express.png";
import Acethetics from "@/assets/portfolio/Acethetics.png";
import Vpay from "@/assets/portfolio/Vpay.png";

export const PROJECTS = [
  {
    title: "Vpay",
    description:"A modern payment and wallet app built with TurboRepo, featuring a Next.js user interface and an Express-based bank webhook. Styled with Tailwind CSS and ShadCN, the app supports peer-to-peer transactions and includes rate limiting for enhanced security",
    img: Vpay,
    github: "https://github.com/Thisshonrobert/VPay",
    deployedLink: "http://vpay.uk.to/",
    technologies: ["turbo repo", "Nextjs", "Prisma", "Express.js","shadcn"],
  },
  {
    title: "Bug Tracker",
    description:
      "An intuitive bug tracking system designed to streamline issue management for development teams. This project allows users to report, track, and resolve bugs with ease. The application includes features like issue categorization, priority assignment, and real-time updates, enabling teams to maintain smooth workflows. ",
    img: BugTracker,
    github: "https://github.com/Thisshonrobert/IssueTracker",
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
    title: "Acethetics",
    description:
      `Developed a full-stack web application – Aesthetics – that showcases celebrity outfits with real-time try-on functionality using AI.
Integrated virtual try-on API allowing users to upload their image and visualize clothing fit digitally.
Monetized platform through affiliate marketing by linking each outfit to live purchase options via Amazon`,
    img: Acethetics,
    github: "https://github.com/Thisshonrobert/Ace.thetics",
    technologies: ["NextJS", "React", "Prisma ORM", "Rapid API", "Imagekit-IO"],
  },
];
