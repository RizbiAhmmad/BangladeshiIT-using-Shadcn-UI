import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaChartLine,
  FaSync,
  FaClock,
  FaCheck,
  FaTimes,
  FaArrowRight,
  FaBullhorn,
  FaClipboardList,
} from "react-icons/fa";

const smmPlans = [
  {
    title: "Basic",
    price: "$249",
    features: [
      { text: "1 Platform (Facebook or Instagram)", icon: <FaFacebookF />, included: true },
      { text: "8 Posts / Month", icon: <FaClipboardList />, included: true },
      { text: "Basic Engagement", icon: <FaCheck />, included: true },
      { text: "Ad Campaign Setup", icon: <FaTimes />, included: false },
      { text: "Custom Graphics", icon: <FaTimes />, included: false },
      { text: "Performance Report", icon: <FaTimes />, included: false },
      { text: "Revisions: 2", icon: <FaSync />, included: true },
      { text: "Delivery Time: 7 Days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-blue-600 to-black",
    headerColor: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    title: "Standard",
    price: "$499",
    features: [
      { text: "2 Platforms (Facebook & Instagram)", icon: <FaInstagram />, included: true },
      { text: "15 Posts / Month", icon: <FaClipboardList />, included: true },
      { text: "Moderate Engagement + Responses", icon: <FaCheck />, included: true },
      { text: "Ad Campaign Setup & Management", icon: <FaBullhorn />, included: true },
      { text: "Custom Branded Graphics", icon: <FaCheck />, included: true },
      { text: "Monthly Performance Report", icon: <FaChartLine />, included: true },
      { text: "Revisions: 4", icon: <FaSync />, included: true },
      { text: "Delivery Time: 7 Days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-orange-500 to-pink-600",
    headerColor: "bg-gradient-to-r from-orange-500 to-red-500",
  },
  {
    title: "Premium",
    price: "$899",
    features: [
      { text: "Up to 4 Platforms", icon: <FaBullhorn />, included: true },
      { text: "30+ Custom Posts / Month", icon: <FaClipboardList />, included: true },
      { text: "Full Engagement & Community Management", icon: <FaCheck />, included: true },
      { text: "Advanced Ad Strategy & Analytics", icon: <FaChartLine />, included: true },
      { text: "Video + Graphic Content", icon: <FaCheck />, included: true },
      { text: "Detailed Weekly Reports", icon: <FaChartLine />, included: true },
      { text: "Revisions: Unlimited", icon: <FaSync />, included: true },
      { text: "Delivery Time: Ongoing Monthly", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-black to-gray-800",
    headerColor: "bg-gradient-to-r from-purple-600 to-indigo-700",
  },
];

const SocialMediaMarketing = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-orange-500 uppercase tracking-wide">
          Social Media Marketing
        </h2>
        <h3 className="text-4xl md:text-4xl font-extrabold text-blue-700 mt-2">
          CHOOSE YOUR PLAN
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {smmPlans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-2xl overflow-hidden shadow-2xl bg-white hover:scale-105 transform transition duration-300"
          >
            <div className={`${plan.headerColor} text-white text-center py-4 text-xl font-semibold`}>
              {plan.title}
            </div>

            <div className="text-center py-6 bg-white">
              <p className="text-5xl font-bold text-gray-800">{plan.price}</p>
            </div>

            <ul className="px-8 space-y-4 text-sm mb-6">
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

            <div className="mt-auto text-center px-6 pb-8">
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

export default SocialMediaMarketing;
