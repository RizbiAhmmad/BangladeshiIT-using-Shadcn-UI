import React from "react";
import { useNavigate } from "react-router-dom";

import {
  FaArrowRight,
  FaShoppingCart,
  FaCreditCard,
  FaCogs,
  FaMobileAlt,
  FaDatabase,
  FaSync,
  FaClock,
  FaGlobe,
  FaPhone,
  FaUsers,
  FaTags,
  FaComments,
  FaListAlt,
  FaEnvelope,
  FaChartLine,
} from "react-icons/fa";

const ecommercePlans = [
  {
    title: "Basic",
    price: "৳15,000",
    features: [
      {
        text: "Pre-designed template website",
        icon: <FaGlobe />,
        included: true,
      },
      { text: "Up to 10 Products", icon: <FaShoppingCart />, included: true },
      { text: "Basic SEO Setup", icon: <FaChartLine />, included: true },
      { text: "Admin Dashboard", icon: <FaCogs />, included: true },
      {
        text: "Payment Gateway Integration",
        icon: <FaCreditCard />,
        included: true,
      },
      {
        text: "Mobile Responsive Design",
        icon: <FaMobileAlt />,
        included: true,
      },
      {
        text: "Contact Form / WhatsApp Chat",
        icon: <FaPhone />,
        included: true,
      },
      { text: "Technical Support: 1 Month", icon: <FaSync />, included: true },
      { text: "Delivery Time: 7 Days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-green-500 to-teal-600",
    headerColor: "bg-gradient-to-r from-green-600 to-emerald-700",
  },
  {
    title: "Standard",
    price: "৳50,000",
    features: [
      { text: "Custom-designed Homepage", icon: <FaGlobe />, included: true },
      { text: "Up to 30 Products", icon: <FaShoppingCart />, included: true },
      {
        text: "Secure Payment Gateway",
        icon: <FaCreditCard />,
        included: true,
      },
      { text: "Admin Dashboard", icon: <FaCogs />, included: true },
      {
        text: "Advanced SEO Optimization",
        icon: <FaChartLine />,
        included: true,
      },
      { text: "Coupon/Discount Code System", icon: <FaTags />, included: true },
      {
        text: "Product Categories & Filters",
        icon: <FaListAlt />,
        included: true,
      },
      { text: "Social Media Integration", icon: <FaUsers />, included: true },
      { text: "Google Analytics Setup", icon: <FaEnvelope />, included: true },
      {
        text: "Inventory & Order Management",
        icon: <FaDatabase />,
        included: true,
      },
      { text: "Technical Support: 2 Months", icon: <FaSync />, included: true },
      { text: "Delivery Time: 10 Days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-orange-500 to-pink-600",
    headerColor: "bg-gradient-to-r from-orange-500 to-red-500",
  },
  {
    title: "Premium",
    price: "৳1,00,000 – ৳3,00,000",
    features: [
      { text: "Full Custom UI/UX Design", icon: <FaGlobe />, included: true },
      { text: "Unlimited Products", icon: <FaShoppingCart />, included: true },
      {
        text: "Multi-vendor Capability (Optional)",
        icon: <FaUsers />,
        included: true,
      },
      {
        text: "Advanced Payment System",
        icon: <FaCreditCard />,
        included: true,
      },
      { text: "Fully Custom Admin Panel", icon: <FaCogs />, included: true },
      {
        text: "Wishlist, Reviews, Filters",
        icon: <FaComments />,
        included: true,
      },
      {
        text: "Inventory & Order Management",
        icon: <FaDatabase />,
        included: true,
      },
      {
        text: "ERP or POS Integration (Optional)",
        icon: <FaDatabase />,
        included: true,
      },
      {
        text: "Email Marketing Integration",
        icon: <FaEnvelope />,
        included: true,
      },
      {
        text: "Advanced SEO + Speed Optimization",
        icon: <FaChartLine />,
        included: true,
      },
      {
        text: "Ongoing Support: 6–12 Months",
        icon: <FaSync />,
        included: true,
      },
      { text: "Delivery Time: 2 Months", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-black to-gray-800",
    headerColor: "bg-gradient-to-r from-purple-600 to-indigo-700",
  },
];

const EcommerceSolutions = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 text-gray-800 bg--white dark:bg-black">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-wide text-red-500 uppercase">
          E-Commerce Solutions
        </h2>
        <p className="max-w-3xl mx-auto mt-4 text-base text-gray-700 md:text-lg dark:text-white">
          We create dynamic and conversion-optimized E-commerce websites that
          deliver a smooth shopping experience. Whether you're selling 10
          products or 50,000, our platforms are built to scale, perform, and
          keep your customers engaged across all devices.
        </p>

        <h3 className="mt-4 text-4xl font-extrabold text-blue-700 md:text-4xl">
          CHOOSE YOUR PLAN
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-10 px-4 mx-auto max-w-7xl md:grid-cols-3">
        {ecommercePlans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col justify-between overflow-hidden transition duration-300 transform bg-white shadow-2xl rounded-2xl hover:scale-105"
          >
            <div
              className={`${plan.headerColor} text-white text-center py-4 text-xl font-semibold`}
            >
              {plan.title}
            </div>

            <div className="py-6 text-center bg-white">
              <p className="text-4xl font-bold text-gray-800">{plan.price}</p>
            </div>

            <ul className="px-8 mb-6 space-y-4 text-sm">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 ${
                    feature.included ? "text-gray-700" : "text-red-500"
                  } font-medium`}
                >
                  <span className="text-xl">{feature.icon}</span>
                  {feature.text}
                </li>
              ))}
            </ul>

            <div className="px-6 pb-8 mt-auto text-center">
              <button
                onClick={() => navigate("/contact")}
                className={`${plan.buttonColor} text-white px-6 py-3 rounded-xl w-full font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition`}
              >
                Get Started <FaArrowRight />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EcommerceSolutions;
