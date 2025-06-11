import React from "react";
import {
  FaPenFancy,
  FaSearch,
  FaClipboardList,
  FaSync,
  FaClock,
  FaCheck,
  FaTimes,
  FaArrowRight,
  FaFileAlt,
} from "react-icons/fa";

const seoContentPlans = [
  {
    title: "Basic",
    price: "$199",
    features: [
      { text: "3 SEO-Optimized Blog Posts", icon: <FaFileAlt />, included: true },
      { text: "Keyword Research (Basic)", icon: <FaSearch />, included: true },
      { text: "Meta Titles & Descriptions", icon: <FaCheck />, included: true },
      { text: "Topic Suggestions", icon: <FaCheck />, included: true },
      { text: "Plagiarism-Free Guarantee", icon: <FaCheck />, included: true },
      { text: "Content Editing & Proofreading", icon: <FaTimes />, included: false },
      { text: "Revisions: 2", icon: <FaSync />, included: true },
      { text: "Delivery Time: 5 Days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-blue-600 to-black",
    headerColor: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    title: "Standard",
    price: "$399",
    features: [
      { text: "7 SEO-Optimized Articles (1000+ words)", icon: <FaFileAlt />, included: true },
      { text: "Advanced Keyword Research", icon: <FaSearch />, included: true },
      { text: "Internal Linking Strategy", icon: <FaClipboardList />, included: true },
      { text: "Meta Tags + Alt Tags", icon: <FaCheck />, included: true },
      { text: "Content Editing & Proofreading", icon: <FaCheck />, included: true },
      { text: "Plagiarism Report Included", icon: <FaCheck />, included: true },
      { text: "Revisions: 4", icon: <FaSync />, included: true },
      { text: "Delivery Time: 7 Days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-orange-500 to-pink-600",
    headerColor: "bg-gradient-to-r from-orange-500 to-red-500",
  },
  {
    title: "Premium",
    price: "$799",
    features: [
      { text: "15+ Long-form SEO Articles", icon: <FaFileAlt />, included: true },
      { text: "Comprehensive Keyword Strategy", icon: <FaSearch />, included: true },
      { text: "Content Strategy Plan", icon: <FaClipboardList />, included: true },
      { text: "Competitor Content Analysis", icon: <FaCheck />, included: true },
      { text: "Proofreading + Editing + Formatting", icon: <FaCheck />, included: true },
      { text: "Authority-building Content + Backlinks", icon: <FaCheck />, included: true },
      { text: "Revisions: Unlimited", icon: <FaSync />, included: true },
      { text: "Delivery Time: 10 Days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-black to-gray-800",
    headerColor: "bg-gradient-to-r from-purple-600 to-indigo-700",
  },
];

const SEOContentWriting = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-orange-500 uppercase tracking-wide">
          SEO & Content Writing
        </h2>
        <h3 className="text-4xl md:text-4xl font-extrabold text-blue-700 mt-2">
          CHOOSE YOUR PLAN
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {seoContentPlans.map((plan, index) => (
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

export default SEOContentWriting;
