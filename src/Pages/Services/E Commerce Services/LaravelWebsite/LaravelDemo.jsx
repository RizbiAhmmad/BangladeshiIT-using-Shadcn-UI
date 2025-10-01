import { motion } from "framer-motion";
import { FaUserShield, FaUser } from "react-icons/fa";

const LaravelDemo = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-white dark:bg-black">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-10 text-3xl font-bold text-gray-800 md:text-4xl dark:text-white"
      >
        Laravel E-Commerce Login
      </motion.h1>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        {/* Admin Card */}
        <motion.div whileHover={{ scale: 1.05 }} className="w-full">
          <div className="p-6 text-center border shadow-md bg-blue-50 dark:bg-gray-800 rounded-xl">
            <FaUserShield className="mx-auto mb-4 text-5xl text-red-500" />
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Admin Demo
            </h2>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              <strong>Link:</strong>{" "}
              <a
                href="https://fashionlr.bangladeshiit.com/admin/dashboard"
                className="text-blue-600 underline"
              >
                Admin Login Link
              </a>
            </p>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              <strong>Email:</strong> admin@demo.com
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              <strong>Password:</strong> 123456
            </p>
            <button
              onClick={() =>
                (window.location.href =
                  "https://fashionlr.bangladeshiit.com/admin/dashboard")
              }
              className="px-5 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
            >
              Go to Admin Login
            </button>
          </div>
        </motion.div>

        {/* Customer Card */}
        <motion.div whileHover={{ scale: 1.05 }} className="w-full">
          <div className="p-6 text-center border shadow-md bg-blue-50 dark:bg-gray-800 rounded-xl">
            <FaUser className="mx-auto mb-4 text-5xl text-green-500" />
            <h2 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
              Customer Demo
            </h2>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              <strong>Link:</strong>{" "}
              <a
                href="https://fashionlr.bangladeshiit.com"
                className="text-blue-600 underline"
              >
                Customer Login Link
              </a>
            </p>
            <p className="mb-2 text-gray-700 dark:text-gray-300">
              <strong>Email:</strong> customer@demo.com
            </p>
            <p className="mb-6 text-gray-700 dark:text-gray-300">
              <strong>Password:</strong> 123456
            </p>
            <button
              onClick={() =>
                (window.location.href =
                  "https://fashionlr.bangladeshiit.com")
              }
              className="px-5 py-2 text-white bg-green-600 rounded-lg hover:bg-green-700"
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
