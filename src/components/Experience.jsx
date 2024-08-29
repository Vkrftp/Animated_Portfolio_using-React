import React from 'react'
import experience from "./Data/experience.json"


const Experience = () => {
  return (
   <>
      <div className="container ex" id='experience'>
        <h1>Certifications</h1>
        {
          experience.map((data) => {
            return <>
              <div key={data.id} className="ex-item text-center" data-aos="zoom-in-up" data-aos-duration="1000">
                <div className="left ">
                  <img src={`/Images/${data.imageSrc}`} alt="pic"  className='comp-logo'/>
                </div>
                <div className="right text-center">
                  <h2>{data.coursename}</h2>
                  <h4>{data.startDate},{" "}{data.endDate}</h4>
                  <h5>{data.organisation}</h5>
                </div>
                </div>
              </>
        })
      }

            </div >
   </>
      )
}

      export default Experience;
