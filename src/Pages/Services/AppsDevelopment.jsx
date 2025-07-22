import React from "react";
import {
  FaMobileAlt,
  FaCogs,
  FaSync,
  FaClock,
  FaCheck,
  FaTimes,
  FaArrowRight,
  FaApple,
  FaAndroid,
  FaGlobe,
  FaDatabase,
} from "react-icons/fa";

const appPlans = [
  {
    title: "Basic",
    price: "$799",
    features: [
      { text: "Basic UI/UX Design", icon: <FaMobileAlt />, included: true },
      { text: "Android OR iOS App", icon: <FaAndroid />, included: true },
      { text: "Core App Functionality", icon: <FaCogs />, included: true },
      { text: "API Integration (Limited)", icon: <FaDatabase />, included: false },
      { text: "App Store / Play Store Submission", icon: <FaGlobe />, included: false },
      { text: "Revisions: 2", icon: <FaSync />, included: true },
      { text: "Delivery Time: 10 Days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-blue-600 to-black",
    headerColor: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    title: "Standard",
    price: "$1499",
    features: [
      { text: "Custom UI/UX Design", icon: <FaMobileAlt />, included: true },
      { text: "Android & iOS Apps", icon: <FaApple />, included: true },
      { text: "Advanced Features & Animations", icon: <FaCogs />, included: true },
      { text: "API & Database Integration", icon: <FaDatabase />, included: true },
      { text: "App Store & Play Store Submission", icon: <FaGlobe />, included: true },
      { text: "Revisions: 4", icon: <FaSync />, included: true },
      { text: "Delivery Time: 14 Days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-orange-500 to-pink-600",
    headerColor: "bg-gradient-to-r from-orange-500 to-red-500",
  },
  {
    title: "Premium",
    price: "$2499",
    features: [
      { text: "Full Custom Cross-Platform App", icon: <FaMobileAlt />, included: true },
      { text: "iOS & Android Deployment", icon: <FaApple />, included: true },
      { text: "Complex Features & Real-time Sync", icon: <FaCogs />, included: true },
      { text: "Custom Admin Panel + API", icon: <FaDatabase />, included: true },
      { text: "End-to-End Store Management", icon: <FaGlobe />, included: true },
      { text: "Revisions: Unlimited", icon: <FaSync />, included: true },
      { text: "Delivery Time: 21 Days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-black to-gray-800",
    headerColor: "bg-gradient-to-r from-purple-600 to-indigo-700",
  },
];

const AppsDevelopment = () => {
  return (
    <section className="py-20 text-gray-800 bg-white dark:bg-black">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-wide text-orange-500 uppercase">
          Apps Development
        </h2>
        <h3 className="mt-2 text-4xl font-extrabold text-blue-700 md:text-4xl">
          CHOOSE YOUR PLAN
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-10 px-4 mx-auto max-w-7xl md:grid-cols-3">
        {appPlans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col justify-between overflow-hidden transition duration-300 transform bg-white shadow-2xl rounded-2xl hover:scale-105"
          >
            <div className={`${plan.headerColor} text-white text-center py-4 text-xl font-semibold`}>
              {plan.title}
            </div>

            <div className="py-6 text-center bg-white">
              <p className="text-5xl font-bold text-gray-800">{plan.price}</p>
            </div>

            <ul className="px-8 mb-6 space-y-4 text-sm">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className={`flex items-start gap-3 ${feature.included ? "text-gray-700" : "text-red-500"} font-medium`}
                >
                  <span className="text-xl">{feature.icon}</span>
                  {feature.text}
                </li>
              ))}
            </ul>

            <div className="px-6 pb-8 mt-auto text-center">
              <button
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

export default AppsDevelopment;
