import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
     <section id="gallery" className="py-5">        
      <div className="container text-center">
        <h2 className="display-4 mb-4 text-light py-4">Skills</h2>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-1">
            <img
              src={process.env.PUBLIC_URL + '/images/html.png'}
              alt="HTML icon"
              className="img-fluid rounded-circle gallery-image"
            />
          </div>
          <div className="col-md-1">
            <img
              src={process.env.PUBLIC_URL + '/images/css.png'}
              alt="CSS icon"
              className="img-fluid rounded-circle gallery-image"
            />
          </div>
          <div className="col-md-1">
            <img
              src={process.env.PUBLIC_URL + '/images/javascript.png'}
              alt="JavaScript icon"
              className="img-fluid rounded-circle gallery-image"
            />
          </div>
          <div className="col-md-1">
            <img
              src={process.env.PUBLIC_URL + '/images/react.png'}
              alt="React icon"
              className="img-fluid rounded-circle gallery-image"
            />
          </div>
          <div className="col-md-1">
            <img
              src={process.env.PUBLIC_URL + '/images/mysql.png'}
              className="img-fluid rounded-circle gallery-image"
            />
          </div>
          <div className="col-md-1">
            <img
              src={process.env.PUBLIC_URL + '/images/bootstrap.png'}
              alt="Bootsrap icon"
              className="img-fluid rounded-circle gallery-image"
            />
          </div>
          <div className="col-md-1">
            <img
              src={process.env.PUBLIC_URL + '/images/figma.png'}
              alt="Figma Icon"
              className="img-fluid rounded-circle gallery-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;