import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        { id: 1, link: "Home" },
        { id: 2, link: "About" },
        { id: 3, link: "Experience" },
        { id: 4, link: "Portfolio" },
        { id: 5, link: "Contact" }
    ];

    return (
        <div className='bg-gradient-to-b from-black via-black to-black w-full h-20 flex justify-between items-center px-4 fixed text-gray-500'>
            <div className='text-5xl font-signature ml-2'>
                <h1>Thisshon</h1>
            </div>
            <div className='flex'>
                <ul className='hidden md:flex'>
                    {links.map(({ id, link }) => (
                        <li 
                            key={id} 
                            className='px-4 cursor-pointer font-medium text-gray-500 hover:text-white hover:scale-105 duration-200'
                        >
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div 
                onClick={() => setNav(!nav)} 
                className='md:hidden cursor-pointer z-10 text-gray-500 hover:text-white'
            >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col bg-gradient-to-b from-black to-gray-800 top-0 left-0 h-screen w-full justify-center items-center absolute text-white'>
                    {links.map(({ id, link }) => (
                        <li 
                            key={id} 
                            className='px-4 py-4 cursor-pointer capitalize font-large text-4xl hover:text-white hover:scale-105 duration-200'
                        >
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Navbar;
