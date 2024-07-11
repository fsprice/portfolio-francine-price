import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <section id="home">
      <div className="container text-center">        
        <h1 className="display-4 mb-4 text-light py-3">Francine Price</h1> 
        <div className="pb-4 home-image">
            <img
              src={process.env.PUBLIC_URL + '/images/profile-picture.jpg'}
              alt="Profile"
              className="img-fluid rounded-circle"
            />
          </div>      
        <h3 className="lead text-light pt-3">Aspiring Front-End Developer and Web Designer</h3>        
      </div>
    </section>
  );
};

export default Home;