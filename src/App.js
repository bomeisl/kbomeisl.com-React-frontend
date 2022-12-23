import React from 'react'
import Header from './Header'
import Projects from './Projects'
import Skills from './Skills'

import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
     <Header />
     <Skills />
     <Projects />
    </div>
  );
}

export default App;
