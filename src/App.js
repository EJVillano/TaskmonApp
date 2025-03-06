import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'

//Route Components
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
   <Router>
    <Container fluid>
      <Routes>
        <Route path="/" element={<Login/>}/>
      </Routes>
    </Container>
   </Router>
  );
}

export default App;
