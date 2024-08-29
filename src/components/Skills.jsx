import React from 'react'
import skills from './Data/skills.json'

const Skills = () => {
  return (
    <>
     <div className="container skills" id='skills'>
     <h1>SKILLS</h1>
     <div className="items">
      {
        skills.map((data)=>{
          return (
            <>
            <div key={data.id} className="item" data-aos="zoom-out-down" data-aos-duration="1000">
              <img src={`/Images/${data.imageSrc}`} alt="pic" />
              <h3>{data.title}</h3>
              </div>
            </>
          )
        })
      }
     </div>
     </div>
    </>
  )
}

export default Skills;
