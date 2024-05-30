import React from 'react';

function About() {
    return (
        <section name="About" className='bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300 dark:from-gray-800 dark:via-black dark:to-black w-full md:h-screen'>
            <div className='flex flex-col text-black dark:text-white justify-center mx-auto max-w-screen-lg p-4 w-full h-full'>
                <div className='mt-20'>
                    <h1 className='text-4xl inline border-b-4 font-bold border-blue-500 dark:border-gray-500'>About</h1>
                </div>
                
                <p className='text-xl mt-6'>
                    Thisshon Robert is a student and an aspiring web developer. He holds a degree in Electronics and Communication Engineering. His tech stack knowledge includes MongoDB, Express, React, Node, Typescript, Tailwind, Prisma, etc.
                </p>
                
                <p className='text-xl mt-6'>
                    He aspires to contribute more to the tech industry by solving client's problems. He also studied and passed the Japanese Language Proficiency Test N5. In the face of challenges within modern IT infrastructure, he brings forth a diverse skill set, ready to conquer and innovate.
                </p>
                
                <p className='text-xl mt-6'>
                    "If something doesn't work as expected, just <span className='text-pink-500 font-mono text-sm'>sudo</span> it!"
                </p>
            </div>
        </section>
    );
}

export default About;
