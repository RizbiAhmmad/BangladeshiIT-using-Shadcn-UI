import React, { useContext, useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import FloatingChatMenu from "../Shared/FloatingChatMenu";
import ScrollToTop from "../Shared/ScrollToTop";
import Loading from "../Shared/Loading";
// import NeonCursor from "../components/Neoncursor/NeonCursor";
// import SmokeyCursor from "../components/lightswind/smokey-cursor";

const MainLayout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  // Optional toggle (true means active)
  // const [showCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <ScrollToTop />
      {/* <NeonCursor /> */}

      {/* ✅ Smokey Cursor - Always behind all content */}
      {/* {showCursor && (
        <SmokeyCursor
          SIM_RESOLUTION={128}
          DYE_RESOLUTION={1024}
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          PRESSURE_ITERATIONS={20}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          SHADING={true}
          COLOR_UPDATE_SPEED={10}
          BACK_COLOR={{ r: 0.5, g: 0, b: 0 }}
          TRANSPARENT={true}
        />
      )} */}

      {!noHeaderFooter && <Navbar />}
      <Outlet />
      {!noHeaderFooter && <Footer />}
      <FloatingChatMenu />
    </div>
  );
};

export default MainLayout;
