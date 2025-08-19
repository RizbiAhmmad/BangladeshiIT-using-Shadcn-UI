import React from "react";
import { motion } from "framer-motion";
import {
  FaHospital,
  FaCapsules,
  FaUtensils,
  FaShoppingBag,
  FaStore,
  FaTshirt,
} from "react-icons/fa";
import Lottie from "lottie-react";
import pos from "../../../src/assets/pos.json";
import KeyFeatures from "./Software Development/KeyFeatures";

const services = [
    {
    title: "Fashion POS Software",
    icon: <FaTshirt className="text-4xl text-purple-500" />,
    link: "/fashion",
  },
  {
    title: "Pharmacy Management Software",
    icon: <FaCapsules className="text-4xl text-red-500" />,
    link: "#",
  },
  {
    title: "VAT Management Software",
    icon: <FaHospital className="text-4xl text-green-500" />,
    link: "#",
  },
  {
    title: "Restaurant Management Software",
    icon: <FaUtensils className="text-4xl text-yellow-500" />,
    link: "#",
  },
  {
    title: "E-commerce Development Application",
    icon: <FaShoppingBag className="text-4xl text-blue-500" />,
    link: "#",
  },
  {
    title: "Supershop Management Software",
    icon: <FaStore className="text-4xl text-pink-500" />,
    link: "#",
  },
  
];

const SoftwareDevelopment = () => {
  return (
    <div className="min-h-screen px-6 py-24 bg-gray-50">
      {/* Header */}
      <div className="w-full bg-[#fff] dark:bg-slate-900 rounded-md relative overflow-hidden py-16">
        <header className="flex flex-col items-center justify-between gap-12 px-8 lg:flex-row lg:gap-0">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full dark:text-[#abc2d3] lg:w-[45%]"
          >
            <motion.h2
              className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              We Providing Best POS Software & Solutions for All Types of
              Businesses
            </motion.h2>
            <motion.p
              className="max-w-3xl mx-auto mb-12 text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              BangladeshiIT offers powerful, industry-specific software designed
              to simplify business operations — whether you’re running a retail
              shop, apparel store, footwear, a chain restaurant, pharmacy,
              hospital management, accounting, or distribution software. Manage
              your entire business from anywhere with our cloud-based solutions.
            </motion.p>
          </motion.div>

          {/* Right Lottie animation */}
          <motion.div
            className="w-full lg:w-[45%]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          >
            <Lottie animationData={pos} loop={true} />
          </motion.div>
        </header>

        {/* Decorative blur */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ delay: 1, duration: 1.2 }}
          className="w-[120px] h-[120px] bg-[#DC0155] blur-[90px] absolute bottom-[80px] right-[80px]"
        ></motion.div>
      </div>

      {/* Services Section */}
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="m-4 text-3xl font-bold text-gray-900 md:text-4xl">
          Services We Providing
        </h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          className="grid max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.95 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileTap={{ scale: 0.98 }}
              className="relative p-8 text-center transition-all duration-300 border border-gray-200 shadow-lg rounded-2xl bg-gradient-to-br from-white/70 to-white/30 backdrop-blur-lg hover:shadow-2xl hover:border-blue-300 hover:bg-blue-400"
            >
              <div className="absolute inset-0 transition duration-500 opacity-0 rounded-2xl bg-gradient-to-tr from-blue-100 via-pink-100 to-transparent hover:opacity-60"></div>
              <div className="relative flex items-center justify-center w-16 h-16 mx-auto mb-6 text-blue-600 transition-transform duration-300 rounded-full shadow-md bg-blue-50 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="relative mb-3 text-xl font-bold text-gray-800">
                {service.title}
              </h3>
              <a
                href={service.link}
                className="relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-white transition-all rounded-full shadow bg-gradient-to-r from-[#066938] to-[#eb2127] hover:shadow-lg hover:scale-105"
              >
                Explore More →
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <KeyFeatures />
    </div>
  );
};

export default SoftwareDevelopment;
