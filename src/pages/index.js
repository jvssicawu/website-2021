import React from 'react';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import Metadata from '../containers/Metadata';

const Main = () => (
  <>
    <Metadata />
    <Home />
    <About />
    <Experience />
    <Contact />
  </>
);

export default Main;
