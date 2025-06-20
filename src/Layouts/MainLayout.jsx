import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Shared/Footer';
// import FloatingChatMenu from '../Shared/FloatingChatMenu';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
           <Footer></Footer>
           {/* <FloatingChatMenu></FloatingChatMenu> */}
        </div>
    );
};

export default MainLayout;