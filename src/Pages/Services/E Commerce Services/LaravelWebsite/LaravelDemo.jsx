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
import { useSearchParams } from "react-router-dom";

const demoData = {
  organic: {
    name: "Organic Shop",
    adminLink: "https://organiclr.bangladeshiit.com/admin/dashboard",
    customerLink: "https://organiclr.bangladeshiit.com",
    adminEmail: "01621-741799",
    customerEmail: "",
    adminPassword: "management@organic",
    customerPassword: "",
    adminColor: "bg-lime-600 hover:bg-lime-700",
    customerColor: "bg-emerald-600 hover:bg-emerald-700",
    icon: <FaLeaf className="text-lime-500" />,
  },
  fashion: {
    name: "Fashion Shop",
    adminLink: "https://fashionlr.bangladeshiit.com/admin/dashboard",
    customerLink: "https://fashionlr.bangladeshiit.com",
    adminEmail: "01621-741799",
    customerEmail: "",
    adminPassword: "management@fashion",
    customerPassword: "",
    adminColor: "bg-red-600 hover:bg-red-700",
    customerColor: "bg-green-600 hover:bg-green-700",
    icon: <FaTshirt className="text-pink-500" />,
  },
  electronics: {
    name: "Electronics Store",
    adminLink: "https://electronicslr.bangladeshiit.com/admin/dashboard",
    customerLink: "https://electronicslr.bangladeshiit.com",
    adminEmail: "01621-741799",
    customerEmail: "",
    adminPassword: "management@electronics",
    customerPassword: "",
    adminColor: "bg-indigo-600 hover:bg-indigo-700",
    customerColor: "bg-cyan-600 hover:bg-cyan-700",
    icon: <FaPlug className="text-indigo-500" />,
  },
  skincare: {
    name: "Skincare Store",
    adminLink: "https://skincarelr.bangladeshiit.com/admin/dashboard",
    customerLink: "https://skincarelr.bangladeshiit.com",
    adminEmail: "01621-741799",
    customerEmail: "",
    adminPassword: "management@skincare",
    customerPassword: "",
    adminColor: "bg-pink-600 hover:bg-pink-700",
    customerColor: "bg-rose-600 hover:bg-rose-700",
    icon: <FaSpa className="text-rose-500" />,
  },
  furniture: {
    name: "Furniture Shop",
    adminLink: "https://furniturelr.bangladeshiit.com/admin/dashboard",
    customerLink: "https://furniturelr.bangladeshiit.com",
    adminEmail: "01621-741799",
    customerEmail: "",
    adminPassword: "management@furniture",
    customerPassword: "",
    adminColor: "bg-amber-700 hover:bg-amber-800",
    customerColor: "bg-orange-600 hover:bg-orange-700",
    icon: <FaCouch className="text-amber-600" />,
  },
  sports: {
    name: "Sports Store",
    adminLink: "https://sportslr.bangladeshiit.com/admin/dashboard",
    customerLink: "https://sportslr.bangladeshiit.com",
    adminEmail: "01621-741799",
    customerEmail: "",
    adminPassword: "management@sports",
    customerPassword: "",
    adminColor: "bg-blue-600 hover:bg-blue-700",
    customerColor: "bg-yellow-600 hover:bg-yellow-700",
    icon: <FaDumbbell className="text-blue-500" />,
  },
};

const LaravelDemo = () => {
  const [searchParams] = useSearchParams();
  const typeFromURL = searchParams.get("type");
  const [selected, setSelected] = useState(typeFromURL || "organic");
  const current = demoData[selected];

  const showSelector = !typeFromURL; 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white py-22 dark:bg-black">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-6 text-xl font-bold text-gray-800 md:text-4xl dark:text-white"
      >
        Laravel E-Commerce Demo
      </motion.h1>

      {/*  Show selector only if no ?type= param */}
      {showSelector && (
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
      )}

      {/* Selected demo */}
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="mb-8 text-2xl font-bold text-gray-700 dark:text-gray-300"
      >
        {current.name}
      </motion.h2>

      {/* Admin + Customer Cards */}
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
              <a href={current.customerLink} className="text-blue-600 underline">
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

export default LaravelDemo;
