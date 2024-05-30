import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [dark, setDark] = useState(localStorage.getItem("theme") === "true");

    useEffect(() => {
        localStorage.setItem("theme", dark);
        if (dark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [dark]);

    const links = [
        { id: 1, link: "Home" },
        { id: 2, link: "About" },
        { id: 3, link: "Experience" },
        { id: 4, link: "Portfolio" },
        { id: 5, link: "Contact" }
    ];

    return (
        <div className='bg-gradient-to-b from-blue-300 via-blue-200 to-blue-300 dark:from-black dark:via-black dark:to-black w-full h-20 flex justify-between items-center px-4 fixed text-black dark:text-white'>
            <div className='text-5xl font-signature ml-2'>
                <h1>Thisshon</h1>
            </div>
            <div className='flex'>
                <ul className='hidden md:flex'>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 cursor-pointer font-medium text-blue-900 dark:text-gray-500 hover:text-blue-500 dark:hover:text-white hover:scale-105 duration-200'>
                            <Link to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>
                <button onClick={() => setDark(!dark)} className='pl-2'>
                    {dark ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>
                    )}
                </button>
            </div>

            <div onClick={() => setNav(!nav)} className='md:hidden cursor-pointer z-10 text-gray-500 dark:text-gray-500 hover:text-blue-500 dark:hover:text-white'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>

            {nav && (
                <ul className='flex flex-col bg-gradient-to-b from-blue-100 to-blue-300 dark:from-black dark:to-gray-800 top-0 left-0 h-screen w-full justify-center items-center absolute text-blue-900 dark:text-gray-500'>
                    {links.map(({ id, link }) => (
                        <li key={id} className='px-4 py-4 cursor-pointer capitalize font-large text-4xl text-blue-900 dark:text-gray-500 hover:text-blue-500 dark:hover:text-white hover:scale-105 duration-200'>
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Navbar;
