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
    <section className="py-16 px-16 md:px-24 bg-white text-center">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          We Use <AuroraText>Technologies</AuroraText>
        </h2>
        <p className="text-gray-600 mt-4 max-w-xl mx-auto">
          We provide different services to kick-start your business and help to
          transform your idea into the real world.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 place-items-center">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition-transform duration-300"
          >
            {tech.icon}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
