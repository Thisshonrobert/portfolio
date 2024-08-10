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
            "flex flex-wrap text-4xl font-bold text-white/20 md:p-4 md:text-6xl lg:p-4 lg:text-6xl xl:text-7xl"
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
  const color = useTransform(progress, range, ["#333333", "#FFFFFF"]);
  return (
    <span className="xl:lg-3 relative mx-1 lg:mx-2.5">
      <motion.span
        style={{ color: color }}
        className={"text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};

const About = () => {
  return (
    <div name="About" className="mx-auto w-full h-full bg-gradient-to-b from-gray-800 via-black to-black">
      <div className="container mx-auto py-1 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl ml-8 lg:ml-24 inline border-b-4 font-bold border-gray-500 mb-2 text-white">
          About
        </h1>
        <TextRevealByWord className="lg:ml-32" text="I craft intuitive, responsive web experiences that seamlessly blend aesthetic design with functional elegance." />
      </div>
    </div>
  );
};

export default About;
