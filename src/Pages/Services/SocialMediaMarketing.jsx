import React from "react";
import {
  FaChartLine,
  FaSync,
  FaCheck,
  FaArrowRight,
  FaBullhorn,
  FaComments,
  FaClipboardList,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const bdSocialPlans = [
  {
    title: "Basic",
    price: "৳7,000",
    features: [
      { text: "1 Social Media Platform", icon: <FaBullhorn />, included: true },
      { text: "12 Posts (Static or Carousel)", icon: <FaClipboardList />, included: true },
      { text: "Caption writing & hashtag research", icon: <FaCheck />, included: true },
      { text: "Post scheduling", icon: <FaCheck />, included: true },
      { text: "Monthly report", icon: <FaChartLine />, included: true },
      { text: "1 revision included", icon: <FaSync />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-green-500 to-teal-600",
    headerColor: "bg-gradient-to-r from-green-600 to-emerald-700",
  },
  {
    title: "Standard",
    price: "৳10,000",
    features: [
      { text: "2 Social Media Platforms", icon: <FaBullhorn />, included: true },
      { text: "30 Posts (Static + Stories + Reels)", icon: <FaClipboardList />, included: true },
      { text: "Caption, hashtags, scheduling", icon: <FaCheck />, included: true },
      { text: "Page/channel evaluation", icon: <FaBullhorn />, included: true },
      { text: "Monthly content plan", icon: <FaChartLine />, included: true },
      { text: "Monthly report & engagement tips", icon: <FaChartLine />, included: true },
      { text: "Revisions included", icon: <FaSync />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-orange-500 to-pink-600",
    headerColor: "bg-gradient-to-r from-orange-500 to-red-500",
  },
  {
    title: "Premium",
    price: "৳20,000",
    features: [
      { text: "4 Social Media Platforms", icon: <FaBullhorn />, included: true },
      { text: "40 Posts (Static + Stories + Reels)", icon: <FaClipboardList />, included: true },
      { text: "Daily Story Uploads", icon: <FaComments />, included: true },
      { text: "Full content calendar", icon: <FaChartLine />, included: true },
      { text: "Organic growth plan", icon: <FaChartLine />, included: true },
      { text: "Engagement with followers (comments, DMs)", icon: <FaComments />, included: true },
      { text: "Weekly Reporting & insights", icon: <FaChartLine />, included: true },
      { text: "Unlimited revisions", icon: <FaSync />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-black to-gray-800",
    headerColor: "bg-gradient-to-r from-purple-600 to-indigo-700",
  },
];

const SocialMediaMarketing = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-red-500 uppercase tracking-wide">
          Social Media Marketing
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-gray-700">
          From content creation to engagement, we manage your social media presence with a data-driven strategy that ensures consistent growth and audience connection.
        </p>
        <h3 className="text-4xl md:text-4xl font-extrabold text-blue-700 mt-4">
          CHOOSE YOUR PLAN
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {bdSocialPlans.map((plan, index) => (
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
    </section>
  );
};

export default SocialMediaMarketing;
