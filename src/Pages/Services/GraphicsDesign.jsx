import React from "react";
import {
  FaPaintBrush,
  FaImage,
  FaLayerGroup,
  FaSync,
  FaClock,
  FaCheck,
  FaTimes,
  FaArrowRight,
  FaPenNib,
  FaVectorSquare,
} from "react-icons/fa";

const graphicPlans = [
  {
    title: "Basic",
    price: "$199",
    features: [
      { text: "Logo Design (2 Concepts)", icon: <FaPenNib />, included: true },
      { text: "Business Card Design", icon: <FaImage />, included: true },
      { text: "Social Media Banner", icon: <FaCheck />, included: true },
      { text: "Flyer / Poster Design", icon: <FaTimes />, included: false },
      { text: "Source File Included", icon: <FaTimes />, included: false },
      { text: "Brand Style Guide", icon: <FaTimes />, included: false },
      { text: "Revisions: 2", icon: <FaSync />, included: true },
      { text: "Delivery Time: 3 Days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-blue-600 to-black",
    headerColor: "bg-gradient-to-r from-blue-500 to-blue-700",
  },
  {
    title: "Standard",
    price: "$399",
    features: [
      { text: "Logo Design (4 Concepts)", icon: <FaPenNib />, included: true },
      { text: "Business Card + Letterhead", icon: <FaImage />, included: true },
      { text: "Flyer / Brochure Design", icon: <FaLayerGroup />, included: true },
      { text: "Social Media Kit", icon: <FaCheck />, included: true },
      { text: "Source Files Included", icon: <FaVectorSquare />, included: true },
      { text: "Brand Style Guide", icon: <FaTimes />, included: false },
      { text: "Revisions: 4", icon: <FaSync />, included: true },
      { text: "Delivery Time: 5 Days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-orange-500 to-pink-600",
    headerColor: "bg-gradient-to-r from-orange-500 to-red-500",
  },
  {
    title: "Premium",
    price: "$799",
    features: [
      { text: "Logo Design (Unlimited Concepts)", icon: <FaPenNib />, included: true },
      { text: "Complete Brand Identity Pack", icon: <FaImage />, included: true },
      { text: "Flyers, Posters, Brochures", icon: <FaLayerGroup />, included: true },
      { text: "Social Media & Ad Kit", icon: <FaCheck />, included: true },
      { text: "All Editable Source Files", icon: <FaVectorSquare />, included: true },
      { text: "Custom Brand Style Guide", icon: <FaPaintBrush />, included: true },
      { text: "Revisions: Unlimited", icon: <FaSync />, included: true },
      { text: "Delivery Time: 7 Days", icon: <FaClock />, included: true },
    ],
    buttonColor: "bg-gradient-to-r from-black to-gray-800",
    headerColor: "bg-gradient-to-r from-purple-600 to-indigo-700",
  },
];

const GraphicsDesign = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-white text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-orange-500 uppercase tracking-wide">
          Graphics Design
        </h2>
        <h3 className="text-4xl md:text-4xl font-extrabold text-blue-700 mt-2">
          CHOOSE YOUR PLAN
        </h3>
      </div>

      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-10">
        {graphicPlans.map((plan, index) => (
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

export default GraphicsDesign;
