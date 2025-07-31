import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitText from 'gsap/SplitText';
import NavbarPage from './component/Navbar'
import Home from './component/Home'
import SocialMediaLinks from './component/SocialMediaLinks'
import About from './component/About'
import Experience from './component/Experience'
import Contact from './component/Contact'
import Portfolio from './component/Portfolio'
import Projects from './component/Projects'

gsap.registerPlugin(ScrollTrigger,SplitText);


function App() {
 

  return (
    <div>
    <NavbarPage/>
     <Home/>
     <SocialMediaLinks/>
     <About/>
    
     <Projects/>
     <Contact/>
     
    </div>
  )
}

export default App
//<Portfolio/>
{/* <Experience/> */}