import React, { useContext, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
import FloatingChatMenu from "../Shared/FloatingChatMenu";
import ScrollToTop from "../Shared/ScrollToTop";
import SmokeyCursor from "../components/lightswind/smokey-cursor";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");

  // Optional toggle (true means active)
  const [showCursor] = useState(true); // Set to false if you want to disable by default

  return (
    <div className="relative min-h-screen">
      <ScrollToTop />

      {/* ✅ Smokey Cursor - Always behind all content */}
      {showCursor && (
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
      )}

      {!noHeaderFooter && <Navbar />}
      <Outlet />
      {!noHeaderFooter && <Footer />}
      <FloatingChatMenu />
    </div>
  );
};

export default MainLayout;
