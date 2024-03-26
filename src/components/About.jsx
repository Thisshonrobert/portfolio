import React from 'react'

function About() {
  return (
    <div name="About" className='bg-gradient-to-b from-black via-black to-gray-800 w-full h-screen '>
        <div className='flex flex-col text-white justify-center  mx-auto max-w-screen-lg p-4 w-full h-full '>
            <div className='pb-8'>
            <h1 className='text-4xl inline border-b-4 font-bold border-gray-500'>About</h1>
            </div>
            
            <p className='text-xl mt-6'>Thisshon Robert is a student and an aspiring web developer. He holds a degree at Electronics and Communication Engineering. His tech stack knowledge include MongoDB, Express, React, Node, Typescript, Tailwind, Prisma etc </p>
            <br></br>
            <p className='text-xl'>He aspires to contribute more to the tech industry by solving client's problems. He also studied and passed Japanese Language Proficiency Test N5.In the face of challenges within modern IT infrastructure, I bring forth a diverse skill set, ready to conquer and innovate.</p>
            <br></br>
            <p className='text-xl'> "If something doesn't work as expected, just <span style={{ color: 'pink', fontFamily: 'monospace',fontSize: '0.8em' }}>sudo</span> it!"</p>
        </div>
    </div>
  )
}

export default About
