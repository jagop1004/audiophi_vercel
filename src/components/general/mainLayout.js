import React from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavBar from './navBar';
import Footer from './footer';

const MainLayout = ({ children }) => {

    return (
        <>
            <NavBar/>
            <ScrollRestoration />
            <div>{children}</div>
            <Outlet />
            <Footer/>
        </>
    );

};

export default MainLayout;