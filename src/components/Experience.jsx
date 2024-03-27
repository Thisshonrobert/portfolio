import React from 'react'
import css from '../assets/css.png'
import github from '../assets/github.png'
import html from '../assets/html.png'
import javascript from '../assets/javascript.png'
import typescript from '../assets/ty1.webp'
import prisma from '../assets/pris.webp'
import node from '../assets/node.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'

function Experience() {
let id=1;
  const techno = [
    {
      id:id++,
      scr:html,
      title:'HTML',
      style:'shadow-orange-500'
    },
    {
      id:id++,
      scr:github,
      title:'GITHUB',
      style:'shadow-gray-400'
    },
    {
      id:id++,
      scr:css,
      title:'CSS',
      style:'shadow-cyan-500'
    },
    {
      id:id++,
      scr:typescript,
      title:'TYPESCRIPT',
      style:'shadow-blue-500'
    },
    {
      id:id++,
      scr:javascript,
      title:'JAVASCRIPT',
      style:'shadow-yellow-500'
    },
    {
      id:id++,
      scr:prisma,
      title:'PRISMA',
      style:'shadow-gray-600'
    },
    {
      id:id++,
      scr:node,
      title:'NODE',
      style:'shadow-green-500'
    },
    {
      id:id++,
      scr:react,
      title:'REACT',
      style:'shadow-blue-500'
    },
    {
      id:id++,
      scr:tailwind,
      title:'TAILWIND',
      style:'shadow-sky-500'
    },
  ]
  return (
    <div name="Experience" className='bg-gradient-to-b from-black via-black to-gray-800  w-full md:h-screen '>
  <div className='flex flex-col text-white justify-center  mx-auto max-w-screen-lg p-4 w-full h-full'>
    <div className='mt-20'>
      <h1 className='border-b-4 border-gray-500 inline font-bold text-4xl p-2'>Experience</h1>
      <p className='text-xl py-4'>These are the technologies I've worked on</p>
    </div>

    <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-4  px-10 sm:px-0'>
      {techno.map(({id,scr,style,title})=>(
        <div key={id} className={`shadow-md hover:scale-105 duration-200 rounded-lg ${style}`}>
          <img src={scr} alt={title} className='w-16 mx-auto'></img>
          <p className='mt-4'>{title}</p>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default Experience
