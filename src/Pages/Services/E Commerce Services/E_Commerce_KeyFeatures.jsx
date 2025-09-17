import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  BarChart,
  Bell,
  FileText,
  Smile,
  Cog,
  Zap,
} from "lucide-react";

const features = [
  { title: "1. Multi-Business & Multi-Location", icon: <Layers size={26} /> },
  { title: "2. Advanced Product Management", icon: <BarChart size={26} /> },
  { title: "3. Smart Alerts", icon: <Bell size={26} /> },
  { title: "4. Tax Ready", icon: <FileText size={26} /> },
  { title: "5. Customizable Documents", icon: <FileText size={26} /> },
  { title: "6. Insightful Reports", icon: <BarChart size={26} /> },
  { title: "7. User-Friendly Interface", icon: <Smile size={26} /> },
  { title: "8. Flexible Customization", icon: <Cog size={26} /> },
  { title: "9. Quick Setup", icon: <Zap size={26} /> },
];

const E_Commerce_KeyFeatures = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const radius = isMobile ? 160 : 250;
  const center = isMobile ? 150 : 250;
  const angleIncrement = (2 * Math.PI) / features.length;

  return (
    <section className="relative py-24 mt-4 bg-white dark:bg-black">
      <div
        className={`relative mx-auto ${
          isMobile ? "w-[300px] h-[300px]" : "w-[500px] h-[500px]"
        }`}
      >
        {features.map((feature, i) => {
          const angle = i * angleIncrement;
          const x = center + radius * Math.cos(angle) - (isMobile ? 40 : 50);
          const y = center + radius * Math.sin(angle) - (isMobile ? 40 : 50);

          return (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 100 }}
              className={`absolute hover:bg-blue-200 border border-[#066938] flex flex-col items-center justify-center bg-white rounded-full shadow-lg p-4 ${
                isMobile ? "w-26 h-26" : "w-34 h-34"
              }`}
              style={{ top: y, left: x }}
            >
              <div
                className={`flex items-center justify-center mb-2 text-white rounded-full bg-[#066938] ${
                  isMobile ? "w-10 h-10" : "w-12 h-12"
                }`}
              >
                {feature.icon}
              </div>
              <p
                className={`text-center font-medium ${
                  isMobile ? "text-xs" : "text-sm"
                }`}
              >
                {feature.title}
              </p>
            </motion.div>
          );
        })}

        {/* Central Circle with Text */}
        <div
          className={`absolute flex items-center dark:bg-white justify-center text-white rounded-full mt-2 ml-2 border-2 border-[#eb2127] hover:bg-blue-200 bg-white-500 shadow-2xl -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ${
            isMobile ? "w-28 h-28" : "w-40 h-40"
          }`}
        >
          <h2
            className={`text-center font-bold text-black ${
              isMobile ? "text-sm" : "text-2xl"
            }`}
          >
            Key <br /> Features
          </h2>
        </div>
      </div>
    </section>
  );
};

export default E_Commerce_KeyFeatures;