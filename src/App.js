import React from 'react';

import Home from "./sections/Home/Home.jsx"
import About from "./sections/About/About.jsx"
import Skills from "./sections/Skills/Skills.jsx"
import Projects from "./sections/Projects/Projects.jsx"

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Projects />
      </div>
  );
}

export default App;
