import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaShoppingBasket,
  FaTshirt,
  FaLaptop,
  FaSpa,
  FaCouch,
  FaDumbbell,
  FaReact,
} from "react-icons/fa";
import { SiLaravel } from "react-icons/si";
import KeyFeatures from "./E_Commerce_KeyFeatures";
import ContactWithForm from "./ContactWithPhone";
import EcommerceFeature from "./EcommerceFeature";
import banner from "../../../../src/assets/ecommerce-banner.jpg";

// Services data
const services = [
  {
    title: "Organic Product Website",
    icon: <FaShoppingBasket className="text-4xl text-green-500" />,
    reactLink: "/react/organic",
    laravelLink: "/laravel/organic",
  },
  {
    title: "Fashion Website",
    icon: <FaTshirt className="text-4xl text-purple-500" />,
    reactLink: "/react/fashion",
    laravelLink: "/laravel/fashion",
  },
  {
    title: "Electronics/Gadget Website",
    icon: <FaLaptop className="text-4xl text-blue-500" />,
    reactLink: "/react/electronics",
    laravelLink: "/laravel/electronics",
  },
  {
    title: "Skin Care/Beauty/Jewelry Website",
    icon: <FaSpa className="text-4xl text-pink-500" />,
    reactLink: "/react/skincare",
    laravelLink: "/laravel/skincare",
  },
  {
    title: "Furniture Website",
    icon: <FaCouch className="text-4xl text-orange-500" />,
    reactLink: "/react/furniture",
    laravelLink: "/laravel/furniture",
  },
  {
    title: "Sports and Fitness Website",
    icon: <FaDumbbell className="text-4xl text-yellow-500" />,
    reactLink: "/react/sports",
    laravelLink: "/laravel/sports",
  },
];

const E_commerce_Page = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const params = new URLSearchParams(location.search);
  const initialTab = params.get("tab") || "laravel";

  const [activeTab, setActiveTab] = useState(initialTab);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`?tab=${tab}`, { replace: true });
  };

  return (
    <div className="min-h-screen px-6 pt-6 pb-6 bg-white dark:bg-black">
      {/* Banner Section */}
      <section className="w-full h-auto overflow-hidden rounded-xl">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src={banner}
          alt="E-commerce Banner"
          className="object-cover w-full h-full"
        />
      </section>

      {/* Services Section */}
      <div className="mx-auto text-center max-w-7xl">
        <h2 className="m-4 text-2xl font-bold text-black dark:text-white md:text-4xl">
          Choose Your Website
        </h2>

        <div className="flex flex-col items-center mb-12">
          <p className="max-w-2xl mx-auto mb-8 text-gray-600 dark:text-gray-300 leading-relaxed">
            We offer tailored e-commerce solutions built on your preferred technology stack.
            Choose between the dynamic, lightning-fast performance of <span className="font-semibold text-cyan-600 dark:text-cyan-400">React</span> or the robust, scalable architecture of <span className="font-semibold text-red-600 dark:text-red-400">Laravel</span>.
          </p>

          {/* Modern Segmented Tabs */}
          <div className="relative flex items-center p-1.5 bg-gray-100/80 dark:bg-zinc-900/80 backdrop-blur-md rounded-full shadow-inner border border-gray-200/50 dark:border-zinc-800/50 w-full max-w-md mx-auto">

            {/* React Tab */}
            <button
              role="tab"
              aria-selected={activeTab === "react"}
              onClick={() => handleTabChange("react")}
              className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm sm:text-base font-bold transition-colors duration-300 ${activeTab === "react" ? "text-white" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
            >
              {activeTab === "react" && (
                <motion.div
                  layoutId="active-ecommerce-tab"
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full shadow-lg shadow-cyan-500/30"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <FaReact className={`w-5 h-5 ${activeTab === "react" ? "text-white animate-[spin_10s_linear_infinite]" : "text-cyan-500"}`} />
                React Demo
              </span>
            </button>

            {/* Laravel Tab */}
            <button
              role="tab"
              aria-selected={activeTab === "laravel"}
              onClick={() => handleTabChange("laravel")}
              className={`relative z-10 flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm sm:text-base font-bold transition-colors duration-300 ${activeTab === "laravel" ? "text-white" : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                }`}
            >
              {activeTab === "laravel" && (
                <motion.div
                  layoutId="active-ecommerce-tab"
                  className="absolute inset-0 bg-gradient-to-r from-[#ff2d20] to-[#c22116] rounded-full shadow-lg shadow-red-500/30"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              )}
              <span className="relative z-20 flex items-center gap-2">
                <SiLaravel className={`w-5 h-5 ${activeTab === "laravel" ? "text-white" : "text-[#ff2d20]"}`} />
                Laravel Demo
              </span>
            </button>
          </div>
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
          className="grid grid-cols-1 gap-8 mx-auto max-w-7xl sm:grid-cols-2 lg:grid-cols-3"
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
              >
                <Link
                  to={link}
                  className="relative block p-8 text-center transition-all duration-300 border border-gray-200 shadow-lg group rounded-2xl bg-gradient-to-br from-white/70 to-white/30 backdrop-blur-lg hover:shadow-2xl hover:border-blue-300 hover:bg-blue-400"
                >
                  <div className="absolute inset-0 transition duration-500 opacity-0 rounded-2xl bg-gradient-to-tr from-blue-100 via-pink-100 to-transparent group-hover:opacity-60"></div>

                  <div className="relative flex items-center justify-center w-20 h-20 mx-auto mb-4 text-blue-600 transition-transform duration-300 rounded-full shadow-md bg-blue-50 group-hover:scale-110">
                    {service.icon}
                  </div>

                  <h3 className="relative mb-3 text-xl font-bold text-gray-800">
                    {service.title}
                  </h3>

                  <p className="mb-3 text-sm text-cyan-500 dark:text-gray-100">
                    Built with <span className="font-bold">{builtWith}</span>
                  </p>

                  <span className="relative inline-flex items-center gap-1 px-4 py-2 text-sm font-medium text-white transition-all rounded-full shadow bg-gradient-to-t from-[#006752] to-[#15C300] hover:shadow-lg hover:scale-105">
                    Explore More →
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      <KeyFeatures />
      <EcommerceFeature />
      <ContactWithForm activeTab={activeTab} />
    </div>
  );
};

export default E_commerce_Page;
