import React from "react";
import {
  FaUserTie,
  FaLightbulb,
  FaClipboardList,
  FaSync,
  FaClock,
  FaCheck,
  FaTimes,
  FaArrowRight,
  FaChartLine,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const consultingPlans = [
  {
    title: "Starter",
    price: "$299",
    features: [
      { text: "1-on-1 Strategy Session (1 Hour)", icon: <FaUserTie />, included: true },
      { text: "Business Goal Assessment", icon: <FaLightbulb />, included: true },
      { text: "Action Plan (PDF)", icon: <FaClipboardList />, included: true },
      { text: "Follow-up Email Support (3 Days)", icon: <FaCheck />, included: true },
      { text: "Team Training Materials", icon: <FaTimes />, included: false },
      { text: "Ongoing Consulting", icon: <FaTimes />, included: false },
      { text: "Revisions: 1", icon: <FaSync />, included: true },
      { text: "Delivery Time: 3 Days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-blue-600 to-black",
    headerColor: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    title: "Professional",
    price: "$599",
    features: [
      { text: "3 Strategy Sessions (1 Hour Each)", icon: <FaUserTie />, included: true },
      { text: "Detailed Business Audit Report", icon: <FaChartLine />, included: true },
      { text: "Custom Growth Roadmap", icon: <FaClipboardList />, included: true },
      { text: "Follow-up Support (7 Days)", icon: <FaCheck />, included: true },
      { text: "Team Training Materials", icon: <FaCheck />, included: true },
      { text: "Ongoing Consulting (1 Week)", icon: <FaCheck />, included: true },
      { text: "Revisions: 3", icon: <FaSync />, included: true },
      { text: "Delivery Time: 7 Days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-orange-500 to-pink-600",
    headerColor: "bg-gradient-to-r from-orange-500 to-red-500",
  },
  {
    title: "Enterprise",
    price: "$1199",
    features: [
      { text: "Full Business Strategy Consulting (1 Month)", icon: <FaUserTie />, included: true },
      { text: "In-depth Industry Research", icon: <FaChartLine />, included: true },
      { text: "Custom Reports & Dashboards", icon: <FaClipboardList />, included: true },
      { text: "Ongoing Support & Adjustments", icon: <FaCheck />, included: true },
      { text: "Workshops & Team Training", icon: <FaCheck />, included: true },
      { text: "Unlimited Support & Reporting", icon: <FaCheck />, included: true },
      { text: "Revisions: Unlimited", icon: <FaSync />, included: true },
      { text: "Delivery Time: 15 Days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-black to-gray-800",
    headerColor: "bg-gradient-to-r from-purple-600 to-indigo-700",
  },
];

const ConsultingServices = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 text-gray-800 bg-white dark:bg-black">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-wide text-orange-500 uppercase">
          Business Consulting
        </h2>
        <h3 className="mt-2 text-4xl font-extrabold text-blue-700 md:text-4xl">
          CHOOSE YOUR PLAN
        </h3>
      </div>

      <div className="grid grid-cols-1 gap-10 px-4 mx-auto max-w-7xl md:grid-cols-3">
        {consultingPlans.map((plan, index) => (
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
              <button onClick={() => navigate("/contact")}
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

export default ConsultingServices;
