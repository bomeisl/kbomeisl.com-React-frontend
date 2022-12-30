import React from 'react';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
     <Header />
     <Projects />
    </div>
  );
}

export default App;
