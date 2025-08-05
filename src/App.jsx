import gsap from 'gsap';

import NavbarPage from './component/Navbar'
import Home from './component/Home'
import SocialMediaLinks from './component/SocialMediaLinks'
import About from './component/About'
import Experience from './component/Experience'
import Contact from './component/Contact'

import Projects from './component/Projects'




function App() {
 

  return (
    <div>
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
//<Portfolio/>
{/* <Experience/> */}