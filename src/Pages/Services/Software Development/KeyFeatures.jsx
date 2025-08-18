import React from 'react';
import { motion } from 'framer-motion';
import {
  FaStore,
  FaTag,
  FaBell,
  FaReceipt,
  FaFileInvoiceDollar,
  FaChartLine,
  FaMagic,
  FaCogs,
  FaRocket,
} from 'react-icons/fa';

const features = [
  {
    title: 'Multi-Business',
    description: 'Manage several shops and warehouses effortlessly.',
    icon: <FaStore className="text-3xl text-purple-600" />,
  },
  {
    title: 'Product Mgmt',
    description: 'Organize products by brand, category, sub-category, and units.',
    icon: <FaTag className="text-3xl text-pink-600" />,
  },
  {
    title: 'Smart Alerts',
    description: 'Stay informed with real-time notifications for customers, suppliers, and payments.',
    icon: <FaBell className="text-3xl text-yellow-500" />,
  },
  {
    title: 'Tax Ready',
    description: 'Fully compatible with GST, VAT, and custom tax groups.',
    icon: <FaReceipt className="text-3xl text-green-600" />,
  },
  {
    title: 'Custom Docs',
    description: 'Design and print invoices and product labels to match your brand.',
    icon: <FaFileInvoiceDollar className="text-3xl text-blue-600" />,
  },
  {
    title: 'Reports',
    description: 'Make data-driven decisions with comprehensive reporting tools.',
    icon: <FaChartLine className="text-3xl text-red-600" />,
  },
  {
    title: 'User-Friendly',
    description: 'Navigate with ease thanks to a clean, intuitive design.',
    icon: <FaMagic className="text-3xl text-indigo-600" />,
  },
  {
    title: 'Flexible Custom',
    description: 'Tailor the system to fit your unique business workflows.',
    icon: <FaCogs className="text-3xl text-orange-600" />,
  },
  {
    title: 'Quick Setup',
    description: 'Get started in just 3 simple steps with detailed documentation to guide you.',
    icon: <FaRocket className="text-3xl text-teal-600" />,
  },
];

const diagramVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const circleVariants = {
  hidden: { pathLength: 0 },
  visible: {
    pathLength: 1,
    transition: {
      duration: 1.5,
      ease: 'easeInOut',
    },
  },
};

const KeyFeatures = () => {
  return (
    <div className="relative flex flex-col items-center py-24 bg-white">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          🌟 Key Features
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-gray-600">
          ✅ Best Quality Guaranteed
        </p>
      </div>

      <motion.div
        className="relative w-full max-w-6xl mt-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={diagramVariants}
      >
        {/* Main Circle */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          variants={itemVariants}
        >
          <svg className="w-[600px] h-[600px] max-w-full" viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              stroke="#E2E8F0"
              strokeWidth="2"
              fill="none"
              variants={circleVariants}
            />
          </svg>
        </motion.div>

        {/* Feature Items with connections */}
        {features.map((feature, index) => {
          const angle = (360 / features.length) * index - 90;
          const radius = 250; 
          const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
          const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

          return (
            <motion.div
              key={index}
              className="absolute w-64 p-4 border border-gray-100 rounded-lg shadow-lg bg-gray-50"
              style={{
                top: `calc(${y}px)`,
                left: `calc(${x}px)`,
                transform: 'translate(-50%, -50%)',
              }}
              variants={itemVariants}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 bg-white rounded-full shadow-md">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {feature.title}
                </h3>
              </div>
              <p className="text-sm leading-snug text-gray-600">{feature.description}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default KeyFeatures;