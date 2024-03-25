import React from 'react'

function About() {
  return (
    <div name="about" className='bg-gradient-to-b from-gray-800 via-gray-900 to-black w-full h-screen '>
        <div className='flex flex-col text-white justify-center  mx-auto max-w-sccreen-lg p-4 w-full h-full pl-20'>
            <div className='mt-10'>
            <h1 className='text-4xl inline border-b-4 font-bold border-gray-500'>About</h1>
            </div>
            
            <p className='text-xl mt-20'>Thisshon Robert is a student and an aspiring web developer. He holds a degree at Electronics and Communication Engineering. His tech stack knowledge include MongoDB, Express, React, Node, Typescript, Tailwind, Prisma etc </p>
            <br></br>
            <p className='text-xl'>He aspires to contribute more to the tech industry by solving client's problems. He also studied and passed Japanese Language Proficiency Test N5.</p>
        </div>
    </div>
  )
}

export default About
