import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Projects from './Projects.js';
import Skills from './Skills.js';
import Home from './HomePage.js'
import NavBar from './NavBar.js'
import Header from './Header.js'
import Stack from 'react-bootstrap/Stack';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div>
    <Stack>
      <h1 class='ui header justify-content-center'>
        <h1  id="name">Kyle Bomeisl</h1>
        <h2  id="occ">Software Engineer</h2>
      </h1>
        <Header/>
        <NavBar/>
        
    </Stack>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/skills" element={<Skills/>}/>
    </Routes>
    </div>
  );
}

export default App;
