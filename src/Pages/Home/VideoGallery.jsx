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
            <div
              key={index}
              className="overflow-hidden bg-white shadow-lg rounded-xl dark:bg-gray-900"
            >
              <video
                src={vid.src}
                controls
                preload="none"
                poster={vid.poster}
                className="w-full rounded-t-xl"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                  {vid.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
