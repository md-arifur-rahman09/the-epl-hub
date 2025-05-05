import React from 'react';
import Home from '../components/Home';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer/Footer';

const Root = () => {
    return (
        <div>
         <nav>
         <Navbar></Navbar>
         </nav>
         <Outlet></Outlet>
         <footer>
            <Footer></Footer>
         </footer>
        </div>
    );
};

export default Root;