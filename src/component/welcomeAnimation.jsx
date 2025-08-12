// src/components/WelcomeAnimation.js

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const WelcomeAnimation = ({ children }) => {
    // State to control the visibility of the animation overlay.
    // When true, the overlay is mounted; when false, it's unmounted.
    const [isAnimating, setIsAnimating] = useState(true);

    const overlayRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        // Define the sequence of greetings
        const greetings = ['.Hello', '.やあ', '.नमस्ते', '.Bonjour', '.Ciao', '.Hallo'];

        // Total time for all greetings to display before the reveal
        const totalGreetingTime = 3.0;
        
        // Calculate timing: first and last get 0.5s each, rest are distributed
        const firstLastTime = 1.0; // 0.5 seconds for first and last
        const middleGreetings = greetings.length - 2; // Number of middle greetings
        const remainingTime = totalGreetingTime - (firstLastTime * 2); // Remaining time for middle greetings
        const middleGreetingTime = middleGreetings > 0 ? remainingTime / middleGreetings : 0;

        // Use a GSAP timeline to manage the entire animation sequence
        const masterTl = gsap.timeline({
            onComplete: () => {
                // Once the entire sequence (including the final reveal) is done,
                // set the state to false to unmount the overlay.
                setIsAnimating(false);
            },
        });

        const textElement = textRef.current;

        // Create a sub-animation for each greeting
        greetings.forEach((greeting, index) => {
            const isFirst = index === 0;
            const isLast = index === greetings.length - 1;
            const isMiddle = !isFirst && !isLast;
            
            // Determine timing based on position
            let singleGreetingTime;
            if (isFirst || isLast) {
                singleGreetingTime = firstLastTime;
            } else {
                singleGreetingTime = middleGreetingTime;
            }

            masterTl
                .call(() => {
                    // Use .call() to change the text content at the correct time in the sequence
                    textElement.innerText = greeting;
                })
                .fromTo(textElement,
                    { opacity: 0, y: 30 }, // Animate from: invisible and 30px down
                    {
                        opacity: 1,
                        y: 0,
                        duration: singleGreetingTime * 0.3, // Fade-in takes 30% of the word's screen time
                        ease: 'power2.out',
                    }
                )
                .to(textElement,
                    {
                        opacity: 0,
                        y: -30,
                        delay: singleGreetingTime * 0.4, // Hold the word for 40% of its time
                        duration: singleGreetingTime * 0.3, // Fade-out takes 30%
                        ease: 'power2.in',
                    }
                );
        });

        // The final "reveal" animation
        masterTl.to(overlayRef.current, {
            yPercent: -100, // Move the entire overlay upwards by 100% of its height
            duration: 1.2, // The reveal takes 1.2 seconds
            ease: 'power3.inOut',
        });

        // Cleanup function to kill the animation if the component unmounts prematurely
        return () => {
            masterTl.kill();
        };
    }, []); // Empty dependency array ensures this effect runs only once on mount

    return (
        <>
            {/* The main content of your page */}
            {children}

            {/* The animation overlay. It is conditionally rendered based on the isAnimating state. */}
            {isAnimating && (
                <div
                    ref={overlayRef}
                    className="fixed top-0 left-0 z-50 flex h-full w-full items-center justify-center bg-black"
                >
                    <h1
                        ref={textRef}
                        className="font-signature text-5xl font-bold text-orange-300 opacity-0 md:text-7xl"
                    >
                        {/* Text is dynamically set by GSAP */}
                    </h1>
                </div>
            )}
        </>
    );
};

export default WelcomeAnimation;