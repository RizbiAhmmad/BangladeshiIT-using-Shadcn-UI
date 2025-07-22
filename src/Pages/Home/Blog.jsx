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
    <section className="px-6 py-12 bg-white dark:bg-black" id="blogs">
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="mb-4 text-4xl font-extrabold text-black dark:text-white">
          Our <AuroraText>Blogs</AuroraText>
        </h2>
        <p className="max-w-2xl mx-auto mb-12 text-gray-600">
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
              className="flex flex-col overflow-hidden transition bg-white border border-orange-500 shadow-md rounded-xl"
            >
              <img
                src={image}
                alt={title}
                className="object-cover w-full h-48"
              />
              <div className="flex flex-col flex-grow p-6">
                <h3 className="mb-2 text-lg font-semibold text-gray-800">
                  {title}
                </h3>
                <p className="mb-4 text-sm text-gray-600 line-clamp-2">
                  {description}
                </p>

                <div className="flex items-center justify-between pt-4 mt-auto border-t border-gray-100">
                  <span
                    onClick={() => navigate(`/blogDetails/${_id}`)}
                    className="flex items-center gap-1 text-sm font-semibold text-orange-500 cursor-pointer hover:underline"
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
            className="px-6 py-2 text-sm font-medium text-white transition bg-orange-500 rounded-full hover:bg-orange-600"
          >
            See All
          </motion.button>
        </div>
      </div>
    </section>
  );
}
