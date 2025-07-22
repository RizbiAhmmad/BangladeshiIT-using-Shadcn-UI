import { motion } from "framer-motion";
import { FaPhoneAlt, FaRocket, FaUsers, FaBullseye } from "react-icons/fa";
import { MeetTheTeam } from "./MeetTheTeam";
import { AuroraText } from "../../components/magicui/aurora-text";

export default function About() {
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
          <p className="mt-4 text-lg text-gray-600">
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
              To fuel Bangladesh's digital revolution by delivering cutting-edge
              IT solutions with passion, precision, and integrity.
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
              To become the most trusted name in Bangladesh’s tech landscape,
              enabling enterprises to thrive in the digital age.
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
              Why Us
            </h3>
            <p className="text-gray-600">
              We blend creativity with technology to deliver digital solutions
              that drive results and build lasting relationships.
            </p>
          </motion.div>
        </div>

        <MeetTheTeam></MeetTheTeam>

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
              <span className="text-green-500">Digital Corporating!</span>
            </h2>
            <p className="mb-10 leading-relaxed text-gray-600">
              We combine creativity and technology to help your business grow.
              Our expert team delivers custom digital solutions that match your
              vision and goals.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="px-6 py-3 font-semibold text-white transition duration-300 transform rounded-full bg-gradient-to-r from-green-500 to-red-500 hover:scale-105">
                MAKE APPOINTMENT
              </button>
              <div className="flex items-center gap-4">
                <div className="p-3 text-white bg-green-500 rounded-full">
                  <FaPhoneAlt size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    GET A FREE CONSULTATION
                  </p>
                  <p className="text-2xl font-bold text-green-600">
                    987 233 0000
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
              <h3 className="text-4xl font-bold text-cyan-600">1k+</h3>
              <p className="mt-1 text-gray-600">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-cyan-600">13+</h3>
              <p className="mt-1 text-gray-600">Award Winning</p>
            </div>
            <div className="pr-4 border-r border-gray-300">
              <h3 className="text-4xl font-bold text-cyan-600">98%</h3>
              <p className="mt-1 text-gray-600">Satisfaction Rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-cyan-600">250+</h3>
              <p className="mt-1 text-gray-600">Completed Projects</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
