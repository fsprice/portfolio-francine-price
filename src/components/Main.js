import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Experience from './Experience';
import Home from './Home';

const Main = () => {
  return (
    <main>
      <Home />   
      <About />
      <Skills />
      <Projects />      
      <Experience />
    </main>
  );
};

export default Main;