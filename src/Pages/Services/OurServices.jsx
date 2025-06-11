import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AuroraText } from "../../components/magicui/aurora-text";

const demoServices = [
  {
    id: 1,
    title: "E-commerce Solution",
    link: "/services/ecommerce",
    description: "Launch your online store with secure, scalable, and user-friendly e-commerce solutions.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRl_M4pg8bGaEkBba2bCPhtou7GX9XCn4xw&s",
  },
  {
    id: 2,
    title: "Web Development",
    link: "/services/web-development",
    description: "Fast, responsive websites built with cutting-edge technologies and user experience in mind.",
    image: "https://5.imimg.com/data5/SELLER/Default/2023/8/332112112/KO/OT/LM/2672556/web-development-programming-resized.jpg",
  },
  {
    id: 3,
    title: "Apps Development",
    link: "/services/apps-development",
    description: "Powerful mobile apps for Android & iOS tailored to your business needs.",
    image: "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg",
  },
  {
    id: 4,
    title: "Digital Marketing",
    link: "/services/digital-marketing",
    description: "Grow your brand reach with targeted ads, email marketing, and online campaigns.",
    image: "https://static.vecteezy.com/system/resources/previews/005/732/506/non_2x/man-hand-holding-smart-phone-digital-marketing-word-with-icon-business-virtual-screen-free-photo.jpg",
  },
  {
    id: 5,
    title: "Graphic Design",
    link: "/services/graphic-design",
    description: "Eye-catching designs for branding, social media, packaging, and more.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT49FUKA3yasjKTGrszq9058w1i1oKQ8znw7g&s",
  },
  {
    id: 6,
    title: "Social Media Marketing",
    link: "/services/social-media-marketing",
    description: "Boost visibility and connect with your audience across all major platforms.",
    image: "https://bongiyo.com/public/medies/Feb_2025/1738609696.67a114207ee6a.png",
  },
  {
    id: 7,
    title: "SEO Content Writing",
    link: "/services/seo",
    description: "Improve your search rankings and drive traffic with proven SEO techniques.",
    image: "https://www.emproit.com/newimages/content-writing.png",
  },
  {
    id: 8,
    title: "Business Consulting",
    link: "/services/consulting",
    description: "Get expert advice and strategic guidance to grow and transform your business.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRhm1bMpkMABn4WLgvgfdhjYYXSZ3Mpv6BA&s",
  },
];

export default function OurServices() {
  const navigate = useNavigate();

  return (
    <section className="w-full px-6 py-12 bg-white text-black" id="services">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        💼 Our <AuroraText>Services</AuroraText>
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {demoServices.map((service, index) => (
          <motion.div
            key={service.id}
            className="rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300 bg-gradient-to-r from-green-500 to-red-600 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-200 line-clamp-2">{service.description}</p>

              <motion.button
                onClick={() => navigate(service.link)}
                className="w-full mt-5 py-3 rounded-lg font-semibold bg-white text-blue-600 hover:bg-gray-200 transition duration-300"
                whileTap={{ scale: 0.95 }}
              >
                Learn More 🚀
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
