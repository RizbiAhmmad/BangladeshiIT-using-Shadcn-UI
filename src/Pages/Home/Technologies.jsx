import React from "react";
import { FaPhp, FaLaravel, FaReact } from "react-icons/fa";
import { SiMysql, SiJavascript, SiVuedotjs } from "react-icons/si";
import { AuroraText } from "../../components/magicui/aurora-text";

const techStack = [
  { icon: <FaReact size={40} className="text-cyan-500" />, name: "React" },
  { icon: <FaPhp size={40} className="text-blue-600" />, name: "PHP" },
  { icon: <FaLaravel size={40} className="text-red-500" />, name: "Laravel" },
  { icon: <SiMysql size={40} className="text-blue-700" />, name: "MySQL" },
  {
    icon: <SiJavascript size={40} className="text-yellow-400" />,
    name: "JavaScript",
  },
  { icon: <SiVuedotjs size={40} className="text-green-500" />, name: "Vue.js" },
];

const Technologies = () => {
  return (
    <section className="px-16 py-16 text-center text-black bg-white md:px-24 dark:bg-black dark:text-white">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-4xl font-extrabold text-black bg-white dark:bg-black dark:text-white">
          We Use <AuroraText>Technologies</AuroraText>
        </h2>
        <p className="max-w-xl mx-auto mt-4 text-gray-600 dark:text-white">
          We provide different services to kick-start your business and help to
          transform your idea into the real world.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6 place-items-center">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-24 h-24 transition-transform duration-300 bg-white rounded-full shadow-md hover:scale-110"
          >
            {tech.icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
