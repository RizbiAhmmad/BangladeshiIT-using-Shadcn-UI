import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHospital,
  FaCapsules,
  FaUtensils,
  FaShoppingBag,
  FaStore,
  FaTshirt,
} from "react-icons/fa";
import KeyFeatures from "./E_Commerce_KeyFeatures";
import ContactWithForm from "./ContactWithPhone";
import banner from "../../../../src/assets/ecommerce-banner.jpg";
import EcommerceFeature from "./EcommerceFeature";

// Services data
const services = [
  {
    title: "Organic Product Website",
    icon: <FaShoppingBag className="text-4xl text-blue-500" />,
    reactLink: "/react/organic-product",
    laravelLink: "/laravel/e-commerce-details",
  },
  {
    title: "Fashion Website",
    icon: <FaTshirt className="text-4xl text-purple-500" />,
    reactLink: "/react/fashion",
    laravelLink: "/laravel/fashion",
  },
  {
    title: "Supershop Management Website",
    icon: <FaStore className="text-4xl text-pink-500" />,
    reactLink: "/react/supershop",
    laravelLink: "/laravel/supershop",
  },
  {
    title: "Pharmacy Website",
    icon: <FaCapsules className="text-4xl text-red-500" />,
    reactLink: "/react/pharmacy",
    laravelLink: "/laravel/pharmacy",
  },
  {
    title: "VAT Management Website",
    icon: <FaHospital className="text-4xl text-green-500" />,
    reactLink: "/react/vat-management",
    laravelLink: "/laravel/vat-management",
  },
  {
    title: "Restaurant Management Website",
    icon: <FaUtensils className="text-4xl text-yellow-500" />,
    reactLink: "/react/restaurant",
    laravelLink: "/laravel/restaurant",
  },
];

const E_commerce_Page = () => {
  const [activeTab, setActiveTab] = useState("react"); // default React

  return (
    <div className="min-h-screen px-6 pt-6 pb-12 bg-white dark:bg-black">
      {/*  Banner Section */}
      <section className=" w-full h-auto rounded-xl overflow-hidden mb-12">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src= {banner}
          alt="E-commerce Banner"
          className="object-cover w-full h-full"
        />
      </section>

      {/* Services Section */}
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="m-4 text-3xl font-bold text-black dark:text-white md:text-4xl">
          Services We Provide
        </h2>

        {/* Tabs */}
        <div className="flex justify-center mb-8 border-b border-gray-300 dark:border-gray-600">
          <button
            onClick={() => setActiveTab("react")}
            className={`px-6 py-3 font-semibold relative ${
              activeTab === "react"
                ? "text-[#eb2127] border-b-4 border-[#eb2127]"
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            React Websites
          </button>
          <button
            onClick={() => setActiveTab("laravel")}
            className={`px-6 py-3 font-semibold relative ${
              activeTab === "laravel"
                ? "text-[#066938] border-b-4 border-[#066938]"
                : "text-gray-600 dark:text-gray-400"
            }`}
          >
            Laravel Websites
          </button>
        </div>

        {/* Service Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid max-w-6xl grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, idx) => {
            const link =
              activeTab === "react" ? service.reactLink : service.laravelLink;
            const builtWith = activeTab === "react" ? "React" : "Laravel";

            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 30, scale: 0.98 },
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

                <p className="mb-3 text-sm text-gray-500 dark:text-gray-100">
                  Built with <span className="font-semibold">{builtWith}</span>
                </p>

                <Link
                  to={link}
                  className="relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-white transition-all rounded-full shadow bg-gradient-to-t from-[#006752] to-[#15C300] hover:shadow-lg hover:scale-105"
                >
                  Explore More →
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <KeyFeatures />
      <EcommerceFeature></EcommerceFeature>
      <ContactWithForm></ContactWithForm>
    </div>
  );
};

export default E_commerce_Page;
