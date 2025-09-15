import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AuroraText } from "../../components/magicui/aurora-text";

const demoServices = [
  {
    id: 1,
    title: "E-commerce Solution",
    link: "/services/ecommerce",
    description:
      "Launch your online store with secure, scalable, and user-friendly e-commerce solutions.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiRl_M4pg8bGaEkBba2bCPhtou7GX9XCn4xw&s",
  },
  {
    id: 2,
    title: "Web Development",
    link: "/services/web-development",
    description:
      "Fast, responsive websites built with cutting-edge technologies and user experience in mind.",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2023/8/332112112/KO/OT/LM/2672556/web-development-programming-resized.jpg",
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
    image:
      "https://riseuplabs.com/wp-content/uploads/2021/07/mobile-application-development-guidelines-riseuplabs.jpg",
  },
  {
    id: 5,
    title: "Digital Marketing",
    link: "/services/digital-marketing",
    description:
      "Grow your brand reach with targeted ads, email marketing, and online campaigns.",
    image:
      "https://static.vecteezy.com/system/resources/previews/005/732/506/non_2x/man-hand-holding-smart-phone-digital-marketing-word-with-icon-business-virtual-screen-free-photo.jpg",
  },
  {
    id: 6,
    title: "Graphic Design",
    link: "/services/graphic-design",
    description:
      "Eye-catching designs for branding, social media, packaging, and more.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT49FUKA3yasjKTGrszq9058w1i1oKQ8znw7g&s",
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
    image: "https://content.jdmagicbox.com/v2/comp/bhubaneshwar/t4/0674px674.x674.240619111857.s5t4/catalogue/magicscript-digital-pvt-ltd-hansapal-bhubaneshwar-digital-marketing-services-a64olw7g1z.jpg",
  },
  {
    id: 9,
    title: "Business Consulting",
    link: "/services/consulting",
    description:
      "Get expert advice and strategic guidance to grow and transform your business.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZRhm1bMpkMABn4WLgvgfdhjYYXSZ3Mpv6BA&s",
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
            className="overflow-hidden text-black transition duration-300 border hover:bg-green-100  border-[#066938] transform bg-white shadow-lg rounded-2xl hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="object-cover w-full h-56"
            />
            <div className="p-6">
              <h3 className="mb-2 text-2xl font-bold text-[#eb2127]">
                {service.title}
              </h3>
              <p className="text-gray-900 text-md line-clamp-2">
                {service.description}
              </p>

              <motion.button
                onClick={() => navigate(service.link)}
                className="relative w-full px-5 py-2.5 mt-5 text-md font-semibold text-white 
             rounded-full overflow-hidden group
             bg-gradient-to-t from-[#006752] to-[#15C300] 
             shadow-md transition-all duration-300"
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Learn More 🚀
                </span>

                {/* Hover shine effect */}
                <span className="absolute inset-0 transition-transform duration-500 -translate-x-full bg-white opacity-20 group-hover:translate-x-0"></span>
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
