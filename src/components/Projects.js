import React from 'react';
import './Projects.css'; 

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Web Development',
      imageUrl: `${process.env.PUBLIC_URL}/images/beaches.jpg`,
      link: 'https://wcet.waketech.edu/fsprice/WEB125/BootStrap-Project/topsailBeach.html'
    },
    {
      id: 2,
      title: 'UI/UX Design',
      imageUrl: `${process.env.PUBLIC_URL}/images/dancers.png`,
      link: 'https://www.figma.com/proto/gLDJr5RRaMaPz5v4np5qYI/Dance-Expression---Mobile-App?type=design&node-id=37-3&t=Wbrp0PSY49PukkDe-1&scaling=scale-down&page-id=36%3A2&starting-point-node-id=37%3A3',
    },
    {
      id: 3,
      title: 'Web Development',
      imageUrl: `${process.env.PUBLIC_URL}/images/nccounty.png`,
      link: 'https://wcet.waketech.edu/fsprice/WEB125/Final%20Project/index.html',
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2 className="display-4 mb-5 text-light text-center">Projects</h2>
        <div className="row justify-content-center">
          {projects.map((project) => (
            <div key={project.id} className="col-md-4 mb-5 px-4">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="card project-card text-decoration-none">
                <img
                  src={project.imageUrl}
                  className="card-img-top project-image img-fluid"
                  alt={`Project ${project.id}`}
                />
                <div className="card-body">
                  <h5 className="card-title text-center">{project.title}</h5>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;