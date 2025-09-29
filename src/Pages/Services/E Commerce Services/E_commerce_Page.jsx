import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  FaShoppingBasket,
  FaTshirt,
  FaLaptop,
  FaSpa,
  FaCouch,
  FaDumbbell
} from "react-icons/fa";
import KeyFeatures from "./E_Commerce_KeyFeatures";
import ContactWithForm from "./ContactWithPhone";
import banner from "../../../../src/assets/ecommerce-banner.jpg";
import EcommerceFeature from "./EcommerceFeature";
import { FaReact } from "react-icons/fa";
import { SiLaravel } from "react-icons/si";
// Services data
const services = [
  {
    title: "Organic Product Website",
    icon: <FaShoppingBasket className="text-4xl text-green-500" />, // Basket for organic products
    reactLink: "/react/organic-product",
    laravelLink: "#",
  },
  {
    title: "Fashion Website",
    icon: <FaTshirt className="text-4xl text-purple-500" />, // Tshirt for fashion
    reactLink: "#",
    laravelLink: "#",
  },
  {
    title: "Electronics/Gadget Website",
    icon: <FaLaptop className="text-4xl text-blue-500" />, // Laptop for electronics
    reactLink: "#",
    laravelLink: "#",
  },
  {
    title: "Skin Care/Beauty/Jewelary Website",
    icon: <FaSpa className="text-4xl text-pink-500" />, // Spa/beauty related
    reactLink: "#",
    laravelLink: "#",
  },
  {
    title: "Furniture Website",
    icon: <FaCouch className="text-4xl text-orange-500" />, // Couch for furniture
    reactLink: "#",
    laravelLink: "#",
  },
  {
    title: "Sports and Fitness Website",
    icon: <FaDumbbell className="text-4xl text-yellow-500" />, // Dumbbell for sports/fitness
    reactLink: "#",
    laravelLink: "#",
  },
];

const E_commerce_Page = () => {
  const [activeTab, setActiveTab] = useState("react"); // default React

  return (
    <div className="min-h-screen px-6 pt-6 pb-12 bg-white dark:bg-black">
      {/*  Banner Section */}
      <section className="w-full h-auto mb-12 overflow-hidden rounded-xl">
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
    
<div role="tablist" aria-label="Framework tabs" className="flex justify-center gap-4 mb-8">
  <button
    role="tab"
    aria-selected={activeTab === "react"}
    onClick={() => setActiveTab("react")}
    className={`group relative flex items-center gap-3 px-5 py-2 rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#61dafb]/30 ${
      activeTab === "react"
        ? "bg-gradient-to-r from-[#e6f9ff] to-[#cdeeff] text-[#0366aa] shadow-[0_8px_30px_rgba(6,102,170,0.12)] scale-105"
        : "bg-white/5 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:scale-[1.03] hover:shadow-md"
    }`}
  >
    {/* Icon circle */}
    <span
      className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
        activeTab === "react"
          ? "bg-white text-[#61dafb] scale-110"
          : "bg-white/5 text-[#61dafb]/80 group-hover:bg-white/10"
      }`}
      aria-hidden
    >
      <FaReact className="w-5 h-5" />
    </span>

    {/* Label */}
    <span className="whitespace-nowrap">React Websites</span>

    {/* active pill underline */}
    {activeTab === "react" && (
      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 rounded-full bg-gradient-to-r from-[#61dafb] to-[#1b6fb0] shadow-sm" />
    )}
  </button>

  <button
    role="tab"
    aria-selected={activeTab === "laravel"}
    onClick={() => setActiveTab("laravel")}
    className={`group relative flex items-center gap-3 px-5 py-2 rounded-2xl font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f05340]/25 ${
      activeTab === "laravel"
        ? "bg-gradient-to-r from-[#ffecec] to-[#ffd6d0] text-[#a42f20] shadow-[0_8px_30px_rgba(164,47,32,0.10)] scale-105"
        : "bg-white/5 dark:bg-gray-800/50 text-gray-600 dark:text-gray-300 hover:scale-[1.03] hover:shadow-md"
    }`}
  >
    <span
      className={`flex items-center justify-center w-9 h-9 rounded-full transition-all duration-300 ${
        activeTab === "laravel"
          ? "bg-white text-[#f05340] scale-110"
          : "bg-white/5 text-[#f05340]/80 group-hover:bg-white/10"
      }`}
      aria-hidden
    >
      <SiLaravel className="w-5 h-5" />
    </span>

    <span className="whitespace-nowrap">Laravel Websites</span>

    {activeTab === "laravel" && (
      <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 rounded-full bg-gradient-to-r from-[#f05340] to-[#c23a2a] shadow-sm" />
    )}
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
