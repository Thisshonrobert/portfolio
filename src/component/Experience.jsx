// import React from 'react';
// import css from '../assets/css.png';
// import github from '../assets/github.png';
// import html from '../assets/html.png';
// import javascript from '../assets/javascript.png';
// import typescript from '../assets/ty1.webp';
// import prisma from '../assets/pris.webp';
// import node from '../assets/node.png';
// import react from '../assets/react.png';
// import tailwind from '../assets/tailwind.png';
// import docker from '../assets/docker.png';
// import nextjs from '../assets/nextjs.png';
// import turborepo from '../assets/turborepo.png';

// function Experience() {
//   let id = 1;
//   const techno = [
//     {
//       id: id++,
//       scr: html,
//       title: 'HTML',
//       style: 'shadow-orange-500',
//       href: 'https://www.w3schools.com/html',
//     },
//     {
//       id: id++,
//       scr: github,
//       title: 'GITHUB',
//       style: 'shadow-gray-400',
//       href: 'https://docs.github.com/en',
//     },
//     {
//       id: id++,
//       scr: css,
//       title: 'CSS',
//       style: 'shadow-cyan-500',
//       href: 'https://www.w3schools.com/w3css/defaulT.asp',
//     },
//     {
//       id: id++,
//       scr: typescript,
//       title: 'TYPESCRIPT',
//       style: 'shadow-blue-500',
//       href: 'https://www.typescriptlang.org/docs/',
//     },
//     {
//       id: id++,
//       scr: javascript,
//       title: 'JAVASCRIPT',
//       style: 'shadow-yellow-500',
//       href: 'https://devdocs.io/javascript/',
//     },
//     {
//       id: id++,
//       scr: prisma,
//       title: 'PRISMA',
//       style: 'shadow-gray-600',
//       href: 'https://www.prisma.io/docs',
//     },
//     {
//       id: id++,
//       scr: node,
//       title: 'NODE',
//       style: 'shadow-green-500',
//       href: 'https://nodejs.org/docs/latest/api/',
//     },
//     {
//       id: id++,
//       scr: react,
//       title: 'REACT',
//       style: 'shadow-blue-500',
//       href: 'https://react.dev/blog/2023/03/16/introducing-react-dev',
//     },
//     {
//       id: id++,
//       scr: tailwind,
//       title: 'TAILWIND',
//       style: 'shadow-sky-500',
//       href: 'https://tailwindcss.com/docs/installation',
//     },
//     {
//       id: id++,
//       scr: docker,
//       title: 'DOCKER',
//       style: 'shadow-blue-500',
//       href: 'https://www.docker.com/',
//     },
//     {
//       id: id++,
//       scr: nextjs,
//       title: 'NEXT JS',
//       style: 'shadow-gray-500',
//       href: 'https://nextjs.org/',
//     },
//     {
//       id: id++,
//       scr: turborepo,
//       title: 'TURBOREPO',
//       style: 'shadow-red-500',
//       href: 'https://turbo.build/',
//     },
//   ];

//   return (
//     <div name="Experience" className='bg-gradient-to-b from-black via-black to-gray-800 w-full h-screen'>
//       <div className='flex flex-col text-white justify-center mx-auto max-w-screen-lg p-4 w-full h-full'>
//         <div className='mt-6'>
//           <h1 className='border-b-4 border-gray-500 inline font-bold text-4xl p-2'>Experience</h1>
//           <p className='text-xl py-4 text-gray-500'>These are the technologies I've worked on</p>
//         </div>

//         <div className='w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-4 px-10 sm:px-0'>
//           {techno.map(({ id, scr, style, title, href }) => (
//             <a key={id} href={href} target="_blank" rel="noopener noreferrer" className={`shadow-md hover:scale-105 duration-200 rounded-lg ${style}`}>
//               <img src={scr} alt={title} className='w-16 mx-auto' />
//               <p className='mt-4'>{title}</p>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Experience;
import React from 'react';
import ExperienceCard from '../components/ui/ExperienceCard';

const experiences = [
  {
    id: 1,
    company: 'Newgen Software',
    position: 'Application Engineer Trainee',
    year: '2024',
    type: 'Internship',
    logo: './newgen.jpg',
    description: [
      'Learnt Web Development , java, javascript',
      'Handon Practise on Company specifi products like Omnidocs, Omniscan and Ibps',
      'Attended On the Job training and got real work experience ',
    ]
  },
  {
    id: 2,
    company: 'Newgen Software',
    position: 'Application Engineer ',
    year: '2024-2025',
    type: 'Full Time',
    logo: './newgen.jpg',
    description: [
      'platform (iBPS).',
      'Worked on digitizing workflows for Philippines National Bank using Newgens BPM.' ,
      'Customized loanform flows using JavaScript and configured Omnidocs, Omniscan, and BRMS for enterprise automation.', 
      'Technologies: Java, JavaScript, SQl' 
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section name="Experience" className="w-full px-2  bg-gradient-to-b from-gray-800 via-black to-black h-full md:h-screen py-2">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 dark:text-white">
          My <span className="text-yellow-500">Experiences</span>
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          I've had the opportunity to work on meaningful projects with amazing teams. Here's what I've been up to recently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experiences.map(exp => (
            <ExperienceCard key={exp.id} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

