import { cn } from "../lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const TextRevealByWord = ({ text, className }) => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });
  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 min-h-screen py-20", className)}>
      <div className="sticky top-1/4 mx-auto flex max-w-4xl items-center bg-transparent px-4 sm:px-6 lg:px-8">
        <p className="flex flex-wrap text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white/20">
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
    <span className="relative mx-1 lg:mx-2.5">
      <motion.span style={{ color }} className="text-white">
        {children}
      </motion.span>
    </span>
  );
};

const About = () => {
  return (
    <div name="About" className="w-full bg-gradient-to-b from-gray-800 via-black to-black">
      <div className="container mx-auto">
        <TextRevealByWord text="I craft intuitive, responsive web experiences that seamlessly blend aesthetic design with functional elegance." />
      </div>
    </div>
  );
};

export default About;