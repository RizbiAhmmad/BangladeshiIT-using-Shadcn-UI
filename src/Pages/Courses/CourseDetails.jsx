import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { BiSolidLeaf } from "react-icons/bi";
import { FaFire } from "react-icons/fa";
import { motion } from "framer-motion";
import Loading from "../../Shared/Loading"; // ✅ Make sure this path is correct

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ Loading state

  useEffect(() => {
    axios
      .get(`http://localhost:5000/free-courses/${id}`)
      .then((res) => setCourse(res.data))
      .catch((err) => console.error("Error fetching course details:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading />;

  return (
    <section className="pt-32 pb-20 bg-white dark:bg-black">
      <div className="max-w-3xl px-4 mx-auto">
        <motion.div
          className="transition bg-gray-100 border border-red-500 rounded-md shadow-lg hover:shadow-red-200 dark:bg-black hover:shadow-2xl boxShadow"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Image */}
          <img
            src={course.image}
            alt={course.name}
            className="object-cover w-full h-64 p-2 rounded-xl"
          />

          {/* Header */}
          <div className="flex items-center justify-between w-full p-4">
            <h2 className="text-2xl font-semibold dark:text-[#abc2d3] text-green-700">
              {course.name}
            </h2>
            <div className="flex items-center gap-2">
              <BiSolidLeaf className="text-xl p-[3px] rounded-full bg-green-200 text-green-800" />
              <FaFire className="text-xl p-[3px] rounded-full bg-red-200 text-red-700" />
            </div>
          </div>

          {/* Body */}
          <div className="p-4 space-y-4">
            <p className="text-gray-700 dark:text-[#abc2d3]/80 text-sm">
              {course.description}
            </p>

            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <h3 className="text-lg font-semibold dark:text-[#abc2d3] text-green-700">
                ৳ {course.price || 0}
                <del className="ml-2 text-sm font-light text-red-500">
                  ৳ 10,000
                </del>
              </h3>

              <button
                onClick={() => navigate(`/enroll/${course._id}`)}
                className="px-4 py-2 border dark:border-slate-600 dark:text-[#abc2d3] border-green-600 text-green-700 rounded-md hover:bg-green-500 hover:text-white transition"
              >
                Enroll Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseDetails;
