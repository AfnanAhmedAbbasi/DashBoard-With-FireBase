import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import Home from '../pages/Home';

const Approuter = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<SignUp />} /> 
                    <Route path='/login' element={<Login />} /> 
                    <Route path='/*' element={<Home />} /> 
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default Approuter;
