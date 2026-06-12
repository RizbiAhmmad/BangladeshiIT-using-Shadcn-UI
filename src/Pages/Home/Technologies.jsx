import React from "react";
import { FaPhp, FaLaravel, FaReact, FaWordpress } from "react-icons/fa";
import { SiMysql, SiNextdotjs } from "react-icons/si";
import { AuroraText } from "../../components/magicui/aurora-text";
import { motion } from "framer-motion";

const techStack = [
  { icon: <FaLaravel size={40} className="text-[#ff2d20]" />, name: "Laravel" },
  { icon: <FaPhp size={40} className="text-[#777bb4]" />, name: "PHP" },
  { icon: <SiMysql size={40} className="text-[#4479a1]" />, name: "MySQL" },
  { icon: <FaReact size={40} className="text-[#61dafb]" />, name: "React" },
  { icon: <SiNextdotjs size={40} className="text-black dark:text-white" />, name: "Next.js" },
  { icon: <FaWordpress size={40} className="text-[#21759b]" />, name: "WordPress" },
];

const Technologies = () => {
  return (
    <section className="px-6 mx-auto py-16 text-center text-black bg-white md:px-24 dark:bg-black dark:text-white overflow-hidden">
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <motion.h2 
          className="mb-4 text-4xl font-extrabold text-black dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          We Use <AuroraText>Technologies</AuroraText>
        </motion.h2>
        <motion.p 
          className="max-w-xl mx-auto mt-4 text-gray-600 dark:text-gray-300"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          We provide different services to kick-start your business and help to
          transform your idea into the real world.
        </motion.p>
      </div>

      <div className="relative flex overflow-hidden w-full group py-6">
        {/* Gradients for fading effect on the edges */}
        <div className="absolute top-0 bottom-0 left-0 w-24 z-10 bg-gradient-to-r from-white dark:from-black to-transparent pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 z-10 bg-gradient-to-l from-white dark:from-black to-transparent pointer-events-none"></div>
        
        <motion.div
          className="flex space-x-6 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        >
          {/* Double the techStack array for seamless looping */}
          {[...techStack, ...techStack, ...techStack].map((tech, index) => (
            <div
              key={index}
              className="flex flex-col border border-gray-200/50 items-center justify-center w-36 h-36 flex-shrink-0 transition-all duration-300 bg-white/50 backdrop-blur-sm rounded-3xl shadow-sm hover:shadow-2xl hover:scale-110 hover:-translate-y-2 hover:border-[#006752]/40 dark:bg-zinc-900/50 dark:border-zinc-800 dark:hover:border-green-500/40"
            >
              {tech.icon}
              <span className="mt-4 text-sm font-semibold text-gray-700 dark:text-gray-300">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
