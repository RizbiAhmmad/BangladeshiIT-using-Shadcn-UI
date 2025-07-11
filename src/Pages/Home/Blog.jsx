import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { AuroraText } from "../../components/magicui/aurora-text";
import axios from "axios";

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://bangladeshi-it-server.vercel.app/blogs")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.error("Error fetching blogs:", err));
  }, []);

  const topBlogs = blogs.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-white py-12 px-6" id="blogs">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Our <AuroraText>Blogs</AuroraText>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Our engaging articles provide valuable knowledge for professionals and
          enthusiasts alike. Stay informed, stay inspired.
        </p>

        <motion.div
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {topBlogs.map(({ _id, title, description, image, tag }, index) => (
            <motion.div
              key={_id}
              variants={cardVariants}
              whileHover={{ scale: 1.03, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
              className="bg-white shadow-md rounded-xl overflow-hidden border border-orange-500 transition flex flex-col"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {description}
                </p>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                  <span
                    onClick={() => navigate(`/blogDetails/${_id}`)}
                    className="text-orange-500 text-sm font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                  >
                    Learn more <ArrowRight size={14} />
                  </span>
                  <span className="text-xs text-gray-500 text-right max-w-[280px] truncate">
                    {tag}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10">
          <motion.button
            onClick={() => navigate("/blogs")}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-orange-500 hover:bg-orange-600 text-white text-sm px-6 py-2 rounded-full font-medium transition"
          >
            See All
          </motion.button>
        </div>
      </div>
    </section>
  );
}
