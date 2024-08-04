import { cn } from "../lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const TextRevealByWord = ({ text, className }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <p
          className={
            "flex flex-wrap text-2xl font-bold text-black/20 dark:text-white/20 md:p-4 md:text-4xl lg:p-5 lg:text-4xl xl:text-7xl"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const color = useTransform(progress, range, ["#00000033", "#FFFFFF"]); 
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <motion.span
        style={{ color: color }}
        className={"text-black dark:text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

const About = () => {
  return (
    <div name="About" className="mx-auto w-full h-full bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 dark:from-gray-800 dark:via-black dark:to-black p-12">
      <div className="container mx-auto max-w-screen-lg  py-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl inline border-b-4 font-bold border-blue-500 dark:text-white dark:border-gray-500 mb-6">
          About
        </h1>
        <TextRevealByWord className="lg:ml-32" text="I craft intuitive, responsive web experiences that seamlessly blend aesthetic design with functional elegance." />
        
      </div>
    </div>
  );
};

export default About;