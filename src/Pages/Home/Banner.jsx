import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();
  return (
    <section className="relative py-20 overflow-hidden bg-white dark:bg-black">
      <div className="relative z-10 flex flex-col items-center gap-10 px-4 mx-auto max-w-7xl md:flex-row">
        {/* Left: Text Content */}
        <motion.div
          className="w-full space-y-6 text-center md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl font-bold leading-tight text-black dark:text-white md:text-4xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Welcome to <span className="text-[#066938]">Bangla</span>
            <span className="text-[#eb2127]">deshi</span>
            <span className="text-[#066938]"> IT</span>
          </motion.h1>

          <motion.p
            className="text-2xl text-[#066938]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            স্বপ্নের পথে, <span className="text-[#eb2127]">প্রযুক্তির সঙ্গী</span>
          </motion.p>

          <motion.button
            onClick={() => navigate("/contact")} 
            className="inline-block px-6 py-3 font-semibold text-white transition bg-[#066938] rounded-full shadow-lg hover:bg-[#eb2127] hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right: Video Frame */}
        <motion.div
          className="w-full mt-10 md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div
            className="relative w-full overflow-hidden border-4 border-[#066938] shadow-2xl rounded-2xl aspect-video"
            whileHover={{ scale: 1.02 }}
            animate={{
              y: [0, -5, 0],
              transition: {
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              },
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/D3ZAwxjlsI0?si=869d7yBs5QMI_w66"
              title="Bangladeshi IT Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full rounded-2xl"
            />
            <div className="absolute inset-0 pointer-events-none ring-4 ring-[#066938] rounded-2xl animate-pulse"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Optional glow background blur */}
      {/* <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-green-100 rounded-full blur-[120px] opacity-40 z-0"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-red-100 rounded-full blur-[120px] opacity-30 z-0"></div> */}
    </section>
  );
}
