import { motion } from "framer-motion";
import { FaPhoneAlt, FaRocket, FaUsers, FaBullseye } from "react-icons/fa";
import { MeetTheTeam } from "./MeetTheTeam";
import { AuroraText } from "../../components/magicui/aurora-text";

export default function About() {
  return (
    <section className="bg-white text-black py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
         <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          About <AuroraText>Bangladeshi IT</AuroraText>
        </h2>
          <p className="mt-4 text-lg text-gray-600">
            Discover who we are, what drives us, and why businesses trust
            BangladeshiIT for their digital journey.
          </p>
        </motion.div>

        {/* Mission, Vision, Why Us */}
        <div className="grid md:grid-cols-3 gap-10 text-center">
          <motion.div
            className="p-8 rounded-xl bg-gradient-to-b from-white to-gray-50 shadow-xl hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaRocket className="text-5xl text-indigo-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To fuel Bangladesh's digital revolution by delivering cutting-edge
              IT solutions with passion, precision, and integrity.
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-xl bg-gradient-to-b from-white to-gray-50 shadow-xl hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaBullseye className="text-5xl text-pink-600 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To become the most trusted name in Bangladesh’s tech landscape,
              enabling enterprises to thrive in the digital age.
            </p>
          </motion.div>

          <motion.div
            className="p-8 rounded-xl bg-gradient-to-b from-white to-gray-50 shadow-xl hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <FaUsers className="text-5xl text-yellow-500 mb-4 mx-auto" />
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">
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
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Need Best Help For <br />
              <span className="text-cyan-500">Digital Corporating!</span>
            </h2>
            <p className="text-gray-600 mb-10 leading-relaxed">
              We combine creativity and technology to help your business grow.
              Our expert team delivers custom digital solutions that match your
              vision and goals.
            </p>
            <div className="flex flex-wrap gap-6">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-indigo-500 text-white font-semibold rounded-full hover:scale-105 transition transform duration-300">
                MAKE APPOINTMENT
              </button>
              <div className="flex items-center gap-4">
                <div className="bg-cyan-500 text-white p-3 rounded-full">
                  <FaPhoneAlt size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    GET A FREE CONSULTATION
                  </p>
                  <p className="text-2xl font-bold text-indigo-600">
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
            <div className="border-r border-gray-300 pr-4">
              <h3 className="text-4xl font-bold text-cyan-600">4k+</h3>
              <p className="text-gray-600 mt-1">Happy Customers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-cyan-600">13+</h3>
              <p className="text-gray-600 mt-1">Award Winning</p>
            </div>
            <div className="border-r border-gray-300 pr-4">
              <h3 className="text-4xl font-bold text-cyan-600">98%</h3>
              <p className="text-gray-600 mt-1">Satisfaction Rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-cyan-600">250+</h3>
              <p className="text-gray-600 mt-1">Completed Projects</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
