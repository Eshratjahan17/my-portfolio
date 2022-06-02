import React from 'react';
import About from './About/About';
import Contact from './Contact/Contact';
import MyProjects from './MyProjects/MyProjects';
import Skills from './Skills/Skills';

const Home = () => {
  return (
    <div>
      <h1>This is home</h1>
      <About></About>
      <Skills></Skills>
      <MyProjects></MyProjects>
      <Contact></Contact>

    </div>
  );
};

export default Home;