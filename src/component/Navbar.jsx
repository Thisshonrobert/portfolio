
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
    
        {id:3, name: "Experience", link: "Experience" },
        {id:4, name:  "Projects", link: "Projects" },
        { id:5,name:  "Contact", link: "Contact" }
    ];
    const isHomeSection = window.location.hash === "" || window.location.hash === "#home";

    return (
        <nav className="fixed w-full bg-inherit ">
        <Navbar  >
          {/* Desktop Navigation */}
          <NavBody>
            <NavbarLogo />
            <NavItems items={links}  />
            <div className="flex items-center gap-4">
            
            <NavbarButton variant="primary" onClick={() => window.open("https://www.instagram.com/thisshon_robert/", "_blank")}><FaInstagram/></NavbarButton>
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
      </nav>
    
    );
}

export default NavbarPage;
