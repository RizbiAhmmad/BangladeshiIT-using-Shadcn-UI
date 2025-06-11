import React from "react";
import {
  FaBullhorn,
  FaSearch,
  FaChartLine,
  FaSync,
  FaClock,
  FaCheck,
  FaTimes,
  FaArrowRight,
  FaGlobe,
  FaEnvelopeOpenText,
  FaUsers,
} from "react-icons/fa";

const marketingPlans = [
  {
    title: "Basic",
    price: "$399",
    features: [
      { text: "Social Media Setup & Optimization", icon: <FaBullhorn />, included: true },
      { text: "Basic SEO Implementation", icon: <FaSearch />, included: true },
      { text: "Email Campaign (1 campaign)", icon: <FaEnvelopeOpenText />, included: true },
      { text: "Content Strategy", icon: <FaTimes />, included: false },
      { text: "Audience Targeting", icon: <FaUsers />, included: false },
      { text: "Monthly Analytics Report", icon: <FaChartLine />, included: false },
      { text: "Revisions: 2", icon: <FaSync />, included: true },
      { text: "Delivery Time: 5 Days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-blue-600 to-black",
    headerColor: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    title: "Standard",
    price: "$799",
    features: [
      { text: "Full Social Media Management", icon: <FaBullhorn />, included: true },
      { text: "Advanced SEO & Keyword Research", icon: <FaSearch />, included: true },
      { text: "Email Campaigns (3 per month)", icon: <FaEnvelopeOpenText />, included: true },
      { text: "Content Creation Strategy", icon: <FaGlobe />, included: true },
      { text: "Audience Targeting & Ads", icon: <FaUsers />, included: true },
      { text: "Monthly Performance Reports", icon: <FaChartLine />, included: true },
      { text: "Revisions: 4", icon: <FaSync />, included: true },
      { text: "Delivery Time: 7 Days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-orange-500 to-pink-600",
    headerColor: "bg-gradient-to-r from-orange-500 to-red-500",
  },
  {
    title: "Premium",
    price: "$1299",
    features: [
      { text: "Custom Digital Strategy", icon: <FaBullhorn />, included: true },
      { text: "Full SEO Audit & Optimization", icon: <FaSearch />, included: true },
      { text: "Weekly Email Campaigns", icon: <FaEnvelopeOpenText />, included: true },
      { text: "Branded Content Creation", icon: <FaGlobe />, included: true },
      { text: "Advanced Ads & Retargeting", icon: <FaUsers />, included: true },
      { text: "Detailed Weekly Reports", icon: <FaChartLine />, included: true },
      { text: "Revisions: Unlimited", icon: <FaSync />, included: true },
      { text: "Delivery Time: 10 Days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-black to-gray-800",
    headerColor: "bg-gradient-to-r from-purple-600 to-indigo-700",
  },
];

const DigitalMarketing = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-orange-500 uppercase tracking-wide">
          Digital Marketing
        </h2>
        <h3 className="text-4xl md:text-4xl font-extrabold text-blue-700 mt-2">
          CHOOSE YOUR PLAN
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {marketingPlans.map((plan, index) => (
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

export default DigitalMarketing;
