import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap'
import axios from 'axios'

//Route Components
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home'

import  { UserProvider } from './UserContext'

function App() {

  const [user, setUser] = useState({ id: null, isFirstimer: null})

  const unsetUser = () => {
    localStorage.clear();
  }

  useEffect(()=>{
    axios.get('http://localhost:4000/users/details', {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(res => {
      console.log(res.data)
      if (typeof res.data.user !== "undefined"){
        setUser({
          id: res.data.user._id,
          isFirstimer: res.data.user.isFirstimer
        })
      }else{
        setUser({
          id: null,
          isFirstimer: null
        })
      }
    })
    .catch(error =>{
      if (error.response) {
        console.error('Error Response:', error.response);
        if (error.response.data && error.response.data.message) {
            console.log(error.response.data.message); // Server error message
        } else {
            console.log('An error occurred while processing your request.');
        }
    } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
        console.log('Please check your network connection or the server status.');
    } else {
        // Something happened in setting up the request that triggered an error
        console.error('Error setting up request:', error.message);
        console.log('An error occurred. Please try again later.');
    }
    })
  },[])

  return (
    <UserProvider value={{user, setUser, unsetUser}}>
      <Router>
        <Container fluid>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/Home" element={<Home/>}/>
            
          </Routes>
        </Container>
      </Router>
   </UserProvider>
  );
}

export default App;
