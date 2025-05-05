import React from 'react';
import Home from '../components/Home';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';

const Root = () => {
    return (
        <div>
         <nav>
         <Navbar></Navbar>
         </nav>
         <Outlet></Outlet>
        </div>
    );
};

export default Root;