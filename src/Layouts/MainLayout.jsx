import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
// import FloatingChatMenu from '../Shared/FloatingChatMenu';

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noHeaderFooter || <Footer></Footer>}
      {/* <FloatingChatMenu></FloatingChatMenu> */}
    </div>
  );
};

export default MainLayout;
