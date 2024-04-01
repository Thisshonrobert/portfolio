import React from 'react'
import {FaGithub, FaLinkedin} from "react-icons/fa"
import {HiOutlineMail} from "react-icons/hi"
import {BsFillPersonLinesFill} from "react-icons/bs"

function SocialMediaLinks() {
    let id=1;
    const links = [
        {
            id:id++,
            child:(
                <>
                LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href:"https://www.linkedin.com/in/thisshon-robert-r-s-23013a222/",
            style:"rounded-tr-md"

        },
        {
            id:id++,
            child:(
                <>
                GitHub <FaGithub size={30}/>
                </>
            ),
            href:"https://github.com/Thisshonrobert?tab=overview&from=2024-03-01&to=2024-03-23",

        },
        {
            id:id++,
            child:(
                <>
                Mail  <HiOutlineMail size={30}/>
                </>
            ),
            href:"mailto:thisshonrobert0205@gmail.com",

        },
        {
            id:id++,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:"/resume.pdf",
            download:true,
            style:"rounded-br-md"
            
        }
    ]
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
      <ul>
        {links.map(({id,child,href,style,download})=>(
            <li key={id} className={`flex justify-between items-center w-32 h-12 px-4 ml-[-80px] hover:ml-[-10px] 
            hover:rounded-md duration-300 bg-gray-500 ${style}`}>
            <a href={href} download={download} target='_blank' rel='noreferrer' className='text-white flex justify-between items-center w-full'>
                {child}
            </a>
        </li>
        )
        )}
        
      </ul>
    </div>
  )
}

export default SocialMediaLinks
