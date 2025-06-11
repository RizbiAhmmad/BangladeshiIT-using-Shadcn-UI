import React from "react";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <section className="relative bg-white py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 relative z-10">
        {/* Left: Text Content */}
        <motion.div
          className="w-full md:w-1/2 text-center space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-3xl md:text-4xl font-bold text-black leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Welcome to <span className="text-green-600">Bangla</span>
            <span className="text-red-600">deshi</span>
            <span className="text-green-600"> IT</span>
          </motion.h1>

          <motion.p
            className="text-green-600 text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            স্বপ্নের পথে, <span className="text-red-600">প্রযুক্তির সঙ্গী</span>
          </motion.p>

          <motion.a
            href="/contact"
            className="inline-block bg-green-600 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Get Started
          </motion.a>
        </motion.div>

        {/* Right: Video Frame */}
        <motion.div
          className="w-full md:w-1/2 mt-10"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div
            className="relative rounded-2xl overflow-hidden border-4 border-green-600 shadow-2xl aspect-video w-full"
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
            <div className="absolute inset-0 ring-4 ring-green-500/20 rounded-2xl pointer-events-none animate-pulse"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Optional glow background blur */}
      <div className="absolute -top-20 -left-20 w-[300px] h-[300px] bg-green-100 rounded-full blur-[120px] opacity-40 z-0"></div>
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-red-100 rounded-full blur-[120px] opacity-30 z-0"></div>
    </section>
  );
}
