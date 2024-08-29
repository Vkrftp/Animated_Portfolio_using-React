import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Aos from 'aos'
import "aos/dist/aos.css"
import { useEffect } from 'react'; 
function App() {
  useEffect(() => {
   Aos.init();

  }, [])
  
  return (
    <>
      <Navbar logoName="Avatar Home"/>
      <Home/>
      <Experience/>
      <Skills/>
      <Project/>
      <Contact/>
    </>
  );
}

export default App;
