import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-screen bg-gradient-to-b from-indigo-900 via-purple-900 to-indigo-900 overflow-hidden text-white flex items-center justify-center px-6">
      {/* Stars Background */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            initial={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Moon on Right */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="absolute top-10 right-10 md:top-16 md:right-16 w-24 h-24 md:w-32 md:h-32 rounded-full z-10"
        style={{
          background: "radial-gradient(circle at 30% 30%, #f0f0f0, #aaa)",
          boxShadow:
            "inset -6px -6px 12px rgba(255,255,255,0.3), inset 6px 6px 12px rgba(0,0,0,0.2)",
          border: "2px solid rgba(255,255,255,0.1)",
        }}
      >
        {/* Craters */}
        <div
          className="absolute rounded-full bg-gray-300 opacity-50"
          style={{ width: "10px", height: "10px", top: "25%", left: "20%" }}
        ></div>
        <div
          className="absolute rounded-full bg-gray-400 opacity-40"
          style={{ width: "8px", height: "8px", top: "55%", left: "60%" }}
        ></div>
        <div
          className="absolute rounded-full bg-gray-500 opacity-30"
          style={{ width: "6px", height: "6px", top: "35%", left: "70%" }}
        ></div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-20 flex flex-col items-center text-center"
      >
        <h1 className="text-[100px] md:text-[140px] font-extrabold text-white drop-shadow-xl">
          404
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-gray-200 mb-4">
          Lost in the galaxy...
        </p>
        <p className="text-gray-400 mb-6">
          The page you're looking for is floating in space.
        </p>

        {/* Go Home Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/")}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full flex items-center gap-2 font-medium shadow-lg transition"
        >
          <FaHome /> Go Home
        </motion.button>
      </motion.div>
    </div>
  );
}
