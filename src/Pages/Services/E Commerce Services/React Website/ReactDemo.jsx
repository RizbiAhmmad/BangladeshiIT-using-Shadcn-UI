import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserShield,
  FaUser,
  FaTshirt,
  FaLeaf,
  FaDumbbell,
  FaSpa,
  FaCouch,
  FaPlug,
} from "react-icons/fa";

const demoData = {
  organic: {
    name: "Organic Shop",
    adminLink: "https://organic.bangladeshiit.com/admin/dashboard",
    customerLink: "https://organic.bangladeshiit.com",
    adminEmail: "admin@organic.com",
    customerEmail: "customer@organic.com",
    adminPassword: "123456",
    customerPassword: "12345",
    adminColor: "bg-lime-600 hover:bg-lime-700",
    customerColor: "bg-emerald-600 hover:bg-emerald-700",
    icon: <FaLeaf className="text-lime-500" />,
  },
  fashion: {
    name: "Fashion Shop",
    adminLink: "https://fashion.bangladeshiit.com/admin/dashboard",
    customerLink: "https://fashion.bangladeshiit.com",
    adminEmail: "admin@demo.com",
    customerEmail: "customer@demo.com",
    adminPassword: "123456",
    customerPassword: "12345",
    adminColor: "bg-red-600 hover:bg-red-700",
    customerColor: "bg-green-600 hover:bg-green-700",
    icon: <FaTshirt className="text-pink-500" />,
  },
  electronics: {
    name: "Electronics Store",
    adminLink: "https://electronics.bangladeshiit.com/admin/dashboard",
    customerLink: "https://electronics.bangladeshiit.com",
    adminEmail: "admin@electronics.com",
    customerEmail: "customer@electronics.com",
    adminPassword: "123456",
    customerPassword: "12345",
    adminColor: "bg-indigo-600 hover:bg-indigo-700",
    customerColor: "bg-cyan-600 hover:bg-cyan-700",
    icon: <FaPlug className="text-indigo-500" />,
  },
  skincare: {
    name: "Skincare Store",
    adminLink: "https://skincare.bangladeshiit.com/admin/dashboard",
    customerLink: "https://skincare.bangladeshiit.com",
    adminEmail: "admin@skincare.com",
    customerEmail: "customer@skincare.com",
    adminPassword: "123456",
    customerPassword: "12345",
    adminColor: "bg-pink-600 hover:bg-pink-700",
    customerColor: "bg-rose-600 hover:bg-rose-700",
    icon: <FaSpa className="text-rose-500" />,
  },
  furniture: {
    name: "Furniture Shop",
    adminLink: "https://furniture.bangladeshiit.com/admin/dashboard",
    customerLink: "https://furniture.bangladeshiit.com",
    adminEmail: "admin@furniture.com",
    customerEmail: "customer@furniture.com",
    adminPassword: "123456",
    customerPassword: "12345",
    adminColor: "bg-amber-700 hover:bg-amber-800",
    customerColor: "bg-orange-600 hover:bg-orange-700",
    icon: <FaCouch className="text-amber-600" />,
  },
  sports: {
    name: "Sports Store",
    adminLink: "https://sports.bangladeshiit.com/admin/dashboard",
    customerLink: "https://sports.bangladeshiit.com",
    adminEmail: "admin@sports.com",
    customerEmail: "customer@sports.com",
    adminPassword: "123456",
    customerPassword: "12345",
    adminColor: "bg-blue-600 hover:bg-blue-700",
    customerColor: "bg-yellow-600 hover:bg-yellow-700",
    icon: <FaDumbbell className="text-blue-500" />,
  },
};

const ReactDemo = () => {
  const [selected, setSelected] = useState("organic");
  const current = demoData[selected];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white py-22 dark:bg-black">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-6 text-xl font-bold text-gray-800 md:text-4xl dark:text-white"
      >
        React E-Commerce Demo
      </motion.h1>

      {/* Custom Fancy Selector */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="grid justify-center w-full max-w-3xl grid-cols-2 gap-4 mb-10 md:grid-cols-3"
      >
        {Object.entries(demoData).map(([key, data]) => (
          <motion.button
            key={key}
            onClick={() => setSelected(key)}
            whileHover={{ scale: 1.05 }}
            className={`flex items-center justify-center gap-2 w-full sm:w-[48%] lg:w-auto px-5 py-3 rounded-xl font-medium shadow-md border-2 transition-all duration-300 ${
              selected === key
                ? "border-red-500 bg-white dark:bg-gray-800 text-red-600 dark:text-white"
                : "border-gray-300 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:border-red-400"
            }`}
          >
            {data.icon}
            <span className="text-sm md:text-base">{data.name}</span>
          </motion.button>
        ))}
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mb-8 text-2xl font-bold text-gray-700 dark:text-gray-300"
      >
        {current.name}
      </motion.h2>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {/* Admin Card */}
        <motion.div whileHover={{ scale: 1.05 }} className="w-full">
          <div className="p-6 text-center border shadow-md bg-blue-50 dark:bg-gray-800 rounded-xl backdrop-blur-md">
            <FaUserShield className="mx-auto mb-4 text-5xl text-red-500" />
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Admin Demo
            </h3>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              <strong>Link:</strong>{" "}
              <a href={current.adminLink} className="text-blue-600 underline">
                Admin Login
              </a>
            </p>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              <strong>Email:</strong> {current.adminEmail}
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              <strong>Password:</strong> {current.adminPassword}
            </p>
            <button
              onClick={() => (window.location.href = current.adminLink)}
              className={`px-5 py-2 text-white rounded-lg ${current.adminColor}`}
            >
              Go to Admin Login
            </button>
          </div>
        </motion.div>

        {/* Customer Card */}
        <motion.div whileHover={{ scale: 1.05 }} className="w-full">
          <div className="p-6 text-center border shadow-md bg-blue-50 dark:bg-gray-800 rounded-xl backdrop-blur-md">
            <FaUser className="mx-auto mb-4 text-5xl text-green-500" />
            <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Customer Demo
            </h3>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              <strong>Link:</strong>{" "}
              <a
                href={current.customerLink}
                className="text-blue-600 underline"
              >
                Customer Login
              </a>
            </p>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              <strong>Email:</strong> {current.customerEmail}
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              <strong>Password:</strong> {current.customerPassword}
            </p>
            <button
              onClick={() => (window.location.href = current.customerLink)}
              className={`px-5 py-2 text-white rounded-lg ${current.customerColor}`}
            >
              Go to Customer Login
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReactDemo;
