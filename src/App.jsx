import gsap from 'gsap';
import { useState, useEffect } from 'react';

import NavbarPage from './component/Navbar'
import Home from './component/Home'
import SocialMediaLinks from './component/SocialMediaLinks'
import About from './component/About'
import Experience from './component/Experience'
import Contact from './component/Contact'
import Projects from './component/Projects'
import WelcomeAnimation from './component/welcomeAnimation'

function App() {


  return (
    <div>
      <WelcomeAnimation />
      <NavbarPage/>
      <Home/>
      <SocialMediaLinks/>
      <Experience/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App