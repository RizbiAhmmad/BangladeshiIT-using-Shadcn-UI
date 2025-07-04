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
import Technologies from "../Home/Technologies";

const plans = [
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

const WebDevelopment = () => {
  const navigate = useNavigate();
  return (
    <section className="pt-20 bg-gradient-to-br from-white via-blue-50 to-white text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-red-500 uppercase tracking-wide">
          Web Development Services
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-gray-700">
          We provide customized and professional websites tailored to your
          business or personal needs. Whether you're running an online store,
          managing a hospital, or showcasing your portfolio — we offer complete
          development solutions for every niche.
        </p>
        {/* 💡 Add Services List Here */}
        <div className="m-6 flex flex-wrap justify-center gap-3 px-4 sm:px-8 md:px-16 lg:px-32">
          {[
            "E-commerce Website",
            "Textile / Export Import Website",
            "Hospital Management Website",
            "School Management Website",
            "Event Management Website",
            "Travel Agency Website",
            "Restaurant Website",
            "Business Website",
            "Blog / News Portal",
            "Portfolio Website",
            "Doctor Appointment Website",
            "Parlour Management",
            "Customized Website",
          ].map((item, idx) => (
            <span
              key={idx}
              className="w-full sm:w-auto text-center px-4 py-2 bg-gradient-to-r from-green-500 to-teal-600 text-white text-sm font-semibold rounded-full shadow-md hover:scale-105 transition"
            >
              {item}
            </span>
          ))}
        </div>

        <h3 className="text-4xl md:text-4xl font-extrabold text-blue-700 mt-2">
          CHOOSE YOUR PLAN
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-2xl overflow-hidden shadow-2xl bg-white hover:scale-105 transform transition duration-300"
          >
            <div
              className={`${plan.headerColor} text-white text-center py-4 text-xl font-semibold`}
            >
              {plan.title}
            </div>

            <div className="text-center py-6 bg-white">
              <p className="text-5xl font-bold text-gray-800">{plan.price}</p>
            </div>

            <ul className="px-8 space-y-4 text-sm mb-6">
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

            <div className="mt-auto text-center px-6 pb-8">
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
      <Technologies></Technologies>
    </section>
  );
};

export default WebDevelopment;
