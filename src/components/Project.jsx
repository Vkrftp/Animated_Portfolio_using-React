import React from 'react';
import project from './Data/projects.json';

const Project = () => {
  return (
    <>
      <div className="container project my-3" id='project'>
        <h1>Projects</h1>
        <div className="row d-flex justify-content-center align-item-center">
          {
            project.map((data) => {
              return (
                <div key={data.id} className="my-3 col-sm-6 col-md-4 col-lg-3 text-center mx-4" data-aos="flip-down" data-aos-duration="1000">
                  <div className="card bg-dark text-light" style={{width: "18rem", border:"1px solid yellow", borderRadius:"10px", boxShadow:"5px 5px 10px 10px rgba(101,175,10,0.5)"}}>
                  <div className="img d-flex justify-content-center align-item-center p-3">
                  <img src={data.imageSrc} className="card-img-top" alt="pic" 
                  style={{
                    height:"200px",
                    width:"250px",
                    border:"2px solid yellow",
                    borderRadius:"10px"
                  }
                  }/>
                  </div>
                    
                    <div className="card-body">
                      <h5 className="card-title">{data.title}</h5>
                      <p className="card-text">{data.description}</p>
                      <a href={data.demo} className="btn btn-primary mx-3">Demo</a>
                      <a href={data.source} className="btn btn-warning">Code</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Project;
