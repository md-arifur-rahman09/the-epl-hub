import React from 'react';
import Home from '../components/Home';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Navbar/Footer/Footer';

const Root = () => {
    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location)
    return (
        <div>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main>
                {isNavigating && <span className="loading loading-bars loading-xl"></span>}
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;