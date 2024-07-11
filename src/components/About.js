import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 pb-4 about-image">
            <img
              src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?q=100&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="img-fluid rounded-circle"
            />
          </div>
          <div className="col-md-8 d-flex align-items-center about-text">
            <div>
              <h2 className="display-4 mb-4 text-light">About Me</h2>
              <p className="lead text-light">
                I am an aspiring front-end developer with a unique combination of academic and technical skills. My educational journey began with a B.A. in Spanish, complemented by a minor in linguistics. Exploring the intricacies of language and communication laid the groundwork for my subsequent pursuit of an M.A. in Spanish, specializing in Translation and Translation Studies.
                <br /><br />
                Transitioning from academia to technology, I have developed a robust skill set in front-end development. I am proficient in HTML, CSS, and JavaScript, forming the foundation for creating compelling web interfaces. Leveraging frameworks such as Bootstrap and React.js, I skillfully build dynamic and user-centric digital experiences.
                <br /><br />
                My passion for language seamlessly extends into the coding realm. I am motivated by the desire to design seamless, responsive, and visually captivating websites that transcend cultural boundaries. This unique fusion of linguistic insight and technical expertise enables me to make meaningful contributions to diverse projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;