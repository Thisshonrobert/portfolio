import React from "react";
import { PROJECTS } from "./constants/projects"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";

// Replace Next.js Image component with a standard img tag
const TechnologyBadge = ({ tech }) => {
  return (
    <span className="rounded-md bg-zinc-100 p-1.5 text-xs font-semibold text-black">
      {tech}
    </span>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <a href={project.deployedLink || project.github} target="_blank" rel="noopener noreferrer">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ delay: 0.5 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="flex h-[30rem] w-80 flex-col overflow-hidden rounded-md border p-3 shadow-lg sm:h-[30rem] md:w-[30rem]"
      >
        <div className="h-52">
          <img
            src={project.img}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex h-full flex-col justify-between">
          <div>
            <h1 className="mb-1 mt-2 text-xl font-semibold text-white">{project.title}</h1>
            <p className="text-sm text-zinc-100">{project.description}</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechnologyBadge key={tech} tech={tech} />
              ))}
            </div>
            <div className="flex space-x-2">
              {project.deployedLink && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({
                      varient:'default',
                      size: "sm",
                    })
                  )}
                  href={project.deployedLink}
                >
                  <Globe className="mr-2 h-4 w-4 " />
                  Website
                </a>
              )}
              {project.github && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({
                      size: "sm",
                    })
                  )}
                  href={project.github}
                >
                  <BsGithub className="mr-2 h-4 w-4" /> Source
                </a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </a>
  );
};

const Projects = () => {
  return (
    <MaxWidthWrapper  className="flex flex-col bg-gradient-to-b from-black via-black to-gray-800">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="mx-5 text-center text-4xl font-bold sm:text-5xl text-white"
      >
        Check out my latest work
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="mx-auto my-2.5 max-w-prose px-4 text-center text-sm text-zinc-500 sm:text-base"
      >
        I&apos;ve worked on a variety of projects, from simple websites to
        complex web applications. Here are a few of my favorites.
      </motion.p>
      <div  name="Portfolio" className="mx-auto my-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Projects;
