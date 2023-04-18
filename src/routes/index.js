import React, { Fragment } from 'react';
import {
    HashRouter,
    Routes,
    Route,
  } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import Home from '../pages/Home';
import Login from '../pages/Login';
import RegisterUser from '../pages/RegisterUser';

const RoutesApp = () => {

    const Private = ({Item}) => {
      const token = localStorage.getItem('ns_token')
        return !token ? <Login /> : <Home />
    }
    return (

    <HashRouter>
    <Routes>
        <Route exact path='/home' element={<Private Item={Home} />}/>
        <Route path="/" element={<Login /> } />
        <Route exact path="/signup" element={<RegisterUser /> }/>
        <Route path="*" element={<Login />}/>
    </Routes>
    
  </HashRouter>
    );
}

export default RoutesApp;
