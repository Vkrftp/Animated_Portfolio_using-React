import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/resume.pdf';
import hero from './Data/hero.json';
import Typed from 'typed.js'
const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {
    const option = {
      strings: ["welcome to My Profile ", "My name is Vinod Singh", "I,m full stack developer", "Software developer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    }
    const typed = new Typed(typedRef.current, option)
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <div className="container home" id='home'>
        <div className="left" data-aos="fade-down-right" data-aos-duration="1000">
          <h1 ref={typedRef}>
          </h1>
          <a href={pdf} download='Resume.pdf' className="btn btn-outline-warning my-4">Download resume</a>
        </div>
        <div className="right" data-aos="fade-down-left" data-aos-duration="1000">
          <div className="img">
            <img src={`/Images/${hero.imgSrc}`} alt="img" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;