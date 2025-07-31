
import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { FaInstagram } from "react-icons/fa";

import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
  } from "@/components/ui/resizable-navbar"

const NavbarPage = () => {
    //  const [nav, setNav] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
   
    const links = [
        {id:1, name:"Home", link: "Home" },
        {id:2, name: "About", link: "About" },
        {id:3, name: "Experience", link: "Experience" },
        {id:4, name:  "Portfolio", link: "Portfolio" },
        { id:5,name:  "Contact", link: "Contact" }
    ];
    const isHomeSection = window.location.hash === "" || window.location.hash === "#home";

    return (
        // <nav className=' flex justify-between items-center bg-black'>
        //     <div className='flex md:flex-row flex-col md:justify-between items-center gap-5 py-5 lg:px-0 px-5 container mx-auto text-5xl font-modernnegra ml-2 text-white'>
        //         <h1>Portfolio</h1>
        //     </div>
        //     <div className='flex'>
        //         <ul className='hidden md:flex'>
        //             {links.map(({ id, link }) => (
        //                 <li 
        //                     key={id} 
        //                     className='px-4 cursor-pointer font-medium text-gray-500 hover:text-white hover:scale-105 duration-200'
        //                 >
        //                     <Link to={link} smooth duration={500}>{link}</Link>
        //                 </li>
        //             ))}
        //         </ul>
        //     </div>

        //     <div 
        //         onClick={() => setNav(!nav)} 
        //         className='md:hidden cursor-pointer z-10 text-gray-500 hover:text-white'
        //     >
        //         {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        //     </div>

        //     {nav && (
        //         <ul className='flex flex-col bg-gradient-to-b from-black to-gray-800 top-0 left-0 h-screen w-full justify-center items-center absolute text-white'>
        //             {links.map(({ id, link }) => (
        //                 <li 
        //                     key={id} 
        //                     className='px-4 py-4 cursor-pointer capitalize font-large text-4xl hover:text-white hover:scale-105 duration-200'
        //                 >
        //                     <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
        //                 </li>
        //             ))}
        //         </ul>
        //     )}
        // </nav>
 
        <div className="fixed w-full bg-inherit ">
        <Navbar  >
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={links}  />
            <div className="flex items-center gap-4">
            
            <NavbarButton variant="primary"><FaInstagram/></NavbarButton>
          </div>
          </NavBody>
   
          {/* Mobile Navigation */}
          <MobileNav>
            <MobileNavHeader>
              <NavbarLogo />
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </MobileNavHeader>
   
            <MobileNavMenu
              isOpen={isMobileMenuOpen}
              onClose={() => setIsMobileMenuOpen(false)}
            >
              {links.map((item, idx) => (
                <a
                  key={`mobile-link-${idx}`}
                  href={item.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="relative text-neutral-600 dark:text-neutral-300"
                >
                  
                  <Link to={item.name} smooth duration={500}>{item.link}</Link>
                </a>
              ))}
            </MobileNavMenu>
          </MobileNav>
        </Navbar>
        {/* Navbar */}
      </div>
    
    );
}

export default NavbarPage;
