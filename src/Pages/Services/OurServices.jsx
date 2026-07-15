import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AuroraText } from "../../components/magicui/aurora-text";
import consultingImage from "../../../src/assets/Consulting.jpg";
import ecommerceImage from "../../../src/assets/ECOMMERCE-SOLUTION.jpg";
import webdevelopmentImage from "../../../src/assets/web-devlopment.jpg";
import appdevelopmentImage from "../../../src/assets/app-development.jpg";
import digitalMarketingImage from "../../../src/assets/Digital-marketing.jpg";
import graphicImage from "../../../src/assets/Graphics-Design.jpg";
import seoImage from "../../../src/assets/SEO.jpg";

const demoServices = [
  {
    id: 1,
    title: "E-commerce Solution",
    link: "/services/ecommerce",
    description:
      "Launch your online store with secure, scalable, and user-friendly e-commerce solutions.",
    image: ecommerceImage,
  },
  {
    id: 2,
    title: "Web Development",
    link: "/services/web-development",
    description:
      "Fast, responsive websites built with cutting-edge technologies and user experience in mind.",
    image: webdevelopmentImage,
  },
  {
    id: 3,
    title: "Software Development",
    link: "/services/software-development",
    description:
      "Custom software solutions to streamline your business processes and enhance productivity.",
    image:
      "https://media.istockphoto.com/id/1803992649/vector/software-development-coding-process-concept-programming-testing-cross-platform-code-app-on.jpg?s=612x612&w=0&k=20&c=9JX_Uhk0YSIqakQEXiSjo5NutvD4C8XOGIMc1cGRhiM=",
  },
  {
    id: 4,
    title: "Apps Development",
    link: "/services/apps-development",
    description:
      "Powerful mobile apps for Android & iOS tailored to your business needs.",
    image: appdevelopmentImage,
  },
  {
    id: 5,
    title: "Digital Marketing",
    link: "/services/digital-marketing",
    description:
      "Grow your brand reach with targeted ads, email marketing, and online campaigns.",
    image: digitalMarketingImage,
  },
  {
    id: 6,
    title: "Graphic Design",
    link: "/services/graphic-design",
    description:
      "Eye-catching designs for branding, social media, packaging, and more.",
    image: graphicImage,
  },
  {
    id: 7,
    title: "Social Media Marketing",
    link: "/services/social-media-marketing",
    description:
      "Boost visibility and connect with your audience across all major platforms.",
    image:
      "https://bongiyo.com/public/medies/Feb_2025/1738609696.67a114207ee6a.png",
  },
  {
    id: 8,
    title: "SEO & Content Writing",
    link: "/services/seo",
    description:
      "Improve your search rankings and drive traffic with proven SEO techniques.",
    image: seoImage,
  },
  {
    id: 9,
    title: "Business Consulting",
    link: "/services/consulting",
    description:
      "Get expert advice and strategic guidance to grow and transform your business.",
    image: consultingImage,
  },
];

export default function OurServices() {
  const navigate = useNavigate();

  return (
    <section
      className="w-full px-6 py-12 text-black bg-white dark:bg-black dark:text-white"
      id="services"
    >
      <h2 className="mb-12 text-4xl font-bold text-center text-black bg-white dark:bg-black dark:text-white">
        Our <AuroraText>Services</AuroraText>
      </h2>

      <div className="grid max-w-6xl grid-cols-1 gap-10 mx-auto md:grid-cols-2 lg:grid-cols-3">
        {demoServices.map((service, index) => (
          <motion.div
            key={service.id}
            onClick={() => navigate(service.link)}
            className="group overflow-hidden cursor-pointer text-black border border-gray-200/50 hover:border-[#066938]/40 bg-white/70 backdrop-blur-md shadow-sm hover:shadow-2xl hover:shadow-[#066938]/10 rounded-3xl dark:bg-zinc-900/70 dark:border-zinc-800 dark:text-white dark:hover:border-green-500/40 transition-shadow duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.12 }}
            whileHover={{ y: -6, scale: 1.01, transition: { duration: 0.2, ease: "easeOut" } }}
          >
            <div className="overflow-hidden">
              <motion.img
                src={service.image}
                alt={service.title}
                className="object-cover w-full h-56 transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-8">
              <h3 className="mb-3 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#eb2127] to-[#ff512f]">
                {service.title}
              </h3>
              <p className="leading-relaxed text-gray-600 dark:text-gray-300 text-md line-clamp-2">
                {service.description}
              </p>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(service.link);
                }}
                className="relative cursor-pointer w-full px-5 py-3 mt-6 text-md font-semibold text-white 
             rounded-2xl overflow-hidden group/btn
             bg-gradient-to-r from-[#006752] to-[#15C300] 
             shadow-md shadow-green-500/30 transition-all duration-300 hover:shadow-green-500/50"
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Learn More <span className="transition-transform duration-300 group-hover/btn:translate-x-1"></span>
                </span>
                {/* Hover shine effect */}
                <span className="absolute inset-0 transition-transform duration-500 -translate-x-full bg-white opacity-20 group-hover/btn:translate-x-0"></span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
