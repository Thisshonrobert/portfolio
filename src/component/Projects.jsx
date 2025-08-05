import React from "react";
import { PROJECTS } from "./constants/projects"
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Globe } from 'lucide-react';
import { BsGithub } from "react-icons/bs";
import MaxWidthWrapper from "@/components/ui/MaxWidthWrapper";
import { buttonVariants } from "@/components/ui/button";

const TechnologyBadge = ({ tech }) => {
  return (
    <span className="inline-block rounded-md bg-zinc-100 px-2 py-1 text-xs font-semibold text-black m-1">
      {tech}
    </span>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ delay: 0.5 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      className="flex flex-col overflow-hidden rounded-md border p-4 shadow-lg h-full max-w-xl"
    >
      <div className="h-32 mb-4">
        <img
          src={project.img}
          alt={project.title}
          className="h-full w-full object-cover rounded-md"
        />
      </div>
      <div className="flex flex-col flex-grow">
        <h1 className="text-xl font-semibold text-white mb-2">{project.title}</h1>
        <p className="text-sm text-zinc-300 mb-4 flex-grow">{project.description}</p>
        <div>
          <div className="flex flex-wrap mb-4">
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
                    variant: 'default',
                    size: "sm",
                  })
                )}
                href={project.deployedLink}
              >
                <Globe className="mr-2 h-4 w-4" />
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
  );
};

const Projects = () => {
  return (
    <MaxWidthWrapper  className="flex flex-col bg-gradient-to-b from-black via-black to-gray-800 py-4 px-2 md:pt-0 items-center-safe">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        className="mx-5 text-center text-4xl font-bold sm:text-5xl text-white mb-8"
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
        className="mx-auto mb-12 max-w-prose px-4 text-center text-sm text-zinc-400 sm:text-base"
      >
        I've worked on a variety of projects, from simple websites to
        complex web applications. Here are a few of my favorites.
      </motion.p>
      <div name="Projects" className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-2 ">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};

export default Projects;