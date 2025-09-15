import { motion } from "framer-motion";
import { FaPhoneAlt, FaRocket, FaUsers, FaBullseye } from "react-icons/fa";
import { MeetTheTeam } from "./MeetTheTeam";
import { AuroraText } from "../../components/magicui/aurora-text";
import { useNavigate } from "react-router-dom";
import OurClients from "../Home/OurClients";

export default function About() {
  const navigate = useNavigate();
  return (
    <section className="px-6 py-20 overflow-hidden text-black bg-white dark:bg-black">
      <div className="relative z-10 mx-auto space-y-20 max-w-7xl">
        <motion.div
          className="max-w-3xl mx-auto mb-16 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="mb-4 text-4xl font-extrabold text-black dark:text-white">
            About <AuroraText>Bangladeshi IT</AuroraText>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-white">
            Discover who we are, what drives us, and why businesses trust
            BangladeshiIT for their digital journey.
          </p>
        </motion.div>

        {/* Mission, Vision, Why Us */}
        <div className="grid gap-10 text-center md:grid-cols-3">
          <motion.div
            className="p-8 transition shadow-xl rounded-xl bg-gradient-to-b from-white to-gray-50 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaRocket className="mx-auto mb-4 text-5xl text-indigo-600" />
            <h3 className="mb-2 text-2xl font-semibold text-gray-900">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide innovative, reliable, and scalable digital solutions
              that help startups launch, grow, and thrive; while equipping
              Bangladeshi youth with the tools, skills, and opportunities they
              need to succeed in today’s digital economy.
            </p>
          </motion.div>

          <motion.div
            className="p-8 transition shadow-xl rounded-xl bg-gradient-to-b from-white to-gray-50 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaBullseye className="mx-auto mb-4 text-5xl text-pink-600" />
            <h3 className="mb-2 text-2xl font-semibold text-gray-900">
              Our Vision
            </h3>
            <p className="text-gray-600">
              We aim to spark growth for thousands of Bangladeshi and global
              startups. By revolutionizing e-commerce and driving a smarter
              economy, we’re committed to shaping a stronger future for
              Bangladesh.
            </p>
          </motion.div>

          <motion.div
            className="p-8 transition shadow-xl rounded-xl bg-gradient-to-b from-white to-gray-50 hover:shadow-2xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FaUsers className="mx-auto mb-4 text-5xl text-yellow-500" />
            <h3 className="mb-2 text-2xl font-semibold text-gray-900">
              Why Choose Us
            </h3>
            <p className="text-gray-600">
              We specialize in transforming online businesses to thrive in the
              digital age. Our focus is on increasing their customers, sales,
              and long-term success in today’s digital market.
            </p>
          </motion.div>
        </div>

        <MeetTheTeam></MeetTheTeam>
        <OurClients></OurClients>

        {/* Top CTA Section */}
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="mb-6 text-4xl font-bold leading-tight md:text-5xl">
              Need Best Help For <br />
              <span className="text-[#066938]">Digital Corporating!</span>
            </h2>
            <p className="mb-10 leading-relaxed text-gray-600 dark:text-white">
              We combine creativity and technology to help your business grow.
              Our expert team delivers custom digital solutions that match your
              vision and goals.
            </p>
            <div className="flex flex-wrap gap-6">
              <button
                onClick={() => navigate("/contact")}
                className="px-6 py-3 font-semibold text-white transition duration-300 transform rounded-full bg-gradient-to-t from-[#006752] to-[#15C300] hover:scale-105"
              >
                MAKE APPOINTMENT
              </button>
              <div className="flex items-center gap-4">
                <div className="p-3 text-white bg-[#066938] rounded-full">
                  <FaPhoneAlt size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-white">
                    GET A FREE CONSULTATION
                  </p>
                  <p className="text-2xl font-bold text-[#066938]">
                    +8801621741799
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            className="grid grid-cols-2 gap-6 text-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="pr-4 border-r border-gray-300">
              <h3 className="text-4xl font-bold text-[#066938]">100+</h3>
              <p className="mt-1 text-gray-600 dark:text-white">
                Happy Customers
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#066938]">8+</h3>
              <p className="mt-1 text-gray-600 dark:text-white">
                Award Winning
              </p>
            </div>
            <div className="pr-4 border-r border-gray-300">
              <h3 className="text-4xl font-bold text-[#066938]">99%</h3>
              <p className="mt-1 text-gray-600 dark:text-white">
                Satisfaction Rate
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#066938]">100+</h3>
              <p className="mt-1 text-gray-600 dark:text-white">
                Completed Projects
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
