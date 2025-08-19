"use client";;
/**
 * @author: @dorian_baffier
 * @description: Dynamic Text
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";

const greetings = [
    { text: "Hello", language: "English" },
    { text: "こんにちは", language: "Japanese" },
    { text: "Bonjour", language: "French" },
    { text: "Hola", language: "Spanish" },
    { text: "안녕하세요", language: "Korean" },
    { text: "Ciao", language: "Italian" },
    { text: "Hallo", language: "German" },
    { text: "こんにちは", language: "Japanese" },
];

const DynamicText = ({ children }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(true);
    const [isRevealing, setIsRevealing] = useState(false);
    const overlayRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        if (!isAnimating) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = prevIndex + 1;

                if (nextIndex >= greetings.length) {
                    clearInterval(interval);
                    // Start the reveal animation immediately after last greeting
                    setTimeout(() => {
                        setIsRevealing(true);
                    }, 300); // Reduced delay for smoother transition
                    return prevIndex;
                }

                return nextIndex;
            });
        }, 300);

        return () => clearInterval(interval);
    }, [isAnimating]);

    // Handle the reveal completion
    useEffect(() => {
        if (isRevealing) {
            // Wait for reveal animation to complete, then unmount
            const timer = setTimeout(() => {
                setIsAnimating(false);
            }, 1200); // Match the animation duration
            
            return () => clearTimeout(timer);
        }
    }, [isRevealing]);

    // Animation variants for the text
    const textVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: -100, opacity: 0 },
    };

    // Animation variants for the overlay reveal - bottom to top
    const overlayVariants = {
        initial: { y: 0 },
        reveal: { y: "-100%" },
    };

    return (
        <>
            {/* The main content of your page */}
            {children}

            {/* The animation overlay - only shows during animation */}
            {isAnimating && (
                <motion.div
                    ref={overlayRef}
                    className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black"
                    aria-label="Rapid greetings in different languages"
                    initial="initial"
                    animate={isRevealing ? "reveal" : "initial"}
                    variants={overlayVariants}
                    transition={{ 
                        duration: 1.2, 
                        ease: [0.25, 0.46, 0.45, 0.94] // Custom easing for smooth reveal
                    }}
                    onAnimationComplete={() => {
                        if (isRevealing) {
                            // Animation completed, component will unmount on next render
                        }
                    }}
                >
                    <div className="relative h-16 w-80 flex items-center justify-center overflow-visible">
                        <AnimatePresence mode="popLayout">
                            <motion.div
                                key={currentIndex}
                                ref={textRef}
                                className="absolute flex items-center gap-2 text-2xl font-medium text-white md:text-4xl lg:text-5xl"
                                aria-live="off"
                                initial={textVariants.hidden}
                                animate={textVariants.visible}
                                exit={textVariants.exit}
                                transition={{ duration: 0.2, ease: "easeOut" }}
                            >
                                <div
                                    className="h-2 w-2 rounded-full bg-white"
                                    aria-hidden="true"
                                />
                                {greetings[currentIndex].text}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </motion.div>
            )}
        </>
    );
};

export default DynamicText;
