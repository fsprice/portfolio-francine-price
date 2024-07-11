import React from 'react';
import './Experience.css'; 

const Experience = () => {
  return (
    <section id="experience" className="py-5">
      <div className="container">
        <h2 className="display-4 mb-5 text-light text-center">Experience</h2>
        <div className="timeline">          
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>Wake Technical Community College</h3>
              <p className="education">A.A.S. in Information Technology | Concentration: Web Development</p>
              <p className="location">Morrisville, NC</p>
              <p className="date">May 2023 - Present</p>
              <p className="description"><i>HTML, CSS, JavaScript, Bootstrap, React, WordPress, Responsive Design, MySQL, Figma, UX/UI Design</i></p>
            </div>
          </div>
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>University of North Carolina at Charlotte</h3>
              <p className="education">M.A. in Spanish | Concentration: Translation and Translation Studies</p>
              <p className="location">Charlotte, NC</p>
              <p className="date">June 2021 - May 2023</p>
              <p className="description"><i>Spanish-English Translation, Localization, Linguistics, Strong Communication, Project Management, CAT Tools (MemoQ, Passolo)</i></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
