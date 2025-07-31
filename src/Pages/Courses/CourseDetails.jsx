import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import Loading from "../../Shared/Loading";

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://bangladeshiit-server-api.onrender.com/free-courses/${id}`)
      .then((res) => setCourse(res.data))
      .catch((err) => console.error("Error fetching course details:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loading />;

  return (
    <section className="pt-32 pb-20 bg-white dark:bg-black">
      <div className="max-w-3xl px-4 mx-auto">
        {/* Header Text */}
        <div className="mb-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-extrabold text-green-700 md:text-4xl dark:text-green-300"
          >
            {course.name}
          </motion.h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            আপনার দক্ষতা বাড়াতে আমাদের তৈরি করা একটি বিশেষ কোর্স
          </p>
        </div>

        {/* Card */}
        <motion.div
          className="overflow-hidden transition bg-white border border-green-200 dark:bg-[#0e1a25] dark:border-green-800 rounded-2xl shadow-xl hover:shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Image */}
          <img
            src={course.image}
            alt={course.name}
            className="object-cover w-full p-2 h-70 rounded-xl"
          />

          {/* Content */}
          <div className="p-6 space-y-5">
        

            {/* Description */}
            <p className="leading-relaxed text-gray-700 text-md dark:text-gray-200">
              {course.description}
            </p>

            {/* Motivational quote */}
            <blockquote className="p-4 italic text-orange-700 border-l-4 border-orange-400 bg-orange-50 dark:bg-orange-950 dark:text-orange-300">
              "জ্ঞানই হচ্ছে ভবিষ্যতের পুঁজি। আপনি যত শিখবেন, তত এগিয়ে যাবেন!"
            </blockquote>

            {/* Price + Enroll */}
            <div className="flex flex-col justify-between gap-4 pt-4 border-t border-gray-200 sm:flex-row sm:items-center dark:border-gray-700">
              <h3 className="text-xl font-semibold text-green-700 dark:text-green-300">
                ৳ {course.price || 0}{" "}
                <del className="ml-2 text-sm font-normal text-red-500">
                  ৳ 10,000
                </del>
              </h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(`/enroll/${course._id}`)}
                className="px-6 py-2 text-lg font-medium text-white transition-all duration-300 rounded-full shadow bg-gradient-to-r from-green-600 to-emerald-600 hover:from-emerald-600 hover:to-green-700"
              >
                এখনই এনরোল করুন
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseDetails;
