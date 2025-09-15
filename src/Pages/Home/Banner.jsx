import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

export default function Banner() {
  const navigate = useNavigate();

  useEffect(() => {
    const end = Date.now() + 2 * 1000;
    const colors = ["#066938", "#eb2127", "#ffacaf", "#7adeff"];

    const frame = () => {
      if (Date.now() > end) return;

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors,
      });

      requestAnimationFrame(frame);
    };

    frame();
  }, []);

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
            স্বপ্নের পথে,{" "}
            <span className="text-[#eb2127]">প্রযুক্তির সঙ্গী</span>
          </motion.p>

          <motion.button
            onClick={() => navigate("/contact")}
            className="relative px-5 py-2.5 mt-2 text-lg font-semibold text-white 
                     rounded-full overflow-hidden group
                     bg-gradient-to-t from-[#006752] to-[#15C300] 
                     shadow-md transition-all duration-300"
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Started
            </span>

            {/* Hover shine effect */}
            <span className="absolute inset-0 transition-transform duration-500 -translate-x-full bg-white opacity-20 group-hover:translate-x-0"></span>
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

            {/* <video
      src="/videos/bangladeshi-it.mp4"
      controls
      className="w-full h-full rounded-2xl"
    /> */}

            <div className="absolute inset-0 pointer-events-none ring-4 ring-[#066938] rounded-2xl animate-pulse"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
