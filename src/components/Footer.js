import React from 'react';
import './Footer.css'; 

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container text-center">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-1">
            <a href="https://github.com/fsprice" target="_blank" className="text-white">
              <img
                src={process.env.PUBLIC_URL + '/images/github.png'}
                alt="GitHub icon"
                className="img-fluid rounded-circle footer-icon"
              />
            </a>
          </div>
          <div className="col-md-1">
            <a href="https://www.linkedin.com/in/francine-price-439734203/" target="_blank" className="text-white">
              <img
                src={process.env.PUBLIC_URL + '/images/linkedin.png'}
                alt="LinkedIn icon"
                className="img-fluid rounded-circle footer-icon"
              />
            </a>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col">
            <p className="mb-0">Copyright &copy; 2024 Francine Price | All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;