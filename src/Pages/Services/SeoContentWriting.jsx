import React from "react";
import {
  FaSearch,
  FaClipboardList,
  FaChartLine,
  FaSync,
  FaClock,
  FaCheck,
  FaArrowRight,
  FaGlobe,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const seoPlans = [
  {
    title: "Basic",
    price: "৳20,000",
    features: [
      { text: "SEO Audit", icon: <FaSearch />, included: true },
      { text: "5 Keywords", icon: <FaClipboardList />, included: true },
      { text: "Competitor Analysis", icon: <FaChartLine />, included: true },
      { text: "On-page Optimization (up to 3 pages)", icon: <FaCheck />, included: true },
      { text: "Technical SEO (basic)", icon: <FaCheck />, included: true },
      { text: "1 Guest Posting Strategy", icon: <FaCheck />, included: true },
      { text: "Local SEO Focus", icon: <FaCheck />, included: true },
      { text: "30+ Backlinks", icon: <FaChartLine />, included: true },
      { text: "Delivery: 10 days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-green-500 to-teal-600",
    headerColor: "bg-gradient-to-r from-green-600 to-emerald-700",
  },
  {
    title: "Standard",
    price: "৳35,000",
    features: [
      { text: "SEO Audit", icon: <FaSearch />, included: true },
      { text: "10 Keywords", icon: <FaClipboardList />, included: true },
      { text: "Competitor Analysis", icon: <FaChartLine />, included: true },
      { text: "On-page Optimization (up to 5–7 pages)", icon: <FaCheck />, included: true },
      { text: "Technical SEO", icon: <FaCheck />, included: true },
      { text: "Google Search Console + Analytics Setup", icon: <FaCheck />, included: true },
      { text: "Off-page Strategy (70+ backlinks)", icon: <FaChartLine />, included: true },
      { text: "2 Guest Posts", icon: <FaCheck />, included: true },
      { text: "National SEO Focus", icon: <FaCheck />, included: true },
      { text: "Delivery: 14 days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-orange-500 to-pink-600",
    headerColor: "bg-gradient-to-r from-orange-500 to-red-500",
  },
  {
    title: "Premium",
    price: "৳50,000",
    features: [
      { text: "SEO Audit", icon: <FaSearch />, included: true },
      { text: "15 Keywords", icon: <FaClipboardList />, included: true },
      { text: "Competitor Analysis", icon: <FaChartLine />, included: true },
      { text: "Full On-page + Off-page Optimization", icon: <FaCheck />, included: true },
      { text: "Advanced Technical SEO", icon: <FaCheck />, included: true },
      { text: "Content Optimization & Internal Linking", icon: <FaCheck />, included: true },
      { text: "High-Quality Backlinks (150+)", icon: <FaChartLine />, included: true },
      { text: "3–5 Guest Posts", icon: <FaCheck />, included: true },
      { text: "International/Global SEO Focus", icon: <FaGlobe />, included: true },
      { text: "Priority Support", icon: <FaSync />, included: true },
      { text: "Delivery: 21–30 days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-black to-gray-800",
    headerColor: "bg-gradient-to-r from-purple-600 to-indigo-700",
  },
];

const SEOContentWriting = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-red-500 uppercase tracking-wide">
          SEO & Content Writing Services
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-gray-700">
          Boost your website visibility, rank higher in Google, and drive targeted traffic with our strategic SEO packages tailored for businesses in Bangladesh.
        </p>
        <h3 className="text-4xl md:text-4xl font-extrabold text-blue-700 mt-4">
          CHOOSE YOUR PLAN
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {seoPlans.map((plan, index) => (
          <div
            key={index}
            className="flex flex-col justify-between rounded-2xl overflow-hidden shadow-2xl bg-white hover:scale-105 transform transition duration-300"
          >
            <div className={`${plan.headerColor} text-white text-center py-4 text-xl font-semibold`}>
              {plan.title}
            </div>

            <div className="text-center py-6 bg-white">
              <p className="text-4xl font-bold text-gray-800">{plan.price}</p>
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

export default SEOContentWriting;
