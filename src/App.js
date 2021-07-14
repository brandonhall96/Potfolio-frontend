// Imports
import React, { useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';
// Components
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';




function App() {


  return (
    <div className="App">
      <Navbar   />
      <div className='container mt-5'>
        <Switch>
            {/* routes will go inside of here */}
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route exact path='/' component={Welcome} />
            
          
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
