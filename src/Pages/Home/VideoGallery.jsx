import React from "react";
import { motion } from "framer-motion";

import video1 from "../../../src/assets/Video1.mp4";
import video2 from "../../../src/assets/Video2.mp4";
import video3 from "../../../src/assets/Video3.mp4";

import thumb1 from "../../../src/assets/Thumbnail1.jpg";
import thumb2 from "../../../src/assets/Thumbnail2.jpg";
import thumb3 from "../../../src/assets/Thumbnail3.jpg";
import { AuroraText } from "../../components/magicui/aurora-text";

const VideoGallery = () => {
  const videos = [
    { src: video1, poster: thumb1, title: "Discover Us" },
    { src: video2, poster: thumb2, title: "Our New Office Setup" },
    { src: video3, poster: thumb3, title: "Shaping the Future" },
  ];

  return (
    <section className="py-12 bg-white dark:bg-black">
      <div className="max-w-6xl px-6 mx-auto text-center">
        <motion.div
          className="max-w-3xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-4xl font-extrabold text-black dark:text-white">
            Innovation in <AuroraText>Action</AuroraText>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-white">
            Bangladeshi IT is your partner for digital success. We design and develop custom Ecommerce solutions, build professional websites, and deliver data-driven digital marketing services to help your business achieve its goals.
          </p>
        </motion.div>

        {/* Responsive Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((vid, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden bg-white/80 backdrop-blur-md shadow-sm border border-gray-200/50 rounded-3xl dark:bg-zinc-900/80 dark:border-zinc-800 transition-all duration-300 hover:shadow-2xl hover:shadow-[#eb2127]/20"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8 }}
            >
              {/* Premium Glow effect behind video */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none rounded-t-3xl"></div>
              
              <div className="relative overflow-hidden rounded-t-3xl border-b border-gray-100 dark:border-zinc-800">
                <video
                  src={vid.src}
                  controls
                  preload="none"
                  poster={vid.poster}
                  className="w-full transition-transform duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <div className="p-6 relative z-20 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 group-hover:from-[#eb2127] group-hover:to-[#ff512f] transition-all duration-300">
                  {vid.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
