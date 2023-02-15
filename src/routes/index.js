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
        const {signed} = useAuth();
        return signed > 0 ? <Item /> : <Login />
    }

   

    return (

    <HashRouter>
    <Routes>
        <Route exact path='/home' element={<Private Item={Login} />}/>
        <Route path="/" element={<Home /> } />
        <Route exact path="/signup" element={<RegisterUser /> }/>
        <Route path="*" element={<Login />}/>
    </Routes>
    
  </HashRouter>
    );
}

export default RoutesApp;
