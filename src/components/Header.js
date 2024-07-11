import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container"> 
        <img
          src={process.env.PUBLIC_URL + '/images/logo-price.png'}
          alt="Logo"
          className="img-fluid rounded-circle logo"
        />              
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mt-3">
            <li className="nav-item me-2">
              <a className="nav-link text-light" aria-current="page" href="#about">About</a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link text-white" href="#skills">Skills</a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link text-white" href="#projects">Projects</a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link text-white" href="#experience">Experience</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>        
  );
};

export default Header;