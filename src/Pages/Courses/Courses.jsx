import React, { useEffect, useState } from "react";
import axios from "axios";
import { BiSolidLeaf } from "react-icons/bi";
import { FaFire } from "react-icons/fa";
import { motion } from "framer-motion";
import Loading from "../../Shared/Loading";
import { AuroraText } from "../../components/magicui/aurora-text";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true); 
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
        <h2 className="mb-6 text-4xl font-extrabold text-center text-black dark:text-white">
          Our <AuroraText>Courses</AuroraText>
        </h2>

        {courses.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-300">
            No courses available.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course, i) => (
              <motion.div
                key={course._id}
                className="w-full transition bg-gray-100 border border-red-500 rounded-md shadow-lg hover:shadow-red-200 dark:bg-black hover:shadow-2xl boxShadow"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Image */}
                <img
                  src={course.image}
                  alt={course.name}
                  className="object-cover w-full h-56 p-2 rounded-xl"
                />

                {/* Header */}
                <div className="flex items-center justify-between w-full p-2">
                  <h2 className="text-xl font-semibold dark:text-[#abc2d3] text-green-700">
                    {course.name}
                  </h2>
                  <div className="flex items-center gap-2">
                    <BiSolidLeaf className="text-xl p-[3px] rounded-full bg-green-200 text-green-800" />
                    <FaFire className="text-xl p-[3px] rounded-full bg-red-200 text-red-700" />
                  </div>
                </div>

                {/* Body */}
                <div className="p-2 space-y-3">
                  <p className="text-gray-700 dark:text-[#abc2d3]/80 text-sm">
                    {course.description.length > 120
                      ? course.description.slice(0, 120) + "..."
                      : course.description}
                  </p>

                  {/* <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                    <h3 className="text-lg font-semibold dark:text-[#abc2d3] text-green-700">
                      ৳ {course.price || 0}
                      <del className="ml-2 text-sm font-light text-red-500">
                        ৳ 10,000
                      </del>
                    </h3>

                    <button
                      onClick={() => navigate(`/courses/${course._id}`)}
                      className="px-4 py-2 border dark:border-slate-600 dark:text-[#abc2d3] border-green-600 text-green-700 rounded-md hover:bg-green-500 hover:text-white transition"
                    >
                      View Details
                    </button>
                  </div> */}
                  <div className="p-2 text-center">
                  <button
                      onClick={() => navigate(`/courses/${course._id}`)}
                      className="px-4 py-2 border dark:border-slate-600 dark:text-[#abc2d3] border-green-600 text-green-700 rounded-md hover:bg-green-500 hover:text-white transition"
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
    </section>
  );
};

export default Courses;
