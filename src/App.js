import React from 'react';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';
import NavBar from './NavBar'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     <Header />
     <NavBar />
     <Skills />
     <Projects />
    </div>
  );
}

export default App;
