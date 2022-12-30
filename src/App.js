import React from 'react';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';
import Stack from 'react-bootstrap/Stack';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Stack direction='vertical' gap={4}>
        <Header />
        <Projects />
     </Stack>
    </div>
  );
}

export default App;
