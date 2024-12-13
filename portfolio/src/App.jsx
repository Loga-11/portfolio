import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Project from './components/Project';

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Education />
      <Experience />
      <Project />
      <Footer />
    </div>
  );
};

export default App;
