import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BiSolidLeaf } from "react-icons/bi";
import { FaFire } from "react-icons/fa";
import { motion } from "framer-motion";
import Loading from "../../Shared/Loading";
import { AuroraText } from "../../components/magicui/aurora-text";
import LandingPage from "./LandingPage";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const courseRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/free-courses")
      .then((res) => setCourses(res.data))
      .catch((err) => console.error("Error fetching courses:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="px-4 mx-auto max-w-7xl">
        {/* Hero Section */}
        <LandingPage
          scrollToCourses={() =>
            courseRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />

        {/* Title */}
        <h2 className="mt-4 mb-8 text-4xl font-extrabold text-center text-black dark:text-white">
          আমাদের <AuroraText>কোর্সসমূহ</AuroraText>
        </h2>

        {/* Course Cards */}
        <div ref={courseRef} className="mt-20">
          {courses.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-gray-300">
              No courses available.
            </p>
          ) : (
            // <div
            //   className={`grid gap-10 ${
            //     courses.length === 1
            //       ? "justify-center grid-cols-1"
            //       : courses.length === 2
            //       ? "grid-cols-1 sm:grid-cols-2 justify-center"
            //       : "sm:grid-cols-2 lg:grid-cols-3"
            //   }`}
            // >
            <div className="grid grid-cols-1 gap-10 mt-4 sm:grid-cols-2 lg:grid-cols-3">
              {courses.map((course, i) => (
                <motion.div
                  key={course._id}
                  className="w-full overflow-hidden transition bg-white dark:bg-[#0e1a25] rounded-2xl border border-green-200 dark:border-green-900 shadow-lg hover:shadow-2xl hover:scale-[1.02] duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {/* Image */}
                  <img
                    src={course.image}
                    alt={course.name}
                    className="object-cover w-full h-56 p-2 rounded-t-2xl"
                  />

                  {/* Header */}
                  <div className="flex items-center justify-between px-4 pt-4">
                    <h2 className="text-lg font-bold text-green-700 dark:text-green-300">
                      {course.name}
                    </h2>
                    <div className="flex gap-2">
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: 10 }}
                        className="p-[6px] bg-green-100 text-green-800 rounded-full"
                      >
                        <BiSolidLeaf />
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.3, rotate: -10 }}
                        className="p-[6px] bg-red-100 text-red-700 rounded-full"
                      >
                        <FaFire />
                      </motion.div>
                    </div>
                  </div>

                  {/* Description + Button */}
                  <div className="px-4 py-4 space-y-3">
                    <p className="text-gray-700 dark:text-[#abc2d3]/80 text-sm leading-relaxed">
                      {course.description.length > 120
                        ? course.description.slice(0, 120) + "..."
                        : course.description}
                    </p>

                    <div className="mt-4 text-center">
                      <button
                        onClick={() => navigate(`/courses/${course._id}`)}
                        className="px-5 py-2 text-sm font-medium text-white transition duration-300 rounded-full shadow-md bg-gradient-to-r from-green-600 to-emerald-600 hover:from-emerald-600 hover:to-green-700"
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Courses;
